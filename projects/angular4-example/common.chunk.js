webpackJsonp(["common"],{

/***/ "../../../../../src/app/business-shared/user/avatar-cropper.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-danger\">头像更换</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n         <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <div class=\"row\">\n            <div class=\"c-avatar-cut-box\">\n                <img-cropper #avatarCropper [image]=\"avatar\" [settings]=\"avatarSettings\" ></img-cropper>\n            </div>\n            <div class=\"c-avatar-preview-box c-ml15 text-center\">\n                <div class=\"c-avatar-title\">头像预览</div>\n                <div class=\"c-mt15\">\n                    <img class=\"center-block rounded-circle c-avatar-img-lg\" [src]=\"userAvatar\" >\n                    <div class=\"c-avatar-desc c-mt5\">原头像</div>\n                </div>\n                <div class=\"c-mt20\">\n                     <img class=\"center-block rounded-circle c-avatar-img-lg\" *ngIf=\"avatar.image\"  [src]=\"avatar.image\" >\n                     <img class=\"center-block rounded-circle c-avatar-img-lg\" *ngIf=\"!avatar.image\" [src]=\"userAvatar\" >\n                     <div class=\"c-avatar-desc c-mt5\">90*90</div>\n                </div>\n                <div class=\"c-mt15\">\n                    <img class=\"center-block rounded-circle c-avatar-img-xs\" *ngIf=\"avatar.image\"  [src]=\"avatar.image\" >\n                    <img class=\"center-block rounded-circle c-avatar-img-xs\" *ngIf=\"!avatar.image\" [src]=\"userAvatar\" >\n                    <div class=\"c-avatar-desc c-mt5\">36*36</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row  text-danger c-mt10\">\n            注：请上传小于8M的JPG/JPEG、PNG、GIF图片。\n        </div>\n    </div>\n\n    <div class=\"modal-footer\">\n        <div class=\"row\">\n            <div class=\"col-md-4 text-left\">\n                <div class=\"c-file-upload\">\n                    <button class=\"btn btn-primary \"><i class=\"fa fa-search\" aria-hidden=\"true\"></i> 浏览图片</button>\n                    <input type=\"file\"  c-img-cropper-select [cropper]=\"avatarCropper\">\n                </div>\n            </div>\n            <div class=\"col-md-4 text-center\">\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"upload()\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i> 上传图片</button>\n            </div>\n            <div class=\"col-md-4 text-right\">\n                <button type=\"button\" class=\"btn btn-light\" (click)=\"close()\"><i class=\"fa fa-close\" aria-hidden=\"true\"></i> 关闭窗口</button>\n            </div>\n        </div>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/business-shared/user/avatar-cropper.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*页面统一样式*/\nhtml,\nbody {\n  font-size: 14px;\n  background-color: #1190d6; }\n\n/*添加手形*/\na[href], input[type='submit'], input[type='image'], label[for], select, button, .c-pointer {\n  cursor: pointer; }\n\n/*整体部分*/\n::-webkit-scrollbar {\n  width: 10px;\n  height: 10px; }\n\n/*滑动轨道*/\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.06); }\n\n/*滑块*/\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.08); }\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgba(0, 0, 0, 0.15); }\n\n.c-avatar-cut-box {\n  background: #dddddd;\n  width: 600px;\n  height: 380px;\n  float: left; }\n\n.c-avatar-preview-box {\n  width: 150px;\n  height: 380px;\n  float: left; }\n  .c-avatar-preview-box .c-avatar-title {\n    font-style: 16px; }\n  .c-avatar-preview-box .c-avatar-desc {\n    font-size: 14px;\n    color: #555555; }\n  .c-avatar-preview-box .c-avatar-img-lg {\n    width: 90px;\n    height: 90px; }\n  .c-avatar-preview-box .c-avatar-img-xs {\n    width: 36px;\n    height: 36px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/business-shared/user/avatar-cropper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarCropperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_service__ = __webpack_require__("../../../../../src/app/shared/toast/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_model__ = __webpack_require__("../../../../../src/app/shared/toast/toast-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * 头像更换组件
 */
var AvatarCropperComponent = (function () {
    function AvatarCropperComponent(activeModal, toastService) {
        this.activeModal = activeModal;
        this.toastService = toastService;
        //用户头像
        this.userAvatar = "./assets/img/user-header.png";
        //头像裁剪配置
        this.avatarSettings = new __WEBPACK_IMPORTED_MODULE_2_ng2_img_cropper__["a" /* CropperSettings */]();
        this.avatarSettings.noFileInput = true;
        this.avatarSettings.width = 120;
        this.avatarSettings.height = 120;
        this.avatarSettings.croppedWidth = 120;
        this.avatarSettings.croppedHeight = 120;
        this.avatarSettings.canvasWidth = 600;
        this.avatarSettings.canvasHeight = 380;
        this.avatarSettings.minWidth = 100;
        this.avatarSettings.minHeight = 100;
        this.avatarSettings.cropperDrawSettings.strokeWidth = 2;
        this.avatarSettings.rounded = true;
        this.avatarSettings.fileType = 'image/png';
        this.avatar = {};
    }
    /**
     * 上传
     */
    AvatarCropperComponent.prototype.upload = function () {
        console.info(this.avatar.image);
        this.userAvatar = this.avatar.image;
        var toastCfg = new __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_model__["a" /* ToastConfig */](__WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_model__["b" /* ToastType */].SUCCESS, '', '图片上传成功!', 2000);
        this.toastService.toast(toastCfg);
    };
    /**
       * 关闭
       */
    AvatarCropperComponent.prototype.close = function () {
        this.activeModal.dismiss({ status: 'closed' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('avatarCropper', undefined),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_img_cropper__["b" /* ImageCropperComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_img_cropper__["b" /* ImageCropperComponent */]) === "function" && _a || Object)
    ], AvatarCropperComponent.prototype, "avatarCropper", void 0);
    AvatarCropperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'c-avatar-cropper',
            template: __webpack_require__("../../../../../src/app/business-shared/user/avatar-cropper.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/business-shared/user/avatar-cropper.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_service__["a" /* ToastService */]) === "function" && _c || Object])
    ], AvatarCropperComponent);
    return AvatarCropperComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=avatar-cropper.component.js.map

/***/ }),

/***/ "../../../../../src/app/business-shared/user/password-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <form [formGroup]=\"passwordEditForm\">\n        <div class=\"modal-header\">\n            <h5 class=\"modal-title text-danger\">修改密码</h5>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n\n            <div class=\"row\">\n                <div class=\"col-md-9\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 col-form-label text-right\">\n                            <span class=\"text-danger\">*</span> 旧密码：</label>\n                        <div class=\"col-md-9\">\n                            <input type=\"password\" class=\"form-control\" formControlName=\"oldPassword\" placeholder=\"请输入旧密码...\">\n                            <div class=\"c-validator-invalid\" *ngIf=\"!passwordEditForm.controls['oldPassword'].valid && passwordEditForm.controls['oldPassword'].dirty\">\n                                旧密码格式不正确！\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-12 col-form-label text-danger\">格式：6-15位旧密码！</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-9\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 col-form-label text-right\">\n                            <span class=\"text-danger\">*</span> 新密码：</label>\n                        <div class=\"col-md-9\">\n                            <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"请输入新密码...\">\n                            <div class=\"c-validator-invalid\" [hidden]=\"!(passwordEditForm.controls['password'].errors && passwordEditForm.controls['password'].dirty)\">\n                                新密码格式不正确！\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-12 col-form-label text-danger\">格式：6-15位新密码！</label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-9\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-3 col-form-label text-right\">\n                            <span class=\"text-danger\">*</span> 确认密码：</label>\n                        <div class=\"col-md-9\">\n                            <input type=\"password\" class=\"form-control\" formControlName=\"certainPassword\" placeholder=\"请输入确认密码...\">\n                            <div class=\"c-validator-invalid\" [hidden]=\"!(passwordEditForm.controls['certainPassword'].errors && passwordEditForm.controls['certainPassword'].dirty)\">\n                                确认密码格式不正确！\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <div class=\"form-group row\">\n                        <label class=\"col-md-12 col-form-label text-danger\">格式：与新密码一致！</label>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"modal-footer\">\n            <div class=\"row\">\n                <div class=\"col-md-\">\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"ok()\" [disabled]=\"!passwordEditForm.valid\">\n                        <i class=\"fa fa-check\" aria-hidden=\"true\"></i> 确定</button>\n                    <button type=\"button\" class=\"btn btn-light  c-ml15\" (click)=\"close()\">\n                        <i class=\"fa fa-close\" aria-hidden=\"true\"></i> 关闭</button>\n                </div>\n            </div>\n        </div>\n\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/business-shared/user/password-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_service__ = __webpack_require__("../../../../../src/app/shared/toast/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_model__ = __webpack_require__("../../../../../src/app/shared/toast/toast-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_custom_validator_custom_validator__ = __webpack_require__("../../../../../src/app/shared/custom-validator/custom-validator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * 修改密码组件
 */
var PasswordEditComponent = (function () {
    function PasswordEditComponent(activeModal, toastService, formBuilder) {
        this.activeModal = activeModal;
        this.toastService = toastService;
        this.formBuilder = formBuilder;
        var oldPasswordFc = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(15)]));
        var passwordFc = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(15)]));
        var certainPasswordFc = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__shared_custom_validator_custom_validator__["a" /* CustomValidators */].equalTo(passwordFc));
        this.passwordEditForm = this.formBuilder.group({
            oldPassword: oldPasswordFc,
            password: passwordFc,
            certainPassword: certainPasswordFc
        });
    }
    /**
     * 上传
     */
    PasswordEditComponent.prototype.ok = function () {
        if (this.passwordEditForm.valid) {
            console.info(this.passwordEditForm.value);
            var toastCfg = new __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_model__["a" /* ToastConfig */](__WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_model__["b" /* ToastType */].SUCCESS, '', '修改密码成功!', 2000);
            this.toastService.toast(toastCfg);
            this.close();
        }
    };
    /**
       * 关闭
       */
    PasswordEditComponent.prototype.close = function () {
        this.activeModal.dismiss({ status: 'closed' });
    };
    PasswordEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'c-password-edit',
            template: __webpack_require__("../../../../../src/app/business-shared/user/password-edit.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_service__["a" /* ToastService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _c || Object])
    ], PasswordEditComponent);
    return PasswordEditComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=password-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/business-shared/user/user-shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_img_cropper_select_img_cropper_select_module__ = __webpack_require__("../../../../../src/app/shared/img-cropper-select/img-cropper-select.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__avatar_cropper_component__ = __webpack_require__("../../../../../src/app/business-shared/user/avatar-cropper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__password_edit_component__ = __webpack_require__("../../../../../src/app/business-shared/user/password-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * 用户共享模块
 */
var UserSharedModule = (function () {
    function UserSharedModule() {
    }
    UserSharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_ng2_img_cropper__["c" /* ImageCropperModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_img_cropper_select_img_cropper_select_module__["a" /* ImgCropperSelectModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__avatar_cropper_component__["a" /* AvatarCropperComponent */],
                __WEBPACK_IMPORTED_MODULE_7__password_edit_component__["a" /* PasswordEditComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__avatar_cropper_component__["a" /* AvatarCropperComponent */], __WEBPACK_IMPORTED_MODULE_7__password_edit_component__["a" /* PasswordEditComponent */]],
            exports: [],
            providers: []
        })
    ], UserSharedModule);
    return UserSharedModule;
}());

//# sourceMappingURL=user-shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/custom-scrollbar/custom-scrollbar.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomScrollbarDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * 滚动条
 */
var CustomScrollbarDirective = (function () {
    function CustomScrollbarDirective(elementRef) {
        this.elementRef = elementRef;
        this.options = {
            axis: 'y',
            theme: 'minimal-dark',
            autoDraggerLength: true,
            scrollInertia: 500
        };
        this.onViewInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * 视图初始化
     */
    CustomScrollbarDirective.prototype.ngAfterViewInit = function () {
        this.createScrollbar();
    };
    /**
    * 创建树
    */
    CustomScrollbarDirective.prototype.createScrollbar = function () {
        this.scrollbarInstance = $(this.elementRef.nativeElement).mCustomScrollbar(this.options);
        this.onViewInit.emit(this.scrollbarInstance);
    };
    /**
    * 销毁
    */
    CustomScrollbarDirective.prototype.ngOnDestroy = function () {
        this.scrollbarInstance.mCustomScrollbar("destroy");
    };
    /**
     * 获得实例
     */
    CustomScrollbarDirective.prototype.getScrollbarInstance = function () {
        return this.scrollbarInstance;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CustomScrollbarDirective.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CustomScrollbarDirective.prototype, "onViewInit", void 0);
    CustomScrollbarDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[c-custom-scrollbar]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], CustomScrollbarDirective);
    return CustomScrollbarDirective;
    var _a;
}());

//# sourceMappingURL=custom-scrollbar.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/custom-scrollbar/custom-scrollbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomScrollbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_scrollbar_directive__ = __webpack_require__("../../../../../src/app/shared/custom-scrollbar/custom-scrollbar.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 *  滚动条模块
 */
var CustomScrollbarModule = (function () {
    function CustomScrollbarModule() {
    }
    CustomScrollbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__custom_scrollbar_directive__["a" /* CustomScrollbarDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__custom_scrollbar_directive__["a" /* CustomScrollbarDirective */]
            ]
        })
    ], CustomScrollbarModule);
    return CustomScrollbarModule;
}());

//# sourceMappingURL=custom-scrollbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/custom-validator/custom-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomValidators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__equal_to_equal_to__ = __webpack_require__("../../../../../src/app/shared/custom-validator/equal-to/equal-to.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_email__ = __webpack_require__("../../../../../src/app/shared/custom-validator/email/email.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number_number__ = __webpack_require__("../../../../../src/app/shared/custom-validator/number/number.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__url_url__ = __webpack_require__("../../../../../src/app/shared/custom-validator/url/url.ts");




var CustomValidators = {
    'equalTo': __WEBPACK_IMPORTED_MODULE_0__equal_to_equal_to__["a" /* equalTo */],
    'email': __WEBPACK_IMPORTED_MODULE_1__email_email__["a" /* email */],
    'number': __WEBPACK_IMPORTED_MODULE_2__number_number__["a" /* number */],
    'url': __WEBPACK_IMPORTED_MODULE_3__url_url__["a" /* url */]
};
//# sourceMappingURL=custom-validator.js.map

/***/ }),

/***/ "../../../../../src/app/shared/custom-validator/email/email.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return email; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");

var email = function (ctrl) {
    if (__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required(ctrl) && null != __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required(ctrl)) {
        return null;
    }
    else {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(ctrl.value) ? null : { 'email': true };
    }
};
//# sourceMappingURL=email.js.map

/***/ }),

/***/ "../../../../../src/app/shared/custom-validator/equal-to/equal-to.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return equalTo; });
var equalTo = function (equalCtrl) {
    var subscribe = false;
    return function (ctrl) {
        if (!subscribe) {
            subscribe = true;
            equalCtrl.valueChanges.subscribe(function () {
                ctrl.updateValueAndValidity();
            });
        }
        return equalCtrl.value === ctrl.value ? null : { equalTo: true };
    };
};
//# sourceMappingURL=equal-to.js.map

/***/ }),

/***/ "../../../../../src/app/shared/custom-validator/number/number.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return number; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");

