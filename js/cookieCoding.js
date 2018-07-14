function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return ""
}

function setCookie(c_name,value,expiredays)  //һ�Ӿ���һ��
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : "; expires="+exdate.toGMTString());
}

function checkCookie()
{
    var username=getCookie('username')
    if (username!=null && CodingJS.myCoding(username).toString()==="68f727115522736adc310087036bcaf201922b6b")
    {
        //alert('Welcome again '+username+'!');
    }
    else
    {
        while(1) {
            username = prompt('Please enter your name:', "");
            if (username != null && username != "") {
                var buf=CodingJS.myCoding(username).toString();
                if( CodingJS.myCoding(buf).toString()=="68f727115522736adc310087036bcaf201922b6b"){
                    setCookie('username', buf, 1);
                    break;
                }
            }
        }
    }
}