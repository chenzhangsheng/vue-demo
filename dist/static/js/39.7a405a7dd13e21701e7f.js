webpackJsonp([39],{"7eea":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticStyle:{"margin-bottom":"15px"}},[e._v("你的权限： "+e._s(e.roles))]),e._v("\n  切换权限：\n  "),r("el-radio-group",{model:{value:e.role,callback:function(t){e.role=t},expression:"role"}},[r("el-radio-button",{attrs:{label:"editor"}})],1)],1)},staticRenderFns:[]}},Dd8w:function(e,t,r){"use strict";t.__esModule=!0;var n=r("woOf"),o=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=o.default||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}},V9V6:function(e,t,r){var n=r("VU/8")(r("r1MR"),r("7eea"),null,null,null);e.exports=n.exports},r1MR:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Dd8w"),o=r.n(n),a=r("NYxO");t.default={data:function(){return{role:""}},computed:o()({},r.i(a.b)(["roles"])),watch:{role:function(e){var t=this;this.$store.dispatch("ChangeRole",e).then(function(){t.$router.push({path:"/permission/index?"+ +new Date})})}}}}});
//# sourceMappingURL=39.7a405a7dd13e21701e7f.js.map