var number = function (ctrl) {
    if (__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required(ctrl) && null != __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required(ctrl)) {
        return null;
    }
    else {
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(ctrl.value) ? null : { 'number': true };
    }
};
//# sourceMappingURL=number.js.map

/***/ }),

/***/ "../../../../../src/app/shared/custom-validator/url/url.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return url; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");

var url = function (ctrl) {
    if (__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required(ctrl) && null != __WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required(ctrl)) {
        return null;
    }
    else {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(ctrl.value) ? null : { 'url': true };
    }
};
//# sourceMappingURL=url.js.map

/***/ }),

/***/ "../../../../../src/app/shared/img-cropper-select/img-cropper-select.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgCropperSelectDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * 图片裁剪选择指令
 */
var ImgCropperSelectDirective = (function () {
    function ImgCropperSelectDirective(elementRef) {
        this.elementRef = elementRef;
    }
    ImgCropperSelectDirective.prototype.onChange = function () {
        var files = this.elementRef.nativeElement.files;
        if (files && files.length > 0) {
            var image_1 = new Image();
            var file = files[0];
            var myReader = new FileReader();
            var that_1 = this;
            myReader.onloadend = function (loadEvent) {
                image_1.src = loadEvent.target.result;
                that_1.cropper.setImage(image_1);
            };
            myReader.readAsDataURL(file);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_img_cropper__["b" /* ImageCropperComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_img_cropper__["b" /* ImageCropperComponent */]) === "function" && _a || Object)
    ], ImgCropperSelectDirective.prototype, "cropper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('change'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ImgCropperSelectDirective.prototype, "onChange", null);
    ImgCropperSelectDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[c-img-cropper-select]',
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
    ], ImgCropperSelectDirective);
    return ImgCropperSelectDirective;
    var _a, _b;
}());

//# sourceMappingURL=img-cropper-select.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/img-cropper-select/img-cropper-select.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgCropperSelectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_cropper_select_directive__ = __webpack_require__("../../../../../src/app/shared/img-cropper-select/img-cropper-select.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 *  图片裁剪模块
 */
var ImgCropperSelectModule = (function () {
    function ImgCropperSelectModule() {
    }
    ImgCropperSelectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__img_cropper_select_directive__["a" /* ImgCropperSelectDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__img_cropper_select_directive__["a" /* ImgCropperSelectDirective */]
            ]
        })
    ], ImgCropperSelectModule);
    return ImgCropperSelectModule;
}());

//# sourceMappingURL=img-cropper-select.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modal/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"modal-body\">\n        <div>\n            <button aria-label=\"Close\" class=\"close\" type=\"button\" (click)=\"close()\">\n        <span aria-hidden=\"true\">×</span>\n        </button>\n        </div>\n        <div class=\"text-center c-mt10 c-mb5\">\n            <div  class=\"text-info c-ml20\"  [hidden]=\"!isInfo(config.type)\">\n                <span class=\"fa-stack fa-5x\" aria-hidden=\"true\">\n\t\t\t\t  <i class=\"fa fa-circle-o fa-stack-2x\"></i>\n\t\t\t\t  <i class=\"fa fa-info fa-stack-1x\"></i>\n\t\t\t   </span>\n            </div>\n            <div class=\"text-danger c-ml20\" [hidden]=\"!isError(config.type)\">\n               <span class=\"fa-stack fa-5x\" aria-hidden=\"true\">\n\t\t\t\t <i class=\"fa fa-times-circle-o fa-stack-2x\"></i>\n\t\t\t   </span>\n            </div>\n            <div class=\"text-warning c-ml20 c-mb10\" [hidden]=\"!isWarning(config.type)\">\n               <span class=\"fa-stack fa-4x\" aria-hidden=\"true\">\n\t\t\t\t <i class=\"fa fa-warning fa-stack-2x\"></i>\n\t\t\t   </span>\n            </div>\n        </div>\n        <h5  class=\"text-center\" [hidden]='!config.title'>{{config.title}}</h5>\n        <div class=\"text-center c-word-break c-modal-content\" [innerHTML]=\"config.content\"></div>\n    </div>\n    <div class=\"text-center c-mb20 c-mt10\">\n        <button type=\"button\" class=\"btn \" [ngClass]=\"config.approveBtnCls\" (click)=\"approve()\">{{config.approveBtnTxt}}</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/modal/alert.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*页面统一样式*/\nhtml,\nbody {\n  font-size: 14px;\n  background-color: #1190d6; }\n\n/*添加手形*/\na[href], input[type='submit'], input[type='image'], label[for], select, button, .c-pointer {\n  cursor: pointer; }\n\n/*整体部分*/\n::-webkit-scrollbar {\n  width: 10px;\n  height: 10px; }\n\n/*滑动轨道*/\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.06); }\n\n/*滑块*/\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.08); }\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgba(0, 0, 0, 0.15); }\n\n.c-modal-content {\n  color: #555555; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modal/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_model__ = __webpack_require__("../../../../../src/app/shared/modal/modal-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 警告框组件
 */
var AlertComponent = (function () {
    function AlertComponent(activeModal) {
        this.activeModal = activeModal;
    }
    /**
     * 判断是否信息
     * @param type
     */
    AlertComponent.prototype.isInfo = function (type) {
        return type === __WEBPACK_IMPORTED_MODULE_2__modal_model__["b" /* AlertType */].INFO;
    };
    /**
     * 判断是否警告
     * @param type
     */
    AlertComponent.prototype.isWarning = function (type) {
        return type === __WEBPACK_IMPORTED_MODULE_2__modal_model__["b" /* AlertType */].WARNING;
    };
    /**
    * 判断是否错误
    * @param type
    */
    AlertComponent.prototype.isError = function (type) {
        return type === __WEBPACK_IMPORTED_MODULE_2__modal_model__["b" /* AlertType */].ERROR;
    };
    /**
     * 关闭
     */
    AlertComponent.prototype.close = function () {
        this.activeModal.dismiss({ status: 'closed' });
    };
    /**
     * 同意
     */
    AlertComponent.prototype.approve = function () {
        this.activeModal.close({ status: 'approved' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__modal_model__["a" /* AlertConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__modal_model__["a" /* AlertConfig */]) === "function" && _a || Object)
    ], AlertComponent.prototype, "config", void 0);
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'c-alert',
            template: __webpack_require__("../../../../../src/app/shared/modal/alert.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/shared/modal/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _b || Object])
    ], AlertComponent);
    return AlertComponent;
    var _a, _b;
}());

//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modal/confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"modal-body\">\n        <div>\n            <button aria-label=\"Close\" class=\"close\" type=\"button\" (click)=\"close()\">\n        <span aria-hidden=\"true\">×</span>\n        </button>\n        </div>\n        <div class=\"text-primary text-center c-mt10 c-mb5\">\n            <div class=\"c-ml20\">\n                <span class=\"fa-stack fa-5x\" aria-hidden=\"true\">\n                    <i class=\"fa fa-circle-o fa-stack-2x\"></i>\n                    <i class=\"fa fa-question fa-stack-1x\"></i>\n                </span>\n            </div>\n        </div>\n\n        <div class=\"text-center c-word-break c-modal-content\" [innerHTML]=\"config.content\"></div>\n    </div>\n    <div class=\"text-center c-mb20 c-mt10\">\n        <button type=\"button\" class=\"btn\" [ngClass]=\"config.approveBtnCls\" (click)=\"approve()\">{{config.approveBtnTxt}}</button>\n        <button type=\"button\" class=\"btn c-ml15 \" [ngClass]=\"config.declineBtnCls\" (click)=\"decline()\">{{config.declineBtnTxt}}</button>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/modal/confirm.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*页面统一样式*/\nhtml,\nbody {\n  font-size: 14px;\n  background-color: #1190d6; }\n\n/*添加手形*/\na[href], input[type='submit'], input[type='image'], label[for], select, button, .c-pointer {\n  cursor: pointer; }\n\n/*整体部分*/\n::-webkit-scrollbar {\n  width: 10px;\n  height: 10px; }\n\n/*滑动轨道*/\n::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.06); }\n\n/*滑块*/\n::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.08); }\n  ::-webkit-scrollbar-thumb:hover {\n    background: rgba(0, 0, 0, 0.15); }\n\n.c-modal-content {\n  color: #555555; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/modal/confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_model__ = __webpack_require__("../../../../../src/app/shared/modal/modal-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * 确认框组件
 */
var ConfirmComponent = (function () {
    function ConfirmComponent(activeModal) {
        this.activeModal = activeModal;
    }
    /**
     * 不同意
     */
    ConfirmComponent.prototype.decline = function () {
        this.activeModal.dismiss({ status: 'declined' });
    };
    /**
     * 关闭
     */
    ConfirmComponent.prototype.close = function () {
        this.activeModal.dismiss({ status: 'closed' });
    };
    /**
     * 同意
     */
    ConfirmComponent.prototype.approve = function () {
        this.activeModal.close({ status: 'approved' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__modal_model__["c" /* ConfirmConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__modal_model__["c" /* ConfirmConfig */]) === "function" && _a || Object)
    ], ConfirmComponent.prototype, "config", void 0);
    ConfirmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'c-confirm',
            template: __webpack_require__("../../../../../src/app/shared/modal/confirm.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/shared/modal/confirm.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _b || Object])
    ], ConfirmComponent);
    return ConfirmComponent;
    var _a, _b;
}());

//# sourceMappingURL=confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modal/modal-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ConfirmConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AlertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertConfig; });
/**
 * 确认框配置
 */
var ConfirmConfig = (function () {
    function ConfirmConfig(content, declineBtnCls, declineBtnTxt, approveBtnCls, approveBtnTxt) {
        if (content === void 0) { content = ''; }
        if (declineBtnCls === void 0) { declineBtnCls = 'btn-light'; }
        if (declineBtnTxt === void 0) { declineBtnTxt = '取消'; }
        if (approveBtnCls === void 0) { approveBtnCls = 'btn-primary'; }
        if (approveBtnTxt === void 0) { approveBtnTxt = '确定'; }
        this.content = content;
        this.declineBtnCls = declineBtnCls;
        this.declineBtnTxt = declineBtnTxt;
        this.approveBtnCls = approveBtnCls;
        this.approveBtnTxt = approveBtnTxt;
    }
    ConfirmConfig.prototype.getContent = function () {
        return this.content;
    };
    ConfirmConfig.prototype.getdeclineBtnCls = function () {
        return this.declineBtnCls;
    };
    ConfirmConfig.prototype.getDeclineBtnTxt = function () {
        return this.declineBtnCls;
    };
    ConfirmConfig.prototype.getApproveBtnCls = function () {
        return this.approveBtnCls;
    };
    ConfirmConfig.prototype.getApproveBtnTxt = function () {
        return this.approveBtnTxt;
    };
    return ConfirmConfig;
}());

/**
 * 警告框类型
 */
var AlertType;
(function (AlertType) {
    AlertType[AlertType["INFO"] = 0] = "INFO";
    AlertType[AlertType["WARNING"] = 1] = "WARNING";
    AlertType[AlertType["ERROR"] = 2] = "ERROR";
})(AlertType || (AlertType = {}));
/**
 * 警告框配置
 */
var AlertConfig = (function () {
    function AlertConfig(type, title, content, approveBtnCls, approveBtnTxt) {
        if (type === void 0) { type = AlertType.WARNING; }
        if (title === void 0) { title = ''; }
        if (content === void 0) { content = ''; }
        if (approveBtnCls === void 0) { approveBtnCls = 'btn-primary'; }
        if (approveBtnTxt === void 0) { approveBtnTxt = '确定'; }
        this.title = title;
        this.content = content;
        this.type = type;
        this.approveBtnCls = approveBtnCls;
        this.approveBtnTxt = approveBtnTxt;
    }
    AlertConfig.prototype.getType = function () {
        return this.type;
    };
    AlertConfig.prototype.getTitle = function () {
        return this.title;
    };
    AlertConfig.prototype.getContent = function () {
        return this.content;
    };
    AlertConfig.prototype.getApproveBtnCls = function () {
        return this.approveBtnCls;
    };
    AlertConfig.prototype.getApproveBtnTxt = function () {
        return this.approveBtnTxt;
    };
    return AlertConfig;
}());

//# sourceMappingURL=modal-model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modal/modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_component__ = __webpack_require__("../../../../../src/app/shared/modal/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirm_component__ = __webpack_require__("../../../../../src/app/shared/modal/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_service__ = __webpack_require__("../../../../../src/app/shared/modal/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**
 *  模态框模块
 */
var ModalModule = (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_4__confirm_component__["a" /* ConfirmComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__modal_service__["a" /* ModalService */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_4__confirm_component__["a" /* ConfirmComponent */]
            ]
        })
    ], ModalModule);
    return ModalModule;
}());

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/modal/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_component__ = __webpack_require__("../../../../../src/app/shared/modal/confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_component__ = __webpack_require__("../../../../../src/app/shared/modal/alert.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * 模块框服务
 */
var ModalService = (function () {
    function ModalService(modalService) {
        this.modalService = modalService;
    }
    //确认框
    ModalService.prototype.confirm = function (config) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__confirm_component__["a" /* ConfirmComponent */]);
        modalRef.componentInstance.config = config;
        return modalRef.result;
    };
    //警告框
    ModalService.prototype.alert = function (config) {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__alert_component__["a" /* AlertComponent */]);
        modalRef.componentInstance.config = config;
        return modalRef.result;
    };
    ModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object])
    ], ModalService);
    return ModalService;
    var _a;
}());

//# sourceMappingURL=modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pagination/http-pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpPaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_http_service__ = __webpack_require__("../../../../../src/app/shared/http/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_utils__ = __webpack_require__("../../../../../src/app/shared/util/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toast_toast_service__ = __webpack_require__("../../../../../src/app/shared/toast/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_toast_model__ = __webpack_require__("../../../../../src/app/shared/toast/toast-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pagination_model__ = __webpack_require__("../../../../../src/app/shared/pagination/pagination-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * c-http-pagination组件
 */
