(this["webpackJsonpscore-app"]=this["webpackJsonpscore-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),n=a(8),s=a.n(n),o=(a(13),a(14),a(15),a(5)),l=a(3),i=a(2),d=(a(16),a(17),a(0));function j(e){return Object(d.jsx)("td",{className:"player".concat(e.player," score-cell"),children:Object(d.jsx)("input",{type:"text",name:"","data-i":e.i,"data-j":e.j,id:"player".concat(e.player,"-hand").concat(e.hand,"-score"),value:e.score,onChange:e.handleRowScores,onBlur:e.handleCellOnBlur,className:parseInt(e.score)<0&&-parseInt(e.score)%100===0?"curr-hand-winner":""})})}a(19);var u=function(){return Object(d.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"broom",className:"svg-inline--fa fa-broom fa-w-20",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512",children:Object(d.jsx)("path",{fill:"currentColor",d:"M256.47 216.77l86.73 109.18s-16.6 102.36-76.57 150.12C206.66 523.85 0 510.19 0 510.19s3.8-23.14 11-55.43l94.62-112.17c3.97-4.7-.87-11.62-6.65-9.5l-60.4 22.09c14.44-41.66 32.72-80.04 54.6-97.47 59.97-47.76 163.3-40.94 163.3-40.94zM636.53 31.03l-19.86-25c-5.49-6.9-15.52-8.05-22.41-2.56l-232.48 177.8-34.14-42.97c-5.09-6.41-15.14-5.21-18.59 2.21l-25.33 54.55 86.73 109.18 58.8-12.45c8-1.69 11.42-11.2 6.34-17.6l-34.09-42.92 232.48-177.8c6.89-5.48 8.04-15.53 2.55-22.44z"})})};a(20);function f(e){return Object(d.jsxs)("tr",{className:"score-row",children:[Object(d.jsx)("td",{children:Object(d.jsx)("div",{className:"hand",children:e.hand})}),e.row_scores.map((function(t,a){return Object(d.jsx)(j,{score:t,player:a+1,index:a,hand:e.hand,allScores:e.allScores,i:e.i,j:a,handleRowScores:e.handleRowScores,handleCellOnBlur:e.handleCellOnBlur},a)})),Object(d.jsx)("td",{children:Object(d.jsx)("button",{className:"btn btn-delete-row",children:Object(d.jsx)(u,{})})})]})}a(21);var b=function(){return Object(d.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"trash-alt",className:"svg-inline--fa fa-trash-alt fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(d.jsx)("path",{fill:"currentColor",d:"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"})})},p=(a(22),function(){return Object(d.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"plus",className:"svg-inline--fa fa-plus fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(d.jsx)("path",{fill:"currentColor",d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"})})}),m=(a(23),function(){return Object(d.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"plus-square",className:"svg-inline--fa fa-plus-square fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(d.jsx)("path",{fill:"currentColor",d:"M352 240v32c0 6.6-5.4 12-12 12h-88v88c0 6.6-5.4 12-12 12h-32c-6.6 0-12-5.4-12-12v-88h-88c-6.6 0-12-5.4-12-12v-32c0-6.6 5.4-12 12-12h88v-88c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v88h88c6.6 0 12 5.4 12 12zm96-160v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-48 346V86c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v340c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"})})}),O=(a(24),function(){return Object(d.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"medal",className:"svg-inline--fa fa-medal fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(d.jsx)("path",{fill:"currentColor",d:"M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z"})})}),h=(a(25),a(26),function(){return Object(d.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"chevron-down",className:"svg-inline--fa fa-chevron-down fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(d.jsx)("path",{fill:"currentColor",d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"})})}),x=function(e){return Object(d.jsxs)("article",{className:"leader-board",children:[Object(d.jsxs)("div",{className:"headings",children:[Object(d.jsx)("div",{className:"places",children:"S\u0131ralamalar"}),Object(d.jsx)("div",{className:"cross-differences",children:"Skor Fark\u0131"})]}),Object(d.jsx)("table",{className:"score-board",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{className:"board-row",id:"board-row-1",children:[Object(d.jsx)("td",{children:"1"}),Object(d.jsx)("td",{children:e.leaderBoard[0].name}),Object(d.jsx)("td",{children:e.leaderBoard[0].score}),Object(d.jsx)("td",{className:"chevron",children:Object(d.jsx)(h,{})}),Object(d.jsxs)("td",{className:"opponent-differences",children:[Object(d.jsx)("span",{className:"opponent",style:{backgroundColor:"rgb(124, 227, 250)"},children:"2."}),Object(d.jsx)("span",{className:"difference",children:e.leaderBoard[1].score-e.leaderBoard[0].score})]}),Object(d.jsxs)("td",{className:"opponent-differences",children:[Object(d.jsx)("span",{className:"opponent",style:{backgroundColor:"rgb(255, 255, 53)"},children:"3."}),Object(d.jsx)("span",{className:"difference",children:e.leaderBoard[2].score-e.leaderBoard[0].score})]}),Object(d.jsxs)("td",{className:"opponent-differences",children:[Object(d.jsx)("span",{className:"opponent",style:{backgroundColor:"rgb(255, 124, 124)"},children:"4."}),Object(d.jsx)("span",{className:"difference",children:e.leaderBoard[3].score-e.leaderBoard[0].score})]})]}),Object(d.jsxs)("tr",{className:"board-row",id:"board-row-2",children:[Object(d.jsx)("td",{children:"2"}),Object(d.jsx)("td",{children:e.leaderBoard[1].name}),Object(d.jsx)("td",{children:e.leaderBoard[1].score}),Object(d.jsx)("td",{className:"chevron",children:Object(d.jsx)(h,{})}),Object(d.jsxs)("td",{className:"opponent-differences",children:[Object(d.jsx)("span",{className:"opponent",style:{backgroundColor:"rgb(255, 255, 53)"},children:"3."}),Object(d.jsx)("span",{className:"difference",children:e.leaderBoard[2].score-e.leaderBoard[1].score})]}),Object(d.jsxs)("td",{className:"opponent-differences",children:[Object(d.jsx)("span",{className:"opponent",style:{backgroundColor:"rgb(255, 124, 124)"},children:"4."}),Object(d.jsx)("span",{className:"difference",children:e.leaderBoard[3].score-e.leaderBoard[1].score})]}),Object(d.jsx)("td",{className:"opponent-differences"})]}),Object(d.jsxs)("tr",{className:"board-row",id:"board-row-3",children:[Object(d.jsx)("td",{children:"3"}),Object(d.jsx)("td",{children:e.leaderBoard[2].name}),Object(d.jsx)("td",{children:e.leaderBoard[2].score}),Object(d.jsx)("td",{className:"chevron",children:Object(d.jsx)(h,{})}),Object(d.jsxs)("td",{className:"opponent-differences",children:[Object(d.jsx)("span",{className:"opponent",style:{backgroundColor:"rgb(255, 124, 124)"},children:"4."}),Object(d.jsx)("span",{className:"difference",children:e.leaderBoard[3].score-e.leaderBoard[2].score})]}),Object(d.jsx)("td",{className:"opponent-differences"}),Object(d.jsx)("td",{className:"opponent-differences"})]}),Object(d.jsxs)("tr",{className:"board-row",id:"board-row-4",children:[Object(d.jsx)("td",{children:"4"}),Object(d.jsx)("td",{children:e.leaderBoard[3].name}),Object(d.jsx)("td",{children:e.leaderBoard[3].score}),Object(d.jsx)("td",{className:"chevron"}),Object(d.jsx)("td",{className:"opponent-differences"}),Object(d.jsx)("td",{className:"opponent-differences"}),Object(d.jsx)("td",{className:"opponent-differences"})]})]})})]})},g=function(){var e=JSON.parse(localStorage.getItem("player1")),t=Object(r.useState)(e||{id:1,name:""}),a=Object(i.a)(t,2),c=a[0],n=a[1],s=JSON.parse(localStorage.getItem("player2")),j=Object(r.useState)(s||{id:2,name:""}),h=Object(i.a)(j,2),g=h[0],v=h[1],N=JSON.parse(localStorage.getItem("player3")),y=Object(r.useState)(N||{id:3,name:""}),w=Object(i.a)(y,2),S=w[0],C=w[1],I=JSON.parse(localStorage.getItem("player4")),k=Object(r.useState)(I||{id:4,name:""}),B=Object(i.a)(k,2),M=B[0],E=B[1],J=JSON.parse(localStorage.getItem("allScores")),L=Object(r.useState)(J||[]),z=Object(i.a)(L,2),H=z[0],D=z[1],P=JSON.parse(localStorage.getItem("allIndicators")),W=Object(r.useState)(P||[]),V=Object(i.a)(W,2),A=V[0],R=V[1],X=JSON.parse(localStorage.getItem("handNum")),_=Object(r.useState)(X||0),q=Object(i.a)(_,2),F=q[0],G=q[1],U=JSON.parse(localStorage.getItem("currHand")),K=Object(r.useState)(U||{suit:{name:"choose",normalWinnerPlayerDecrement:0,normalOpponentMultiplyer:0,opponentMultiplyer:0,kafaWinnerPlayerDecrement:0,kafaOpponentMultiplyer:0,color:""},scores:["","","",""],indicators:[0,0,0,0]}),Q=Object(i.a)(K,2),T=Q[0],Y=Q[1],Z=JSON.parse(localStorage.getItem("totalScores")),$=Object(r.useState)(Z||[{id:1,name:c.name,score:""},{id:2,name:g.name,score:""},{id:3,name:S.name,score:""},{id:4,name:M.name,score:""}]),ee=Object(i.a)($,2),te=ee[0],ae=ee[1],re=JSON.parse(localStorage.getItem("leaderBoard")),ce=Object(r.useState)(re||[{id:1,name:c.name,score:""},{id:2,name:g.name,score:""},{id:3,name:S.name,score:""},{id:4,name:M.name,score:""}]),ne=Object(i.a)(ce,2),se=ne[0],oe=ne[1],le=JSON.parse(localStorage.getItem("diffs")),ie=Object(r.useState)(le||["","","",""]),de=Object(i.a)(ie,2),je=de[0],ue=de[1];Object(r.useEffect)((function(){localStorage.setItem("handNum",JSON.stringify(F))}),[F]),Object(r.useEffect)((function(){localStorage.setItem("player1",JSON.stringify(c))}),[c]),Object(r.useEffect)((function(){localStorage.setItem("player2",JSON.stringify(g))}),[g]),Object(r.useEffect)((function(){localStorage.setItem("player3",JSON.stringify(S))}),[S]),Object(r.useEffect)((function(){localStorage.setItem("player4",JSON.stringify(M))}),[M]),Object(r.useEffect)((function(){localStorage.setItem("currHand",JSON.stringify(T))}),[T]),Object(r.useEffect)((function(){localStorage.setItem("allScores",JSON.stringify(H))}),[H]),Object(r.useEffect)((function(){localStorage.setItem("allIndicators",JSON.stringify(A))}),[A]),Object(r.useEffect)((function(){localStorage.setItem("totalScores",JSON.stringify(te))}),[te]),Object(r.useEffect)((function(){localStorage.setItem("leaderBoard",JSON.stringify(se))}),[se]),Object(r.useEffect)((function(){localStorage.setItem("diffs",JSON.stringify(je))}),[je]),Object(r.useEffect)((function(){var e=se.map((function(e,t){return 0!==t&&t<se.length?se[t].score-se[t-1].score:""}));ue((function(){return e}))}),[se]),Object(r.useEffect)((function(){var e=0;H.forEach((function(t){return e+=parseInt(""===t[0]?0:t[0])})),A.forEach((function(t){return e+=parseInt(""===t[0]?0:t[0])}));var t=0;H.forEach((function(e){return t+=parseInt(""===e[1]?0:e[1])})),A.forEach((function(e){return t+=parseInt(""===e[1]?0:e[1])}));var a=0;H.forEach((function(e){return a+=parseInt(""===e[2]?0:e[2])})),A.forEach((function(e){return a+=parseInt(""===e[2]?0:e[2])}));var r=0;H.forEach((function(e){return r+=parseInt(""===e[3]?0:e[3])})),A.forEach((function(e){return r+=parseInt(""===e[3]?0:e[3])})),ae((function(){return[{id:c.id,name:c.name,score:e||t&&a&&r&&"0"||""},{id:g.id,name:g.name,score:t||e&&a&&r&&"0"||""},{id:S.id,name:S.name,score:a||e&&t&&r&&"0"||""},{id:M.id,name:M.name,score:r||e&&t&&a&&"0"||""}]}))}),[H,A,c,g,S,M]),Object(r.useEffect)((function(){var e=Object(l.a)(te).sort((function(e,t){return e.score-t.score}));oe((function(){return e}))}),[te]);var fe=function(e){for(var t=e.split(""),a=0;a<t.length;a++)if("x"!==t[a].toLowerCase())return[!1,t.length];return[!0,t.length]},be=function(e){if((!isNaN(e.target.value)||fe(e.target.value)[0]||"-"===e.target.value[0])&&!("-"===e.target.value[0]&&e.target.value.length>1)&&(isNaN(e.target.value)||0!==parseInt(e.target.value))&&!(fe(e.target.value)&&function(e){for(var t=0,a=0;a<e.length;a++)"x"===e[a].toLowerCase()&&t++;return t}(e.target.value.toLowerCase())>2)&&!(function(e){for(var t=e.split(""),a=0;a<t.length;a++)if("-"!==t[a].toLowerCase())return[!1,t.length];return[!0,t.length]}(e.target.value)&&function(e){for(var t=0,a=0;a<e.length;a++)"-"===e[a].toLowerCase()&&t++;return t}(e.target.value.toLowerCase())>1)){for(var t=0;t<T.scores.length;t++)if(t!==parseInt(e.target.dataset.i)&&(T.scores[t].toLowerCase().includes("x")||T.scores[t].toLowerCase().includes("-"))&&e.target.value.toLowerCase().includes("x"))return;for(var a=0;a<T.scores.length;a++)if(a!==parseInt(e.target.dataset.i)&&(T.scores[a].toLowerCase().includes("-")||T.scores[a].toLowerCase().includes("x"))&&e.target.value.toLowerCase().includes("-"))return;var r=Object(o.a)({},T);r.scores[e.target.dataset.i]=e.target.value.toUpperCase(),Y(r)}},pe=function(e){var t=10*-T.suit.normalOpponentMultiplyer,a=e.target.dataset.i,r=Object(o.a)({},T);r.indicators=[0,0,0,0],r.indicators[a]=t,Y(r)},me=function(e){var t=e.target.value;if(-1===t.indexOf(" ")&&"0"!==t[0]&&(!isNaN(t)||"-"===t[0])&&!(t.length>1&&isNaN(t))){var a=Object(l.a)(H);a[e.target.dataset.i][e.target.dataset.j]=e.target.value,D(a)}},Oe=function(e){var t=Object(l.a)(H);"-"===e.target.value&&(t[e.target.dataset.i][e.target.dataset.j]=""),D(t)},he=function(e){var t="";switch(e){case 1:t="first";break;case 2:t="second";break;case 3:t="third";break;case 4:t="fourth";break;default:t="none"}return t};return Object(d.jsxs)("article",{className:"table-container",children:[Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{className:"players",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{}),Object(d.jsx)("td",{id:"player1-name","data-name":"player1",className:"player",children:Object(d.jsx)("input",{type:"text",name:"player1",id:"player1",onChange:function(e){n((function(){return{id:1,name:e.target.value}}))},placeholder:"Oync 1",value:c.name,className:""!==te[0].score&&he(se.map((function(e){return e.id})).indexOf(c.id)+1)||""})}),Object(d.jsx)("td",{id:"player2-name","data-name":"player2",className:"player",children:Object(d.jsx)("input",{type:"text",name:"player2",id:"player2",onChange:function(e){v((function(){return{id:2,name:e.target.value}}))},placeholder:"Oync 2",value:g.name,className:""!==te[1].score&&he(se.map((function(e){return e.id})).indexOf(g.id)+1)||""})}),Object(d.jsx)("td",{id:"player3-name","data-name":"player3",className:"player",children:Object(d.jsx)("input",{type:"text",name:"player3",id:"player3",onChange:function(e){C((function(){return{id:3,name:e.target.value}}))},placeholder:"Oync 3",value:S.name,className:""!==te[2].score&&he(se.map((function(e){return e.id})).indexOf(S.id)+1)||""})}),Object(d.jsx)("td",{id:"player4-name","data-name":"player4",className:"player",children:Object(d.jsx)("input",{type:"text",name:"player4",id:"player4",onChange:function(e){E((function(){return{id:4,name:e.target.value}}))},placeholder:"Oync 4",value:M.name,className:""!==te[3].score&&he(se.map((function(e){return e.id})).indexOf(M.id)+1)||""})}),Object(d.jsx)("td",{})]})}),Object(d.jsxs)("tbody",{className:"scores",children:[H.map((function(e,t){return Object(d.jsx)(f,{row_scores:e,allScores:H,hand:t+1,i:t,handleRowScores:me,handleCellOnBlur:Oe},t)})),Object(d.jsxs)("tr",{className:"total-scores",children:[Object(d.jsx)("td",{className:"medal-icon-container",children:Object(d.jsx)(O,{})}),te.map((function(e,t){return Object(d.jsx)("td",{id:"player".concat(t+1,"-total-score"),className:"total-score",children:e.score},t)})),Object(d.jsx)("td",{})]}),Object(d.jsxs)("tr",{className:"empty-row",children:[Object(d.jsx)("td",{}),Object(d.jsx)("td",{}),Object(d.jsx)("td",{}),Object(d.jsx)("td",{}),Object(d.jsx)("td",{}),Object(d.jsx)("td",{})]}),Object(d.jsxs)("tr",{className:"add-scores",children:[Object(d.jsx)("td",{id:"suit",children:Object(d.jsxs)("select",{name:"suit",id:"select-suit",onChange:function(e){var t=0,a=0,r=0,c=0;switch(e.target[e.target.selectedIndex].id){case"hearts":t=-100,a=5,r=-500,c=10;break;case"diamonds":t=-100,a=4,r=-400,c=8;break;case"spades":t=-100,a=3,r=-300,c=6;break;case"clubs":t=-100,a=2,r=-200,c=4;break;default:t=0,a=0,r=0,c=0}var n=Object(o.a)({},T);n.suit.name=e.target[e.target.selectedIndex].id,n.suit.normalWinnerPlayerDecrement=t,n.suit.normalOpponentMultiplyer=a,n.suit.kafaWinnerPlayerDecrement=r,n.suit.kafaOpponentMultiplyer=c,n.suit.color=e.target[e.target.selectedIndex].dataset.color,Y((function(){return n}))},style:{color:"".concat(T.suit.color)},value:T.suit.name,children:[Object(d.jsx)("option",{id:"choose",value:"choose","data-color":"black",children:"\xa0El"}),Object(d.jsx)("option",{id:"hearts",value:"hearts","data-color":"red",children:"\u2665\ufe0f\ufe0f"}),Object(d.jsx)("option",{id:"diamonds",value:"diamonds","data-color":"red",children:"\u2666\ufe0f"}),Object(d.jsx)("option",{id:"spades",value:"spades","data-color":"black",children:"\u2660\ufe0f"}),Object(d.jsx)("option",{id:"clubs",value:"clubs","data-color":"black",children:"\u2663\ufe0f"})]})}),T.scores.map((function(e,t){return Object(d.jsx)("td",{className:"curr-hand_player-score",children:Object(d.jsx)("input",{type:"text",name:"player".concat(t+1,"-curr-score"),id:"player".concat(t+1,"-curr"),value:e,"data-i":t,onChange:be})},t)})),Object(d.jsx)("td",{children:Object(d.jsx)("button",{className:"btn btn-add-score-row",onClick:function(){for(var e=0;e<T.scores.length;e++)if(""===T.scores[e]||"choose"===T.suit.name)return;var t=Object(l.a)(T.scores);T.scores.forEach((function(e,a){T.scores.indexOf("-")>-1?t[a]="-"===e?T.suit.normalWinnerPlayerDecrement:t[a]*T.suit.normalOpponentMultiplyer:T.scores.includes("x")||T.scores.includes("X")?"x"===e.toLowerCase()?t[a]=T.suit.kafaWinnerPlayerDecrement:t[a]=t[a]*T.suit.kafaOpponentMultiplyer:T.scores.includes("xx")||T.scores.includes("XX")?"xx"===e.toLowerCase()?t[a]=2*T.suit.kafaWinnerPlayerDecrement:t[a]=2*t[a]*T.suit.kafaOpponentMultiplyer:t[a]=t[a]*T.suit.normalOpponentMultiplyer})),D((function(e){return[].concat(Object(l.a)(e),[t])})),R((function(e){return[].concat(Object(l.a)(e),[T.indicators])})),Y((function(){return{suit:{name:"choose",normalWinnerPlayerDecrement:0,normalOpponentMultiplyer:0,opponentMultiplyer:0,kafaWinnerPlayerDecrement:0,kafaOpponentMultiplyer:0,color:""},scores:["","","",""],indicators:[0,0,0,0]}}))},children:Object(d.jsx)(p,{})})})]}),Object(d.jsxs)("tr",{className:"indicators",children:[Object(d.jsx)("td",{id:"gosterge",children:Object(d.jsx)("span",{id:"gosterge-g-harfi",children:"G"})}),T.indicators.map((function(e,t){return Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"radio",name:"player-indicator",id:"player".concat(t,"-indicator"),value:e,"data-i":t,onChange:pe,checked:0!==parseInt(e)})},t)})),Object(d.jsx)("td",{children:Object(d.jsx)("button",{className:"btn btn-clear-curr-indicators",onClick:function(){var e=Object(o.a)({},T);e.indicators=[0,0,0,0],Y(e)},children:Object(d.jsx)(u,{})})})]})]})]}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsxs)("button",{className:"btn btn-new-row",onClick:function(){G(F+1),D([].concat(Object(l.a)(H),[["","","",""]]))},children:["Bo\u015f El \xa0",Object(d.jsx)(m,{})]}),Object(d.jsxs)("button",{className:"btn btn-clear-all-scores",onClick:function(){D((function(){return[]})),R((function(){return[]})),Y((function(e){return{suit:{name:"choose",normalWinnerPlayerDecrement:0,normalOpponentMultiplyer:0,opponentMultiplyer:0,kafaWinnerPlayerDecrement:0,kafaOpponentMultiplyer:0,color:""},scores:["","","",""],indicators:[0,0,0,0]}})),ae((function(){return[{id:c.id,name:c.name,score:""},{id:g.id,name:g.name,score:""},{id:S.id,name:S.name,score:""},{id:M.id,name:M.name,score:""}]}))},children:["Skorlar\u0131 \xa0",Object(d.jsx)(b,{})]}),Object(d.jsxs)("button",{className:"btn btn-clear-all",onClick:function(){localStorage.clear(),window.location=window.location.href},children:["Her\u015feyi \xa0",Object(d.jsx)(b,{})]})]}),Object(d.jsx)(x,{leaderBoard:se,diffs:je})]})},v=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)("h1",{className:"App-h1",children:"S\xfcper 81"})}),Object(d.jsx)("main",{className:"main-content",children:Object(d.jsx)(g,{})})]})};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.2ad39aaf.chunk.js.map