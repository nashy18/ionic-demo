webpackJsonp([0],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorPassModalPageModule", function() { return VisitorPassModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visitor_pass_modal__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VisitorPassModalPageModule = (function () {
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

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitorPassModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(43);
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
var VisitorPassModalPage = (function () {
    function VisitorPassModalPage(navCtrl, navParams, viewCtrl, alertCtrl, storage) {
        //this.GMPType = this.navParams.get('GMPType');
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        // if(this.navParams.get('GMPType') == 'agree') {
        //   this.GMPType = "Yes";
        // } else {
        //   this.GMPType = "No";
        // }
    }
    VisitorPassModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VisitorPassModalPage');
        this.getVisitorFromLocalStorage();
    };
    VisitorPassModalPage.prototype.getVisitorFromLocalStorage = function () {
        var _this = this;
        this.storage.get('visitor').then(function (obj) {
            _this.name = obj.firstName + " " + obj.lastName;
            _this.company = obj.companyName;
            _this.GMPType = (obj.visitingRestrictedAreas) ? "Yes" : "No";
            var date = new Date(obj.dateCreated);
            _this.signInDateTime = date.toString();
        });
    };
    VisitorPassModalPage.prototype.closeModal = function () {
        this.modalData = { 'status': 'cancel' };
        this.viewCtrl.dismiss(this.modalData);
    };
    VisitorPassModalPage.prototype.cancelPrint = function () {
        this.modalData = { 'status': 'cancel' };
        this.viewCtrl.dismiss(this.modalData);
    };
    VisitorPassModalPage.prototype.printVisitorPass = function () {
        var _this = this;
        this.modalData = { 'status': 'confirmed' };
        this.viewCtrl.dismiss(this.modalData);
        //this.navCtrl.push(HomePage);
        var alert = this.alertCtrl.create({
            title: 'Please collect your visitor pass.',
            subTitle: '<strong>Thank you for visting natures touch. We wish you a pleasant day.</strong>',
            buttons: [{
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                }]
        });
        alert.present();
    };
    VisitorPassModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-visitor-pass-modal',template:/*ion-inline-start:"E:\Mahesh\Projects\Personal\Visitor_Module\visitor\ionic-3\src\pages\visitor-pass-modal\visitor-pass-modal.html"*/'<!--\n\n  Generated template for the VisitorPassModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center text-wrap>Visitor Pass</ion-title>\n\n    <ion-buttons end>\n\n      <button class="close-btn" ion-button (click)="closeModal()"><ion-icon name="close-circle"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid fixed>\n\n    <ion-row>\n\n      <ion-col col-3 text-left>\n\n        <img class="visitor-pass-logo" src="assets/imgs/natures-logo-header.png" />\n\n      </ion-col>\n\n      <ion-col col-9 text-left>\n\n        <ion-label text-wrap class="visitor-pass-header"><h1>Natures Touch</h1></ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-card style="margin-top: 25px;">\n\n      <ion-card-content>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <div class="visitor-pass-content" text-wrap>Name</div>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n            <div class="visitor-pass-content" text-wrap>: {{name}}</div>\n\n          </ion-col>\n\n          <!-- <ion-col col-12>\n\n            <div class="visitor-pass-content" text-wrap>Name: </div>\n\n            <div class="visitor-pass-content" text-wrap>{{name}}</div>\n\n          </ion-col> -->\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <div class="visitor-pass-content" text-wrap>Company</div>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n            <div class="visitor-pass-content" text-wrap>: {{company}}</div>\n\n          </ion-col>\n\n          <!-- <ion-col col-12>\n\n            <div class="visitor-pass-content" text-wrap>Company: </div>\n\n            <div class="visitor-pass-content" text-wrap>{{company}}</div>\n\n          </ion-col> -->\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <div class="visitor-pass-content" text-wrap>GMP Area Access</div>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n            <div class="visitor-pass-content" text-wrap>: {{GMPType}}</div>\n\n          </ion-col>\n\n          <!-- <ion-col col-12>\n\n            <div class="visitor-pass-content" text-wrap>GMP Area Access: </div>\n\n            <div class="visitor-pass-content" text-wrap>{{GMPType}}</div>\n\n          </ion-col> -->\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4>\n\n            <div class="visitor-pass-content" text-wrap>Date and Time: </div>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n            <div class="visitor-pass-content" text-wrap>: {{signInDateTime | date : "EEEE, MMMM d, y HH:mm:ss"}}</div>\n\n          </ion-col>\n\n          <!-- <ion-col col-12>\n\n            <div class="visitor-pass-content" text-wrap>Sign in Date and Time: </div>\n\n            <div class="visitor-pass-content" text-wrap>{{signInDateTime | date : "EEEE, MMMM d, y HH:mm:ss"}}</div>\n\n          </ion-col> -->\n\n        </ion-row>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-row>\n\n      <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center>\n\n        <button ion-button class="custom-btn" color="danger" (click)="cancelPrint();" outline round>Cancel</button>\n\n        <button ion-button class="custom-btn" color="secondary" (click)="printVisitorPass();" outline round>Print</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Mahesh\Projects\Personal\Visitor_Module\visitor\ionic-3\src\pages\visitor-pass-modal\visitor-pass-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], VisitorPassModalPage);
    return VisitorPassModalPage;
}());

//# sourceMappingURL=visitor-pass-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map