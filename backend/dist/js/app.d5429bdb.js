(function(){"use strict";var t={2731:function(t,e,r){var a=r(9242),n=r(3396);function o(t,e,r,a,o,i){const c=(0,n.up)("NavBar"),s=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(c),(0,n.Wm)(s)],64)}const i=t=>((0,n.dD)("data-v-7947cfbe"),t=t(),(0,n.Cn)(),t),c={id:"navbar"},s=i((()=>(0,n._)("h1",null,"Bike's Heaven",-1))),d=i((()=>(0,n._)("button",{class:"shopping-cart"},"Shopping Cart",-1)));function u(t,e,r,a,o,i){const u=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",c,[(0,n.Wm)(u,{to:"/"},{default:(0,n.w5)((()=>[s])),_:1}),(0,n.Wm)(u,{to:"/cart"},{default:(0,n.w5)((()=>[d])),_:1})])}var l={name:"NavBar"},p=r(89);const g=(0,p.Z)(l,[["render",u],["__scopeId","data-v-7947cfbe"]]);var m=g,v={name:"App",components:{NavBar:m}};const h=(0,p.Z)(v,[["render",o]]);var f=h,w=r(2483),k=r(7139);const b=t=>((0,n.dD)("data-v-119139c3"),t=t(),(0,n.Cn)(),t),_={id:"page-warp"},C={class:"grid-wrap"},y=["src"],D={class:"product-name"},P={class:"product-price"},I=b((()=>(0,n._)("button",null,"View details",-1)));function B(t,e,r,a,o,i){const c=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("div",C,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.products,(t=>((0,n.wg)(),(0,n.iD)("div",{class:"product-item",key:t.id},[(0,n._)("img",{src:t.imageUrl,alt:"bikeImage"},null,8,y),(0,n._)("h3",D,(0,k.zw)(t.name),1),(0,n._)("p",P,"$"+(0,k.zw)(t.price),1),(0,n.Wm)(c,{to:"/bikeDetail/"+t.id},{default:(0,n.w5)((()=>[I])),_:2},1032,["to"])])))),128))])])}var O=r(6943),Z={name:"BikeCatalogPage",data(){return{title:"Bike Catalog",products:[]}},async created(){const t=await O.Z.get("/api/products"),e=t.data;this.products=e}};const z=(0,p.Z)(Z,[["render",B],["__scopeId","data-v-119139c3"]]);var T=z;const S=t=>((0,n.dD)("data-v-3774dcc5"),t=t(),(0,n.Cn)(),t),$={id:"page-wrap"},j=S((()=>(0,n._)("h1",null,"Shopping Cart",-1))),W=["src"],E={class:"details-wrap"},M=["onClick"],N={id:"total-price"},x=S((()=>(0,n._)("button",{id:"checkout-button"},"Proceed to checkout",-1)));function F(t,e,r,a,o,i){return(0,n.wg)(),(0,n.iD)("div",$,[j,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.cartItems,(t=>((0,n.wg)(),(0,n.iD)("div",{key:t.id,class:"product-container"},[(0,n._)("img",{class:"product-image",src:t.imageUrl,alt:"bikeImage"},null,8,W),(0,n._)("div",E,[(0,n._)("h3",null,(0,k.zw)(t.name),1),(0,n._)("p",null,"$"+(0,k.zw)(t.price),1)]),(0,n._)("button",{class:"remove-button",onClick:e=>i.removeFromCart(t.id)},"Remove from Cart",8,M)])))),128)),(0,n._)("h3",N,"Total: $"+(0,k.zw)(i.totalPrice),1),x])}var H={name:"CartPage",data(){return{cartItems:[]}},computed:{totalPrice(){let t=0;for(let e=0;e<this.cartItems.length;e++)t+=Number(this.cartItems[e].price.replace(",","")),console.log(t);return t.toLocaleString()}},async created(){const t=await O.Z.get("/api/users/123456789/cart"),e=t.data;this.cartItems=e},methods:{async removeFromCart(t){const e=await O.Z["delete"](`/api/users/123456789/cart/${t}`),r=e.data;this.cartItems=r}}};const q=(0,p.Z)(H,[["render",F],["__scopeId","data-v-3774dcc5"]]);var A=q;const U=t=>((0,n.dD)("data-v-71d24ab6"),t=t(),(0,n.Cn)(),t),Y={key:0,id:"page-wrap"},K={id:"img-wrap"},R=["src"],L={id:"product-details"},V={id:"price"},G=U((()=>(0,n._)("h4",null,"Discription",-1))),J={key:1};function Q(t,e,r,a,o,i){const c=(0,n.up)("ErrorPage");return o.product?((0,n.wg)(),(0,n.iD)("div",Y,[(0,n._)("div",K,[(0,n._)("img",{src:o.product.imageUrl,alt:"bikeImage"},null,8,R)]),(0,n._)("div",L,[(0,n._)("h1",null,(0,k.zw)(o.product.name),1),(0,n._)("h3",V,"$"+(0,k.zw)(o.product.price),1),(0,n._)("p",null,"Average rating: "+(0,k.zw)(o.product.averageRating),1),i.alreadyPresent||o.showSuccessMessage?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("button",{key:0,id:"add-to-cart",onClick:e[0]||(e[0]=t=>i.addToCart(o.product.id))},"Add to Cart")),!i.alreadyPresent&&o.showSuccessMessage?((0,n.wg)(),(0,n.iD)("button",{key:1,id:"add-to-cart",class:"green-button",onClick:e[1]||(e[1]=t=>i.addToCart(o.product.id))},"successfully added to cart")):(0,n.kq)("",!0),i.alreadyPresent?((0,n.wg)(),(0,n.iD)("button",{key:2,id:"add-to-cart",class:"grey-button",onClick:e[2]||(e[2]=t=>i.addToCart(o.product.id))},"Item is already in the Cart")):(0,n.kq)("",!0),G,(0,n._)("p",null,(0,k.zw)(o.product.description),1)])])):((0,n.wg)(),(0,n.iD)("div",J,[(0,n.Wm)(c)]))}r(7658);function X(t,e,r,a,o,i){return(0,n.wg)(),(0,n.iD)("h1",null,"Error 404: Page Not Found")}var tt={name:"ErrorPage"};const et=(0,p.Z)(tt,[["render",X]]);var rt=et,at={name:"BikeDetailPage",data(){return{product:[],cartBikes:[],showSuccessMessage:!1}},async created(){const t=this.$route.params.id,e=await O.Z.get("/api/products/"+t);this.product=e.data;const r=await O.Z.get("/api/users/123456789/cart");this.cartBikes=r.data,console.log()},components:{ErrorPage:rt},methods:{async addToCart(t){console.log("id",t),t&&(await O.Z.post("/api/users/123456789/cart/",{id:t}),this.showSuccessMessage=!0,setTimeout((()=>{this.$router.push("/bikeCatalog")}),2e3))}},computed:{alreadyPresent(){return console.log(this.cartBikes),this.cartBikes.some((t=>t.id==this.product.id))}}};const nt=(0,p.Z)(at,[["render",Q],["__scopeId","data-v-71d24ab6"]]);var ot=nt;const it=[{path:"/bikeCatalog",name:"BikeCatalog",component:T},{path:"/bikeDetail/:id",name:"bikeDetails",component:ot},{path:"/cart",name:"cartPage",component:A},{path:"/",redirect:"/bikeCatalog"},{path:"/:errorPath(.*)*",component:rt}],ct=(0,w.p7)({history:(0,w.PO)("/"),routes:it});var st=ct;(0,a.ri)(f).use(st).mount("#app")}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,o){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],o=t[u][2];for(var c=!0,s=0;s<a.length;s++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](a[s])}))?a.splice(s--,1):(c=!1,o<i&&(i=o));if(c){t.splice(u--,1);var d=n();void 0!==d&&(e=d)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,n,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,i=a[0],c=a[1],s=a[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(s)var u=s(r)}for(e&&e(a);d<i.length;d++)o=i[d],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},a=self["webpackChunkbike_shopping_website"]=self["webpackChunkbike_shopping_website"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(2731)}));a=r.O(a)})();
//# sourceMappingURL=app.d5429bdb.js.map