webpackJsonp([8],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuiaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(72);
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
// Default components



// Native

var GuiaServiceProvider = /** @class */ (function () {
    function GuiaServiceProvider(http, localStorage) {
        var _this = this;
        this.http = http;
        this.localStorage = localStorage;
        this._headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        this.localStorage.get('apiUrl').then(function (value) {
            _this.apiUrl = value;
        });
        this.localStorage.get('bearerToken').then(function (value) {
            _this.bearerToken = value;
        });
        this.localStorage.get('userId').then(function (value) {
            _this.userId = value;
        });
        this.localStorage.get('deviceId').then(function (value) {
            _this.deviceId = value;
        });
        // Token por defecto
        this.headers = this._headers.append('UserId', '3214').append('Authorization', 'Bearer s2JMOchvpQfaBIgQ5zQIwKFKteD6g4ruu34DzEUj');
        // Verificación de campos adicionales
        if (this.bearerToken != null && this.bearerToken != "") {
            this._headers.append('Authorization', 'Bearer ' + this.bearerToken);
        }
        if (this.userId != null && this.userId != "") {
            this._headers.append('UserId', this.userId);
        }
        if (this.deviceId != null && this.deviceId != "") {
            this._headers.append('DeviceId', this.deviceId);
        }
    }
    GuiaServiceProvider.prototype.getTrackingGuia = function (consecutivo) {
        console.log(this.apiUrl + 'GetTrackingGuia/' + consecutivo);
        return this.http.get(this.apiUrl + 'GetTrackingGuia/' + consecutivo, { headers: this.headers });
    };
    GuiaServiceProvider.prototype.getEstadosGuia = function (consecutivo) {
        return this.http.get(this.apiUrl + 'GetEstadosGuia/' + consecutivo, { headers: this.headers });
    };
    GuiaServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], GuiaServiceProvider);
    return GuiaServiceProvider;
}());

//# sourceMappingURL=guia-service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailGuiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tracking_guia_tracking_guia__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_guia_service_guia_service__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Components




// Pages

// Providers

var DetailGuiaPage = /** @class */ (function () {
    function DetailGuiaPage(navParams, navCtrl, menuCtrl, toastCtrl, loadingCtrl, guiaService) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.guiaService = guiaService;
        this.visibility = 'hidden';
        this.modelGuia = navParams.get("modelGuia");
    }
    DetailGuiaPage.prototype.menuToggle = function () {
        this.menuCtrl.open();
    };
    DetailGuiaPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    DetailGuiaPage.prototype.showLoading = function (message) {
        this.loading = this.loadingCtrl.create({
            content: message
        });
        this.loading.present();
    };
    DetailGuiaPage.prototype.hideLoading = function () {
        this.loading.dismiss();
    };
    DetailGuiaPage.prototype.trackingGuia = function () {
        var _this = this;
        this.showLoading('Consultando información...');
        this.guiaService.getEstadosGuia(this.modelGuia.Guia)
            .subscribe(function (data) {
            _this.lista_estados_guia = data;
            _this.hideLoading();
            if (_this.lista_estados_guia != null) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tracking_guia_tracking_guia__["a" /* TrackingGuiaPage */], {
                    listaEstadosGuia: _this.lista_estados_guia
                });
            }
            else {
                _this.showToast('La guía no tiene seguimiento.');
            }
        }, function (error) {
            _this.hideLoading();
            console.log(error);
        });
    };
    DetailGuiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detail-guia',template:/*ion-inline-start:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\pages\detail-guia\detail-guia.html"*/'<ion-header>\n  <ion-navbar transparent>\n    <ion-title>Guía: {{ modelGuia.Guia }}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="menuToggle()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid class="grid-info">\n    <ion-row>\n      <ion-col col-6>\n        <ion-row>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label><strong>Ciudad origen</strong></ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label>{{ modelGuia.CiudadOrigen }}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col col-6>\n        <ion-row>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label><strong>Ciudad destino</strong></ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label>{{ modelGuia.CiudadDestino }}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-row>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label><strong>Tipo de Guía</strong></ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label>{{ modelGuia.TipoGuia }}</ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label><strong>Cliente</strong></ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label>{{ modelGuia.CuentaCliente }}</ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label><strong>Destinatario</strong></ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label>{{ modelGuia.DestinatarioNombre }}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n              <ion-label><strong>Dirección</strong></ion-label>\n            </ion-col>\n            <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n              <ion-label>{{ modelGuia.DestinatarioDireccion }}</ion-label>\n            </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label><strong>Teléfono</strong></ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label>{{ modelGuia.DestinatarioTelefono }}</ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label><strong>Cedúla-Nit</strong></ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label>{{ modelGuia.DestinatarioIdentificacion }}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label><strong>Documento externo</strong></ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label>{{ modelGuia.DocumentoExterno }}</ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label><strong>Observaciones</strong></ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label>{{ modelGuia.Observacion }}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <button ion-button block icon-left (click)="trackingGuia()">\n          <ion-icon name="location"></ion-icon>\n          Ver Tracking\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\pages\detail-guia\detail-guia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__services_guia_service_guia_service__["a" /* GuiaServiceProvider */]])
    ], DetailGuiaPage);
    return DetailGuiaPage;
}());

