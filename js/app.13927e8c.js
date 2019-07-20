(function(t){function o(o){for(var n,c,r=o[0],i=o[1],l=o[2],f=0,d=[];f<r.length;f++)c=r[f],s[c]&&d.push(s[c][0]),s[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(o);while(d.length)d.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,o=0;o<a.length;o++){for(var e=a[o],n=!0,r=1;r<e.length;r++){var i=e[r];0!==s[i]&&(n=!1)}n&&(a.splice(o--,1),t=c(c.s=e[0]))}return t}var n={},s={app:0},a=[];function c(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=n,c.d=function(t,o,e){c.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,o){if(1&o&&(t=c(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)c.d(e,n,function(o){return t[o]}.bind(null,n));return e},c.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(o,"a",o),o},c.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},c.p="/Stock-Trader-App/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=o,r=r.slice();for(var l=0;l<r.length;l++)o(r[l]);var u=i;a.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"1a8c":function(t,o,e){},"1c05":function(t,o,e){},3434:function(t,o,e){"use strict";var n=e("bc5d"),s=e.n(n);s.a},"56d7":function(t,o,e){"use strict";e.r(o);e("cadf"),e("551c"),e("f751"),e("097d");var n=e("2b0e"),s=e("8c4f"),a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("h3",[t._v("Trade or View your Portfolio")]),e("p",[t._v("Click on 'End day' to begin a new Day!")]),e("hr"),e("p",{staticClass:"lead"},[e("strong",[t._v("Your Funds: $"+t._s(t.getFunds))])])])])},c=[],r=e("cebc"),i=e("2f62"),l={computed:Object(r["a"])({},Object(i["c"])({getFunds:"getFunds"}))},u=l,f=e("2877"),d=Object(f["a"])(u,a,c,!1,null,null,null),p=d.exports,m=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-12 col-xs-12"},[e("div",{staticClass:"row"},t._l(t.stocks,function(t,o){return e("app-portfolio",{key:t.id,attrs:{qty:t.quantity,price:t.price,name:o}})}),1)])])},b=[],v=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"col-lg-6 col-md-12 col-xs-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v(t._s(t.name)+" (Price: "+t._s(t.price)+" | Qty: "+t._s(t.qty)+")")]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-lg-8 col-md-8 col-xs-8",staticStyle:{"padding-bottom":"1em"}},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.stocks.quantity,expression:"stocks.quantity",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"0"},domProps:{value:t.stocks.quantity},on:{input:function(o){o.target.composing||t.$set(t.stocks,"quantity",t._n(o.target.value))},blur:function(o){return t.$forceUpdate()}}})]),e("div",{staticClass:"col-lg-4 col-md-4 col-xs-4"},[e("button",{staticClass:"btn btn-success btn-block",attrs:{disabled:t.stocks.quantity<=0||t.stocks.quantity>t.qty},on:{click:function(o){return t.sellStocks(t.stocks)}}},[t._v("Sell")])])])])])])},h=[],g=(e("7f7f"),e("c5f6"),{props:{name:String,qty:Number,price:Number},data:function(){return{stocks:{name:this.name,quantity:0,price:this.price}}},methods:Object(r["a"])({},Object(i["b"])({sellStocks:"sellStocks"}))}),y=g,k=(e("856d"),Object(f["a"])(y,v,h,!1,null,"7e76b85a",null)),_=k.exports,C={components:{appPortfolio:_},computed:Object(r["a"])({},Object(i["c"])({stocks:"getPortfolio"}))},O=C,j=(e("3434"),Object(f["a"])(O,m,b,!1,null,"719f055c",null)),S=j.exports,T=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-12 col-xs-12"},[e("div",{staticClass:"row"},t._l(t.stocks,function(t,o){return e("app-cards",{key:t.id,attrs:{stockPrice:t.price,stockName:o}})}),1)])])},P=[],w=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"col-lg-6 col-md-12 col-xs-12"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[t._v(t._s(t.stockName)+" (Price: "+t._s(t.stockPrice)+")")]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"form-group row"},[e("div",{staticClass:"col-lg-8 col-md-8 col-xs-8",staticStyle:{"padding-bottom":"1em"}},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.boughtStock.quantity,expression:"boughtStock.quantity",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"0"},domProps:{value:t.boughtStock.quantity},on:{input:function(o){o.target.composing||t.$set(t.boughtStock,"quantity",t._n(o.target.value))},blur:function(o){return t.$forceUpdate()}}})]),e("div",{staticClass:"col-lg-4 col-md-4 col-xs-4"},[e("button",{staticClass:"btn btn-danger btn-block",attrs:{disabled:t.boughtStock.quantity<=0},on:{click:function(o){return t.buyStocks(t.boughtStock)}}},[t._v("Buy")])])])])])])},I=[],N={props:{stockName:String,stockPrice:Number},data:function(){return{boughtStock:{stockName:this.stockName,quantity:0,price:this.stockPrice}}},methods:Object(r["a"])({},Object(i["b"])({buyStocks:"buyStocks"}))},E=N,q=(e("c32b"),Object(f["a"])(E,w,I,!1,null,"2a4c689a",null)),x=q.exports,F={components:{appCards:x},computed:Object(r["a"])({},Object(i["c"])({stocks:"getStocks"}))},D=F,A=(e("8bd5"),Object(f["a"])(D,T,P,!1,null,"0d54e840",null)),U=A.exports,$=[{path:"/",components:{default:p}},{path:"/Portfolio",components:{default:S}},{path:"/Stocks",components:{default:U}},{path:"*",redirect:"/"}],L=e("f499"),R=e.n(L),B=e("5176"),M=e.n(B),Z=e("e814"),K=e.n(Z),G={funds:0},Y={INITIALIZE_FUNDS:function(t,o){t.funds=o},REDUCE_FUNDS:function(t,o){t.funds=t.funds-o},INCREASE_FUNDS:function(t,o){var e=o.price,n=K()(o.quantity)*e;t.funds=K()(t.funds)+n}},z={getFundsFromApi:function(t){var o=t.commit;fetch("https://vue-js-http-8b6c0.firebaseio.com/funds.json").then(function(t){return t.json()}).then(function(t){o("INITIALIZE_FUNDS",R()(t))}).catch(function(t){return console.log(t)})}},J={getFunds:function(t){return t.funds}},Q={state:G,mutations:Y,actions:z,getters:J},V={portfolio:{},funds:Q.state},H={ADD_STOCK_TO_PORTFOLIO:function(t,o){var e=t.portfolio[o.stockName].quantity||0;e>0?(e+=o.quantity,n["a"].set(t.portfolio[o.stockName],"quantity",e)):t.portfolio[o.stockName]=M()({},t.portfolio[o.stockName],o)},INITIALIZE_PORTFOLIO:function(t,o){t.portfolio=M()({},t.portfolio,o)},UPDATE_PORTFOLIO:function(t,o){var e=t.portfolio[o.name].quantity-o.quantity;n["a"].set(t.portfolio[o.name],"quantity",e)}},W={getPortfolio:function(t){var o=t.commit;fetch("https://vue-js-http-8b6c0.firebaseio.com/portfolio.json",{method:"GET"}).then(function(t){return t.json()}).then(function(t){return o("INITIALIZE_PORTFOLIO",t)}).catch(function(t){return console.log(t)})},sellStocks:function(t,o){var e=t.commit,s=t.state,a=s.portfolio[o.name].quantity;o.quantity===a?n["a"].swal({type:"info",title:"Are you sure you want to sell all your "+o.name+" stocks?",showCancelButton:!0,confirmButtonText:"Yes, I want to crash "+o.name+"'s stock prices!",confirmButtonColor:"#dc3545",cancelButtonText:"No, I changed my mind",cancelButtonColor:"#3fc3ee",buttons:!0}).then(function(t){t?(n["a"].swal({title:"You have caused a reccesion!",type:"success"}),e("UPDATE_PORTFOLIO",o),fetch("https://vue-js-http-8b6c0.firebaseio.com/portfolio.json",{method:"PUT",body:R()(s.portfolio),headers:{"Content-Type":"application/json"}}).catch(function(t){return console.log(t)}),e("INCREASE_FUNDS",o)):n["a"].swal({title:"The market lives another day!"})}):(e("UPDATE_PORTFOLIO",o),fetch("https://vue-js-http-8b6c0.firebaseio.com/portfolio.json",{method:"PUT",body:R()(s.portfolio),headers:{"Content-Type":"application/json"}}).catch(function(t){return console.log(t)}),e("INCREASE_FUNDS",o))}},X={getPortfolio:function(t){return t.portfolio},getQty:function(t){return function(o){return t.portfolio[o]}}},tt={state:V,mutations:H,actions:W,getters:X},ot={stocks:{},funds:Q.state,portfolio:tt.state},et={INITIALIZE_STOCKS:function(t,o){t.stocks=M()({},t.stocks,o)}},nt={getStocksFromApi:function(t){var o=t.commit;fetch("https://vue-js-http-8b6c0.firebaseio.com/stocks.json",{method:"GET"}).then(function(t){return t.json()}).then(function(t){return o("INITIALIZE_STOCKS",t)}).catch(function(t){return console.log(t)})},buyStocks:function(t,o){var e=t.commit,s=t.state,a=o.quantity*o.price;a>s.funds.funds?n["a"].swal({type:"warning",title:"Greed is bad!"}):(e("REDUCE_FUNDS",a),fetch("https://vue-js-http-8b6c0.firebaseio.com/funds.json",{method:"PUT",body:R()(s.funds.funds),headers:{"Content-Type":"application/json"}}).catch(function(t){return console.log(t)}),e("ADD_STOCK_TO_PORTFOLIO",o),fetch("https://vue-js-http-8b6c0.firebaseio.com/portfolio.json",{method:"PUT",body:R()(s.portfolio.portfolio),headers:{"Content-Type":"application/json"}}).catch(function(t){return console.log(t)}))},randomizeStockPrices:function(t,o){t.commit;for(var e in ot.stocks){var n=Math.floor(1e3*Math.random(1,99));ot.stocks[e].price=n,ot.portfolio.portfolio[e].price=n}fetch("https://vue-js-http-8b6c0.firebaseio.com/stocks.json",{method:"PUT",body:R()(ot.stocks),headers:{"Content-Type":"application/json"}}).catch(function(t){return console.log(t)}),fetch("https://vue-js-http-8b6c0.firebaseio.com/portfolio.json",{method:"PUT",body:R()(ot.portfolio.portfolio),headers:{"Content-Type":"application/json"}}).catch(function(t){return console.log(t)})}},st={getStocks:function(t){return t.stocks}},at={state:ot,mutations:et,actions:nt,getters:st};n["a"].use(i["a"]);var ct=new i["a"].Store({modules:{funds:Q,stocks:at,portfolio:tt}}),rt=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-12 col-12"},[e("app-navbar")],1)]),e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-12 col-12"},[e("router-view")],1)])])},it=[],lt=(e("ab8b"),e("619c")),ut=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("router-link",{staticStyle:{color:"#28a745"},attrs:{to:"/","active-class":"active"}},[e("a",{staticClass:"navbar-brand"},[t._v("Stock Trader")])]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[e("ul",{staticClass:"navbar-nav"},[e("router-link",{attrs:{to:"/Portfolio",tag:"li","active-class":"active"}},[e("a",{staticClass:"nav-link"},[t._v("Portfolio")])]),e("router-link",{attrs:{to:"/Stocks",tag:"li","active-class":"active"}},[e("a",{staticClass:"nav-link"},[t._v("Stocks")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.endDay}},[t._v("End day")])]),e("li",{staticClass:"nav-item"},[e("span",{staticClass:"nav-link"},[t._v("Funds: $"+t._s(t.funds))])])],1)])],1)},ft=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],dt={computed:Object(r["a"])({},Object(i["c"])({funds:"getFunds"})),methods:{endDay:function(){this.$store.dispatch("randomizeStockPrices")}}},pt=dt,mt=Object(f["a"])(pt,ut,ft,!1,null,null,null),bt=mt.exports,vt={components:{appNavbar:bt},created:function(){this.$store.dispatch("getFundsFromApi"),this.$store.dispatch("getStocksFromApi"),this.$store.dispatch("getPortfolio")}},ht=vt,gt=Object(f["a"])(ht,rt,it,!1,null,null,null),yt=gt.exports;n["a"].config.productionTip=!1,n["a"].use(s["a"]),n["a"].use(lt["a"]);var kt=new s["a"]({routes:$,mode:"history"});new n["a"]({router:kt,store:ct,render:function(t){return t(yt)}}).$mount("#app")},"856d":function(t,o,e){"use strict";var n=e("1a8c"),s=e.n(n);s.a},"8bd5":function(t,o,e){"use strict";var n=e("ba32"),s=e.n(n);s.a},ba32:function(t,o,e){},bc5d:function(t,o,e){},c32b:function(t,o,e){"use strict";var n=e("1c05"),s=e.n(n);s.a}});
//# sourceMappingURL=app.13927e8c.js.map