(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"3e8c":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("VedioList",{attrs:{videoList:t.likesList}})],1)},n=[],o=(i("4de4"),i("c975"),i("0d52")),a={name:"MyLikes",data:function(){return{myLikes:[]}},components:{VedioList:o["a"]},mounted:function(){var t=JSON.parse(localStorage.getItem("likes"));this.myLikes=t,this.$store.commit("clearVedioList"),this.$store.dispatch("getVideoList")},computed:{likesList:function(){var t=this;return this.$store.state.videoList.filter((function(e){return-1!==t.myLikes.indexOf(e.id)}))}}},r=a,c=i("2877"),u=Object(c["a"])(r,s,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=about.45369631.js.map