//# sourceMappingURL=detail-guia.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingGuiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Default components

// Ionic components

var TrackingGuiaPage = /** @class */ (function () {
    function TrackingGuiaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lista_estados_guia = navParams.get("listaEstadosGuia");
    }
    TrackingGuiaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TrackingGuiaPage');
    };
    TrackingGuiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tracking-guia',template:/*ion-inline-start:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\pages\tracking-guia\tracking-guia.html"*/'<ion-header>\n  <ion-navbar transparent>\n    <ion-title>Seguimiento en linea</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div class="container">\n    <ul>\n      <li *ngFor="let item of lista_estados_guia;"><span></span>\n        <div>\n          <div class="title">{{ item.Nombre }}</div>\n          <div class="type">{{ item.Fecha }}</div>\n          <div class="info">{{ item.Descripcion }}</div>\n        </div> <span class="number"><span>{{ item.Fecha | timeFormat }}</span> <span><!--02:00--></span></span>\n      </li>\n    </ul>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\pages\tracking-guia\tracking-guia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TrackingGuiaPage);
    return TrackingGuiaPage;
}());

//# sourceMappingURL=tracking-guia.js.map

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

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cotizador-estandar/cotizador-estandar.module": [
		708,
		7
	],
	"../pages/detail-guia/detail-guia.module": [
		701,
		6
	],
	"../pages/login/login.module": [
		702,
		5
	],
	"../pages/modal-cotizacion/modal-cotizacion.module": [
		703,
		1
	],
	"../pages/search-guia/search-guia.module": [
		704,
		4
	],
	"../pages/signup/signup.module": [
		705,
		0
	],
	"../pages/tracking-guia/tracking-guia.module": [
		706,
		3
	],
	"../pages/welcome/welcome.module": [
		707,
		2
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
webpackAsyncContext.id = 308;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Default components

// Native

// Http components

var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http, localStorage) {
        var _this = this;
        this.http = http;
        this.localStorage = localStorage;
        this._headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        this.localStorage.get('apiUrl').then(function (value) {
            _this.apiUrl = value;
        });
        this.localStorage.get('userId').then(function (value) {
            _this.userId = value;
        });
        this.localStorage.get('deviceId').then(function (value) {
            _this.deviceId = value;
        });
        if (this.userId != null && this.userId != "") {
            this._headers.append('UserId', this.userId);
        }
        if (this.deviceId != null && this.deviceId != "") {
            this._headers.append('DeviceId', this.deviceId);
        }
    }
    AuthServiceProvider.prototype.authLogin = function (requestAuth) {
        return this.http.post(this.apiUrl + 'AuthLogin', requestAuth, { headers: this._headers });
    };
    AuthServiceProvider.prototype.updateDevice = function (requestDevice) {
        return this.http.post(this.apiUrl + 'DeviceIdUpdate', requestDevice);
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizadorEstandarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_request_cotizador_estandar__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_response_cotizador_estandar__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_cotizador_service_cotizador_service__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_autocomplete_service_autocomplete_service__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loader_loader__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Default components





// Services


// Providers

var CotizadorEstandarPage = /** @class */ (function () {
    function CotizadorEstandarPage(navParams, navCtrl, loader, toastCtrl, modalCtrl, cotizadorService, autocompleteService) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.loader = loader;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.cotizadorService = cotizadorService;
        this.autocompleteService = autocompleteService;
        this.is_disabled = true;
        this.request = new __WEBPACK_IMPORTED_MODULE_3__models_request_cotizador_estandar__["a" /* CotizadorEstandarRequest */]();
        this.response = new __WEBPACK_IMPORTED_MODULE_4__models_response_cotizador_estandar__["a" /* CotizadorEstandarResponse */]();
    }
    CotizadorEstandarPage.prototype.ngOnInit = function () {
        this.my_form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            origen: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required
            ]),
            destino: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required
            ])
        });
    };
    CotizadorEstandarPage.prototype.CheckRoute = function () {
        var _this = this;
        if (this.my_form.value.origen != null
            && this.my_form.value.origen != ""
            && this.my_form.value.destino != null
            && this.my_form.value.destino != "") {
            this.origen = this.my_form.value.origen;
            this.destino = this.my_form.value.destino;
            this.loader.show('Verificando ruta...');
            this.cotizadorService.getRutaByOrigenDestino(this.origen, this.destino)
                .subscribe(function (data) {
                _this.request.Ruta = data["RutaId"];
                _this.is_disabled = false;
                _this.request.Cantidad = 1;
                _this.loader.hide();
            }, function (error) {
                _this.showToast('Ocurrió un error: ' + error.message);
                console.log('Ocurrió un error: ' + error);
                _this.loader.hide();
            });
        }
        else {
            this.showToast('Digite la ciudad de origen y destino.');
        }
    };
    CotizadorEstandarPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    CotizadorEstandarPage.prototype.CotizacionSearch = function () {
        var _this = this;
        if (this.request.Ruta <= 0 || this.request.Ruta == null) {
            this.showToast('Primero debe consultar y seleccionar la ciudad de origen y destino.');
        }
        else if (this.request.Cantidad <= 0 || this.request.Cantidad == null) {
            this.showToast('Digite la cantidad de unidades.');
        }
        else if (this.request.Kilos <= 0 || this.request.Kilos == null) {
            this.showToast('Digite el peso de las unidades.');
        }
        else if (this.request.Kilos <= 0 || this.request.Kilos == null) {
            this.showToast('Digite el valor declarado de la mercancía.');
        }
        else {
            this.request.EmpresaId = 2739;
            this.loader.show('Consultando información...');
            this.cotizadorService.searchCotizacion(this.request)
                .subscribe(function (data) {
                _this.response = data;
                var modal = _this.modalCtrl.create('ModalCotizacionPage', {
                    unidades: _this.request.Cantidad,
                    request_origen: _this.origen,
                    request_destino: _this.destino,
                    response_cotizacion: _this.response
                });
                modal.present();
                modal.onDidDismiss(function (data) {
                    if (data) { }
                });
                _this.response = data; // Success
                _this.loader.hide();
            }, function (error) {
                _this.showToast('Ocurrió un error: ' + error.message);
                console.log('Ocurrió un error: ' + error);
                _this.loader.hide();
            });
        }
    };
    CotizadorEstandarPage.prototype.FocusDestino = function () {
        this.destino = '';
    };
    CotizadorEstandarPage.prototype.FocusCount = function () {
        this.request.Cantidad = 1;
    };
    CotizadorEstandarPage.prototype.ClearCotizacion = function () {
        this.request.Cantidad = 0;
        this.request.Kilos = 0;
        this.request.KilosVolumen = 0;
        this.request.ValorDeclarado = 0;
        this.response.CostoManejo = 0;
        this.response.ValorFlete = 0;
        this.response.ValorTotal = 0;
        this.my_form.reset();
        this.destino = '';
        this.origen = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('input_origen'),
        __metadata("design:type", Object)
    ], CotizadorEstandarPage.prototype, "input_origen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('input_destino'),
        __metadata("design:type", Object)
    ], CotizadorEstandarPage.prototype, "input_destino", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('request_cantidad'),
        __metadata("design:type", Object)
    ], CotizadorEstandarPage.prototype, "input_cantidad", void 0);
    CotizadorEstandarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cotizador-estandar',template:/*ion-inline-start:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\pages\cotizador-estandar\cotizador-estandar.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Cotizador Estándar</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="my_form" (ngSubmit)="CheckRoute()" novalidate>\n    <div class="ion-form-group">\n      <h4 class="form-label">Origen</h4>\n      <ion-auto-complete [(ngModel)]="origen" \n        (ngModelChange)="FocusDestino()" \n        [dataProvider]="autocompleteService"\n        [options]="{ placeholder : \'Digite la ciudad de origen...\' }" \n        formControlName="origen" \n        #input_origen>\n      </ion-auto-complete>\n    </div>\n    <div class="ion-form-group">\n      <h4 class="form-label">Destino</h4>\n      <ion-auto-complete [(ngModel)]="destino" \n        (ngModelChange)="FocusCount()" \n        (keyup.enter)="CheckRoute()" \n        [dataProvider]="autocompleteService" \n        [options]="{ placeholder : \'Digite la ciudad de destino...\' }" \n        formControlName="destino" \n        #input_destino>\n      </ion-auto-complete>\n    </div>\n    <button ion-button type="submit" block style="margin-top: 20px;">Verificar ruta</button>\n  </form>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Cantidad (Unidades)</ion-label>\n      <ion-input type="text" disabled="{{ is_disabled }}" [(ngModel)]="request.Cantidad" #request_cantidad></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Peso (Kilos)</ion-label>\n      <ion-input type="text" disabled="{{ is_disabled }}" [(ngModel)]="request.Kilos" #request_kilos></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Peso volumen (Kilos)</ion-label>\n      <ion-input type="text" disabled="{{ is_disabled }}" [(ngModel)]="request.KilosVolumen" #request_kilos_volumen></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Valor declarado (Pesos)</ion-label>\n      <ion-input type="text" disabled="{{ is_disabled }}" [(ngModel)]="request.ValorDeclarado" #request_declarado></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-buttons>\n    <button ion-button block icon-left (click)="CotizacionSearch()">\n      <ion-icon name="btn_cotizar"></ion-icon>\n      Consultar Cotización\n    </button>\n    <button style="margin-top: 10px;" ion-button block icon-left (click)="ClearCotizacion()">\n      Limpiar formulario\n    </button>\n  </ion-buttons>\n</ion-content>'/*ion-inline-end:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\pages\cotizador-estandar\cotizador-estandar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_loader_loader__["a" /* LoaderProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__services_cotizador_service_cotizador_service__["a" /* CotizadorServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__services_autocomplete_service_autocomplete_service__["a" /* AutocompleteServiceProvider */]])
    ], CotizadorEstandarPage);
    return CotizadorEstandarPage;
}());