var HttpPaginationComponent = (function () {
    function HttpPaginationComponent(httpService, toastService) {
        this.httpService = httpService;
        this.toastService = toastService;
        this.pageList = [10, 20, 30, 50, 100, 150, 200];
        this.btnCls = 'btn-light';
        this.method = 'post';
        this.param = new Object();
        this.onDataChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.total = 0;
        this.pageSize = this.pageList[0];
        this.pageNumber = 1;
    }
    /**
    * 初始化
    */
    HttpPaginationComponent.prototype.ngOnInit = function () {
        this.getServerData();
    };
    /**
     * 查询方法
     */
    HttpPaginationComponent.prototype.search = function () {
        this.getServerData();
    };
    /**
     * 获得服务器数据
     */
    HttpPaginationComponent.prototype.getServerData = function () {
        var that = this;
        var serviceData = {};
        if (__WEBPACK_IMPORTED_MODULE_2__util_utils__["a" /* Utils */].isArray(this.param)) {
            serviceData.pageNumber = this.pageNumber;
            serviceData.pageSize = this.pageSize;
            serviceData.list = this.param;
        }
        else if (__WEBPACK_IMPORTED_MODULE_2__util_utils__["a" /* Utils */].isObject(this.param)) {
            this.param.pageNumber = this.pageNumber;
            this.param.pageSize = this.pageSize;
            serviceData = this.param;
        }
        else {
            serviceData.pageNumber = this.pageNumber;
            serviceData.pageSize = this.pageSize;
        }
        if (this.method == __WEBPACK_IMPORTED_MODULE_5__pagination_model__["a" /* HttpPaginationMethod */].GET && __WEBPACK_IMPORTED_MODULE_2__util_utils__["a" /* Utils */].isNotEmpty(this.url)) {
            this.httpService.get(this.url, serviceData, function (successful, data, res) {
                if (successful) {
                    that.serverDataProcess(data);
                }
                else {
                    var toastCfg = new __WEBPACK_IMPORTED_MODULE_4__toast_toast_model__["a" /* ToastConfig */](__WEBPACK_IMPORTED_MODULE_4__toast_toast_model__["b" /* ToastType */].ERROR, '', '数据请求失败！', 3000);
                    that.toastService.toast(toastCfg);
                }
            }, function (successful, msg, err) {
                var toastCfg = new __WEBPACK_IMPORTED_MODULE_4__toast_toast_model__["a" /* ToastConfig */](__WEBPACK_IMPORTED_MODULE_4__toast_toast_model__["b" /* ToastType */].ERROR, '', msg, 3000);
                that.toastService.toast(toastCfg);
            });
        }
        else if (__WEBPACK_IMPORTED_MODULE_2__util_utils__["a" /* Utils */].isNotEmpty(this.url)) {
            this.httpService.post(this.url, serviceData, function (successful, data, res) {
                if (successful) {
                    that.serverDataProcess(data);
                }
                else {
                    var toastCfg = new __WEBPACK_IMPORTED_MODULE_4__toast_toast_model__["a" /* ToastConfig */](__WEBPACK_IMPORTED_MODULE_4__toast_toast_model__["b" /* ToastType */].ERROR, '', '数据请求失败！', 3000);
                    that.toastService.toast(toastCfg);
                }
            }, function (successful, msg, err) {
                var toastCfg = new __WEBPACK_IMPORTED_MODULE_4__toast_toast_model__["a" /* ToastConfig */](__WEBPACK_IMPORTED_MODULE_4__toast_toast_model__["b" /* ToastType */].ERROR, '', msg, 3000);
                that.toastService.toast(toastCfg);
            });
        }
        else {
            console.error("c-http-pagination组件请求时，url参数为空！");
        }
    };
    /**
     * 服务器端数据处理
     * @param data 数据
     */
    HttpPaginationComponent.prototype.serverDataProcess = function (data) {
        if (data && data.total && data.rows) {
            this.total = data.total;
            this.onDataChanged.emit(data.rows);
        }
        else {
            console.error("c-http-pagination,返回的数据格式不正确！");
        }
    };
    /**
     * 分页改变事件
     * @param event
     */
    HttpPaginationComponent.prototype.onPageChanged = function ($event) {
        if ($event.type != __WEBPACK_IMPORTED_MODULE_5__pagination_model__["b" /* PaginationType */].PAGE_INIT) {
            this.pageSize = $event.pageSize;
            this.pageNumber = $event.pageNumber;
            this.getServerData();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HttpPaginationComponent.prototype, "pageList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HttpPaginationComponent.prototype, "btnCls", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HttpPaginationComponent.prototype, "url", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HttpPaginationComponent.prototype, "method", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HttpPaginationComponent.prototype, "param", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HttpPaginationComponent.prototype, "onDataChanged", void 0);
    HttpPaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'c-http-pagination',
            template: "\n       <c-pagination [total]=\"total\" [pageList]=\"pageList\" [btnCls]=\"btnCls\" (onPageChanged)=\"onPageChanged($event)\"></c-pagination>\n    "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__toast_toast_service__["a" /* ToastService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__toast_toast_service__["a" /* ToastService */]) === "function" && _b || Object])
    ], HttpPaginationComponent);
    return HttpPaginationComponent;
    var _a, _b;
}());

//# sourceMappingURL=http-pagination.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pagination/pagination-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PaginationType; });
/* unused harmony export PaginationOptions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpPaginationMethod; });
/**
 * 分页操作类型
 */
var PaginationType = (function () {
    function PaginationType() {
    }
    PaginationType.PAGE_INIT = "pageInit";
    PaginationType.NEXT_PAGE = "nextPage";
    PaginationType.LAST_PAGE = "lastPage";
    PaginationType.PREVIOUS_PAGE = "previousPage";
    PaginationType.FRIST_PAGE = "fristPage";
    PaginationType.PAGE_SIZE_CHANGE = "pageSizeChange";
    return PaginationType;
}());

/**
 * 分页配置
 */
var PaginationOptions = (function () {
    function PaginationOptions() {
    }
    return PaginationOptions;
}());

/**
 * http分页method类型
 */
var HttpPaginationMethod = (function () {
    function HttpPaginationMethod() {
    }
    HttpPaginationMethod.POST = "post";
    HttpPaginationMethod.GET = "get";
    return HttpPaginationMethod;
}());

//# sourceMappingURL=pagination-model.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t\t<div class=\"btn-group-sm pull-right\">\n\t\t\t<button type=\"button\" style=\"width:30px\" class=\"btn  btn-sm\"  [ngClass]=\"btnCls\"  [disabled]=\"options.pageNumber==1 || options.pageTotal==0\" (click)=\"pageChanged('fristPage');\"><i class=\"fa fa-angle-left\" ></i></button>\n\t\t\t<button type=\"button\" style=\"width:30px\" class=\"btn  btn-sm\"  [ngClass]=\"btnCls\"  [disabled]=\"options.pageNumber==1 || options.pageTotal==0\" (click)=\"pageChanged('previousPage');\"><i class=\"fa fa-angle-double-left\" ></i></button>\n\t\t\t<button type=\"button\" style=\"width:30px\" class=\"btn  btn-sm\"  [ngClass]=\"btnCls\"  [disabled]=\"options.pageTotal==0\" (click)=\"pageChanged('refresh');\"><i class=\"fa fa-refresh\"></i></button>\n\t\t\t<button type=\"button\" style=\"width:30px\" class=\"btn  btn-sm\"  [ngClass]=\"btnCls\"  [disabled]=\"options.pageNumber==options.pageTotal || options.pageTotal==0\" (click)=\"pageChanged('nextPage');\"><i class=\"fa fa-angle-double-right\" ></i></button>\n\t\t\t<button type=\"button\" style=\"width:30px\" class=\"btn  btn-sm\"  [ngClass]=\"btnCls\"  [disabled]=\"options.pageNumber==options.pageTotal || options.pageTotal==0\" (click)=\"pageChanged('lastPage');\"><i class=\"fa fa-angle-right\" ></i></button>\n\t\t</div>\n\n\t\t<div class=\"btn-group pull-left\" style=\"margin-top:5px\">\n\t\t\t<span *ngIf=\"options.pageTotal>0\"> 每页\n\t\t\t\t<select  [ngModel]=\"options.pageSize\" (ngModelChange)=\"pageSizeChanged($event);\">\n\t\t\t\t<option *ngFor=\"let item of options.pageList\" [value]='item'>{{item}}</option>  \n\t\t\t\t</select> 条数据，\n\t            </span>\n\t\t\t<span *ngIf=\"options.pageTotal<=0\"> \n\t\t      每页 {{options.pageSize}} 条数据，\n\t\t\t</span>\n\n\t\t\t当前第 {{options.pageNumber}} 页, 共 {{options.pageTotal}} 页，共  {{options.total}} 条数据\n\t\t</div>\n\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagination_model__ = __webpack_require__("../../../../../src/app/shared/pagination/pagination-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * 分页组件
 */
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.total = 0;
        this.pageList = [10, 20, 30, 50, 100, 150, 200];
        this.btnCls = 'btn-light';
        this.onPageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = {};
    }
    /**
    * 改变
    * @param changes
    */
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        this.options.total = this.total;
        this.options.pageList = this.pageList;
        this.options.pageSize = this.options.pageList[0];
        this.refreshPage();
        this.pageOperation(__WEBPACK_IMPORTED_MODULE_1__pagination_model__["b" /* PaginationType */].PAGE_INIT);
    };
    /**
     * 刷新分页
     */
    PaginationComponent.prototype.refreshPage = function () {
        this.options.pageTotal = 0;
        if (Number.parseInt(this.options.total) % Number.parseInt(this.options.pageSize) == 0) {
            this.options.pageTotal = Number.parseInt(this.options.total) / Number.parseInt(this.options.pageSize);
        }
        else {
            this.options.pageTotal = Number.parseInt(this.options.total) / Number.parseInt(this.options.pageSize) + 1;
        }
        this.options.pageTotal = Number.parseInt(this.options.pageTotal);
        if (this.options.pageTotal <= 0) {
            this.options.pageNumber = 0;
        }
        else {
            this.options.pageNumber = 1;
        }
    };
    /**
     * 下一页
     */
    PaginationComponent.prototype.nextPage = function () {
        this.options.pageNumber++;
        if (this.options.pageNumber > this.options.pageTotal) {
            this.options.pageNumber = this.options.pageTotal;
        }
    };
    /**
     * 上一页
     */
    PaginationComponent.prototype.previousPage = function () {
        this.options.pageNumber--;
        if (this.options.pageNumber <= 0) {
            this.options.pageNumber = 1;
        }
    };
    /**
     * 最后一页
     */
    PaginationComponent.prototype.lastPage = function () {
        this.options.pageNumber = this.options.pageTotal;
    };
    /**
     * 第一页
     */
    PaginationComponent.prototype.fristPage = function () {
        this.options.pageNumber = 1;
    };
    /**
     * 分页操作
     * @param type  操作类型
     */
    PaginationComponent.prototype.pageOperation = function (type) {
        var pageParam = {
            pageNumber: this.options.pageNumber,
            pageSize: this.options.pageSize,
            pageTotal: this.options.pageTotal,
            total: this.options.total,
            type: type
        };
        this.onPageChanged.emit(pageParam);
    };
    /**
     * 分页改变
     * @param type 操作类型
     */
    PaginationComponent.prototype.pageChanged = function (type) {
        switch (type) {
            case __WEBPACK_IMPORTED_MODULE_1__pagination_model__["b" /* PaginationType */].NEXT_PAGE:
                this.nextPage();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__pagination_model__["b" /* PaginationType */].LAST_PAGE:
                this.lastPage();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__pagination_model__["b" /* PaginationType */].PREVIOUS_PAGE:
                this.previousPage();
                break;
            case __WEBPACK_IMPORTED_MODULE_1__pagination_model__["b" /* PaginationType */].FRIST_PAGE:
                this.fristPage();
                break;
        }
        this.pageOperation(type);
    };
    /**
     * 页数改变
     * @param $event  当前条件
     */
    PaginationComponent.prototype.pageSizeChanged = function ($event) {
        this.options.pageSize = Number.parseInt($event);
        this.refreshPage();
        this.pageOperation(__WEBPACK_IMPORTED_MODULE_1__pagination_model__["b" /* PaginationType */].PAGE_SIZE_CHANGE);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "total", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PaginationComponent.prototype, "btnCls", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "onPageChanged", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'c-pagination',
            template: __webpack_require__("../../../../../src/app/shared/pagination/pagination.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());

//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pagination/pagination.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagination_component__ = __webpack_require__("../../../../../src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_pagination_component__ = __webpack_require__("../../../../../src/app/shared/pagination/http-pagination.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/**
 *  分页模块
 */
var PaginationModule = (function () {
    function PaginationModule() {
    }
    PaginationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_4__http_pagination_component__["a" /* HttpPaginationComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_4__http_pagination_component__["a" /* HttpPaginationComponent */]
            ]
        })
    ], PaginationModule);
    return PaginationModule;
}());

//# sourceMappingURL=pagination.module.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_imageCropperModule__ = __webpack_require__("../../../../ng2-img-cropper/src/imageCropperModule.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src_imageCropperModule__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_imageCropperComponent__ = __webpack_require__("../../../../ng2-img-cropper/src/imageCropperComponent.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_imageCropperComponent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_imageCropper__ = __webpack_require__("../../../../ng2-img-cropper/src/imageCropper.js");
/* unused harmony reexport ImageCropper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cropperSettings__ = __webpack_require__("../../../../ng2-img-cropper/src/cropperSettings.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__src_cropperSettings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_cropperDrawSettings__ = __webpack_require__("../../../../ng2-img-cropper/src/cropperDrawSettings.js");
/* unused harmony reexport CropperDrawSettings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_model_bounds__ = __webpack_require__("../../../../ng2-img-cropper/src/model/bounds.js");
/* unused harmony reexport Bounds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_model_cropPosition__ = __webpack_require__("../../../../ng2-img-cropper/src/model/cropPosition.js");
/* unused harmony reexport CropPosition */
// core


// extra classes



// models


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/cropperDrawSettings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropperDrawSettings; });
var CropperDrawSettings = (function () {
    function CropperDrawSettings() {
        this.strokeWidth = 1;
        this.strokeColor = 'rgba(255,255,255,1)';
        this.dragIconStrokeWidth = 1;
        this.dragIconStrokeColor = 'rgba(0,0,0,1)';
        this.dragIconFillColor = 'rgba(255,255,255,1)';
    }
    return CropperDrawSettings;
}());

//# sourceMappingURL=cropperDrawSettings.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/cropperSettings.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropperSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cropperDrawSettings__ = __webpack_require__("../../../../ng2-img-cropper/src/cropperDrawSettings.js");

