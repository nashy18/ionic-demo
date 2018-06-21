webpackJsonp([5],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_http_service_http_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_config_contsants__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(28);
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
 * Generated class for the AuthenticationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuthenticationPage = /** @class */ (function () {
    function AuthenticationPage(navCtrl, navParams, menu, form, storage, http, httpServiceProvider, loadingController, toastController, events, domSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.form = form;
        this.storage = storage;
        this.http = http;
        this.httpServiceProvider = httpServiceProvider;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.events = events;
        this.domSanitizer = domSanitizer;
        this.data = { username: '', password: '' };
        this.storage.remove('companyConfig');
        this.loginForm = form.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    AuthenticationPage.prototype.onLogin = function (value) {
        var _this = this;
        if (this.loginForm.valid) {
            var loading_1 = this.loadingController.create({ content: "Loading..." });
            loading_1.present();
            try {
                var requestData = {};
                var request = {};
                request["username"] = value.username;
                request["password"] = value.password;
                requestData["action"] = __WEBPACK_IMPORTED_MODULE_8__providers_config_contsants__["a" /* APIActions */].authenticateUser;
                requestData["body"] = request;
                this.httpServiceProvider.post(requestData).subscribe(function (response) {
                    console.log("Successfully logged in! " + response.data);
                    if (response.data != null) {
                        // After user logs in fetch company data based on logged in user and store 
                        // company related data in local storage
                        _this.addCompanyInLocalStorage();
                    }
                    else {
                        _this.events.publish('toastr', 'User not found!');
                    }
                    loading_1.dismissAll();
                }, function (err) {
                    console.log(err);
                    loading_1.dismissAll();
                    _this.events.publish('toastr', 'Something is wrong. Please try again!');
                });
            }
            catch (error) {
                console.log(error);
                loading_1.dismissAll();
                this.events.publish('toastr', 'Something is wrong. Please try again!');
            }
        }
    };
    AuthenticationPage.prototype.addCompanyInLocalStorage = function () {
        var _this = this;
        var requestData = {};
        var request = {};
        request["companyId"] = "5af6b480789aa61d98736751";
        requestData["action"] = __WEBPACK_IMPORTED_MODULE_8__providers_config_contsants__["a" /* APIActions */].getCompanyConfigByCompanyId;
        requestData["body"] = request;
        try {
            this.httpServiceProvider.post(requestData).subscribe(function (response) {
                if (response.data != null) {
                    var data = {};
                    data["companyLogo"] = _this.domSanitizer.bypassSecurityTrustResourceUrl(response.data[0].json.logo);
                    data["companyName"] = response.data[0].companyId.name;
                    data["companyDescription"] = _this.domSanitizer.bypassSecurityTrustHtml(response.data[0].json.description);
                    data["companyVideo"] = _this.domSanitizer.bypassSecurityTrustResourceUrl(response.data[0].json.videoURL);
                    data["poweredByLogo"] = _this.domSanitizer.bypassSecurityTrustResourceUrl(response.data[0].json.poweredByLogo);
                    data["aboutUs"] = _this.domSanitizer.bypassSecurityTrustHtml(response.data[0].json.aboutUs);
                    data["companyWebsiteURL"] = _this.domSanitizer.bypassSecurityTrustResourceUrl(response.data[0].json.companyWebsiteURL);
                    data["signInPageDescription"] = _this.domSanitizer.bypassSecurityTrustHtml(response.data[0].json.signInPageDescription);
                    data["termsAndConditions"] = _this.domSanitizer.bypassSecurityTrustHtml(response.data[0].json.termsAndConditions);
                    data["aboutUsWhoWeAreLearnMore"] = _this.domSanitizer.bypassSecurityTrustHtml(response.data[0].json.aboutUsWhoWeAreLearnMore);
                    data["aboutUsMoreInfo"] = _this.domSanitizer.bypassSecurityTrustHtml(response.data[0].json.aboutUsMoreInfo);
                    _this.storage.remove('companyConfig');
                    _this.storage.set('companyConfig', data);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.events.publish('toastr', 'Failed to get company data');
                }
            });
        }
        catch (err) {
            this.events.publish('toastr', 'Something is wrong while storing company data');
            console.log(err);
        }
    };
    AuthenticationPage.prototype.resetForm = function () {
        this.data = { username: '', password: '' };
    };
    AuthenticationPage.prototype.ionViewDidLeave = function () {
        this.resetForm();
    };
    AuthenticationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-authentication',template:/*ion-inline-start:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\authentication\authentication.html"*/'<ion-header>\n  <ion-navbar class="auth-header"> \n    <ion-title>\n      <ion-grid text-center>\n        <ion-row>\n          <ion-col col-12 text-center>\n            <img src="assets/imgs/login-title.jpeg" class="auth-header-log"/>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="item-bg-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <ion-label text-center><h3><strong>Login</strong></h3></ion-label>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]="loginForm">\n      <ion-row>\n        <ion-col col-12 col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-xs-8 offset-xs-2>\n          <ion-label class="label_name">Username</ion-label>  \n          <ion-item>\n            <ion-input type="text" [(ngModel)]="data.username" formControlName="username" [class.invalid]="!loginForm.controls.username.valid && \n             (loginForm.controls.username.dirty)"></ion-input>\n            <button class="tooltip tooltip-btn" clear item-right>\n              <img class="tooltip tooltip-img" src="assets/imgs/help_outline.svg">\n               <span class="tooltiptext">Enter Username</span>\n            </button>\n          </ion-item>\n          <ng-container *ngIf="loginForm.controls.username.hasError(\'required\') && (loginForm.controls.username.touched); then userNameReq"></ng-container>\n          <ng-template #userNameReq>\n            <div class="req-lbl">* Username is required!</div>\n          </ng-template>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-xs-8 offset-xs-2>\n          <ion-label class="label_name">Password</ion-label>  \n          <ion-item>\n            <ion-input type="password" [(ngModel)]="data.password" formControlName="password" [class.invalid]="!loginForm.controls.password.valid && \n             (loginForm.controls.password.dirty)"></ion-input>\n            <button class="tooltip tooltip-btn" clear item-right>\n              <img class="tooltip tooltip-img" src="assets/imgs/help_outline.svg">\n               <span class="tooltiptext">Enter Password</span>\n            </button>\n          </ion-item>\n          <ng-container *ngIf="loginForm.controls.password.hasError(\'required\') && (loginForm.controls.password.touched); then passwordReq"></ng-container>\n          <ng-template #passwordReq>\n            <div class="req-lbl">* Password is required!</div>\n          </ng-template>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 text-center padding-top>\n          <button ion-button color="secondary" [disabled]="!loginForm.valid" (click)="onLogin(loginForm.value);" type="submit" round>Login</button>\n       </ion-col>\n     </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\authentication\authentication.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["c" /* DomSanitizer */]])
    ], AuthenticationPage);
    return AuthenticationPage;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__terms_and_conditions_terms_and_conditions__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_http_service_http_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_config_contsants__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(43);
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
    function SignInPage(navCtrl, navParams, fb, alertCtrl, http, httpServiceProvider, storage, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.httpServiceProvider = httpServiceProvider;
        this.storage = storage;
        this.loadingController = loadingController;
        this.submitAttempt = false;
        this.nameOfDepartmentList = [];
        this.nameOfPersonList = [];
        this.purposeVisitedList = [];
        this.visitingAreaList = [];
        this.phonePattern = "^[0-9]*";
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.data = { firstName: '', lastName: '', phone: '', email: '', company: '', department: '', nameOfPerson: '', purpose: '', controlledArea: '' };
        this.signInForm = fb.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            phone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(this.phonePattern), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(15)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(/^[a-z0-9!#$%&'+\/=?^_`{|}~.-]+@\w+([\.-]?\w+)?(\.\w{2,4})+$/i), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            company: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            department: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            nameOfPerson: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            purpose: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            controlledArea: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
        });
        this.visitingAreaList = [
            { id: 102, name: 'No' },
            { id: 101, name: 'Yes' }
        ];
    }
    SignInPage.prototype.resetForm = function () {
        this.data = { firstName: '', lastName: '', phone: '', email: '', company: '', department: '', nameOfPerson: '', purpose: '', controlledArea: '' };
    };
    SignInPage.prototype.ionViewDidLoad = function () {
        this.getDepartentData();
        this.getAllPurposeData();
        console.log('ionViewDidLoad SignInPage');
    };
    SignInPage.prototype.onSubmit = function (value) {
        var _this = this;
        this.submitAttempt = true;
        if (this.signInForm.valid) {
            var loading_1 = this.loadingController.create({ content: "Loading..." });
            loading_1.present();
            try {
                var requestData = {};
                var request = {};
                request["firstName"] = value.firstName;
                request["lastName"] = value.lastName;
                request["email"] = value.email;
                request["mobileNumber"] = value.phone;
                request["companyName"] = value.company;
                request["departmentId"] = value.department.id;
                request["employeeId"] = value.nameOfPerson.id;
                request["visitPurposeId"] = value.purpose.id;
                request["visitingRestrictedAreas"] = (value.controlledArea.name == 'Yes') ? true : false;
                request["companyId"] = __WEBPACK_IMPORTED_MODULE_7__providers_config_contsants__["b" /* Global */].companyId;
                requestData["action"] = __WEBPACK_IMPORTED_MODULE_7__providers_config_contsants__["a" /* APIActions */].addVisitor;
                requestData["body"] = request;
                this.httpServiceProvider.post(requestData).subscribe(function (response) {
                    console.log("Visitor created Successfully! " + response.data);
                    // Save visitor data in local storage
                    _this.storage.remove('visitor');
                    _this.storage.set('visitor', response.data);
                    loading_1.dismissAll();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */]);
                }, function (err) {
                    console.log(err);
                    loading_1.dismissAll();
                });
            }
            catch (error) {
                console.log(error);
                loading_1.dismissAll();
            }
        }
        else {
            console.log("Sign in Form is invalid");
        }
    };
    SignInPage.prototype.onCancelEvent = function () {
        console.log("Drop down Cancel event occured");
    };
    SignInPage.prototype.getDepartentData = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: "Loading..." });
        loading.present();
        var request = {};
        request["action"] = __WEBPACK_IMPORTED_MODULE_7__providers_config_contsants__["a" /* APIActions */].getAllDepartmets;
        try {
            this.httpServiceProvider.get(request).subscribe(function (response) {
                console.log(response.data);
                _this.nameOfDepartmentList = _this.getListByOrderASC(response.data);
                loading.dismissAll();
            }, function (err) {
                console.log(err);
                loading.dismissAll();
            });
        }
        catch (error) {
            loading.dismissAll();
            console.log(error);
        }
    };
    SignInPage.prototype.getAllPurposeData = function () {
        //let loading = this.loadingController.create({content : "Logging in ,please wait..."});
        //loading.present();
        var _this = this;
        var requestData = {};
        requestData["action"] = __WEBPACK_IMPORTED_MODULE_7__providers_config_contsants__["a" /* APIActions */].getAllPurposes;
        try {
            this.httpServiceProvider.get(requestData).subscribe(function (response) {
                console.log(response.data);
                _this.purposeVisitedList = _this.getListByOrderASC(response.data);
                //loading.dismissAll();
            }, function (err) {
                console.log(err);
                //loading.dismissAll();
            });
        }
        catch (error) {
            console.log(error);
            //loading.dismissAll();
        }
    };
    SignInPage.prototype.userSelectChange = function (event, type) {
        var _this = this;
        console.log('DropDown Value:', event.value);
        // List employees belongs to selected department
        if (type == 'department') {
            var loading_2 = this.loadingController.create({ content: "Loading..." });
            loading_2.present();
            this.data.nameOfPerson = '';
            var requestData = {};
            var request = {};
            request["departmentId"] = event.value.id;
            requestData["action"] = __WEBPACK_IMPORTED_MODULE_7__providers_config_contsants__["a" /* APIActions */].getEmployeesByDepartment;
            requestData["body"] = request;
            try {
                this.httpServiceProvider.post(requestData).subscribe(function (response) {
                    console.log("Employee Data: " + response.data);
                    var list = response.data;
                    if (list != null && list != undefined) {
                        for (var i = 0; i < list.length; i++) {
                            list[i]["fullName"] = list[i].firstName + ' ' + list[i].lastName;
                        }
                    }
                    _this.nameOfPersonList = _this.getPersonListByOrderASC(list);
                    ;
                    loading_2.dismissAll();
                }, function (err) {
                    console.log(err);
                    loading_2.dismissAll();
                });
            }
            catch (error) {
                console.log(error);
                loading_2.dismissAll();
            }
        }
    };
    SignInPage.prototype.getListByOrderASC = function (list) {
        if (list == undefined || list == null) {
            return list;
        }
        return list.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
        });
    };
    SignInPage.prototype.getPersonListByOrderASC = function (list) {
        if (list == undefined || list == null) {
            return list;
        }
        return list.sort(function (a, b) {
            var nameA = a.fullName.toUpperCase();
            var nameB = b.fullName.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
        });
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-in',template:/*ion-inline-start:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\sign-in\sign-in.html"*/'<!--\n  Generated template for the SignInPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Visitor Sign In</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="item-bg-color">\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col col-12 col-lg-5 col-md-5 col-sm-12 col-xs-12>\n        <img class="sign-in-img" width="100%" height="auto" src="assets/imgs/sign-in.png" />\n      </ion-col>\n      <ion-col col-12 col-lg-7 col-md-7 col-sm-12 col-xs-12 padding-horizontal>\n        <div class="sign-in-bg-color">\n          <form [formGroup]="signInForm" >\n            <ion-row>\n             <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n               <ion-label text-wrap text-center class="page-title">We make your visit clutter free.</ion-label>\n               <!-- <ion-label text-wrap text-justify>Food safety Food Safety 1.svg Terms Foodborne illness Hazard analysis and critical control points (HACCP)</ion-label>\n               <ion-label text-wrap text-justify>• Hazard analysis and risk-based preventive controls (HARPC) Critical control point Critical factors FAT TOM pH Water activity (aw) Bacterial pathogens Clostridium botulinum Escherichia coli Listeria Salmonella Vibrio cholerae Cronobacter spp Viral pathogens Enterovirus Hepatitis A Norovirus Rotavirus Parasitic pathogens Cryptosporidium Entamoeba histolytica Giardia Trichinella v t e Food safety is a scientific discipline describing handling, preparation, and storage of food in ways that prevent food-borne illness.</ion-label>\n               <ion-label text-wrap text-justify>The occurrence of two or more cases of a similar illnesses resulting from the ingestion of a common food is known as a food-borne disease outbreak.</ion-label>\n               <ion-label text-wrap text-justify>[1] This includes a number of routines that should be followed to avoid potential health hazards.</ion-label> -->\n             </ion-col>\n           </ion-row>\n           <!-- <ion-row>\n            <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n              <ion-label class="form-title">\n                Sign in\n              </ion-label>\n            </ion-col>\n           </ion-row> -->\n           <ion-row>&nbsp;</ion-row>\n           <ion-row>\n             <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>\n               <ion-label class="label_name" text-wrap>Scan business card here or enter below </ion-label>\n             </ion-col>                \n             <ion-col class="sign-in-bar-code-txt-align" col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12 padding-top>\n               <ion-img width="100" height="25" src="assets/imgs/bar_code.png"></ion-img>\n             </ion-col>\n           </ion-row>            \n           <ion-row>\n            <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>    \n              <ion-label class="label_name">First Name<span class="astrik"> * </span></ion-label>  \n                <ion-item>\n                  <ion-input type="text" [(ngModel)]="data.firstName" formControlName="firstName" [class.invalid]="!signInForm.controls.firstName.valid && \n                   (signInForm.controls.firstName.dirty)"></ion-input>\n                  <button class="tooltip tooltip-btn" clear item-right>\n                    <img class="tooltip tooltip-img" src="assets/imgs/help_outline.svg">\n                     <span class="tooltiptext">Enter first name</span>\n                  </button>\n                </ion-item> \n                <ng-container *ngIf="signInForm.controls.firstName.hasError(\'required\') && (signInForm.controls.firstName.touched); then fnReq"></ng-container>\n                <ng-template #fnReq>\n                  <div class="req-lbl">* First Name is required!</div>\n                </ng-template>\n                <ng-container *ngIf="signInForm.controls.firstName.hasError(\'minlength\') && (signInForm.controls.firstName.touched); then fnMinReq"></ng-container>\n                <ng-template #fnMinReq>\n                  <div class="req-lbl">* Minimum length is 2!</div>\n                </ng-template>\n                <ng-container *ngIf="!signInForm.controls.firstName.hasError(\'required\') && !signInForm.controls.firstName.hasError(\'minlength\') && !signInForm.controls.firstName.valid && (signInForm.controls.firstName.touched); then fnInvalidName"></ng-container>\n                <ng-template #fnInvalidName>\n                  <div class="req-lbl">* Invalid name!</div>\n                </ng-template>\n            </ion-col>\n            <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>    \n              <ion-label class="label_name">Last Name<span class="astrik"> * </span></ion-label>  \n                <ion-item>\n                  <ion-input type="text" [(ngModel)]="data.lastName" formControlName="lastName" [class.invalid]="!signInForm.controls.lastName.valid && \n                   (signInForm.controls.lastName.dirty)"></ion-input>\n                    <button class="tooltip tooltip-btn" clear item-right >\n                     <img class="tooltip tooltip-img" src="assets/imgs/help_outline.svg">\n                     <span class="tooltiptext">Enter last name</span>\n                    </button>\n                </ion-item> \n                <!-- <div class="req-lbl" *ngIf="signInForm.controls.lastName.hasError(\'required\')  &&\n                  (signInForm.controls.lastName.touched )">* Last Name is required!</div>  \n                <div class="req-lbl" *ngIf="signInForm.controls.lastName.hasError(\'minlength\')  &&\n                  (signInForm.controls.lastName.touched )">* Minimum last name length is 2!</div>  -->\n                <ng-container *ngIf="signInForm.controls.lastName.hasError(\'required\') && (signInForm.controls.lastName.touched); then lnReq"></ng-container>\n                <ng-template #lnReq>\n                  <div class="req-lbl">* Last Name is required!</div>\n                </ng-template>\n                <ng-container *ngIf="signInForm.controls.lastName.hasError(\'minlength\') && (signInForm.controls.lastName.touched); then lnMinReq"></ng-container>\n                <ng-template #lnMinReq>\n                  <div class="req-lbl">* Minimum length is 2!</div>\n                </ng-template>\n                <ng-container *ngIf="!signInForm.controls.lastName.hasError(\'required\') && !signInForm.controls.lastName.hasError(\'minlength\') && !signInForm.controls.lastName.valid && (signInForm.controls.lastName.touched); then lnInvalidName"></ng-container>\n                <ng-template #lnInvalidName>\n                  <div class="req-lbl">* Invalid name!</div>\n                </ng-template>                 \n             </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>    \n                <ion-label class="label_name">Phone<span class="astrik"> * </span></ion-label>  \n                  <ion-item>\n                    <ion-input type="tel" [(ngModel)]="data.phone" formControlName="phone" [class.invalid]="!signInForm.controls.phone.valid && \n                      (signInForm.controls.phone.dirty)"></ion-input>\n                      <button class="tooltip tooltip-btn" clear item-right >\n                       <img class="tooltip tooltip-img" src="assets/imgs/help_outline.svg">\n                       <span class="tooltiptext">Enter your contact</span>\n                      </button>\n                  </ion-item> \n                  <!-- <div class="req-lbl" *ngIf="!signInForm.controls.phone.valid && \n                    (signInForm.controls.phone.touched )">* Phone is required (10 digit)!</div>      -->\n                    <ng-container *ngIf="signInForm.controls.phone.hasError(\'minlength\') && (signInForm.controls.phone.touched); then mobMinReq"></ng-container>\n                    <ng-template #mobMinReq>\n                      <div class="req-lbl">* Minimum 10 digits requird!</div>\n                    </ng-template>\n                    <ng-container *ngIf="signInForm.controls.phone.hasError(\'maxlength\') && (signInForm.controls.phone.touched); then mobMaxReq"></ng-container>\n                    <ng-template #mobMaxReq>\n                      <div class="req-lbl">* Maximum 15 digits allowed!</div>\n                    </ng-template>\n                    <ng-container *ngIf="signInForm.controls.phone.hasError(\'required\') && !signInForm.controls.phone.hasError(\'maxlength\') && !signInForm.controls.phone.hasError(\'minlength\') && !signInForm.controls.phone.valid && (signInForm.controls.phone.touched); then mobInvalidName"></ng-container>\n                    <ng-template #mobInvalidName>\n                      <div class="req-lbl">* Phone is required!</div>\n                    </ng-template> \n                    <ng-container *ngIf="!signInForm.controls.phone.hasError(\'required\') && !signInForm.controls.phone.hasError(\'maxlength\') && !signInForm.controls.phone.hasError(\'minlength\') && !signInForm.controls.phone.valid && (signInForm.controls.phone.touched); then wrongMob"></ng-container>\n                    <ng-template #wrongMob>\n                      <div class="req-lbl">* Invalid phone!</div>\n                    </ng-template>        \n              </ion-col>\n              <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>    \n                <ion-label class="label_name">Email<span class="astrik"> * </span></ion-label>  \n                  <ion-item>\n                    <ion-input type="text" [(ngModel)]="data.email" formControlName="email" [class.invalid]="!signInForm.controls.email.valid && \n                      (signInForm.controls.email.dirty)"></ion-input>\n                      <button class="tooltip tooltip-btn" clear item-right >\n                       <img class="tooltip tooltip-img" src="assets/imgs/help_outline.svg">\n                       <span class="tooltiptext">Enter email</span>\n                      </button>\n                  </ion-item> \n                  <div class="req-lbl" *ngIf="!signInForm.controls.email.valid  &&\n                    (signInForm.controls.email.touched )">* Email is required!</div>                \n               </ion-col>\n              </ion-row>\n              <ion-row>\n               <ion-col col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12>    \n                 <ion-label class="label_name">Company<span class="astrik"> * </span></ion-label>  \n                   <ion-item>\n                    <ion-input type="text" [(ngModel)]="data.company" formControlName="company" [class.invalid]="!signInForm.controls.company.valid && \n                     (signInForm.controls.company.dirty)"></ion-input>\n                     <button class="tooltip tooltip-btn" clear item-right >\n                      <img class="tooltip tooltip-img" src="assets/imgs/help_outline.svg">\n                      <span class="tooltiptext">Enter company name</span>\n                     </button>\n                   </ion-item> \n                   <div class="req-lbl" *ngIf="!signInForm.controls.company.valid  &&\n                    (signInForm.controls.company.touched )">* Company is required!</div>                \n                </ion-col>                  \n                </ion-row>\n                <ion-row>\n                  <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>    \n                    <ion-label class="label_name" text-wrap>Department of the person to be visited<span class="astrik"> * </span></ion-label>  \n                      <ion-item>                          \n                        <select-searchable class="select-option" formControlName="department" [(ngModel)]="data.department" [items]="nameOfDepartmentList" itemValueField="id" itemTextField="name" [canSearch]="true" (onChange)="userSelectChange($event, \'department\')"> \n                        </select-searchable>\n                        <button class="tooltip tooltip-btn" clear item-right >\n                          <img class="tooltip tooltip-img" src="assets/imgs/help_outline.svg">\n                          <span class="tooltiptext">Select department name</span>\n                        </button>\n                      </ion-item> \n                      <div class="req-lbl" *ngIf="!signInForm.controls.department.valid  &&\n                       (signInForm.controls.department.dirty )">* Department is required!</div>                \n                  </ion-col>\n                  <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>    \n                    <ion-label class="label_name" text-wrap>Name of the person to be visiting<span class="astrik"> * </span></ion-label>  \n                      <ion-item>                              \n                        <select-searchable class="select-option" formControlName="nameOfPerson" [(ngModel)]="data.nameOfPerson" [items]="nameOfPersonList" itemValueField="id" itemTextField="fullName" [canSearch]="true" (onChange)="userSelectChange($event, \'emplyee\')"> \n                        </select-searchable>\n                        <button class="tooltip tooltip-btn" clear item-right >\n                          <img class="tooltip tooltip-img" src="assets/imgs/help_outline.svg">\n                          <span class="tooltiptext">Select person name</span>\n                        </button>\n                      </ion-item> \n                      <div class="req-lbl" *ngIf="!signInForm.controls.nameOfPerson.valid  &&\n                        (signInForm.controls.nameOfPerson.dirty )">* Name of person is required!</div>                \n                   </ion-col>\n                  </ion-row> \n                  <ion-row>\n                    <ion-col col-12 col-lg-6 col-md-6 col-sm-12 col-xs-12>    \n                      <ion-label class="label_name">Purpose of visit<span class="astrik"> * </span></ion-label>  \n                        <ion-item>\n                          <select-searchable class="select-option" formControlName="purpose" [(ngModel)]="data.purpose" [items]="purposeVisitedList" itemValueField="id" itemTextField="name" [canSearch]="true" (onChange)="userSelectChange($event, \'purpose\')"> \n                          </select-searchable>\n                          <button class="tooltip tooltip-btn" clear item-right >\n                           <img class="tooltip tooltip-img" src="assets/imgs/help_outline.svg">\n                           <span class="tooltiptext">Select purpose for visiting</span>\n                          </button>\n                       </ion-item> \n                       <div class="req-lbl" *ngIf="!signInForm.controls.purpose.valid  &&\n                        (signInForm.controls.purpose.dirty )">* Purpose is required!</div>                \n                    </ion-col>\n                    <ion-col col-12 col-lg-6 col-md-12 col-sm-12 col-xs-12>    \n                      <ion-label class="label_name" text-wrap>Are you visiting GMP controlled area?<span class="astrik"> * </span></ion-label>  \n                        <ion-item>\n                          <select-searchable class="select-option" formControlName="controlledArea" [(ngModel)]="data.controlledArea" [items]="visitingAreaList" itemValueField="id" itemTextField="name" [canSearch]="true" (onChange)="userSelectChange($event, \'controlledArea\')"> \n                          </select-searchable>\n                        <button class="tooltip tooltip-btn" clear item-right >\n                         <img class="tooltip tooltip-img" src="assets/imgs/help_outline.svg">\n                         <span class="tooltiptext">select option for GMP</span>\n                        </button>\n                       </ion-item> \n                       <div class="req-lbl" *ngIf="!signInForm.controls.controlledArea.valid  &&\n                        (signInForm.controls.controlledArea.dirty )">* GMP is required!</div>                \n                     </ion-col>\n                   </ion-row> \n                   <ion-row>\n                      <ion-col col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center>\n                        <p *ngIf="submitAttempt && !signInForm.valid" class="req-lbl" text-wrap>(*) Please fill all mandatory details.</p>\n                      </ion-col>\n                   </ion-row>\n                   <ion-row>\n                      <ion-col col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center>\n                        <button ion-button color="danger" outline round (click)="resetForm();">Reset</button>\n                        <button ion-button color="secondary" (click)="onSubmit(signInForm.value);" type="submit" outline round>Submit</button>\n                     </ion-col>\n                   </ion-row>\n            </form>\n          </div>          \n        </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_config_contsants__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(43);
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
 * Generated class for the TermsAndConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsAndConditionsPage = /** @class */ (function () {
    function TermsAndConditionsPage(navCtrl, navParams, viewCtrl, modalCtrl, httpServiceProvider, storage, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.httpServiceProvider = httpServiceProvider;
        this.storage = storage;
        this.loadingController = loadingController;
        this.signaturePadOptions = {
            'minWidth': 2,
            'canvasWidth': 400,
            'canvasHeight': 200,
            'backgroundColor': '#f6fbff',
            'penColor': '#666a73'
        };
        // isAgreeDisagreeRequired = false;
        this.isSignatureRequired = false;
        this.agreeSelected = false;
        this.disagreeSelected = false;
        this.touchSignature = false;
        this.agreeDefaultButtonBGColor = '#0000';
        this.disagreeDefaultButtonBGColor = '#0000';
        this.agreeBttnText = '#30d05f';
        this.disagreeBttnText = '#e93a3a';
        this.isSubmitDisabled = true;
        this.isSignatureBoxHidden = false;
        this.isAgreeDisabled = false;
        this.isDisagreeDisabled = false;
        this.policy = "Nature’s Touch grants you a revocable, non-exclusive, non-transferable, non-sublicensable, limited right to Use the Site, subject to the present Terms and Conditions. Anything in the Site may be subject to other intellectual property rights reserved by Nature’s Touch or any other party. Nothing contained herein shall be construed as conferring by implication, estoppel or otherwise any license or right under any patent or trademark of Nature’s Touch or any other party. Except as provided above, nothing contained herein shall be construed as conferring any license or right under any Nature’s Touch or any other party copyright. Nothing contained on the Site should be construed as granting any license or right to use any trademark displayed on the Site without the written permission of Nature’s Touch or such third party that may own the trademarks. You acknowledge that Nature’s Touch does not have an obligation to monitor any Content, accessible through the Site. However, you agree that Nature’s Touch has the right to monitor the Site from time to time and to disclose any information as necessary or required to comply with applicable laws, regulations or administrative or governmental or judicial requests, to operate the Site properly, to ensure the enforcement of and the compliance with the Terms and Conditions. The Site may contain some Content such as health related information, which is provided for educational purposes only and should not be interpreted as a recommendation for a specific treatment plan, product or course of action. Use of the Site and of this type of Content does not constitute medical advice and does not replace consultations with a qualified medical or other relevant professional. Some of the Content so provided may even be outdated. Nature’s Touch shall not, directly or indirectly, in any way be responsible for any loss or damage of any kind incurred as a result of, or in connection with your Use of the Site or reliance on, any such Content. By posting any Content on the Site, you agree to grant Nature’s Touch a royalty-free, world-wide license to use, copy, adapt, transmit, disclose and distribute your Content. This Site, including without limitation all Content, is protected by Canadian and worldwide copyrights laws and treaty provisions. Any unauthorized copying, redistribution, reproduction or modification of the Content by any person may be a violation of trade-mark and/or copyright laws and could result in legal action. You agree to comply with all applicable copyright laws.";
        this.disclaimer = "Nature’s Touch take no responsibility for the accuracy, validity or suitability for any purpose of the Site and of any Content contained therein, which are all provided on an “as IS” basis, without warranty of any kind, expressed or implied including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. By using this Site, you agree that your access to the Site and / or use of its contents is at your own risk. Nature’s Touch, its employees, directors, officers, agents and/or affiliates, as well as any other party involved in the creation or delivery of the Site, will not, in any event, at any time, be held responsible for any damages whatsoever, including direct, incidental, special, consequential, indirect and punitive damages or injury arising from visitor access and/or Use or inability to Use this Site or any Content and information contained and/or provided therein whether generally set out in this Site or specifically in response to visitors";
        this.signature = '';
        console.log("constr loaded");
        this.getTermsAndConsitionsData();
        this.modalHeader = this.navParams.get('header');
        this.modalBody = this.navParams.get('body');
        this.modalType = this.navParams.get('type');
    }
    TermsAndConditionsPage_1 = TermsAndConditionsPage;
    TermsAndConditionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsAndConditionsPage');
    };
    TermsAndConditionsPage.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter");
        this.signaturePad.clear();
    };
    TermsAndConditionsPage.prototype.drawComplete = function () {
        console.log("Draw completed");
        this.touchSignature = true;
        this.isSignatureRequired = false;
    };
    TermsAndConditionsPage.prototype.drawStart = function () {
        console.log("drawStart");
        this.touchSignature = true;
        this.isSignatureRequired = false;
    };
    TermsAndConditionsPage.prototype.clearPad = function () {
        console.log("Signature pad is cleared");
        this.signaturePad.clear();
        this.isSignatureRequired = false;
        this.touchSignature = false;
    };
    TermsAndConditionsPage.prototype.openAgreeModal = function () {
        // Changing the button background-color & text color on agree button click.
        this.agreeDefaultButtonBGColor = '#30d05f';
        this.agreeBttnText = '#ffffff';
        // If click on agree then removing highlight from disagree button
        this.disagreeDefaultButtonBGColor = "#0000";
        this.disagreeBttnText = '#e93a3a';
        this.isSubmitDisabled = false; //used to enable submit button after click agree button on modal
        //this.isSignatureBoxHidden = false; //used to enable signature box after click agree button on modal
        // this.isAgreeDisagreeRequired = false;
        this.agreeSelected = true;
        this.disagreeSelected = false;
    };
    TermsAndConditionsPage.prototype.openDisagreeModal = function () {
        var _this = this;
        var data = { header: 'Confirmation', body: 'Please note your access will be restricted to non-GMP compliant areas only.', type: 'disagree' };
        var modalPage = this.modalCtrl.create('ConfirmationModalPage', data);
        modalPage.present();
        modalPage.onDidDismiss(function (obj) {
            console.log("I have dismissed." + obj);
            if (obj.status == 'confirmed') {
                _this.isSubmitDisabled = false; //used to enable submit button after click agree button on modal
                //this.isSignatureBoxHidden = false; //used to enable signature box after click agree button on modal
                // Changing the button background-color & text color on Disagree button click.
                _this.disagreeDefaultButtonBGColor = "#e93a3a";
                _this.disagreeBttnText = '#ffffff';
                // If click on disagree removing highlight from agree button
                _this.agreeDefaultButtonBGColor = '#0000';
                _this.agreeBttnText = '#30d05f';
                // this.isAgreeDisagreeRequired = false;
                _this.disagreeSelected = true;
                _this.agreeSelected = false;
            }
            else {
                //this.isSubmitDisabled = true; //used to disable submit button after click cancel button on modal
                //this.isSignatureBoxHidden = true; //used to disable signature box after click cancel button on modal
                // Changing the button background-color & text color on Disagree button click.
                _this.disagreeDefaultButtonBGColor = "#0000";
                _this.disagreeBttnText = '#e93a3a';
                //this.isAgreeDisagreeRequired = true;
            }
        });
        modalPage.onWillDismiss(function (data) {
            console.log("I'm about to dismiss");
            console.log(data);
        });
    };
    TermsAndConditionsPage.prototype.submit = function () {
        var _this = this;
        if (this.touchSignature) {
            var loading_1 = this.loadingController.create({ content: "Loading..." });
            loading_1.present();
            this.viewCtrl.dismiss();
            this.signature = this.signaturePad.toDataURL();
            console.log("Signature: " + this.signature);
            this.signaturePad.clear();
            // Update visitor to add signature and isAgree/isDisagree
            this.storage.get('visitor').then(function (obj) {
                console.log("Visitor from local storage: " + obj.firstName);
                var requestData = {};
                var request = {};
                var jsonObject = {};
                jsonObject["signature"] = _this.signature;
                jsonObject["isAgree"] = _this.agreeSelected;
                jsonObject["isDisagree"] = _this.disagreeSelected;
                request["json"] = jsonObject;
                requestData["action"] = __WEBPACK_IMPORTED_MODULE_4__providers_config_contsants__["a" /* APIActions */].updateVisitor + "/" + obj.id;
                requestData["body"] = request;
                try {
                    _this.httpServiceProvider.patch(requestData).subscribe(function (response) {
                        console.log("Visior Updated Data: " + response.data);
                        loading_1.dismissAll();
                    }, function (err) {
                        console.log(err);
                        loading_1.dismissAll();
                    });
                }
                catch (error) {
                    console.log(error);
                    loading_1.dismissAll();
                }
            });
            var data = { header: 'Confirmation', body: 'Please wait, your contact has been notified to receive you shortly. Please collect your visitor pass from the printer.', type: 'agree' };
            var modalPage = this.modalCtrl.create('ConfirmationModalPage', data);
            modalPage.present();
            modalPage.onDidDismiss(function (obj) {
                console.log("I have dismissed " + obj);
                if (obj.status == 'confirmed') {
                    var data = { GMPType: _this.modalType };
                    var printModalPage = _this.modalCtrl.create('VisitorPassModalPage', data);
                    printModalPage.present();
                    printModalPage.onDidDismiss(function (obj) {
                        console.log("I have dismissed " + obj);
                        if (obj.status != 'confirmed') {
                            _this.navCtrl.push(TermsAndConditionsPage_1);
                        }
                    });
                    printModalPage.onWillDismiss(function (obj) {
                        console.log("I'm about to dismiss " + obj);
                    });
                }
                else {
                    _this.navCtrl.push(TermsAndConditionsPage_1);
                }
            });
            modalPage.onWillDismiss(function (obj) {
                console.log("I'm about to dismiss " + obj);
            });
        }
        else {
            this.isSignatureRequired = true;
        }
    };
    TermsAndConditionsPage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    TermsAndConditionsPage.prototype.getTermsAndConsitionsData = function () {
        var _this = this;
        this.storage.get('companyConfig').then(function (obj) {
            _this.termsAndConsition = obj.termsAndConditions.changingThisBreaksApplicationSecurity;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], TermsAndConditionsPage.prototype, "signaturePad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], TermsAndConditionsPage.prototype, "content", void 0);
    TermsAndConditionsPage = TermsAndConditionsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-terms-and-conditions',template:/*ion-inline-start:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\terms-and-conditions\terms-and-conditions.html"*/'<!--\n  Generated template for the TermsAndConditionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Visitor Policy</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-grid fixed>\n    <ion-row> \n      <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12>\n        <ion-content text-wrap style="height:355px;">\n          <div [innerHTML]="termsAndConsition"></div>\n        </ion-content>\n      </ion-col>\n    </ion-row>\n    <ion-row padding-top>\n      <ion-col col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center>\n        <button ion-button class="custom-btn" [disabled]="isAgreeDisabled" [ngStyle]="{\'background-color\': agreeDefaultButtonBGColor, \'color\': agreeBttnText}" color="secondary" (click)="openAgreeModal();" outline round>Agree</button>\n        <button ion-button class="custom-btn" [disabled]="isDisagreeDisabled" [ngStyle]="{\'background-color\': disagreeDefaultButtonBGColor, \'color\': disagreeBttnText}" color="danger" (click)="openDisagreeModal();" outline round>Disagree</button>\n        <!-- <div class="req-lbl" *ngIf="isAgreeDisagreeRequired">* Please select Agree or Disagree option.</div> -->\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row *ngIf="!isSignatureBoxHidden">\n      <ion-col text-center class="digital-signature" col-lg-12 col-md-12 col-sm-12 col-xs-12>\n        <signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>\n      </ion-col>\n    </ion-row> -->\n    <ion-row>\n      <ion-col text-center col-12 offset-lg-4 col-lg-4 offset-md-4 col-md-4 col-sm-12 col-xs-12>\n        <signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>\n        <!-- <button (click)="clearPad()"> -->\n          <!-- <ion-icon item-right ios="ios-refresh" md="md-refresh" style="font-size: 26px;"></ion-icon> -->\n          <!-- <img class="tooltip" (click)="clearPad()" height="20" width="30" src="assets/imgs/reset.png" /> -->\n        <!-- </button> -->\n        <button text-center ion-button small class="" color="dark" (click)="clearPad();">Clear signature</button>\n        <div class="req-lbl" *ngIf="isSignatureRequired">* Please add your signature here.</div>\n      </ion-col>\n    </ion-row>\n   <ion-row>\n      <ion-col text-center col-lg-12 col-md-12 col-sm-12 col-xs-12>\n        <button ion-button class="custom-btn" color="default" (click)="submit();" [disabled]="isSubmitDisabled" outline round>Submit</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\terms-and-conditions\terms-and-conditions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], TermsAndConditionsPage);
    return TermsAndConditionsPage;
    var TermsAndConditionsPage_1;
}());

