(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f4c4c70"],{ae96:function(t,e,n){"use strict";n("de48")},de48:function(t,e,n){},f0f9:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"font-stydy container"},[e("h1",{staticClass:"title"},[t._v("前端学习")]),e("el-container",[e("el-container",[e("el-aside",{attrs:{width:"200px"}},[e("menu-list",{attrs:{id:t.id}})],1),e("el-main",[e("router-view")],1)],1)],1)],1)},u=[],s=function(){var t=this,e=t._self._c;return e("div",[e("el-menu",{attrs:{"unique-opened":!0,router:!0}},t._l(t.menuList,(function(n,i){return e("el-submenu",{key:i,attrs:{index:n.id.toString()}},[e("template",{slot:"title"},[e("span",[t._v(t._s(n.name))])]),e("el-menu-item-group",t._l(n.children,(function(n,i){return e("el-menu-item",{key:i,attrs:{index:"/fontStudy/"+n.path}},[t._v(t._s(n.name))])})),1)],2)})),1)],1)},r=[],a=n("7736"),o={data(){return{}},props:{id:{type:Number,default:1}},mounted(){this.$store.dispatch("getFontStudyMenuList",this.id)},computed:{...Object(a["b"])({menuList:t=>t.menuList.menuList})}},c=o,l=n("e607"),d=Object(l["a"])(c,s,r,!1,null,"55c9ca00",null),m=d.exports,p={data(){return{id:1}},components:{MenuList:m}},f=p,h=(n("ae96"),Object(l["a"])(f,i,u,!1,null,"57913529",null));e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-1f4c4c70.9f9d67d9.js.map