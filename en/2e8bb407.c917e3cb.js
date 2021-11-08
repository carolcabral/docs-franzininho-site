(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{156:function(e,a,o){"use strict";o.d(a,"a",(function(){return d})),o.d(a,"b",(function(){return u}));var n=o(0),t=o.n(n);function s(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){s(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function c(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=t.a.createContext({}),p=function(e){var a=t.a.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},d=function(e){var a=p(e.components);return t.a.createElement(l.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},b=t.a.forwardRef((function(e,a){var o=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(o),b=n,u=d["".concat(r,".").concat(b)]||d[b]||m[b]||s;return o?t.a.createElement(u,i(i({ref:a},l),{},{components:o})):t.a.createElement(u,i({ref:a},l))}));function u(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=o.length,r=new Array(s);r[0]=b;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var l=2;l<s;l++)r[l]=o[l];return t.a.createElement.apply(null,r)}return t.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},267:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/1-cf224b69c503620285cee56dc7457999.png"},268:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/2-4806954a1b4006bb78b6e50a23eba7b5.png"},269:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/3-c0afeaa310f4501913ccaf8190c00334.png"},270:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/5-0821b04d00bb4ccc716759540cf7954a.png"},271:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/4-c250e820888c2d31288214e41376a1dd.png"},81:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return i})),o.d(a,"metadata",(function(){return c})),o.d(a,"toc",(function(){return l})),o.d(a,"default",(function(){return d}));var n=o(3),t=o(7),s=(o(0),o(156)),r=["components"],i={id:"franzininho-wifi-espidf-00",title:"Primeiros Passos com ESP-IDF",slug:"/franzininho-wifi/exemplos-espidf/primeiros-passos",description:"Este documento tem como objetivo ajud\xe1-lo a configurar o ESP-IDF",author:"F\xe1bio Souza"},c={unversionedId:"FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-00",id:"FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-00",isDocsHomePage:!1,title:"Primeiros Passos com ESP-IDF",description:"Este documento tem como objetivo ajud\xe1-lo a configurar o ESP-IDF",source:"@site/docs/FranzininhoWifi/exemplos-espidf/0x00-Primeiros-passos.md",slug:"/franzininho-wifi/exemplos-espidf/primeiros-passos",permalink:"/en/docs/franzininho-wifi/exemplos-espidf/primeiros-passos",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-espidf/0x00-Primeiros-passos.md",version:"current",sidebar:"docs",previous:{title:"Placa Franzininho WiFi",permalink:"/en/docs/franzininho-wifi/franzininho-wifi"},next:{title:"Hello World! ESP-IDF",permalink:"/en/docs/franzininho-wifi/exemplos-espidf/hello-world-esp-idf"}},l=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",children:[]},{value:"Passo 1 - Instala\xe7\xe3o dos pr\xe9-requisitos",id:"passo-1---instala\xe7\xe3o-dos-pr\xe9-requisitos",children:[]},{value:"Passo 2 - Instala\xe7\xe3o do ESP-IDF",id:"passo-2---instala\xe7\xe3o-do-esp-idf",children:[{value:"Linux e macOS",id:"linux-e-macos",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Instalando O ESP-IDF e ferramentas",id:"instalando-o-esp-idf-e-ferramentas",children:[]},{value:"Configurando as vari\xe1veis de ambientes",id:"configurando-as-vari\xe1veis-de-ambientes",children:[]}]},{value:"Passo 3 - Criando um novo projeto",id:"passo-3---criando-um-novo-projeto",children:[{value:"Copiando um projeto exemplo",id:"copiando-um-projeto-exemplo",children:[]},{value:"Configura\xe7\xe3o",id:"configura\xe7\xe3o",children:[]},{value:"Compilando o projeto em modo DFU",id:"compilando-o-projeto-em-modo-dfu",children:[]},{value:"Compila\xe7\xe3o, grava\xe7\xe3o e monitor em modo normal",id:"compila\xe7\xe3o-grava\xe7\xe3o-e-monitor-em-modo-normal",children:[]}]}],p={toc:l};function d(e){var a=e.components,i=Object(t.a)(e,r);return Object(s.b)("wrapper",Object(n.a)({},p,i,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Este documento tem como objetivo ajud\xe1-lo a configurar o ESP-IDF (Espressif IoT Development Framework) para trabalhar com a Franzininho WiFi que usa o ESP32-S2 da Espressif."),Object(s.b)("p",null,"Ao final, faremos um exemplo simples para compilar, gravar e monitorar usando o ESP-IDF, assim, garantiremos que tudo estar\xe1 funcionando."),Object(s.b)("h2",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),Object(s.b)("p",null,"Para essa configura\xe7\xe3o, vamos instalar o ESP-IDF e us\xe1-lo atrav\xe9s de linha de comando. Caso voc\xea queira usar o IDF integrado a ambientes de desenvolvimento integrado (IDE) como VScode e Eclipse, confira os seguintes links:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/espressif/idf-eclipse-plugin"},"Eclipse Plugin")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://github.com/espressif/vscode-esp-idf-extension"},"VS Code Extension"))),Object(s.b)("p",null,"Voc\xea poder\xe1 instalar o ESP-IDF no seu sistema operacional preferido (Linux, Windows, macOS)."),Object(s.b)("p",null,"Para a experi\xeancia completa, voc\xea precisar\xe1 de uma placa Franzininho WiFi, Computador: com Windows, Linux ou macOS"),Object(s.b)("h2",{id:"passo-1---instala\xe7\xe3o-dos-pr\xe9-requisitos"},"Passo 1 - Instala\xe7\xe3o dos pr\xe9-requisitos"),Object(s.b)("p",null,"Algumas ferramentas precisam ser instaladas no computador antes de prosseguir para as pr\xf3ximas etapas. Siga os links abaixo para obter as instru\xe7\xf5es para o seu sistema operacional:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/windows-setup.html"},"Windows")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/linux-setup.html"},"Linux")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/macos-setup.html"},"Mac OS"))),Object(s.b)("p",null,"\xc9 muito importante a instala\xe7\xe3o de todos os pr\xe9-requisitos."),Object(s.b)("h2",{id:"passo-2---instala\xe7\xe3o-do-esp-idf"},"Passo 2 - Instala\xe7\xe3o do ESP-IDF"),Object(s.b)("p",null,"Nessa etapa vamos instalar o ESP-IDF e conjunto de ferramentas e bibliotecas. Vamos usar o c\xf3digo mantido pela Espressif no reposit\xf3rio do ",Object(s.b)("a",{parentName:"p",href:"https://github.com/espressif/esp-idf"},"ESP-IDF")),Object(s.b)("p",null,"O ESP-IDF \xe9 o framework oficial da Espressif para o desenvolvimento de aplica\xe7\xf5es parar toda a fam\xedlia ESP32. O procedimento apresentado aqui servir\xe1 para trabalhar com toda a fam\xedlia ESP32. Por\xe9m, vamos dar foco ao ESP32-S2 que \xe9 usado na Franzininho WiFi."),Object(s.b)("h3",{id:"linux-e-macos"},"Linux e macOS"),Object(s.b)("p",null,"Abra o terminal e execute:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/esp\ncd ~/esp\ngit clone --recursive https://github.com/espressif/esp-idf.git\n")),Object(s.b)("p",null,"O ESP-IDF ser\xe1 baixado no seguinte reposit\xf3rio ",Object(s.b)("inlineCode",{parentName:"p"},"~/esp/esp-idf"),"."),Object(s.b)("h3",{id:"windows"},"Windows"),Object(s.b)("p",null,"Al\xe9m de instalar as ferramentas, o ",Object(s.b)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/windows-setup.html#get-started-windows-tools-installer"},"ESP-IDF Tools Installer para Windows")," apresentado no passo 1 ele tamb\xe9m baixa uma c\xf3pia do ESP-IDF. Dessa forma voc\xea n\xe3o precisar\xe1 baixar o ESP-IDF agora, se j\xe1 tiver baixado anteriormente junto aos pr\xe9-requisitos."),Object(s.b)("p",null,"Se desejar fazer o download do ESP-IDF sem a ajuda do ESP-IDF Tools Installer, consulte ",Object(s.b)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/windows-setup-scratch.html#get-esp-idf-windows-command-line"},"estas instru\xe7\xf5es"),"."),Object(s.b)("h3",{id:"instalando-o-esp-idf-e-ferramentas"},"Instalando O ESP-IDF e ferramentas"),Object(s.b)("p",null,"Al\xe9m do ESP-IDF, voc\xea tamb\xe9m precisa instalar as ferramentas usadas pelo ESP-IDF, como compilador, depurador, pacotes Python, etc."),Object(s.b)("h4",{id:"windows-1"},"Windows"),Object(s.b)("p",null,"O ESP-IDF Tools Installer para Windows apresentado no passo 1 instala todas as ferramentas necess\xe1rias."),Object(s.b)("p",null,"Se voc\xea deseja instalar as ferramentas sem a ajuda do ESP-IDF Tools Installer, abra o Prompt de Comando e siga estas etapas:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"cd %userprofile%\\esp\\esp-idf\ninstall.bat\n")),Object(s.b)("p",null,"Ou no Windows PowerShell"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/esp/esp-idf\n./install.ps1\n")),Object(s.b)("h4",{id:"linux-e-macos-1"},"Linux e macOS"),Object(s.b)("p",null,"No Linux ou macOS h\xe1 um script para instala\xe7\xe3o.Abra o terminal e execute:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/esp/esp-idf\n./install.sh\n")),Object(s.b)("h3",{id:"configurando-as-vari\xe1veis-de-ambientes"},"Configurando as vari\xe1veis de ambientes"),Object(s.b)("p",null,"As ferramentas instaladas ainda n\xe3o foram adicionadas \xe0 vari\xe1vel de ambiente PATH. Para tornar as ferramentas utiliz\xe1veis na linha de comando, algumas vari\xe1veis de ambiente devem ser definidas. ESP-IDF fornece alguns scripts que ajudam nesse processo."),Object(s.b)("h4",{id:"windows-2"},"Windows"),Object(s.b)("p",null,"O ESP-IDF Tools Installer para Windows cria um atalho \u201cESP-IDF Command Prompt\u201d no menu Iniciar. Este atalho abre o Prompt de Comando e configura todas as vari\xe1veis de ambiente necess\xe1rias. Voc\xea pode abrir este atalho e prosseguir para a pr\xf3xima etapa."),Object(s.b)("p",null,"Caso n\xe3o funcione e voc\xea precise configurar manualmente, execute os seguintes comandos:"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Prompt de Comando"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"%userprofile%\\esp\\esp-idf\\export.bat\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Windows PowerShell"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},".$HOME/esp/esp-idf/export.ps1\n")),Object(s.b)("h4",{id:"linux-e-macos-2"},"Linux e macOS"),Object(s.b)("p",null,"No terminal execute:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},". $HOME/esp/esp-idf/export.sh\n")),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"Voc\xea precisa fazer isso toda vez que iniciar o terminal para usar o ESP-IDF."))),Object(s.b)("h2",{id:"passo-3---criando-um-novo-projeto"},"Passo 3 - Criando um novo projeto"),Object(s.b)("p",null,"Agora que j\xe1 temos as ferramentas instaladas, vamos fazer um exemplo para validar o funcionamento das mesmas. Vamos executar o exemplo blink que j\xe1 vem no IDF."),Object(s.b)("h3",{id:"copiando-um-projeto-exemplo"},"Copiando um projeto exemplo"),Object(s.b)("p",null,"Vamos copiar o projeto blink para preservarmos o exemplo presente na pasta do IDF:"),Object(s.b)("h4",{id:"windows-3"},"Windows"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"cd %userprofile%\\esp\nxcopy /e /i %IDF_PATH%\\examples\\get-started\\blink blink\n")),Object(s.b)("h4",{id:"linux-e-macos-3"},"Linux e macOS"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/esp\ncp -r $IDF_PATH/examples/get-started/blink .\n")),Object(s.b)("p",null,"Fique a vontade para testar os outros exemplos tamb\xe9m."),Object(s.b)("p",null,"O sistema de compila\xe7\xe3o ESP-IDF n\xe3o oferece suporte a espa\xe7os nos caminhos para o ESP-IDF ou para projetos."),Object(s.b)("h3",{id:"configura\xe7\xe3o"},"Configura\xe7\xe3o"),Object(s.b)("p",null,"Agora vamos configurar o target para qual ser\xe1 compilado e j\xe1 fazer uma configura\xe7\xe3o no menuconfig. No nosso caso vamos trabalhar com o ESP32-S2:"),Object(s.b)("h4",{id:"windows-4"},"Windows"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"cd %userprofile%\\esp\\blink\nidf.py set-target esp32s2\nidf.py menuconfig\n")),Object(s.b)("h4",{id:"linux-e-macos-4"},"Linux e macOS"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"cd ~/esp/blink\nidf.py set-target esp32s2\nidf.py menuconfig\n")),Object(s.b)("p",null,"Ser\xe1 aberto o menuconfig:\n",Object(s.b)("img",{alt:"menuconfig",src:o(267).default})),Object(s.b)("p",null,"Acesse a op\xe7\xe3o Component config ---\x3e\n",Object(s.b)("img",{alt:"menuconfig",src:o(268).default})),Object(s.b)("p",null,"Em seguida ESP System Settings  ---\x3e\n",Object(s.b)("img",{alt:"menuconfig",src:o(269).default})),Object(s.b)("p",null,"Agora selecione Channel for console output (Default: UART0)  ---\x3e\n",Object(s.b)("img",{alt:"menuconfig",src:o(270).default})),Object(s.b)("p",null,"E por fim, selecione (X) USB CDC:\n",Object(s.b)("img",{alt:"menuconfig",src:o(271).default})),Object(s.b)("p",null,"Salve(S), Enter, enter, Saia do menu(ESC)"),Object(s.b)("p",null,"Essa configura\xe7\xe3o permitir\xe1 que usemos a USB no pr\xf3ximo upload."),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Sempre que iniciar um projeto novo fa\xe7a essas configura\xe7\xe3o para que continue usando a USB como interface de programa\xe7\xe3o.")),Object(s.b)("div",{parentName:"div",className:"admonition-content"})),Object(s.b)("p",null,"Para mais detalhes acesse:"),Object(s.b)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/zg9IMDaoImA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(s.b)("h3",{id:"compilando-o-projeto-em-modo-dfu"},"Compilando o projeto em modo DFU"),Object(s.b)("p",null,"A primeira compila\xe7\xe3o n\xf3s vamos fazer usando o modo DFU, que j\xe1 vem por padr\xe3o no ESP32-S2 permitindo o upload atrav\xe9s da USB:"),Object(s.b)("p",null,"Para crie a imagem DFU:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"idf.py dfu\n")),Object(s.b)("p",null,"A primeira compila\xe7\xe3o pode demorar um pouco. Da at\xe9 pra ir pegar um caf\xe9 ;)"),Object(s.b)("p",null,"Ap\xf3s a compila\xe7\xe3o, conecte a Franzininho WiFi no computador. Antes de fazermos o upload \xe9 necess\xe1rio entrar no modo DFU. Para entrar no modo DFU pressione as teclas na seguinte sequencia:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"pressione e segure a tecla BOOT"),Object(s.b)("li",{parentName:"ol"},"pressione rapidamente e solte a tecla presente"),Object(s.b)("li",{parentName:"ol"},"solte a tecla BOOT")),Object(s.b)("p",null,"Dessa forma a placa entrar\xe1 no modo DFU e poder\xe1 receber o firmware atrav\xe9s da USB."),Object(s.b)("p",null,"Para fazer a grava\xe7\xe3o, digite:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"idf.py dfu-flash\n")),Object(s.b)("p",null,"Caso tenha permiss\xe3o de acesso a porta USB, acesse esse ",Object(s.b)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/api-guides/dfu.html#udev-rule-linux-only"},"link com as instru\xe7\xf5es de configura\xe7\xf5es")),Object(s.b)("p",null,"Ap\xf3s alguns segundos a placa estar\xe1 gravada."),Object(s.b)("h3",{id:"compila\xe7\xe3o-grava\xe7\xe3o-e-monitor-em-modo-normal"},"Compila\xe7\xe3o, grava\xe7\xe3o e monitor em modo normal"),Object(s.b)("p",null,"Agora voc\xea poder\xe1 compilar, gravar e monitorar usando a porta USB. Esse processo \xe9 id\xeantico ao que fazemos para desenvolver com o ESP32:"),Object(s.b)("p",null,"Compilar:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"idf.py build\n")),Object(s.b)("p",null,"Gravar:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"idf.py -p PORT [-b BAUD] flash\n")),Object(s.b)("p",null,"Monitorar:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-bash"},"idf.py -p /dev/ttyUSB0 monitor\n")),Object(s.b)("p",null,"Maravilha, voc\xea configurou o ambiente para trabalhar com o ESP-IDF."),Object(s.b)("p",null,"Caso queira trabalhar com a extens\xe3o para VSCODE, confira o video:"),Object(s.b)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/rxMg_zxO0q0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}d.isMDXComponent=!0}}]);