//# sourceMappingURL=cotizador-estandar.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizadorServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(72);
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
// Default components



// Native

var CotizadorServiceProvider = /** @class */ (function () {
    function CotizadorServiceProvider(http, localStorage) {
        var _this = this;
        this.http = http;
        this.localStorage = localStorage;
        this._headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json');
        this.localStorage.get('apiUrl').then(function (value) {
            _this.apiUrl = value;
        });
        this.apiUrl = 'http://testsolex.blulogistics.net/Solex/Services/SolexMobileApi.svc/';
        this.headers = this._headers
            .append('UserId', '3355')
            .append('Authorization', 'Bearer YXBpOmViYzg3Njg5MjhiZjE1NGIyMTg4NGZlMjU5MDA3NDllMGU0MTRmZGM=');
    }
    CotizadorServiceProvider.prototype.getCiudades = function () {
        return this.http.get(this.apiUrl + 'GetCiudades', { headers: this.headers });
    };
    CotizadorServiceProvider.prototype.getRutaByOrigenDestino = function (origen, destino) {
        return this.http.get(this.apiUrl + 'GetRuta/' + origen + '/' + destino, { headers: this.headers });
    };
    CotizadorServiceProvider.prototype.searchCotizacion = function (request) {
        return this.http.post(this.apiUrl + 'CotizadorEstandar', request, { headers: this.headers });
    };
    CotizadorServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], CotizadorServiceProvider);
    return CotizadorServiceProvider;
}());

