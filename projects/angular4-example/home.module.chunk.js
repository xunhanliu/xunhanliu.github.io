webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/business/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/business/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * 主页路由
 */
var homeRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */] }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(homeRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/business/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"c-content-inner-not-bg\">\n    <div class=\"row  c-mb15\" [hidden]=\"userTipClose\">\n        <div class=\"col-md-12\">\n            <div class=\"card c-card\">\n                <div class=\"card-body\">\n                    <i class=\"fa fa-bullhorn fa-fw text-danger\"></i> <strong class=\"text-danger\">欢迎您，百变小咖</strong> <span class=\"c-home-login-tip\">， 这是您第 <span class=\"text-danger\">12708</span>                    次登录，上次登录时间： <span class=\"text-danger\">2017-5-20 21:05:20</span>，如果不是您本人登录，请及时 <a href=\"javascript:void(0)\" (click)=\"passwordEdit()\">修改密码</a>                    。</span>\n                    <button aria-label=\"Close\" class=\"close\" type=\"button\"  (click)=\"userTipClose=true\">\n                       <span aria-hidden=\"true\">×</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n\n        <div class=\"col-md-6\">\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"card c-card c-home-card\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-md-9\">\n                                    <h5 class=\"card-title c-fs15\"><i class=\"fa fa-bell-o fa-fw\"></i> 待办信息</h5>\n                                </div>\n                                <div class=\"col-md-3 text-right\">\n                                    <a class=\"c-cursor-pointer\" (click)=\"isTodoCollapsed = !isTodoCollapsed\"><em class=\"fa fa-minus\"></em></a>\n                                </div>\n                            </div>\n                            <div [ngbCollapse]=\"isTodoCollapsed\">\n                                <div class=\"row  c-mt15  c-scroll-y-a c-home-card-inner\">\n                                    <div class=\"col-md-12\">\n                                        <table class=\"c-line-table\">\n                                            <tr>\n                                                <td>\n                                                    <span class=\"c-home-card-tip\"><i class=\"fa fa-info fa-fw\"></i>您共有<strong class=\"text-danger\"> {{todoObj.total}} </strong> 条未处理待办信息</span>\n                                                </td>\n                                                <td class=\" text-right\">\n                                                    <a class=\"text-danger c-cursor-pointer\">查看更多&gt;&gt;</a>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                        <table class=\"c-line-table  table-hover\">\n                                            <tbody>\n                                                <tr class=\"c-cursor-pointer\" *ngFor=\"let todo of todoObj.todoList;let i = index\">\n                                                    <td>{{i+1}}</td>\n                                                    <td>\n                                                        <span class=\"badge badge-success\">{{todo.submitUser}}</span>&nbsp;\n                                                        <span>{{todo.title}}</span>\n                                                    </td>\n                                                    <td class=\"text-right c-date\">\n                                                        {{todo.createDate}}\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row  c-mt15\">\n                <div class=\"col-md-12\">\n                    <div class=\"card c-card c-home-card\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-md-9\">\n                                    <h5 class=\"card-title c-fs15\"><i class=\"fa fa-bullhorn fa-fw\"></i> 系统通知</h5>\n                                </div>\n                                <div class=\"col-md-3 text-right\">\n                                    <a class=\"c-cursor-pointer\" (click)=\"isNoticeCollapsed = !isNoticeCollapsed\"><em class=\"fa fa-minus\"></em></a>\n                                </div>\n                            </div>\n                            <div [ngbCollapse]=\"isNoticeCollapsed\">\n                                <div class=\"row c-mt15  c-scroll-y-a c-home-card-inner\">\n                                    <div class=\"col-md-12\">\n                                        <table class=\"c-line-table\">\n                                            <tr>\n                                                <td>\n                                                    <span class=\"c-home-card-tip\"><i class=\"fa fa-info fa-fw\"></i>您共有<strong class=\"text-danger\"> {{noticeObj.total}} </strong> 条未查看系统通知</span>\n                                                </td>\n                                                <td class=\" text-right\">\n                                                    <a class=\"text-danger c-cursor-pointer\">查看更多&gt;&gt;</a>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                        <table class=\"c-line-table  table-hover\">\n                                            <tbody>\n                                                <tr class=\"c-cursor-pointer\" *ngFor=\"let notice of noticeObj.noticeList;let i = index\">\n                                                    <td>{{i+1}}</td>\n                                                    <td>\n                                                        <span>{{notice.title}}</span>\n                                                    </td>\n                                                    <td class=\"text-right c-date\">\n                                                        {{notice.createDate}}\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"col-md-6\">\n\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"card c-card c-home-card\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-md-9\">\n                                    <h5 class=\"card-title c-fs15\"><i class=\"fa fa-envelope-open-o fa-fw\"></i> 待阅信息</h5>\n                                </div>\n                                <div class=\"col-md-3 text-right\">\n                                    <a class=\"c-cursor-pointer\" (click)=\"isNeedReadCollapsed = !isNeedReadCollapsed\"><em class=\"fa fa-minus\"></em></a>\n                                </div>\n                            </div>\n                            <div [ngbCollapse]=\"isNeedReadCollapsed\">\n                                <div class=\"row  c-mt15  c-scroll-y-a c-home-card-inner\">\n                                    <div class=\"col-md-12\">\n                                        <table class=\"c-line-table\">\n                                            <tr>\n                                                <td>\n                                                    <span class=\"c-home-card-tip\"><i class=\"fa fa-info fa-fw\"></i>您共有<strong class=\"text-danger\"> {{needReadObj.total}} </strong> 条未查看待阅信息</span>\n                                                </td>\n                                                <td class=\" text-right\">\n                                                    <a class=\"text-danger c-cursor-pointer\">查看更多&gt;&gt;</a>\n                                                </td>\n                                            </tr>\n                                        </table>\n                                        <table class=\"c-line-table  table-hover\">\n                                            <tbody>\n                                                <tr class=\"c-cursor-pointer\" *ngFor=\"let needRead of needReadObj.needReadList;let i = index\">\n                                                    <td>{{i+1}}</td>\n                                                    <td>\n                                                        <span class=\"badge badge-warning\">{{needRead.type}}</span>&nbsp;\n                                                        <span>{{needRead.title}}</span>\n                                                    </td>\n                                                    <td class=\"text-right c-date\">\n                                                        {{needRead.createDate}}\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row  c-mt15\">\n                <div class=\"col-md-12\">\n                    <div class=\"card c-card  c-home-card\">\n                        <div class=\"card-body\">\n                            <div class=\"row\">\n                                <div class=\"col-md-9\">\n                                    <h5 class=\"card-title c-fs15\"><i class=\"fa fa-cubes fa-fw\"></i> 常用功能</h5>\n                                </div>\n                                <div class=\"col-md-3 text-right\">\n                                    <a class=\"c-cursor-pointer\"><em class=\"fa fa-cog\" placement=\"bottom\" [ngbTooltip]=\"commonFuncConfigTip\"></em></a>                                    &nbsp;\n                                    <a class=\"c-cursor-pointer\" (click)=\"isCommonFuncCollapsed = !isCommonFuncCollapsed\"><em class=\"fa fa-minus\"></em></a>\n                                </div>\n                            </div>\n                            <div [ngbCollapse]=\"isCommonFuncCollapsed\">\n                                <div class=\"row c-mt15  c-scroll-y-a c-home-card-inner\">\n                                    <div class=\"col-md-12\">\n                                        <div class=\"row c-mt10\" *ngFor=\"let commonFunc of commonFuncLit;let i = index\">\n                                            <div class=\"col-md-3\" *ngFor=\"let obj  of commonFuncLit[i]\">\n                                                <div class=\"card card-outline-secondary  text-center c-home-common-func-outline\">\n                                                    <div class=\"card-body c-home-common-func\">\n                                                        <i class=\"fa \" [ngClass]=\"obj.icon\"></i> <span>{{obj.name}}</span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/business/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*页面统一样式*/\nhtml,\nbody {\n  font-size: 14px;\n  background-color: #1190d6; }\n\n/*添加手形*/\na[href], input[type='submit'], input[type='image'], label[for], select, button, .c-pointer {\n  cursor: pointer; }\n\n/*整体部分*/\n::-webkit-scrollbar {\n  width: 10px;\n  height: 10px; }\n\n/*滑动轨道*/\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.06); }\n\n/*滑块*/\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.08); }\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgba(0, 0, 0, 0.15); }\n\n.c-home-login-tip {\n  color: #555555; }\n\n.c-home-card {\n  max-height: 335px; }\n  .c-home-card .c-home-card-inner {\n    max-height: 270px; }\n    .c-home-card .c-home-card-inner .c-home-card-tip {\n      color: #555555; }\n    .c-home-card .c-home-card-inner .c-date {\n      color: #555555; }\n\n.c-home-common-func-outline {\n  border: 0px dashed #eeeeee; }\n  .c-home-common-func-outline .c-home-common-func {\n    padding: 6px; }\n    .c-home-common-func-outline .c-home-common-func:hover {\n      background: #eeeeee;\n      cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/business/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modal_modal_service__ = __webpack_require__("../../../../../src/app/shared/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__business_shared_user_password_edit_component__ = __webpack_require__("../../../../../src/app/business-shared/user/password-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(modalService, ngbModalService) {
        this.modalService = modalService;
        this.ngbModalService = ngbModalService;
        this.userTipClose = false;
        this.isTodoCollapsed = false;
        this.isNoticeCollapsed = false;
        this.isNeedReadCollapsed = false;
        this.isCommonFuncCollapsed = false;
        this.todoObj = {
            total: 50,
            todoList: [{
                    id: 1,
                    title: '“张三”的采购订单审批',
                    submitUser: '张三',
                    createDate: '2016-07-23'
                }, {
                    id: 2,
                    title: '“李四”创建了框架合同，等待“百变小咖的审批”',
                    submitUser: '李四',
                    createDate: '2016-07-23'
                }, {
                    id: 3,
                    title: '“王五”提交了一个财务合算，等待“百变小咖的审批”',
                    submitUser: '王五',
                    createDate: '2016-07-23'
                }, {
                    id: 4,
                    title: '“赵六”有一条出库申请信息，等待“百变小咖的审批”',
                    submitUser: '赵六',
                    createDate: '2016-07-23'
                }, {
                    id: 5,
                    title: '“马七”将“2016-07-22食品采购订单验收”委托给“百变小咖”',
                    submitUser: '马七',
                    createDate: '2016-07-23'
                }]
        };
        this.needReadObj = {
            total: 50,
            needReadList: [{
                    id: 1,
                    title: '采购订单，等待“百变小咖的查看',
                    type: '待阅',
                    createDate: '2016-07-25'
                }, {
                    id: 2,
                    title: '框架合同，等待“百变小咖的查看”',
                    type: '订阅',
                    createDate: '2016-07-23'
                }, {
                    id: 3,
                    title: '“财务合算，等待“百变小咖的查看”',
                    type: '待阅',
                    createDate: '2016-07-22'
                }, {
                    id: 4,
                    title: '“出库申请信息，等待“百变小咖的查看”',
                    type: '订阅',
                    createDate: '2016-07-21'
                }, {
                    id: 5,
                    title: '“2016-07-22食品采购订单验收，等待“百变小咖的查看',
                    type: '待阅',
                    createDate: '2016-07-20'
                }]
        };
        this.noticeObj = {
            total: 60,
            noticeList: [{
                    id: 1,
                    title: '今晚系统有重大升级，请妥善安排你的业务操作！',
                    createDate: '2016-07-23'
                }, {
                    id: 2,
                    title: '公司20周年庆，请各位今晚参加活动！',
                    createDate: '2016-07-23'
                }, {
                    id: 3,
                    title: '五一放假时间以及值班人员安排！',
                    createDate: '2016-05-01'
                }, {
                    id: 4,
                    title: '关于学习公司企业文化活动！',
                    createDate: '2016-03-23'
                }, {
                    id: 5,
                    title: '系统第一版正式上线通知！',
                    createDate: '2016-03-15'
                }]
        };
        this.commonFuncLit = [
            [{
                    "id": "2",
                    "name": "模态框",
                    "icon": 'fa-columns',
                    "url": 'modal'
                }, {
                    "id": "3",
                    "name": "分页",
                    "icon": 'fa-pagelines',
                    "url": 'pagination'
                }, {
                    "id": "4",
                    "name": "数据分页器",
                    "icon": 'fa-table',
                    "url": 'dataPager'
                }, {
                    "id": "5",
                    "name": "数据表格",
                    "icon": 'fa-table',
                    "url": 'dataTable'
                }], [{
                    "id": "6",
                    "name": "bootstrap样式",
                    "icon": 'fa-css3',
                    "url": 'bootstrapCss'
                }, {
                    "id": "7",
                    "name": "自定义样式",
                    "icon": 'fa-css3',
                    "url": 'customCss'
                }, {
                    "id": "8",
                    "name": "列表",
                    "icon": 'fa-list',
                    "url": 'list'
                }, {
                    "id": "9",
                    "name": "时间选择器",
                    "icon": 'fa-calendar',
                    "url": 'datepicker'
                }], [{
                    "id": "10",
                    "name": "开关按钮",
                    "icon": 'fa-toggle-on',
                    "url": 'switch'
                }, {
                    "id": "11",
                    "name": "图表",
                    "icon": 'fa-pie-chart',
                    "url": 'chart'
                }, {
                    "id": "12",
                    "name": "树与下拉树",
                    "icon": 'fa-tree',
                    "url": 'tree'
                }, {
                    "id": "13",
                    "name": "文件上传",
                    "icon": 'fa-upload',
                    "url": 'fileUpload'
                }], [{
                    "id": "14",
                    "name": "富文本编辑器",
                    "icon": 'fa-file-o',
                    "url": 'editor'
                }, {
                    "id": "15",
                    "name": "下拉框",
                    "icon": 'fa-circle',
                    "url": 'select'
                }, {
                    "id": "23",
                    "name": "用户查询",
                    "icon": "fa-search",
                    "url": "userList"
                }, {
                    "id": "22",
                    "name": "用户添加",
                    "icon": "fa-plus-circle",
                    "url": "userAdd"
                }], [{
                    "id": "17",
                    "name": "待办信息",
                    "icon": "fa-bell-o",
                    "url": "task"
                }, {
                    "id": "18",
                    "name": "通知信息",
                    "icon": "fa-bullhorn",
                    "url": "task"
                }, {
                    "id": "19",
                    "name": "备忘信息",
                    "icon": "fa-tag",
                    "url": "task"
                }, {
                    "id": "25",
                    "name": "角色添加",
                    "icon": "fa-plus-circle",
                    "url": "roleAdd"
                }], [{
                    "id": "32",
                    "name": "系统日志",
                    "icon": "fa-file",
                    "url": "systemLog"
                }, {
                    "id": "29",
                    "name": "菜单添加",
                    "icon": "fa-plus-circle",
                    "url": "menuAdd"
                }, {
                    "id": "26",
                    "name": "角色查询",
                    "icon": "fa-search",
                    "url": "roleList"
                }, {
                    "id": "27",
                    "name": "角色分配",
                    "icon": "fa-cogs",
                    "url": "userList"
                }]
        ];
        this.commonFuncConfigTip = "配置常用功能";
    }
    /**
     * 初始化
     */
    HomeComponent.prototype.ngOnInit = function () {
    };
    /**
     * 修改密码
     */
    HomeComponent.prototype.passwordEdit = function () {
        this.ngbModalService.open(__WEBPACK_IMPORTED_MODULE_3__business_shared_user_password_edit_component__["a" /* PasswordEditComponent */], { size: 'lg' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'c-home',
            template: __webpack_require__("../../../../../src/app/business/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/business/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_modal_modal_service__["a" /* ModalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/business/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__business_shared_user_user_shared_module__ = __webpack_require__("../../../../../src/app/business-shared/user/user-shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__("../../../../../src/app/business/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_routing_module__ = __webpack_require__("../../../../../src/app/business/home/home-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_6__home_routing_module__["a" /* HomeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__business_shared_user_user_shared_module__["a" /* UserSharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */]
            ],
            exports: [],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map