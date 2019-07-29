webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error("You must be logged in to access this area");
        this.router.navigate(["/home"]);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_guards/prevent-unsaved-changes.guards.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreventUnsavedChanges; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PreventUnsavedChanges = /** @class */ (function () {
    function PreventUnsavedChanges() {
    }
    PreventUnsavedChanges.prototype.canDeactivate = function (component) {
        if (component.editForm.dirty) {
            return confirm("Are you sure you want to continue? All unsaved data will be lost.");
        }
        return true;
    };
    PreventUnsavedChanges = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], PreventUnsavedChanges);
    return PreventUnsavedChanges;
}());



/***/ }),

/***/ "../../../../../src/app/_models/pagination.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginatedResult; });
var PaginatedResult = /** @class */ (function () {
    function PaginatedResult() {
    }
    return PaginatedResult;
}());



/***/ }),

/***/ "../../../../../src/app/_resolvers/lists.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListsResolver = /** @class */ (function () {
    function ListsResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageSize = 10;
        this.pageNumber = 1;
        this.likesParam = 'Likers';
    }
    ListsResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).catch(function (error) {
            _this.alertify.error("Problem accessing data");
            _this.router.navigate(["/home"]);
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */].of(null);
        });
    };
    ListsResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_User_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__["a" /* AlertifyService */]])
    ], ListsResolver);
    return ListsResolver;
}());



/***/ }),

/***/ "../../../../../src/app/_resolvers/member-detail.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberDetailResolver = /** @class */ (function () {
    function MemberDetailResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
    }
    MemberDetailResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(route.params["id"]).catch(function (error) {
            _this.alertify.error("Problem accessing data");
            _this.router.navigate(["/members"]);
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */].of(null);
        });
    };
    MemberDetailResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_User_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__["a" /* AlertifyService */]])
    ], MemberDetailResolver);
    return MemberDetailResolver;
}());



/***/ }),

/***/ "../../../../../src/app/_resolvers/member-edit.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberEditResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MemberEditResolver = /** @class */ (function () {
    function MemberEditResolver(userService, router, alertify, authService) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
    }
    MemberEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(this.authService.decodedToken.nameid).catch(function (error) {
            _this.alertify.error("Problem accessing data");
            _this.router.navigate(["/members"]);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].of(null);
        });
    };
    MemberEditResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_User_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */], __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], MemberEditResolver);
    return MemberEditResolver;
}());



/***/ }),

/***/ "../../../../../src/app/_resolvers/member-list.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberListResolver = /** @class */ (function () {
    function MemberListResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageSize = 10;
        this.pageNumber = 1;
    }
    MemberListResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize).catch(function (error) {
            _this.alertify.error("Problem accessing data");
            _this.router.navigate(["/members"]);
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */].of(null);
        });
    };
    MemberListResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_User_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__["a" /* AlertifyService */]])
    ], MemberListResolver);
    return MemberListResolver;
}());



/***/ }),

/***/ "../../../../../src/app/_resolvers/message.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessagesResolver = /** @class */ (function () {
    function MessagesResolver(userService, authService, router, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
        this.pageSize = 10;
        this.pageNumber = 1;
        this.messageContainer = "Unread";
    }
    MessagesResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService
            .getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer)
            .catch(function (error) {
            _this.alertify.error("Problem accessing data");
            _this.router.navigate(["/home"]);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].of(null);
        });
    };
    MessagesResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_User_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */]])
    ], MessagesResolver);
    return MessagesResolver;
}());



/***/ }),

/***/ "../../../../../src/app/_services/User.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_pagination__ = __webpack_require__("../../../../../src/app/_models/pagination.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = /** @class */ (function () {
    function UserService(authHttp) {
        this.authHttp = authHttp;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiUrl;
    }
    UserService.prototype.getUsers = function (page, itemsPerPage, userParams, likesParam) {
        var paginatedResult = new __WEBPACK_IMPORTED_MODULE_5__models_pagination__["a" /* PaginatedResult */]();
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["f" /* HttpParams */]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        if (likesParam === 'Likers') {
            params = params.append('Likers', 'true');
        }
        if (likesParam === 'Likees') {
            params = params.append('Likees', 'true');
        }
        if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
        }
        return this.authHttp
            .get(this.baseUrl + 'users', { observe: 'response', params: params })
            .map(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        });
    };
    UserService.prototype.getUser = function (id) {
        return this.authHttp
            .get(this.baseUrl + 'users/' + id);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.authHttp
            .put(this.baseUrl + 'users/' + id, user);
    };
    UserService.prototype.setMainPhoto = function (userId, id) {
        return this.authHttp
            .post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
    };
    UserService.prototype.deletePhoto = function (userId, id) {
        return this.authHttp
            .delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
    };
    UserService.prototype.sendLike = function (id, recipientId) {
        return this.authHttp.post(this.baseUrl + 'users/' + id + '/like/' + recipientId, {});
    };
    UserService.prototype.getMessages = function (id, page, itemsPerPage, messageContainer) {
        var paginatedResult = new __WEBPACK_IMPORTED_MODULE_5__models_pagination__["a" /* PaginatedResult */]();
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["f" /* HttpParams */]();
        params = params.append('MessageContainer', messageContainer);
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        return this.authHttp.get(this.baseUrl + 'users/' + id + '/messages', { observe: 'response', params: params })
            .map(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        });
    };
    UserService.prototype.getMessageThread = function (id, recipientId) {
        return this.authHttp.get(this.baseUrl + 'users/' + id + '/messages/thread/' + recipientId);
    };
    UserService.prototype.sendMessage = function (id, message) {
        return this.authHttp.post(this.baseUrl + 'users/' + id + '/messages', message);
    };
    UserService.prototype.deleteMessage = function (id, userId) {
        return this.authHttp.post(this.baseUrl + 'users/' + userId + '/messages/' + id, {});
    };
    UserService.prototype.markAsRead = function (userId, messageId) {
        return this.authHttp.post(this.baseUrl + 'users/' + userId + '/messages/' + messageId + '/read', {}).subscribe();
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/alertify.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertifyService; });
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

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else {
            }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warming(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelperService) {
        this.http = http;
        this.jwtHelperService = jwtHelperService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].apiUrl + 'auth/'; //"http://localhost:5000/api/auth/";
        this.photoUrl = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('../../assets/user.png');
        this.currentPhotUrl = this.photoUrl.asObservable();
    }
    AuthService.prototype.changeMemeberPhoto = function (photoUrl) {
        this.photoUrl.next(photoUrl);
    };
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http
            .post(this.baseUrl + "login", model, { headers: new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["e" /* HttpHeaders */]()
                .set('Content-Type', 'application/json')
        })
            .map(function (user) {
            if (user) {
                localStorage.setItem("token", user.tokenString);
                localStorage.setItem("user", JSON.stringify(user.user));
                _this.decodedToken = _this.jwtHelperService.decodeToken(user.tokenString);
                _this.currentUser = user.user;
                _this.userToken = user.tokenString;
                if (_this.currentUser.photoUrl !== null) {
                    _this.changeMemeberPhoto(_this.currentUser.photoUrl);
                }
                else {
                    _this.changeMemeberPhoto('../../assets/user.png');
                }
            }
        });
    };
    AuthService.prototype.register = function (user) {
        return this.http
            .post(this.baseUrl + "register", user, { headers: new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["e" /* HttpHeaders */]()
                .set('Content-Type', 'application/json')
        });
    };
    AuthService.prototype.loggedIn = function () {
        var token = this.jwtHelperService.tokenGetter();
        if (!token) {
            return false;
        }
        return !this.jwtHelperService.isTokenExpired(token);
        // return tokenNotExpired("token");
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/bid.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BidService = /** @class */ (function () {
    function BidService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/vehicles/';
    }
    /*     upload(vehicleId, photo) {
          var formData = new FormData();
          formData.append('file', photo);
          return this.http.post('http://localhost:5000/api/vehicles/' + vehicleId + "/photos", formData)
            .map(res => res.json());
        } */
    BidService.prototype.create = function (vehicleId, bid) {
        console.log("create -bid", vehicleId.id);
        console.log(bid.bidvalue);
        return this.http.post(this.baseUrl + vehicleId.id + "/bids", bid)
            .map(function (res) { return res.json(); });
    };
    BidService.prototype.getBids = function (vehicleId) {
        return this.http.get(this.baseUrl + vehicleId + "/bids")
            .map(function (res) { return res.json(); });
    };
    BidService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], BidService);
    return BidService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/error.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorInterceptor; });
