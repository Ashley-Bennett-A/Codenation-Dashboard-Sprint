(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/stackOverflow.92d70dec.svg"},function(e,t,a){e.exports=a.p+"static/media/codepen.3fc5b513.png"},function(e,t,a){e.exports=a.p+"static/media/codesandbox.040e76c0.svg"},function(e,t,a){e.exports=a.p+"static/media/csstricks.c469bf91.png"},function(e,t,a){e.exports=a.p+"static/media/fontawesome.84580f12.svg"},function(e,t,a){e.exports=a.p+"static/media/googlefonts.b517b3a1.png"},function(e,t,a){e.exports=a.p+"static/media/bada55_io.edf55b9f.png"},function(e,t,a){e.exports=a.p+"static/media/hexacolor.7fb94052.png"},function(e,t,a){e.exports=a.p+"static/media/chuck_norris.3bb4ef9a.png"},function(e,t,a){e.exports=a(28)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),l=(a(24),a(1)),o=a(2),s=a(4),u=a(3),m=a(5);var h=function(e){var t,a;return null!==e.image?(a=e.image,t="newsCardImage"):(a="https://www.placecage.com/300/200",t="newsCardImage"),r.a.createElement("div",{className:t},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:a,alt:""})))};var p=function(e){return r.a.createElement("div",{className:"newsCardText"},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("h1",null,e.title)))};var d=function(e){return r.a.createElement("div",{className:"newsCard"},r.a.createElement(h,{image:e.image,link:e.link}),r.a.createElement(p,{title:e.title,subtitle:e.subtitle,link:e.link}))},f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articles:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://newsapi.org/v2/top-headlines?category=technology&country=gb&apiKey=2d2aa9955aba4a1d80fa63a8ca438e2e").then(function(e){return e.json()}).then(function(t){console.log(t.articles),e.setState({articles:t.articles})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"ticker-wrap"},r.a.createElement("div",{className:"news"},this.state.articles.map(function(e){return r.a.createElement(d,{link:e.url,title:e.title,subtitle:e.description,image:e.urlToImage})})))}}]),t}(r.a.Component),g=(a(25),a(7),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={key:"b9135e48ae5fbef6a2aa0237402ab6e9",long:null,lat:null,res:null,tempIndi:"normal",locationAccess:!1},a.postition=function(e){var t=e.coords;a.setState({lat:t.latitude}),a.setState({long:t.longitude}),fetch("https://api.openweathermap.org/data/2.5/weather?lat="+a.state.lat+"&lon="+a.state.long+"&APPID="+a.state.key).then(function(e){return e.json()}).then(function(e){a.setState({res:e,locationAccess:!0}),a.tempCheck(e.main.temp)})},a.weatherDisplay=function(e){var t=Math.floor(e-273.15);return r.a.createElement("div",{className:"weatherDisplay"},r.a.createElement("h3",null,a.state.res.name),r.a.createElement("h3",null,r.a.createElement("i",{class:"fas fa-temperature-high "+a.state.tempIndi})," ",t,"\xb0C"),r.a.createElement("span",null,r.a.createElement("img",{src:"https://openweathermap.org/img/wn/"+a.state.res.weather[0].icon+"@2x.png",alt:"x",height:"50px"}),r.a.createElement("h3",null,a.capMe(a.state.res.weather[0].description))),r.a.createElement("h3",null,r.a.createElement("i",{class:"fas fa-wind"})," ",a.windCalc(a.state.res.wind.speed),"mph"))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.postition):this.setState({locationAccess:!1})}},{key:"windCalc",value:function(e){return Math.floor(2.237*e)}},{key:"capMe",value:function(e){e=e.split(" ");for(var t=0;t<e.length;t++)e[t]=e[t].charAt(0).toUpperCase()+e[t].substr(1);return e.join(" ")}},{key:"tempCheck",value:function(e){var t=Math.floor(e-273.15);console.log(t),t<13?this.setState({tempIndi:"low"}):t<22?this.setState({tempIndi:"mid"}):t>23&&this.setState({tempIndi:"high"})}},{key:"render",value:function(){return r.a.createElement("div",{class:"block weatherCont"},this.state.locationAccess&&this.weatherDisplay(this.state.res.main.temp))}}]),t}(n.Component));var v=function(e){var t=document.createElement("script");return t.src="https://cse.google.com/cse.js?cx=014243001718978014851:jpozzqu5h-s",t.async=!0,document.body.appendChild(t),r.a.createElement("div",{class:"gcse-searchbox-only"})},b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={time:null,h:null},a.timeCheck=function(e){return e<10?e="0"+e:e},a.timeCalcualtor=function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),r=e.getSeconds(),c=t+":"+(n=a.timeCheck(n))+":"+(r=a.timeCheck(r));return a.setState({h:t}),c},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){return e.setState({time:e.timeCalcualtor()})},1e3),window.history.replaceState("","","/about:blank")}},{key:"dateGetter",value:function(){var e=new Date;return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][e.getDay()]+" "+e.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]}},{key:"greeter",value:function(){return this.state.h>=12?r.a.createElement("div",{className:""},r.a.createElement("h1",null,"Good Afternoon, user"),r.a.createElement("h2",null,"The time is ",this.state.time),r.a.createElement("h1",null,"It's ",this.dateGetter())):this.state.time>=18?r.a.createElement("div",null,r.a.createElement("h1",null,"Good Evening, user"),r.a.createElement("h2",null,"The time is ",this.state.time),r.a.createElement("h1",null,"It's ",this.dateGetter())):r.a.createElement("div",null,r.a.createElement("h1",null,"Good Morning, user"),r.a.createElement("h2",null,"The time is ",this.state.time),r.a.createElement("h1",null,"It's ",this.dateGetter()))}},{key:"render",value:function(){return r.a.createElement("div",{className:"block DateTimeCont"},this.greeter(),r.a.createElement(v,null))}}]),t}(n.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"greeterCont"},r.a.createElement(b,null),r.a.createElement(g,null))}}]),t}(n.Component),k=a(9),w=a.n(k),y=a(10),j=a.n(y),C=a(11),O=a.n(C),x=a(12),S=a.n(x),N=a(13),I=a.n(N),A=a(14),M=a.n(A),D=a(15),T=a.n(D),G=a(16),F=a.n(G);a(26);var J=function(e){var t=[{site:"https://stackoverflow.com/",name:"Stack Overflow",image:w.a},{site:"https://codepen.io/",name:"CodePen",image:j.a},{site:"https://codesandbox.io/",name:"CodeSandbox",image:O.a},{site:"https://css-tricks.com/",name:"CSS-Tricks",image:S.a},{site:"https://fontawesome.com/",name:"Font Awesome",image:I.a},{site:"https://fonts.google.com/",name:"Google Fonts",image:M.a},{site:"http://bada55.io/",name:"bada55.io",image:T.a},{site:"https://www.colorhexa.com/",name:"Color Hexa",image:F.a}];return r.a.createElement("div",{className:"usefulLinksContainer"},r.a.createElement("h1",null,"Useful Links"),r.a.createElement("div",{className:"usefulLinksContainerInner"},t.map(function(e){return r.a.createElement("div",{className:"usefulLink"},r.a.createElement("a",{href:e.site,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:e.image,alt:""}),r.a.createElement("p",null,e.name)))})))};var _=function(e){return r.a.createElement("div",null,r.a.createElement("iframe",{id:"inlineFrameExample",title:"Inline Frame Example",width:"500",height:"500",src:"https://ashley-bennett-a.github.io/slack-clone/"}))},L=a(17),P=a.n(L),q=(a(27),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={joke:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://api.icndb.com/jokes/random?exclude=[explicit]").then(function(e){return e.json()}).then(function(t){console.log(t.value.joke.replace(/(&quot\;)/g,'"')),e.setState({joke:t.value.joke.replace(/(&quot\;)/g,'"')})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"chuckNorris"},r.a.createElement("h2",null,"Your random Chuck Norris fact is ..."),r.a.createElement("br",null),r.a.createElement("h3",null,this.state.joke),r.a.createElement("img",{src:P.a,alt:""}))}}]),t}(n.Component));var W=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"//about:blank"),r.a.createElement(E,null),r.a.createElement(J,null),r.a.createElement(f,null),r.a.createElement(_,null),r.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,1,2]]]);
//# sourceMappingURL=main.f191154e.chunk.js.map