var CropperSettings = (function () {
    function CropperSettings() {
        this.canvasWidth = 300;
        this.canvasHeight = 300;
        this.dynamicSizing = false;
        this.width = 200;
        this.height = 200;
        this.minWidth = 50;
        this.minHeight = 50;
        this.minWithRelativeToResolution = true;
        this.croppedWidth = 100;
        this.croppedHeight = 100;
        this.cropperDrawSettings = new __WEBPACK_IMPORTED_MODULE_0__cropperDrawSettings__["a" /* CropperDrawSettings */]();
        this.touchRadius = 20;
        this.noFileInput = false;
        this.allowedFilesRegex = /\.(jpe?g|png|gif)$/i;
        this.preserveSize = false;
        this.compressRatio = 1.0;
        this._rounded = false;
        this._keepAspect = true;
        // init
    }
    Object.defineProperty(CropperSettings.prototype, "rounded", {
        get: function () {
            return this._rounded;
        },
        set: function (val) {
            this._rounded = val;
            if (val) {
                this._keepAspect = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CropperSettings.prototype, "keepAspect", {
        get: function () {
            return this._keepAspect;
        },
        set: function (val) {
            if (val === false && this._rounded) {
                throw new Error('Cannot set keep aspect to false on rounded cropper. Ellipsis not supported');
            }
            this._keepAspect = val;
        },
        enumerable: true,
        configurable: true
    });
    return CropperSettings;
}());

//# sourceMappingURL=cropperSettings.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/exif.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Fraction */
/* unused harmony export Debug */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exif; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fraction = (function (_super) {
    __extends(Fraction, _super);
    function Fraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fraction;
}(Number));

// Console debug wrapper that makes code looks a little bit cleaner
var Debug = (function () {
    function Debug() {
    }
    Debug.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (Exif.debug) {
            console.log(args);
        }
    };
    return Debug;
}());

var Exif = (function () {
    function Exif() {
    }
    Exif.addEvent = function (element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        }
        else {
            // Hello, IE!
            if (element.attachEvent) {
                element.attachEvent('on' + event, handler);
            }
        }
    };
    Exif.imageHasData = function (img) {
        return !!(img.exifdata);
    };
    Exif.base64ToArrayBuffer = function (base64) {
        base64 = base64.replace(/^data:([^;]+);base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    };
    Exif.objectURLToBlob = function (url, callback) {
        var http = new XMLHttpRequest();
        http.open('GET', url, true);
        http.responseType = 'blob';
        http.onload = function () {
            if (http.status === 200 || http.status === 0) {
                callback(http.response);
            }
        };
        http.send();
    };
    Exif.getImageData = function (img, callback) {
        function handleBinaryFile(binFile) {
            var data = Exif.findEXIFinJPEG(binFile);
            var iptcdata = Exif.findIPTCinJPEG(binFile);
            img.exifdata = data || {};
            img.iptcdata = iptcdata || {};
            if (callback) {
                callback.call(img);
            }
        }
        if ('src' in img && img.src) {
            if (/^data:/i.test(img.src)) {
                var arrayBuffer = Exif.base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);
            }
            else {
                if (/^blob:/i.test(img.src)) {
                    var fileReader_1 = new FileReader();
                    fileReader_1.onload = function (e) {
                        handleBinaryFile(e.target.result);
                    };
                    Exif.objectURLToBlob(img.src, function (blob) {
                        fileReader_1.readAsArrayBuffer(blob);
                    });
                }
                else {
                    var http_1 = new XMLHttpRequest();
                    http_1.onload = function () {
                        if (http_1.status === 200 || http_1.status === 0) {
                            handleBinaryFile(http_1.response);
                        }
                        else {
                            throw 'Could not load image';
                        }
                    };
                    http_1.open('GET', img.src, true);
                    http_1.responseType = 'arraybuffer';
                    http_1.send(null);
                }
            }
        }
        else {
            if (FileReader && (img instanceof Blob || img instanceof File)) {
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    Debug.log('Got file of length ' + e.target.result.byteLength);
                    handleBinaryFile(e.target.result);
                };
                fileReader.readAsArrayBuffer(img);
            }
        }
    };
    Exif.findEXIFinJPEG = function (file) {
        var dataView = new DataView(file);
        Debug.log('Got file of length ' + file.byteLength);
        if ((dataView.getUint8(0) !== 0xFF) || (dataView.getUint8(1) !== 0xD8)) {
            Debug.log('Not a valid JPEG');
            return false; // not a valid jpeg
        }
        var offset = 2;
        var length = file.byteLength;
        var marker;
        while (offset < length) {
            if (dataView.getUint8(offset) !== 0xFF) {
                Debug.log('Not a valid marker at offset ' + offset + ', found: ' + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }
            marker = dataView.getUint8(offset + 1);
            Debug.log(marker);
            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data
            if (marker === 225) {
                Debug.log('Found 0xFFE1 marker');
                return Exif.readEXIFData(dataView, offset + 4); // , dataView.getUint16(offset + 2) - 2);
                // offset += 2 + file.getShortAt(offset+2, true);
            }
            else {
                offset += 2 + dataView.getUint16(offset + 2);
            }
        }
    };
    Exif.findIPTCinJPEG = function (file) {
        var dataView = new DataView(file);
        Debug.log('Got file of length ' + file.byteLength);
        if ((dataView.getUint8(0) !== 0xFF) || (dataView.getUint8(1) !== 0xD8)) {
            Debug.log('Not a valid JPEG');
            return false; // not a valid jpeg
        }
        var offset = 2;
        var length = file.byteLength;
        var isFieldSegmentStart = function (_dataView, _offset) {
            return (_dataView.getUint8(_offset) === 0x38 && _dataView.getUint8(_offset + 1) === 0x42 && _dataView.getUint8(_offset + 2) === 0x49 && _dataView.getUint8(_offset + 3) === 0x4D && _dataView.getUint8(_offset + 4) === 0x04 && _dataView.getUint8(_offset + 5) === 0x04);
        };
        while (offset < length) {
            if (isFieldSegmentStart(dataView, offset)) {
                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset + 7);
                if (nameHeaderLength % 2 !== 0) {
                    nameHeaderLength += 1;
                }
                // Check for pre photoshop 6 format
                if (nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }
                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);
                return Exif.readIPTCData(file, startOffset, sectionLength);
            }
            // Not the marker, continue searching
            offset++;
        }
    };
    Exif.readIPTCData = function (file, startOffset, sectionLength) {
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while (segmentStartPos < startOffset + sectionLength) {
            if (dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos + 1) === 0x02) {
                segmentType = dataView.getUint8(segmentStartPos + 2);
                if (segmentType in Exif.IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos + 3);
                    segmentSize = dataSize + 5;
                    fieldName = Exif.IptcFieldMap[segmentType];
                    fieldValue = Exif.getStringFromDB(dataView, segmentStartPos + 5, dataSize);
                    // Check if we already stored a value with this name
                    if (data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if (data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }
            }
            segmentStartPos++;
        }
        return data;
    };
    Exif.readTags = function (file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd);
        var tags = {};
        var entryOffset;
        var tag;
        for (var i = 0; i < entries; i++) {
            entryOffset = dirStart + i * 12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag) {
                Debug.log('Unknown tag: ' + file.getUint16(entryOffset, !bigEnd));
            }
            tags[tag] = Exif.readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    };
    Exif.readTagValue = function (file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset + 2, !bigEnd);
        var numValues = file.getUint32(entryOffset + 4, !bigEnd);
        var valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart;
        var offset;
        var vals, val, n;
        var numerator;
        var denominator;
        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7:
                if (numValues === 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                }
                else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }
            case 2:
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return Exif.getStringFromDB(file, offset, numValues - 1);
            case 3:
                if (numValues === 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                }
                else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
                    }
                    return vals;
                }
            case 4:
                if (numValues === 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }
            case 5:
                if (numValues === 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset + 4, !bigEnd);
                    val = new Fraction(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
                        denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
                        vals[n] = new Fraction(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }
            case 9:
                if (numValues === 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }
            case 10:
                if (numValues === 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
                    }
                    return vals;
                }
            default:
                break;
        }
    };
    Exif.getStringFromDB = function (buffer, start, length) {
        var outstr = '';
        for (var n = start; n < start + length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    };
    Exif.readEXIFData = function (file, start) {
        if (Exif.getStringFromDB(file, start, 4) !== 'Exif') {
            Debug.log('Not valid EXIF data! ' + Exif.getStringFromDB(file, start, 4));
            return false;
        }
        var bigEnd, tags, tag, exifData, gpsData, tiffOffset = start + 6;
        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) === 0x4949) {
            bigEnd = false;
        }
        else {
            if (file.getUint16(tiffOffset) === 0x4D4D) {
                bigEnd = true;
            }
            else {
                Debug.log('Not valid TIFF data! (no 0x4949 or 0x4D4D)');
                return false;
            }
        }
        if (file.getUint16(tiffOffset + 2, !bigEnd) !== 0x002A) {
            Debug.log('Not valid TIFF data! (no 0x002A)');
            return false;
        }
        var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);
        if (firstIFDOffset < 0x00000008) {
            Debug.log('Not valid TIFF data! (First offset less than 8)', file.getUint32(tiffOffset + 4, !bigEnd));
            return false;
        }
        tags = Exif.readTags(file, tiffOffset, tiffOffset + firstIFDOffset, Exif.TiffTags, bigEnd);
        if (tags.ExifIFDPointer) {
            exifData = Exif.readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, Exif.Tags, bigEnd);
            for (tag in exifData) {
                if ({}.hasOwnProperty.call(exifData, tag)) {
                    switch (tag) {
                        case 'LightSource':
                        case 'Flash':
                        case 'MeteringMode':
                        case 'ExposureProgram':
                        case 'SensingMethod':
                        case 'SceneCaptureType':
                        case 'SceneType':
                        case 'CustomRendered':
                        case 'WhiteBalance':
                        case 'GainControl':
                        case 'Contrast':
                        case 'Saturation':
                        case 'Sharpness':
                        case 'SubjectDistanceRange':
                        case 'FileSource':
                            exifData[tag] = Exif.StringValues[tag][exifData[tag]];
                            break;
                        case 'ExifVersion':
                        case 'FlashpixVersion':
                            exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                            break;
                        case 'ComponentsConfiguration':
                            var compopents = 'Components';
                            exifData[tag] = Exif.StringValues[compopents][exifData[tag][0]] + Exif.StringValues[compopents][exifData[tag][1]] + Exif.StringValues[compopents][exifData[tag][2]] + Exif.StringValues[compopents][exifData[tag][3]];
                            break;
                        default:
                            break;
                    }
                    tags[tag] = exifData[tag];
                }
            }
        }
        if (tags.GPSInfoIFDPointer) {
            gpsData = Exif.readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, Exif.GPSTags, bigEnd);
            for (tag in gpsData) {
                if ({}.hasOwnProperty.call(gpsData, tag)) {
                    switch (tag) {
                        case 'GPSVersionID':
                            gpsData[tag] = gpsData[tag][0] + '.' + gpsData[tag][1] + '.' + gpsData[tag][2] + '.' + gpsData[tag][3];
                            break;
                        default:
                            break;
                    }
                    tags[tag] = gpsData[tag];
                }
            }
        }
        return tags;
    };
    Exif.getData = function (img, callback) {
        if ((img instanceof Image || img instanceof HTMLImageElement) && !img.complete) {
            return false;
        }
        if (!Exif.imageHasData(img)) {
            Exif.getImageData(img, callback);
        }
        else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    };
    Exif.getTag = function (img, tag) {
        if (!Exif.imageHasData(img)) {
            return;
        }
        return img.exifdata[tag];
    };
    ;
    Exif.getAllTags = function (img) {
        if (!Exif.imageHasData(img)) {
            return {};
        }
        var a, data = img.exifdata, tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    };
    ;
    Exif.pretty = function (img) {
        if (!Exif.imageHasData(img)) {
            return '';
        }
        var a, data = img.exifdata, strPretty = '';
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] === 'object') {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    }
                    else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                }
                else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    };
    Exif.readFromBinaryFile = function (file) {
        return Exif.findEXIFinJPEG(file);
    };
    return Exif;
}());