/* unused harmony export ErrorInterceptorProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).catch(function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpErrorResponse */]) {
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(applicationError);
                }
                var serverError = error.error;
                var modelStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modelStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(modelStateErrors || serverError || 'Server error');
            }
        });
    };
    ErrorInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "../../../../../src/app/_services/photo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoService = /** @class */ (function () {
    function PhotoService(http) {
        this.http = http;
    }
    PhotoService.prototype.upload = function (vehicleId, photo) {
        var formData = new FormData();
        formData.append('file', photo);
        return this.http.post('http://localhost:5000/api/vehicles/' + vehicleId + "/photos", formData)
            .map(function (res) { return res.json(); });
    };
    PhotoService.prototype.getPhotos = function (vehicleId) {
        return this.http.get('http://localhost:5000/api/vehicles/' + vehicleId + "/photos")
            .map(function (res) { return res.json(); });
    };
    PhotoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], PhotoService);
    return PhotoService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/vehicle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleService = /** @class */ (function () {
    function VehicleService(http) {
        this.http = http;
    }
    VehicleService.prototype.getMakes = function () {
        return this.http.get('http://localhost:5000/api/makes')
            .map(function (res) { return res.json(); });
    };
    VehicleService.prototype.getFeatures = function () {
        return this.http.get('http://localhost:5000/api/features')
            .map(function (res) { return res.json(); });
    };
    VehicleService.prototype.create = function (vehicle) {
        console.log(vehicle);
        return this.http.post('http://localhost:5000/api/vehicles', vehicle)
            .map(function (res) { return res.json(); });
    };
    VehicleService.prototype.getVehicle = function (id) {
        return this.http.get('http://localhost:5000/api/vehicles/' + id)
            .map(function (res) { return res.json(); });
    };
    VehicleService.prototype.getVehicles = function (filter) {
        return this.http.get('http://localhost:5000/api/vehicles/' + '?' + this.toQueryString(filter))
            .map(function (res) { return res.json(); });
    };
    VehicleService.prototype.toQueryString = function (obj) {
        var parts = [];
        for (var property in obj) {
            var value = obj[property];
            if (value != null && value != undefined)
                parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
        }
        return parts.join('&');
    };
    VehicleService.prototype.update = function (vehicle) {
        console.log(vehicle);
        return this.http.put('http://localhost:5000/api/vehicles/' + vehicle.id, vehicle)
            .map(function (res) { return res.json(); });
    };
    VehicleService.prototype.delete = function (id) {
        return this.http.delete('http://localhost:5000/api/vehicles/' + id)
            .map(function (res) { return res.json(); });
    };
    VehicleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], VehicleService);
    return VehicleService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <app-nav></app-nav> -->\r\n\r\n<!-- <app-home></app-home> -->\r\n\r\n\r\n\r\n<!-- <router-outlet></router-outlet> -->\r\n\r\n<app-mainmanager></app-mainmanager>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, jwtHelperService) {
        this.authService = authService;
        this.jwtHelperService = jwtHelperService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            this.authService.decodedToken = this.jwtHelperService.decodeToken(token);
        }
        if (user) {
            this.authService.currentUser = user;
            if (this.authService.currentUser.photoUrl !== null) {
                this.authService.changeMemeberPhoto(user.photoUrl);
            }
            else {
                this.authService.changeMemeberPhoto('../assets/user.png');
            }
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_0__auth0_angular_jwt__["a" /* JwtHelperService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tokenGetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_bid_service__ = __webpack_require__("../../../../../src/app/_services/bid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_photo_service__ = __webpack_require__("../../../../../src/app/_services/photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__ = __webpack_require__("../../../../../src/app/_services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_error_interceptor__ = __webpack_require__("../../../../../src/app/_services/error.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__members_member_messages_member_messages_component__ = __webpack_require__("../../../../../src/app/members/member-messages/member-messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resolvers_lists_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/lists.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__members_photo_editor_photo_editor_component__ = __webpack_require__("../../../../../src/app/members/photo-editor/photo-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__members_member_edit_member_edit_component__ = __webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resolvers_member_list_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-list.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__resolvers_member_detail_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-detail.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__members_member_detail_member_detail_component__ = __webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__members_member_card_member_card_component__ = __webpack_require__("../../../../../src/app/members/member-card/member-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__members_member_list_member_list_component__ = __webpack_require__("../../../../../src/app/members/member-list/member-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__resolvers_member_edit_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-edit.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__guards_prevent_unsaved_changes_guards__ = __webpack_require__("../../../../../src/app/_guards/prevent-unsaved-changes.guards.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_time_ago_pipe__ = __webpack_require__("../../../../time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__resolvers_message_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/message.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__auth0_angular_jwt__ = __webpack_require__("../../../../@auth0/angular-jwt/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__mainmanager_mainmanager_component__ = __webpack_require__("../../../../../src/app/mainmanager/mainmanager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__sign_in_dialog_sign_in_dialog_component__ = __webpack_require__("../../../../../src/app/sign-in-dialog/sign-in-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__register_dialog_register_dialog_component__ = __webpack_require__("../../../../../src/app/register-dialog/register-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__vehicle_form_vehicle_form_component__ = __webpack_require__("../../../../../src/app/vehicle-form/vehicle-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__vehicle_list_vehicle_list_component__ = __webpack_require__("../../../../../src/app/vehicle-list/vehicle-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__paginations_paginations_component__ = __webpack_require__("../../../../../src/app/paginations/paginations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__view_vehicle_view_vehicle_component__ = __webpack_require__("../../../../../src/app/view-vehicle/view-vehicle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































//import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

//import { PaginationModule } from "ngx-bootstrap/pagination/pagination.module";













function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_18__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_22__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_23__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_24__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__members_member_list_member_list_component__["a" /* MemberListComponent */],
                __WEBPACK_IMPORTED_MODULE_27__list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_28__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__members_member_card_member_card_component__["a" /* MemberCardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__members_member_detail_member_detail_component__["a" /* MemberDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_7__members_member_edit_member_edit_component__["a" /* MemberEditComponent */],
                __WEBPACK_IMPORTED_MODULE_6__members_photo_editor_photo_editor_component__["a" /* PhotoEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_34_time_ago_pipe__["a" /* TimeAgoPipe */],
                __WEBPACK_IMPORTED_MODULE_4__members_member_messages_member_messages_component__["a" /* MemberMessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_41__mainmanager_mainmanager_component__["a" /* MainmanagerComponent */],
                __WEBPACK_IMPORTED_MODULE_42__sign_in_dialog_sign_in_dialog_component__["a" /* SignInDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_43__register_dialog_register_dialog_component__["a" /* RegisterDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_44__vehicle_form_vehicle_form_component__["a" /* VehicleFormComponent */],
                __WEBPACK_IMPORTED_MODULE_45__vehicle_list_vehicle_list_component__["a" /* VehicleListComponent */],
                __WEBPACK_IMPORTED_MODULE_46__paginations_paginations_component__["a" /* PaginationsComponent */],
                __WEBPACK_IMPORTED_MODULE_47__view_vehicle_view_vehicle_component__["a" /* ViewVehicleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_25_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_29__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_25_ngx_bootstrap__["d" /* TabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_gallery__["NgxGalleryModule"],
                __WEBPACK_IMPORTED_MODULE_33_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_38__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_39__material_module__["a" /* MaterialModule */],
                //BsDatepickerModule.forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_ngx_bootstrap__["c" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_ngx_bootstrap__["b" /* ButtonsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_40__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_37__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_36__auth0_angular_jwt__["b" /* JwtModule */].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:5000']
                    }
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_15__services_alertify_service__["a" /* AlertifyService */],
                __WEBPACK_IMPORTED_MODULE_13__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_30__services_User_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_10__resolvers_member_detail_resolver__["a" /* MemberDetailResolver */],
                __WEBPACK_IMPORTED_MODULE_9__resolvers_member_list_resolver__["a" /* MemberListResolver */],
                __WEBPACK_IMPORTED_MODULE_31__resolvers_member_edit_resolver__["a" /* MemberEditResolver */],
                __WEBPACK_IMPORTED_MODULE_32__guards_prevent_unsaved_changes_guards__["a" /* PreventUnsavedChanges */],
                __WEBPACK_IMPORTED_MODULE_5__resolvers_lists_resolver__["a" /* ListsResolver */],
                __WEBPACK_IMPORTED_MODULE_35__resolvers_message_resolver__["a" /* MessagesResolver */],
                __WEBPACK_IMPORTED_MODULE_3__services_error_interceptor__["a" /* ErrorInterceptor */],
                __WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__["a" /* VehicleService */],
                __WEBPACK_IMPORTED_MODULE_1__services_photo_service__["a" /* PhotoService */],
                __WEBPACK_IMPORTED_MODULE_0__services_bid_service__["a" /* BidService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_42__sign_in_dialog_sign_in_dialog_component__["a" /* SignInDialogComponent */], __WEBPACK_IMPORTED_MODULE_43__register_dialog_register_dialog_component__["a" /* RegisterDialogComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic);\r\nhtml {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n  -webkit-box-sizing: inherit;\r\n          box-sizing: inherit;\r\n}\r\nhtml,\r\nbody {\r\n  font-family: \"Open Sans\",\"Roboto\",helvetica, arial, sans-serif;\r\n  -webkit-text-size-adjust: 100%;\r\n  -ms-text-size-adjust: 100%;\r\n  font-size: 62.5%;\r\n}\r\nbody {\r\n  background: #f4f5f6;\r\n  color: #333;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color:#67c;\r\n}\r\np,\r\nli,\r\ntime {\r\n  font-size: 1.6rem;\r\n  line-height: 3.6rem;\r\n  margin: 0 0 2.4rem;\r\n}\r\nh2 {\r\n  font-size: 2.4rem;\r\n  line-height: 3.6rem;\r\n  font-weight: 400;\r\n  margin: 2.4rem 0;\r\n}\r\nimg {\r\n  border: 0;\r\n  height: auto;\r\n  max-width: 100%;\r\n}\r\nimg:hover {\r\n  filter: alpha(opacity=9000);\r\n  opacity: 0.90;\r\n  filter: alpha(opacity=90);\r\n}\r\nfigure {\r\n  margin: 0;\r\n  line-height: 0;\r\n}\r\narticle,\r\nfigure,\r\nfooter,\r\nheader,\r\nmain {\r\n  display: block;\r\n}\r\n/*--- Clearings ---*/\r\nheader:before,\r\nheader:after,\r\nmain:before,\r\nmain:after {\r\n  content: \"\";\r\n  display: table;\r\n}\r\nheader:after,\r\nmain:after {\r\n  clear: both;\r\n}\r\nmain {\r\n  position: relative;\r\n  width: 1200px;\r\n  max-width: 90%;\r\n  margin: 0 auto;\r\n}\r\n/*===\r\nMAGIC (Auto adjust + Equal Height) === */\r\n.flexgrid {\r\nmargin: 0 auto;\r\npadding: 0;\r\ndisplay: -webkit-box;\r\ndisplay: -ms-flexbox;\r\ndisplay: flex;\r\n-ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n}\r\n.flexgrid li {\r\nposition: relative;\r\nlist-style: none;\r\ndisplay: -webkit-box;\r\ndisplay: -ms-flexbox;\r\ndisplay: flex;\r\nmargin: 0;\r\n-webkit-box-flex: 1;\r\n    -ms-flex: auto;\r\n        flex: auto;\r\nwidth: 100%;  /* <-- more control */\r\n}\r\n.flexgrid li>a {\r\nposition: relative;\r\npadding: 2.4rem;\r\nwidth: 100%;\r\n/*making paragraphs and linked block*/\r\n-webkit-box-orient: vertical;\r\n-webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n\r\n}\r\n@media (min-width:768px){\r\n .flexgrid li {width: 33.333%;\r\n }\r\n}\r\n.flexgrid li h2,.flexgrid li h3{margin: 0;}\r\n/*=== News/Recommended === */\r\n.flexgrid.columns-news li {\r\n    margin-bottom: 4.8rem;\r\n\r\n}\r\n.flexgrid.columns-news li a {\r\n  padding: 0; \r\n}\r\n.flexgrid.columns-news li figcaption {\r\nposition: relative;\r\nz-index: 9999; \r\n}\r\n.flexgrid.columns-news li p{\r\nmargin: -3.6rem 0 0; \r\npadding: 0 1.2rem; \r\nfont-size: .7em;\r\ntext-transform: uppercase;\r\n}\r\n.flexgrid.columns-news li h2{\r\npadding: 1.2rem;\r\nfont-size: 1.6rem;\r\nline-height: 2.4rem;\r\nfont-weight: 400;\r\n \r\n}\r\n.columns-news li:hover {\r\n-webkit-transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);\r\ntransition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);\r\n-webkit-transform: translateY(-2px);\r\ntransform: translateY(-2px); \r\n}\r\n@media (min-width:568px){\r\n.flexgrid.columns-news {\r\n  margin: 0 -2%;\r\n}\r\n.flexgrid.columns-news li {\r\n  margin-right:2%;margin-left: 2%;\r\n  width: 46%;\r\n }\r\n}\r\n@media (min-width:1024px){\r\n.flexgrid.columns-news li {\r\n  width: 21%;\r\n }\r\n}\r\n/* --- Favorite/Save (heart, star...) --- */\r\n.ribbon.icon{font-size:2.4rem; }\r\n/* --- Number: most popular --- */\r\n.grid-number {\r\n  position: absolute;\r\n  top: 1.2rem;\r\n  left: 1.2rem;\r\n  line-height: 1;\r\n  font-weight: 600;\r\n  z-index: 9999;\r\n  padding: .6rem 1.2rem;\r\n  border-radius: 50%;\r\n}\r\n/* Ribbon --- */\r\n.ribbon {\r\n  position: absolute;\r\n  top: 0;\r\n  right: -1.3rem;\r\n  padding: .6rem 1.2rem;\r\n  font-size: 1.4rem;\r\n  line-height: 2.4rem;\r\n  text-align: center;\r\n  z-index: 9999;\r\n  letter-spacing: 1px;\r\n}\r\n.ribbon:before {\r\n  position: absolute;\r\n  right: .3rem;\r\n  bottom: -1rem;\r\n  border: solid transparent;\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  pointer-events: none;\r\n  border-width: 10px;\r\n  -webkit-transform: rotate(135deg);\r\n  transform: rotate(135deg);\r\n}\r\n/*=== Colors === */\r\n.flexgrid.columns-news li {\r\n  background: #fff;\r\n  border: 1px solid #eee;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n.flexgrid.columns-news li a {\r\n  color: inherit;\r\n}\r\n.columns-news li:hover {\r\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);\r\n          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);\r\n}\r\n.flexgrid.columns-news li p {\r\n  color: #fff;\r\n  text-shadow: 0 1px 0 #000;\r\n  /* FF3.6+ */\r\n  /* Chrome,Safari4+ */\r\n  /* Chrome10+,Safari5.1+ */\r\n  /* Opera 11.10+ */\r\n  /* IE10+ */\r\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.4)));\r\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);\r\n  /* W3C */\r\n}\r\n.grid-number {\r\n  background: rgba(0, 0, 0, 0.4);\r\n  color: #fff;\r\n  border: none;\r\n}\r\n.ribbon {\r\n  background: #67c;\r\n}\r\n.ribbon,\r\n.ribbon a {\r\n  color: #fff;\r\n}\r\n.ribbon:before {\r\n  border-color: rgba(136, 183, 213, 0);\r\n  border-top-color: #ccc;\r\n  ;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"!registerMode\" class=\"text-center\">\r\n  <h1>Vehicle Restoration Marketplace</h1>\r\n  <p class=\"lead\"> Get an expert to restore your dream car.\r\n    All you need to do is sign up!</p>\r\n  <!-- <div class=\"text-center\">\r\n    <button class=\"btn btn-primary btn-lg\"(click)=\"registerToggle()\">Register</button>\r\n    <button class=\"btn btn-info btn-lg\">Learn More</button>\r\n  </div> -->\r\n</div>\r\n\r\n<main role=\"main\">\r\n    <ul class=\"flexgrid columns-news\">\r\n      <li>\r\n        <a href=\"\">\r\n        \r\n          <figure>\r\n            <img src=\"https://res.cloudinary.com/babyhulk/image/upload/v1531131077/automobile-automotive-brand-139334_akuurc.jpg\" >\r\n            <figcaption>\r\n              <p>\r\n                \r\n              </p>\r\n              <h2>\r\n \r\n          </h2>\r\n            </figcaption>\r\n          </figure>\r\n        </a>\r\n      </li>\r\n      <li>\r\n      \r\n       \r\n        <a href=\"\">\r\n          <figure>\r\n            <img src=\"https://res.cloudinary.com/babyhulk/image/upload/v1531109086/auto-automobile-car-461824_klntc0.jpg\" >\r\n            <figcaption>\r\n              <p></p>\r\n              <h2></h2>\r\n            </figcaption>\r\n          </figure>\r\n        </a>\r\n      </li>\r\n      <li>\r\n       \r\n        <a href=\"\">\r\n          <figure>\r\n            <img src=\"https://res.cloudinary.com/babyhulk/image/upload/v1531109085/alley-automobile-automotive-1029929_vd7to7.jpg\">\r\n            <figcaption>\r\n              <p>\r\n           \r\n              </p>\r\n              <h2>\r\n\r\n          </h2>\r\n            </figcaption>\r\n          </figure>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"\">\r\n          <figure>\r\n            <img src=\"https://res.cloudinary.com/babyhulk/image/upload/v1531109085/automobile-automotive-car-103290_e7yuuk.jpg\">\r\n            <figcaption>\r\n              <p>\r\n              \r\n              </p>\r\n\r\n       \r\n            </figcaption>\r\n          </figure>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"\">\r\n         \r\n          <figure>\r\n            <img src=\"https://res.cloudinary.com/babyhulk/image/upload/v1531109593/automobile-automotive-car-18615_txki3d.jpg\" >\r\n            <figcaption>\r\n   \r\n              <h2>\r\n          </h2>\r\n            </figcaption>\r\n          </figure>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a href=\"\">\r\n          <figure>\r\n            <img src=\"https://res.cloudinary.com/babyhulk/image/upload/v1531109358/automobile-automotive-cadillac-163553_ho0nk1.jpg\" >\r\n            <figcaption>\r\n\r\n              <h2>\r\n\r\n          </h2>\r\n            </figcaption>\r\n          </figure>\r\n        </a>\r\n      </li>\r\n          <figure>\r\n            <img src=\"https://res.cloudinary.com/babyhulk/image/upload/v1531109355/american-auto-automotive-35624_dotugk.jpg\">\r\n            <figcaption>\r\n              <h2>\r\n          </h2>\r\n            </figcaption>\r\n          </figure>\r\n      \r\n      \r\n      <li>\r\n\r\n       \r\n         <!--  <figure>\r\n            <img src=\"https://res.cloudinary.com/babyhulk/image/upload/v1531109367/automobile-automotive-car-163576_shxuo0.jpg\">\r\n            <figcaption>\r\n\r\n              <h2>\r\n          </h2>\r\n            </figcaption>\r\n          </figure> -->\r\n       \r\n      </li>\r\n    </ul>\r\n  \r\n    \r\n  </main>\r\n\r\n<!-- <div *ngIf=\"registerMode\" class=\"container\">  \r\n  <div class=\"col-md-4 col-md-offset-4\">\r\n    <app-register (cancelRegister) =\"cancelRegisterMode($event)\"></app-register>\r\n  </div>\r\n</div> -->\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
        this.registerMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.registerToggle = function () {
        this.registerMode = true;
    };
    HomeComponent.prototype.cancelRegisterMode = function (registerMode) {
        this.registerMode = registerMode;
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"btn-group\">\r\n      <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likees\" (click)=\"loadUsers()\">My Favorite list</button>\r\n      <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likers\" (click)=\"loadUsers()\"> Members who added me to their list</button>\r\n    </div>\r\n  </div>\r\n\r\n  <h2>{{likesParam === 'Likers' ? 'Members who like me' : 'Members who I\\'ve liked'}} : {{pagination.totalItems}}</h2>\r\n\r\n  <div class=\"row equal\">\r\n    <div *ngFor=\"let user of users\" >\r\n      <app-member-card [user]=\"user\"></app-member-card>\r\n    </div>\r\n  </div>\r\n\r\n <!--  <div class=\"text-center\">\r\n    <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" (pageChanged)=\"pageChanged($event)\"\r\n      [(ngModel)]=\"pagination.currentPage\" class=\"pagination-sm\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\r\n      lastText=\"&raquo;\"></pagination>\r\n  </div> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListComponent = /** @class */ (function () {
    function ListComponent(userService, alertify, route, authService) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.authService = authService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data['users'].result;
            _this.pagination = data['users'].pagination;
        });
        this.likesParam = 'Likers';
    };
    ListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService
            .getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, null, this.likesParam)
            .subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ListComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_User_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mainmanager/mainmanager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n  .app-sidenav-container {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    position: fixed;\r\n    width: 100%;\r\n    min-width: 100%;\r\n    height: 100%;\r\n    min-height: 100%;\r\n  }\r\n  \r\n  .app-sidenav-content {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 100%;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  \r\n  .app-sidenav {\r\n    width: 250px;\r\n  }\r\n  \r\n  /* .wrapper {\r\n    margin: 50px;\r\n  }\r\n     */\r\n  \r\n  /* .example-container {\r\n    flex: 1;\r\n    position: fixed;\r\n    width: 100%;\r\n    min-width: 100%;\r\n    height: 100%;\r\n    min-height: 100%;\r\n  } */\r\n  \r\n  /* .example-sidenav-content {\r\n    display: flex;\r\n    height: 100%;\r\n    flex-direction: column;\r\n  }  */\r\n  \r\n  /* .button3 {\r\n    \r\n    background-color: #f44336;\r\n  \r\n    border: none;\r\n    color: white;\r\n  \r\n  }\r\n  \r\n  \r\n  .example-sidenav {\r\n    width: 300px;\r\n    \r\n  } */\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainmanager/mainmanager.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<app-nav></app-nav>\r\n\r\n<mat-drawer-container class=\"app-sidenav-container\" autosize  >\r\n  <mat-drawer #drawer class=\"app-sidenav mat-elevation-z10\" [opened]=\"!isScreenSmall()\" [mode]=\" isScreenSmall() ? 'over' : 'side'\"\r\n  *ngIf=\"loggedIn()\"\r\n  >\r\n    <mat-toolbar>\r\n     <h2>Dashboard</h2> \r\n    </mat-toolbar>\r\n\r\n    <mat-nav-list role=\"list\" >\r\n     \r\n\r\n      <mat-list-item role=\"listitem\" [routerLink]=\"['/vehicles/new']\">\r\n        <mat-icon mat-list-icon>add</mat-icon>  \r\n       <h4 mat-line>Add a listing </h4>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item role=\"listitem\" [routerLink]=\"['/vehicles']\">\r\n        <mat-icon mat-list-icon>people</mat-icon>  \r\n       <h4 mat-line>View projects </h4>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item role=\"listitem\" [routerLink]=\"['/list']\">\r\n        <mat-icon mat-list-icon>favorite</mat-icon>  \r\n       <h4 mat-line>My Favorites</h4>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item role=\"listitem\" [routerLink]=\"['/messages']\">\r\n        <mat-icon mat-list-icon>mail_outline</mat-icon>  \r\n       <h4 mat-line>Conversations</h4>\r\n      </mat-list-item>\r\n\r\n      <!-- <mat-divider></mat-divider> -->\r\n\r\n      <mat-list-item role=\"listitem\" [routerLink]=\"['/members']\">\r\n        <mat-icon mat-list-icon>people</mat-icon>  \r\n       <h4 mat-line>Community</h4>\r\n      </mat-list-item>\r\n\r\n    </mat-nav-list>\r\n\r\n  </mat-drawer>\r\n\r\n\r\n  <!-- <div class=\"app-sidenav-content\">\r\n    <button type=\"button\" class=\"button button3\" mat-button (click)=\"drawer.toggle()\">\r\n     Toggle Test\r\n    </button>\r\n    \r\n\r\n  </div> -->\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</mat-drawer-container>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/mainmanager/mainmanager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainmanagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SMALL_WIDTH_BREAKPOINT = 720;
var MainmanagerComponent = /** @class */ (function () {
    function MainmanagerComponent(zone, authService) {
        var _this = this;
        this.authService = authService;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.mediaMatcher.addListener(function (mql) {
            return zone.run(function () { return _this.mediaMatcher = mql; });
        });
    }
    MainmanagerComponent.prototype.ngOnInit = function () {
    };
    MainmanagerComponent.prototype.isScreenSmall = function () {
        return this.mediaMatcher.matches;
    };
    MainmanagerComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    MainmanagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-mainmanager',
            template: __webpack_require__("../../../../../src/app/mainmanager/mainmanager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mainmanager/mainmanager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], MainmanagerComponent);
    return MainmanagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_slider__ = __webpack_require__("../../../material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_paginator__ = __webpack_require__("../../../material/esm5/paginator.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_list__["a" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_slider__["a" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__["b" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_snack_bar__["b" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material_radio__["a" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_14__angular_material_paginator__["a" /* MatPaginatorModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_icon__["a" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_input__["b" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material_card__["a" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_list__["a" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_8__angular_material_slider__["a" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_9__angular_material_tabs__["a" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_dialog__["b" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material_snack_bar__["b" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_13__angular_material_radio__["a" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_14__angular_material_paginator__["a" /* MatPaginatorModule */]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/members/member-card/member-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.panel-image {\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n\r\nimg {\r\n  width: 200px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n\r\n/* \r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n} */\r\n\r\n\r\n.example-card {\r\n  max-width: 300px;\r\n}\r\n\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n\r\n.title {\r\n  color: #2b2b2b;\r\n  width: 100%;\r\n  float: left;\r\n  line-height: 20px;\r\n  font-size: 17px;\r\n  font-weight: 100;\r\n  letter-spacing: 2px;\r\n  position: relative;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-card/member-card.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\r\n    <mat-card-title class=\"title\"> {{user.firstName}} A. {{user.lastName}}</mat-card-title>\r\n    <mat-card-subtitle>{{user.currentRole}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n\r\n  <img mat-card-image src=\"{{user.photoUrl ? user.photoUrl : '../../../assets/user.png'}}\" alt=\"{{user.knownAs}}\">\r\n  <!-- <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\r\n\r\n\r\n  <mat-card-content>\r\n    <!-- Years at Google: {{user.age}} -->\r\n    <!-- <p>Contact: {{user.contact}}</p> -->\r\n    <!-- <p>{{user.email}}</p> -->\r\n    <p> Email: {{email}}</p>\r\n    <p> Office Tel: {{telephoneNumber}}</p>\r\n    <p>Ext: {{extension}}</p>\r\n  </mat-card-content>\r\n  <mat-divider></mat-divider>\r\n  <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n\r\n    <span matTooltip=\"View Profile\">\r\n      <mat-list-item role=\"listitem\" [routerLink]=\"['/members/', user.id]\">\r\n        <mat-icon mat-list-icon>person_pin</mat-icon>\r\n      </mat-list-item>\r\n    </span>\r\n    \r\n    <span matTooltip=\"Add to Favorite\">\r\n      <mat-list-item role=\"listitem\" (click)=\"sendLike(user.id)\">\r\n        <mat-icon mat-list-icon>person_add</mat-icon>\r\n      </mat-list-item>\r\n    </span>\r\n   \r\n    <span matTooltip=\"Send a Messages\">\r\n      <mat-list-item role=\"listitem\" [routerLink]=\"['/members/', user.id]\" [queryParams]=\"{tab :'3'}\">\r\n        <mat-icon mat-list-icon>mail</mat-icon>\r\n      </mat-list-item>\r\n    </span>\r\n  </mat-card-actions>\r\n\r\n\r\n</mat-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"panel-image\">\r\n      <img src=\"{{user.photoUrl ? user.photoUrl : '../../../assets/user.png'}}\" alt=\"{{user.knownAs}}\" >\r\n      <ul class=\"list-inline member-icons animate text-center\">\r\n        <li><button class=\"btn btn-primary\" [routerLink]=\"['/members/', user.id]\"><i class=\"fa fa-user\"></i></button></li>\r\n        <li><button class=\"btn btn-primary\" (click)= \"sendLike(user.id)\"><i class=\"fa fa-heart\"></i></button></li>\r\n        <li><button class=\"btn btn-primary\"[routerLink]=\"['/members/', user.id]\" [queryParams] = \"{tab :'3'}\"  ><i class=\"fa fa-envelope\"></i></button></li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"text-center\">\r\n      <h5><i class=\"fa fa-user\"></i> {{user.knownAs}}, {{user.age}}</h5>\r\n    </div>\r\n    <div class=\"text-center\">\r\n      <h5><small>{{user.city}}</small></h5>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/members/member-card/member-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent(authService, userService, alertify, snackBar, router) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.snackBar = snackBar;
        this.router = router;
    }
    MemberCardComponent.prototype.ngOnInit = function () {
        this.email = this.user.contact[0].email;
        this.telephoneNumber = this.user.contact[0].telephoneNumber;
        this.extension = this.user.contact[0].extension;
    };
    MemberCardComponent.prototype.sendLike = function (id) {
        var _this = this;
        this.userService
            .sendLike(this.authService.decodedToken.nameid, id)
            .subscribe(function (data) {
            _this.openSnackBar(_this.user.knownAs + " photo added to you favorite", "Navigate to your favorite list")
                .onAction()
                .subscribe(function () {
                _this.router.navigate(["/list"]);
            });
            //this.alertify.success('You have liked ' + this.user.knownAs);
        }, function (error) {
            _this.openSnackBar(_this.user.knownAs + " was already added to you favorite", "Navigate to your favorite list");
            //  .onAction().subscribe(() => {
            // this.router.navigate(['/list'])},
        });
    };
    MemberCardComponent.prototype.openSnackBar = function (message, action) {
        return this.snackBar.open(message, action, {
            duration: 5000
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MemberCardComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MemberCardComponent.prototype, "contact", void 0);
    MemberCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: "app-member-card",
            template: __webpack_require__("../../../../../src/app/members/member-card/member-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-card/member-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_User_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], MemberCardComponent);
    return MemberCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/member-detail/member-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .profile-image {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.panel-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.panel-footer {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.btn-group-justified>.btn-group .btn {\r\n    width: 95%;\r\n} */\r\n\r\n/* #outer-grid {\r\n    display: grid;\r\n    grid-template-rows: 20em 6em 6em  6em ;\r\n    grid-template-columns: 20em 6em  6em  6em;\r\n    grid-gap: 5px;\r\n    border: solid 4px black\r\n  } */\r\n\r\n#outer-grid {\r\n  display: grid;\r\n  grid-template-rows: 15em 0.2em 18em;\r\n  grid-template-columns: 18em 20em 10em 20em 20em;\r\n  grid-gap: 5px;\r\n  /* border: solid 4px black; */\r\n}\r\n\r\n/* .grid-item {\r\n\r\n box-sizing: border-box;\r\n font-size: 1.2em;\r\n padding: 1em;\r\n text-align: center;\r\n grid-column: 1/3;\r\n grid-row: 1/2;\r\n} */\r\n\r\n.grid-item1 {\r\n  padding: 1em;\r\n  text-align: center;\r\n  margin: 0.5em 0;\r\n  grid-column: 1/2;\r\n  grid-row: 1/2;\r\n}\r\n\r\n.grid-item2 {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-size: 1.2em;\r\n\r\n  text-align: center;\r\n  grid-column: 2/4;\r\n  grid-row: 1/1;\r\n}\r\n\r\n.grid-item3 {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-size: 1.2em;\r\n  padding: 1.2em;\r\n  text-align: center;\r\n  grid-column: 4/6;\r\n  grid-row: 1/1;\r\n}\r\n\r\n/* .grid-item4 {\r\n box-sizing: border-box;\r\n font-size: 1.2em;\r\n padding: 1em;\r\n text-align: center;\r\n grid-column: 1/2;\r\n grid-row: 3/4;\r\n} */\r\n\r\n.grid-item5 {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  font-size: 1em;\r\n  padding: 2px 30px 2px;\r\n  text-align: center;\r\n  grid-column: 1/6;\r\n  grid-row: 3/10;\r\n}\r\n\r\n.divider {\r\n  /* border-bottom: 6px solid red;\r\n  background-color: lightgrey; */\r\n  /* box-sizing: border-box;\r\n font-size: 1.2em;\r\n padding: 1em;\r\n text-align: center; */\r\n  grid-column: 1/6;\r\n  grid-row: 2/2;\r\n}\r\n\r\n.interest {\r\n  font-style: italic;\r\n  display: block;\r\n  text-align: left;\r\n  font-size: 15px;\r\n}\r\n\r\n.profile-image {\r\n  /* width: 200px;\r\n    height: 200px; */\r\n  max-width: 200px;\r\n  max-height: 200px;\r\n\r\n  /* max-height:50px; */\r\n  border: 2px solid white;\r\n  display: inline;\r\n  border-radius: 50%;\r\n  /* display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 5em;\r\n    text-align: left; */\r\n}\r\n\r\n.header-image {\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n\r\n.label {\r\n  text-transform: uppercase;\r\n  font-size: 10px;\r\n  font-weight: 700;\r\n  color: #a2a2a2;\r\n  opacity: 0.9;\r\n  padding: 0px 0px, 0px, 0px;\r\n}\r\n\r\n.label,\r\n.value,\r\n.head {\r\n  display: block;\r\n  text-align: left;\r\n}\r\n\r\n.value {\r\n  font-size: 15px;\r\n\r\n}\r\n\r\n/* .div > span { display: inline-block; }\r\n.div { margin-left: 100px; } */\r\n\r\n.content {\r\n  text-align: left;\r\n}\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-detail/member-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"outer-grid\">\r\n\r\n\r\n  <div class=\"grid-item1\">\r\n    <img class=\"profile-image\" src=\"{{user.photoUrl ? user.photoUrl : '../../../assets/user.png'}}\" alt=\"{{user.firstName}}\">\r\n    \r\n    <div >\r\n        <button mat-button color=\"primary\"  (click)=\"sendLike(user.id)\"> Add to Favorite </button>\r\n    </div>\r\n    <!-- <div class=\"btn-group\">\r\n        <button mat-button  class=\"btn btn-success\"(click)=\"selectTab(3)\">Message</button>\r\n    </div> -->\r\n  </div>\r\n\r\n  <div class=\"grid-item2\">\r\n    <div>\r\n      <h3 class=\"head\">{{user.firstName}} {{user.lastName}}</h3>\r\n    </div>\r\n    <div>\r\n      <p class=\"value\">{{user.currentRole}}</p>\r\n    </div>\r\n    <!-- <div>\r\n      <p class=\"value\"> Department | </p>\r\n    </div> -->\r\n    <div>\r\n      <p class=\"value\"> Location | </p>\r\n    </div>\r\n    <div>\r\n      <p class=\"value\"> Member since {{user.created | date : 'mediumDate'}}</p>\r\n    </div>\r\n    <div>\r\n      <p class=\"interest\">{{user.introduction}}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"grid-item3\">\r\n    <div>\r\n      <span class=\"label\">EMAIL</span>\r\n      <p class=\"value\">{{user.email}}</p>\r\n      <mat-divider></mat-divider>\r\n    </div>\r\n    <div>\r\n      <span class=\"label\">Office</span>\r\n      <p class=\"value\">{{user.telephoneNumber}}, Extension: {{user.extension}}</p>\r\n      <mat-divider></mat-divider>\r\n    </div>\r\n    <div>\r\n      <span class=\"label\">Cellular</span>\r\n      <p class=\"value\">{{user.cellular}}</p>\r\n      <mat-divider></mat-divider>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"divider\">\r\n    <mat-divider></mat-divider>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"grid-item5\">\r\n    <mat-tab-group>\r\n      <mat-tab label=\"General\">\r\n        <span class=\"label\">first name:</span>\r\n        <p class=\"value\">{{user.firstName}}</p>\r\n        <span class=\"label\">last name:</span>\r\n        <p class=\"value\">{{user.lastName}}</p>\r\n\r\n        <span class=\"label\">Titles</span>\r\n        <p class=\"value\">Lead Engineer (April 02, 2016-Present)</p>\r\n        <p class=\"value\">Engineer(May 15,2010 - April 02, 2016)</p>\r\n\r\n        <span class=\"label\">Employment type</span>\r\n        <p class=\"value\">Full Time</p>\r\n      </mat-tab>\r\n\r\n\r\n      <mat-tab label=\"Send Messages\">\r\n          <h4> Description</h4>\r\n         <app-member-messages [userId]=\"user.id\"></app-member-messages>\r\n      </mat-tab>\r\n\r\n      <!-- <mat-tab label=\"Goals\">\r\n        <h4> Description</h4>\r\n        <p> {{user.interest}}</p>\r\n      </mat-tab> -->\r\n\r\n\r\n    </mat-tab-group>\r\n  </div>\r\n\r\n  <div>\r\n\r\n\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/members/member-detail/member-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_gallery__ = __webpack_require__("../../../../ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_gallery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_gallery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MemberDetailComponent = /** @class */ (function () {
    function MemberDetailComponent(authService, userService, alertify, route, snackBar, router) {
        //this.messages = [];
        // this.messages = [{id: 1, email: "k@d.com", telephoneNumber: 'text', extension: 'Hallo Welt!', cellular:"123456"}];
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.snackBar = snackBar;
        this.router = router;
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.messages = [{id: 1, email: "k@d.com", telephoneNumber: 'text', extension: 'Hallo Welt!', cellular:"123456"}];
        // let contact = [{email: this.user.contact[0].email}];
        // this.email = this.contact.email;
        // this.telephoneNumber = this.user.contact[0].telephoneNumber;
        // this.extension = this.user.contact[0].extension;
        this.route.data.subscribe(function (data) {
            _this.user = data["user"];
        });
        this.route.queryParams.subscribe(function (params) {
            var selectTab = params['tab'];
            _this.memberTabs.tabs[selectTab > 0 ? selectTab : 0].active = true;
        });
        this.galleryOptions = [
            {
                width: "500px",
                height: "500px",
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: __WEBPACK_IMPORTED_MODULE_4_ngx_gallery__["NgxGalleryAnimation"].Fade,
                preview: false
            }
        ];
        this.galleryImages = this.getImages();
    };
    MemberDetailComponent.prototype.getImages = function () {
        var imageUrls = [];
        for (var i = 0; i < this.user.photos.length; i++) {
            imageUrls.push({
                small: this.user.photos[i].url,
                medium: this.user.photos[i].url,
                big: this.user.photos[i].url,
                description: this.user.photos[i].description
            });
        }
        return imageUrls;
    };
    MemberDetailComponent.prototype.selectTab = function (tabId) {
        this.memberTabs.tabs[tabId].active = true;
    };
    // loaduser() {
    //   this.userService.getUser(+this.route.snapshot.params["id"]).subscribe(
    //     (user: User) => {
    //       this.user = user;
    //     },
    //     error => {
    //       this.alertify.error(error);
    //     }
    //   );
    // }
    MemberDetailComponent.prototype.sendLike = function (id) {
        var _this = this;
        this.userService
            .sendLike(this.authService.decodedToken.nameid, id)
            .subscribe(function (data) {
            _this.openSnackBar(_this.user.knownAs + " photo added to you favorite", "Navigate to your favorite list")
                .onAction()
                .subscribe(function () {
                _this.router.navigate(["/list"]);
            });
            //this.alertify.success('You have liked ' + this.user.knownAs);
        }, function (error) {
            _this.openSnackBar(_this.user.knownAs + " was already added to you favorite", "Navigate to your favorite list");
            //  .onAction().subscribe(() => {
            // this.router.navigate(['/list'])},
        });
    };
    MemberDetailComponent.prototype.openSnackBar = function (message, action) {
        return this.snackBar.open(message, action, {
            duration: 5000
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("memberTabs"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["e" /* TabsetComponent */])
    ], MemberDetailComponent.prototype, "memberTabs", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MemberDetailComponent.prototype, "contact", void 0);
    MemberDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-member-detail",
            template: __webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__services_User_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/member-edit/member-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-image {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.panel-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.panel-footer {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-edit/member-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <h1> {{user.knownAs}}'s Profile </h1>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n\r\n      <div class=\"alert alert-info\" [hidden] =\"!editForm.dirty\" >\r\n        <p>\r\n          <strong>Information</strong> You have made changes. Any unsaved changes will be lost</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"panel panel-default\">\r\n        <img class=\"profile-image thumbnail\" src=\"{{photoUrl}}\" alt=\"{{user.knownAs}}\">\r\n        <div class=\"panel-body\">\r\n          <div>\r\n            <strong>Location:</strong>\r\n            <P>{{user.city}}, {{user.country}} </P>\r\n          </div>\r\n          <div>\r\n            <strong> Age:</strong>\r\n            <P>{{user.age}} </P>\r\n          </div>\r\n          <div>\r\n            <strong>Last Active:</strong>\r\n            <P>{{user.lastActive | timeAgo}} </P>\r\n          </div>\r\n          <div>\r\n            <strong> Location:</strong>\r\n            <P>{{user.city}}</P>\r\n          </div>\r\n          <div>\r\n            <strong> Member Since:</strong>\r\n            <P>{{user.created | date : 'mediumDate'}} </P>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n          <button [disabled] =\"!editForm.dirty\"  form=\"editForm\" class=\"btn btn-success btn-block\">Save Changes</button>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"tab-panel\">\r\n        <tabset>\r\n\r\n          <tab heading=\"Edit Profile\">\r\n            <form #editForm=\"ngForm\" id =\"editForm\" (ngSubmit)=\"updateUser()\">\r\n              <h4> Description</h4>\r\n              <textarea name=\"introduction\" rows=\"6\" [(ngModel)]=\"user.introduction\" class=\"form-control\"></textarea>\r\n\r\n              <h4> Looking For</h4>\r\n              <textarea name=\"lookingFor\" rows=\"6\" [(ngModel)]=\"user.lookingFor\" class=\"form-control\"></textarea>\r\n              <h4> Interest</h4>\r\n              <textarea name=\"interest\" rows=\"6\" [(ngModel)]=\"user.interest\" class=\"form-control\"></textarea>\r\n              <h4>Location Details</h4>\r\n              <div class=\"form-inline\">\r\n\r\n                <label for=\"city\">City</label>\r\n                <input class=\"form-control\" type=\"text\" name=\"city\" [(ngModel)]=\"user.city\">\r\n                <label for=\"country\">Country</label>\r\n                <input class=\"form-control\" type=\"text\" name=\"country\" [(ngModel)]=\"user.country\">\r\n              </div>\r\n            </form>\r\n          </tab>\r\n          <tab heading=\"Edit Photos\">\r\n            <app-photo-editor [photos]=\"user.photos\" (getMemberPhotChange)=\"updateMainPhoto($event)\" ></app-photo-editor>\r\n          </tab>\r\n        </tabset>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div>\r\n"

/***/ }),

/***/ "../../../../../src/app/members/member-edit/member-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MemberEditComponent = /** @class */ (function () {
    function MemberEditComponent(userService, alertify, route, userservice, authservice) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.userservice = userservice;
        this.authservice = authservice;
    }
    MemberEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data["user"];
        });
        this.authservice.currentPhotUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    MemberEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService
            .updateUser(this.authservice.decodedToken.nameid, this.user)
            .subscribe(function (next) {
            _this.alertify.success("Profile Updated!");
            _this.editForm.reset(_this.user);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberEditComponent.prototype.updateMainPhoto = function (photoUrl) {
        this.user.photoUrl = photoUrl;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])("editForm"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* NgForm */])
    ], MemberEditComponent.prototype, "editForm", void 0);
    MemberEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "app-member-edit",
            template: __webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_User_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_User_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], MemberEditComponent);
    return MemberEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/member-list/member-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .equal {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  align-content: flex-end;\r\n  justify-content: space-around;\r\n\r\n\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style: none;\r\n  \r\n  display: -webkit-box;\r\n  display: -moz-box;\r\n  display: -ms-flexbox;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n}\r\n\r\n\r\nmat-sidenav {\r\n  width: 200px;\r\n} */\r\n\r\n/* .flex-container {\r\n  display: flex;\r\n   flex-flow: row wrap;\r\n\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n\r\n  justify-content: space-around;\r\n} */\r\n\r\n/* @media all and (max-width: 800px) {\r\n  .flex-container {\r\n      justify-content: flex-start;\r\n  }\r\n}\r\n\r\n.flex-item {\r\n  width: 200px;\r\n  height: 150px;\r\n  margin-top: 5px;\r\n\r\n  background: tomato;\r\n  color: white;\r\n  font-weight: bold;\r\n  font-size: 3em;\r\n  text-align: center;\r\n  line-height: 150px;\r\n} */\r\n\r\n/*\r\n.example-sidenav-content {\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.example-sidenav {\r\n  padding: 20px;\r\n} */\r\n\r\n/* \r\n.app-sidenav-container {\r\n  flex: 1;\r\n  position: fixed;\r\n  width: 100%;\r\n  min-width: 100%;\r\n  height: 100%;\r\n  min-height: 100%;\r\n}\r\n\r\n.app-sidenav-content {\r\n  display: flex;\r\n  height: 100%;\r\n  flex-direction: column;\r\n}\r\n\r\n.app-sidenav {\r\n  width: 240px;\r\n}\r\n\r\n.wrapper {\r\n  margin: 50px;\r\n}\r\n  \r\n\r\n\r\n.example-container {\r\n  flex: 1;\r\n  position: fixed;\r\n  width: 100%;\r\n  min-width: 100%;\r\n  height: 100%;\r\n  min-height: 100%;\r\n} */\r\n\r\n/* .example-sidenav-content {\r\n  display: flex;\r\n  height: 100%;\r\n  flex-direction: column;\r\n} */\r\n\r\n/* .button3 {\r\n  \r\n  background-color: #f44336;\r\n\r\n  border: none;\r\n  color: white;\r\n\r\n}\r\n\r\n\r\n.example-sidenav {\r\n  width: 300px;\r\n  \r\n} */\r\n\r\n/* .space-around-image{\r\n  margin: 15px;\r\n  border: 1px solid #ccc;\r\n  float: left;\r\n  width: 180px;\r\n} */\r\n\r\n.flex-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n\r\n}\r\n\r\n.flex-container > div {\r\n  background-color: #f1f1f1;\r\n  width: 250px;\r\n  margin: 10px;\r\n  text-align: left;\r\n  line-height: 10px;\r\n  font-size: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-list/member-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n  <div class=\"text-center\">\r\n    <!-- <h4>Your matches = {{pagination.totalItems}} found</h4> -->\r\n  </div>\r\n</div>\r\n\r\n<div  class=\"flex-container\" >\r\n  <div *ngFor=\"let user of users\" >\r\n    <app-member-card [user]=\"user\"></app-member-card>\r\n  </div>\r\n</div>\r\n          <div>\r\n            <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" (pageChanged)=\"pageChanged($event)\"\r\n                [(ngModel)]=\"pagination.currentPage\" class=\"pagination-sm\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\r\n                lastText=\"&raquo;\"></pagination>\r\n          </div>\r\n          \r\n"

/***/ }),

/***/ "../../../../../src/app/members/member-list/member-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SMALL_WIDTH_BREAKPOINT = 720;
var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(zone, userService, alertify, route) {
        var _this = this;
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.genderList = [{ value: 'male', display: 'Males' }, { value: 'female', display: 'Females' }];
        this.userParams = {};
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.mediaMatcher.addListener(function (mql) {
            return zone.run(function () { return _this.mediaMatcher = mql; });
        });
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data["users"].result;
            _this.pagination = data["users"].pagination;
        });
        //this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.orderBy = 'lastActive';
    };
    MemberListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService
            .getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams)
            .subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberListComponent.prototype.resetFilters = function () {
        // this.userParams.gender = this.user.gender === 'female' ? 'male' : 'female';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.loadUsers();
    };
    MemberListComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    MemberListComponent.prototype.isScreenSmall = function () {
        return this.mediaMatcher.matches;
    };
    MemberListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "app-member-list",
            template: __webpack_require__("../../../../../src/app/members/member-list/member-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-list/member-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_2__services_User_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/member-messages/member-messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-primary {\r\n    border: none;\r\n}\r\n\r\n.chat {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li {\r\n    margin-bottom: 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px dotted #b3a9a9;\r\n}\r\n\r\n.img-circle {\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.panel-body {\r\n    overflow-y: scroll;\r\n    height: 400px;\r\n    width: 100px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/member-messages/member-messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" flex>\r\n<div class=\"panel panel-primary\">\r\n  <div class=\"panel-body\">\r\n    <div *ngIf=\"messages?.length === 0\">\r\n      <p>No messages yet... say hi my using the message box below</p>\r\n    </div>\r\n\r\n    <ul class=\"chat\">\r\n      <li *ngFor=\"let message of messages\">\r\n        <!-- to them -->\r\n        <div *ngIf=\"message.senderId == userId\">\r\n          <span class=\"chat-img pull-left\">\r\n            <img src=\"{{message.senderPhotoUrl}}\" class=\"img-circle\">\r\n          </span>\r\n          <div class=\"chat-body\">\r\n            <div class=\"header\">\r\n              <strong class=\"primary-font\">{{message.senderKnownAs}}</strong>\r\n              <small class=\"text-muted pull-right\">\r\n                <span class=\"fa fa-clock-o\">{{message.messageSent | timeAgo}}</span>\r\n              </small>\r\n            </div>\r\n            <p>{{message.content}}</p>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <!-- to me -->\r\n        <div *ngIf=\"message.senderId != userId\">\r\n            <span class=\"chat-img pull-right\">\r\n              <img src=\"{{message.senderPhotoUrl}}\" class=\"img-circle\">\r\n            </span>\r\n            <div class=\"chat-body\">\r\n              <div class=\"header\">\r\n                  <small class=\"text-muted\">\r\n                      <span class=\"fa fa-clock-o\">{{message.messageSent | timeAgo}}</span>\r\n                      <span *ngIf=\"!message.isRead\" class=\"text-muted text-danger\">(Unread)</span>\r\n                      <span *ngIf=\"message.isRead\" class=\"text-muted text-success\">(Read {{message.dateRead | timeAgo}})</span>\r\n                    </small>\r\n                <strong class=\"primary-font pull-right\">{{message.senderKnownAs}}</strong>\r\n              </div>\r\n              <p>{{message.content}}</p>\r\n            </div>\r\n          </div>\r\n  \r\n      </li>\r\n    </ul>\r\n\r\n  </div>\r\n  <div class=\"panel-footer\">\r\n    <form #messageForm=\"ngForm\" (ngSubmit)= \"messageForm.valid && sendMessage()\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" \r\n          class=\"form-control input-sm\" \r\n          required\r\n          name=\"content\"\r\n          [(ngModel)]=\"newMessage.content\"\r\n          placeholder=\"send a private message\">\r\n        <span class=\"input-group-btn\">\r\n          <button class=\"btn btn-primary btn-sm\" [disabled]=\"!messageForm.valid\">Send</button>\r\n        </span>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/member-messages/member-messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MemberMessagesComponent = /** @class */ (function () {
    function MemberMessagesComponent(userService, alertify, authService) {
        this.userService = userService;
        this.alertify = alertify;
        this.authService = authService;
        this.newMessage = {};
    }
    MemberMessagesComponent.prototype.ngOnInit = function () {
        this.loadMessages();
    };
    MemberMessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        var currentUserId = +this.authService.decodedToken.nameid;
        this.userService.getMessageThread(this.authService.decodedToken.nameid, this.userId)
            .do(function (messages) {
            __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](messages, function (message) {
                if (message.isRead === false && message.recipientId === currentUserId) {
                    _this.userService.markAsRead(currentUserId, message.id);
                }
            });
        })
            .subscribe(function (messages) {
            _this.messages = messages;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberMessagesComponent.prototype.sendMessage = function () {
        var _this = this;
        this.newMessage.recipientId = this.userId;
        this.userService.sendMessage(this.authService.decodedToken.nameid, this.newMessage).subscribe(function (message) {
            _this.messages.unshift(message);
            _this.newMessage.content = '';
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MemberMessagesComponent.prototype, "userId", void 0);
    MemberMessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-messages',
            template: __webpack_require__("../../../../../src/app/members/member-messages/member-messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/member-messages/member-messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_User_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], MemberMessagesComponent);
    return MemberMessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/members/photo-editor/photo-editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img.thumbnail {\r\n  height: 100px;\r\n  width: 100px;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.nv-file-over {\r\n  border: dotted 3px red;\r\n}\r\n\r\ninput[type=file] {\r\n  color: transparent;\r\n}\r\n\r\n/* /* Default class applied to drop zones on over \r\n.another-file-over-class {\r\n  border: dotted 3px green;\r\n}\r\n.my-drop-zone {\r\n  border: dotted 3px lightgray;\r\n}\r\n*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/members/photo-editor/photo-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\" *ngFor=\"let photo of photos\">\r\n    <img class=\"thumbnail\" src=\"{{photo.url}}\" alt=\"\">\r\n    <div class=\"text-center\">\r\n      <button type=\"button\" class=\"btn btn-xs\"\r\n      (click) =\"setMainPhoto(photo)\" \r\n      [ngClass]=\"photo.isMain ?'btn-success active' : 'btn-default'\"\r\n      [disabled]=\"photo.isMain\">Main</button>\r\n      <button type=\"button\" class=\"btn btn-xs btn-danger\"(click)=\"deletePhoto(photo.id)\"[disabled]=\"photo.isMain\"><i class=\"fa fa-trash-o\"></i></button> \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n \r\n  <div class=\"col-md-3\">\r\n\r\n      <h3>Add Photos</h3>\r\n\r\n      <div ng2FileDrop\r\n           [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n           (fileOver)=\"fileOverBase($event)\"\r\n           [uploader]=\"uploader\"\r\n           class=\"well my-drop-zone\">\r\n         Drop photos to upload here\r\n      </div>\r\n\r\n\r\n\r\n      Multiple\r\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\r\n\r\n      Single\r\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\r\n  </div>\r\n\r\n  <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\r\n\r\n      <h3>Upload queue</h3>\r\n      <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n\r\n      <table class=\"table\">\r\n          <thead>\r\n          <tr>\r\n              <th width=\"50%\">Name</th>\r\n              <th>Size</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let item of uploader.queue\">\r\n              <td><strong>{{ item?.file?.name }}</strong></td>\r\n              <td  nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n          </tr>\r\n          </tbody>\r\n      </table>\r\n\r\n      <div>\r\n          <div>\r\n              Queue progress:\r\n              <div class=\"progress\">\r\n                  <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n              </div>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-success btn-s\"\r\n                  (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n              <span class=\"glyphicon glyphicon-upload\"></span> Upload\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n                  (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n              <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n                  (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n              <span class=\"glyphicon glyphicon-trash\"></span> Remove\r\n          </button>\r\n      </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/members/photo-editor/photo-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PhotoEditorComponent = /** @class */ (function () {
    function PhotoEditorComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl;
        this.getMemberPhotChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
    }
    PhotoEditorComponent.prototype.ngOnInit = function () {
        this.initializeUploader();
    };
    PhotoEditorComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    PhotoEditorComponent.prototype.initializeUploader = function () {
        var _this = this;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploader"]({
            url: this.baseUrl +
                "users/" +
                this.authService.decodedToken.nameid +
                "/photos",
            authToken: "Bearer " + localStorage.getItem("token"),
            isHTML5: true,
            allowedFileType: ["image"],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var res = JSON.parse(response);
                var photo = {
                    id: res.id,
                    url: res.url,
                    dateAdded: res.dateAdded,
                    description: res.description,
                    isMain: res.isMain
                };
                _this.photos.push(photo);
                if (photo.isMain) {
                    _this.authService.changeMemeberPhoto(photo.url);
                    _this.authService.currentUser.photoUrl = photo.url;
                    localStorage.setItem("user", JSON.stringify(_this.authService.currentUser));
                }
            }
        };
    };
    PhotoEditorComponent.prototype.setMainPhoto = function (photo) {
        var _this = this;
        this.userService
            .setMainPhoto(this.authService.decodedToken.nameid, photo.id)
            .subscribe(function () {
            _this.currentMain = __WEBPACK_IMPORTED_MODULE_6_underscore__["findWhere"](_this.photos, { isMain: true });
            _this.currentMain.isMain = false;
            photo.isMain = true;
            _this.authService.changeMemeberPhoto(photo.url);
            _this.authService.currentUser.photoUrl = photo.url;
            localStorage.setItem("user", JSON.stringify(_this.authService.currentUser));
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PhotoEditorComponent.prototype.deletePhoto = function (id) {
        var _this = this;
        this.alertify.confirm("Are you sure you want to this photo?", function () {
            _this.userService
                .deletePhoto(_this.authService.decodedToken.nameid, id)
                .subscribe(function () {
                _this.photos.splice(__WEBPACK_IMPORTED_MODULE_6_underscore__["findIndex"](_this.photos, { id: id }), 1);
                _this.alertify.success("Photo deleted");
            }, function (error) {
                _this.alertify.error("Photo delete failed");
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PhotoEditorComponent.prototype, "photos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PhotoEditorComponent.prototype, "getMemberPhotChange", void 0);
    PhotoEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "app-photo-editor",
            template: __webpack_require__("../../../../../src/app/members/photo-editor/photo-editor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/members/photo-editor/photo-editor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__services_User_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */]])
    ], PhotoEditorComponent);
    return PhotoEditorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n    margin-top: 15px;\r\n  }\r\n  \r\n  .img-circle {\r\n    max-height: 50px;\r\n  }\r\n  \r\n  .table > tbody > tr > td {\r\n    vertical-align: middle;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"btn-group\">\r\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Unread\" (click)=\"loadMessages()\">\r\n        <i class=\"fa fa-envelope\"></i> Unread\r\n      </button>\r\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Inbox\" (click)=\"loadMessages()\">\r\n        <i class=\"fa fa-envelope-open\"></i> Inbox\r\n      </button>\r\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Outbox\" (click)=\"loadMessages()\">\r\n        <i class=\"fa fa-paper-plane\"></i> Sent\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"messages.length == 0\">\r\n    <h3>No messages</h3>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"messages.length > 0\">\r\n    <table class=\"table table-hover\" style=\"cursor: pointer\">\r\n      <tr>\r\n        <th style=\"width: 40%\">Message</th>\r\n        <th style=\"width: 20%\">From / To</th>\r\n        <th style=\"width: 20%\">Sent / Received</th>\r\n        <th style=\"width: 20%\"></th>\r\n      </tr>\r\n      <tr *ngFor=\"let message of messages\" [routerLink]=\"['/members', \r\n        messageContainer == 'Outbox' ? message.recipientId : message.senderId]\" [queryParams]=\"{tab:'3'}\">\r\n        <td>{{message.content}}</td>\r\n        <td>\r\n          <div *ngIf=\"messageContainer != 'Outbox'\">\r\n            <img [src]=\"message.senderPhotoUrl\" class=\"img-circle\">\r\n            <strong>{{message.senderKnownAs}}</strong>\r\n          </div>\r\n          <div *ngIf=\"messageContainer == 'Outbox'\">\r\n            <img [src]=\"message.recipientPhotoUrl\" class=\"img-circle\">\r\n            <strong>{{message.recipientKnownAs}}</strong>\r\n          </div>\r\n        </td>\r\n        <td>{{message.messageSent | timeAgo}}</td>\r\n        <td>\r\n          <button class=\"btn btn-danger\" (click)=\"$event.stopPropagation()\" (click)=\"deleteMessage(message.id)\">Delete</button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n    <!-- <div class=\"text-center\">\r\n        <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" (pageChanged)=\"pageChanged($event)\"\r\n          [(ngModel)]=\"pagination.currentPage\" class=\"pagination-sm\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\r\n          lastText=\"&raquo;\"></pagination>\r\n      </div> -->\r\n\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(authService, alertify, route, userService) {
        this.authService = authService;
        this.alertify = alertify;
        this.route = route;
        this.userService = userService;
        this.messageContainer = 'Unread';
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.messages = data['messages'].result;
            _this.pagination = data['messages'].pagination;
        });
    };
    MessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer)
            .subscribe(function (res) {
            _this.messages = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MessagesComponent.prototype.deleteMessage = function (id) {
        var _this = this;
        this.alertify.confirm('Are you sure you want to delete the message?', function () {
            _this.userService.deleteMessage(id, _this.authService.decodedToken.nameid).subscribe(function () {
                _this.messages.splice(__WEBPACK_IMPORTED_MODULE_5_underscore__["findIndex"](_this.messages, { id: id }), 1);
                _this.alertify.success('message has been deleted');
            }, function (error) {
                _this.alertify.error('Failed to delete the message');
            });
        });
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_User_service__["a" /* UserService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nimg{\r\n    max-height:50px;\r\n    border:2px solid white;\r\n    display:inline;\r\n    border-radius: 50%;\r\n   \r\n}\r\n\r\n.example-spacer {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n  }\r\n\r\n.short-spacer {\r\n    -ms-flex-preferred-size: 10px;\r\n        flex-basis: 10px;\r\n  }\r\n\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n\r\n.example-container > * {\r\n    width: 100%;\r\n  }\r\n\r\n.example-right-align {\r\n    text-align: right;\r\n  }\r\n\r\ninput.example-right-align::-webkit-outer-spin-button,\r\n  input.example-right-align::-webkit-inner-spin-button {\r\n    display: none;\r\n  }\r\n\r\ninput.example-right-align {\r\n    -moz-appearance: textfield;\r\n  }\r\n\r\nmat-form-field.mat-form-field {\r\n    font-size: 14px;\r\n  }\r\n\r\na:link, a:visited {\r\n    color: white;\r\n    padding: 14px 25px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n}\r\n\r\n.signin, .register {\r\n  background-color: white;\r\n  color: black;\r\n  border: 2px solid white;\r\n  text-align: center;\r\n  border: none;\r\n  color: white;\r\n  padding: 4px 15px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.signinButton {background-color: #e7e7e7; color: black; border-radius: 12px; }\r\n\r\n/* Gray */\r\n\r\n.registerButton {background-color: #555555; border-radius: 12px;}\r\n\r\n/* Black */\r\n\r\n.signinButton:hover {\r\n  background-color:  #008CBA;\r\n  color: white;\r\n}\r\n\r\n.registerButton:hover {\r\n  background-color:   #363636;\r\n  color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n\r\n  <mat-toolbar color=\"primary\">\r\n\r\n    <div>\r\n      <button mat-button class=\"sidenav-toggle\">\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n      <span>DTG Vehicle Restoration</span>\r\n    </div>\r\n    <span class=\"example-spacer\"></span>\r\n\r\n    <div *ngIf=\"loggedIn()\">\r\n\r\n      <!-- <li>\r\n              <img src=\"{{photoUrl}}\" alt=\"\">\r\n            </li> -->\r\n      <!-- <li>\r\n              <a (click)=\"false\">Welcome, {{authService.decodedToken?.unique_name | titlecase}}</a>\r\n            </li> -->\r\n\r\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n        <img src=\"{{photoUrl}}\" alt=\"\">\r\n      </button>\r\n      <mat-menu #menu=\"matMenu\" yPosition=\"below\" [overlapTrigger]=\"false\">\r\n        <button mat-menu-item [routerLink]=\"['/member/edit']\">\r\n          <mat-icon>mode_edit</mat-icon>\r\n          <span>Profile</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"logout()\">\r\n          <mat-icon>play_for_work</mat-icon>\r\n          <span> Sign out </span>\r\n        </button>\r\n      </mat-menu>\r\n    </div>\r\n\r\n\r\n\r\n    <div *ngIf=\"!loggedIn()\">\r\n      <button class = \"register registerButton\" (click)= \"openRegisterDialog()\" >\r\n        Register\r\n      </button>\r\n    </div>\r\n\r\n    <div *ngIf=\"!loggedIn()\">\r\n        <button class = \"signin signinButton\" (click)= \"openSignInDialog()\" >\r\n          Sign in\r\n        </button>\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n    <!-- <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"example-form\" (ngSubmit)=\"login()\">\r\n      \r\n      \r\n      \r\n      \r\n      \r\n      <div class=\"form-group\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Username\" class=\"form-control\" required name=\"username\" [(ngModel)]=\"model.username\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" class=\"form-control\" required name=\"password\"\r\n            [(ngModel)]=\"model.password\">\r\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n        </mat-form-field>\r\n\r\n        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-success\">Sign in</button>\r\n      </div>\r\n    </form> -->\r\n\r\n\r\n    <!-- <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"example-form\" (ngSubmit)=\"login()\">\r\n      <div class=\"form-group\">\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Username\" class=\"form-control\" required name=\"username\" [(ngModel)]=\"model.username\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" class=\"form-control\" required name=\"password\"\r\n            [(ngModel)]=\"model.password\">\r\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n        </mat-form-field>\r\n\r\n        <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-success\">Sign in</button>\r\n      </div>\r\n    </form> -->\r\n  </mat-toolbar>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sign_in_dialog_sign_in_dialog_component__ = __webpack_require__("../../../../../src/app/sign-in-dialog/sign-in-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_dialog_register_dialog_component__ = __webpack_require__("../../../../../src/app/register-dialog/register-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertify, router, dialog, dialog2, snackBar) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.dialog = dialog;
        this.dialog2 = dialog2;
        this.snackBar = snackBar;
        this.hide = true;
        this.model = {};
        this.toggleSidenav = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]();
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentPhotUrl.subscribe(function (photoUrl) { return (_this.photoUrl = photoUrl); });
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (data) {
            _this.alertify.success("Login successful");
        }, function (error) {
            _this.alertify.error("Incorrect credential provided");
        }, function () {
            //this.router.navigate(["/members"]);
        });
    };
    NavComponent.prototype.logout = function () {
        this.authService.userToken = null;
        this.authService.currentUser = null;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.alertify.message("Logged out");
        this.router.navigate(["/home"]);
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent.prototype.openSignInDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__sign_in_dialog_sign_in_dialog_component__["a" /* SignInDialogComponent */], {
            width: "450px",
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.openSnackBar("Login successful", "");
            }
            else {
                console.log("Incorrect credential provided", "");
            }
        });
    };
    NavComponent.prototype.openRegisterDialog = function () {
        var dialogRef2 = this.dialog2.open(__WEBPACK_IMPORTED_MODULE_6__register_dialog_register_dialog_component__["a" /* RegisterDialogComponent */], {
            disableClose: true,
            width: "450px"
        });
    };
    NavComponent.prototype.openSnackBar = function (message, action) {
        return this.snackBar.open(message, action, {
            duration: 5000
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "toggleSidenav", void 0);
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: "app-nav",
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatSnackBar */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/paginations/paginations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paginations/paginations.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <nav *ngIf=\"totalItems > pageSize\">\r\n    <ul class=\"pagination\">\r\n        <li [class.disabled]=\"currentPage == 1\">\r\n            <a (click)=\"previous()\" aria-label=\"Previous\">\r\n            <span aria-hidden=\"true\">&laquo;</span>\r\n            </a>\r\n        </li>\r\n        <li [class.active]=\"currentPage == page\" *ngFor=\"let page of pages\" (click)=\"changePage(page)\">\r\n            <a>{{ page }}</a>\r\n        </li>\r\n        <li [class.disabled]=\"currentPage == pages.length\">\r\n            <a (click)=\"next()\" aria-label=\"Next\">\r\n            <span aria-hidden=\"true\">&raquo;</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</nav>  \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/paginations/paginations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationsComponent; });
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

var PaginationsComponent = /** @class */ (function () {
    function PaginationsComponent() {
        this.pageSize = 10;
        this.pageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.currentPage = 1;
    }
    PaginationsComponent.prototype.ngOnChanges = function () {
        this.currentPage = 1;
        var pagesCount = Math.ceil(this.totalItems / this.pageSize);
        this.pages = [];
        for (var i = 1; i <= pagesCount; i++)
            this.pages.push(i);
        console.log(this);
    };
    PaginationsComponent.prototype.changePage = function (page) {
        this.currentPage = page;
        this.pageChanged.emit(page);
    };
    PaginationsComponent.prototype.previous = function () {
        if (this.currentPage == 1)
            return;
        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    };
    PaginationsComponent.prototype.next = function () {
        if (this.currentPage == this.pages.length)
            return;
        this.currentPage++;
        console.log("next", this);
        this.pageChanged.emit(this.currentPage);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('total-items'),
        __metadata("design:type", Object)
    ], PaginationsComponent.prototype, "totalItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('page-size'),
        __metadata("design:type", Object)
    ], PaginationsComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('page-changed'),
        __metadata("design:type", Object)
    ], PaginationsComponent.prototype, "pageChanged", void 0);
    PaginationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-paginations',
            template: __webpack_require__("../../../../../src/app/paginations/paginations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/paginations/paginations.component.css")]
        })
    ], PaginationsComponent);
    return PaginationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register-dialog/register-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 70%;\r\n  }\r\n  \r\n  .signinButton {\r\n  background-color: #9d65ff;\r\n  color: white;;\r\n  border-radius: 12px;\r\n}\r\n  \r\n  .signinButton:hover {\r\n  background-color: #9d64ff;\r\n  color: white;\r\n}\r\n  \r\n  .cancelButton {\r\n  background-color: #ff425b;\r\n  color: #ffffff;\r\n  border-radius: 12px;\r\n}\r\n  \r\n  .cancelButton:hover {\r\n  background-color: #fc6a7e;\r\n  color: white;\r\n}\r\n  \r\n  .title {\r\n  width: 100%;\r\n  float: left;\r\n  line-height: 46px;\r\n  font-size: 34px;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n  color: #673ab7;\r\n  position: relative;\r\n}\r\n  \r\n  .mat-radio-inner-circle {\r\n  background-color: yellow;\r\n}\r\n  \r\n  .mat-radio-checked .mat-radio-outer-circle {\r\n  border-color: lime;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register-dialog/register-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n\r\n  <form [formGroup]='registerForm' (ngSubmit)=\"register()\" id=\"1\">\r\n    <h2 mat-dialog-title class=\"title\">Sign up</h2>\r\n    <!-- <h5 mat-dialog-title class=\"title\">Join us and share your favorite photo</h5> -->\r\n    <mat-dialog-content>\r\n      <!-- gender -->\r\n      <mat-radio-group class=\"example-radio-group\" formControlName=\"gender\">\r\n        <label class=\"control-label\" style=\"margin-right:10px\">I am a: </label>\r\n        <mat-radio-button value=\"male\">Male</mat-radio-button>\r\n        <mat-radio-button value=\"female\">Female</mat-radio-button>\r\n      </mat-radio-group>\r\n      <!-- username -->\r\n      <div>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"Username\" [(ngModel)]=\"model.username\" name=\"username\" formControlName=\"username\">\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <!-- firstname -->\r\n      <div>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"FirstName\" [(ngModel)]=\"model.firstname\" name=\"firstname\" formControlName=\"firstname\">\r\n        </mat-form-field>\r\n      </div>\r\n      <!-- lastname -->\r\n      <div>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput placeholder=\"LastName\" [(ngModel)]=\"model.lastname\" name=\"lastname\" formControlName=\"lastname\">\r\n        </mat-form-field>\r\n      </div>\r\n  \r\n        <div>\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Current Role\" [(ngModel)]=\"model.currentRole\" name=\"currentRole\" formControlName=\"currentRole\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        <!-- date of employment -->\r\n        <div>\r\n          <mat-form-field>\r\n            <input matInput [matDatepicker]=\"dp4\" placeholder=\"Date you purchased your car\" [(ngModel)]=\"model.dateOfEmployment\" name=\"dateOfEmployment\"\r\n              formControlName=\"dateOfEmployment\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"dp4\"></mat-datepicker-toggle>\r\n            <mat-datepicker #dp4 disabled=\"false\"></mat-datepicker>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <!-- <div>\r\n        <mat-form-field class=\"example-full-width\">\r\n          <input matInput #postalCode maxlength=\"5\" placeholder=\"Postal Code\" value=\"94043\">\r\n          <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\r\n        </mat-form-field>\r\n      </div> -->\r\n      <!-- </div> -->\r\n      <!-- password -->\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Enter your password\" [type]=\"hide ? 'password' : 'text'\" class=\"form-control\" required name=\"password\"\r\n            formControlName=\"password\" [(ngModel)]=\"model.password\">\r\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n        </mat-form-field>\r\n      </div>\r\n      <!-- confirm password -->\r\n      <div>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Confirm your password\" [type]=\"hideConfirm ? 'password' : 'text'\" class=\"form-control\" required\r\n            name=\"password\" formControlName=\"confirmPassword\" [(ngModel)]=\"model.confirmPassword\">\r\n          <mat-icon matSuffix (click)=\"hideConfirm = !hideConfirm\">{{hideConfirm ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n        </mat-form-field>\r\n      </div>\r\n    </mat-dialog-content>\r\n  </form>\r\n  <!-- <p> Form Value: {{registerForm.value | json}}</p>\r\n  <p> Form status: {{registerForm.status | json}}</p> -->\r\n  <!-- submit/cancel button -->\r\n  <mat-dialog-actions>\r\n    <button mat-button class=\"signinButton\" type=\"submit\" [disabled]=\"!registerForm.valid\" form=\"1\">\r\n      Get Started\r\n    </button>\r\n    <button mat-button class=\"cancelButton\" (click)=\"dismiss()\">\r\n      Cancel\r\n    </button>\r\n  </mat-dialog-actions>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register-dialog/register-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterDialogComponent = /** @class */ (function () {
    function RegisterDialogComponent(dialogRef, authService, alertify, fb, router) {
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.alertify = alertify;
        this.fb = fb;
        this.router = router;
        this.hide = true;
        this.hideConfirm = true;
        this.model = {};
    }
    RegisterDialogComponent.prototype.ngOnInit = function () {
        this.createRegisterForm();
    };
    RegisterDialogComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            gender: ["male"],
            username: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            firstname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            lastname: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            currentRole: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            // knownAs: ["", Validators.required],
            // dateOfBirth: [null, Validators.required],
            dateOfEmployment: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            // city: ["", Validators.required],
            // country: ["", Validators.required],
            password: [
                "",
                [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].maxLength(8)
                ]
            ],
            confirmPassword: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]
        }, { validator: this.passwordMatchValidator });
    };
    RegisterDialogComponent.prototype.passwordMatchValidator = function (g) {
        return g.get("password").value == g.get("confirmPassword").value
            ? null
            : { mismatch: true };
    };
    RegisterDialogComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
                _this.alertify.success("registration success");
                _this.dialogRef.close(null);
            }, function (error) {
                _this.alertify.error(error);
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(["/members"]);
                    // this.router.navigate(["/members/edit"]); 
                });
            });
        }
        //console.log(this.registerForm.value);
    };
    RegisterDialogComponent.prototype.dismiss = function () {
        this.dialogRef.close(null);
    };
    RegisterDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register-dialog',
            template: __webpack_require__("../../../../../src/app/register-dialog/register-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register-dialog/register-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterDialogComponent);
    return RegisterDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<form [formGroup] = 'registerForm' (ngSubmit)=\"register()\">\r\n\r\n  <h2 class=\"text-center text-primary\">Sign Up</h2>\r\n\r\n  <hr>\r\n  <!-- gender -->\r\n  <div class=\"form-group\">\r\n      <label class=\"control-label\" style=\"margin-right:10px\">I am a: </label>\r\n      <label class=\"radio-inline\">\r\n              <input type=\"radio\" value=\"male\" formControlName=\"gender\">Male\r\n            </label>\r\n      <label class=\"radio-inline\">\r\n                <input type=\"radio\" value=\"female\" formControlName=\"gender\">Female\r\n              </label>\r\n    </div>\r\n  \r\n  <!-- username -->\r\n  <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('username').errors && registerForm.get('username').touched}\">\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\" >\r\n    <span class=\"help-block\" *ngIf=\"registerForm.get('username').hasError('required') && registerForm.get('username').touched\">\r\n        Username is required\r\n      </span>\r\n  </div>\r\n\r\n<!-- knownAs -->\r\n\r\n<div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('knownAs').touched && registerForm.get('knownAs').hasError('required')}\">\r\n    <input class=\"form-control\" placeholder=\"Known as\" formControlName=\"knownAs\">\r\n    <span class=\"help-block\" *ngIf=\"registerForm.get('knownAs').touched && registerForm.get('knownAs').hasError('required')\">Known as is required</span>\r\n  </div>\r\n\r\n\r\n  <!-- date of birth -->\r\n\r\n  <!-- <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').hasError('required')}\">\r\n      <input class=\"form-control\" type=\"text\"  bsDatepicker [bsConfig]=\"bsConfig\"  placeholder=\"Date of Birth\" formControlName=\"dateOfBirth\">\r\n      <span class=\"help-block\" *ngIf=\"registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').hasError('required')\">Date of birth is required</span>\r\n    </div> -->\r\n\r\n\r\n<!-- city -->\r\n\r\n<div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('city').touched && registerForm.get('city').hasError('required')}\">\r\n    <input class=\"form-control\" placeholder=\"City\" formControlName=\"city\">\r\n    <span class=\"help-block\" *ngIf=\"registerForm.get('city').touched && registerForm.get('city').hasError('required')\">City is required</span>\r\n  </div>\r\n\r\n<!-- country -->\r\n\r\n  <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('country').touched && registerForm.get('country').hasError('required')}\">\r\n    <input class=\"form-control\" placeholder=\"Country\" formControlName=\"country\">\r\n    <span class=\"help-block\" *ngIf=\"registerForm.get('country').touched && registerForm.get('country').hasError('required')\">Country is required</span>\r\n  </div>\r\n\r\n    <!-- password -->\r\n\r\n  <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('password').errors && registerForm.get('password').touched}\">\r\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\r\n      <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('required') && registerForm.get('password').touched\">\r\n        Password is required\r\n      </span>\r\n      <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('minlength') && registerForm.get('password').touched\">\r\n        Password must be at least 4 characters\r\n      </span>\r\n      <span class=\"help-block\" *ngIf=\"registerForm.get('password').hasError('maxlength') && registerForm.get('password').touched\">\r\n        Password cannot exceed 8 characters\r\n      </span>\r\n    </div>\r\n\r\n    <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('confirmPassword').errors \r\n    && registerForm.get('confirmPassword').touched || registerForm.get('confirmPassword').touched \r\n    && registerForm.hasError('mismatch')}\">\r\n    <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"confirmPassword\">\r\n    <span class=\"help-block\" *ngIf=\"registerForm.get('confirmPassword').hasError('required') && registerForm.get('confirmPassword').touched\">\r\n      Confirm password is required\r\n    </span>\r\n    <span class=\"help-block\" *ngIf=\"registerForm.get('confirmPassword').touched \r\n        && registerForm.hasError('mismatch')\">\r\n      Confirm password must match password\r\n    </span>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"form-group text-center\">\r\n    <button class=\"btn btn-success\" [disabled]=\"!registerForm.valid\" type=\"submit\">Register</button>\r\n    <button class=\"btn btn-default\" type=\"button\" (click) =\"cancel()\">Cancel</button>\r\n  </div>\r\n</form> \r\n<!-- <p> Form Value: {{registerForm.value | json}}</p>\r\n<p> Form status: {{registerForm.status | json}}</p> -->"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    //bsConfig: Partial<BsDatepickerConfig>;
    function RegisterComponent(authService, alertify, fb, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.fb = fb;
        this.router = router;
        this.cancelRegister = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createRegisterForm();
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            gender: ["male"],
            username: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            knownAs: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            dateOfBirth: [null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            city: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            country: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required],
            password: [
                "",
                [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].maxLength(8)
                ]
            ],
            confirmPassword: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]
        }, { validator: this.passwordMatchValidator });
    };
    RegisterComponent.prototype.passwordMatchValidator = function (g) {
        return g.get("password").value == g.get("confirmPassword").value
            ? null
            : { mismatch: true };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
                _this.alertify.success("registration success");
            }, function (error) {
                _this.alertify.error(error);
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(["/members"]);
                    //this.router.navigate(["/member-edit"]);
                });
            });
        }
        console.log(this.registerForm.value);
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
        // this.alertify.warning("cancelled");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "app-register",
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_vehicle_view_vehicle_component__ = __webpack_require__("../../../../../src/app/view-vehicle/view-vehicle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resolvers_member_edit_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-edit.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resolvers_member_detail_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-detail.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__members_member_list_member_list_component__ = __webpack_require__("../../../../../src/app/members/member-list/member-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__members_member_detail_member_detail_component__ = __webpack_require__("../../../../../src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resolvers_member_list_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/member-list.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__members_member_edit_member_edit_component__ = __webpack_require__("../../../../../src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_prevent_unsaved_changes_guards__ = __webpack_require__("../../../../../src/app/_guards/prevent-unsaved-changes.guards.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__resolvers_lists_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/lists.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__resolvers_message_resolver__ = __webpack_require__("../../../../../src/app/_resolvers/message.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__vehicle_form_vehicle_form_component__ = __webpack_require__("../../../../../src/app/vehicle-form/vehicle-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__vehicle_list_vehicle_list_component__ = __webpack_require__("../../../../../src/app/vehicle-list/vehicle-list.component.ts");
















// export const appRoutes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full'},
//   { path: 'home', component: HomeComponent},
//   {
//       path: '',
//       runGuardsAndResolvers: 'always',
//       canActivate: [AuthGuard],
//       children: [
//           { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver} },
//           { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver} },
//           { path: 'member/edit', component: MemberEditComponent,
//               resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges] },
//           { path: 'messages', component: MessagesComponent, resolve: {messages: MessagesResolver}},
//           { path: 'list', component: ListComponent, resolve: {users: ListsResolver}},
//       ]
//   },
//   { path: '**', redirectTo: 'home', pathMatch: 'full'},
// ];
var appRoutes = [
    { path: "home", component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    {
        path: "",
        runGuardsAndResolvers: "always",
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'vehicles/new', component: __WEBPACK_IMPORTED_MODULE_14__vehicle_form_vehicle_form_component__["a" /* VehicleFormComponent */] },
            { path: 'vehicles/edit/:id', component: __WEBPACK_IMPORTED_MODULE_14__vehicle_form_vehicle_form_component__["a" /* VehicleFormComponent */] },
            { path: 'vehicles/:id', component: __WEBPACK_IMPORTED_MODULE_0__view_vehicle_view_vehicle_component__["a" /* ViewVehicleComponent */] },
            { path: 'vehicles', component: __WEBPACK_IMPORTED_MODULE_15__vehicle_list_vehicle_list_component__["a" /* VehicleListComponent */] },
            {
                path: "members",
                component: __WEBPACK_IMPORTED_MODULE_6__members_member_list_member_list_component__["a" /* MemberListComponent */],
                resolve: { users: __WEBPACK_IMPORTED_MODULE_9__resolvers_member_list_resolver__["a" /* MemberListResolver */] }
            },
            {
                path: "members/:id",
                component: __WEBPACK_IMPORTED_MODULE_8__members_member_detail_member_detail_component__["a" /* MemberDetailComponent */],
                resolve: { user: __WEBPACK_IMPORTED_MODULE_2__resolvers_member_detail_resolver__["a" /* MemberDetailResolver */] }
            },
            {
                path: "member/edit",
                component: __WEBPACK_IMPORTED_MODULE_10__members_member_edit_member_edit_component__["a" /* MemberEditComponent */],
                resolve: { user: __WEBPACK_IMPORTED_MODULE_1__resolvers_member_edit_resolver__["a" /* MemberEditResolver */] },
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_11__guards_prevent_unsaved_changes_guards__["a" /* PreventUnsavedChanges */]]
            },
            { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_5__messages_messages_component__["a" /* MessagesComponent */], resolve: { messages: __WEBPACK_IMPORTED_MODULE_13__resolvers_message_resolver__["a" /* MessagesResolver */] } },
            { path: "list", component: __WEBPACK_IMPORTED_MODULE_4__list_list_component__["a" /* ListComponent */], resolve: { users: __WEBPACK_IMPORTED_MODULE_12__resolvers_lists_resolver__["a" /* ListsResolver */] } }
        ]
    },
    { path: "**", redirectTo: "vehicles", pathMatch: "full" }
    //{ path: "**", redirectTo: "home", pathMatch: "full" }
];


/***/ }),

