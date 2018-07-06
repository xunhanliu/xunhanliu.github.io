// This depends on playground.js having setup the GLOBAL object
  function runTrayState() {
    // Set up t-SNE and start it running.
    var state = GLOBALS.trayState;
    var points = state.demo.generator.apply(null, state.demoParams);
    var canvas = d3.select("#tray-content canvas").node()

    // if there was already a playground demo going, lets destroy it and make a new one
    if(GLOBALS.trayDemo) {
      GLOBALS.trayDemo.destroy();
      delete GLOBALS.trayDemo;
    }
    GLOBALS.trayDemo = demoMaker(points, canvas, state, function(step) {
      d3.select("#tray-controls .step").text(step);
      if(step >= state.stepLimit && !GLOBALS.trayUnpausedBefore) {
        setTrayRunning(false)
      }
    })

    GLOBALS.trayUnpausedBefore = false;
    setTrayRunning(true);
  }

  function updateTraySliders() {
    // we regenerate all the sliders from scratch
    // we modify the global tray state when a slider is modified
    var state = GLOBALS.trayState;
    var dataSliders = d3.select('#tray-data-sliders');
    dataSliders.html('');
    state.demo.options.map(function(option, i) {
      var value = state.demoParams[i];
      var slider = makeTraySlider(dataSliders.node(), option.name,
        option.min, option.max, value, function() {
          // when this one updates we change the appropriate state
          GLOBALS.trayState.demoParams[i] = +slider.value
          runTrayState();
        });
    });

    var tsneSliders = d3.select('#tray-tsne-sliders');
    tsneSliders.html('');
    var perpSlider = makeTraySlider(tsneSliders.node(), "Perplexity",
        1, 100, state.perplexity, function() {
          GLOBALS.trayState.perplexity = perpSlider.value
          runTrayState();
        });

    var epsSlider = makeTraySlider(tsneSliders.node(), "Epsilon",
        1, 20, state.epsilon, function() {
          GLOBALS.trayState.epsilon = epsSlider.value
          runTrayState();
        });

  }

  function makeTraySlider(container, name, min, max, start, changeCallback) {
    var dis = d3.select(container)
    dis.append("span").classed("slider-label-" + name, true)
      .text(name + ' ')
    var value = dis.append("span").classed("slider-value-" + name, true)
      .text(start)

    var slider = dis.append("input")
      .attr("type", "range")
      .attr("min", min)
      .attr("max", max)
      .attr("value", start)
      .on("change", changeCallback)
      .on("input", function() {
        value.text(slider.node().value);
      })
    return slider.node();
  }

  /* Activate the tray */
  function updateStateFromFigure(figure, example, el) {
    var y = el.getBoundingClientRect().top;
    var demo = demosByName[figure.dataset];
    var state = {
      demo: demos[demo.index],
      demoParams: figure.params.map(function(d) { return d}),
      perplexity: example.perplexity,
      epsilon: example.epsilon,
      stepLimit: example.step
    }
    GLOBALS.trayState = state;
    runTrayState()
    updateTraySliders()
    d3.select("#tray-container").classed("modal", true)
    GLOBALS.trayOpen = true;
  }

  d3.select("body").on("keydown", function() {
    if(d3.event.keyCode === 27) {
      setTrayRunning(false)
      d3.select("#tray-container").classed("modal", false);
      d3.selectAll(".runner").classed("selected", false);
    }
  })
  d3.select("#tray-close").on("click", function() {
    setTrayRunning(false);
    GLOBALS.trayOpen = false;
    d3.select("#tray-container").classed("modal", false)
    d3.selectAll(".runner").classed("selected", false);
  })

  /* Tray Controls */
  var trayPlay = d3.select("#tray-controls .play-pause")
  function setTrayRunning(r) {
    GLOBALS.running = r;
    if (GLOBALS.running) {
      GLOBALS.trayDemo.unpause();
      trayPlay
        .classed("playing", true)
        .classed("paused", false);
    } else {
      GLOBALS.trayDemo.pause();
      trayPlay
        .classed("playing", false)
        .classed("paused", true);
    }
  }

  // Hook up play / pause / restart buttons.
  trayPlay.on("click", function() {
    GLOBALS.trayUnpausedBefore = true;
    setTrayRunning(!GLOBALS.running);
  });

  var trayRestart = d3.select("#tray-controls .restart")
    .on("click", function() {
      runTrayState();
    })

  d3.select(window).on("scroll.tray", function() {
    if(GLOBALS.trayOpen) {
      if(scrollY < 1000) {
        setTrayRunning(false);
        GLOBALS.trayOpen = false;
        d3.select("#tray-container").classed("modal", false);
        d3.selectAll(".runner").classed("selected", false);
      }
    }
  });
  
 