//# sourceMappingURL=cotizador-service.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
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
// Default components



// Native

var AutocompleteServiceProvider = /** @class */ (function () {
    function AutocompleteServiceProvider(http, localStorage) {
        var _this = this;
        this.http = http;
        this.localStorage = localStorage;
        this.labelAttribute = "Nombre";
        this.localStorage.get('apiUrl').then(function (value) {
            _this.apiUrl = value;
        });
    }
    AutocompleteServiceProvider.prototype.getResults = function (keyword) {
        return this.http.get(this.apiUrl + "GetCiudadesByName/" + keyword)
            .map(function (result) {
            console.log(result);
            return result.json()
                .filter(function (item) { return item.Nombre.toLowerCase().startsWith(keyword.toLowerCase()); });
        });
    };
    AutocompleteServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AutocompleteServiceProvider);
    return AutocompleteServiceProvider;
}());

//# sourceMappingURL=autocomplete-service.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderProvider = /** @class */ (function () {
    function LoaderProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.text_message = "Please wait...";
        this.loading = null;
    }
    LoaderProvider.prototype.show = function (text) {
        this.text_message = text;
        this.loading = this.loadingCtrl.create({
            content: this.text_message
        });
        this.loading.present();
    };
    LoaderProvider.prototype.setLoadingText = function (text) {
        var elem = document.querySelector("div.loading-wrapper div.loading-content");
        if (elem)
            elem.innerHTML = text;
    };
    LoaderProvider.prototype.hide = function () {
        this.loading.dismiss();
    };
    LoaderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoaderProvider);
    return LoaderProvider;
}());

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToasterProvider = /** @class */ (function () {
    function ToasterProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToasterProvider.prototype.presentToast = function (message, position, cssclass) {
        var toast = this.toastCtrl.create({
            message: message,
            closeButtonText: "OK",
            showCloseButton: true,
            cssClass: cssclass,
            position: position
        });
        toast.present();
    };
    ToasterProvider.prototype.presentSimpleToast = function (message, position) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: position
        });
        toast.present();
    };
    ToasterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], ToasterProvider);
    return ToasterProvider;
}());