/***/ "../../../../../src/app/sign-in-dialog/sign-in-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n\r\n.example-right-align {\r\n  text-align: right;\r\n}\r\n\r\ninput.example-right-align::-webkit-outer-spin-button,\r\ninput.example-right-align::-webkit-inner-spin-button {\r\n  display: none;\r\n}\r\n\r\ninput.example-right-align {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.signinButton {\r\n  background-color: #9d65ff;\r\n  color: white;;\r\n  border-radius: 12px;\r\n}\r\n\r\n.signinButton:hover {\r\n  background-color: #9d64ff;\r\n  color: white;\r\n}\r\n\r\n.cancelButton {\r\n  background-color: #ff425b;\r\n  color: #ffffff;\r\n  border-radius: 12px;\r\n}\r\n\r\n.cancelButton:hover {\r\n  background-color: #fc6a7e;\r\n  color: white;\r\n}\r\n\r\n.title {\r\n  width: 100%;\r\n  float: left;\r\n  line-height: 46px;\r\n  font-size: 34px;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n  color: #673ab7;\r\n  position: relative;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-in-dialog/sign-in-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]='signInForm' (ngSubmit)=\"login()\" id=\"1\">\r\n  <h2 mat-dialog-title class =\"title\">Sign in</h2>\r\n  <mat-dialog-content>\r\n    <!-- Username and Password input -->\r\n    <div class=\"example-container\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Username\" [(ngModel)]=\"model.username\" formControlName=\"username\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" class=\"form-control\" required name=\"password\"\r\n          [(ngModel)]=\"model.password\" formControlName=\"password\">\r\n        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n      </mat-form-field>\r\n    </div>\r\n  </mat-dialog-content>\r\n</form>\r\n<!-- submit/cancel button -->\r\n<mat-dialog-actions>\r\n  <button mat-button class =\"signinButton\"  [disabled]=\"!signInForm.valid\" type=\"submit\" form=\"1\">\r\n    Sign in\r\n  </button>\r\n  <button mat-button  class =\"cancelButton\"  (click)=\"dismiss()\">\r\n    Cancel\r\n  </button>\r\n</mat-dialog-actions>\r\n\r\n<!-- \r\n<p> Form Value: {{signInForm.value | json}}</p>\r\n<p> Form status: {{signInForm.status | json}}</p> -->"