Exif.debug = false;
Exif.IptcFieldMap = {
    0x78: 'caption',
    0x6E: 'credit',
    0x19: 'keywords',
    0x37: 'dateCreated',
    0x50: 'byline',
    0x55: 'bylineTitle',
    0x7A: 'captionWriter',
    0x69: 'headline',
    0x74: 'copyright',
    0x0F: 'category'
};
Exif.Tags = {
    // version tags
    0x9000: 'ExifVersion',
    0xA000: 'FlashpixVersion',
    // colorspace tags
    0xA001: 'ColorSpace',
    // image configuration
    0xA002: 'PixelXDimension',
    0xA003: 'PixelYDimension',
    0x9101: 'ComponentsConfiguration',
    0x9102: 'CompressedBitsPerPixel',
    // user information
    0x927C: 'MakerNote',
    0x9286: 'UserComment',
    // related file
    0xA004: 'RelatedSoundFile',
    // date and time
    0x9003: 'DateTimeOriginal',
    0x9004: 'DateTimeDigitized',
    0x9290: 'SubsecTime',
    0x9291: 'SubsecTimeOriginal',
    0x9292: 'SubsecTimeDigitized',
    // picture-taking conditions
    0x829A: 'ExposureTime',
    0x829D: 'FNumber',
    0x8822: 'ExposureProgram',
    0x8824: 'SpectralSensitivity',
    0x8827: 'ISOSpeedRatings',
    0x8828: 'OECF',
    0x9201: 'ShutterSpeedValue',
    0x9202: 'ApertureValue',
    0x9203: 'BrightnessValue',
    0x9204: 'ExposureBias',
    0x9205: 'MaxApertureValue',
    0x9206: 'SubjectDistance',
    0x9207: 'MeteringMode',
    0x9208: 'LightSource',
    0x9209: 'Flash',
    0x9214: 'SubjectArea',
    0x920A: 'FocalLength',
    0xA20B: 'FlashEnergy',
    0xA20C: 'SpatialFrequencyResponse',
    0xA20E: 'FocalPlaneXResolution',
    0xA20F: 'FocalPlaneYResolution',
    0xA210: 'FocalPlaneResolutionUnit',
    0xA214: 'SubjectLocation',
    0xA215: 'ExposureIndex',
    0xA217: 'SensingMethod',
    0xA300: 'FileSource',
    0xA301: 'SceneType',
    0xA302: 'CFAPattern',
    0xA401: 'CustomRendered',
    0xA402: 'ExposureMode',
    0xA403: 'WhiteBalance',
    0xA404: 'DigitalZoomRation',
    0xA405: 'FocalLengthIn35mmFilm',
    0xA406: 'SceneCaptureType',
    0xA407: 'GainControl',
    0xA408: 'Contrast',
    0xA409: 'Saturation',
    0xA40A: 'Sharpness',
    0xA40B: 'DeviceSettingDescription',
    0xA40C: 'SubjectDistanceRange',
    // other tags
    0xA005: 'InteroperabilityIFDPointer', 0xA420: 'ImageUniqueID' // Identifier assigned uniquely to each image
};
Exif.TiffTags = {
    0x0100: 'ImageWidth',
    0x0101: 'ImageHeight',
    0x8769: 'ExifIFDPointer',
    0x8825: 'GPSInfoIFDPointer',
    0xA005: 'InteroperabilityIFDPointer',
    0x0102: 'BitsPerSample',
    0x0103: 'Compression',
    0x0106: 'PhotometricInterpretation',
    0x0112: 'Orientation',
    0x0115: 'SamplesPerPixel',
    0x011C: 'PlanarConfiguration',
    0x0212: 'YCbCrSubSampling',
    0x0213: 'YCbCrPositioning',
    0x011A: 'XResolution',
    0x011B: 'YResolution',
    0x0128: 'ResolutionUnit',
    0x0111: 'StripOffsets',
    0x0116: 'RowsPerStrip',
    0x0117: 'StripByteCounts',
    0x0201: 'JPEGInterchangeFormat',
    0x0202: 'JPEGInterchangeFormatLength',
    0x012D: 'TransferFunction',
    0x013E: 'WhitePoint',
    0x013F: 'PrimaryChromaticities',
    0x0211: 'YCbCrCoefficients',
    0x0214: 'ReferenceBlackWhite',
    0x0132: 'DateTime',
    0x010E: 'ImageDescription',
    0x010F: 'Make',
    0x0110: 'Model',
    0x0131: 'Software',
    0x013B: 'Artist',
    0x8298: 'Copyright'
};
Exif.GPSTags = {
    0x0000: 'GPSVersionID',
    0x0001: 'GPSLatitudeRef',
    0x0002: 'GPSLatitude',
    0x0003: 'GPSLongitudeRef',
    0x0004: 'GPSLongitude',
    0x0005: 'GPSAltitudeRef',
    0x0006: 'GPSAltitude',
    0x0007: 'GPSTimeStamp',
    0x0008: 'GPSSatellites',
    0x0009: 'GPSStatus',
    0x000A: 'GPSMeasureMode',
    0x000B: 'GPSDOP',
    0x000C: 'GPSSpeedRef',
    0x000D: 'GPSSpeed',
    0x000E: 'GPSTrackRef',
    0x000F: 'GPSTrack',
    0x0010: 'GPSImgDirectionRef',
    0x0011: 'GPSImgDirection',
    0x0012: 'GPSMapDatum',
    0x0013: 'GPSDestLatitudeRef',
    0x0014: 'GPSDestLatitude',
    0x0015: 'GPSDestLongitudeRef',
    0x0016: 'GPSDestLongitude',
    0x0017: 'GPSDestBearingRef',
    0x0018: 'GPSDestBearing',
    0x0019: 'GPSDestDistanceRef',
    0x001A: 'GPSDestDistance',
    0x001B: 'GPSProcessingMethod',
    0x001C: 'GPSAreaInformation',
    0x001D: 'GPSDateStamp',
    0x001E: 'GPSDifferential'
};
Exif.StringValues = {
    ExposureProgram: {
        0: 'Not defined',
        1: 'Manual',
        2: 'Normal program',
        3: 'Aperture priority',
        4: 'Shutter priority',
        5: 'Creative program',
        6: 'Action program',
        7: 'Portrait mode',
        8: 'Landscape mode'
    }, MeteringMode: {
        0: 'Unknown',
        1: 'Average',
        2: 'CenterWeightedAverage',
        3: 'Spot',
        4: 'MultiSpot',
        5: 'Pattern',
        6: 'Partial',
        255: 'Other'
    }, LightSource: {
        0: 'Unknown',
        1: 'Daylight',
        2: 'Fluorescent',
        3: 'Tungsten (incandescent light)',
        4: 'Flash',
        9: 'Fine weather',
        10: 'Cloudy weather',
        11: 'Shade',
        12: 'Daylight fluorescent (D 5700 - 7100K)',
        13: 'Day white fluorescent (N 4600 - 5400K)',
        14: 'Cool white fluorescent (W 3900 - 4500K)',
        15: 'White fluorescent (WW 3200 - 3700K)',
        17: 'Standard light A',
        18: 'Standard light B',
        19: 'Standard light C',
        20: 'D55',
        21: 'D65',
        22: 'D75',
        23: 'D50',
        24: 'ISO studio tungsten',
        255: 'Other'
    }, Flash: {
        0x0000: 'Flash did not fire',
        0x0001: 'Flash fired',
        0x0005: 'Strobe return light not detected',
        0x0007: 'Strobe return light detected',
        0x0009: 'Flash fired, compulsory flash mode',
        0x000D: 'Flash fired, compulsory flash mode, return light not detected',
        0x000F: 'Flash fired, compulsory flash mode, return light detected',
        0x0010: 'Flash did not fire, compulsory flash mode',
        0x0018: 'Flash did not fire, auto mode',
        0x0019: 'Flash fired, auto mode',
        0x001D: 'Flash fired, auto mode, return light not detected',
        0x001F: 'Flash fired, auto mode, return light detected',
        0x0020: 'No flash function',
        0x0041: 'Flash fired, red-eye reduction mode',
        0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
        0x0047: 'Flash fired, red-eye reduction mode, return light detected',
        0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
        0x004D: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
        0x004F: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
        0x0059: 'Flash fired, auto mode, red-eye reduction mode',
        0x005D: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
        0x005F: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
    }, SensingMethod: {
        1: 'Not defined',
        2: 'One-chip color area sensor',
        3: 'Two-chip color area sensor',
        4: 'Three-chip color area sensor',
        5: 'Color sequential area sensor',
        7: 'Trilinear sensor',
        8: 'Color sequential linear sensor'
    }, SceneCaptureType: {
        0: 'Standard', 1: 'Landscape', 2: 'Portrait', 3: 'Night scene'
    }, SceneType: {
        1: 'Directly photographed'
    }, CustomRendered: {
        0: 'Normal process', 1: 'Custom process'
    }, WhiteBalance: {
        0: 'Auto white balance', 1: 'Manual white balance'
    }, GainControl: {
        0: 'None', 1: 'Low gain up', 2: 'High gain up', 3: 'Low gain down', 4: 'High gain down'
    }, Contrast: {
        0: 'Normal', 1: 'Soft', 2: 'Hard'
    }, Saturation: {
        0: 'Normal', 1: 'Low saturation', 2: 'High saturation'
    }, Sharpness: {
        0: 'Normal', 1: 'Soft', 2: 'Hard'
    }, SubjectDistanceRange: {
        0: 'Unknown', 1: 'Macro', 2: 'Close view', 3: 'Distant view'
    }, FileSource: {
        3: 'DSC'
    },
    Components: {
        0: '', 1: 'Y', 2: 'Cb', 3: 'Cr', 4: 'R', 5: 'G', 6: 'B'
    }
};
//# sourceMappingURL=exif.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/imageCropper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_bounds__ = __webpack_require__("../../../../ng2-img-cropper/src/model/bounds.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__ = __webpack_require__("../../../../ng2-img-cropper/src/model/cornerMarker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_cropTouch__ = __webpack_require__("../../../../ng2-img-cropper/src/model/cropTouch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_dragMarker__ = __webpack_require__("../../../../ng2-img-cropper/src/model/dragMarker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_imageCropperModel__ = __webpack_require__("../../../../ng2-img-cropper/src/model/imageCropperModel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__ = __webpack_require__("../../../../ng2-img-cropper/src/imageCropperDataShare.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_pointPool__ = __webpack_require__("../../../../ng2-img-cropper/src/model/pointPool.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var ImageCropper = (function (_super) {
    __extends(ImageCropper, _super);
    function ImageCropper(cropperSettings) {
        var _this = _super.call(this) || this;
        var x = 0;
        var y = 0;
        var width = cropperSettings.width;
        var height = cropperSettings.height;
        var keepAspect = cropperSettings.keepAspect;
        var touchRadius = cropperSettings.touchRadius;
        var minWidth = cropperSettings.minWidth;
        var minHeight = cropperSettings.minHeight;
        var croppedWidth = cropperSettings.croppedWidth;
        var croppedHeight = cropperSettings.croppedHeight;
        _this.cropperSettings = cropperSettings;
        _this.crop = _this;
        _this.x = x;
        _this.y = y;
        if (width === void 0) {
            _this.width = 100;
        }
        if (height === void 0) {
            _this.height = 50;
        }
        if (keepAspect === void 0) {
            _this.keepAspect = true;
        }
        if (touchRadius === void 0) {
            _this.touchRadius = 20;
        }
        _this.minWidth = minWidth;
        _this.minHeight = minHeight;
        _this.keepAspect = false;
        _this.aspectRatio = 0;
        _this.currentDragTouches = [];
        _this.isMouseDown = false;
        _this.ratioW = 1;
        _this.ratioH = 1;
        _this.fileType = cropperSettings.fileType;
        _this.imageSet = false;
        _this.pointPool = new __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */](200);
        _this.tl = new __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */](x, y, touchRadius, _this.cropperSettings);
        _this.tr = new __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */](x + width, y, touchRadius, _this.cropperSettings);
        _this.bl = new __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */](x, y + height, touchRadius, _this.cropperSettings);
        _this.br = new __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */](x + width, y + height, touchRadius, _this.cropperSettings);
        _this.tl.addHorizontalNeighbour(_this.tr);
        _this.tl.addVerticalNeighbour(_this.bl);
        _this.tr.addHorizontalNeighbour(_this.tl);
        _this.tr.addVerticalNeighbour(_this.br);
        _this.bl.addHorizontalNeighbour(_this.br);
        _this.bl.addVerticalNeighbour(_this.tl);
        _this.br.addHorizontalNeighbour(_this.bl);
        _this.br.addVerticalNeighbour(_this.tr);
        _this.markers = [_this.tl, _this.tr, _this.bl, _this.br];
        _this.center = new __WEBPACK_IMPORTED_MODULE_3__model_dragMarker__["a" /* DragMarker */](x + (width / 2), y + (height / 2), touchRadius, _this.cropperSettings);
        _this.keepAspect = keepAspect;
        _this.aspectRatio = height / width;
        _this.croppedImage = new Image();
        _this.currentlyInteracting = false;
        _this.cropWidth = croppedWidth;
        _this.cropHeight = croppedHeight;
        return _this;
    }
    ImageCropper.sign = function (x) {
        if (+x === x) {
            return (x === 0) ? x : (x > 0) ? 1 : -1;
        }
        return NaN;
    };
    ImageCropper.getMousePos = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(evt.clientX - rect.left, evt.clientY - rect.top);
    };
    ImageCropper.getTouchPos = function (canvas, touch) {
        var rect = canvas.getBoundingClientRect();
        return __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(touch.clientX - rect.left, touch.clientY - rect.top);
    };
    ImageCropper.detectVerticalSquash = function (img) {
        var ih = img.height;
        var canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = ih;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        var imageData = ctx.getImageData(0, 0, 1, ih);
        if (imageData) {
            var data = imageData.data;
            // search image edge pixel position in case it is squashed vertically.
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                }
                else {
                    sy = py;
                }
                py = (ey + sy) >> 1;
            }
            var ratio = (py / ih);
            return (ratio === 0) ? 1 : ratio;
        }
        else {
            return 1;
        }
    };
    ImageCropper.prototype.getDataUriMimeType = function (dataUri) {
        // Get a substring because the regex does not perform well on very large strings. Cater for optional charset. Length 50 shoould be enough.
        var dataUriSubstring = dataUri.substring(0, 50);
        var mimeType = 'image/png';
        // data-uri scheme
        // data:[<media type>][;charset=<character set>][;base64],<data>
        var regEx = RegExp(/^(data:)([\w\/\+]+);(charset=[\w-]+|base64).*,(.*)/gi);
        var matches = regEx.exec(dataUriSubstring);
        if (matches && matches[2]) {
            mimeType = matches[2];
            if (mimeType == 'image/jpg') {
                mimeType = 'image/jpeg';
            }
        }
        return mimeType;
    };
    ImageCropper.prototype.prepare = function (canvas) {
        this.buffer = document.createElement('canvas');
        this.cropCanvas = document.createElement('canvas');
        // todo get more reliable parent width value.
        var responsiveWidth = canvas.parentElement ? canvas.parentElement.clientWidth : 0;
        if (responsiveWidth > 0 && this.cropperSettings.dynamicSizing) {
            this.cropCanvas.width = responsiveWidth;
            this.buffer.width = responsiveWidth;
            canvas.width = responsiveWidth;
        }
        else {
            this.cropCanvas.width = this.cropWidth;
            this.buffer.width = canvas.width;
        }
        this.cropCanvas.height = this.cropHeight;
        this.buffer.height = canvas.height;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.draw(this.ctx);
    };
    ImageCropper.prototype.resizeCanvas = function (width, height, setImage) {
        if (setImage === void 0) { setImage = false; }
        this.canvas.width = this.cropCanvas.width = this.width = this.canvasWidth = this.buffer.width = width;
        this.canvas.height = this.cropCanvas.height = this.height = this.canvasHeight = this.buffer.height = height;
        if (setImage) {
            this.setImage(this.srcImage);
        }
    };
    ImageCropper.prototype.reset = function () {
        this.setImage(undefined);
    };
    ImageCropper.prototype.draw = function (ctx) {
        var bounds = this.getBounds();
        if (this.srcImage) {
            ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            var sourceAspect = this.srcImage.height / this.srcImage.width;
            var canvasAspect = this.canvasHeight / this.canvasWidth;
            var w = this.canvasWidth;
            var h = this.canvasHeight;
            if (canvasAspect > sourceAspect) {
                w = this.canvasWidth;
                h = this.canvasWidth * sourceAspect;
            }
            else {
                h = this.canvasHeight;
                w = this.canvasHeight / sourceAspect;
            }
            this.ratioW = w / this.srcImage.width;
            this.ratioH = h / this.srcImage.height;
            if (canvasAspect < sourceAspect) {
                this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, this.buffer.width / 2 - w / 2, 0, w, h);
            }
            else {
                this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, 0, this.buffer.height / 2 - h / 2, w, h);
            }
            this.buffer.getContext('2d')
                .drawImage(this.canvas, 0, 0, this.canvasWidth, this.canvasHeight);
            ctx.lineWidth = this.cropperSettings.cropperDrawSettings.strokeWidth;
            ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.strokeColor; // 'rgba(255,228,0,1)';
            if (!this.cropperSettings.rounded) {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
                ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
                ctx.drawImage(this.buffer, bounds.left, bounds.top, Math.max(bounds.width, 1), Math.max(bounds.height, 1), bounds.left, bounds.top, bounds.width, bounds.height);
                ctx.strokeRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
            else {
                ctx.beginPath();
                ctx.arc(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2, bounds.width / 2, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.stroke();
            }
            var marker = void 0;
            for (var i = 0; i < this.markers.length; i++) {
                marker = this.markers[i];
                marker.draw(ctx);
            }
            this.center.draw(ctx);
        }
        else {
            ctx.fillStyle = 'rgba(192,192,192,1)';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    };
    ImageCropper.prototype.dragCenter = function (x, y, marker) {
        var bounds = this.getBounds();
        var left = x - (bounds.width / 2);
        var right = x + (bounds.width / 2);
        var top = y - (bounds.height / 2);
        var bottom = y + (bounds.height / 2);
        if (right >= this.maxXClamp) {
            x = this.maxXClamp - bounds.width / 2;
        }
        if (left <= this.minXClamp) {
            x = bounds.width / 2 + this.minXClamp;
        }
        if (top < this.minYClamp) {
            y = bounds.height / 2 + this.minYClamp;
        }
        if (bottom >= this.maxYClamp) {
            y = this.maxYClamp - bounds.height / 2;
        }
        this.tl.moveX(x - (bounds.width / 2));
        this.tl.moveY(y - (bounds.height / 2));
        this.tr.moveX(x + (bounds.width / 2));
        this.tr.moveY(y - (bounds.height / 2));
        this.bl.moveX(x - (bounds.width / 2));
        this.bl.moveY(y + (bounds.height / 2));
        this.br.moveX(x + (bounds.width / 2));
        this.br.moveY(y + (bounds.height / 2));
        marker.setPosition(x, y);
    };
    ImageCropper.prototype.enforceMinSize = function (x, y, marker) {
        var xLength = x - marker.getHorizontalNeighbour().position.x;
        var yLength = y - marker.getVerticalNeighbour().position.y;
        var xOver = this.minWidth - Math.abs(xLength);
        var yOver = this.minHeight - Math.abs(yLength);
        if (xLength === 0 || yLength === 0) {
            x = marker.position.x;
            y = marker.position.y;
            return __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y);
        }
        if (this.keepAspect) {
            if (xOver > 0 && (yOver / this.aspectRatio) > 0) {
                if (xOver > (yOver / this.aspectRatio)) {
                    if (xLength < 0) {
                        x -= xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                    else {
                        x += xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                }
                else {
                    if (yLength < 0) {
                        y -= yOver;
                        if (xLength < 0) {
                            x -= yOver / this.aspectRatio;
                        }
                        else {
                            x += yOver / this.aspectRatio;
                        }
                    }
                    else {
                        y += yOver;
                        if (xLength < 0) {
                            x -= yOver / this.aspectRatio;
                        }
                        else {
                            x += yOver / this.aspectRatio;
                        }
                    }
                }
            }
            else {
                if (xOver > 0) {
                    if (xLength < 0) {
                        x -= xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                    else {
                        x += xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                }
                else {
                    if (yOver > 0) {
                        if (yLength < 0) {
                            y -= yOver;
                            if (xLength < 0) {
                                x -= yOver / this.aspectRatio;
                            }
                            else {
                                x += yOver / this.aspectRatio;
                            }
                        }
                        else {
                            y += yOver;
                            if (xLength < 0) {
                                x -= yOver / this.aspectRatio;
                            }
                            else {
                                x += yOver / this.aspectRatio;
                            }
                        }
                    }
                }
            }
        }
        else {
            if (xOver > 0) {
                if (xLength < 0) {
                    x -= xOver;
                }
                else {
                    x += xOver;
                }
            }
            if (yOver > 0) {
                if (yLength < 0) {
                    y -= yOver;
                }
                else {
                    y += yOver;
                }
            }
        }
        if (x < this.minXClamp || x > this.maxXClamp || y < this.minYClamp || y > this.maxYClamp) {
            x = marker.position.x;
            y = marker.position.y;
        }
        return __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y);
    };
    ImageCropper.prototype.dragCorner = function (x, y, marker) {
        var iX = 0;
        var iY = 0;
        var ax = 0;
        var ay = 0;
        var newHeight = 0;
        var newWidth = 0;
        var newY = 0;
        var newX = 0;
        var anchorMarker;
        var fold = 0;
        if (this.keepAspect) {
            anchorMarker = marker.getHorizontalNeighbour().getVerticalNeighbour();
            ax = anchorMarker.position.x;
            ay = anchorMarker.position.y;
            if (x <= anchorMarker.position.x) {
                if (y <= anchorMarker.position.y) {
                    iX = ax - (100 / this.aspectRatio);
                    iY = ay - (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(__WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(iX, iY), anchorMarker.position, __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y));
                    if (fold > 0) {
                        newHeight = Math.abs(anchorMarker.position.y - y);
                        newWidth = newHeight / this.aspectRatio;
                        newY = anchorMarker.position.y - newHeight;
                        newX = anchorMarker.position.x - newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                    }
                    else {
                        if (fold < 0) {
                            newWidth = Math.abs(anchorMarker.position.x - x);
                            newHeight = newWidth * this.aspectRatio;
                            newY = anchorMarker.position.y - newHeight;
                            newX = anchorMarker.position.x - newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                        }
                    }
                }
                else {
                    iX = ax - (100 / this.aspectRatio);
                    iY = ay + (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(__WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(iX, iY), anchorMarker.position, __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y));
                    if (fold > 0) {
                        newWidth = Math.abs(anchorMarker.position.x - x);
                        newHeight = newWidth * this.aspectRatio;
                        newY = anchorMarker.position.y + newHeight;
                        newX = anchorMarker.position.x - newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                    }
                    else {
                        if (fold < 0) {
                            newHeight = Math.abs(anchorMarker.position.y - y);
                            newWidth = newHeight / this.aspectRatio;
                            newY = anchorMarker.position.y + newHeight;
                            newX = anchorMarker.position.x - newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                        }
                    }
                }
            }
            else {
                if (y <= anchorMarker.position.y) {
                    iX = ax + (100 / this.aspectRatio);
                    iY = ay - (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(__WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(iX, iY), anchorMarker.position, __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y));
                    if (fold < 0) {
                        newHeight = Math.abs(anchorMarker.position.y - y);
                        newWidth = newHeight / this.aspectRatio;
                        newY = anchorMarker.position.y - newHeight;
                        newX = anchorMarker.position.x + newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                    }
                    else {
                        if (fold > 0) {
                            newWidth = Math.abs(anchorMarker.position.x - x);
                            newHeight = newWidth * this.aspectRatio;
                            newY = anchorMarker.position.y - newHeight;
                            newX = anchorMarker.position.x + newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                        }
                    }
                }
                else {
                    iX = ax + (100 / this.aspectRatio);
                    iY = ay + (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(__WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(iX, iY), anchorMarker.position, __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y));
                    if (fold < 0) {
                        newWidth = Math.abs(anchorMarker.position.x - x);
                        newHeight = newWidth * this.aspectRatio;
                        newY = anchorMarker.position.y + newHeight;
                        newX = anchorMarker.position.x + newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                    }
                    else {
                        if (fold > 0) {
                            newHeight = Math.abs(anchorMarker.position.y - y);
                            newWidth = newHeight / this.aspectRatio;
                            newY = anchorMarker.position.y + newHeight;
                            newX = anchorMarker.position.x + newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                        }
                    }
                }
            }
        }
        else {
            var min = this.enforceMinSize(x, y, marker);
            marker.move(min.x, min.y);
            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
        }
        this.center.recalculatePosition(this.getBounds());
    };
    ImageCropper.prototype.getSide = function (a, b, c) {
        var n = ImageCropper.sign((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x));
        // TODO move the return of the pools to outside of this function
        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(a);
        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(c);
        return n;
    };
    ImageCropper.prototype.handleRelease = function (newCropTouch) {
        if (newCropTouch == null) {
            return;
        }
        var index = 0;
        for (var k = 0; k < this.currentDragTouches.length; k++) {
            if (newCropTouch.id === this.currentDragTouches[k].id) {
                this.currentDragTouches[k].dragHandle.setDrag(false);
                index = k;
            }
        }
        this.currentDragTouches.splice(index, 1);
        this.draw(this.ctx);
    };
    ImageCropper.prototype.handleMove = function (newCropTouch) {
        var matched = false;
        for (var k = 0; k < this.currentDragTouches.length; k++) {
            if (newCropTouch.id === this.currentDragTouches[k].id && this.currentDragTouches[k].dragHandle != null) {
                var dragTouch = this.currentDragTouches[k];
                var clampedPositions = this.clampPosition(newCropTouch.x - dragTouch.dragHandle.offset.x, newCropTouch.y - dragTouch.dragHandle.offset.y);
                newCropTouch.x = clampedPositions.x;
                newCropTouch.y = clampedPositions.y;
                __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(clampedPositions);
                if (dragTouch.dragHandle instanceof __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */]) {
                    this.dragCorner(newCropTouch.x, newCropTouch.y, dragTouch.dragHandle);
                }
                else {
                    this.dragCenter(newCropTouch.x, newCropTouch.y, dragTouch.dragHandle);
                }
                this.currentlyInteracting = true;
                matched = true;
                __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setPressed(this.canvas);
                break;
            }
        }
        if (!matched) {
            for (var i = 0; i < this.markers.length; i++) {
                var marker = this.markers[i];
                if (marker.touchInBounds(newCropTouch.x, newCropTouch.y)) {
                    newCropTouch.dragHandle = marker;
                    this.currentDragTouches.push(newCropTouch);
                    marker.setDrag(true);
                    newCropTouch.dragHandle.offset.x = newCropTouch.x - newCropTouch.dragHandle.position.x;
                    newCropTouch.dragHandle.offset.y = newCropTouch.y - newCropTouch.dragHandle.position.y;
                    this.dragCorner(newCropTouch.x - newCropTouch.dragHandle.offset.x, newCropTouch.y - newCropTouch.dragHandle.offset.y, newCropTouch.dragHandle);
                    break;
                }
            }
            if (newCropTouch.dragHandle === null || typeof newCropTouch.dragHandle === 'undefined') {
                if (this.center.touchInBounds(newCropTouch.x, newCropTouch.y)) {
                    newCropTouch.dragHandle = this.center;
                    this.currentDragTouches.push(newCropTouch);
                    newCropTouch.dragHandle.setDrag(true);
                    newCropTouch.dragHandle.offset.x = newCropTouch.x - newCropTouch.dragHandle.position.x;
                    newCropTouch.dragHandle.offset.y = newCropTouch.y - newCropTouch.dragHandle.position.y;
                    this.dragCenter(newCropTouch.x - newCropTouch.dragHandle.offset.x, newCropTouch.y - newCropTouch.dragHandle.offset.y, newCropTouch.dragHandle);
                }
            }
        }
    };
    ImageCropper.prototype.updateClampBounds = function () {
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        var canvasAspect = this.canvas.height / this.canvas.width;
        var w = this.canvas.width;
        var h = this.canvas.height;
        if (canvasAspect > sourceAspect) {
            w = this.canvas.width;
            h = this.canvas.width * sourceAspect;
        }
        else {
            h = this.canvas.height;
            w = this.canvas.height / sourceAspect;
        }
        this.minXClamp = this.canvas.width / 2 - w / 2;
        this.minYClamp = this.canvas.height / 2 - h / 2;
        this.maxXClamp = this.canvas.width / 2 + w / 2;
        this.maxYClamp = this.canvas.height / 2 + h / 2;
    };
    ImageCropper.prototype.getCropBounds = function () {
        var bounds = this.getBounds();
        bounds.top = Math.round((bounds.top - this.minYClamp) / this.ratioH);
        bounds.bottom = Math.round((bounds.bottom - this.minYClamp) / this.ratioH);
        bounds.left = Math.round((bounds.left - this.minXClamp) / this.ratioW);
        bounds.right = Math.round((bounds.right - this.minXClamp) / this.ratioW);
        return bounds;
    };
    ImageCropper.prototype.clampPosition = function (x, y) {
        if (x < this.minXClamp) {
            x = this.minXClamp;
        }
        if (x > this.maxXClamp) {
            x = this.maxXClamp;
        }
        if (y < this.minYClamp) {
            y = this.minYClamp;
        }
        if (y > this.maxYClamp) {
            y = this.maxYClamp;
        }
        return __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y);
    };
    ImageCropper.prototype.isImageSet = function () {
        return this.imageSet;
    };
    ImageCropper.prototype.setImage = function (img) {
        this.srcImage = img;
        if (!img) {
            this.imageSet = false;
            this.draw(this.ctx);
        }
        else {
            this.imageSet = true;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            var bufferContext = this.buffer.getContext('2d');
            bufferContext.clearRect(0, 0, this.buffer.width, this.buffer.height);
            if (!this.cropperSettings.fileType)
                this.fileType = this.getDataUriMimeType(img.src);
            if (this.cropperSettings.minWithRelativeToResolution) {
                this.minWidth = (this.canvas.width * this.minWidth / this.srcImage.width);
                this.minHeight = (this.canvas.height * this.minHeight / this.srcImage.height);
            }
            this.updateClampBounds();
            this.canvasWidth = this.canvas.width;
            this.canvasHeight = this.canvas.height;
            var cropPosition = this.getCropPositionFromMarkers();
            this.setCropPosition(cropPosition);
        }
    };
    ImageCropper.prototype.updateCropPosition = function (cropBounds) {
        var cropPosition = this.getCropPositionFromBounds(cropBounds);
        this.setCropPosition(cropPosition);
    };
    ImageCropper.prototype.setCropPosition = function (cropPosition) {
        this.tl.setPosition(cropPosition[0].x, cropPosition[0].y);
        this.tr.setPosition(cropPosition[1].x, cropPosition[1].y);
        this.bl.setPosition(cropPosition[2].x, cropPosition[2].y);
        this.br.setPosition(cropPosition[3].x, cropPosition[3].y);
        this.center.setPosition(cropPosition[4].x, cropPosition[4].y);
        for (var _i = 0, cropPosition_1 = cropPosition; _i < cropPosition_1.length; _i++) {
            var position = cropPosition_1[_i];
            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(position);
        }
        this.vertSquashRatio = ImageCropper.detectVerticalSquash(this.srcImage);
        this.draw(this.ctx);
        this.croppedImage = this.getCroppedImage(this.cropWidth, this.cropHeight);
    };
    ImageCropper.prototype.getCropPositionFromMarkers = function () {
        var w = this.canvas.width;
        var h = this.canvas.height;
        var tlPos, trPos, blPos, brPos, center;
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        var cropBounds = this.getBounds();
        var cropAspect = cropBounds.height / cropBounds.width;
        var cX = this.canvas.width / 2;
        var cY = this.canvas.height / 2;
        if (cropAspect > sourceAspect) {
            var imageH = Math.min(w * sourceAspect, h);
            var cropW = imageH / cropAspect;
            tlPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX - cropW / 2, cY + imageH / 2);
            trPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX + cropW / 2, cY + imageH / 2);
            blPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX - cropW / 2, cY - imageH / 2);
            brPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX + cropW / 2, cY - imageH / 2);
        }
        else {
            var imageW = Math.min(h / sourceAspect, w);
            var cropH = imageW * cropAspect;
            tlPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX - imageW / 2, cY + cropH / 2);
            trPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX + imageW / 2, cY + cropH / 2);
            blPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX - imageW / 2, cY - cropH / 2);
            brPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX + imageW / 2, cY - cropH / 2);
        }
        center = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX, cY);
        var positions = [tlPos, trPos, blPos, brPos, center];
        return positions;
    };
    ImageCropper.prototype.getCropPositionFromBounds = function (cropPosition) {
        var marginTop = 0;
        var marginLeft = 0;
        var canvasAspect = this.canvasHeight / this.canvasWidth;
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        if (canvasAspect > sourceAspect) {
            marginTop = this.buffer.height / 2 - (this.canvasWidth * sourceAspect) / 2;
        }
        else {
            marginLeft = this.buffer.width / 2 - (this.canvasHeight / sourceAspect) / 2;
        }
        var ratioW = (this.canvasWidth - marginLeft * 2) / this.srcImage.width;
        var ratioH = (this.canvasHeight - marginTop * 2) / this.srcImage.height;
        var actualH = cropPosition.height * ratioH;
        var actualW = cropPosition.width * ratioW;
        var actualX = cropPosition.left * ratioW + marginLeft;
        var actualY = cropPosition.top * ratioH + marginTop;
        if (this.keepAspect) {
            var scaledW = actualH / this.aspectRatio;
            var scaledH = actualW * this.aspectRatio;
            if (this.getCropBounds().height === cropPosition.height) {
                actualH = scaledH;
            }
            else if (this.getCropBounds().width === cropPosition.width) {
                actualW = scaledW;
            }
            else {
                if (Math.abs(scaledH - actualH) < Math.abs(scaledW - actualW)) {
                    actualW = scaledW;
                }
                else {
                    actualH = scaledH;
                }
            }
        }
        var tlPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(actualX, actualY + actualH);
        var trPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(actualX + actualW, actualY + actualH);
        var blPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(actualX, actualY);
        var brPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(actualX + actualW, actualY);
        var center = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(actualX + actualW / 2, actualY + actualH / 2);
        var positions = [tlPos, trPos, blPos, brPos, center];
        return positions;
    };
    // todo: Unused parameters?
    ImageCropper.prototype.getCroppedImage = function (fillWidth, fillHeight) {
        var bounds = this.getBounds();
        if (!this.srcImage) {
            return document.createElement('img');
        }
        else {
            var sourceAspect = this.srcImage.height / this.srcImage.width;
            var canvasAspect = this.canvas.height / this.canvas.width;
            var w = this.canvas.width;
            var h = this.canvas.height;
            if (canvasAspect > sourceAspect) {
                w = this.canvas.width;
                h = this.canvas.width * sourceAspect;
            }
            else {
                if (canvasAspect < sourceAspect) {
                    h = this.canvas.height;
                    w = this.canvas.height / sourceAspect;
                }
                else {
                    h = this.canvas.height;
                    w = this.canvas.width;
                }
            }
            this.ratioW = w / this.srcImage.width;
            this.ratioH = h / this.srcImage.height;
            var offsetH = (this.buffer.height - h) / 2 / this.ratioH;
            var offsetW = (this.buffer.width - w) / 2 / this.ratioW;
            var ctx = this.cropCanvas.getContext('2d');
            if (this.cropperSettings.preserveSize) {
                var width = Math.round(bounds.right / this.ratioW - bounds.left / this.ratioW);
                var height = Math.round(bounds.bottom / this.ratioH - bounds.top / this.ratioH);
                this.cropCanvas.width = width;
                this.cropCanvas.height = height;
                this.cropperSettings.croppedWidth = this.cropCanvas.width;
                this.cropperSettings.croppedHeight = this.cropCanvas.height;
            }
            ctx.clearRect(0, 0, this.cropCanvas.width, this.cropCanvas.height);
            this.drawImageIOSFix(ctx, this.srcImage, Math.max(Math.round((bounds.left) / this.ratioW - offsetW), 0), Math.max(Math.round(bounds.top / this.ratioH - offsetH), 0), Math.max(Math.round(bounds.width / this.ratioW), 1), Math.max(Math.round(bounds.height / this.ratioH), 1), 0, 0, this.cropCanvas.width, this.cropCanvas.height);
            if (this.cropperSettings.resampleFn) {
                this.cropperSettings.resampleFn(this.cropCanvas);
            }
            this.croppedImage.width = this.cropCanvas.width;
            this.croppedImage.height = this.cropCanvas.height;
            this.croppedImage.src = this.cropCanvas.toDataURL(this.fileType, this.cropperSettings.compressRatio);
            return this.croppedImage;
        }
    };
    ImageCropper.prototype.getBounds = function () {
        var minX = Number.MAX_VALUE;
        var minY = Number.MAX_VALUE;
        var maxX = -Number.MAX_VALUE;
        var maxY = -Number.MAX_VALUE;
        for (var i = 0; i < this.markers.length; i++) {
            var marker = this.markers[i];
            if (marker.position.x < minX) {
                minX = marker.position.x;
            }
            if (marker.position.x > maxX) {
                maxX = marker.position.x;
            }
            if (marker.position.y < minY) {
                minY = marker.position.y;
            }
            if (marker.position.y > maxY) {
                maxY = marker.position.y;
            }
        }
        var bounds = new __WEBPACK_IMPORTED_MODULE_0__model_bounds__["a" /* Bounds */]();
        bounds.left = minX;
        bounds.right = maxX;
        bounds.top = minY;
        bounds.bottom = maxY;
        return bounds;
    };
    ImageCropper.prototype.setBounds = function (bounds) {
        var topLeft;
        var topRight;
        var bottomLeft;
        var bottomRight;
        var currentBounds = this.getBounds();
        for (var i = 0; i < this.markers.length; i++) {
            var marker = this.markers[i];
            if (marker.position.x === currentBounds.left) {
                if (marker.position.y === currentBounds.top) {
                    marker.setPosition(bounds.left, bounds.top);
                }
                else {
                    marker.setPosition(bounds.left, bounds.bottom);
                }
            }
            else {
                if (marker.position.y === currentBounds.top) {
                    marker.setPosition(bounds.right, bounds.top);
                }
                else {
                    marker.setPosition(bounds.right, bounds.bottom);
                }
            }
        }
        this.center.recalculatePosition(bounds);
        this.center.draw(this.ctx);
        this.draw(this.ctx); // we need to redraw all canvas if we have changed bounds
    };
    ImageCropper.prototype.onTouchMove = function (event) {
        if (this.crop.isImageSet()) {
            event.preventDefault();
            if (event.touches.length === 1) {
                for (var i = 0; i < event.touches.length; i++) {
                    var touch = event.touches[i];
                    var touchPosition = ImageCropper.getTouchPos(this.canvas, touch);
                    var cropTouch = new __WEBPACK_IMPORTED_MODULE_2__model_cropTouch__["a" /* CropTouch */](touchPosition.x, touchPosition.y, touch.identifier);
                    __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(touchPosition);
                    this.move(cropTouch);
                }
            }
            else {
                if (event.touches.length === 2) {
                    var distance = ((event.touches[0].clientX - event.touches[1].clientX) * (event.touches[0].clientX - event.touches[1].clientX)) + ((event.touches[0].clientY - event.touches[1].clientY) * (event.touches[0].clientY - event.touches[1].clientY));
                    if (this.previousDistance && this.previousDistance !== distance) {
                        var increment = distance < this.previousDistance ? 1 : -1;
                        var bounds = this.getBounds();
                        bounds.top += increment;
                        bounds.left += increment;
                        bounds.right -= increment;
                        bounds.bottom -= increment;
                        this.setBounds(bounds);
                    }
                    this.previousDistance = distance;
                }
            }
            this.draw(this.ctx);
        }
    };
    ImageCropper.prototype.onMouseMove = function (e) {
        if (this.crop.isImageSet() && this.isMouseDown) {
            var mousePosition = ImageCropper.getMousePos(this.canvas, e);
            this.move(new __WEBPACK_IMPORTED_MODULE_2__model_cropTouch__["a" /* CropTouch */](mousePosition.x, mousePosition.y, 0));
            var dragTouch = this.getDragTouchForID(0);
            if (dragTouch) {
                dragTouch.x = mousePosition.x;
                dragTouch.y = mousePosition.y;
            }
            else {
                dragTouch = new __WEBPACK_IMPORTED_MODULE_2__model_cropTouch__["a" /* CropTouch */](mousePosition.x, mousePosition.y, 0);
            }
            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(mousePosition);
            this.drawCursors(dragTouch);
            this.draw(this.ctx);
        }
    };
    ImageCropper.prototype.move = function (cropTouch) {
        if (this.isMouseDown) {
            this.handleMove(cropTouch);
        }
    };
    ImageCropper.prototype.getDragTouchForID = function (id) {
        for (var i = 0; i < this.currentDragTouches.length; i++) {
            if (id === this.currentDragTouches[i].id) {
                return this.currentDragTouches[i];
            }
        }
        return undefined;
    };
    ImageCropper.prototype.drawCursors = function (cropTouch) {
        var cursorDrawn = false;
        if (cropTouch != null) {
            if (cropTouch.dragHandle === this.center) {
                __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'move');
                cursorDrawn = true;
            }
            if (cropTouch.dragHandle !== null && cropTouch.dragHandle instanceof __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */]) {
                this.drawCornerCursor(cropTouch.dragHandle, cropTouch.dragHandle.position.x, cropTouch.dragHandle.position.y);
                cursorDrawn = true;
            }
        }
        var didDraw = false;
        if (!cursorDrawn) {
            for (var i = 0; i < this.markers.length; i++) {
                didDraw = didDraw || this.drawCornerCursor(this.markers[i], cropTouch.x, cropTouch.y);
            }
            if (!didDraw) {
                __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'initial');
            }
        }
        if (!didDraw && !cursorDrawn && this.center.touchInBounds(cropTouch.x, cropTouch.y)) {
            this.center.setOver(true);
            __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setOver(this.canvas);
            __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'move');
        }
        else {
            this.center.setOver(false);
        }
    };
    ImageCropper.prototype.drawCornerCursor = function (marker, x, y) {
        if (marker.touchInBounds(x, y)) {
            marker.setOver(true);
            if (marker.getHorizontalNeighbour().position.x > marker.position.x) {
                if (marker.getVerticalNeighbour().position.y > marker.position.y) {
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setOver(this.canvas);
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'nwse-resize');
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setOver(this.canvas);
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'nesw-resize');
                }
            }
            else {
                if (marker.getVerticalNeighbour().position.y > marker.position.y) {
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setOver(this.canvas);
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'nesw-resize');
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setOver(this.canvas);
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'nwse-resize');
                }
            }
            return true;
        }
        marker.setOver(false);
        return false;
    };
    // todo: Unused param
    ImageCropper.prototype.onTouchStart = function (event) {
        if (this.crop.isImageSet()) {
            this.isMouseDown = true;
        }
    };
    ImageCropper.prototype.onTouchEnd = function (event) {
        if (this.crop.isImageSet()) {
            for (var i = 0; i < event.changedTouches.length; i++) {
                var touch = event.changedTouches[i];
                var dragTouch = this.getDragTouchForID(touch.identifier);
                if (dragTouch && dragTouch !== undefined) {
                    if (dragTouch.dragHandle instanceof __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */] || dragTouch.dragHandle instanceof __WEBPACK_IMPORTED_MODULE_3__model_dragMarker__["a" /* DragMarker */]) {
                        dragTouch.dragHandle.setOver(false);
                    }
                    this.handleRelease(dragTouch);
                }
            }
            if (this.currentDragTouches.length === 0) {
                this.isMouseDown = false;
                this.currentlyInteracting = false;
            }
        }
    };
    // http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
    ImageCropper.prototype.drawImageIOSFix = function (ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
        // Works only if whole image is displayed:
        // ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
        // The following works correct also when only a part of the image is displayed:
        // ctx.drawImage(img, sx * this.vertSquashRatio, sy * this.vertSquashRatio, sw * this.vertSquashRatio, sh *
        // this.vertSquashRatio, dx, dy, dw, dh);
        ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
    };
    ImageCropper.prototype.onMouseDown = function (event) {
        if (this.crop.isImageSet()) {
            this.isMouseDown = true;
        }
    };
    ImageCropper.prototype.onMouseUp = function (event) {
        if (this.crop.isImageSet()) {
            __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setReleased(this.canvas);
            this.isMouseDown = false;
            this.handleRelease(new __WEBPACK_IMPORTED_MODULE_2__model_cropTouch__["a" /* CropTouch */](0, 0, 0));
        }
    };
    return ImageCropper;
}(__WEBPACK_IMPORTED_MODULE_4__model_imageCropperModel__["a" /* ImageCropperModel */]));

