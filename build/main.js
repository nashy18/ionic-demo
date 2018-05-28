webpackJsonp([3],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
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
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutUsPage');
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-us',template:/*ion-inline-start:"E:\AngularJSProject\Ionic_WorkSpace\src\pages\about-us\about-us.html"*/'<!--\n\n  Generated template for the AboutUsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title text-center>about Us</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid fixed>\n\n    <ion-row>\n\n      <ion-col offset-lg-3 col-lg-6 offset-md-3 col-md-6 col-sm-12 col-xs-12>\n\n        <ion-label text-center class="page-title">Coming Soon!</ion-label>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\AngularJSProject\Ionic_WorkSpace\src\pages\about-us\about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
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
 * Generated class for the SignOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignOutPage = /** @class */ (function () {
    function SignOutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignOutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignOutPage');
    };
    SignOutPage.prototype.reset = function () {
        console.log('on clicked of reset()');
    };
    SignOutPage.prototype.submit = function () {
        console.log('on clicked of submit()');
    };
    SignOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-out',template:/*ion-inline-start:"E:\AngularJSProject\Ionic_WorkSpace\src\pages\sign-out\sign-out.html"*/'<!--\n  Generated template for the SignOutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sign-out</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="item-bg-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-img class="img-prev" src="assets/imgs/sign-out.png"></ion-img>\n      </ion-col>\n      <ion-col>\n        <ion-row>\n          <ion-col>\n            <ion-label class="font-x-lg font-wt-500">\n              Thank\'s for visiting!\n            </ion-label>\n            <ion-label text-wrap>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor insididunt ut labore et dolore magna aliqua.\n              Culpa qui officia deserunt mollit anim id est laborum.\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-row>\n              <ion-col>\n                <h6>Sign out</h6>\n              </ion-col>\n            </ion-row>\n            <ion-row text-center>\n              <ion-col>\n                <ion-item>\n                  <ion-label>Select</ion-label>\n                  <ion-select [(ngModel)]="listItem" interface="popover">\n                    <ion-option>Bacon</ion-option>\n                    <ion-option>Black Olives</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row text-center>\n              <ion-col></ion-col>\n            </ion-row>\n            <ion-row text-center>\n              <ion-col>\n                <button ion-button round small (click)="reset()">\n                  <ion-label>Reset</ion-label>\n                </button>\n                <button ion-button round small (click)="submit()">\n                  <ion-label>Submit</ion-label>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\AngularJSProject\Ionic_WorkSpace\src\pages\sign-out\sign-out.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SignOutPage);
    return SignOutPage;
}());

//# sourceMappingURL=sign-out.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_entry_service_entry_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
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
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *
 * @author: MaheshDe
 * @since: 11/05/2018
 */