/***/ }),

/***/ "../../../../../src/app/sign-in-dialog/sign-in-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignInDialogComponent = /** @class */ (function () {
    function SignInDialogComponent(snackBar, dialogRef, authService, alertify, router, fb) {
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.fb = fb;
        this.hide = true;
        this.model = {};
    }
    SignInDialogComponent.prototype.ngOnInit = function () {
        this.createSignInForm();
    };
    SignInDialogComponent.prototype.createSignInForm = function () {
        this.signInForm = this.fb.group({
            username: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required,]
        });
    };
    SignInDialogComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (data) {
            _this.dialogRef.close(true);
        }, function (error) {
            console.log("Incorrect credential provided");
            //this.alertify.error("Incorrect credential provided"); 
        }, function () {
            _this.router.navigate(["/vehicles"]);
        });
    };
    SignInDialogComponent.prototype.dismiss = function () {
        this.dialogRef.close(null);
    };
    SignInDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "app-sign-in-dialog",
            template: __webpack_require__("../../../../../src/app/sign-in-dialog/sign-in-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sign-in-dialog/sign-in-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */]])
    ], SignInDialogComponent);
    return SignInDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vehicle-form/vehicle-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "article {\r\n  display: grid;\r\n  grid-template-columns: \r\n    [full-start] minmax(1em, 1fr) \r\n    [main-start] minmax(0, 96em) [main-end]\r\n    minmax(1em, 1fr) [full-end];\r\n  grid-gap: 1em;\r\n}\r\n\r\nsection {\r\n  grid-column: main;\r\n}\r\n\r\nfigure {\r\n  grid-column: full;\r\n}\r\n\r\nbody {\r\n  padding: 2em 0;\r\n}\r\n\r\narticle > * {\r\n  background-color: #eaeaea;\r\n  padding: 2em;\r\n}\r\n\r\nfigure {\r\n  text-align: center;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\nhr {\r\n    display: block;\r\n    position: relative;\r\n    padding: 0;\r\n    margin: 8px auto;\r\n    height: 0;\r\n    width: 100%;\r\n    max-height: 0;\r\n    font-size: 1px;\r\n    line-height: 0;\r\n    clear: both;\r\n    border: none;\r\n    border-top: 1px solid #aaaaaa;\r\n    border-bottom: 1px solid #ffffff;\r\n }\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 70%;\r\n}\r\n\r\n.signinButton {\r\nbackground-color: #9d65ff;\r\ncolor: white;;\r\nborder-radius: 12px;\r\n}\r\n\r\n.signinButton:hover {\r\nbackground-color: #9d64ff;\r\ncolor: white;\r\n}\r\n\r\n.cancelButton {\r\nbackground-color: #ff425b;\r\ncolor: #ffffff;\r\nborder-radius: 12px;\r\n}\r\n\r\n.cancelButton:hover {\r\nbackground-color: #fc6a7e;\r\ncolor: white;\r\n}\r\n\r\n.title {\r\nwidth: 100%;\r\nfloat: left;\r\nline-height: 46px;\r\nfont-size: 34px;\r\nfont-weight: 700;\r\nletter-spacing: 2px;\r\ncolor: #673ab7;\r\nposition: relative;\r\n}\r\n\r\n.mat-radio-inner-circle {\r\nbackground-color: yellow;\r\n}\r\n\r\n.mat-radio-checked .mat-radio-outer-circle {\r\nborder-color: lime;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle-form/vehicle-form.component.html":