//# sourceMappingURL=imageCropper.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/imageCropperComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageCropper__ = __webpack_require__("../../../../ng2-img-cropper/src/imageCropper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cropperSettings__ = __webpack_require__("../../../../ng2-img-cropper/src/cropperSettings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exif__ = __webpack_require__("../../../../ng2-img-cropper/src/exif.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_cropPosition__ = __webpack_require__("../../../../ng2-img-cropper/src/model/cropPosition.js");





var ImageCropperComponent = (function () {
    function ImageCropperComponent(renderer) {
        this.cropPositionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onCrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.renderer = renderer;
    }
    ImageCropperComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var canvas = this.cropcanvas.nativeElement;
        if (!this.settings) {
            this.settings = new __WEBPACK_IMPORTED_MODULE_2__cropperSettings__["a" /* CropperSettings */]();
        }
        this.renderer.setElementAttribute(canvas, 'class', this.settings.cropperClass);
        if (!this.settings.dynamicSizing) {
            this.renderer.setElementAttribute(canvas, 'width', this.settings.canvasWidth.toString());
            this.renderer.setElementAttribute(canvas, 'height', this.settings.canvasHeight.toString());
        }
        else {
            window.addEventListener('resize', function () {
                _this.settings.canvasWidth = canvas.offsetWidth;
                _this.settings.canvasHeight = canvas.offsetHeight;
                _this.cropper.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight, true);
            });
        }
        if (!this.cropper) {
            this.cropper = new __WEBPACK_IMPORTED_MODULE_1__imageCropper__["a" /* ImageCropper */](this.settings);
        }
        this.cropper.prepare(canvas);
    };
    ImageCropperComponent.prototype.ngOnChanges = function (changes) {
        if (this.isCropPositionChanged(changes)) {
            this.cropper.updateCropPosition(this.cropPosition.toBounds());
            if (this.cropper.isImageSet()) {
                var bounds = this.cropper.getCropBounds();
                this.image.image = this.cropper.getCroppedImage().src;
                this.onCrop.emit(bounds);
            }
            this.updateCropBounds();
        }
    };
    ImageCropperComponent.prototype.onTouchMove = function (event) {
        this.cropper.onTouchMove(event);
    };
    ImageCropperComponent.prototype.onTouchStart = function (event) {
        this.cropper.onTouchStart(event);
    };
    ImageCropperComponent.prototype.onTouchEnd = function (event) {
        this.cropper.onTouchEnd(event);
        if (this.cropper.isImageSet()) {
            this.image.image = this.cropper.getCroppedImage().src;
            this.onCrop.emit(this.cropper.getCropBounds());
            this.updateCropBounds();
        }
    };
    ImageCropperComponent.prototype.onMouseDown = function (event) {
        this.cropper.onMouseDown(event);
    };
    ImageCropperComponent.prototype.onMouseUp = function (event) {
        if (this.cropper.isImageSet()) {
            this.cropper.onMouseUp(event);
            this.image.image = this.cropper.getCroppedImage().src;
            this.onCrop.emit(this.cropper.getCropBounds());
            this.updateCropBounds();
        }
    };
    ImageCropperComponent.prototype.onMouseMove = function (event) {
        this.cropper.onMouseMove(event);
    };
    ImageCropperComponent.prototype.fileChangeListener = function ($event) {
        if ($event.target.files.length === 0)
            return;
        var file = $event.target.files[0];
        if (this.settings.allowedFilesRegex.test(file.name)) {
            var image_1 = new Image();
            var fileReader = new FileReader();
            var that_1 = this;
            fileReader.addEventListener('loadend', function (loadEvent) {
                image_1.src = loadEvent.target.result;
                that_1.setImage(image_1);
            });
            fileReader.readAsDataURL(file);
        }
    };
    ImageCropperComponent.prototype.reset = function () {
        this.cropper.reset();
        this.renderer.setElementAttribute(this.cropcanvas.nativeElement, 'class', this.settings.cropperClass);
        this.image.image = this.cropper.getCroppedImage().src;
    };
    ImageCropperComponent.prototype.setImage = function (image, newBounds) {
        var _this = this;
        if (newBounds === void 0) { newBounds = null; }
        var self = this;
        this.renderer.setElementAttribute(this.cropcanvas.nativeElement, 'class', this.settings.cropperClass + " " + this.settings.croppingClass);
        this.intervalRef = window.setInterval(function () {
            if (self.intervalRef) {
                clearInterval(self.intervalRef);
            }
            if (image.naturalHeight > 0 && image.naturalWidth > 0) {
                image.height = image.naturalHeight;
                image.width = image.naturalWidth;
                clearInterval(self.intervalRef);
                self.getOrientedImage(image, function (img) {
                    if (_this.settings.dynamicSizing) {
                        var canvas = _this.cropcanvas.nativeElement;
                        _this.settings.canvasWidth = canvas.offsetWidth;
                        _this.settings.canvasHeight = canvas.offsetHeight;
                        _this.cropper.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight, false);
                    }
                    self.cropper.setImage(img);
                    if (self.cropPosition && self.cropPosition.isInitialized()) {
                        self.cropper.updateCropPosition(self.cropPosition.toBounds());
                    }
                    self.image.original = img;
                    var bounds = self.cropper.getCropBounds();
                    self.image.image = self.cropper.getCroppedImage().src;
                    if (newBounds != null) {
                        bounds = newBounds;
                        self.cropper.setBounds(bounds);
                    }
                    self.onCrop.emit(bounds);
                });
            }
        }, 10);
    };
    ImageCropperComponent.prototype.isCropPositionChanged = function (changes) {
        if (this.cropper && changes['cropPosition'] && this.isCropPositionUpdateNeeded) {
            return true;
        }
        else {
            this.isCropPositionUpdateNeeded = true;
            return false;
        }
    };
    ImageCropperComponent.prototype.updateCropBounds = function () {
        var cropBound = this.cropper.getCropBounds();
        this.cropPositionChange.emit(new __WEBPACK_IMPORTED_MODULE_4__model_cropPosition__["a" /* CropPosition */](cropBound.left, cropBound.top, cropBound.width, cropBound.height));
        this.isCropPositionUpdateNeeded = false;
    };
    ImageCropperComponent.prototype.getOrientedImage = function (image, callback) {
        var img;
        __WEBPACK_IMPORTED_MODULE_3__exif__["a" /* Exif */].getData(image, function () {
            var orientation = __WEBPACK_IMPORTED_MODULE_3__exif__["a" /* Exif */].getTag(image, 'Orientation');
            if ([3, 6, 8].indexOf(orientation) > -1) {
                var canvas = document.createElement('canvas'), ctx = canvas.getContext('2d'), cw = image.width, ch = image.height, cx = 0, cy = 0, deg = 0;
                switch (orientation) {
                    case 3:
                        cx = -image.width;
                        cy = -image.height;
                        deg = 180;
                        break;
                    case 6:
                        cw = image.height;
                        ch = image.width;
                        cy = -image.height;
                        deg = 90;
                        break;
                    case 8:
                        cw = image.height;
                        ch = image.width;
                        cx = -image.width;
                        deg = 270;
                        break;
                    default:
                        break;
                }
                canvas.width = cw;
                canvas.height = ch;
                ctx.rotate(deg * Math.PI / 180);
                ctx.drawImage(image, cx, cy);
                img = document.createElement('img');
                img.width = cw;
                img.height = ch;
                img.addEventListener('load', function () {
                    callback(img);
                });
                img.src = canvas.toDataURL('image/png');
            }
            else {
                img = image;
                callback(img);
            }
        });
    };
    return ImageCropperComponent;
}());

ImageCropperComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'img-cropper',
                template: "\n        <span class=\"ng2-imgcrop\">\n          <input *ngIf=\"!settings.noFileInput\" type=\"file\" accept=\"image/*\" (change)=\"fileChangeListener($event)\">\n          <canvas #cropcanvas\n                  (mousedown)=\"onMouseDown($event)\"\n                  (mouseup)=\"onMouseUp($event)\"\n                  (mousemove)=\"onMouseMove($event)\"\n                  (mouseleave)=\"onMouseUp($event)\"\n                  (touchmove)=\"onTouchMove($event)\"\n                  (touchend)=\"onTouchEnd($event)\"\n                  (touchstart)=\"onTouchStart($event)\">\n          </canvas>\n        </span>\n      "
            },] },
];
/** @nocollapse */
ImageCropperComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
ImageCropperComponent.propDecorators = {
    'cropcanvas': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['cropcanvas', undefined,] },],
    'settings': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['settings',] },],
    'image': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['image',] },],
    'cropper': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'cropPosition': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'cropPositionChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onCrop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=imageCropperComponent.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/imageCropperDataShare.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperDataShare; });
var ImageCropperDataShare = (function () {
    function ImageCropperDataShare() {
    }
    ImageCropperDataShare.setPressed = function (canvas) {
        this.pressed = canvas;
    };
    ;
    ImageCropperDataShare.setReleased = function (canvas) {
        if (canvas === this.pressed) {
            //  this.pressed = undefined;
        }
    };
    ;
    ImageCropperDataShare.setOver = function (canvas) {
        this.over = canvas;
    };
    ;
    ImageCropperDataShare.setStyle = function (canvas, style) {
        if (this.pressed !== undefined) {
            if (this.pressed === canvas) {
                // TODO: check this
                // angular.element(document.documentElement).css('cursor', style);
            }
        }
        else {
            if (canvas === this.over) {
                // TODO: check this
                // angular.element(document.documentElement).css('cursor', style);
            }
        }
    };
    ;
    return ImageCropperDataShare;
}());

