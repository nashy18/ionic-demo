webpackJsonp([1],{

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationModalPageModule", function() { return ConfirmationModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmation_modal__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmationModalPageModule = /** @class */ (function () {
    function ConfirmationModalPageModule() {
    }
    ConfirmationModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirmation_modal__["a" /* ConfirmationModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__confirmation_modal__["a" /* ConfirmationModalPage */]),
            ],
        })
    ], ConfirmationModalPageModule);
    return ConfirmationModalPageModule;
}());

//# sourceMappingURL=confirmation-modal.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmationModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
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
 * Generated class for the ConfirmationModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmationModalPage = /** @class */ (function () {
    function ConfirmationModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.modalHeader = this.navParams.get('header');
        this.modalBody = this.navParams.get('body');
        this.modalType = this.navParams.get('type');
        console.log("Header: " + this.modalHeader);
        console.log("Header: " + this.modalBody);
    }
    ConfirmationModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmationModalPage');
        console.log("Header: " + this.navParams.get('header'));
        console.log("Header: " + this.navParams.get('body'));
    };
    ConfirmationModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ConfirmationModalPage.prototype.cancelModal = function () {
        this.viewCtrl.dismiss();
    };
    ConfirmationModalPage.prototype.confirmClick = function () {
        this.viewCtrl.dismiss();
        var data = { GMPType: this.modalType };
        var modalPage = this.modalCtrl.create('VisitorPassModalPage', data);
        modalPage.present();
        modalPage.onDidDismiss(function (data) {
            console.log("I have dismissed.");
        });
        modalPage.onWillDismiss(function (data) {
            console.log("I'm about to dismiss");
        });
    };
    ConfirmationModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-confirmation-modal',template:/*ion-inline-start:"E:\AngularJSProject\Ionic_WorkSpace\src\pages\confirmation-modal\confirmation-modal.html"*/'<!--\n\n  Generated template for the ConfirmationModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n      <ion-title text-center>{{modalHeader}}</ion-title>\n\n      <ion-buttons end>\n\n      <button class="close-btn" ion-button (click)="closeModal()"><ion-icon name="close-circle"></ion-icon></button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n </ion-header>\n\n<ion-content padding class="">\n\n  <ion-grid fixed>\n\n    <ion-row>\n\n      <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n\n        <ion-label text-wrap><strong>{{modalBody}}</strong></ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center padding-top>\n\n        <button ion-button color="danger"outline round (click)="cancelModal()">Cancel</button>\n\n        <button ion-button color="secondary" outline round (click)="confirmClick()">Confirm</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\AngularJSProject\Ionic_WorkSpace\src\pages\confirmation-modal\confirmation-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], ConfirmationModalPage);
    return ConfirmationModalPage;
}());

//# sourceMappingURL=confirmation-modal.js.map

/***/ })

});
//# sourceMappingURL=1.js.map