//# sourceMappingURL=terms-and-conditions.js.map

/***/ }),

/***/ 170:
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
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/authentication/authentication.module": [
		692,
		4
	],
	"../pages/confirmation-modal/confirmation-modal.module": [
		696,
		1
	],
	"../pages/sign-in/sign-in.module": [
		693,
		3
	],
	"../pages/terms-and-conditions/terms-and-conditions.module": [
		694,
		2
	],
	"../pages/visitor-pass-modal/visitor-pass-modal.module": [
		695,
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
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(43);
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
    function AboutUsPage(navCtrl, storage, iab) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.iab = iab;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
            footer: 'yes'
        };
        this.getAboutUsData();
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        //https://www.techiediaries.com/inappbrowser-ionic-v3/
        //this.openWithCordovaBrowser(Global.AboutUsURL);
    };
    AboutUsPage.prototype.exitAboutPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AboutUsPage.prototype.openWithSystemBrowser = function (url) {
        var target = "_system";
        //this.iab.create(url, target, this.options);
    };
    AboutUsPage.prototype.openWithInAppBrowser = function (url) {
        var target = "_blank";
        //this.iab.create(url, target, this.options);
    };
    AboutUsPage.prototype.openWithCordovaBrowser = function (url) {
        var target = "_blank";
        this.iab.create(url, target, this.options);
    };
    AboutUsPage.prototype.moreInfoPage = function () {
        this.openWithCordovaBrowser(this.aboutUsMoreInfo);
    };
    AboutUsPage.prototype.aboutUsWhoWeArePage = function () {
        this.openWithCordovaBrowser(this.aboutUsWhoWeAreLearnMore);
    };
    AboutUsPage.prototype.getAboutUsData = function () {
        var _this = this;
        this.storage.get('companyConfig').then(function (obj) {
            _this.aboutUs = obj.aboutUs.changingThisBreaksApplicationSecurity;
            _this.aboutUsWhoWeAreLearnMore = obj.aboutUsWhoWeAreLearnMore.changingThisBreaksApplicationSecurity;
            _this.aboutUsMoreInfo = obj.aboutUsMoreInfo.changingThisBreaksApplicationSecurity;
        });
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about-us',template:/*ion-inline-start:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\about-us\about-us.html"*/'<!--\n  Generated template for the AboutUsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>About Us</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="item-bg-color">\n  <ion-grid fixed>\n    <ion-row justify-content-center class="heading">\n      <ion-col class="comp-title" col-2>\n        <ion-img class="comp-title-img" *ngIf="!url" src="assets/imgs/natures-logo-header.png"></ion-img>\n      </ion-col>\n      <ion-col class="comp-title-pad" col-10 text-wrap>\n        <ion-label class="comp-title-pad-lbl">\n          Nature\'s Touch: Montreal Facility\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12>\n        <div [innerHTML]="aboutUs"></div>\n        <button class=\'btn\' (click)=\'aboutUsWhoWeArePage()\'>Learn more</button>\n      </ion-col>\n    </ion-row>\n    <ion-row justify-content-end padding-top>\n      <ion-col col-12 class="about-btn">\n        <button class="exit-btn" ion-button color="default" outline round (click)="moreInfoPage()">More info</button>\n        <button class="exit-btn" ion-button color="danger" outline round (click)="exitAboutPage()">Exit</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\about-us\about-us.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _c || Object])
    ], AboutUsPage);
    return AboutUsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignOutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_config_contsants__ = __webpack_require__(65);
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
    function SignOutPage(navCtrl, navParams, formBuilder, alertCtrl, httpServiceProvider, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.httpServiceProvider = httpServiceProvider;
        this.loadingController = loadingController;
        this.data = { UserList: '' };
        this.users = [
            { id: 101, name: 'Avinash kumar' },
            { id: 102, name: 'Mahesh Devda' },
            { id: 103, name: 'Raj Ali' }
        ];
        this.signOutForm = formBuilder.group({
            'UserList': ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]
        });
    }
    SignOutPage.prototype.ionViewDidLoad = function () {
        this.getAllVisitors();
        console.log('ionViewDidLoad SignOutPage');
    };
    SignOutPage.prototype.resetForm = function () {
        console.log('on clicked of reset()');
        this.data = { UserList: '' };
    };
    SignOutPage.prototype.onSubmit = function (value) {
        if (this.signOutForm.valid) {
            var loading = this.loadingController.create({ content: "Loading..." });
            loading.present();
            console.log("Sign out Form is valid");
            console.log(this.data);
            //call function to update visitor signout status
            this.updateVisitorLog(this.selectedVisitor, loading);
            this.showMsg();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
        }
        else {
            console.log("Sign out Form is invalid");
        }
    };
    SignOutPage.prototype.userSelectChange = function (event) {
        console.log('User Name:', event.value);
        this.selectedVisitor = event.value;
    };
    SignOutPage.prototype.showMsg = function () {
        var alert = this.alertCtrl.create({
            title: 'Signed Out',
            subTitle: 'Successfully Signed Out.<br/>See You Soon.!',
            buttons: ['Ok']
        });
        alert.present();
    };
    SignOutPage.prototype.getAllVisitors = function () {
        var _this = this;
        var loading = this.loadingController.create({ content: "Loading..." });
        loading.present();
        var requestData = {};
        requestData["action"] = __WEBPACK_IMPORTED_MODULE_5__providers_config_contsants__["a" /* APIActions */].getAllVisitors;
        try {
            this.httpServiceProvider.get(requestData).subscribe(function (response) {
                console.log(response.data);
                var list = response.data;
                _this.users = [];
                var userDataList = [];
                if (list != null && list != undefined) {
                    for (var i = 0; i < list.length; i++) {
                        if (list[i] && !list[i].isLoggedOut) {
                            list[i]["fullName"] = list[i].firstName + ' ' + list[i].lastName;
                            userDataList.push(list[i]);
                        }
                    }
                }
                _this.users = _this.getListByOrderASC(userDataList);
                loading.dismissAll();
            }, function (err) {
                console.log(err);
                loading.dismissAll();
            });
        }
        catch (error) {
            console.log(error);
            loading.dismissAll();
        }
    };
    SignOutPage.prototype.updateVisitorLog = function (input, loading) {
        try {
            if (!input)
                return alert("Please select the user");
            var requestData = {};
            requestData["action"] = __WEBPACK_IMPORTED_MODULE_5__providers_config_contsants__["a" /* APIActions */].updateVisitor + "/" + input.id;
            requestData["body"] = {
                "isLoggedOut": true,
                "dateModified": Date.now()
            };
            this.httpServiceProvider.patch(requestData).subscribe(function (response) {
                console.log(response.data);
                loading.dismissAll();
            }, function (err) {
                console.log(err);
                loading.dismissAll();
            });
        }
        catch (error) {
            console.log(error);
            loading.dismissAll();
        }
    };
    SignOutPage.prototype.getListByOrderASC = function (list) {
        if (list == undefined || list == null) {
            return list;
        }
        return list.sort(function (a, b) {
            var nameA = a.fullName.toUpperCase();
            var nameB = b.fullName.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            // names must be equal
            return 0;
        });
    };
    SignOutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-out',template:/*ion-inline-start:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\sign-out\sign-out.html"*/'<!--\n  Generated template for the SignOutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign-out</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="item-bg-color">\n  <ion-grid>\n    <ion-row>\n      <ion-col class="sign-out-img-div" col-lg-4 col-sm-12 col-md-12 col-xs-12>\n        <ion-img class="sign-out-img" src="assets/imgs/sign-out.png"></ion-img>\n      </ion-col>\n      <ion-col col-lg-8 col-sm-12 col-md-12 col-xs-12 padding-horizontal>\n        <ion-row>\n          <ion-col>\n            <ion-label class="font-x-lg font-wt-500">\n              Thank\'s for visiting!\n            </ion-label>\n            <ion-label text-wrap text-justify>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor insididunt ut labore et dolore magna aliqua.\n              Culpa qui officia deserunt mollit anim id est laborum.\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>          \n          <ion-col>\n            <form [formGroup]="signOutForm">\n              <ion-row>\n                <ion-col>\n                  <h6>Sign out</h6>\n                </ion-col>\n              </ion-row>\n              <ion-row>              \n                <ion-col>\n                  <ion-item>\n                    <select-searchable formControlName="UserList" [(ngModel)]="data.UserList" [items]="users" itemValueField="id" itemTextField="fullName" [canSearch]="true" (onChange)="userSelectChange($event)">\n                      <ng-template selectSearchableLabelTemplate>\n                        Name\n                      </ng-template>\n                    </select-searchable>\n                  </ion-item>                  \n                </ion-col>\n              </ion-row>\n              <ion-row text-center>\n                <ion-col></ion-col>\n              </ion-row>\n              <ion-row text-center>\n                <ion-col>\n                  <button ion-button color="danger" outline round (click)="resetForm();">Reset</button>               \n                  <button ion-button color="secondary" [disabled]="!signOutForm.valid" (click)="onSubmit(signOutForm.value);" type="submit" outline round>Submit</button>\n                </ion-col>\n              </ion-row>\n            </form>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\sign-out\sign-out.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], SignOutPage);
    return SignOutPage;
}());

