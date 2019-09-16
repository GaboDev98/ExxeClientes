webpackJsonp([1],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCotizacionPageModule", function() { return ModalCotizacionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_cotizacion__ = __webpack_require__(709);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalCotizacionPageModule = /** @class */ (function () {
    function ModalCotizacionPageModule() {
    }
    ModalCotizacionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_cotizacion__["a" /* ModalCotizacionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_cotizacion__["a" /* ModalCotizacionPage */]),
            ],
        })
    ], ModalCotizacionPageModule);
    return ModalCotizacionPageModule;
}());

//# sourceMappingURL=modal-cotizacion.module.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalCotizacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_response_cotizador_estandar__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Models

var ModalCotizacionPage = /** @class */ (function () {
    function ModalCotizacionPage(navParams, navCtrl, viewCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.response = new __WEBPACK_IMPORTED_MODULE_2__models_response_cotizador_estandar__["a" /* CotizadorEstandarResponse */]();
        this.unidades = this.navParams.get('unidades');
        this.request_origen = this.navParams.get('request_origen');
        this.request_destino = this.navParams.get('request_destino');
        this.response = this.navParams.get('response_cotizacion');
    }
    ModalCotizacionPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ModalCotizacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-cotizacion',template:/*ion-inline-start:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\pages\modal-cotizacion\modal-cotizacion.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title text-center>\n      Detalle de Cotización\n    </ion-title>\n  </ion-toolbar>\n</ion-header>  \n\n<ion-content padding>\n  <div class="div-img-logo-mid">\n    <img src="assets/imgs/WelcomeIcon-6.png" class="img-logo-mid center" alt="Logo" />\n  </div>\n  <ion-grid class="grid-info" style="margin-top: 30px;">\n    <ion-row>\n      <ion-col col-6>\n        <ion-row>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label><strong>Ciudad origen</strong></ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label>{{ request_origen }}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col col-6>\n        <ion-row>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label><strong>Ciudad destino</strong></ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label>{{ request_destino }}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <ion-row>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label><strong>Unidades</strong></ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label>{{ unidades }}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col col-6>\n        <ion-row>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label><strong>Costo de manejo</strong></ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label>{{ response.CostoManejo | currency:\'USD\':0 }}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <ion-row>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label><strong>Valor del flete</strong></ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label>{{ response.ValorFlete | currency:\'USD\':0  }}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col col-6>\n        <ion-row>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label><strong>Valor total</strong></ion-label>\n          </ion-col>\n          <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n            <ion-label>{{ response.ValorTotal | currency:\'USD\':0 }}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab center bottom>\n    <button ion-fab color="light" icon-only (click)="close()"><ion-icon name="arrow-round-back"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"E:\tfs\Mobile\Ionic\Test\BluClientes\src\pages\modal-cotizacion\modal-cotizacion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ModalCotizacionPage);
    return ModalCotizacionPage;
}());

//# sourceMappingURL=modal-cotizacion.js.map

/***/ })

});
//# sourceMappingURL=1.js.map