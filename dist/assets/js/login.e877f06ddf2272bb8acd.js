webpackJsonp([7],{490:function(t,e,n){e=t.exports=n(484)(),e.push([t.i,"login .login-logo{font-size:72px;width:72px;height:72px;min-width:72px;min-height:72px;color:#607d8b;border-radius:100%}login .md-button.forgot-button{text-transform:capitalize}login .md-button.forgot-button.active:not([disabled]),login .md-button.forgot-button:not([disabled]):hover{text-decoration:underline;background-color:transparent}login .md-button.forgot-button md-icon{font-size:16px;font-size:18px;width:18px;height:18px;min-width:18px;min-height:18px;width:24px}",""])},500:function(t,e,n){var o=n(490);"string"==typeof o&&(o=[[t.i,o,""]]);n(485)(o,{});o.locals&&(t.exports=o.locals)},510:function(t,e){t.exports='<form name=loginForm layout=column layout-align="center center" flex ng-submit=$ctrl.onSubmit(loginForm.$valid) novalidate> <div flex=30 layout=column layout-align="center center" class=md-display-2> <md-icon class="md-whiteframe-1dp login-logo">account_circle</md-icon> </div> <div flex=40 layout=column layout-align="center center"> <md-input-container> <label>User Name</label> <md-icon aria-label="User Name">assignment_ind</md-icon> <input type=text name=userName ng-model=$ctrl.loginCriteria.userName required> <div ng-messages=loginForm.userName.$error> <div ng-message=valid>Error: The entered value is not valid</div> <div ng-message=required>Error: Enter your employeee Id</div> </div> </md-input-container> <md-input-container> <label>Password</label> <md-icon aria-label=Password>lock</md-icon> <input type=password name=password ng-model=$ctrl.loginCriteria.password required> <div ng-messages=loginForm.password.$error> <div ng-message=valid>Error: The entered value is not valid</div> <div ng-message=required>Error: Enter your password</div> </div> </md-input-container> </div> <div flex=20 layout=column layout-align="center center"> <section layout=row layout-align-xs="center center"> <md-button type=submit class="md-raised md-primary"> Submit</md-button> <md-button class=md-raised ng-click=$ctrl.onCancel(loginForm)>Cancel</md-button> </section> </div> <div flex=10 layout=column layout-align="center center"> <section layout=row layout-align-xs="center center"> <md-button class="md-primary forgot-button" ui-sref=recover> <md-icon aria-label="Forgot Password">lock_open</md-icon>Forgot Password</md-button> </section> </div> </form>'},524:function(t,e,n){"use strict";var o=n(500),i=(n.n(o),{userName:null,password:null}),r=function(){function t(t,e,n){this.$element=t,this.authService=e,this.$state=n}return t.prototype.$onInit=function(){this.$element.addClass("layout-column flex"),this.loginCriteria=angular.copy(i)},t.prototype.onSubmit=function(t){var e=this;t&&(console.log(this.loginCriteria),this.authService.logIn(this.loginCriteria).then(function(t){t&&e.$state.go("home",{},{custom:{ignoreAuthentication:!0}})}))},t.prototype.onCancel=function(t){this.loginCriteria=angular.copy(i),t.$setPristine(),t.$setUntouched()},t.$inject=["$element","AuthService","$state"],t}(),a={controller:r,template:n(510)};e.a=a},525:function(t,e,n){"use strict";function o(t){t.state("login",{parent:"auth",component:"login"})}o.$inject=["$stateProvider"],e.a=o},526:function(t,e,n){"use strict";var o=n(12),i=(n.n(o),n(524)),r=n(525);n.d(e,"login",function(){return a});var a=n.i(o.module)("login",[]).component("login",i.a).config(r.a).name;e.default=a}});