var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, navParams, formBuilder, alertCtrl, entryServicePrider, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.entryServicePrider = entryServicePrider;
        this.http = http;
        this.rootApi = "http://localhost:1337";
        this.visitingArea = [];
        this.purposeVisitedArray = [];
        this.nameOfPersonArray = [];
        this.nameOfDepartmentArray = [];
        this.data = { firstName: '', lastName: '', phone: '', email: '', company: '', department: '', personToBeVisit: '', purpose: '', controlledArea: '' };
        this.signInForm = formBuilder.group({
            'firstName': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)])],
            'lastName': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(2)])],
            'email': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
            'company': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
            'phone': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*')])],
            'department': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'nameOfPerson': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'purpose': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'controlledArea': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        // Initializing Drop Down
        this.nameOfDepartmentArray = ["Finance", "HR", "Recruitment", "Testing", "UX", "Development"];
        this.nameOfPersonArray = ["Raj", "Avinash", "Mahesh", "Sean", "Luna", "Kathie"];
        this.purposeVisitedArray = ["Interview", "Bank Work", "Personal", "Delivary"];
        this.visitingArea = ["yes", "No"];
    }
    SignInPage.prototype.onSubmit = function (value) {
        if (this.signInForm.valid) {
            console.log("Sign in Form is valid");
            console.log(this.data);
        }
        else {
            console.log("Sign in Form is invalid");
        }
    };
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.doGet = function () {
        var _this = this;
        debugger;
        console.log("DO GET");
        this.entryServicePrider.getCity(this.rootApi).subscribe(function (data) {
            _this.results = data;
        });
    };
    SignInPage.prototype.doPost = function () {
        console.log("DO POST");
    };
    SignInPage.prototype.doPut = function () {
        console.log("DO PUT");
    };
    SignInPage.prototype.doDelete = function () {
        console.log("DO DELETE");
    };
    SignInPage.prototype.onChangeEvent = function () {
        console.log("Drop down Change event occured");
    };
    SignInPage.prototype.onCancelEvent = function () {
        console.log("Drop down Cancel event occured");
    };
    SignInPage.prototype.resetForm = function () {
        this.data = { firstName: '', lastName: '', phone: '', email: '', company: '', department: '', personToBeVisit: '', purpose: '', controlledArea: '' };
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-in',template:/*ion-inline-start:"E:\AngularJSProject\Ionic_WorkSpace\src\pages\sign-in\sign-in.html"*/'<!--\n\n  Generated template for the SignInPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Visitor Sign In</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="item-bg-color">\n\n  <ion-grid fixed>\n\n      <ion-row>\n\n        <ion-col col-lg-5 col-md-5 col-sm-12 col-xs-12>\n\n          <img class="sign-in-img" width="100%" height="auto" src="assets/imgs/visitor-sign-in.png" />\n\n        </ion-col>\n\n        <ion-col col-lg-7 col-md-7 col-sm-12 col-xs-12>\n\n          <div class="sign-in-bg-color">\n\n            <ion-row>\n\n              <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n\n                <ion-label text-left class="page-title">We make your visit clutter free.</ion-label>\n\n                <ion-label text-wrap>Food safety Food Safety 1.svg Terms Foodborne illness Hazard analysis and critical control points (HACCP) • Hazard analysis and risk-based preventive controls (HARPC) Critical control point Critical factors FAT TOM pH Water activity (aw) Bacterial pathogens Clostridium botulinum Escherichia coli Listeria Salmonella Vibrio cholerae Cronobacter spp Viral pathogens Enterovirus Hepatitis A Norovirus Rotavirus Parasitic pathogens Cryptosporidium Entamoeba histolytica Giardia Trichinella v t e Food safety is a scientific discipline describing handling, preparation, and storage of food in ways that prevent food-borne illness. The occurrence of two or more cases of a similar illnesses resulting from the ingestion of a common food is known as a food-borne disease outbreak.[1] This includes a number of routines that should be followed to avoid potential health hazards.</ion-label>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n\n                <ion-label class="form-title">\n\n                  Sign in\n\n                </ion-label>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n\n                <form [formGroup]="signInForm">\n\n                  <ion-row>\n\n                    <ion-col col-lg-6 col-md-6 col-sm-12 col-xs-12>\n\n                      <ion-item [ngClass]="{\'error-border\':!signInForm.controls.firstName.valid && signInForm.controls.firstName.touched}">\n\n                        <ion-label floating>First Name</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="data.firstName" formControlName="firstName"></ion-input>\n\n                      </ion-item>\n\n                      <ion-label padding-left class="error-msg m-t-xs" *ngIf="signInForm.controls.firstName.hasError(\'required\') && signInForm.controls.firstName.touched">First Name is required!</ion-label>\n\n                      <ion-label padding-left class="error-msg" *ngIf="signInForm.controls.firstName.hasError(\'minlength\') && signInForm.controls.firstName.touched">Minimum first name length is 2!</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-lg-6 col-md-6 col-sm-12 col-xs-12>\n\n                      <ion-item [ngClass]="{\'error-border\':!signInForm.controls.lastName.valid && signInForm.controls.lastName.touched}">\n\n                        <ion-label floating>Last Name</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="data.lastName" formControlName="lastName"></ion-input>\n\n                      </ion-item>\n\n                      <ion-label padding-left class="error-msg m-t-xs" *ngIf="signInForm.controls.lastName.hasError(\'required\') && signInForm.controls.lastName.touched">Lirst Name is required!</ion-label>\n\n                      <ion-label padding-left class="error-msg" *ngIf="signInForm.controls.lastName.hasError(\'minlength\') && signInForm.controls.lastName.touched">Minimum last name length is 2!</ion-label>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                    <ion-col col-lg-6 col-md-6 col-sm-12 col-xs-12>\n\n                      <ion-item [ngClass]="{\'error-border\':!signInForm.controls.phone.valid && signInForm.controls.phone.touched}">\n\n                        <ion-label floating>Phone</ion-label>\n\n                        <ion-input type="tel" [(ngModel)]="data.phone" formControlName="phone"></ion-input>\n\n                      </ion-item>\n\n                      <ion-label padding-left class="error-msg m-t-xs" *ngIf="signInForm.controls.phone.hasError(\'required\') && signInForm.controls.phone.touched">Phone is required!</ion-label>\n\n                    </ion-col>\n\n                    <ion-col col-lg-6 col-md-6 col-sm-12 col-xs-12>\n\n                      <ion-item [ngClass]="{\'error-border\':!signInForm.controls.email.valid && signInForm.controls.email.touched}">\n\n                        <ion-label floating>Email</ion-label>\n\n                        <ion-input type="email" [(ngModel)]="data.email" formControlName="email"></ion-input>\n\n                      </ion-item>\n\n                      <ion-label padding-left class="error-msg m-t-xs" *ngIf="signInForm.controls.email.hasError(\'required\') && signInForm.controls.email.touched">Email is required!</ion-label>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                    <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n\n                      <ion-item [ngClass]="{\'error-border\':!signInForm.controls.company.valid && signInForm.controls.company.touched}">\n\n                        <ion-label floating>Company</ion-label>\n\n                        <ion-input type="text" [(ngModel)]="data.company" formControlName="company"></ion-input>\n\n                      </ion-item>\n\n                      <ion-label padding-left class="error-msg m-t-xs" *ngIf="signInForm.controls.company.hasError(\'required\') && signInForm.controls.company.touched">Company is required!</ion-label>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                    <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n\n                      <ion-item [ngClass]="{\'error-border\':!signInForm.controls.department.valid && signInForm.controls.department.touched}">\n\n                          <ion-label floating>Department of the person to be visited</ion-label>\n\n                          <ion-select formControlName="department" [(ngModel)]="data.department" (ionChange)=\'onChangeEvent()\' multiple="false" interface="popover">\n\n                            <ion-option *ngFor="let key of nameOfDepartmentArray" value="{{key}}">{{key}}</ion-option>\n\n                          </ion-select>   \n\n                      </ion-item>\n\n                      <ion-label padding-left class="error-msg m-t-xs" *ngIf="signInForm.controls.department.hasError(\'required\') && signInForm.controls.department.touched">Department is required!</ion-label>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                    <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n\n                      <ion-item [ngClass]="{\'error-border\':!signInForm.controls.nameOfPerson.valid && signInForm.controls.nameOfPerson.touched}">\n\n                        <ion-label floating>Name of the person to be visiting</ion-label>\n\n                        <ion-select formControlName="nameOfPerson" [(ngModel)]="data.personToBeVisit" (ionChange)=\'onChangeEvent()\' multiple="false" interface="popover">\n\n                          <ion-option *ngFor="let key of nameOfPersonArray" value="{{key}}">{{key}}</ion-option>\n\n                        </ion-select>\n\n                      </ion-item>\n\n                      <ion-label padding-left class="error-msg m-t-xs" *ngIf="signInForm.controls.nameOfPerson.hasError(\'required\') && signInForm.controls.nameOfPerson.touched">Name of person is required!</ion-label>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                    <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n\n                      <ion-item [ngClass]="{\'error-border\':!signInForm.controls.purpose.valid && signInForm.controls.purpose.touched}">\n\n                        <ion-label floating>Purpose of visit</ion-label>\n\n                        <ion-select formControlName="purpose" [(ngModel)]="data.purpose" (ionChange)=\'onChangeEvent()\' multiple="false" interface="popover">\n\n                          <ion-option *ngFor="let key of purposeVisitedArray" value="{{key}}">{{key}}</ion-option>\n\n                        </ion-select>\n\n                      </ion-item>\n\n                      <ion-label padding-left class="error-msg m-t-xs" *ngIf="signInForm.controls.purpose.hasError(\'required\') && signInForm.controls.purpose.touched">Purpose is required!</ion-label>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                  <ion-row>\n\n                    <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n\n                      <ion-item [ngClass]="{\'error-border\':!signInForm.controls.controlledArea.valid && signInForm.controls.controlledArea.touched}">\n\n                        <ion-label floating>Are you visiting GMP controlled area?</ion-label>\n\n                        <ion-select formControlName="controlledArea" [(ngModel)]="data.controlledArea" (ionChange)=\'onChangeEvent()\' (ionCancel)=\'onCancelEvent()\' multiple="false" interface="popover">\n\n                          <ion-option *ngFor="let key of visitingArea" value="{{key}}">{{key}}</ion-option>\n\n                        </ion-select>\n\n                      </ion-item>\n\n                      <ion-label padding-left class="error-msg m-t-xs" *ngIf="signInForm.controls.controlledArea.hasError(\'required\') && signInForm.controls.controlledArea.touched">Controlled area is required!</ion-label>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                  <ion-row padding-top>\n\n                    <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center>\n\n                      <button ion-button color="danger" outline round (click)="resetForm();">Reset</button>\n\n                      <button ion-button color="secondary" [disabled]="!signInForm.valid" (click)="onSubmit(signInForm.value);" type="submit" outline round>Submit</button>\n\n                    </ion-col>\n\n                  </ion-row>\n\n                </form>\n\n              </ion-col>\n\n            </ion-row>\n\n          </div>\n\n          \n\n        </ion-col>\n\n      </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\AngularJSProject\Ionic_WorkSpace\src\pages\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_entry_service_entry_service__["a" /* EntryServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		407,
		2
	],
	"../pages/sign-in/sign-in.module": [
		409,
		1
	],
	"../pages/sign-out/sign-out.module": [
		408,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the EntryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EntryServiceProvider = /** @class */ (function () {
    function EntryServiceProvider(http) {
        this.http = http;
        console.log('Hello EntryServiceProvider Provider');
    }
    /*createEntry(url) {
  
      return this.http.post(url)
      .do((res: Response) => console.log(res))
      .map((res: Response) => res.json())
    }*/
    /*getCity(url) {
  
      let apiUrl = url+'city';
      this.http.get(url)
        .toPromise()
        .then(res => {
  
          console.log(res.toString())
          return res.toString();
        });
    }*/
    EntryServiceProvider.prototype.getCity = function (url) {
        debugger;
        var apiUrl = url + '/city';
        return this.http.get(apiUrl)
            .map(function (res) {
            return res.toString();
        });
    };
    EntryServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], EntryServiceProvider);
    return EntryServiceProvider;
}());

