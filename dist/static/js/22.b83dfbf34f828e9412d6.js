webpackJsonp([22],{"0On2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"tinymce",props:{id:{type:String,default:"tinymceEditor"},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return["removeformat undo redo |  bullist numlist | outdent indent | forecolor | fullscreen code","bold italic blockquote | h2 p  media link | alignleft aligncenter alignright"]}},data:function(){return{hasChange:!1,hasInit:!1}},menubar:{default:""},height:{type:Number,required:!1,default:360}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return tinymce.get(e.id).setContent(t)})}},mounted:function(){var t=this,e=this;tinymce.init({selector:"#"+this.id,height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar,menubar:this.menubar,plugins:"advlist,autolink,code,paste,textcolor, colorpicker,fullscreen,link,lists,media,wordcount, imagetools,watermark",end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",block_formats:"普通标签=p;小标题=h2;",imagetools_cors_hosts:["wpimg.wallstcn.com","wallstreetcn.com"],imagetools_toolbar:"watermark",default_link_target:"_blank",link_title:!1,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp",function(){t.hasChange=!0,t.$emit("input",n.getContent({format:"raw"}))})},setup:function(t){t.addButton("h2",{title:"小标题",text:"小标题",onclick:function(){t.execCommand("mceToggleFormat",!1,"h2")},onPostRender:function(){var e=this;t.on("init",function(){t.formatter.formatChanged("h2",function(t){e.active(t)})})}}),t.addButton("p",{title:"正文",text:"正文",onclick:function(){t.execCommand("mceToggleFormat",!1,"p")},onPostRender:function(){var e=this;t.on("init",function(){t.formatter.formatChanged("p",function(t){e.active(t)})})}})}})},destroyed:function(){tinymce.get(this.id).destroy()}}},"5aCZ":function(t,e,n){function i(t){n("dqrI")}var o=n("VU/8")(n("0On2"),n("HxFe"),i,"data-v-208cdfcc",null);t.exports=o.exports},HxFe:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-container editor-container"},[n("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.id}})])},staticRenderFns:[]}},LkOT:function(t,e,n){function i(t){n("uz+v")}var o=n("VU/8")(n("aNNw"),n("vJCm"),i,"data-v-b0cb5e10",null);t.exports=o.exports},RRyM:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".tinymce-container[data-v-208cdfcc]{position:relative}.tinymce-textarea[data-v-208cdfcc]{visibility:hidden;z-index:-1}.editor-custom-btn-container[data-v-208cdfcc]{position:absolute;right:15px;top:18px}.editor-upload-btn[data-v-208cdfcc]{display:inline-block}","",{version:3,sources:["D:/项目资料/段欢/my-project-test/src/components/Tinymce/index.vue"],names:[],mappings:"AACA,oCACE,iBAAkB,CACnB,AACD,mCACE,kBAAmB,AACnB,UAAY,CACb,AACD,8CACE,kBAAmB,AACnB,WAAY,AACZ,QAAU,CACX,AACD,oCACE,oBAAsB,CACvB",file:"index.vue",sourcesContent:["\n.tinymce-container[data-v-208cdfcc] {\r\n  position: relative\n}\n.tinymce-textarea[data-v-208cdfcc] {\r\n  visibility: hidden;\r\n  z-index: -1;\n}\n.editor-custom-btn-container[data-v-208cdfcc] {\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 18px;\n}\n.editor-upload-btn[data-v-208cdfcc] {\r\n  display: inline-block;\n}\r\n"],sourceRoot:""}])},aNNw:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("5aCZ"),o=n.n(i);e.default={components:{Tinymce:o.a},data:function(){return{content:"Tinymce"}}}},dqrI:function(t,e,n){var i=n("RRyM");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("0dd695ca",i,!0)},hoep:function(t,e,n){e=t.exports=n("FZ+f")(!0),e.push([t.i,".editor-content[data-v-b0cb5e10]{margin-top:20px}","",{version:3,sources:["D:/项目资料/段欢/my-project-test/src/views/components/tinymce.vue"],names:[],mappings:"AACA,iCACE,eAAiB,CAClB",file:"tinymce.vue",sourcesContent:["\n.editor-content[data-v-b0cb5e10]{\r\n  margin-top: 20px;\n}\r\n"],sourceRoot:""}])},"uz+v":function(t,e,n){var i=n("hoep");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("13a1e23c",i,!0)},vJCm:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container"},[t._m(0),t._v(" "),n("div",[n("Tinymce",{ref:"editor",attrs:{height:200},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),n("div",{staticClass:"editor-content",domProps:{innerHTML:t._s(t.content)}})])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("code",[t._v("公司做的后台主要是一个cms系统，公司也是以自媒体为核心的，所以富文本是后台很核心的功能。在选择富文本的过程中也走了不少的弯路，市面上常见的富文本都基本用过了，最终选择了Tinymce"),n("a",{attrs:{target:"_blank",href:"https://segmentfault.com/a/1190000009762198#articleHeader13"}},[t._v(" 相关文章 ")])])}]}}});
//# sourceMappingURL=22.b83dfbf34f828e9412d6.js.map