/***/ (function(module, exports) {

module.exports = "  <article>\r\n      <section>\r\n\r\n          <h2 mat-dialog-title class=\"title\">Vehicle Project</h2>\r\n          <p>\r\n            <!-- {{ vehicle | json }} -->\r\n          </p>\r\n          <hr>\r\n          <form #f=\"ngForm\" (ngSubmit)=\"submit()\">\r\n            \r\n            <div *ngIf= \"!this.vehicle.id\">\r\n            <div class=\"form-group\">\r\n              <label for=\"make\">Make</label>\r\n              <select id=\"make\" class=\"form-control\" (change)=\"onMakeChange()\" [(ngModel)]=\"vehicle.makeId\" name=\"makeId\" required #make=\"ngModel\">\r\n                <option value=\"\"></option>\r\n                <option *ngFor=\"let m of makes\" value=\"{{ m.id }}\">{{ m.name }}</option>\r\n              </select>\r\n              <div class=\"alert alert-danger\" *ngIf=\"make.touched && !make.valid\">Please specify the make.</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"model\">Model</label>\r\n              <select [attr.readonly]= \"isReadOnly\"id=\"model\" class=\"form-control\" [(ngModel)]=\"vehicle.modelId\" name=\"modelId\" required #model=\"ngModel\">\r\n                <option value=\"\"></option>\r\n                <option *ngFor=\"let m of models\" value=\"{{ m.id }}\">{{ m.name }}</option>\r\n              </select>\r\n              <div class=\"alert alert-danger\" *ngIf=\"model.touched && !model.valid\">Please specify the model.</div>\r\n            </div>\r\n            \r\n            <!-- <mat-radio-group class=\"radio-inline\">\r\n            <label for=\"registered\" class=\"radio-inline\" class=\"control-label\" style=\"margin-right:10px\">Is this vehicle registered/insured? </label>\r\n            <mat-radio-button name=\"isRegistered\" id=\"registered\" [value]=\"true\" [(ngModel)]=\"vehicle.isRegistered\">Yes</mat-radio-button>\r\n            <mat-radio-button  ame=\"isRegistered\" id=\"notRegistered\" [value]=\"false\" [(ngModel)]=\"vehicle.isRegistered\" >No</mat-radio-button>\r\n          </mat-radio-group> -->\r\n\r\n\r\n            <p>Is this vehicle registered/insured?</p>\r\n            <label for=\"registered\" class=\"radio-inline\">\r\n              <input  type=\"radio\" name=\"isRegistered\" id=\"registered\" [value]=\"true\" [(ngModel)]=\"vehicle.isRegistered\"> Yes\r\n            </label>\r\n            <label for=\"notRegistered\" class=\"radio-inline\">\r\n              <input  type=\"radio\" name=\"isRegistered\" id=\"notRegistered\" [value]=\"false\" [(ngModel)]=\"vehicle.isRegistered\"> No\r\n            </label>\r\n\r\n            \r\n            <h4  >Would you like any additional upgrades or mods to your Vehicle?</h4>\r\n            <div *ngFor=\"let f of features\" class=\"checkbox\">\r\n              <label for=\"feature{{ f.id }}\">\r\n                <input  type=\"checkbox\" id=\"feature{{ f.id }}\" (change)=\"onFeatureToggle(f.id, $event)\" [checked]=\"vehicle.features.includes(f.id)\"> {{ f.name }}\r\n              </label>\r\n            </div>\r\n          \r\n          </div>\r\n\r\n            <h4>Details</h4>\r\n            <div class=\"form-group\" *ngIf= \"!this.vehicle.id\">\r\n                <label for=\"projectBudget\">Budget</label>\r\n                <input [attr.readonly]= \"isReadOnly\" id=\"projectBudget\" type=\"number\"  min= \"1\"  class=\"form-control\"  \r\n                placeholder=\"How much are you willing to spend on the project?\" [(ngModel)]=\"vehicle.projectBudget\" name=\"projectBudget\" required #projectBudget=\"ngModel\">\r\n                \r\n                <div class=\"alert alert-danger\" *ngIf=\"projectBudget.touched && !projectBudget.valid\">Please specify your budget.</div>\r\n            </div>\r\n          \r\n            \r\n          \r\n           \r\n           \r\n          \r\n          <!--   <div class=\"input-group\">\r\n              <span class=\"input-group-addon\">$</span>\r\n              <input id=\"contactPhone\" type=\"number\" value = \"1000\"  min= \"0\" step= \"0.01\" data-number-to-fixed=\"2\" data-number-stepfactor=\"100\" class=\"form-control\"  placeholder=\"Project Budget\" [(ngModel)]=\"vehicle.contact.phone\" name=\"contactPhone\" required #contactPhone=\"ngModel\">\r\n              <div class=\"alert alert-danger\" *ngIf=\"contactPhone.touched && !contactPhone.valid\">Please specify your budget.</div>\r\n            </div> -->\r\n          \r\n          <!--  <div class=\"input-group\"> \r\n                <span class=\"input-group-addon\">$</span>\r\n                <input type=\"number\" placeholder=\"Price\" min=\"0\" step=\"0.01\" data-number-to-fixed=\"2\" data-number-stepfactor=\"100\" class=\"form-control currency\" id=\"c2\" />\r\n            </div>   -->\r\n          \r\n            <!-- <h4>When will the biding end?</h4>\r\n            <div>\r\n                <mat-form-field>\r\n                  <input  [attr.readonly]= \"isReadOnly\" matInput [matDatepicker]=\"dp4\" placeholder=\"Project end date\" [(ngModel)]=\"vehicle.endDate\" name=\"ProjectEndDate\"\r\n                    formControlName=\"ProjectEndDate\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"dp4\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #dp4 disabled=\"false\"></mat-datepicker>\r\n                </mat-form-field>\r\n              </div> -->\r\n\r\n\r\n          \r\n            <h4>Preferred Contact Information? </h4>\r\n\r\n\r\n            <div class=\"form-group\">\r\n                  <label for=\"contactName\">Name for the Bid (required)</label>\r\n                  <input [attr.readonly]= \"isReadOnly\" id=\"contactName\" type=\"text\" class=\"form-control\"  placeholder= \"Yes, can give a nickname to keep you anonymity\" \r\n                  [(ngModel)]=\"vehicle.contact.name\" name=\"contactName\" required #contactName=\"ngModel\">\r\n                 \r\n                  <div class=\"alert alert-danger\" *ngIf=\"contactName.touched && !contactName.valid\">Please specify the Vehicle Customization Description.</div>\r\n                </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"contactPhone\">Phone number</label>\r\n                <input [attr.readonly]= \"isReadOnly\" id=\"contactPhone\" type=\"number\"  data-number-to-fixed=\"2\" \r\n                class=\"form-control\"  placeholder=\" Yes, you can make the listing for a friend\" [(ngModel)]=\"vehicle.contact.phone\" name=\"contactPhone\" required #contactPhone=\"ngModel\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"contactPhone.touched && !contactPhone.valid\">Please specify your budget.</div>\r\n              </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"contactEmail\">Email address</label>\r\n              <input [attr.readonly]= \"isReadOnly\" id=\"contactEmail\" type=\"text\" class=\"form-control\" placeholder=\"\" [(ngModel)]=\"vehicle.contact.email\" name=\"contactEmail\">\r\n             \r\n              \r\n              \r\n           \r\n              <hr>\r\n\r\n              <h4>Bidding Details</h4>\r\n              <ul>\r\n                <li>Starting Bid: ${{ vehicle.projectBudget }}</li>\r\n                <li>Current Bid: ${{ vehicle.lowestProjectBid }}</li>\r\n                \r\n                <!-- <li>Bid start date: {{vehicle?.projectStartDate }}</li>\r\n                <li>Last day to Bid: {{ vehicle?.projectStartDate }}</li> -->\r\n               \r\n              </ul>\r\n\r\n\r\n\r\n              <div class=\"form-group\" *ngIf=\"this.vehicle.id \">\r\n                  <label for=\"lowestProjectBid\">Make a Bid</label>\r\n                  <input id=\"lowestProjectBid\" type=\"number\"   min= \"1\" step= \"0.01\" data-number-to-fixed=\"2\"  class=\"form-control\"  \r\n                  placeholder=\"Bid\" [(ngModel)]=\"vehicle.lowestProjectBid\" name=\"lowestProjectBid\" required #lowestProjectBid =\"ngModel\">\r\n                \r\n                  <div class=\"alert alert-danger\" *ngIf=\"lowestProjectBid.touched && !lowestProjectBid.valid\">Please specify your bid.</div>\r\n              </div>\r\n\r\n            </div>\r\n            <button class=\"btn btn-primary\">Save</button>\r\n\r\n    </form>\r\n  </section>\r\n     \r\n    </article>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/vehicle-form/vehicle-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__ = __webpack_require__("../../../../../src/app/_services/alertify.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__ = __webpack_require__("../../../../../src/app/_services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_forkJoin__ = __webpack_require__("../../../../rxjs/add/Observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_Observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import _ = require('underscore');



var VehicleFormComponent = /** @class */ (function () {
    function VehicleFormComponent(authservice, route, router, authService, userservice, alertify, vehicleService, alertifyService) {
        var _this = this;
        this.authservice = authservice;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.userservice = userservice;
        this.alertify = alertify;
        this.vehicleService = vehicleService;
        this.alertifyService = alertifyService;
        this.vehicle = {
            id: 0,
            createdByUserId: this.authService.currentUser.id,
            projectBudget: 0.00,
            endDate: new Date('2018-11-03'),
            lowestProjectBid: 0,
            makeId: 0,
            modelId: 0,
            isRegistered: false,
            features: [],
            contact: {
                name: '',
                email: '',
                phone: '',
            }
        };
        route.params.subscribe(function (p) {
            _this.vehicle.id = +p['id'] || 0;
        });
        this.vehicle.createdByUserId = (this.vehicle.id) ?
            this.vehicle.createdByUserId : this.authService.currentUser.id;
        if (this.vehicle.id)
            this.isReadOnly = true;
    }
    VehicleFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        new Date().toDateString();
        this.route.data.subscribe(function (data) {
            _this.user = data["user"];
        });
        if (this.vehicle.id)
            this.isReadOnly = true;
        var storedValue = this.vehicle.lowestProjectBid;
        this.vehicle.createdByUserId = (this.vehicle.id) ? this.vehicle.createdByUserId : this.authService.currentUser.id;
        this.authService.currentUser.id;
        this.route.data.subscribe(function (data) {
            _this.user = data["user"];
        });
        this.authservice.currentPhotUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
        var sources = [
            this.vehicleService.getMakes(),
            this.vehicleService.getFeatures(),
        ];
        if (this.vehicle.id)
            sources.push(this.vehicleService.getVehicle(this.vehicle.id));
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].forkJoin(sources).subscribe(function (data) {
            _this.makes = data[0];
            _this.features = data[1];
            if (_this.vehicle.id) {
                _this.setVehicle(data[2]);
                _this.populateModels();
            }
        }, function (err) {
            if (err.status == 404)
                _this.router.navigate(['/home']);
        });
    };
    VehicleFormComponent.prototype.setVehicle = function (v) {
        this.vehicle.id = v.id;
        //this.vehicle.createdByUserId = this.authService.currentUser.id;
        this.vehicle.projectBudget = v.projectBudget;
        this.vehicle.lowestProjectBid = v.lowestProjectBid;
        this.vehicle.makeId = v.make.id;
        this.vehicle.modelId = v.model.id;
        this.vehicle.isRegistered = v.isRegistered;
        this.vehicle.contact = v.contact;
        this.vehicle.features = __WEBPACK_IMPORTED_MODULE_6_underscore__["pluck"](v.features, 'id');
    };
    // loaduser() {
    //   this.userService.getUser(+this.route.snapshot.params["id"]).subscribe(
    //     (user: User) => {
    //       this.user = user;
    //     },
    //     error => {
    //       this.alertify.error(error);
    //     }
    //   );
    // }
    VehicleFormComponent.prototype.onMakeChange = function () {
        this.populateModels();
        delete this.vehicle.modelId;
    };
    VehicleFormComponent.prototype.populateModels = function () {
        var _this = this;
        var selectedMake = this.makes.find(function (m) { return m.id == _this.vehicle.makeId; });
        this.models = selectedMake ? selectedMake.models : [];
    };
    VehicleFormComponent.prototype.onFeatureToggle = function (featureId, $event) {
        if ($event.target.checked)
            this.vehicle.features.push(featureId);
        else {
            var index = this.vehicle.features.indexOf(featureId);
            this.vehicle.features.splice(index, 1);
        }
    };
    VehicleFormComponent.prototype.submit = function () {
        var _this = this;
        if (this.vehicle.lowestProjectBid >= this.vehicle.projectBudget)
            throw new Error("Your Bid cannot be higher than the current bid");
        this.vehicle.createdByUserId = (this.vehicle.id) ? this.vehicle.createdByUserId : this.authService.currentUser.id;
        var result$ = (this.vehicle.id) ? this.vehicleService.update(this.vehicle) : this.vehicleService.create(this.vehicle);
        result$.subscribe(function (vehicle) {
            _this.router.navigate(['/vehicles/', vehicle.id]);
        });
    };
    VehicleFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-vehicle-form',
            template: __webpack_require__("../../../../../src/app/vehicle-form/vehicle-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vehicle-form/vehicle-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__services_User_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */],
            __WEBPACK_IMPORTED_MODULE_2__services_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_0__services_alertify_service__["a" /* AlertifyService */]])
    ], VehicleFormComponent);
    return VehicleFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vehicle-list/vehicle-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "article {\r\n    display: grid;\r\n    grid-template-columns: \r\n      [full-start] minmax(1em, 1fr) \r\n      [main-start] minmax(0, 96em) [main-end]\r\n      minmax(1em, 1fr) [full-end];\r\n    grid-gap: 1em;\r\n  }\r\n  \r\n  section {\r\n    grid-column: main;\r\n  }\r\n  \r\n  figure {\r\n    grid-column: full;\r\n  }\r\n  \r\n  body {\r\n    padding: 2em 0;\r\n  }\r\n  \r\n  article > * {\r\n    background-color: #eaeaea;\r\n    padding: 2em;\r\n  }\r\n  \r\n  figure {\r\n    text-align: center;\r\n  }\r\n  \r\n  img {\r\n    max-width: 100%;\r\n  }\r\n  \r\n  hr {\r\n      display: block;\r\n      position: relative;\r\n      padding: 0;\r\n      margin: 8px auto;\r\n      height: 0;\r\n      width: 100%;\r\n      max-height: 0;\r\n      font-size: 1px;\r\n      line-height: 0;\r\n      clear: both;\r\n      border: none;\r\n      border-top: 1px solid #aaaaaa;\r\n      border-bottom: 1px solid #ffffff;\r\n   }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vehicle-list/vehicle-list.component.html":
