(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{122:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return s})),n.d(a,"metadata",(function(){return c})),n.d(a,"toc",(function(){return l})),n.d(a,"default",(function(){return m}));var i=n(3),o=n(7),r=(n(0),n(150)),t=["components"],s={id:"primeiros-passos",title:"Primeiros Passos",slug:"/franzininho-diy/exemplos-avr-libc/primeiros-passos",description:"Primeiros passos para programa\xe7\xe3o da Franzininho DIY usando usando a AVR Libc"},c={unversionedId:"FranzininhoDIY/exemplos-avr-libc/primeiros-passos",id:"FranzininhoDIY/exemplos-avr-libc/primeiros-passos",isDocsHomePage:!1,title:"Primeiros Passos",description:"Primeiros passos para programa\xe7\xe3o da Franzininho DIY usando usando a AVR Libc",source:"@site/docs/FranzininhoDIY/exemplos-avr-libc/primeiros-passos.md",slug:"/franzininho-diy/exemplos-avr-libc/primeiros-passos",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/exemplos-avr-libc/primeiros-passos",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-avr-libc/primeiros-passos.md",version:"current",sidebar:"docs",previous:{title:"Theremim",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/theremim"},next:{title:"Hello, World!",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/exemplos-avr-libc/hello-world"}},l=[{value:"Ferramentas necess\xe1rias",id:"ferramentas-necess\xe1rias",children:[{value:"Instala\xe7\xe3o das ferramentas necess\xe1rias (Linux):",id:"instala\xe7\xe3o-das-ferramentas-necess\xe1rias-linux",children:[]},{value:"Compila\xe7\xe3o no Linux",id:"compila\xe7\xe3o-no-linux",children:[]},{value:"Arduino IDE",id:"arduino-ide",children:[]},{value:"wokwi_logo Wokwi",id:"wokwi_logo-wokwi",children:[]},{value:"PICSimLab",id:"picsimlab",children:[]}]},{value:"Reposit\xf3rios e materiais de apoio",id:"reposit\xf3rios-e-materiais-de-apoio",children:[]},{value:"Saiba mais",id:"saiba-mais",children:[]}],p={toc:l};function m(e){var a=e.components,s=Object(o.a)(e,t);return Object(r.b)("wrapper",Object(i.a)({},p,s,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Esse material tem o objetivo de mostrar os primeiros passos para programa\xe7\xe3o de microcontroladores usando linguagem C e com abordagem mais pr\xf3xima ao hardware. Ser\xe3o apresentados uma s\xe9rie de exemplos (com explica\xe7\xe3o detalhadas sobre a Arquitetura do ATtiny85) para programa\xe7\xe3o da Franzininho DIY usando a ",Object(r.b)("a",{parentName:"p",href:"https://nongnu.org/avr-libc/"},"AVR Libc"),"."),Object(r.b)("p",null,"\xc9 importante que voc\xea tenha o ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Franzininho/imagens-franzininho/blob/main/franzininho_diy/Pinagem-completa-Franzininho-DIY-V2RV2.png"},"pinout da Franzininho DIY")," para fazer as liga\xe7\xf5es conforme orienta\xe7\xf5es nos exemplos."),Object(r.b)("p",null,Object(r.b)("img",{alt:"pinout Franzininho DIY",src:n(164).default})),Object(r.b)("h2",{id:"ferramentas-necess\xe1rias"},"Ferramentas necess\xe1rias"),Object(r.b)("p",null,"Voc\xea n\xe3o precisar\xe1 de um compilador espec\xedfico ou IDE para compilar os exemplos apresentados. Por\xe9m \xe9 importante que tenha as seguintes ferramentas instaladas na sua m\xe1quina:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"GCC AVR"),Object(r.b)("li",{parentName:"ul"},"avr libc"),Object(r.b)("li",{parentName:"ul"},"binutils-avr"),Object(r.b)("li",{parentName:"ul"},"make")),Object(r.b)("h3",{id:"instala\xe7\xe3o-das-ferramentas-necess\xe1rias-linux"},"Instala\xe7\xe3o das ferramentas necess\xe1rias (Linux):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"sudo apt install gcc-avr\nsudo apt install avr-libc\nsudo apt install binutils-avr\nsudo apt install make\n")),Object(r.b)("p",null,"A placa Franzininho deve estar com o bootloader Micronucleus( bootloader oficial para a Franzininho DIY)."),Object(r.b)("h3",{id:"compila\xe7\xe3o-no-linux"},"Compila\xe7\xe3o no Linux"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"cd ../exemplos-avr-libc/exemplos/01-hello\nmake all\n")),Object(r.b)("h3",{id:"arduino-ide"},"Arduino IDE"),Object(r.b)("p",null,"Voc\xea tamb\xe9m poder\xe1 reproduzir todos os exemplos apresentados diretamente na IDE Arduino (sem usar o framework Arduino). Isso facilitar\xe1 no processo de instala\xe7\xe3o e configura\xe7\xe3o das ferramentas e tamb\xe9m no upload."),Object(r.b)("h3",{id:"wokwi_logo-wokwi"},Object(r.b)("img",{alt:"wokwi_logo",src:n(342).default})," Wokwi"),Object(r.b)("p",null,"Voc\xea tamb\xe9m pode usar o ",Object(r.b)("a",{parentName:"p",href:"https://wokwi.com/arduino/new?template=franzininho"},"Simulador Online do Wokwi")," para reproduzir os projetos apresentados nessa s\xe9rie."),Object(r.b)("h3",{id:"picsimlab"},"PICSimLab"),Object(r.b)("p",null,"Caso n\xe3o tenha acesso a Internet ou uma boa conex\xe3o, uma outra op\xe7\xe3o dispon\xedvel para reproduzir os exemplos na sua m\xe1quina \xe9 o simulador ",Object(r.b)("a",{parentName:"p",href:"https://github.com/lcgamboa/picsimlab/releases"},"PICSimLab")," que possu\xed suporte ao Franzininho DIY."),Object(r.b)("h2",{id:"reposit\xf3rios-e-materiais-de-apoio"},"Reposit\xf3rios e materiais de apoio"),Object(r.b)("p",null,"Todos os exemplos ser\xe3o hospedados no ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Franzininho/exemplos-avr-libc/"},"github do projeto Franzininho"),". \xc9 importante que voc\xea use o datasheet do Attiny85 como material de apoio, assim como a documenta\xe7\xe3o da ",Object(r.b)("a",{parentName:"p",href:"https://nongnu.org/avr-libc/"},"AVR Libc")),Object(r.b)("p",null,"Aproveite essa jornada."),Object(r.b)("h2",{id:"saiba-mais"},"Saiba mais"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.embarcados.com.br/franzininho/"},"Franzininho \u2013 Um Arduino para todos")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Autor"),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("a",{parentName:"th",href:"https://github.com/FBSeletronica"},"F\xe1bio Souza")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Data:"),Object(r.b)("td",{parentName:"tr",align:null},"24/04/2021")))))}m.isMDXComponent=!0},150:function(e,a,n){"use strict";n.d(a,"a",(function(){return m})),n.d(a,"b",(function(){return d}));var i=n(0),o=n.n(i);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,i,o=function(e,a){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var a=o.a.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},m=function(e){var a=p(e.components);return o.a.createElement(l.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},u=o.a.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,t=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,d=m["".concat(t,".").concat(u)]||m[u]||b[u]||r;return n?o.a.createElement(d,s(s({ref:a},l),{},{components:n})):o.a.createElement(d,s({ref:a},l))}));function d(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,t=new Array(r);t[0]=u;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,t[1]=s;for(var l=2;l<r;l++)t[l]=n[l];return o.a.createElement.apply(null,t)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},164:function(e,a,n){"use strict";n.r(a),a.default=n.p+"assets/images/Pinagem-Franzininho-DIY-V2RV2-42a18903012c4dc223f9d4c774730625.png"},342:function(e,a,n){"use strict";n.r(a),a.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAwCAYAAABAIGlOAAAEsmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjU4IgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iNDgiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSI1OCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iNDgiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLjAiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLjAiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDct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"}}]);