ImageCropperDataShare.share = {};
//# sourceMappingURL=imageCropperDataShare.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/imageCropperModule.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imageCropperComponent__ = __webpack_require__("../../../../ng2-img-cropper/src/imageCropperComponent.js");



var ImageCropperModule = (function () {
    function ImageCropperModule() {
    }
    return ImageCropperModule;
}());

ImageCropperModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                declarations: [__WEBPACK_IMPORTED_MODULE_2__imageCropperComponent__["a" /* ImageCropperComponent */]],
                exports: [__WEBPACK_IMPORTED_MODULE_2__imageCropperComponent__["a" /* ImageCropperComponent */]]
            },] },
];
/** @nocollapse */
ImageCropperModule.ctorParameters = function () { return []; };
//# sourceMappingURL=imageCropperModule.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/model/bounds.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bounds; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointPool__ = __webpack_require__("../../../../ng2-img-cropper/src/model/pointPool.js");

var Bounds = (function () {
    function Bounds(x, y, width, height) {
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        if (width === void 0) {
            width = 0;
        }
        if (height === void 0) {
            height = 0;
        }
        this.left = x;
        this.right = x + width;
        this.top = y;
        this.bottom = y + height;
    }
    Object.defineProperty(Bounds.prototype, "width", {
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Bounds.prototype, "height", {
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Bounds.prototype.getCentre = function () {
        var w = this.width;
        var h = this.height;
        return __WEBPACK_IMPORTED_MODULE_0__pointPool__["a" /* PointPool */].instance.borrow(this.left + (w / 2), this.top + (h / 2));
    };
    ;
    return Bounds;
}());

//# sourceMappingURL=bounds.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/model/cornerMarker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CornerMarker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handle__ = __webpack_require__("../../../../ng2-img-cropper/src/model/handle.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CornerMarker = (function (_super) {
    __extends(CornerMarker, _super);
    function CornerMarker(x, y, radius, cropperSettings) {
        return _super.call(this, x, y, radius, cropperSettings) || this;
    }
    CornerMarker.prototype.drawCornerBorder = function (ctx) {
        var sideLength = 10;
        if (this.over || this.drag) {
            sideLength = 12;
        }
        var hDirection = 1;
        var vDirection = 1;
        if (this.horizontalNeighbour.position.x < this.position.x) {
            hDirection = -1;
        }
        if (this.verticalNeighbour.position.y < this.position.y) {
            vDirection = -1;
        }
        if (this.cropperSettings.rounded) {
            var width = this.position.x - this.horizontalNeighbour.position.x;
            var height = this.position.y - this.verticalNeighbour.position.y;
            var offX = Math.round(Math.sin(Math.PI / 2) * Math.abs(width / 2)) / 4;
            var offY = Math.round(Math.sin(Math.PI / 2) * Math.abs(height / 2)) / 4;
            this.offset.x = hDirection > 0 ? offX : -offX;
            this.offset.y = vDirection > 0 ? offY : -offY;
        }
        else {
            this.offset.x = 0;
            this.offset.y = 0;
        }
        ctx.beginPath();
        ctx.lineJoin = 'miter';
        ctx.moveTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y +
            (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y + (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.closePath();
        ctx.lineWidth = this.cropperSettings.cropperDrawSettings.strokeWidth;
        ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.strokeColor;
        ctx.stroke();
    };
    CornerMarker.prototype.drawCornerFill = function (ctx) {
        var sideLength = 10;
        if (this.over || this.drag) {
            sideLength = 12;
        }
        var hDirection = 1;
        var vDirection = 1;
        if (this.horizontalNeighbour.position.x < this.position.x) {
            hDirection = -1;
        }
        if (this.verticalNeighbour.position.y < this.position.y) {
            vDirection = -1;
        }
        ctx.beginPath();
        ctx.moveTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y +
            (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y + (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255,255,255,.7)';
        ctx.fill();
    };
    CornerMarker.prototype.moveX = function (x) {
        this.setPosition(x, this.position.y);
    };
    CornerMarker.prototype.moveY = function (y) {
        this.setPosition(this.position.x, y);
    };
    CornerMarker.prototype.move = function (x, y) {
        this.setPosition(x, y);
        this.verticalNeighbour.moveX(x);
        this.horizontalNeighbour.moveY(y);
    };
    CornerMarker.prototype.addHorizontalNeighbour = function (neighbour) {
        this.horizontalNeighbour = neighbour;
    };
    CornerMarker.prototype.addVerticalNeighbour = function (neighbour) {
        this.verticalNeighbour = neighbour;
    };
    CornerMarker.prototype.getHorizontalNeighbour = function () {
        return this.horizontalNeighbour;
    };
    CornerMarker.prototype.getVerticalNeighbour = function () {
        return this.verticalNeighbour;
    };
    CornerMarker.prototype.draw = function (ctx) {
        this.drawCornerFill(ctx);
        this.drawCornerBorder(ctx);
    };
    return CornerMarker;
}(__WEBPACK_IMPORTED_MODULE_0__handle__["a" /* Handle */]));

//# sourceMappingURL=cornerMarker.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/model/cropPosition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropPosition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bounds__ = __webpack_require__("../../../../ng2-img-cropper/src/model/bounds.js");

var CropPosition = (function () {
    function CropPosition(x, y, w, h) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        this.x = +x;
        this.y = +y;
        this.w = +w;
        this.h = +h;
    }
    CropPosition.prototype.toBounds = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__bounds__["a" /* Bounds */](this.x, this.y, this.w, this.h);
    };
    CropPosition.prototype.isInitialized = function () {
        return this.x !== 0 && this.y !== 0 && this.w !== 0 && this.h !== 0;
    };
    return CropPosition;
}());

//# sourceMappingURL=cropPosition.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/model/cropTouch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropTouch; });
var CropTouch = (function () {
    function CropTouch(x, y, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (id === void 0) { id = 0; }
        this.id = id;
        this.x = x;
        this.y = y;
    }
    return CropTouch;
}());

//# sourceMappingURL=cropTouch.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/model/dragMarker.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragMarker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handle__ = __webpack_require__("../../../../ng2-img-cropper/src/model/handle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pointPool__ = __webpack_require__("../../../../ng2-img-cropper/src/model/pointPool.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DragMarker = (function (_super) {
    __extends(DragMarker, _super);
    function DragMarker(x, y, radius, cropperSettings) {
        var _this = _super.call(this, x, y, radius, cropperSettings) || this;
        _this.iconPoints = [];
        _this.scaledIconPoints = [];
        _this.getDragIconPoints(_this.iconPoints, 1);
        _this.getDragIconPoints(_this.scaledIconPoints, 1.2);
        return _this;
    }
    DragMarker.prototype.draw = function (ctx) {
        if (this.over || this.drag) {
            this.drawIcon(ctx, this.scaledIconPoints);
        }
        else {
            this.drawIcon(ctx, this.iconPoints);
        }
    };
    DragMarker.prototype.getDragIconPoints = function (arr, scale) {
        var maxLength = 17 * scale;
        var arrowWidth = 14 * scale;
        var arrowLength = 8 * scale;
        var connectorThroat = 4 * scale;
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-connectorThroat / 2, maxLength - arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-arrowWidth / 2, maxLength - arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(0, maxLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(arrowWidth / 2, maxLength - arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(connectorThroat / 2, maxLength - arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(connectorThroat / 2, connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(maxLength - arrowLength, connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(maxLength - arrowLength, arrowWidth / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(maxLength, 0));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(maxLength - arrowLength, -arrowWidth / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(maxLength - arrowLength, -connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(connectorThroat / 2, -connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(connectorThroat / 2, -maxLength + arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(arrowWidth / 2, -maxLength + arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(0, -maxLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-arrowWidth / 2, -maxLength + arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-connectorThroat / 2, -maxLength + arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-connectorThroat / 2, -connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-maxLength + arrowLength, -connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-maxLength + arrowLength, -arrowWidth / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-maxLength, 0));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-maxLength + arrowLength, arrowWidth / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-maxLength + arrowLength, connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-connectorThroat / 2, connectorThroat / 2));
    };
    DragMarker.prototype.drawIcon = function (ctx, points) {
        ctx.beginPath();
        ctx.moveTo(points[0].x + this.position.x, points[0].y + this.position.y);
        for (var k = 0; k < points.length; k++) {
            var p = points[k];
            ctx.lineTo(p.x + this.position.x, p.y + this.position.y);
        }
        ctx.closePath();
        ctx.fillStyle = this.cropperSettings.cropperDrawSettings.dragIconFillColor;
        ctx.fill();
        ctx.lineWidth = this.cropperSettings.cropperDrawSettings.dragIconStrokeWidth;
        ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.dragIconStrokeColor;
        ctx.stroke();
    };
    DragMarker.prototype.recalculatePosition = function (bounds) {
        var c = bounds.getCentre();
        this.setPosition(c.x, c.y);
        __WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.returnPoint(c);
    };
    return DragMarker;
}(__WEBPACK_IMPORTED_MODULE_0__handle__["a" /* Handle */]));

//# sourceMappingURL=dragMarker.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/model/handle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Handle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("../../../../ng2-img-cropper/src/model/point.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cropperSettings__ = __webpack_require__("../../../../ng2-img-cropper/src/cropperSettings.js");


var Handle = (function () {
    function Handle(x, y, radius, settings) {
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_1__cropperSettings__["a" /* CropperSettings */]();
        this.over = false;
        this.drag = false;
        this._position = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](x, y);
        this.offset = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        this.radius = radius;
        this.cropperSettings = settings;
    }
    Handle.prototype.setDrag = function (value) {
        this.drag = value;
        this.setOver(value);
    };
    Handle.prototype.draw = function (ctx) {
        // this should't be empty
    };
    Handle.prototype.setOver = function (over) {
        this.over = over;
    };
    Handle.prototype.touchInBounds = function (x, y) {
        return (x > this.position.x - this.radius + this.offset.x) &&
            (x < this.position.x + this.radius + this.offset.x) &&
            (y > this.position.y - this.radius + this.offset.y) &&
            (y < this.position.y + this.radius + this.offset.y);
    };
    Object.defineProperty(Handle.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Handle.prototype.setPosition = function (x, y) {
        this._position.x = x;
        this._position.y = y;
    };
    return Handle;
}());

//# sourceMappingURL=handle.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/model/imageCropperModel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperModel; });
var ImageCropperModel = (function () {
    function ImageCropperModel() {
    }
    return ImageCropperModel;
}());

//# sourceMappingURL=imageCropperModel.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/model/point.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
var Point = (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (p) {
            this._next = p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "prev", {
        get: function () {
            return this._prev;
        },
        set: function (p) {
            this._prev = p;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());

//# sourceMappingURL=point.js.map

/***/ }),

/***/ "../../../../ng2-img-cropper/src/model/pointPool.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointPool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__("../../../../ng2-img-cropper/src/model/point.js");

var PointPool = (function () {
    function PointPool(initialSize) {
        PointPool._instance = this;
        var prev = this.firstAvailable = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]();
        for (var i = 1; i < initialSize; i++) {
            var p = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]();
            prev.next = p;
            prev = p;
        }
    }
    Object.defineProperty(PointPool, "instance", {
        get: function () {
            return PointPool._instance;
        },
        enumerable: true,
        configurable: true
    });
    PointPool.prototype.borrow = function (x, y) {
        if (this.firstAvailable == null) {
            throw 'Pool exhausted';
        }
        this.borrowed++;
        var p = this.firstAvailable;
        this.firstAvailable = p.next;
        p.x = x;
        p.y = y;
        return p;
    };
    ;
    PointPool.prototype.returnPoint = function (p) {
        this.borrowed--;
        p.x = 0;
        p.y = 0;
        p.next = this.firstAvailable;
        this.firstAvailable = p;
    };
    ;
    return PointPool;
}());

//# sourceMappingURL=pointPool.js.map

/***/ })

});
//# sourceMappingURL=common.chunk.js.map