/***/ (function(module, exports) {

module.exports = "<article>\r\n    <section>\r\n        <h2>Vehicle Projects</h2>\r\n        <p>\r\n          <a [routerLink]=\"['/vehicles/new']\" class=\"btn btn-primary\">Add New Listing</a>\r\n        </p>\r\n        <div class=\"well\">\r\n          <div class=\"form-group\">\r\n            <label for=\"make\">Filter </label>\r\n            <select id=\"make\" class=\"form-control\" [(ngModel)]=\"query.makeId\" (change)=\"onFilterChange()\">\r\n              <option value=\"\"></option>\r\n              <option *ngFor=\"let m of makes\" value=\"{{ m.id }}\">{{ m.name }}</option>\r\n            </select>\r\n          </div>\r\n          <button class=\"btn btn-default\" (click)=\"resetFilter()\">Reset</button>\r\n        </div>\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th *ngFor=\"let c of columns\">\r\n                <div *ngIf= \"!!c.isSortable\" (click)=\"sortBy(!!c.key)\">\r\n                  {{!!c.title }}\r\n                  <i *ngIf=\"query.sortBy === !!c.key\" \r\n                    class=\"fa\"\r\n                    [class.fa-sort-asc]=\"query.isSortAscending\"\r\n                    [class.fa-sort-desc]=\"!query.isSortAscending\"\r\n                  ></i>\r\n                </div>\r\n                <div *ngIf=\"!c.isSortable\">\r\n                  {{!!c.title }}\r\n                </div>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let v of queryResult.items\">\r\n              <td>{{ v.id }}</td>\r\n              <td>{{ v.make.name }}</td>\r\n              <td>{{ v.model.name }}</td>\r\n              <td>{{ v.contact.name}}</td>\r\n              \r\n              <td>\r\n                <a [routerLink]=\"['/vehicles/', v.id]\">View/Bid</a>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n</section>\r\n  </article>\r\n\r\n\r\n<app-paginations [total-items]=\"queryResult.totalItems\" [page-size]=\"query.pageSize\" (page-changed)=\"onPageChange($event)\"><app-paginations>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/vehicle-list/vehicle-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__ = __webpack_require__("../../../../../src/app/_services/vehicle.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleListComponent = /** @class */ (function () {
    function VehicleListComponent(vehicleService) {
        this.vehicleService = vehicleService;
        this.PAGE_SIZE = 10;
        this.queryResult = {};
        this.query = {
            pageSize: this.PAGE_SIZE
        };
        /* columns = [
          { title: 'Id' },
          { title: 'Contact Name', key: 'contactName', isSortable: true },
          { title: 'Make', key: 'make', isSortable: true },
          { title: 'Model', key: 'model', isSortable: true },
          { }
        ];
       */
        this.columns = [
            { title: 'Id' },
            { title: 'Make', key: 'make', isSortable: true },
            { title: 'Model', key: 'model', isSortable: true },
            { title: 'Contact Name', key: 'contactName', isSortable: true },
            {}
        ];
    }
    VehicleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicleService.getMakes()
            .subscribe(function (makes) { return _this.makes = makes; });
        this.populateVehicles();
    };
    VehicleListComponent.prototype.populateVehicles = function () {
        var _this = this;
        this.vehicleService.getVehicles(this.query)
            .subscribe(function (result) { return _this.queryResult = result; });
    };
    VehicleListComponent.prototype.onFilterChange = function () {
        this.query.page = 1;
        this.populateVehicles();
    };
    VehicleListComponent.prototype.resetFilter = function () {
        this.query = {
            page: 1,
            pageSize: this.PAGE_SIZE
        };
        this.populateVehicles();
    };
    VehicleListComponent.prototype.sortBy = function (columnName) {
        if (this.query.sortBy === columnName) {
            this.query.isSortAscending = !this.query.isSortAscending;
        }
        else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }
        this.populateVehicles();
    };
    VehicleListComponent.prototype.onPageChange = function (page) {
        this.query.page = page;
        this.populateVehicles();
    };
    VehicleListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vehicle-list',
            template: __webpack_require__("../../../../../src/app/vehicle-list/vehicle-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vehicle-list/vehicle-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_vehicle_service__["a" /* VehicleService */]])
    ], VehicleListComponent);
    return VehicleListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view-vehicle/view-vehicle.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "article {\r\n    display: grid;\r\n    grid-template-columns: \r\n      [full-start] minmax(1em, 1fr) \r\n      [main-start] minmax(0, 96em) [main-end]\r\n      minmax(1em, 1fr) [full-end];\r\n    grid-gap: 1em;\r\n  }\r\n  \r\n  section {\r\n    grid-column: main;\r\n  }\r\n  \r\n  figure {\r\n    grid-column: full;\r\n  }\r\n  \r\n  body {\r\n    padding: 2em 0;\r\n  }\r\n  \r\n  article > * {\r\n    background-color: #eaeaea;\r\n    padding: 2em;\r\n  }\r\n  \r\n  figure {\r\n    text-align: center;\r\n  }\r\n  \r\n  img {\r\n    max-width: 100%;\r\n  }\r\n  \r\n  hr {\r\n      display: block;\r\n      position: relative;\r\n      padding: 0;\r\n      margin: 8px auto;\r\n      height: 0;\r\n      width: 100%;\r\n      max-height: 0;\r\n      font-size: 1px;\r\n      line-height: 0;\r\n      clear: both;\r\n      border: none;\r\n      border-top: 1px solid #aaaaaa;\r\n      border-bottom: 1px solid #ffffff;\r\n   }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-vehicle/view-vehicle.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<article>\r\n    <section>\r\n        <h1>Vehicle</h1>\r\n   <!--    <p>\r\n        {{ vehicle | json }}\r\n      </p> -->\r\n<form #f=\"ngForm\" (ngSubmit)= \"submit()\" novalidate *ngIf=\"vehicle\">\r\n<div>\r\n\r\n  <mat-tab-group>\r\n<mat-tab label=\"Basic\">\r\n  <h2>Basics</h2>\r\n  <ul>\r\n    <li>Make: {{ vehicle.make.name }}</li>\r\n    <li>Model: {{ vehicle.model.name }}</li>\r\n    <li>Registered: {{ vehicle.isRegistered ? 'Yes' : 'No' }}\r\n  </ul>\r\n  <mat-divider> </mat-divider>\r\n  <h2>Features</h2>\r\n  <ul>\r\n    <li *ngFor=\"let f of vehicle.features\">{{f.name }}</li>\r\n  </ul>\r\n  <!-- <h2>Contact</h2>\r\n  <ul>\r\n    <li>Contact Name: {{ vehicle.contact.name }}</li>\r\n    <li>Contact Phone: {{ vehicle.contact.phone }}</li>\r\n    <li>Contact Email: {{ vehicle.contact.email }}</li>\r\n  </ul> -->\r\n  <mat-divider> </mat-divider>\r\n  <h4 *ngIf=\"vehicle.projectBudget\">Bidding Details</h4>\r\n  <ul>\r\n    <li>Starting Bid: {{ vehicle.projectBudget | currency :'USD':'3.-22'}}</li>\r\n    <li>Current Bid: {{ vehicle.lowestProjectBid | currency :'USD':'3.-22' }}</li>\r\n    <li>The Bidding Started {{vehicle.projectStartDate | timeAgo}} (Bidding will last for two days)</li>\r\n    <li *ngIf=\"isBiddingDone\"> Bidding will last for two days </li>\r\n    <!-- <li> Bid leader/winner is : {{vehicle.contact.name}}</li> -->\r\n    <!-- {{vehicle.projectEndDate | date }}(all biiding ends two days) -->\r\n\r\n  </ul>\r\n<mat-divider> </mat-divider>\r\n<p></p>\r\n  <p>\r\n    <!-- <a class=\"btn btn-primary\" (click)= \"postbid()\">Make a Bid</a> -->\r\n    <a class=\"btn btn-primary\" [routerLink]=\"['/vehicles/edit/', vehicle.id]\"> Bid on this Project</a>\r\n    <!-- <button class=\"btn btn-danger\" (click)=\"delete()\">Delete</button> -->\r\n    <a class=\"btn btn-default\" [routerLink]=\"['/vehicles']\">View More Projects</a>\r\n\r\n    <!-- <img *ngFor=\"let bid of bids\" src=\"{{ bids.bidvalue }}\" > -->\r\n    \r\n  </p>\r\n\r\n</mat-tab>\r\n\r\n<mat-tab label=\"Photo\">\r\n\r\n  <input type=\"file\" (change)= \"uploadPhoto()\" #fileInput> \r\n  <img *ngFor=\"let photo of photos\" src=\"/uploads/{{ photo.fileName }}\" class=\"img-thumbnail\">\r\n</mat-tab>\r\n\r\n  </mat-tab-group>\r\n\r\n</div>\r\n</form>\r\n</section>\r\n    <p> All <p>\r\n\r\n  </article>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/view-vehicle/view-vehicle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewVehicleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_User_service__ = __webpack_require__("../../../../../src/app/_services/User.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_vehicle_service__ = __webpack_require__("../../../../../src/app/_services/vehicle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_photo_service__ = __webpack_require__("../../../../../src/app/_services/photo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_bid_service__ = __webpack_require__("../../../../../src/app/_services/bid.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewVehicleComponent = /** @class */ (function () {
    function ViewVehicleComponent(route, router, photoService, bidService, vehicleService, UserService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.photoService = photoService;
        this.bidService = bidService;
        this.vehicleService = vehicleService;
        this.UserService = UserService;
        //console.log( this.vehicle.projectStartDate);
        route.params.subscribe(function (p) {
            _this.vehicleId = +p['id'];
            if (isNaN(_this.vehicleId) || _this.vehicleId <= 0) {
                router.navigate(['/vehicles']);
                return;
            }
        });
        this.route.data.subscribe(function (data) {
            _this.user = data["user"];
        });
    }
    ViewVehicleComponent.prototype.ngOnInit = function () {
        //this.isBiddingDone  = true; 
        var _this = this;
        this.bidService.getBids(this.vehicleId)
            .subscribe(function (bids) { return _this.bids = bids; });
        this.photoService.getPhotos(this.vehicleId)
            .subscribe(function (photos) { return _this.photos = photos; });
        this.vehicleService.getVehicle(this.vehicleId)
            .subscribe(function (v) { return _this.vehicle = v; }, function (err) {
            if (err.status == 404) {
                _this.router.navigate(['/vehicles']);
                return;
            }
        });
    };
    ViewVehicleComponent.prototype.delete = function () {
        var _this = this;
        if (confirm("Are you sure?")) {
            this.vehicleService.delete(this.vehicle.id)
                .subscribe(function (x) {
                _this.router.navigate(['/vehicles']);
            });
        }
    };
    ViewVehicleComponent.prototype.uploadPhoto = function () {
        var _this = this;
        var nativeElement = this.fileInput.nativeElement;
        this.photoService.upload(this.vehicleId, nativeElement.files[0])
            .subscribe(function (photo) {
            _this.photos.push(photo);
        });
    };
    ViewVehicleComponent.prototype.postbid = function () {
        var _this = this;
        var result$ = this.bidService.create(this.vehicle, this.bids);
        console.log("bid obj - postbid", this.bids);
        result$.subscribe(function (vehicle) {
            _this.router.navigate(['', vehicle.id]);
        });
    };
    ViewVehicleComponent.prototype.submit = function () {
        var _this = this;
        var result$ = this.vehicleService.update(this.vehicle);
        result$.subscribe(function (vehicle) {
            _this.router.navigate(['/vehicles/', vehicle.id]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], ViewVehicleComponent.prototype, "fileInput", void 0);
    ViewVehicleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-view-vehicle',
            template: __webpack_require__("../../../../../src/app/view-vehicle/view-vehicle.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view-vehicle/view-vehicle.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_photo_service__["a" /* PhotoService */],
            __WEBPACK_IMPORTED_MODULE_5__services_bid_service__["a" /* BidService */],
            __WEBPACK_IMPORTED_MODULE_3__services_vehicle_service__["a" /* VehicleService */],
            __WEBPACK_IMPORTED_MODULE_0__services_User_service__["a" /* UserService */]])
    ], ViewVehicleComponent);
    return ViewVehicleComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'api/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map