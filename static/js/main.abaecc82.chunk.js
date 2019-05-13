(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(57)},24:function(e,t,a){},26:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=(a(24),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(26);var i=function(e){var t=e.title;return r.a.createElement("header",{className:"header",role:"banner"},r.a.createElement("h1",null,t))};i.defaultProps={title:"Toronto Waste Lookup"};var s=i,u=a(3),f=a(11),m=a(12),h=a(16),C=a(13),d=a(17),v=a(14),p=a.n(v);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var E=r.a.createElement("path",{"data-name":"Path 4",className:"starIcon",d:"M27.308,53.012a.889.889,0,0,1-.521-.168l-5.73-4.163-5.732,4.163a.885.885,0,0,1-1.363-.99l2.189-6.738-5.73-4.163a.887.887,0,0,1,.521-1.6h7.083l2.189-6.738a.885.885,0,0,1,1.684,0l2.189,6.738h7.083a.887.887,0,0,1,.521,1.6l-5.73,4.163,2.189,6.738a.884.884,0,0,1-.844,1.159Z",transform:"translate(-9.034 -31)",fill:"#ffffff"}),L=function(e){return r.a.createElement("svg",g({width:24.05,height:23.058,viewBox:"0 0 24.05 23.058"},e),E)},b=(a.p,a(47),function(e){var t=e.id,a=e.title,n=e.body,o=e.favourited,c=e.favoriteItem,l=o?"Remove from Favourites":"Add to Favourites",i=o?"favButton favourited":"favButton";return r.a.createElement("tr",null,r.a.createElement("td",{className:"star"},r.a.createElement("button",{className:i,onClick:function(){return c(t)},"aria-pressed":o,"aria-label":l},r.a.createElement(L,null))),r.a.createElement("td",{className:"title"},a),r.a.createElement("td",{className:"body",dangerouslySetInnerHTML:{__html:n}}))});b.defaultProps={id:0,title:"",body:"",favourited:!1,favoriteItem:null};var y=b,w=(a(49),function(e){var t=e.items,a=e.caption,n=e.favoriteItem,o=[];return t.forEach(function(e){o.push(r.a.createElement(y,{key:e.id,id:e.id,title:e.title,body:e.body,favourited:e.favourited,favoriteItem:n}))}),r.a.createElement("table",null,r.a.createElement("caption",null,a),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Favourite"),r.a.createElement("th",{scope:"col"},"Waste"),r.a.createElement("th",{scope:"col"},"Instructions"))),r.a.createElement("tbody",null,o))});w.defaultProps={caption:"Search Results",favoriteItem:null};var S=w,M=a(15);a(51);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var k=r.a.createElement("path",{"data-name":"Path 2",className:"searchIcon",d:"M9.975,50.434l13.3-13.3A17.661,17.661,0,0,1,25.22,15.082,17.429,17.429,0,1,1,49.868,39.731a17.223,17.223,0,0,1-22.054,1.947l-13.3,13.3ZM46.622,36.815A13.072,13.072,0,0,0,28.135,18.328a12.923,12.923,0,0,0,0,18.486h0A13.537,13.537,0,0,0,46.622,36.815Z",transform:"translate(-9.975 -9.975)",fill:"#fff"}),x=function(e){return r.a.createElement("svg",O({width:35,height:35,viewBox:"0 0 45 45"},e),k)},z=(a.p,function(e){var t=e.labelInput,a=e.labelSubmit,o=e.initialValue,c=e.handleSubmit,l=Object(n.useState)(o),i=Object(M.a)(l,2),s=i[0],u=i[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c(s)},className:"searchForm",role:"search"},r.a.createElement("input",{id:"searchInput",className:"searchInput",type:"text",value:s,onChange:function(e){return u(e.target.value)},placeholder:"Search wastes","aria-label":t,maxLength:"100",autoFocus:!0}),r.a.createElement("button",{className:"searchButton",type:"submit","aria-label":a,value:"Search"},r.a.createElement(x,null)))});z.defaultProps={initialValue:"takeout",labelInput:"Search Wastes",labelSubmit:"Search"};var A=z,j=(a(53),function(e){var t=e.title,a=e.children,n=e.icon;return r.a.createElement("div",{className:"StateInfo",role:"region","aria-live":"polite"},n,r.a.createElement("h2",null,t),a)});j.defaultProps={icon:null,title:"",children:null};var I=j;function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var P=r.a.createElement("g",null,r.a.createElement("circle",{cx:5,cy:30,r:5,transform:"translate(0 0)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"translate",begin:"0s",dur:"1s",repeatCount:"indefinite",values:"0 0; 0 -15; 0 0; 0 0; 0 0; 0 0; 0 0;"})),r.a.createElement("circle",{cx:25,cy:30,r:5,transform:"translate(0 0)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"translate",begin:"0.1s",dur:"1s",repeatCount:"indefinite",values:"0 0; 0 -15; 0 0; 0 0; 0 0; 0 0; 0 0;"})),r.a.createElement("circle",{cx:45,cy:30,r:5,transform:"translate(0 0)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"translate",begin:"0.2s",dur:"1s",repeatCount:"indefinite",values:"0 0; 0 -15; 0 0; 0 0; 0 0; 0 0; 0 0;"}))),W=function(e){return r.a.createElement("svg",N({id:"SvgIconLoading",width:80,height:40,viewBox:"0 0 48 40"},e),P)};a.p;function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var F=r.a.createElement("path",{d:"M 13.617188 4 C 12.854188 4 12.169125 4.4244687 11.828125 5.1054688 L 10.382812 8 L 8.2070312 8 C 6.6910312 8 5.3745781 9.0769063 5.1425781 10.503906 C 4.9995781 11.382906 5.2454063 12.270406 5.8164062 12.941406 C 6.1814063 13.371406 6.6595937 13.667891 7.1835938 13.837891 L 11.919922 59.310547 C 12.077922 60.844547 13.360344 62 14.902344 62 L 40.726562 62 C 42.136562 63.241 43.979 64 46 64 C 50.411 64 54 60.411 54 56 C 54 52.798 52.104859 50.036766 49.380859 48.759766 L 53.017578 13.841797 C 53.465578 13.696797 53.879656 13.459234 54.222656 13.115234 C 54.788656 12.546234 55.100609 11.792187 55.099609 10.992188 C 55.099609 10.154188 55.044719 9.4264531 55.011719 9.0644531 C 54.996719 8.9094531 54.971594 8.7632812 54.933594 8.6132812 C 54.255594 5.8972812 51.825391 4 49.025391 4 L 13.617188 4 z M 13.617188 6 L 49.025391 6 C 50.905391 6 52.538516 7.2735313 52.978516 9.0195312 L 52.996094 9.1035156 C 53.009094 9.1525156 53.017484 9.202 53.021484 9.25 C 53.051484 9.575 53.101562 10.233188 53.101562 10.992188 C 53.101562 11.259187 52.997641 11.512125 52.806641 11.703125 C 52.616641 11.894125 52.365563 12 52.101562 12 L 8.1015625 12 C 7.8075625 12 7.5298438 11.871484 7.3398438 11.646484 C 7.1468438 11.418484 7.0672344 11.127219 7.1152344 10.824219 C 7.1902344 10.362219 7.6690312 10 8.2070312 10 L 11.619141 10 L 11.654297 9.9296875 C 11.762297 9.9706875 11.877 10 12 10 L 43 10 C 43.552 10 44 9.552 44 9 C 44 8.448 43.552 8 43 8 L 12.617188 8 L 13.617188 6 z M 47 8 C 46.448 8 46 8.448 46 9 C 46 9.552 46.448 10 47 10 L 50 10 C 50.552 10 51 9.552 51 9 C 51 8.448 50.552 8 50 8 L 47 8 z M 9.2109375 14 L 50.990234 14 L 47.435547 48.136719 C 46.969547 48.051719 46.491 48 46 48 C 41.589 48 38 51.589 38 56 C 38 57.458 38.398031 58.822 39.082031 60 L 14.902344 60 C 14.388344 60 13.96025 59.614516 13.90625 59.103516 L 9.2109375 14 z M 27 18 C 26.448 18 26 18.448 26 19 C 26 19.552 26.448 20 27 20 L 33 20 C 33.552 20 34 19.552 34 19 C 34 18.448 33.552 18 33 18 L 27 18 z M 30.097656 26.681641 C 29.056656 26.702641 28.131266 27.185016 27.572266 28.041016 L 26.636719 29.476562 C 26.334719 29.938562 26.464734 30.557375 26.927734 30.859375 C 27.390734 31.160375 28.009547 31.030359 28.310547 30.568359 L 29.248047 29.134766 C 29.437047 28.844766 29.746844 28.641641 30.089844 28.681641 C 30.435844 28.682641 30.740734 28.849625 30.927734 29.140625 L 34.236328 34.302734 L 32.189453 33.910156 C 31.649453 33.806156 31.123531 34.160125 31.019531 34.703125 C 30.915531 35.245125 31.2695 35.769047 31.8125 35.873047 L 36.078125 36.691406 C 36.141125 36.703406 36.204578 36.708984 36.267578 36.708984 C 36.737578 36.708984 37.157047 36.375484 37.248047 35.896484 L 38.066406 31.630859 C 38.170406 31.088859 37.814484 30.564938 37.271484 30.460938 C 36.730484 30.358937 36.205562 30.712859 36.101562 31.255859 L 35.769531 32.986328 L 32.611328 28.060547 C 32.058328 27.201547 31.119656 26.685641 30.097656 26.681641 z M 25.863281 31.615234 C 25.701031 31.607859 25.538172 31.640531 25.388672 31.707031 L 21.386719 32.474609 C 20.844719 32.578609 20.487797 33.101531 20.591797 33.644531 C 20.695797 34.187531 21.218719 34.5445 21.761719 34.4375 L 23.628906 34.080078 L 20.181641 39.359375 C 19.578641 40.282375 19.529688 41.458734 20.054688 42.427734 C 20.580687 43.396734 21.592312 44 22.695312 44 L 25.101562 44 C 25.653562 44 26.101562 43.552 26.101562 43 C 26.101562 42.448 25.653562 42 25.101562 42 L 22.695312 42 C 22.157312 42 21.900453 41.633563 21.814453 41.476562 C 21.729453 41.318562 21.564422 40.902125 21.857422 40.453125 L 25.306641 35.169922 L 25.675781 37.09375 C 25.766781 37.57275 26.18625 37.904297 26.65625 37.904297 C 26.71825 37.904297 26.781703 37.898719 26.845703 37.886719 C 27.387703 37.782719 27.742672 37.259797 27.638672 36.716797 L 26.822266 32.451172 C 26.767266 32.164172 26.591328 31.936922 26.361328 31.794922 C 26.350328 31.786922 26.345984 31.774578 26.333984 31.767578 C 26.186484 31.671578 26.025531 31.622609 25.863281 31.615234 z M 37.783203 37.261719 C 37.655203 37.283844 37.530312 37.3315 37.414062 37.40625 C 36.949062 37.70425 36.813328 38.324062 37.111328 38.789062 L 38.183594 40.460938 C 38.472594 40.911938 38.30475 41.323469 38.21875 41.480469 C 38.13375 41.636469 37.876797 42 37.341797 42 L 30.896484 42 L 32.261719 40.636719 C 32.652719 40.245719 32.652719 39.612656 32.261719 39.222656 C 31.870719 38.831656 31.238656 38.831656 30.847656 39.222656 L 27.777344 42.292969 C 27.685344 42.384969 27.611547 42.495187 27.560547 42.617188 C 27.459547 42.862187 27.459547 43.138813 27.560547 43.382812 C 27.611547 43.504812 27.685344 43.615031 27.777344 43.707031 L 30.847656 46.777344 C 31.042656 46.972344 31.298688 47.070312 31.554688 47.070312 C 31.810688 47.070312 32.066719 46.972344 32.261719 46.777344 C 32.652719 46.387344 32.652719 45.754281 32.261719 45.363281 L 30.896484 44 L 37.341797 44 C 38.455797 44 39.440609 43.417453 39.974609 42.439453 C 40.508609 41.461453 40.468188 40.318859 39.867188 39.380859 L 38.796875 37.707031 C 38.572625 37.358281 38.167203 37.195344 37.783203 37.261719 z M 46 50 C 49.309 50 52 52.691 52 56 C 52 59.309 49.309 62 46 62 C 42.691 62 40 59.309 40 56 C 40 52.691 42.691 50 46 50 z M 16.101562 54 C 15.549563 54 15.101562 54.448 15.101562 55 L 15.101562 57 C 15.101563 57.552 15.548562 58 16.101562 58 C 16.653562 58 17.101562 57.552 17.101562 57 L 17.101562 55 C 17.101562 54.448 16.653562 54 16.101562 54 z M 21.101562 54 C 20.549563 54 20.101562 54.448 20.101562 55 L 20.101562 57 C 20.101562 57.552 20.549563 58 21.101562 58 C 21.653562 58 22.101562 57.552 22.101562 57 L 22.101562 55 C 22.101562 54.448 21.653562 54 21.101562 54 z M 26.101562 54 C 25.549563 54 25.101562 54.448 25.101562 55 L 25.101562 57 C 25.101562 57.552 25.549563 58 26.101562 58 C 26.653562 58 27.101562 57.552 27.101562 57 L 27.101562 55 C 27.101562 54.448 26.653562 54 26.101562 54 z M 31.101562 54 C 30.549563 54 30.101562 54.448 30.101562 55 L 30.101562 57 C 30.101562 57.552 30.549563 58 31.101562 58 C 31.653562 58 32.101562 57.552 32.101562 57 L 32.101562 55 C 32.101562 54.448 31.653562 54 31.101562 54 z M 36.101562 54 C 35.549563 54 35.101562 54.448 35.101562 55 L 35.101562 57 C 35.101562 57.552 35.549563 58 36.101562 58 C 36.653562 58 37.101562 57.552 37.101562 57 L 37.101562 55 C 37.101562 54.448 36.653562 54 36.101562 54 z M 46 54 A 2 2 0 0 0 44 56 A 2 2 0 0 0 46 58 A 2 2 0 0 0 48 56 A 2 2 0 0 0 46 54 z"}),T=function(e){return r.a.createElement("svg",B({id:"SvgIconEmpty",viewBox:"0 0 64 64"},e),F)};a.p;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var D=function(e){return r.a.createElement("svg",_({id:"SvgIconError",viewBox:"0 0 50 40"},e),r.a.createElement("path",{style:{lineHeight:"normal",textIndent:0,textAlign:"start",textDecorationLine:"none",textDecorationStyle:"solid",textDecorationColor:"#000",textTransform:"none",blockProgression:"tb",isolation:"auto",mixBlendMode:"normal"},d:"M 28.992188 8.546875 C 23.778469 8.546875 19.384687 11.660687 17.261719 16.070312 C 16.129497 15.28715 14.830797 14.722656 13.355469 14.722656 C 9.6400779 14.722656 6.6525916 17.663812 6.4296875 21.324219 C 2.7059141 22.670439 -5.9211895e-16 26.152406 0 30.330078 C 0 35.658457 4.340656 40 9.6699219 40 L 41.097656 40 C 46.002862 40 50 36.003939 50 31.099609 C 50 26.54878 46.511044 22.918295 42.095703 22.398438 C 42.110713 22.162872 42.142578 21.93944 42.142578 21.695312 C 42.142578 14.444926 36.243594 8.546875 28.992188 8.546875 z M 28.992188 10.546875 C 35.16278 10.546875 40.142578 15.5257 40.142578 21.695312 C 40.142578 22.150412 40.104655 22.610168 40.046875 23.078125 L 39.908203 24.199219 L 41.039062 24.199219 C 41.159062 24.199219 41.17766 24.197266 41.097656 24.197266 C 44.922298 24.197313 48 27.275939 48 31.099609 C 48 34.923279 44.92245 38 41.097656 38 L 9.6699219 38 C 5.4211878 38 2 34.577699 2 30.330078 C 2 26.793709 4.3861186 23.841074 7.6269531 22.945312 L 8.3867188 22.736328 L 8.359375 21.947266 C 8.354375 21.80725 8.3476562 21.737037 8.3476562 21.730469 C 8.3476562 18.952955 10.576792 16.722656 13.355469 16.722656 C 14.744384 16.722656 15.991299 17.284551 16.898438 18.193359 L 18.001953 19.298828 L 18.544922 17.833984 C 20.117523 13.584107 24.185065 10.546875 28.992188 10.546875 z M 19 22 A 2 2 0 0 0 17 24 A 2 2 0 0 0 19 26 A 2 2 0 0 0 21 24 A 2 2 0 0 0 19 22 z M 31 22 A 2 2 0 0 0 29 24 A 2 2 0 0 0 31 26 A 2 2 0 0 0 33 24 A 2 2 0 0 0 31 22 z M 25 29 C 18.980478 29 15.244141 33.345703 15.244141 33.345703 A 1.0001 1.0001 0 1 0 16.755859 34.654297 C 16.755859 34.654297 19.943522 31 25 31 C 30.056478 31 33.244141 34.654297 33.244141 34.654297 A 1.0001 1.0001 0 1 0 34.755859 33.345703 C 34.755859 33.345703 31.019522 29 25 29 z",fontWeight:400,fontFamily:"sans-serif",whiteSpace:"normal",overflow:"visible"}))};a.p;function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var U=r.a.createElement("g",{id:"EmptySearchIcon",transform:"translate(-557.874 -465.873)"},r.a.createElement("g",{id:"Path_2",transform:"translate(549.898 457.898)"},r.a.createElement("path",{d:"M15.5,64.9l16.2-16.2c3.6,2.6,7.8,3.8,12,3.8c5.5,0,10.9-2.1,15-6.2c8.3-8.3,8.3-21.8,0-30.1c-4.2-4.2-9.6-6.2-15-6.2 s-10.9,2.1-15,6.2c-7.1,7.5-7.9,18.6-2.4,26.9L10,59.4L15.5,64.9 M43.4,15.4c4.1,0,8.1,1.6,11.3,4.8c6.3,6.3,6.3,16.2,0,22.6 c-3.2,3-7.2,4.5-11.3,4.5s-8.1-1.5-11.3-4.5c-6.3-6.3-6.3-16.2,0-22.6C35.3,17,39.4,15.4,43.4,15.4 M15.5,66.9 c-0.5,0-1-0.2-1.4-0.6l-5.5-5.5c-0.8-0.8-0.8-2,0-2.8l15.1-15.1C22.6,41,21.8,39,21.3,37c-0.6-2.5-0.9-5.2-0.6-7.8 c0.2-2.6,0.9-5.2,1.9-7.6c1.1-2.5,2.6-4.8,4.5-6.8c0,0,0,0,0,0c2.2-2.2,4.8-3.9,7.7-5.1C37.7,8.5,40.6,8,43.6,8s6,0.6,8.8,1.7 c2.9,1.2,5.5,2.9,7.7,5.1c2.2,2.2,3.9,4.8,5.1,7.7c1.1,2.8,1.7,5.7,1.7,8.8c0,3-0.6,6-1.7,8.8c-1.2,2.9-2.9,5.5-5.1,7.7 c-2.2,2.2-4.7,3.9-7.6,5c-2.8,1.1-5.8,1.7-8.8,1.7c-4.2,0-8.2-1.1-11.7-3.2L16.9,66.3C16.6,66.7,16.1,66.9,15.5,66.9z M33.5,41.3 c2.7,2.5,6.2,3.9,9.9,3.9s7.2-1.4,9.9-3.9c2.7-2.7,4.1-6.2,4.1-9.8c0-3.7-1.5-7.2-4.2-9.9c-2.7-2.7-6.2-4.2-9.9-4.2 c-3.7,0-7.2,1.5-9.9,4.2c-2.7,2.7-4.2,6.2-4.2,9.9C29.4,35.1,30.9,38.6,33.5,41.3z"})),r.a.createElement("path",{id:"EmptyIcon",d:"M593.7,479.3c-1,0-2,0.5-2.5,1.4l-0.9,1.4c-0.3,0.5-0.1,1.1,0.3,1.4c0.4,0.3,1,0.1,1.3-0.3l0.9-1.4 c0.2-0.3,0.5-0.5,0.8-0.5c0.3,0,0.7,0.2,0.8,0.5l3.3,5.2l-2-0.4c-0.5-0.1-1.1,0.2-1.2,0.8c-0.1,0.5,0.2,1.1,0.8,1.2c0,0,0,0,0.1,0 l4.3,0.8c0.1,0,0.1,0,0.2,0c0.5,0,0.9-0.3,1-0.8l0.8-4.3c0.1-0.5-0.3-1.1-0.8-1.2s-1.1,0.3-1.2,0.8l-0.3,1.7l-3.2-4.9 C595.7,479.8,594.7,479.3,593.7,479.3z M589.5,484.2c-0.2,0-0.3,0-0.5,0.1l-4,0.8c-0.5,0.1-0.9,0.6-0.8,1.1 c0.1,0.5,0.6,0.9,1.1,0.8c0,0,0.1,0,0.1,0l1.9-0.4l-3.4,5.3c-0.9,1.4-0.5,3.2,0.9,4.2c0.5,0.3,1.1,0.5,1.6,0.5h2.4c0.6,0,1-0.4,1-1 s-0.4-1-1-1h-2.4c-0.6,0-1-0.4-1-1c0-0.2,0.1-0.4,0.2-0.5l3.4-5.3l0.4,1.9c0.1,0.5,0.5,0.8,1,0.8c0.1,0,0.1,0,0.2,0 c0.5-0.1,0.9-0.6,0.8-1.2l-0.8-4.3c-0.1-0.3-0.2-0.5-0.5-0.7c0,0,0,0,0,0C589.8,484.2,589.6,484.2,589.5,484.2L589.5,484.2z M601.4,489.8c-0.1,0-0.3,0.1-0.4,0.1c-0.5,0.3-0.6,0.9-0.3,1.4c0,0,0,0,0,0l1.1,1.7c0.3,0.5,0.2,1.1-0.3,1.4 c-0.2,0.1-0.4,0.2-0.5,0.2h-6.4l1.4-1.4c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0c0,0,0,0,0,0l-3.1,3.1c-0.4,0.4-0.4,1,0,1.4l3.1,3.1 c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4c0,0,0,0,0,0l-1.4-1.4h6.4c1.7,0,3-1.3,3-3c0-0.6-0.2-1.1-0.5-1.6l-1.1-1.7 C602.2,489.9,601.8,489.8,601.4,489.8L601.4,489.8z"})),V=function(e){return r.a.createElement("svg",R({version:1.1,id:"Camada_1",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 59 59",style:{enableBackground:"new 0 0 59 59"},xmlSpace:"preserve"},e),U)},Z=(a.p,a(55),function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={items:{},results:[],favourites:[],lastSearch:"",loading:!0,error:!1},a.handleFavorite=function(e){var t=a.state.items,n=a.state.favourites,r=Object(u.a)({},t),o=r[e];o.favourited=!o.favourited,o.favourited?n.push(e):n=n.filter(function(t){return t!==e}),a.setState({items:r,favourites:n})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000").then(function(t){t.data.forEach(function(t,a){t.id=a,t.body=e.decode(t.body),t.favourited=!1}),e.setState({items:Object(u.a)({},t.data),loading:!1,error:!1},function(){return e.search("takeout")})}).catch(function(t){e.setState({loading:!1,error:!0})})}},{key:"decode",value:function(e){return(new DOMParser).parseFromString(e,"text/html").documentElement.textContent}},{key:"search",value:function(e){var t=[];if(e.length>0){var a=e.toLowerCase().replace(/\s/g,""),n=this.state.items;Object.keys(n).forEach(function(e){var r=n[e];r.keywords.toLowerCase().replace(/\s/g,"").includes(a)&&t.push(r.id)})}this.setState({results:t,lastSearch:e})}},{key:"getCurrentStateLayout",value:function(e,t,a){return t?r.a.createElement(I,{title:"Loading Database...",icon:r.a.createElement(W,null)}):e?r.a.createElement(I,{title:"Sorry, there was an error",icon:r.a.createElement(D,null)},"There was an error connecting to the database.",r.a.createElement("br",null),"Please reload the page and try again."):a?r.a.createElement(I,{title:"Sorry, nothing found",icon:r.a.createElement(T,null)},r.a.createElement("span",null,'No results for "'.concat(a),"."),r.a.createElement("br",null),r.a.createElement("span",null,"Try searching for something else."),r.a.createElement("span",null,"e.g.: takeout, plastic, cardboard.")):r.a.createElement(I,{title:"Search on Waste Wizard",icon:r.a.createElement(V,null)},r.a.createElement("span",null,"Use the input above to search the Waste Wizard."),r.a.createElement("span",null,"e.g.: takeout, plastic, cardboard."))}},{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.results,o=t.favourites,c=t.lastSearch,l=t.loading,i=t.error,s=null,u=this.getCurrentStateLayout(i,l,c);if(n.length>0){var f=[];n.forEach(function(e){f.push(a[e])}),u=r.a.createElement("section",{className:"resultSection"},r.a.createElement("div",{role:"region","aria-live":"polite"},r.a.createElement("span",{className:"visually-hidden"},"".concat(n.length," results were found for ").concat(c))),r.a.createElement(S,{caption:"Search Results for ".concat(c),items:f,favoriteItem:this.handleFavorite}))}if(o.length>0){var m=[];o.forEach(function(e){m.push(a[e])}),s=r.a.createElement("section",{className:"favouriteSection"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Favourites"),r.a.createElement(S,{caption:"Favourites List",items:m,favoriteItem:this.handleFavorite})))}return r.a.createElement("main",{role:"main"},r.a.createElement("div",{className:"container"},r.a.createElement(A,{initialValue:"takeout",handleSubmit:function(t){return e.search(t)}}),u),s)}}]),t}(n.Component));Object(o.render)(r.a.createElement(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(Z,null))},null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Shopify-Summer2019",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Shopify-Summer2019","/service-worker.js");c?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):l(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):l(t,e)})}}()}},[[18,2,1]]]);
//# sourceMappingURL=main.abaecc82.chunk.js.map