//# sourceMappingURL=toaster.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Default components



var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(sqlite) {
        this.sqlite = sqlite;
        // Sirve para determinar cuando está lista la base de datos
        this.dbReady = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    DatabaseProvider.prototype.createDatabase = function () {
        var _this = this;
        // Creación de la base de datos local
        this.sqlite.create({
            name: 'solex_clientes',
            location: 'default'
        }).then(function (db) {
            _this.database = db;
            // Creación de tablas
            _this.createTables().then(function () {
                // Informamos que la BD ya esta lista para usarse
                _this.dbReady.next(true);
            });
        });
    };
    DatabaseProvider.prototype.createTables = function () {
        var sql = "CREATE TABLE IF NOT EXISTS cities (\n      id INTEGER PRIMARY KEY AUTOINCREMENT,\n      code TEXT,\n      name TEXT,\n      department TEXT\n    );";
        return this.database.executeSql(sql, [])
            .then(function (res) { return console.log('Executed SQL'); })
            .catch(function (e) { return console.log(e); });
    };
    DatabaseProvider.prototype.isReady = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // Si isReady devuelve verdadero, resolvemos la promesa
            if (_this.dbReady.getValue()) {
                resolve();
            }
            else {
                _this.dbReady.subscribe(function (ready) {
                    if (ready) {
                        resolve();
                    }
                });
            }
        });
    };
    DatabaseProvider.prototype.addCity = function (code, name, department) {
        var _this = this;
        // Verificamos que la base de datos este lista
        return this.isReady().then(function () {
            var sql = 'INSERT INTO cities(code, name, department) VALUES(?,?,?)';
            return _this.database.executeSql(sql, [code, name, department]);
        });
    };
    DatabaseProvider.prototype.getCities = function () {
        var _this = this;
        // Verificamos que la base de datos este lista
        return this.isReady().then(function () {
            return _this.database.executeSql("SELECT * FROM cities", [])
                .then(function (data) {
                var cities = [];
                for (var i = 0; i < data.rows.length; i++) {
                    cities.push(data.rows.item(i));
                }
                return cities;
            });
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizadorEstandarResponse; });
var CotizadorEstandarResponse = /** @class */ (function () {
    function CotizadorEstandarResponse() {
    }
    return CotizadorEstandarResponse;
}());

//# sourceMappingURL=response-cotizador-estandar.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_auto_complete__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_time_format_time_format__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_search_guia_search_guia__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detail_guia_detail_guia__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tracking_guia_tracking_guia__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cotizador_estandar_cotizador_estandar__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_guia_service_guia_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service_auth_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_cotizador_service_cotizador_service__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_autocomplete_service_autocomplete_service__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_push__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_sqlite__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_loader_loader__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_toaster_toaster__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_database_database__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Default components




// Autocomplete

// UI Components


// Pipes

// Pages components







// Ionic components



// Services




// Native components



// Prividers



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_search_guia_search_guia__["a" /* SearchGuiaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_guia_detail_guia__["a" /* DetailGuiaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tracking_guia_tracking_guia__["a" /* TrackingGuiaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_time_format_time_format__["a" /* TimeFormatPipe */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cotizador_estandar_cotizador_estandar__["a" /* CotizadorEstandarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic2_auto_complete__["a" /* AutoCompleteModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_17_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/detail-guia/detail-guia.module#DetailGuiaPageModule', name: 'DetailGuiaPage', segment: 'detail-guia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-cotizacion/modal-cotizacion.module#ModalCotizacionPageModule', name: 'ModalCotizacionPage', segment: 'modal-cotizacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-guia/search-guia.module#SearchGuiaPageModule', name: 'SearchGuiaPage', segment: 'search-guia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tracking-guia/tracking-guia.module#TrackingGuiaPageModule', name: 'TrackingGuiaPage', segment: 'tracking-guia', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cotizador-estandar/cotizador-estandar.module#CotizadorEstandarPageModule', name: 'CotizadorEstandarPage', segment: 'cotizador-estandar', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_24__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_17_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_search_guia_search_guia__["a" /* SearchGuiaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detail_guia_detail_guia__["a" /* DetailGuiaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tracking_guia_tracking_guia__["a" /* TrackingGuiaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cotizador_estandar_cotizador_estandar__["a" /* CotizadorEstandarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__providers_loader_loader__["a" /* LoaderProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_toaster_toaster__["a" /* ToasterProvider */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_17_ionic_angular__["c" /* IonicErrorHandler */]
                },
                __WEBPACK_IMPORTED_MODULE_27__providers_database_database__["a" /* DatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_18__services_guia_service_guia_service__["a" /* GuiaServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_19__services_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_20__services_cotizador_service_cotizador_service__["a" /* CotizadorServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__services_autocomplete_service_autocomplete_service__["a" /* AutocompleteServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchGuiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_guia_detail_guia__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_guia_service_guia_service__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Components




// Pages

// Services

var SearchGuiaPage = /** @class */ (function () {
    function SearchGuiaPage(navParams, navCtrl, menuCtrl, toastCtrl, loadingCtrl, guiaService) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.guiaService = guiaService;
        this.consecutivo = "";
    }
    SearchGuiaPage.prototype.menuToggle = function () {
        this.menuCtrl.open();
    };
    SearchGuiaPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    SearchGuiaPage.prototype.showLoading = function (message) {
        this.loading = this.loadingCtrl.create({
            content: message
        });
        this.loading.present();
    };
    SearchGuiaPage.prototype.hideLoading = function () {
        this.loading.dismiss();
    };
    SearchGuiaPage.prototype.searchGuia = function () {
        var _this = this;
        if (this.consecutivo != null && this.consecutivo != "") {
            this.showLoading('Consultando información...');
            this.guiaService.getTrackingGuia(this.consecutivo)
                .subscribe(function (data) {
                // console.log(data);
                if (data != null) {
                    _this.guia_client = data;
                    _this.hideLoading();
                    if (_this.guia_client.Guia != null && parseInt(_this.guia_client.Guia) > 0) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detail_guia_detail_guia__["a" /* DetailGuiaPage */], {
                            modelGuia: _this.guia_client
                        });
                    }
                    else {
                        _this.showToast('El consecutivo no se encuentra registrado.');
                        _this.hideLoading();
                    }
                }
                else {
                    _this.showToast('El consecutivo no se encuentra registrado.');
                    _this.hideLoading();
                }
            }, function (error) {
                _this.showToast('Ocurrió un error al consultar la guía.');
                _this.hideLoading();
                // console.log(error);
            });
        }
        else {
            this.showToast('Por favor digite un número de guía.');
        }
    };
    SearchGuiaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-guia',template:/*ion-inline-start:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\pages\search-guia\search-guia.html"*/'<ion-header>\n  <ion-navbar transparent>\n    <ion-title>Rastreo de Guías</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="menuToggle()">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="scroll-hide">\n  <ion-list>\n    <ion-item>\n      <ion-label fixed>Número</ion-label>\n      <ion-input #inputGuiaNumero type="text" [(ngModel)]="consecutivo"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-buttons>\n    <button ion-button block icon-left (click)="searchGuia()">\n      <ion-icon name="search"></ion-icon>\n      Consultar Guía\n    </button>\n  </ion-buttons>\n</ion-content>\n'/*ion-inline-end:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\pages\search-guia\search-guia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__services_guia_service_guia_service__["a" /* GuiaServiceProvider */]])
    ], SearchGuiaPage);
    return SearchGuiaPage;
}());