//# sourceMappingURL=entry-service.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_us_about_us__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_out_sign_out__ = __webpack_require__(127);
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
 * Generated class for the Home page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *
 * @author: MaheshDe
 * @since: 11/05/2018
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.video = {
            url: 'https://www.youtube.com/watch?v=tqKpk1wABuI'
        };
    }
    HomePage.prototype.openAboutUsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_us_about_us__["a" /* AboutUsPage */]);
    };
    HomePage.prototype.openSignInPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in__["a" /* SignInPage */]);
    };
    HomePage.prototype.signOut = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sign_out_sign_out__["a" /* SignOutPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\AngularJSProject\Ionic_WorkSpace\src\pages\home\home.html"*/'<!-- <ion-header>\n\n  <ion-navbar> -->\n\n    <!--<ion-buttons left>\n\n      <button ion-button icon-only>\n\n        <ion-icon ios="logo-angular" md="logo-angular"></ion-icon>\n\n      </button>\n\n    </ion-buttons>-->\n\n   \n\n    <!-- <img class="logo" alt="logo" height="35" src="assets/imgs/facebook-icon.png">\n\n    <ion-title><ion-label class="home-page-header" color="facebook">Facebook</ion-label></ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding> \n\n  <ion-label> Date: {{day}}</ion-label>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col offset-3 col-6 text-center>\n\n          <ion-card (click)="aboutUs()">\n\n            <ion-card-content>\n\n              About Us\n\n            </ion-card-content>\n\n          </ion-card>\n\n      </ion-col>\n\n      \n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6 text-center>\n\n          <ion-card (click)="signIn()">\n\n            <ion-card-content>\n\n              Entry\n\n            </ion-card-content>\n\n          </ion-card>\n\n      </ion-col>\n\n      <ion-col col-6 text-center>\n\n          <ion-card (click)="exit()">\n\n            <ion-card-content>\n\n              Exit\n\n            </ion-card-content>\n\n          </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content> -->\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="item-bg-color">\n\n  <ion-grid fixed>\n\n    <ion-row>\n\n      <ion-col col-lg-6 col-md-6 col-sm-12 col-xs-12>\n\n        <!-- <ion-row>\n\n          <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n\n            <ion-label class="font-lg">\n\n              Smart Food Safe\n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row> -->\n\n        <ion-row>\n\n          <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n\n            <ion-label class="font-x-lg font-wt-500">\n\n              Welcome to Nature\'s Touch\n\n            </ion-label>\n\n            <ion-label text-wrap>\n\n              <h4>It’s in our Nature<br/></h4>\n\n              Like you, we’re always seeking the best. We travel extensively to bring great-tasting, high-quality products directly from the farm to your table.  \n\n            </ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-lg-6 col-md-6 col-sm-6 col-xs-12>\n\n            <ion-img width="100" height="25" src="assets/imgs/smart-food-safe.PNG"></ion-img>\n\n          </ion-col>\n\n          <!-- <ion-col col-lg-6 col-md-6 col-sm-6 col-xs-12>\n\n            <ion-label text-right>Get Started <ion-icon name="arrow-dropright-circle"></ion-icon></ion-label>\n\n          </ion-col> -->\n\n        </ion-row>\n\n        <ion-row>\n\n          <!-- <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12> -->\n\n            <iframe width="560" height="315" src="https://www.youtube.com/embed/0G8OtPfd4G4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n\n          <!-- </ion-col> -->\n\n        </ion-row>\n\n      </ion-col>\n\n      <ion-col col-lg-6 col-md-6 col-sm-12 col-xs-12>\n\n        <div>\n\n          <ion-grid fixed>\n\n            <ion-row>\n\n              <ion-col offset-lg-2 col-lg-8 offset-md-2 col-md-8 col-sm-12 col-xs-12>\n\n                <ion-card class="visitor-entry-card-bg" (click)="openSignInPage()">\n\n                  <ion-card-content text-center>\n\n                    <!-- <ion-thumbnail> -->\n\n                      <img text-center class="home-img" width="25" height="75" src="assets/imgs/visitor-entry.png" />\n\n                      <ion-label class="font-wt-700">Visitor Sign In</ion-label>\n\n                    <!-- </ion-thumbnail> -->\n\n                  </ion-card-content>\n\n                </ion-card>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col offset-lg-2 col-lg-8 offset-md-2 col-md-8 col-sm-12 col-xs-12>\n\n                <ion-card class="visitor-exit-card-bg" (click)="signOut()">\n\n                  <ion-card-content text-center>\n\n                    <img text-center class="home-img" width="25" height="75" src="assets/imgs/visitor-exit.png" />\n\n                    <ion-label class="font-wt-700">Visitor Sign Out</ion-label>\n\n                  </ion-card-content>\n\n                </ion-card>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col offset-lg-2 col-lg-8 offset-md-2 col-md-8 col-sm-12 col-xs-12>\n\n                <ion-card class="about-us-card-bg" (click)="openAboutUsPage()">\n\n                  <ion-card-content text-center>\n\n                    <img text-center class="home-img" width="25" height="75" src="assets/imgs/about-us.png" />\n\n                    <ion-label class="font-wt-700">About Us</ion-label>\n\n                  </ion-card-content>\n\n                </ion-card>\n\n              </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\AngularJSProject\Ionic_WorkSpace\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(255);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_sign_in__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_entry_service_entry_service__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sign_out_sign_out__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sign_out_sign_out__["a" /* SignOutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-out/sign-out.module#SignOutPageModule', name: 'SignOutPage', segment: 'sign-out', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sign_out_sign_out__["a" /* SignOutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_entry_service_entry_service__["a" /* EntryServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\AngularJSProject\Ionic_WorkSpace\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\AngularJSProject\Ionic_WorkSpace\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = "https://restcountries.eu/rest/v2/all";
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.getCountries = function () {
        return this.http.get(this.apiUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    RestProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[247]);
//# sourceMappingURL=main.js.map