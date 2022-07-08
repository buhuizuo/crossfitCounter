(function(){"use strict";var t={9484:function(t,e,i){var s=i(1192),n=i.n(s),a=i(1030),o=i.n(a),r=(i(6992),i(8674),i(9601),i(7727),i(8935)),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},c=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"top"},[s("p",{staticClass:"menu",on:{click:t.checkHistory}},[t._v("︙")])]),s("header",{on:{click:t.countTimeStart}},[s("div",{staticClass:"showtime"},[s("div",{staticClass:"numbers"},[s("h1",[t._v(t._s(t.mintues))]),s("h1",[t._v(":")]),s("h1",[t._v(t._s(t.seconds))]),s("h1",{staticClass:"green"},[t._v(".")]),s("h1",{staticClass:"green"},[t._v(t._s(t.minisec))])]),s("div",{staticClass:"circle"}),s("p",{directives:[{name:"show",rawName:"v-show",value:0==t.totalCount,expression:"totalCount == 0"}],staticClass:"roundCount"},[t._v("Ready")]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.totalCount%2!=0,expression:"totalCount % 2 != 0"}],staticClass:"roundCount"},[t._v(" Round "+t._s(t.lapCount)+" ")]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.totalCount%2==0&&t.totalCount>0,expression:"totalCount % 2 == 0 && totalCount > 0"}],staticClass:"roundCount red"},[t._v(" Rest ")]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.totalCount%2==0&&t.totalCount>0,expression:"totalCount % 2 == 0 && totalCount > 0"}],staticClass:"restTime"},[s("span",[t._v("R")]),t._v(" "+t._s(t.restMn)+":"+t._s(t.restSc)+":"+t._s(t.restMs)+" ")])])]),s("section",[s("ul",{staticClass:"timeList"},t._l(t.timeList,(function(e){return s("li",{key:e.id,staticClass:"animate__animated animate__fadeInDown animate__faster"},[s("span",{staticClass:"index"},[t._v(t._s(e.display))]),s("span",{staticClass:"time"},[t._v(t._s(e.time))]),s("span",{staticClass:"timeDiff"},[t._v("+"+t._s(e.diff))])])})),0)]),s("footer",[s("div",[s("button",{staticClass:"save",on:{click:t.saveRecord}},[t._v("save")])]),s("div",[s("button",{staticClass:"beginPause",on:{click:t.startPause}},[t._v(t._s(t.goOrPaused))])]),s("div",[s("button",{staticClass:"reStart",on:{click:t.reStart}},[s("img",{attrs:{src:i(3668),alt:""}})])])])])},m=[],d=i(7349),h=i.n(d),v=(i(8862),i(562)),f=i(4074),p=i.n(f),C={name:"TimerFunc",data:function(){return{mintues:"00",seconds:"00",minisec:"00",ms:0,sc:0,mn:0,oldMintue:0,oldSec:0,oldMiliSec:0,restMs:"00",restSc:"00",restMn:"00",msTemp:0,scTemp:0,mnTemp:0,isStarted:!1,isPaused:!1,minisecCount:void 0,secondCount:void 0,mintueCount:void 0,msInterval:void 0,scInterval:void 0,mnInterval:void 0,timeList:[],totalCount:0,lapCount:1,goOrPaused:"GO!"}},methods:{countTimeStart:p()((function(){var t=this;if(this.isPaused&&(this.totalCount--,this.isPaused=!1),this.totalCount++,this.isStarted){var e=0,i=0,s=0,n=0,a=0;this.oldMiliSec>this.ms?(e=100-this.oldMiliSec+this.ms,n=-1):e=this.ms-this.oldMiliSec,this.oldSec>this.sc?(s=60-this.oldSec+this.sc+n,a=-1):(s=this.sc-this.oldSec+n,-1==s&&(s=59,a=-1)),i=this.mn-this.oldMintue+a,i=i<10?"0"+i:i,s=s<10?"0"+s:s,e=e<10?"0"+e:e;var o=i+":"+s+"."+e,r=this.mintues+":"+this.seconds+"."+this.minisec,l={time:r,diff:o,display:this.lapCount,id:(0,v.x0)()};this.totalCount%2==0?(this.timeList.unshift(l),this.lapCount++):(l.display="R",this.timeList.unshift(l)),this.oldMintue=this.mn,this.oldSec=this.sc,this.oldMiliSec=this.ms,this.msTemp=0,this.scTemp=0,this.mnTemp=0}else this.isStarted=!0,this.minisecCount=setInterval((function(){t.ms+=5,t.ms>=100&&(t.ms=0,t.minisec="00",t.sc+=1,t.sc>=60&&(t.sc=0,t.seconds=0,t.mn+=1)),t.minisec=t.ms<10?"0"+t.ms:t.ms,t.seconds=t.sc<10?"0"+t.sc:t.sc,t.mintues=t.mn<10?"0"+t.mn:t.mn}),50),this.totalCount%2==0&&this.totalCount>0&&this.setShowRestTime()}),500),startPause:p()((function(){this.isStarted?(clearInterval(this.minisecCount),clearInterval(this.msInterval),clearInterval(this.scInterval),clearInterval(this.mnInterval),this.isStarted=!1,this.isPaused=!0,this.goOrPaused="PAUSED"):(0!=this.totalCount&&this.totalCount--,this.isPaused=!1,this.goOrPaused="GO!",this.countTimeStart())}),1005),reStart:function(){clearInterval(this.minisecCount),this.clearRestTimeInterval(),Object.assign(this.$data,this.$options.data())},saveRecord:function(){if(this.timeList.length>0){var t=JSON.parse(localStorage.getItem("myRecord"));t||(t=[]);var e={name:"crossfit",exerDate:Date.now(),time:this.timeList,isEdit:!1};t.unshift(e),localStorage.setItem("myRecord",JSON.stringify(t)),h()({message:"Saved",type:"success",duration:1e3})}else h()({message:"DO SOME EXERCISE!",type:"warning",duration:1e3})},checkHistory:function(){this.$router.push({path:"/history"})},setShowRestTime:function(){var t=this;this.msInterval=setInterval((function(){t.msTemp+=5,t.msTemp>=100&&(t.msTemp=0,t.scTemp+=1,t.scTemp>=60&&(t.scTemp=0,t.mnTemp+=1)),t.restMs=t.msTemp<10?"0"+t.msTemp:t.msTemp,t.restSc=t.scTemp<10?"0"+t.scTemp:t.scTemp,t.restMn=t.mnTemp<10?"0"+t.mnTemp:t.mnTemp}),50)},clearRestTimeInterval:function(){clearInterval(this.msInterval),this.restMs="00",this.restSc="00",this.restMn="00"}},watch:{totalCount:{handler:function(t,e){t%2==0&&t>0?this.setShowRestTime():this.clearRestTimeInterval()}}}},b=C,g=i(1001),y=(0,g.Z)(b,u,m,!1,null,"49409cd9",null),w=y.exports,I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("button",{staticClass:"goBack",on:{click:t.goBack}}),0!=t.waterInfo.length?i("div",{staticClass:"waterfall"},[i("div",{staticClass:"waterfall-left"},t._l(t.waterLeft,(function(e,s){return i("div",{key:s,staticClass:"waterfall-left-item"},[i("ul",[i("el-popover",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"item.visible"}],attrs:{placement:"bottom",width:"160"},model:{value:e.visible,callback:function(i){t.$set(e,"visible",i)},expression:"item.visible"}},[i("p",[t._v("sure you want to delete record?")]),i("div",{staticStyle:{"text-align":"right",margin:"0"}},[i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.visible=!1}}},[t._v("No")]),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){e.visible=!1,t.deleteRecord(e.exerDate)}}},[t._v("Yes")])],1)]),i("el-button",{staticClass:"delete",staticStyle:{"background-color":"rgba(255, 255, 255, 0)"},on:{click:function(i){return t.changeItemVisible(e)}}}),e.isEdit?t._e():i("li",{staticClass:"exerName",on:{click:function(t){e.isEdit=!0}}},[t._v(" "+t._s(e.name)+" ")]),e.isEdit?i("li",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"item.name"}],attrs:{type:"text",max:"12",min:"1"},domProps:{value:e.name},on:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.updateName(e)},blur:function(i){return t.updateName(e)},input:function(i){i.target.composing||t.$set(e,"name",i.target.value)}}})]):t._e(),i("li",[t._v(t._s(t._f("dateFormatter")(e.exerDate)))]),t._l(e.time,(function(e){return i("li",{key:e.id},[t._v(" "+t._s(e.display)+"   "+t._s(e.time)+"   +"+t._s(e.diff)+" ")])}))],2)])})),0),i("div",{staticClass:"waterfall-right"},t._l(t.waterRight,(function(e,s){return i("div",{key:s,staticClass:"waterfall-right-item"},[i("ul",[i("el-popover",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"item.visible"}],attrs:{placement:"bottom",width:"160"},model:{value:e.visible,callback:function(i){t.$set(e,"visible",i)},expression:"item.visible"}},[i("p",[t._v("sure you want to delete record?")]),i("div",{staticStyle:{"text-align":"right",margin:"0"}},[i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.visible=!1}}},[t._v("No")]),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(i){e.visible=!1,t.deleteRecord(e.exerDate)}}},[t._v("Yes")])],1)]),i("el-button",{staticClass:"delete",staticStyle:{"background-color":"rgba(255, 255, 255, 0)"},on:{click:function(i){return t.changeItemVisible(e)}}}),e.isEdit?t._e():i("li",{staticClass:"exerName",on:{click:function(t){e.isEdit=!0}}},[t._v(" "+t._s(e.name)+" ")]),e.isEdit?i("li",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"item.name"}],attrs:{type:"text",max:"12",min:"1"},domProps:{value:e.name},on:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.updateName(e)},blur:function(i){return t.updateName(e)},input:function(i){i.target.composing||t.$set(e,"name",i.target.value)}}})]):t._e(),i("li",[t._v(t._s(t._f("dateFormatter")(e.exerDate)))]),t._l(e.time,(function(e){return i("li",{key:e.id},[t._v(" "+t._s(e.display)+"   "+t._s(e.time)+"   +"+t._s(e.diff)+" ")])}))],2)])})),0)]):i("div",{staticClass:"noRecord",on:{click:t.goBack}},[t._v(" No record found, click me to do some exercise ")])])},A=[],k=(i(1539),i(4747),i(7327),{name:"MyHistory",data:function(){return{waterInfo:JSON.parse(localStorage.getItem("myRecord"))||[],waterLeft:[],waterRight:[],visible:!1}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;this.waterLeft=[],this.waterRight=[],this.waterInfo.forEach((function(e,i){i%2==0?t.waterLeft.push(e):t.waterRight.push(e)}))},goBack:function(){this.$router.back()},updateName:function(t){t.isEdit=!1,localStorage.setItem("myRecord",JSON.stringify(this.waterInfo))},deleteRecord:function(t){var e=this.waterInfo.filter((function(e){return e.exerDate!=t}));console.log(e,t),this.waterInfo=e,localStorage.setItem("myRecord",JSON.stringify(e)),this.getData()},changeItemVisible:function(t){this.waterLeft.forEach((function(t){t.visible=!1})),this.waterRight.forEach((function(t){t.visible=!1})),t.visible=!0}},filters:{dateFormatter:function(t){var e=new Date(t);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}}}),S=k,_=(0,g.Z)(S,I,A,!1,null,null,null),R=_.exports,T={name:"App",components:{TimerFunc:w,MyHistory:R}},D=T,M=(0,g.Z)(D,l,c,!1,null,null,null),N=M.exports,O=i(2809);r["default"].use(O.Z);var E=new O.Z({routes:[{path:"/",component:w,meta:{title:"timer"}},{path:"/history",component:R,meta:{title:"history"}}]}),G=E;r["default"].use(o()),r["default"].use(n()),new r["default"]({render:function(t){return t(N)},router:G}).$mount("#app")},3668:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA2IDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE4Qzk1RjUyRjAzRDExRUNBNjVGQTUwRTQ5MTlFQjNFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE4Qzk1RjUzRjAzRDExRUNBNjVGQTUwRTQ5MTlFQjNFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QThDOTVGNTBGMDNEMTFFQ0E2NUZBNTBFNDkxOUVCM0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QThDOTVGNTFGMDNEMTFFQ0E2NUZBNTBFNDkxOUVCM0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz54qqi5AAADSklEQVR42uxbjbGiMBCOr4FHB9LB8SrQEuhArODsQK8C6QBeBWcH8ip4WgFYAVhBLplbToZD8rcBjH4zO6MzTpLvyya7iZsZpZRYhsdswSwA4999sCYKsIrZCewLvttCNLMkACe6YraEzybgQmTMPuEzGnlmCeECIJnH7CeznNpDDn14hmON6gaxiG+ZlXQ4lNCnZ0IeQ4DVwMS7hFjpkjcRwGd2pNPBEcakRF5XgHDkWe/zhlCFvI4Aezp97GXJc6iEwQRChw4uEMrq+F7H/Cbq3KDOF3gInWv2lzJb/wt1fZCc+d8aM1Exi5kFBntNAG1UmvuCEDKDSBQ7LsDtPIqbY0TQNipEHceK7e2QiXcJsRtKgFChnZOhq+ssjcKmAL5CqEstz3qfN6S2BDgqkCcjm5EIb3dOSUuJUPNpEBYxYXac7XCr8kFmXidCCT1gAxcWfTjD78ZGguGBzUyQE88lBPhAvpgYjTzHW2vti8j/col82wPyjnu6dj4fWL6jG5R80wMCAXmOnWvkmwKIGr4yO7hGvinAQuJ4WblGvt4D+MZXPsDOT2x5gCjru7hKvhZA9MdFRhyGjAAn1wXwnl0A0cVj4bIAMyq+Fp657gFPjZcALwH+Jjp98F0XoHh2AUSHnMB1AU4vAfqxcFmA13EY9oCz4HeRy0tA5si7kjg0PbQAqeB3nHzo6h7QPPXNBafCDzLuzbDVVDiWSIg2LnuAB7P8/kwRoekBlYQXcCQubYjtMjlZL+Cb5npiXDyd/al9HK4k13lERPV3w4KP5ajlmXcKDzLJ+oJkYkUS36rFWn1FUpWCCGMVSSV3aoYDUwFUy+S+RyiTywWF05GpADqFkltqv1ByqzCeyFQAnTI0rGctGM9xUgwBdGvxSihdNy2W3mu+T5CqZFMpl0/hVKgDHl4P5FYufyHd5fJzciuVXxokXPI1jIozEtPpY6fCSefdYAje8D6xTPAKSVxqkgrLwoeOpnJf+AUuX5imwrIoYI2uQfkxZ30NYyl0GsB4OuuB620GXBZXOLnGphc0mG+HPXDDDdF/7CTCGUgfsG6mbD6ejsA1fyCQzmDPQb+IsSVA2zOW5P/n8/MOohW5PZ/PSPfzOlT8EWAAVioA4IujAC8AAAAASUVORK5CYII="}},e={};function i(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,i),a.exports}i.m=t,function(){var t=[];i.O=function(e,s,n,a){if(!s){var o=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],a=t[u][2];for(var r=!0,l=0;l<s.length;l++)(!1&a||o>=a)&&Object.keys(i.O).every((function(t){return i.O[t](s[l])}))?s.splice(l--,1):(r=!1,a<o&&(o=a));if(r){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,n,a]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,a,o=s[0],r=s[1],l=s[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(l)var u=l(i)}for(e&&e(s);c<o.length;c++)a=o[c],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(u)},s=self["webpackChunkcrossfitcounter"]=self["webpackChunkcrossfitcounter"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(9484)}));s=i.O(s)})();
//# sourceMappingURL=app-legacy.b67e78d7.js.map