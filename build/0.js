webpackJsonp([0],{

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorPassModalPageModule", function() { return VisitorPassModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visitor_pass_modal__ = __webpack_require__(413);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VisitorPassModalPageModule = /** @class */ (function () {
    function VisitorPassModalPageModule() {
    }
    VisitorPassModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__visitor_pass_modal__["a" /* VisitorPassModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__visitor_pass_modal__["a" /* VisitorPassModalPage */]),
            ],
        })
    ], VisitorPassModalPageModule);
    return VisitorPassModalPageModule;
}());

//# sourceMappingURL=visitor-pass-modal.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitorPassModalPage; });
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
 * Generated class for the VisitorPassModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VisitorPassModalPage = /** @class */ (function () {
    function VisitorPassModalPage(navCtrl, navParams, viewCtrl, alertCtrl) {
        //this.GMPType = this.navParams.get('GMPType');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        if (this.navParams.get('GMPType') == 'agree') {
            this.GMPType = "Yes";
        }
        else {
            this.GMPType = "No";
        }
    }
    VisitorPassModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VisitorPassModalPage');
    };
    VisitorPassModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    VisitorPassModalPage.prototype.cancelPrint = function () {
        this.viewCtrl.dismiss();
    };
    VisitorPassModalPage.prototype.printVisitorPass = function () {
        this.viewCtrl.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Print Successfully Completed!',
            subTitle: '<strong>Please collect your visitor pass.</strong>',
            buttons: ['Ok']
        });
        alert.present();
    };
    VisitorPassModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-visitor-pass-modal',template:/*ion-inline-start:"E:\AngularJSProject\Ionic_WorkSpace\src\pages\visitor-pass-modal\visitor-pass-modal.html"*/'<!--\n\n  Generated template for the VisitorPassModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center text-wrap>Visitor Pass</ion-title>\n\n    <ion-buttons end>\n\n      <button class="close-btn" ion-button (click)="closeModal()"><ion-icon name="close-circle"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid fixed>\n\n    <ion-row>\n\n      <ion-col col-lg-2 col-md-2 col-sm-4 col-xs-4 text-left>\n\n        <img class="comp-logo-img" src="assets/imgs/natures-logo-header.PNG" />\n\n      </ion-col>\n\n      <ion-col col-lg-10 col-md-10 col-sm-8 col-xs-8 text-left>\n\n        <ion-label><h1>Natures Touch</h1></ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-lg-3 col-md-3 col-sm-4 col-xs-6>\n\n        <ion-label class="pass-font" text-wrap>Name</ion-label>\n\n      </ion-col>\n\n      <ion-col col-lg-9 col-md-9 col-sm-8 col-xs-6>\n\n        <ion-label class="pass-font" text-wrap>: Mahesh Devda</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-lg-3 col-md-3 col-sm-4 col-xs-6>\n\n        <ion-label class="pass-font" text-wrap>Company</ion-label>\n\n      </ion-col>\n\n      <ion-col col-lg-9 col-md-9 col-sm-8 col-xs-6>\n\n        <ion-label class="pass-font" text-wrap>: Google</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-lg-3 col-md-3 col-sm-4 col-xs-6>\n\n        <ion-label class="pass-font" text-wrap>GMP Area Access</ion-label>\n\n      </ion-col>\n\n      <ion-col col-lg-9 col-md-9 col-sm-8 col-xs-6>\n\n        <ion-label class="pass-font" text-wrap>: {{GMPType}}</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-lg-3 col-md-3 col-sm-4 col-xs-6>\n\n        <ion-label class="pass-font" text-wrap>Sign in Date and Time</ion-label>\n\n      </ion-col>\n\n      <ion-col col-lg-9 col-md-9 col-sm-8 col-xs-6>\n\n        <ion-label class="pass-font" text-wrap>: 03 June 2018 22:00:00 IST</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center>\n\n        <button ion-button class="custom-btn" color="danger" (click)="cancelPrint();" outline round>Cancel</button>\n\n        <button ion-button class="custom-btn" color="secondary" (click)="printVisitorPass();" outline round>Print</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\AngularJSProject\Ionic_WorkSpace\src\pages\visitor-pass-modal\visitor-pass-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], VisitorPassModalPage);
    return VisitorPassModalPage;
}());

//# sourceMappingURL=visitor-pass-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map