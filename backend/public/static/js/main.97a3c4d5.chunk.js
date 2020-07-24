(this["webpackJsonppoker-range-app"]=this["webpackJsonppoker-range-app"]||[]).push([[0],{276:function(e,t,n){e.exports=n(440)},281:function(e,t,n){},283:function(e,t,n){},439:function(e){e.exports=JSON.parse("{}")},440:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(36),o=n.n(c),l=n(83),i=n(27),u=(n(281),n(32)),s=n.n(u),d=n(118),m=n(30),g=n(25),f=(n(283),n(15)),h=n(23),b=n(41),p=n(35),v=n(24),E=n(457),O=n(237),j=n(26),S=n(85),C="handrangeAPI/MainPage/SET_HAND_RANGE",k="handrangeAPI/MainPage/SET_HAND_RANGE_SELECT",y="handrangeAPI/MainPage/SET_DEAD_CARDS",R="handrangeAPI/MainPage/IS_IP",A="handrangeAPI/MainPage/LOAD_EQUITIES",w="handrangeAPI/MainPage/RESET_STATE",x=[{Street:"Preflop",BetType:"Raise4BetCall",hands:[]},{Street:"Preflop",BetType:"Raise4BetFold",hands:[]},{Street:"Preflop",BetType:"RaiseCall",hands:[]},{Street:"Preflop",BetType:"RaiseFold",hands:[]},{Street:"Flop",BetType:"Valuebet",hands:[]},{Street:"Flop",BetType:"Bluff",hands:[]},{Street:"Flop",BetType:"CheckCall",hands:[]},{Street:"Flop",BetType:"CheckFold",hands:[]},{Street:"Turn",BetType:"Valuebet",hands:[]},{Street:"Turn",BetType:"Bluff",hands:[]},{Street:"Turn",BetType:"CheckCall",hands:[]},{Street:"Turn",BetType:"CheckFold",hands:[]},{Street:"River",BetType:"Valuebet",hands:[]},{Street:"River",BetType:"Bluff",hands:[]},{Street:"River",BetType:"CheckCall",hands:[]},{Street:"River",BetType:"CheckFold",hands:[]}],P={mode:{street:"Preflop",streetAction:"Raise4BetCall",isIP:!0},rangeSelectionArray:{folderID:"Evan's Second Folder",folderSubgroupName:"Opening Ranges",folderSubgroupRangeName:"UTG"},rangeColors:{0:[],1:[],2:[],3:[]},rangeRepoIP:JSON.parse(JSON.stringify(x)),rangeRepoOOP:JSON.parse(JSON.stringify(x))},I={mode:P.mode,rangeSelectionArray:P.rangeSelectionArray,rangeColors:P.rangeColors,rangeRepoIP:P.rangeRepoIP,rangeRepoOOP:P.rangeRepoOOP,ranges:x,deadcards:[],loadEquities:!1,handEquities:[{},{}]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return Object(S.a)(e,(function(e){switch(t.type){case A:e.loadEquities=!0;break;case"handrangeAPI/MainPage/LOAD_EQUITIES_SUCCESS":t.data.Position?e.handEquities[0]=t.data.newCards:e.handEquities[1]=t.data.newCards;break;case R:e.mode.isIP=t.data.position,e.rangeRepoIP=t.data.newRangeIP,e.rangeRepoOOP=t.data.newRangeOOP,e.ranges=t.data.newRanges,e.loadEquities=!1;break;case k:e.mode.street=t.data.name||"Preflop",e.mode.streetAction=t.data.value,e.loadEquities=!1;break;case C:e.ranges=t.data,e.loadEquities=!1;break;case y:e.deadcards=t.data,e.loadEquities=!1;break;case w:e=I}}))},B=function(e){return e.global||JSON.parse(JSON.stringify(I))},H=function(){return Object(j.a)(B,(function(e){return e.mode}))},F=function(){return Object(j.a)(B,(function(e){return e.ranges.filter((function(t){var n;return t.Street==(null===e||void 0===e||null===(n=e.mode)||void 0===n?void 0:n.street)}))}))},_=function(){return Object(j.a)(B,(function(e){return e.ranges}))},U=function(){return Object(j.a)(B,(function(e){return e.deadcards}))},N=function(){return Object(j.a)(B,(function(e){return e.rangeRepoIP}))},G=function(){return Object(j.a)(B,(function(e){return e.rangeRepoOOP}))},D=n(31),q=n(39),M=(n(90),n(181),n(13)),J=n(262);function L(){var e=Object(g.a)(["\n  padding: 0px !important;\n  margin: 0px;\n"]);return L=function(){return e},e}function V(){var e=Object(g.a)(["\n  margin: 0px;\n  flex-wrap: nowrap !important;\n"]);return V=function(){return e},e}function z(){var e=Object(g.a)(["\n  cursor: pointer;\n  height: 100% !important;\n  width: 100% !important;\n  padding: 0px;\n  margin: 0px;\n  font-size: 7px;\n  text-align: center;\n  color: black;\n  background-color: ",";\n  ","\n  @media (min-width: 576px) {\n    font-size: 12px;\n  }\n"]);return z=function(){return e},e}var Q=Object(M.c)(J.a.button)(z(),(function(e){return e.coloring}),(function(e){return e.border_attrib?"border: 2px dashed black;":"border: 2px solid #FFF;"})),K=Object(M.c)(E.a.Row)(V()),W=Object(M.c)(E.a.Cell)(L()),Y=function(){function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";Object(D.a)(this,e),this.cardOne=this.getCards(t,n)[0],this.cardTwo=this.getCards(t,n)[1],this.suit="",a.length>0?this.suit=a||this.displayCardSuit(t,n):this.suit=this.displayCardSuit(t,n),this.equity="n/a"}return Object(q.a)(e,[{key:"getCards",value:function(e,t){var n="",a="";return X.indexOf(e)<X.indexOf(t)||e===t?(n=e,a=t):(n=t,a=e),[n,a]}},{key:"displayCardSuit",value:function(e,t){return X.indexOf(e)<X.indexOf(t)?"s":e===t?"":"o"}},{key:"getHand",value:function(){return this.cardOne+this.cardTwo+this.suit}},{key:"getHandArray",value:function(){return[this.cardOne,this.cardTwo,this.suit]}},{key:"isInRange",value:function(e){var t=this;return"object"===typeof e&&e.filter((function(e){return(e.cardOne+e.cardTwo+e.suit||e.getHand())==t.cardOne+t.cardTwo+t.suit})).length>0}},{key:"isSuit",value:function(e){return this.suit==e}},{key:"indexsOf",value:function(e){var t=this,n=-1;return e.forEach((function(e,a){t.isInRange([e])&&(n=a)})),n}},{key:"doesShareCard",value:function(e){return!0}}]),e}(),Z=function(e){var t=e.cardHand,n=e.bind,a=e.allPreflopHands,c=e.cards;return r.a.createElement(W,{key:t},r.a.createElement(Q,Object.assign({key:"colorcard"+t.getHand(),id:"colorButton"+t.getHand()},n(t.getHand()),{hand:t.getHand(),coloring:c&&c.hasOwnProperty(t.getHand())?c[t.getHand()].colorCards:"555",border_attrib:t.isInRange(a)}),t.getHand(),r.a.createElement("br",null),"n/a"))},$=function(){function e(t){Object(D.a)(this,e),this.orderedCard=["A","K","Q","J","T","9","8","7","6","5","4","3","2"],this.hands=this.generateCardGrid(),this.PreflopRangesOnly=I.ranges.filter((function(e){return"Preflop"==e.Street})),this.bind=t}return Object(q.a)(e,[{key:"generateCardGrid",value:function(){var e=this,t=this.orderedCard.map((function(t){return e.orderedCard.map((function(e){return new Y(t,e)}))}));return console.log(t),t}},{key:"updateCardGrid",value:function(e,t){var n={};console.log(t),t.forEach((function(e,t){e.hands.forEach((function(e){return n=Object(v.a)(Object(v.a)({},n),{},Object(b.a)({},e.cardOne+e.cardTwo+e.suit||e.getHand(),{colorCards:["#8bddbe","#ed87a7","#6b6c7c","#d3d3d3"][t],equity:"n/a"}))}))})),this.PreflopRangesOnly=e,this.cards=n}},{key:"view",value:function(){var e=this,t=this.PreflopRangesOnly.reduce((function(e,t){return e.hands&&t.hands?[].concat(Object(p.a)(e.hands),Object(p.a)(t.hands)):[].concat(Object(p.a)(e),Object(p.a)(t.hands))}),[]),n=this.hands.map((function(n,a){var c=n.map((function(n){return r.a.createElement(Z,{cardHand:n,bind:e.bind,allPreflopHands:t,cards:e.cards})}));return r.a.createElement(K,null,c)}));return r.a.createElement(E.a.Body,{id:"cardgridtable"},n)}}]),e}(),X=["A","K","Q","J","T","9","8","7","6","5","4","3","2"],ee=Object(f.c)((function(){var e=F(),t=Object(j.a)(B,(function(e){return e.loadEquities})),n=U(),a=Object(j.a)(B,(function(e){return I.ranges,e.mode.isIP?e.rangeRepoIP:e.rangeRepoOOP})),r=Object(j.a)(B,(function(e){return e.handEquities})),c=H(),o=_(),l=Object(j.a)(B,(function(e){return e.ranges.filter((function(e){return"Preflop"==e.Street}))}));return function(i){return{SelectedRanges:e(i),ranges:o(i),loadEquities:t(i),handEquities:r(i),deadcards:n(i),otherRange:a(i),mode:c(i),preflopRanges:l(i)}}}),null),te=Object(h.d)(ee,a.memo)((function(e){var t=e.onMouseOverHandler,n=e.SelectedRanges,c=(e.loadEquities,e.deadcards,e.otherRange,e.handEquities,e.mode),o=(c.street,c.streetAction,c.isIP,e.ranges,e.SelectedStreet,e.preflopRanges),l=Object(a.useState)(),i=Object(m.a)(l,2),u=i[0],s=i[1],d=Object(a.useState)(!1),g=Object(m.a)(d,2),h=g[0],b=g[1],p=(Object(f.d)(),Object(O.a)({onDrag:function(e){return t({cards:e.args[e.args.length-1],onMouseDownEvent:e.memo!==e.args[e.args.length-1]&&e.down||e.first&&e.down},{threshold:40,filterTaps:!1})},onMove:function(e){return t({cards:e.args[e.args.length-1],onMouseDownEvent:e.memo!==e.args[0]&&e.down||e.first&&e.down},{threshold:40,delay:!0})}}));return Object(a.useEffect)((function(){h||b(new $(p))}),[!1,p]),Object(a.useEffect)((function(){h&&(h.updateCardGrid(o,n),s(h.view()))}),[h,n,o,p]),r.a.createElement(E.a,{celled:!0,striped:!0,unstackable:!0},u)})),ne=n(155),ae=n(22),re=n.n(ae),ce=n(45),oe=n(44),le=(n(60),n(74)),ie=n.n(le);function ue(e){var t={dispatch:ae.isFunction,subscribe:ae.isFunction,getState:ae.isFunction,replaceReducer:ae.isFunction,runSaga:ae.isFunction,injectedReducers:ae.isObject,injectedSagas:ae.isObject};ie()(Object(ae.conformsTo)(e,t),"(app/utils...) injectors: Expected a valid redux store")}var se=n(99),de=n(46),me=Object(de.a)(),ge="handrangeAPI/Auth/USER_SIGNIN",fe="handrangeAPI/Auth/USER_SIGNIN_FAIL",he="handrangeAPI/Auth/USER_LOADED",be="handrangeAPI/Auth/CLEAR_ERROR_STATE",pe="handrangeAPI/Auth/INIT_REGISTER_USER",ve="handrangeAPI/Auth/REGISTER_USER_FAIL",Ee={loading:!1,error:{invalid:!1,message:null},email:!1,name:!1,token:null,id:!1},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;return Object(S.a)(e,(function(e){switch(t.type){case ge:e.loading=!0,e.data=!1,e.token=null,e.error.invalid=!1,e.error.message=null;break;case"handrangeAPI/Auth/USER_SIGNIN_SUCCESS":e.loading=!1,e.token=t.token;break;case he:console.log(t.user),e.email=t.user.email,e.name=t.user.name,e.id=t.user.id;break;case fe:e.loading=!1,e.error.invalid=!0,e.error.message=t.error;break;case be:e.error.invalid=!1,e.error.message=null;break;case"handrangeAPI/Auth/USER_SIGNOUT_SUCCESS":e.data=!1,e.token=null;break;case pe:e.loading=!0,e.params=t.user;break;case"handrangeAPI/Auth/REGISTER_USER_SUCCESS":e.loading=!1;break;case ve:e.loading=!1,e.error.invalid=!0,e.error.message=t.error}}))};function je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(h.c)(Object(v.a)({global:T,user:Oe,router:Object(se.a)(me)},e));return t}function Se(e,t){return function(n,a){t||ue(e),ie()(Object(ae.isString)(n)&&!Object(ae.isEmpty)(n)&&Object(ae.isFunction)(a),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===a||(e.injectedReducers[n]=a,e.replaceReducer(je(e.injectedReducers)))}}function Ce(e){return ue(e),{injectReducer:Se(e,!0)}}var ke=function(e){var t=e.key,n=e.reducer,a=r.a.useContext(f.b);r.a.useEffect((function(){Ce(a.store).injectReducer(t,n)}),[])};function ye(){var e=Object(g.a)(["\n  color: white;\n  background-color: black;\n"]);return ye=function(){return e},e}function Re(){var e=Object(g.a)(["\n  color: white;\n  background-color: black;\n"]);return Re=function(){return e},e}function Ae(){var e=Object(g.a)(["\n  color: black;\n  background-color: #d3d3d3;\n"]);return Ae=function(){return e},e}function we(){var e=Object(g.a)(["\n  color: black;\n  background-color: #6b6c7c;\n"]);return we=function(){return e},e}function xe(){var e=Object(g.a)(["\n  color: black;\n  background-color: #ed87a7;\n"]);return xe=function(){return e},e}function Pe(){var e=Object(g.a)(["\n  color: black;\n  background-color: #8bddbe;\n"]);return Pe=function(){return e},e}function Ie(){var e=Object(g.a)(["\n  font-size: 1rem;\n"]);return Ie=function(){return e},e}var Te=Object(M.c)(ne.a)(Ie()),Be=Object(M.c)(E.a.Row)(Pe()),He=Object(M.c)(E.a.Row)(xe()),Fe=Object(M.c)(E.a.Row)(we()),_e=Object(M.c)(E.a.Row)(Ae()),Ue=(Object(M.c)(E.a.Header)(Re()),Object(M.c)(E.a.Row)(ye())),Ne=function(e,t,n,a,c){return r.a.createElement(E.a,{unstackable:!0},r.a.createElement(E.a.Body,null,r.a.createElement(Ue,null,r.a.createElement(E.a.HeaderCell,null,"Name"),r.a.createElement(E.a.HeaderCell,null,"Range # Combos"),r.a.createElement(E.a.HeaderCell,null,"% of Range"),r.a.createElement(E.a.HeaderCell,null,"% of Hands")),r.a.createElement(Be,null,r.a.createElement(E.a.Cell,null,c[0]),r.a.createElement(E.a.Cell,null,e[0]),r.a.createElement(E.a.Cell,{id:"Raise4BetValueTutorial"},(100*e[0]/(e[0]+e[1]+e[2]+e[3])).toFixed(2)||0),r.a.createElement(E.a.Cell,null,(e[0]/1326*100).toFixed(2))),r.a.createElement(He,null,r.a.createElement(E.a.Cell,null,c[1]),r.a.createElement(E.a.Cell,null,e[1]),r.a.createElement(E.a.Cell,{id:"Raise4BetBluffTutorial"},(100*e[1]/(e[0]+e[1]+e[2]+e[3])).toFixed(2)),r.a.createElement(E.a.Cell,null,(e[1]/1326*100).toFixed(2))),r.a.createElement(Fe,null,r.a.createElement(E.a.Cell,null,c[2]),r.a.createElement(E.a.Cell,null,e[2]),r.a.createElement(E.a.Cell,null,(100*e[2]/(e[0]+e[1]+e[2]+e[3])).toFixed(2)),r.a.createElement(E.a.Cell,null,(e[2]/1326*100).toFixed(2))),r.a.createElement(_e,null,r.a.createElement(E.a.Cell,null,c[3]),r.a.createElement(E.a.Cell,null,e[3]),r.a.createElement(E.a.Cell,null,(100*e[3]/(e[0]+e[1]+e[2]+e[3])).toFixed(2)),r.a.createElement(E.a.Cell,null,(e[3]/1326*100).toFixed(2))),r.a.createElement(Ue,null,r.a.createElement(E.a.Cell,null,"Total"),r.a.createElement(E.a.Cell,null,e[0]+e[1]+e[2]+e[3]),r.a.createElement(E.a.Cell,null),r.a.createElement(E.a.Cell,null,(100*(e[0]+e[1]+e[2]+e[3])/1326).toFixed(2)))))},Ge=function(e,t,n){return e.filter((function(e){e.hands;var n=e.Street;return t==n})).map((function(e){return e.hands.reduce((function(e,a){return e+function(e,t,n){if(console.log(e),!e)return 0;var a=[];"Flop"==t&&n.length>=3?a=[n[0].trim(),n[1].trim(),n[2].trim()]:"Turn"==t&&n.length>=4?a=[n[0].trim(),n[1].trim(),n[2].trim(),n[3].trim()]:"River"==t&&n.length>=5&&(a=[n[0].trim(),n[1].trim(),n[2].trim(),n[3].trim(),n[4].trim()]);var r=new Y(e.cardOne,e.cardTwo,e.suit);if(r.isSuit("s")){a.map((function(e){return e.charAt(0)}));var c=[r.getHand().charAt(0)+"s"+r.getHand().charAt(1)+"s",r.getHand().charAt(0)+"c"+r.getHand().charAt(1)+"c",r.getHand().charAt(0)+"d"+r.getHand().charAt(1)+"d",r.getHand().charAt(0)+"h"+r.getHand().charAt(1)+"h"],o=a.reduce((function(e,t){var n=c.reduce((function(e,n){return n.indexOf(t)>=0?[].concat(Object(p.a)(e),[n]):e}),[])[0];return n?Object(v.a)(Object(v.a)({},e),{},Object(b.a)({},n,0)):Object(v.a)({},e)}),0);return 4-Object.keys(o).length}if(r.isSuit("o")){var l=re.a.countBy(re.a.split(n,"",12));return(4-(l[r.getHand().charAt(0)]||0))*(4-(l[r.getHand().charAt(1)]||0))-4}var i=re.a.countBy(re.a.split(n,"",12));return(4-(i[r.getHand().charAt(0)]||0))*(3-(i[r.getHand().charAt(1)]||0))/2}(a,t,n)}),0)}))},De=Object(f.c)((function(){var e=U(),t=H(),n=F();return function(a){return{deadcards:e(a),mode:t(a),wholeRange:n(a)}}}),null),qe=Object(h.d)(De,a.memo)((function(e){var t=e.wholeRange,n=(e.onHandleStreetHandler,e.onHandleStreetHandlerButtons,e.mode),c=e.deadcards;!function(e){var t=e.key,n=e.reducer}({key:"global",reducer:T});var o={Preflop:["Raise4BetCall","Raise4BetFold","RaiseCall","RaiseFold"],Flop:["Valuebet","Bluff","CheckCall","CheckFold"],Turn:["Valuebet","Bluff","CheckCall","CheckFold"],River:["Valuebet","Bluff","CheckCall","CheckFold"]},l=Object(a.useState)([0,0,0,0]),i=Object(m.a)(l,2),u=i[0],s=i[1];Object(a.useEffect)((function(){s(Ge(t,n.street,c))}),[t,n.street,c]);return r.a.createElement(Te,null,Ne(u,0,0,n.street,o[n.street]))}));function Me(e){return{type:k,data:e}}var Je="@@saga-injector/daemon",Le=["@@saga-injector/restart-on-remount",Je,"@@saga-injector/once-till-unmount"],Ve=function(e){return ie()(Object(ae.isString)(e)&&!Object(ae.isEmpty)(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},ze=function(e){var t={saga:ae.isFunction,mode:function(e){return Object(ae.isString)(e)&&Le.includes(e)}};ie()(Object(ae.conformsTo)(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function Qe(e,t){return function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;t||ue(e);var c=Object(v.a)(Object(v.a)({},a),{},{mode:a.mode||Je}),o=c.saga,l=c.mode;Ve(n),ze(c);var i=Reflect.has(e.injectedSagas,n);(!i||i&&l!==Je&&"@@saga-injector/once-till-unmount"!==l)&&(e.injectedSagas[n]=Object(v.a)(Object(v.a)({},c),{},{task:e.runSaga(o,r)}))}}function Ke(e,t){return function(n){if(t||ue(e),Ve(n),Reflect.has(e.injectedSagas,n)){var a=e.injectedSagas[n];a.mode&&a.mode!==Je&&(a.task.cancel(),e.injectedSagas[n]="done")}}}function We(e){return ue(e),{injectSaga:Qe(e,!0),ejectSaga:Ke(e,!0)}}var Ye=function(e){var t=e.key,n=e.saga,a=e.mode,c=r.a.useContext(f.b);r.a.useEffect((function(){var e=We(c.store);return e.injectSaga(t,{saga:n,mode:a}),function(){e.ejectSaga(t)}}),[])},Ze=n(28),$e=n(156),Xe=n.n($e);function et(e){return 204===e.status||205===e.status?null:e.json()}function tt(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function nt(e,t){return fetch(e,t).then(tt).then(et)}var at=s.a.mark(rt);function rt(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),at)}"".concat("http://15.222.223.42:3000");var ct=n(455),ot=n(461),lt=n(125),it=n(89),ut=n(459),st=n(258),dt=n(452),mt=n(453);function gt(){var e=Object(g.a)([""]);return gt=function(){return e},e}function ft(){var e=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 0px !important;\n"]);return ft=function(){return e},e}function ht(){var e=Object(g.a)([""]);return ht=function(){return e},e}M.c.img(ht());var bt=Object(M.c)(dt.a)(ft()),pt=function(e,t){return r.a.createElement(st.a,{size:"mini",id:"Board"+t+"Card",alt:"card",src:e})},vt=Object(M.c)(mt.a)(gt()),Et=Object(f.c)((function(){var e=U();return function(t){return{deadcards:e(t)}}}),null),Ot=Object(h.d)(Et,a.memo)((function(e){var t=e.deadcards,n=void 0===t?[]:t;return r.a.createElement(E.a,null,r.a.createElement(vt,null,r.a.createElement(dt.a,{className:"text-center"},"Flop"),r.a.createElement(dt.a,{className:"text-center"},"Turn"),r.a.createElement(dt.a,{className:"text-center"},"River")),r.a.createElement(vt,null,r.a.createElement(bt,null,Array.isArray(n)&&n.length>0&&n[0].length>1?pt("/assets/cards/"+n[0].toUpperCase().trim()+".png",0):pt("/assets/cards/back.png",0),Array.isArray(n)&&n.length>1&&n[1].length>1?pt("/assets/cards/"+n[1].toUpperCase().trim()+".png",1):pt("/assets/cards/back.png",1),Array.isArray(n)&&n.length>2&&n[2].length>1?pt("/assets/cards/"+n[2].toUpperCase().trim()+".png",2):pt("/assets/cards/back.png",2)),r.a.createElement(bt,{xs:2},Array.isArray(n)&&n.length>3&&n[3].length>1?pt("/assets/cards/"+n[3].toUpperCase().trim()+".png",3):pt("/assets/cards/back.png",3)),r.a.createElement(bt,null,Array.isArray(n)&&n.length>4&&n[4].length>1?pt("/assets/cards/"+n[4].toUpperCase().trim()+".png",4):pt("/assets/cards/back.png",4))))})),jt=function(e){var t=e.onHandleStreetHandler,n=e.street;return r.a.createElement(ut.a.Group,null,r.a.createElement(ut.a,{onClick:t,id:"streetFirstChoice",name:"Preflop",value:"Raise4BetCall",active:"Preflop"==n,inverted:!0,color:"blue"},"Preflop"),r.a.createElement(ut.a.Or,null),r.a.createElement(ut.a,{onClick:t,id:"streetSecondChoice",name:"Flop",value:"Valuebet",active:"Flop"==n,inverted:!0,color:"blue"},"Flop"),r.a.createElement(ut.a.Or,null),r.a.createElement(ut.a,{onClick:t,id:"streetThirdChoice",name:"Turn",value:"Valuebet",active:"Turn"==n,inverted:!0,color:"blue"},"Turn"),r.a.createElement(ut.a.Or,null),r.a.createElement(ut.a,{onClick:t,id:"streetFourthChoice",name:"River",value:"Valuebet",active:"River"==n,inverted:!0,color:"blue"},"River"))},St=function(e){var t=e.street,n=e.streetAction,c=e.onHandleStreetHandlerButtons;return"Preflop"==t?r.a.createElement(a.Fragment,null,r.a.createElement(ut.a.Group,{inverted:!0,fluid:!0},r.a.createElement(ut.a,{inverted:!0,color:"green",id:"firstChoice",active:"Raise4BetCall"==n,onClick:function(e){return c(e,{street:t,streetAction:"Raise4BetCall"})}},"Raise/4bet/Call"),r.a.createElement(ut.a.Or,null),r.a.createElement(ut.a,{inverted:!0,color:"red",id:"secondChoice",active:"Raise4BetFold"==n,onClick:function(e){return c(e,{street:t,streetAction:"Raise4BetFold"})}},"Raise/4bet/Fold"),r.a.createElement(ut.a.Or,null)),r.a.createElement(ut.a.Group,{inverted:!0,fluid:!0},r.a.createElement(ut.a,{inverted:!0,color:"blue",id:"thirdChoice",active:"RaiseCall"==n,onClick:function(e){return c(e,{street:t,streetAction:"RaiseCall"})}},"Raise/Call"),r.a.createElement(ut.a.Or,null),r.a.createElement(ut.a,{inverted:!0,color:"purple",id:"fourthChoice",active:"RaiseFold"==n,onClick:function(e){return c(e,{street:t,streetAction:"RaiseFold"})}},"Raise/Fold"))):r.a.createElement(a.Fragment,null,r.a.createElement(ut.a.Group,null,r.a.createElement(ut.a,{inverted:!0,color:"green",id:"firstChoice",active:"Valuebet"==n,onClick:function(e){return c(e,{street:t,streetAction:"Valuebet"})}},"Valuebet"),r.a.createElement(ut.a.Or,null),r.a.createElement(ut.a,{inverted:!0,color:"red",id:"secondChoice",active:"Bluff"==n,onClick:function(e){return c(e,{street:t,streetAction:"Bluff"})}},"Bluff"),r.a.createElement(ut.a.Or,null)),r.a.createElement(ut.a.Group,null,r.a.createElement(ut.a,{inverted:!0,id:"thirdChoice",color:"blue",active:"CheckCall"==n,onClick:function(e){return c(e,{street:t,streetAction:"CheckCall"})}},"Check/Call"),r.a.createElement(ut.a.Or,null),r.a.createElement(ut.a,{inverted:!0,color:"purple",id:"fourthChoice",active:"CheckFold"==n,onClick:function(e){return c(e,{street:t,streetAction:"CheckFold"})}},"Check/Fold")))},Ct=n(454),kt=function(e){var t=e.active,n=e.onCloseModal;return r.a.createElement(Ct.a,{onHide:n,show:t,size:"medium"},r.a.createElement(Ct.a.Header,null,r.a.createElement(Ct.a.Title,null,"Select a Scenario")),r.a.createElement(Ct.a.Body,null,"Woohoo, you're reading this text in a modal!"),r.a.createElement(Ct.a.Footer,null,r.a.createElement(ut.a,{onClick:n},"Close"),r.a.createElement(ut.a,{onClick:n},"Save Changes")))};function yt(){var e=Object(g.a)(["\n  width: 100%;\n"]);return yt=function(){return e},e}var Rt=Object(M.c)(ct.a.Input)(yt()),At=Object(f.c)((function(){var e=_(),t=N(),n=G(),a=Object(j.a)(B,(function(e){return e.mode.isIP})),r=H(),c=U();_();return function(o){return{selectedRanges:e(o),rangeRepoIP:t(o),rangeRepoOOP:n(o),Position:a(o),mode:r(o),deadcards:c(o)}}}),null),wt=Object(h.d)(At,a.memo)((function(e){var t=e.onHandleStreetHandler,n=e.onHandleStreetHandlerButtons,c=e.mode,o=c.street,l=c.streetAction,i=c.isIP,u=e.selectedRanges,s=e.rangeRepoOOP,d=e.rangeRepoIP,g=e.deadcards,h=Object(f.d)(),b=Object(a.useState)({active:!1}),p=Object(m.a)(b,2),v=p[0],E=p[1],O=function(e,t){var n=t.value,a=function(e,t,n,a){var r,c,o;return a?(r=e,c=e,o=n):(r=t,c=n,o=t),[c,o,r]}(d,s,u,n),r=Object(m.a)(a,3),c=r[0],o=r[1],l=r[2];h({type:R,data:{position:n,newRangeIP:c,newRangeOOP:o,newRanges:l}})},j=function(){return h({type:A})};return r.a.createElement("div",null,r.a.createElement(ot.a.Group,{inverted:!0,stacked:!0,size:"massive"},r.a.createElement(ot.a.Group,{inverted:!0,color:"green"},r.a.createElement(lt.a,{ribbon:!0,color:g.length>=3&&g.length<=5?"green":"red"},g.length>=3&&g.length<=5?r.a.createElement(it.a,{name:"thumbs up"}):r.a.createElement(it.a,{name:"thumbs down"}),"Board"),r.a.createElement(ot.a,null,r.a.createElement(Rt,{placeholder:"eg. Ah, As, 2c, 4d",name:"deadcards",onChange:function(e){var t;h((t=re.a.split(e.target.value,",",12),{type:y,data:t}))}}),r.a.createElement(Ot,null))),r.a.createElement(ot.a.Group,null,r.a.createElement(lt.a,{ribbon:!0,color:"black"},"Position"),r.a.createElement(ot.a,null,r.a.createElement(ut.a.Group,null,r.a.createElement(ut.a,{name:"Position",value:!0,active:i,inverted:!0,color:"blue",onClick:O},"In Position"),r.a.createElement(ut.a.Or,null),r.a.createElement(ut.a,{name:"Position",value:!1,active:!i,inverted:!0,color:"blue",onClick:O},"Out Of Position")))),r.a.createElement(ot.a.Group,null,r.a.createElement(lt.a,{color:"black",ribbon:!0},"Street"),r.a.createElement(ot.a,null,r.a.createElement(jt,{onHandleStreetHandler:t,street:o}))),r.a.createElement(ot.a.Group,null,r.a.createElement(lt.a,{color:"black",ribbon:!0},"Action"),r.a.createElement(ot.a,null,r.a.createElement(St,{street:o,streetAction:l,onHandleStreetHandlerButtons:n}))),r.a.createElement(ot.a.Group,null,r.a.createElement(ot.a,{textAlign:"center"},r.a.createElement(ut.a,{color:"purple",onClick:function(){return j()}},"Calculate Equities"),r.a.createElement(ut.a,{onClick:function(){return E({active:!0})}},"Open modal"),r.a.createElement(kt,{active:v.active,onCloseModal:function(){E({active:!1})}})))))})),xt=n(458),Pt=function(e){var t=e.street,n=e.handsIPUsed,a=e.handsOOPUsed;return r.a.createElement(ot.a,{inverted:!0,stacked:!0,size:"tiny"},r.a.createElement(xt.a.Group,{fluid:!0,size:"tiny"},r.a.createElement(xt.a,{completed:n},r.a.createElement(it.a,{name:"thumbs down",color:"red"}),r.a.createElement(xt.a.Content,null,r.a.createElement(xt.a.Description,null,"IP Selected on ",t))),r.a.createElement(xt.a,{completed:a},r.a.createElement(it.a,{name:"thumbs down",color:"red"}),r.a.createElement(xt.a.Content,null,r.a.createElement(xt.a.Description,null,"OOP Selected on ",t)))))};function It(){var e=Object(g.a)(["\n  padding: 0px;\n  @media (min-width: 1200px) {\n    margin: 25px;\n  }\n"]);return It=function(){return e},e}function Tt(){var e=Object(g.a)(["\n  padding: 0px !important;\n  @media (min-width: 1200px) {\n    margin: 25px;\n  }\n"]);return Tt=function(){return e},e}function Bt(){var e=Object(g.a)(["\n  display: block;\n  padding: 0px !important;\n\n  @media (min-width: 1200px) {\n    display: flex;\n  }\n"]);return Bt=function(){return e},e}var Ht=M.c.div(Bt()),Ft=M.c.div(Tt()),_t=M.c.div(It()),Ut=function(e,t){if(console.log(e),0==e.length)return!1;var n=e.filter((function(e){var n=e.Street;return e.hands.length>0&&n==t}));return n.length>0},Nt=Object(f.c)((function(){var e=_(),t=Object(j.a)(B,(function(e){return e&&e.mode&&e.mode.street&&e.mode.streetAction&&e.ranges?e.ranges.filter((function(t){var n=t.Street,a=t.BetType;return n==e.mode.street&&a==e.mode.streetAction})):I.ranges})),n=H(),a=U(),r=N(),c=G();return function(o){return{ranges:e(o),wholeRange:t(o),mode:n(o),board:a(o),rangeRepoIP:r(o),rangeRepoOOP:c(o)}}}),null),Gt=Object(h.d)(Nt,a.memo)((function(e){e.wholeRange;var t=e.ranges,n=e.rangeColors,c=e.mode,o=e.mode,l=o.street,i=o.streetAction,u=o.isIP,s=(e.board,e.rangeRepoIP),d=e.rangeRepoOOP;ke({key:"global",reducer:T}),Ye({key:"global",saga:rt});var g=Object(f.d)(),h=Object(a.useState)(Ut(s,l)),b=Object(m.a)(h,2),v=b[0],E=b[1],O=Object(a.useState)(Ut(d,l)),j=Object(m.a)(O,2),S=j[0],k=j[1];Object(a.useEffect)((function(){E(Ut(u?t:s,l)),k(Ut(u?d:t,l))}),[t,s,l]);var y=function(e,t){var n=t.name,a=t.value;g(Me({name:n,value:a}))},R=function(e,t){var n=t.street,a=t.streetAction;g(Me({name:n,value:a}))};return r.a.createElement(Ht,null,r.a.createElement(Ft,null,r.a.createElement(Pt,{street:l,handsIPUsed:v,handsOOPUsed:S}),r.a.createElement(te,{onMouseOverHandler:function(e){if(e.onMouseDownEvent){var n=function(e,t,n,a){var r=new Y(a.substr(0,1),a.substr(1,1),a.substr(2,1)||"");return e.map((function(e,a){var c=e.Street==t&&e.BetType==n,o=r.isInRange(e.hands);if(c&&o){var l=e.hands,i=r.indexsOf(l);return l=e.hands.filter((function(e,t){return t!=i})),{Street:e.Street,BetType:e.BetType,hands:l}}return c&&!o?{Street:e.Street,BetType:e.BetType,hands:[].concat(Object(p.a)(e.hands),[r])}:e}))}(t,l,i,e.cards);g(function(e){return{type:C,data:e}}(n))}return e.cards},rangeColors:n}),r.a.createElement(qe,{onHandleStreetHandler:y,onHandleStreetHandlerButtons:R,mode:c})),r.a.createElement(_t,null,r.a.createElement(wt,{onHandleStreetHandler:y,onHandleStreetHandlerButtons:R})))})),Dt=n(460),qt=function(e){var t=e.isAuthenticated,n=e.loginWithRedirect,c=e.logout,o=e.user,i=(e.getAccessTokenSilently,e.getUserMetadata);return Object(a.useEffect)((function(){i()}),[]),r.a.createElement(Dt.a,{inverted:!0},r.a.createElement(Dt.a.Item,null,r.a.createElement(l.b,{to:"/"},"Home")),t?r.a.createElement(a.Fragment,null,r.a.createElement(Dt.a.Item,null,o.name||""),r.a.createElement(Dt.a.Item,null,r.a.createElement(ut.a,{onClick:function(){return c()}},"Logout"))):r.a.createElement(a.Fragment,null,r.a.createElement(Dt.a.Item,null,r.a.createElement(ut.a,{onClick:function(){return n()}},"Login"))))};function Mt(){var e=Object(g.a)(["\n  padding: 0px !important;\n  @media (min-width: 1200px) {\n    display: block;\n    margin-top: 30px;\n    margin-bottom: 50px;\n  }\n"]);return Mt=function(){return e},e}var Jt=Object(M.c)(ne.a)(Mt()),Lt=function(e){var t=e.children;return r.a.createElement(Jt,null,t)},Vt=n(257),zt=function(e){Object(ce.a)(n,e);var t=Object(oe.a)(n);function n(e){var a;return Object(D.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(q.a)(n,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong. Refresh the page to restart the application."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return localStorage.clear(),localStorage.setItem("state",JSON.stringify({global:I})),Object(v.a)(Object(v.a)({},I),{},{hasError:!0})}}]),n}(r.a.Component),Qt={loading:!0,error:!1,menus:{},categories:!1,regions:{loading:!0}},Kt=n(229),Wt=n(259),Yt=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}},Zt=function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}};function $t(){var e=arguments.length>1?arguments[1]:void 0,t=h.d,n={};var a=Object(Wt.a)(n),r=[a,Object(Kt.a)(e)],c=[h.a.apply(void 0,r)],o=Yt(),l=Object(h.e)(je(),o,t.apply(void 0,c));return l.runSaga=a.run,l.injectedReducers={},l.injectedSagas={},l}var Xt=n(158),en=n.n(Xt),tn=n(124);function nn(){var e=Object(g.a)(["\n  background-color: #e2e3e6;\n"]);return nn=function(){return e},e}M.c.div(nn());var an,rn,cn=[{selector:"button#firstChoice",content:"First pick your betting pattern, Raise/4Bet/Call, in this case you will select your strongest hands that you always raise with. Note: you may have to click back and forth to get the right button highlighted. "},{selector:"button#colorButtonAA",content:"AA is by far the strongest hand in holdem, select this hand by turning the table column green to go in your strongest hand range "},{selector:"button#secondChoice",content:"Next we are going to take one of our strongest hands and turn it into a bluff when someone raises us. Select Raise4BetFold next. "},{selector:"button#colorButtonAQo",content:"AQo makes the perfect bluffing hand. Its strong enough to raise first in, and has cards that block the strongest hands in the game. Go ahead and select AQo."},{selector:"#Raise4BetValueTutorial",content:"How often are we bluffing raising just AA and AQo? Looks like we valuebet with aces 33% of the time!"},{selector:"#Raise4BetBluffTutorial",content:"How often are we bluffing raising just AA and AQo? Looks like we bluff twice as often at 67% as much as we valuebet. This ratio is much too high, we should now add kings and AKs to our range to balance our range."},{selector:"button#firstChoice",content:"We better put more hands into our value range, so lets go ahead and select Raise4BetCall again. "},{selector:"button#colorButtonKK , button#colorButtonAKs",content:"You can select AKs, to balance out your range."},{selector:"#Raise4BetBluffTutorial",content:"This is fantastic, now we are only bluffing approximately less than half the time! If someone tries to rebluff our raise back at them, they will be greeted with an allin against a very strong hand much too often for this to be a profitable move"}],on=$t(Qt,me),ln=(an=on,rn=function(e){return e},Object(f.c)(null,null)),un=Object(h.d)(ln,a.memo)((function(e){e.global;var t=Object(tn.b)(),n=t.isAuthenticated,c=t.loginWithRedirect,o=t.logout,l=t.user,i=t.getAccessTokenSilently;ke({key:"global",reducer:T});Object(f.e)((function(e){return e.user})),Object(f.d)();var u=Object(a.useState)(!0),g=Object(m.a)(u,2),h=g[0],b=g[1],p=Object(a.useState)(null),v=Object(m.a)(p,2),E=v[0],O=v[1],j=Object(a.useState)(null),S=Object(m.a)(j,2),C=(S[0],S[1]);Object(a.useEffect)((function(){localStorage.setItem("bearer",E)}),[E]);var k=function(){var e=Object(d.a)(s.a.mark((function e(){var t,n,a,r,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="dev-824eb3ar.us.auth0.com",e.prev=1,e.next=4,i({audience:"https://".concat(t,"/api/v2/"),scope:"read:current_user"});case 4:return n=e.sent,O(n),a="https://".concat(t,"/api/v2/users/").concat(l.sub),e.next=9,fetch(a,{headers:{Authorization:"Bearer ".concat(n)}});case 9:return r=e.sent,e.next=12,r.json();case 12:return c=e.sent,o=c.user_metadata,C(o),e.abrupt("return",n);case 18:e.prev=18,e.t0=e.catch(1),console.log(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(zt,null,r.a.createElement(Lt,null,r.a.createElement(qt,{isAuthenticated:n,loginWithRedirect:c,logout:o,user:l,getAccessTokenSilently:i,getUserMetadata:k}),r.a.createElement(Gt,null),r.a.createElement(Vt.a,{steps:cn,isOpen:h,onRequestClose:function(){return b(!1)}})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(437),n(438);var sn=n(40);function dn(e){return{type:ge,user:e}}function mn(e){return{type:"handrangeAPI/Auth/USER_SIGNIN_SUCCESS",token:e}}function gn(e){return{type:fe,error:e}}var fn,hn=s.a.mark(On),bn=s.a.mark(jn),pn=s.a.mark(Sn),vn=s.a.mark(Cn),En=s.a.mark(kn);fn="".concat("http://15.222.223.42:3000");function On(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ze.b)([localStorage,"removeItem"],"token");case 2:return e.next=4,Object(Ze.c)({type:"handrangeAPI/Auth/USER_SIGNOUT_SUCCESS"});case 4:return e.next=6,Object(Ze.c)(Object(sn.d)("/"));case 6:case"end":return e.stop()}}),hn)}function jn(e){var t,n,a,r,c;return s.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.userid,console.log(t),n="".concat(fn,"/users/").concat(t),a={},o.next=6,localStorage.getItem("token");case 6:if(r=o.sent){o.next=12;break}return o.next=10,Object(Ze.c)({type:"handrangeAPI/Auth/USER_SIGNOUT"});case 10:o.next=13;break;case 12:a.Authorization="Bearer ".concat(r);case 13:return o.prev=13,o.next=16,Object(Ze.b)(nt,n,{headers:a});case 16:return c=o.sent,o.next=19,Object(Ze.c)({type:he,user:c});case 19:o.next=25;break;case 21:return o.prev=21,o.t0=o.catch(13),o.next=25,Object(Ze.c)({type:"handrangeAPI/Auth/USER_SIGNOUT"});case 25:case"end":return o.stop()}}),bn,null,[[13,21]])}function Sn(e){var t,n,a,r,c,o,l,i,u,d,m,g;return s.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.user,n=t.name,a=t.password,r={"Content-Type":"application/json"},c=JSON.stringify({name:n,password:a}),o={body:c,headers:r,method:"POST"},l="".concat(fn,"/login"),s.prev=5,s.next=8,Object(Ze.b)(nt,l,o);case 8:return i=s.sent,u=i.user,d=i.token,console.log(u),s.next=13,localStorage.setItem("token",d);case 13:return s.next=15,Object(Ze.c)({type:"handrangeAPI/Auth/USER_REQUESTED",userid:u.id});case 15:return s.next=17,Object(Ze.c)(mn(d));case 17:s.next=40;break;case 19:return s.prev=19,s.t0=s.catch(5),s.prev=21,s.next=24,s.t0.response.json();case 24:if(!(m=s.sent)||"invalid_email"!==m.code&&"incorrect_password"!==m.code&&"invalid_username"!==m.code){s.next=30;break}return s.next=28,Object(Ze.c)(gn("Wrong username or password."));case 28:s.next=35;break;case 30:return s.next=32,null!==(f=m.message)&&""!==f&&(f=f.toString()).replace(/<[^>]*>/g,"");case 32:return g=s.sent,s.next=35,Object(Ze.c)(gn(g));case 35:s.next=40;break;case 37:s.prev=37,s.t1=s.catch(21),console.log(s.t1);case 40:case"end":return s.stop()}var f}),pn,null,[[5,19],[21,37]])}function Cn(e){var t,n,a,r,c;return s.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.user,n=Xe.a.stringify(t),a="".concat(fn,"/users?").concat(n),o.prev=3,o.next=6,Object(Ze.b)(nt,a,{method:"POST"});case 6:return r=o.sent,console.log(r),o.next=10,Object(Ze.c)(dn(t));case 10:return o.next=12,Object(Ze.c)(mn(r));case 12:o.next=27;break;case 14:return o.prev=14,o.t0=o.catch(3),o.prev=16,o.next=19,o.t0.response.json();case 19:return c=o.sent,o.next=22,Object(Ze.c)({type:"handrangeAPI/Auth/USER_SIGNUP_FAIL",error:c.message});case 22:o.next=27;break;case 24:o.prev=24,o.t1=o.catch(16),console.log(o.t1);case 27:case"end":return o.stop()}}),vn,null,[[3,14],[16,24]])}function kn(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ze.a)([Object(Ze.d)(ge,Sn),Object(Ze.d)("handrangeAPI/Auth/USER_REQUESTED",jn),Object(Ze.d)("handrangeAPI/Auth/AUTH_CHECK_STATE",jn),Object(Ze.d)("handrangeAPI/Auth/USER_SIGNOUT",On),Object(Ze.d)(pe,Cn)]);case 2:case"end":return e.stop()}}),En)}var yn=function(e){return e.user||Ee},Rn=Object(f.c)((function(){var e=Object(j.a)(yn,(function(e){return e.params}));return function(t){return{params:e(t)}}}),null),An=Object(h.d)(Rn,a.memo)((function(){ke({key:"user",reducer:Oe}),Ye({key:"user",saga:kn});var e=Object(f.d)(),t=Object(a.useState)({name:"",email:"",password:"",password_confirmation:""}),n=Object(m.a)(t,2),c=n[0],o=n[1],l=function(e,t){var n=t.name,a=t.value,r=Object(v.a)({},c);r[[n]]=a,o(r)};return r.a.createElement(Lt,null,r.a.createElement(qt,null),r.a.createElement("h2",null,"User Register"),r.a.createElement(ct.a,{onSubmit:function(t,n){e({type:pe,user:c})}},r.a.createElement(ct.a.Input,{label:"Username",name:"name",placeholder:"Username",onChange:l}),r.a.createElement(ct.a.Input,{label:"Password",name:"password",placeholder:"Password",onChange:l}),r.a.createElement(ct.a.Input,{label:"Password Confirmation",name:"password_confirmation",placeholder:"Password Confirmation",onChange:l}),r.a.createElement(ct.a.Input,{label:"email",name:"email",placeholder:"email",onChange:l}),r.a.createElement(ut.a,{type:"submit"},"Submit")))})),wn=Object(j.b)({user:Object(j.a)(yn,(function(e){return e}))}),xn=Object(f.c)(wn,null),Pn=Object(h.d)(xn,a.memo)((function(e){var t=e.user;ke({key:"user",reducer:Oe}),Ye({key:"user",saga:kn});var n=Object(f.d)(),c=Object(a.useState)({name:"",password:""}),o=Object(m.a)(c,2),l=o[0],i=o[1],u=function(e,t){var n=t.name,a=t.value,r=Object(v.a)({},l);r[n]=a,i(r)};return console.log(t),r.a.createElement(Lt,null,r.a.createElement(qt,{username:t.name}),0==t.name?r.a.createElement(a.Fragment,null,r.a.createElement("h2",null,"User Login"),r.a.createElement(ct.a,{onSubmit:function(e,t){n(dn(l))}},r.a.createElement(ct.a.Input,{label:"Username",name:"name",placeholder:"Name",onChange:u}),r.a.createElement(ct.a.Input,{label:"Password",name:"password",type:"password",placeholder:"Password",onChange:u}),r.a.createElement(ut.a,{type:"submit"},"Submit"))):r.a.createElement("div",null,"You are currently logged in."))})),In=(n(439),$t(I,me));In.subscribe(en()((function(){try{var e=In.getState(),t=e.global,n=e.user;Zt({global:t,user:n})}catch(a){Zt({global:I,user:{}})}}),1e3));"".concat("http://15.222.223.42:3000");o.a.render(r.a.createElement(zt,null,r.a.createElement(tn.a,{domain:"dev-824eb3ar.us.auth0.com",clientId:"NTS7ZtvzLweGZjLhYDlhj9PsN44FDFel",redirectUri:"https://www.poker-range-appalyzer.com",audience:"https://dev-824eb3ar.us.auth0.com/api/v2/",scope:"read:current_user update:current_user_metadata"},r.a.createElement(f.a,{store:In},r.a.createElement(l.a,{history:me},r.a.createElement(M.a,{theme:{main:"mediumseagreen"}},r.a.createElement(i.a,{exact:!0,path:"/",component:un}),r.a.createElement(i.a,{exact:!0,path:"/register",component:An}),r.a.createElement(i.a,{exact:!0,path:"/login",component:Pn})))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[276,1,2]]]);
//# sourceMappingURL=main.97a3c4d5.chunk.js.map