webpackJsonp([4],{493:function(t,o,n){o=t.exports=n(484)(),o.push([t.i,"lazy-child-two-component h1{color:green}",""])},503:function(t,o,n){var e=n(493);"string"==typeof e&&(e=[[t.i,e,""]]);n(485)(e,{});e.locals&&(t.exports=e.locals)},514:function(t,o){t.exports="<h1>Lazy child two loaded</h1>"},536:function(t,o,n){"use strict";var e=n(503),i=(n.n(e),function(){function t(){}return t}()),a={controller:i,template:n(514)};o.a=a},537:function(t,o,n){"use strict";function e(t){t.state("lazyChildTwo",{parent:"lazyParent",component:"lazyChildTwoComponent",data:{isChild:!0,navTitle:"Lazy Child Two",moduleTitle:"Lazy Child Two",isMenuItem:!0}})}e.$inject=["$stateProvider"],o.a=e},538:function(t,o,n){"use strict";var e=n(12),i=(n.n(e),n(536)),a=n(537),l=n.i(e.module)("lazy-child-two",[]).component("lazyChildTwoComponent",i.a).config(a.a).name;o.default=l}});