//# sourceMappingURL=sign-out.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(361);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_sign_in__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_http_service_http_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sign_out_sign_out__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_terms_and_conditions_terms_and_conditions__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_shared_service__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_signaturepad__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_authentication_authentication__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__filters_safePipe__ = __webpack_require__(691);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sign_out_sign_out__["a" /* SignOutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_authentication_authentication__["a" /* AuthenticationPage */],
                __WEBPACK_IMPORTED_MODULE_21__filters_safePipe__["a" /* SafePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/authentication/authentication.module#AuthenticationPageModule', name: 'AuthenticationPage', segment: 'authentication', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/terms-and-conditions/terms-and-conditions.module#TermsAndConditionsPageModule', name: 'TermsAndConditionsPage', segment: 'terms-and-conditions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/visitor-pass-modal/visitor-pass-modal.module#VisitorPassModalPageModule', name: 'VisitorPassModalPage', segment: 'visitor-pass-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmation-modal/confirmation-modal.module#ConfirmationModalPageModule', name: 'ConfirmationModalPage', segment: 'confirmation-modal', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_ionic_select_searchable__["SelectSearchableModule"],
                __WEBPACK_IMPORTED_MODULE_17_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_19__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sign_out_sign_out__["a" /* SignOutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_authentication_authentication__["a" /* AuthenticationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_8__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_http_service_http_service__["a" /* HttpServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_16__service_shared_service__["a" /* SharedService */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_config_contsants__ = __webpack_require__(65);
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
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpServiceProvider = /** @class */ (function () {
    function HttpServiceProvider(http) {
        this.http = http;
        this._options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }) };
        this.baseURL = __WEBPACK_IMPORTED_MODULE_2__providers_config_contsants__["b" /* Global */].BaseAPIURL;
        console.log('Hello HttpServiceProvider Provider');
    }
    HttpServiceProvider.prototype.post = function (req) {
        return this.http.post(this.baseURL + req.action, req.body, this._options);
    };
    HttpServiceProvider.prototype.get = function (req) {
        return this.http.get(this.baseURL + req.action);
    };
    HttpServiceProvider.prototype.patch = function (req) {
        return this.http.patch(this.baseURL + req.action, req.body, this._options);
    };
    HttpServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HttpServiceProvider);
    return HttpServiceProvider;
}());

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Global; });
/* unused harmony export Enums */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIActions; });
var Global = Object.freeze({
    //"BaseAPIURL" :"http://localhost:1337/",
    "BaseAPIURL": "https://smartfoodsafe-api.herokuapp.com/",
    "companyId": "5af6b480789aa61d98736751",
    "AboutUsURL": "https://www.naturestouchfrozenfoods.com/en/about-us"
});
var Enums = Object.freeze({});
var APIActions = Object.freeze({
    "addVisitor": "visitor",
    "updateVisitor": "visitor",
    "getAllDepartmets": "department",
    "getEmployeesByDepartment": "user/search",
    "getAllPurposes": "visitPurpose",
    "getAllVisitors": "visitor",
    "authenticateUser": "user/login",
    "getCompanyConfigByCompanyId": "companyconfig/search"
});
//# sourceMappingURL=contsants.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_us_about_us__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_out_sign_out__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(28);
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
    function HomePage(navCtrl, inAppBrowser, storage, domSanitizer, loadingController, toastController) {
        this.navCtrl = navCtrl;
        this.inAppBrowser = inAppBrowser;
        this.storage = storage;
        this.domSanitizer = domSanitizer;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.video = {
            url: 'https://www.youtube.com/watch?v=P_aO2quAPuY'
        };
        console.log('home ctrl loaded');
        this.getCompanyConfig();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Home');
        this.valuesLoaded = false;
    };
    HomePage.prototype.openAboutUsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_us_about_us__["a" /* AboutUsPage */]);
    };
    HomePage.prototype.openSignInPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_in_sign_in__["a" /* SignInPage */]);
    };
    HomePage.prototype.signOut = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sign_out_sign_out__["a" /* SignOutPage */]);
    };
    HomePage.prototype.getCompanyConfig = function () {
        // let loading = this.loadingController.create({content : "Loading..."});
        // loading.present();
        var _this = this;
        this.storage.get('companyConfig').then(function (obj) {
            // loading.dismissAll();
            if (obj != null) {
                _this.companyName = obj.companyName;
                _this.companyDescription = obj.companyDescription.changingThisBreaksApplicationSecurity;
                _this.companyLogo = obj.companyLogo.changingThisBreaksApplicationSecurity;
                _this.companyVideo = obj.companyVideo.changingThisBreaksApplicationSecurity;
                _this.poweredByLogo = obj.poweredByLogo.changingThisBreaksApplicationSecurity;
                _this.valuesLoaded = true;
            }
            console.log("Name: " + _this.companyName);
            console.log("Desc: " + _this.companyDescription);
            console.log("logo: " + _this.companyLogo);
            console.log("video: " + _this.companyVideo);
            console.log("poweredbylogo: " + _this.poweredByLogo);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="item-bg-color">\n  <ion-grid fixed>\n    <ion-row justify-content-center class="heading">\n      <ion-col class="comp-title" col-2>\n        <ion-img class="comp-title-img" [src]="companyLogo"></ion-img>\n      </ion-col>\n      <ion-col class="comp-title-pad" col-10 text-wrap>\n        <ion-label class="comp-title-pad-lbl" *ngIf="valuesLoaded">\n          Welcome to {{companyName}}: Montreal Facility\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-lg-6 col-md-12 col-sm-12 col-xs-12>\n        <ion-row>\n          <ion-col col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12>\n            <ion-label text-wrap class="comp-para-lbl">\n              <div *ngIf="valuesLoaded" [innerHTML]="companyDescription"></div>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right>\n            <ion-img width="100" height="25" [src]="poweredByLogo"></ion-img>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12>\n            <div class="video-container">\n              <iframe width="560" height="415" *ngIf="valuesLoaded" [src]="companyVideo | safe" frameborder="0" allow="autoplay; encrypted-media"\n                allowfullscreen></iframe>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col class="home-lft-col" col-12 col-lg-6 col-md-12 col-sm-12 col-xs-12>\n        <div>\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col offset-lg-2 col-lg-8 offset-md-2 col-md-8 col-sm-12 col-xs-12 class="container-left-panel">\n                <ion-card class="about-us-card-bg" (click)="openAboutUsPage()">\n                  <ion-card-content text-center>\n                    <img text-center class="home-img" width="25" height="75" src="assets/imgs/about-us.png" />\n                    <ion-label class="font-wt-700">About Us</ion-label>\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col offset-lg-2 col-lg-8 offset-md-2 col-md-8 col-sm-12 col-xs-12>\n                <ion-card class="visitor-entry-card-bg" (click)="openSignInPage()">\n                  <ion-card-content text-center>\n                    <!-- <ion-thumbnail> -->\n                    <img text-center class="home-img" width="25" height="75" src="assets/imgs/visitor-entry.png" />\n                    <ion-label class="font-wt-700">Visitor Sign In</ion-label>\n                    <!-- </ion-thumbnail> -->\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col offset-lg-2 col-lg-8 offset-md-2 col-md-8 col-sm-12 col-xs-12>\n                <ion-card class="visitor-exit-card-bg" (click)="signOut()">\n                  <ion-card-content text-center>\n                    <img text-center class="home-img" width="25" height="75" src="assets/imgs/visitor-exit.png" />\n                    <ion-label class="font-wt-700">Visitor Sign Out</ion-label>\n                  </ion-card-content>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\pages\home\home.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_authentication_authentication__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';



var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, events, toastController, storage) {
        var _this = this;
        this.events = events;
        this.toastController = toastController;
        this.storage = storage;
        this.rootPage = (this.storage.get('companyConfig')) ? __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] : __WEBPACK_IMPORTED_MODULE_4__pages_authentication_authentication__["a" /* AuthenticationPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        events.subscribe('toastr', function (msg) {
            _this.presentToast(msg);
        });
    }
    MyApp.prototype.presentToast = function (msg) {
        var toast = this.toastController.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\External Work\Smart Food Safe\ionic\Smart Visitor Log\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _f || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(312);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = /** @class */ (function () {
    function SharedService() {
        this.isSubmitDisabled = false;
        this.isSignatureBoxHidden = false;
        this.isagreeDisabled = false;
        this.isDisagreeDisabled = false;
    }
    SharedService.prototype.setVal = function (isSubmitDisabled, isSignatureBoxHidden, type) {
        this.isSubmitDisabled = isSubmitDisabled;
        this.isSignatureBoxHidden = isSignatureBoxHidden;
        if (type) {
            if (type == 'agree') {
                this.isagreeDisabled = false;
                this.isDisagreeDisabled = true;
            }
            else if ('disagree') {
                this.isagreeDisabled = true;
                this.isDisagreeDisabled = false;
            }
            else {
                this.isagreeDisabled = false;
                this.isDisagreeDisabled = false;
            }
        }
    };
    SharedService.prototype.getVal = function () {
        return { 'buttonDisabled': this.isSubmitDisabled, 'signatureHidden': this.isSignatureBoxHidden,
            'isagreeDisabled': this.isagreeDisabled, 'isDisagreeDisabled': this.isDisagreeDisabled };
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

//# sourceMappingURL=safePipe.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map