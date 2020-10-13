(this["webpackJsonprest-countries"]=this["webpackJsonprest-countries"]||[]).push([[0],{10:function(e,t,a){e.exports={header:"Header_header__36PWq",onOpen:"Header_onOpen__3inAI",buttonToggle:"Header_buttonToggle__3LmNQ",dark:"Header_dark__geoX5"}},13:function(e,t,a){e.exports={countries:"CountryList_countries__JCOFs",onOpen:"CountryList_onOpen__2LJ2T",darkCountries:"CountryList_darkCountries__27XtW"}},2:function(e,t,a){e.exports={detailedCountry:"DetailedCountry_detailedCountry___igUT",onOpen:"DetailedCountry_onOpen__1Lde-",flag:"DetailedCountry_flag__2Ga2c",bottomSection:"DetailedCountry_bottomSection__1i5rk",buttonBack:"DetailedCountry_buttonBack__qBIG_",buttonBorder:"DetailedCountry_buttonBorder__3C8UK",borderCountries:"DetailedCountry_borderCountries__1f3_Q",borders:"DetailedCountry_borders__ImfCe",dark:"DetailedCountry_dark__1fpgL",buttonBackBlack:"DetailedCountry_buttonBackBlack__3GRHc"}},28:function(e,t,a){e.exports=a(55)},33:function(e,t,a){},4:function(e,t,a){e.exports={filters:"Filters_filters__1_6M_",onOpen:"Filters_onOpen__3iGyi",country:"Filters_country__CQxDm","fa-search":"Filters_fa-search__33kAY",region:"Filters_region__hYGsR",dark:"Filters_dark__2_QWw",darkFilters:"Filters_darkFilters__2r8e-"}},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),o=a.n(l),c=(a(33),a(6)),i=a.n(c),u=a(7),s=a(8),m=a(3),d=a.n(m),E=a(10),p=a.n(E),g=a(11),f=a(12),v=function(e){var t=e.theme,a=e.handleThemeToggle;return t?r.a.createElement("div",{className:d()(p.a.header,p.a.dark)},r.a.createElement("h2",null,"Where in the world?"),r.a.createElement("button",{className:d()(p.a.buttonToggle,p.a.dark),onClick:a},r.a.createElement(g.a,{icon:f.c})," Light Mode")):r.a.createElement("div",{className:p.a.header},r.a.createElement("h2",null,"Where in the world?"),r.a.createElement("button",{className:p.a.buttonToggle,onClick:a},r.a.createElement(g.a,{icon:f.a})," Dark Mode"))},h=a(4),C=a.n(h),_=function(e){var t=e.theme,a=e.countriesFilter,n=e.onCountryFilterChange,l=e.regionFilter,o=e.onRegionFilterChange,c=function(e){o(e.target.value)};return t?r.a.createElement("div",{className:d()(C.a.filters,C.a.darkFilters)},r.a.createElement("div",{className:d()(C.a.country,C.a.dark)},r.a.createElement(g.a,{icon:f.b}),r.a.createElement("input",{value:a,type:"text",name:"countryPicker",id:d()(C.a.countryPicker,C.a.dark),placeholder:"Search for a country...",onChange:n})),r.a.createElement("div",{className:d()(C.a.region,C.a.dark)},r.a.createElement("select",{value:l,name:"Filter by Region",id:d()(C.a.regionFilter,C.a.dark),onChange:c},r.a.createElement("option",{value:""},"Filter By Region"),r.a.createElement("option",{value:""},"None"),r.a.createElement("option",{value:"Africa"},"Africa"),r.a.createElement("option",{value:"America"},"America"),r.a.createElement("option",{value:"Asia"},"Asia"),r.a.createElement("option",{value:"Europe"},"Europe"),r.a.createElement("option",{value:"Oceania"},"Oceania")))):r.a.createElement("div",{className:C.a.filters},r.a.createElement("div",{className:C.a.country},r.a.createElement(g.a,{icon:f.b}),r.a.createElement("input",{value:a,type:"text",name:"countryPicker",id:C.a.countryPicker,placeholder:"Search for a country...",onChange:n})),r.a.createElement("div",{className:C.a.region},r.a.createElement("select",{value:l,name:"Filter by Region",id:C.a.regionFilter,onChange:c},r.a.createElement("option",{value:""},"Filter By Region"),r.a.createElement("option",{value:""},"None"),r.a.createElement("option",{value:"Africa"},"Africa"),r.a.createElement("option",{value:"America"},"America"),r.a.createElement("option",{value:"Asia"},"Asia"),r.a.createElement("option",{value:"Europe"},"Europe"),r.a.createElement("option",{value:"Oceania"},"Oceania"))))},y=a(13),b=a.n(y),k=function(e){var t,a=e.theme,n=e.countries,l=e.countryFilter,o=e.regionFilter,c=e.showCountryDetails,i=e.onShowCountryDetails,u=e.onHideCountryDetails;if(t=l||o?n.filter((function(e){if(e.name.toLowerCase().includes(l.toLowerCase())&&e.region.toLowerCase().includes(o.toLowerCase()))return e})):n,a){if(t.length>1&&!c)return r.a.createElement("div",{className:d()(b.a.countries,b.a.darkCountries)},t.map((function(e){return r.a.createElement(w,{theme:a,key:e.numericCode,country:e,onShowCountryDetails:i})})));if(1===t.length&&!c){var s=t[0];return r.a.createElement(A,{theme:a,country:s,onHideCountryDetails:u,onShowCountryDetails:i})}if(t.length<1&&!c)return r.a.createElement("div",null,r.a.createElement("h2",null,"Unfortunately, there are no countries matching the filters."));if(c)return r.a.createElement(A,{theme:a,country:c,onHideCountryDetails:u,onShowCountryDetails:i})}else{if(t.length>1&&!c)return r.a.createElement("div",{className:b.a.countries},t.map((function(e){return r.a.createElement(w,{theme:a,key:e.numericCode,country:e,onShowCountryDetails:i})})));if(1===t.length&&!c){var m=t[0];return r.a.createElement(A,{theme:a,country:m,onHideCountryDetails:u,onShowCountryDetails:i})}if(t.length<1&&!c)return r.a.createElement("div",null,r.a.createElement("h2",null,"Unfortunately, there are no countries matching the filters."));if(c)return r.a.createElement(A,{theme:a,country:c,onHideCountryDetails:u,onShowCountryDetails:i})}},N=a(9),D=a.n(N),w=function(e){var t=e.theme,a=e.country,n=e.onShowCountryDetails,l=a.name,o=a.population,c=a.region,i=a.capital,u=a.flag;return t?r.a.createElement("div",{className:d()(D.a.countryCard,D.a.dark),onClick:function(){return n(a)}},r.a.createElement("div",{className:D.a.image},r.a.createElement("img",{src:u,alt:""})),r.a.createElement("div",{className:D.a.details},r.a.createElement("h3",null,l),r.a.createElement("p",null,r.a.createElement("strong",null,"Population:")," ",o),r.a.createElement("p",null,r.a.createElement("strong",null,"Region:")," ",c),r.a.createElement("p",null,r.a.createElement("strong",null,"Capital:")," ",i))):r.a.createElement("div",{className:D.a.countryCard,onClick:function(){return n(a)}},r.a.createElement("div",{className:D.a.image},r.a.createElement("img",{src:u,alt:""})),r.a.createElement("div",{className:D.a.details},r.a.createElement("h3",null,l),r.a.createElement("p",null,r.a.createElement("strong",null,"Population:")," ",o),r.a.createElement("p",null,r.a.createElement("strong",null,"Region:")," ",c),r.a.createElement("p",null,r.a.createElement("strong",null,"Capital:")," ",i)))},O=a(2),F=a.n(O),S=a(16),B=a.n(S),j="https://restcountries.eu/rest/v2",x=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("".concat(j,"/all"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("".concat(j,"/alpha/").concat(t));case 3:return a=e.sent,n=a.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),A=function(e){var t,a,l,o,c=e.theme,m=e.country,E=e.onShowCountryDetails,p=e.onHideCountryDetails,g=Object(n.useState)([]),f=Object(s.a)(g,2),v=f[0],h=f[1],C=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve(L(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(m.borders.map((function(e){return C(e)})));case 2:(t=e.sent)&&h(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]),c?r.a.createElement("div",{className:d()(F.a.detailedCountry,F.a.dark)},r.a.createElement("button",{className:F.a.buttonBack,onClick:p}," \u2190 Back"),r.a.createElement("div",{className:F.a.flag},r.a.createElement("img",{src:m.flag,alt:""})),r.a.createElement("div",{className:F.a.details},r.a.createElement("h1",null,m.name),r.a.createElement("div",{className:F.a.subDetails},r.a.createElement("div",{className:F.a.topSection},r.a.createElement("p",null,r.a.createElement("strong",null,"Native name: "),m.nativeName),r.a.createElement("p",null,r.a.createElement("strong",null,"Population: "),m.population),r.a.createElement("p",null,r.a.createElement("strong",null,"Region: "),m.region),r.a.createElement("p",null,r.a.createElement("strong",null,"Sub Region: "),m.subregion),r.a.createElement("p",null,r.a.createElement("strong",null,"Capital: "),m.capital)),r.a.createElement("div",{className:F.a.bottomSection},r.a.createElement("p",null,r.a.createElement("strong",null,"Top Level Domain: "),m.topLevelDomain[0]),r.a.createElement("p",null,r.a.createElement("strong",null,"Currencies: "),null===(t=m.currencies)||void 0===t?void 0:t.map((function(e){return e.name})).reduce((function(e,t){return[e,", ",t]}))),r.a.createElement("p",null,r.a.createElement("strong",null,"Languages: "),null===(a=m.languages)||void 0===a?void 0:a.map((function(e){return e.name})).reduce((function(e,t){return[e,", ",t]}))))),r.a.createElement("div",{className:F.a.borderCountries},r.a.createElement("p",{className:F.a.title},r.a.createElement("strong",null,"Border Countries:")),r.a.createElement("div",{className:F.a.borders},v.map((function(e){return r.a.createElement("button",{className:d()(F.a.buttonBorder,F.a.buttonBackBlack),key:e.alphaCode,onClick:function(){return E(e)}},e.name)})))))):r.a.createElement("div",{className:F.a.detailedCountry},r.a.createElement("button",{className:F.a.buttonBack,onClick:p}," \u2190 Back"),r.a.createElement("div",{className:F.a.flag},r.a.createElement("img",{src:m.flag,alt:""})),r.a.createElement("div",{className:F.a.details},r.a.createElement("h1",null,m.name),r.a.createElement("div",{className:F.a.subDetails},r.a.createElement("div",{className:F.a.topSection},r.a.createElement("p",null,r.a.createElement("strong",null,"Native name: "),m.nativeName),r.a.createElement("p",null,r.a.createElement("strong",null,"Population: "),m.population),r.a.createElement("p",null,r.a.createElement("strong",null,"Region: "),m.region),r.a.createElement("p",null,r.a.createElement("strong",null,"Sub Region: "),m.subregion),r.a.createElement("p",null,r.a.createElement("strong",null,"Capital: "),m.capital)),r.a.createElement("div",{className:F.a.bottomSection},r.a.createElement("p",null,r.a.createElement("strong",null,"Top Level Domain: "),m.topLevelDomain[0]),r.a.createElement("p",null,r.a.createElement("strong",null,"Currencies: "),null===(l=m.currencies)||void 0===l?void 0:l.map((function(e){return e.name})).reduce((function(e,t){return[e,", ",t]}))),r.a.createElement("p",null,r.a.createElement("strong",null,"Languages: "),null===(o=m.languages)||void 0===o?void 0:o.map((function(e){return e.name})).reduce((function(e,t){return[e,", ",t]}))))),r.a.createElement("div",{className:F.a.borderCountries},r.a.createElement("p",{className:F.a.title},r.a.createElement("strong",null,"Border Countries:")),r.a.createElement("div",{className:F.a.borders},v.map((function(e){return r.a.createElement("button",{className:F.a.buttonBorder,key:e.alphaCode,onClick:function(){return E(e)}},e.name)}))))))};var T=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(""),c=Object(s.a)(o,2),m=c[0],d=c[1],E=Object(n.useState)(""),p=Object(s.a)(E,2),g=p[0],f=p[1],h=Object(n.useState)(),C=Object(s.a)(h,2),y=C[0],b=C[1],N=Object(n.useState)(!1),D=Object(s.a)(N,2),w=D[0],O=D[1];Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:(t=e.sent)&&(console.log(t),l(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var F=function(e){d(""),b(e)},S=function(){d(""),b()},B=function(){O(!w)};return y?r.a.createElement("div",{className:"App"},r.a.createElement(v,{theme:w,handleThemeToggle:B}),r.a.createElement(k,{theme:w,countries:a,countryFilter:m,regionFilter:g,showCountryDetails:y,onShowCountryDetails:F,onHideCountryDetails:S})):r.a.createElement("div",{className:"App"},r.a.createElement(v,{theme:w,handleThemeToggle:B}),r.a.createElement(_,{theme:w,countriesFilter:m,onCountryFilterChange:function(e){d(e.target.value),b()},regionFilter:g,onRegionFilterChange:function(e){f(e),b()}}),r.a.createElement(k,{theme:w,countries:a,countryFilter:m,regionFilter:g,showCountryDetails:y,onShowCountryDetails:F,onHideCountryDetails:S}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))},9:function(e,t,a){e.exports={countryCard:"CountryCard_countryCard__1xcrV",image:"CountryCard_image__1y2Uh",details:"CountryCard_details__5O-T_",dark:"CountryCard_dark__1_QWZ"}}},[[28,1,2]]]);
//# sourceMappingURL=main.3f632e6b.chunk.js.map