//# sourceMappingURL=search-guia.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestAuth; });
var RequestAuth = /** @class */ (function () {
    function RequestAuth() {
    }
    return RequestAuth;
}());

//# sourceMappingURL=request-auth.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseAuth; });
var ResponseAuth = /** @class */ (function () {
    function ResponseAuth() {
    }
    return ResponseAuth;
}());

//# sourceMappingURL=response-auth.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizadorEstandarRequest; });
var CotizadorEstandarRequest = /** @class */ (function () {
    function CotizadorEstandarRequest() {
    }
    return CotizadorEstandarRequest;
}());

//# sourceMappingURL=request-cotizador-estandar.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Default components

var TimeFormatPipe = /** @class */ (function () {
    function TimeFormatPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    TimeFormatPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.timeArray = value.split(' ')[1].split(':');
        return this.timeArray[0] + ':' + this.timeArray[1];
    };
    TimeFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'timeFormat',
        })
    ], TimeFormatPipe);
    return TimeFormatPipe;
}());

//# sourceMappingURL=time-format.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_guia_search_guia__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_toaster_toaster__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_database_database__ = __webpack_require__(359);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Default components




// Pages components



// Native components


// Providers


var MyApp = /** @class */ (function () {
    function MyApp(push, events, platform, statusBar, localStorage, toaster, splashScreen, toastController, databaseService) {
        this.push = push;
        this.events = events;
        this.platform = platform;
        this.statusBar = statusBar;
        this.localStorage = localStorage;
        this.toaster = toaster;
        this.splashScreen = splashScreen;
        this.toastController = toastController;
        this.databaseService = databaseService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */];
        // Inicio de la app
        this.initializeApp();
        // Definición de url base para los servicios de tipo REST
        this.localStorage.set('apiUrl', 'http://testsolex.blulogistics.net/Solex/Services/SolexMobileApi.svc/');
        // this.localStorage.set('apiUrl', 'http://solex.blulogistics.net/Solex/Services/SolexMobileApi.svc/');
        // Listado de páginas
        this.pages = [
            { title: 'Página Principal', component: __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */] },
            { title: 'Rastreo de Guías', component: __WEBPACK_IMPORTED_MODULE_6__pages_search_guia_search_guia__["a" /* SearchGuiaPage */] },
            { title: 'Iniciar sesión', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Subcripción de las notificaciones
            _this.pushSetup();
            // Subscripción al evento de iniciar sesión
            _this.events.subscribe('user:loggedin', function (token) {
                // Guardamos el token del usuario
                _this.localStorage.set('bearerToken', token);
            });
            // Subscripción al evento de cerrar sesión
            _this.events.subscribe('user:logout', function (token) {
                // Mensaje en consola
                console.log('Cerrando sesión...');
            });
            // Solicitud de permisos 
            _this.push.hasPermission()
                .then(function (res) {
                if (res.isEnabled) {
                    console.log('We have permission to send push notifications');
                }
                else {
                    console.log('We do not have permission to send push notifications');
                }
            });
            // Estilos por defecto
            _this.statusBar.styleDefault();
            // Ocultamos el splash screen
            _this.splashScreen.hide();
            // Verificamos que la app se haya cargado en un dispositivo
            if (_this.platform.is('android') || _this.platform.is('ios')) {
                _this.databaseService.createDatabase();
                _this.databaseService.createTables();
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Abrimos la página que viene por parámetro
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.pushSetup = function () {
        var _this = this;
        // Opciones de configración de las notificaciones
        this.options = {
            android: {
                senderID: '993976660396',
                topics: ['/topics/all']
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            }
        };
        this.pushObject = this.push.init(this.options);
        this.pushObject.on('notification').subscribe(function (data) {
            console.log('Received a notification', data);
            // Mostramos una toast en pantalla
            _this.toaster.presentSimpleToast(data.message, 'bottom');
        });
        this.pushObject.on('registration').subscribe(function (data) {
            // Mensaje en consola
            console.log('Device registered', data.registrationId);
            // Guardamos el id del dispositivo
            _this.localStorage.set('deviceId', data.registrationId);
        });
        this.pushObject.on('error').subscribe(function (error) {
            console.error('Error with Push plugin', error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="scroll-hide">\n    <ion-list class="toolbar-list-items">\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{ p.title }}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_9__providers_toaster_toaster__["a" /* ToasterProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_database_database__["a" /* DatabaseProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service_auth_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_request_auth__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_response_auth__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_guia_search_guia__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__welcome_welcome__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Default Components

// Ionic components



// Services

// Models


// Pages

// Native


var LoginPage = /** @class */ (function () {
    function LoginPage(events, navParams, localStorage, navCtrl, menuCtrl, toastCtrl, loadingCtrl, authService) {
        this.events = events;
        this.navParams = navParams;
        this.localStorage = localStorage;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.request_auth = new __WEBPACK_IMPORTED_MODULE_3__models_request_auth__["a" /* RequestAuth */]();
        this.response_auth = new __WEBPACK_IMPORTED_MODULE_4__models_response_auth__["a" /* ResponseAuth */]();
    }
    LoginPage.prototype.showToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    LoginPage.prototype.showLoading = function (message) {
        this.loading = this.loadingCtrl.create({
            content: message
        });
        this.loading.present();
    };
    LoginPage.prototype.hideLoading = function () {
        this.loading.dismiss();
    };
    LoginPage.prototype.menuToggle = function () {
        this.menuCtrl.open();
    };
    LoginPage.prototype.backPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__welcome_welcome__["a" /* WelcomePage */]);
    };
    LoginPage.prototype.authLogin = function () {
        var _this = this;
        if ((this.request_auth.Username != null && this.request_auth.Username != "")
            && this.request_auth.Password != null && this.request_auth.Password.toString() != "") {
            // Mostramos el mensaje de carga
            this.showLoading('Validando credenciales de Solex...');
            // Consumimos el servicio de Solex
            this.authService.authLogin(this.request_auth)
                .subscribe(function (data) {
                _this.response_auth = data;
                // Ocultamos el mensaje de carga
                _this.hideLoading();
                // Capturamos la respuesta de Solex
                var response_token = _this.response_auth.Access_token;
                // Si la respuesta de Solex es afirmativa
                if (response_token.Error_description == "Success") {
                    // Emitimos el evento de usuario logueado
                    _this.events.publish('user:loggedin', response_token.Access_token);
                    // Asignamos el id del usuario autenticado
                    _this.localStorage.set('userId', _this.response_auth.UsuarioId);
                    // Navegamos a la página de inicio después de realizar la autenticación
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_search_guia_search_guia__["a" /* SearchGuiaPage */]);
                }
                else {
                    // Vaciamos el id del usuario
                    _this.localStorage.set('userId', '');
                    // Mostramos el mensaje devuelto desde el servicio de Solex
                    _this.showToast(response_token.Error_description);
                }
            }, function (error) {
                // Ocultamos el mensaje de carga
                _this.hideLoading();
                // Imprimimos en consola
                console.log(error);
            });
        }
        else {
            this.showToast('Por favor digite sus credenciales.');
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\pages\login\login.html"*/'<ion-content>\n  <ion-grid>\n    <ion-row justify-content-center align-items-center>\n      <div class="section-with-logo">\n        <img src="assets/imgs/WelcomeIcon-6.png" class="img-logo" alt="Logo" />\n        <ion-list>\n          <ion-item>\n            <ion-label floating>Usuario</ion-label>\n            <ion-input type="text" [(ngModel)]="request_auth.Username"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>Contraseña</ion-label>\n            <ion-input type="password" [(ngModel)]="request_auth.Password"></ion-input>\n          </ion-item>\n        </ion-list>\n        <ion-buttons>\n          <button class="button-login" ion-button block (click)="authLogin()">\n            Ingresar\n          </button>\n          <div text-center>\n            <button ion-button (click)="backPage()">\n              Regresar\n            </button>\n          </div>\n        </ion-buttons>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_guia_search_guia__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cotizador_estandar_cotizador_estandar__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Default components

// Ionic components

// Native


// Pages components



var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams, platform, screenOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.screenOrientation = screenOrientation;
        if (!this.platform.is('core') && !this.platform.is('mobileweb')) {
            // Seteamos la orientación de la pantalla en vertical
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
    }
    WelcomePage.prototype.SearchGuiaPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_guia_search_guia__["a" /* SearchGuiaPage */]);
    };
    WelcomePage.prototype.CotizadorEstandarPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__cotizador_estandar_cotizador_estandar__["a" /* CotizadorEstandarPage */]);
    };
    WelcomePage.prototype.LoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\pages\welcome\welcome.html"*/'<ion-content class="scroll-hide">\n  <ion-grid>\n    <ion-row justify-content-center align-items-center>\n      <div class="section-with-logo">\n        <img src="assets/imgs/WelcomeIcon-6.png" class="img-logo" alt="Logo" />\n        <ion-buttons>\n          <button ion-button color="primary" block (click)="SearchGuiaPage()">Consultar Guía</button>\n          <button ion-button color="primary" block (click)="CotizadorEstandarPage()">Cotizador Estándar</button>\n          <button ion-button color="primary" block (click)="LoginPage()">Iniciar Sesión</button>\n        </ion-buttons>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n  \n'/*ion-inline-end:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\pages\welcome\welcome.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

},[362]);
//# sourceMappingURL=main.js.map