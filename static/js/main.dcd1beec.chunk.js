(this["webpackJsonpscore-app"]=this["webpackJsonpscore-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(8),s=a.n(c),o=(a(13),a(14),a(15),a(3)),i=a(4),l=a(2),u=(a(16),a(17),a(0));function d(e){return Object(u.jsx)("td",{className:"player".concat(e.player," score-cell"),children:Object(u.jsx)("input",{type:"text",name:"","data-i":e.i,"data-j":e.j,id:"player".concat(e.player,"-hand").concat(e.hand,"-score"),value:e.score,onChange:e.handleRowScores,className:parseInt(e.score)<0?"curr-hand-winner":""})})}a(19);function p(e){return Object(u.jsxs)("tr",{className:"score-row",children:[Object(u.jsx)("td",{children:Object(u.jsx)("div",{className:"hand",children:e.hand})}),e.row_scores.map((function(t,a){return Object(u.jsx)(d,{score:t,player:a+1,index:a,hand:e.hand,allScores:e.allScores,i:e.i,j:a,handleRowScores:e.handleRowScores},a)})),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-delete-row",children:"-"})})]})}var j=function(){var e=JSON.parse(localStorage.getItem("player1")),t=Object(n.useState)(e||{id:1,name:""}),a=Object(l.a)(t,2),r=a[0],c=a[1],s=JSON.parse(localStorage.getItem("player2")),d=Object(n.useState)(s||{id:2,name:""}),j=Object(l.a)(d,2),f=j[0],m=j[1],O=JSON.parse(localStorage.getItem("player3")),b=Object(n.useState)(O||{id:3,name:""}),h=Object(l.a)(b,2),g=h[0],y=h[1],x=JSON.parse(localStorage.getItem("player4")),N=Object(n.useState)(x||{id:4,name:""}),S=Object(l.a)(N,2),v=S[0],I=S[1],k=JSON.parse(localStorage.getItem("allScores")),C=Object(n.useState)(k||[]),w=Object(l.a)(C,2),E=w[0],J=w[1],M=JSON.parse(localStorage.getItem("allIndicators")),L=Object(n.useState)(M||[]),P=Object(l.a)(L,2),D=P[0],W=P[1],R=JSON.parse(localStorage.getItem("allPenalties")),_=Object(n.useState)(R||[]),A=Object(l.a)(_,2),B=A[0],H=A[1],X=JSON.parse(localStorage.getItem("handNum")),z=Object(n.useState)(X||0),T=Object(l.a)(z,2),G=T[0],U=T[1],Y=JSON.parse(localStorage.getItem("currHand")),q=Object(n.useState)(Y||{suit:{name:"choose",normalWinnerPlayerDecrement:0,normalOpponentMultiplyer:0,opponentMultiplyer:0,kafaWinnerPlayerDecrement:0,kafaOpponentMultiplyer:0,color:""},scores:["","","",""],indicators:[0,0,0,0],penalties:["","","",""]}),F=Object(l.a)(q,2),K=F[0],Q=F[1],V=JSON.parse(localStorage.getItem("totalScores")),Z=Object(n.useState)(V||[{id:1,name:r,score:""},{id:2,name:f,score:""},{id:3,name:g,score:""},{id:4,name:v,score:""}]),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ae=JSON.parse(localStorage.getItem("leaderBoard")),ne=Object(n.useState)(ae||[]),re=Object(l.a)(ne,2),ce=re[0],se=re[1];Object(n.useEffect)((function(){localStorage.setItem("handNum",JSON.stringify(G))}),[G]),Object(n.useEffect)((function(){localStorage.setItem("player1",JSON.stringify(r))}),[r]),Object(n.useEffect)((function(){localStorage.setItem("player2",JSON.stringify(f))}),[f]),Object(n.useEffect)((function(){localStorage.setItem("player3",JSON.stringify(g))}),[g]),Object(n.useEffect)((function(){localStorage.setItem("player4",JSON.stringify(v))}),[v]),Object(n.useEffect)((function(){localStorage.setItem("currHand",JSON.stringify(K))}),[K]),Object(n.useEffect)((function(){localStorage.setItem("allScores",JSON.stringify(E))}),[E]),Object(n.useEffect)((function(){localStorage.setItem("allIndicators",JSON.stringify(D))}),[D]),Object(n.useEffect)((function(){localStorage.setItem("allPenalties",JSON.stringify(B))}),[B]),Object(n.useEffect)((function(){localStorage.setItem("totalScores",JSON.stringify(ee))}),[ee]),Object(n.useEffect)((function(){localStorage.setItem("leaderBoard",JSON.stringify(ce))}),[ce]),Object(n.useEffect)((function(){var e=0;E.forEach((function(t){return e+=parseInt(""===t[0]?0:t[0])})),D.forEach((function(t){return e+=parseInt(""===t[0]?0:t[0])})),B.forEach((function(t){return e+=parseInt(""===t[0]?0:t[0])}));var t=0;E.forEach((function(e){return t+=parseInt(""===e[1]?0:e[1])})),D.forEach((function(e){return t+=parseInt(""===e[1]?0:e[1])})),B.forEach((function(e){return t+=parseInt(""===e[1]?0:e[1])}));var a=0;E.forEach((function(e){return a+=parseInt(""===e[2]?0:e[2])})),D.forEach((function(e){return a+=parseInt(""===e[2]?0:e[2])})),B.forEach((function(e){return a+=parseInt(""===e[2]?0:e[2])}));var n=0;E.forEach((function(e){return n+=parseInt(""===e[3]?0:e[3])})),D.forEach((function(e){return n+=parseInt(""===e[3]?0:e[3])})),B.forEach((function(e){return n+=parseInt(""===e[3]?0:e[3])})),te((function(){return[{id:r.id,name:r.name,score:e||t&&a&&n&&"0"||""},{id:f.id,name:f.name,score:t||e&&a&&n&&"0"||""},{id:g.id,name:g.name,score:a||e&&t&&n&&"0"||""},{id:v.id,name:v.name,score:n||e&&t&&a&&"0"||""}]}))}),[E,D,B,r,f,g,v]),Object(n.useEffect)((function(){var e=Object(i.a)(ee).sort((function(e,t){return e.score-t.score}));se((function(){return e}))}),[ee]);var oe=function(e){for(var t=e.split(""),a=0;a<t.length;a++)if("x"!==t[a].toLowerCase())return[!1,t.length];return[!0,t.length]},ie=function(e){if((!isNaN(e.target.value)||oe(e.target.value)[0]||"-"===e.target.value[0])&&!("-"===e.target.value[0]&&e.target.value.length>1)&&(isNaN(e.target.value)||0!==parseInt(e.target.value))&&!(oe(e.target.value)&&function(e){for(var t=0,a=0;a<e.length;a++)"x"===e[a].toLowerCase()&&t++;return t}(e.target.value.toLowerCase())>2)&&!(function(e){for(var t=e.split(""),a=0;a<t.length;a++)if("-"!==t[a].toLowerCase())return[!1,t.length];return[!0,t.length]}(e.target.value)&&function(e){for(var t=0,a=0;a<e.length;a++)"-"===e[a].toLowerCase()&&t++;return t}(e.target.value.toLowerCase())>1)){for(var t=0;t<K.scores.length;t++)if(t!==parseInt(e.target.dataset.i)&&(K.scores[t].toLowerCase().includes("x")||K.scores[t].toLowerCase().includes("-"))&&e.target.value.toLowerCase().includes("x"))return;for(var a=0;a<K.scores.length;a++)if(a!==parseInt(e.target.dataset.i)&&(K.scores[a].toLowerCase().includes("-")||K.scores[a].toLowerCase().includes("x"))&&e.target.value.toLowerCase().includes("-"))return;var n=Object(o.a)({},K);n.scores[e.target.dataset.i]=e.target.value.toUpperCase(),Q(n)}},le=function(e){var t=10*-K.suit.normalOpponentMultiplyer,a=e.target.dataset.i,n=Object(o.a)({},K);n.indicators=[0,0,0,0],n.indicators[a]=t,Q(n)},ue=function(e){var t=Object(o.a)({},K),a=e.target.dataset.i;if(!isNaN(e.target.value)){var n=parseInt(e.target.value);t.penalties[a]=n,Q(t)}},de=function(e){var t=e.target.value;if(-1===t.indexOf(" ")&&"0"!==t[0]&&(!isNaN(t)||"-"===t[0])&&!(t.length>1&&isNaN(t))){var a=Object(i.a)(E);a[e.target.dataset.i][e.target.dataset.j]=e.target.value,J(a)}},pe=function(e){var t="";switch(e){case 1:t="first";break;case 2:t="second";break;case 3:t="third";break;case 4:t="fourth";break;default:t="none"}return t};return Object(u.jsxs)("article",{className:"table-container",children:[Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{className:"players",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{}),Object(u.jsx)("td",{id:"player1-name","data-name":"player1",className:"player",children:Object(u.jsx)("input",{type:"text",name:"player1",id:"player1",onChange:function(e){c((function(){return{id:1,name:e.target.value}}))},placeholder:"Oyuncu 1",value:r.name,className:""!==ee[0].score&&pe(ce.map((function(e){return e.id})).indexOf(r.id)+1)||""})}),Object(u.jsx)("td",{id:"player2-name","data-name":"player2",className:"player",children:Object(u.jsx)("input",{type:"text",name:"player2",id:"player2",onChange:function(e){m((function(){return{id:2,name:e.target.value}}))},placeholder:"Oyuncu 2",value:f.name,className:""!==ee[1].score&&pe(ce.map((function(e){return e.id})).indexOf(f.id)+1)||""})}),Object(u.jsx)("td",{id:"player3-name","data-name":"player3",className:"player",children:Object(u.jsx)("input",{type:"text",name:"player3",id:"player3",onChange:function(e){y((function(){return{id:3,name:e.target.value}}))},placeholder:"Oyuncu 3",value:g.name,className:""!==ee[2].score&&pe(ce.map((function(e){return e.id})).indexOf(g.id)+1)||""})}),Object(u.jsx)("td",{id:"player4-name","data-name":"player4",className:"player",children:Object(u.jsx)("input",{type:"text",name:"player4",id:"player4",onChange:function(e){I((function(){return{id:4,name:e.target.value}}))},placeholder:"Oyuncu 4",value:v.name,className:""!==ee[3].score&&pe(ce.map((function(e){return e.id})).indexOf(v.id)+1)||""})}),Object(u.jsx)("td",{})]})}),Object(u.jsxs)("tbody",{className:"scores",children:[E.map((function(e,t){return Object(u.jsx)(p,{row_scores:e,allScores:E,hand:t+1,i:t,handleRowScores:de},t)})),Object(u.jsxs)("tr",{className:"total-scores",children:[Object(u.jsx)("td",{children:"\u27a1\ufe0f"}),ee.map((function(e,t){return Object(u.jsx)("td",{className:"player".concat(t+1,"-total-score"),children:e.score},t)})),Object(u.jsx)("td",{})]}),Object(u.jsxs)("tr",{className:"add-scores",children:[Object(u.jsx)("td",{id:"suit",children:Object(u.jsxs)("select",{name:"suit",id:"select-suit",onChange:function(e){var t=0,a=0,n=0,r=0;switch(e.target[e.target.selectedIndex].id){case"hearts":t=-100,a=5,n=-500,r=10;break;case"diamonds":t=-100,a=4,n=-400,r=8;break;case"spades":t=-100,a=3,n=-300,r=6;break;case"clubs":t=-100,a=2,n=-200,r=4;break;default:t=0,a=0,n=0,r=0}var c=Object(o.a)({},K);c.suit.name=e.target[e.target.selectedIndex].id,c.suit.normalWinnerPlayerDecrement=t,c.suit.normalOpponentMultiplyer=a,c.suit.kafaWinnerPlayerDecrement=n,c.suit.kafaOpponentMultiplyer=r,c.suit.color=e.target[e.target.selectedIndex].dataset.color,Q((function(){return c}))},style:{color:"".concat(K.suit.color)},value:K.suit.name,children:[Object(u.jsx)("option",{id:"choose",value:"choose","data-color":"black",children:"\ud83d\udd3b"}),Object(u.jsx)("option",{id:"hearts",value:"hearts","data-color":"red",children:"\u2665\ufe0f\ufe0f"}),Object(u.jsx)("option",{id:"diamonds",value:"diamonds","data-color":"red",children:"\u2666\ufe0f"}),Object(u.jsx)("option",{id:"spades",value:"spades","data-color":"black",children:"\u2660\ufe0f"}),Object(u.jsx)("option",{id:"clubs",value:"clubs","data-color":"black",children:"\u2663\ufe0f"})]})}),K.scores.map((function(e,t){return Object(u.jsx)("td",{className:"curr-hand_player-score",children:Object(u.jsx)("input",{type:"text",name:"player".concat(t+1,"-curr-score"),id:"player".concat(t+1,"-curr"),value:e,"data-i":t,onChange:ie})},t)})),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-add-score-row",onClick:function(){for(var e=0;e<K.scores.length;e++)if(""===K.scores[e]||"choose"===K.suit.name)return;var t=Object(i.a)(K.scores);K.scores.forEach((function(e,a){K.scores.indexOf("-")>-1&&(t[a]="-"===e?K.suit.normalWinnerPlayerDecrement:t[a]*K.suit.normalOpponentMultiplyer),(K.scores.includes("x")||K.scores.includes("X"))&&("x"===e.toLowerCase()?t[a]=K.suit.kafaWinnerPlayerDecrement:t[a]=t[a]*K.suit.kafaOpponentMultiplyer),(K.scores.includes("xx")||K.scores.includes("XX"))&&("xx"===e.toLowerCase()?t[a]=2*K.suit.kafaWinnerPlayerDecrement:t[a]=2*t[a]*K.suit.kafaOpponentMultiplyer)})),J((function(e){return[].concat(Object(i.a)(e),[t])})),W((function(e){return[].concat(Object(i.a)(e),[K.indicators])})),H((function(e){return[].concat(Object(i.a)(e),[K.penalties])})),Q((function(){return{suit:{name:"choose",normalWinnerPlayerDecrement:0,normalOpponentMultiplyer:0,opponentMultiplyer:0,kafaWinnerPlayerDecrement:0,kafaOpponentMultiplyer:0,color:""},scores:["","","",""],indicators:[0,0,0,0],penalties:["","","",""]}}))},children:"+"})})]}),Object(u.jsxs)("tr",{className:"indicators",children:[Object(u.jsx)("td",{id:"gosterge",children:Object(u.jsx)("span",{id:"gosterge-g-harfi",children:"G"})}),K.indicators.map((function(e,t){return Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"radio",name:"player-indicator",id:"player".concat(t,"-indicator"),value:e,"data-i":t,onChange:le,checked:0!==parseInt(e)})},t)})),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-clear-curr-indicators",onClick:function(){var e=Object(o.a)({},K);e.indicators=[0,0,0,0],Q(e)},children:"-"})})]}),Object(u.jsxs)("tr",{className:"penalties",children:[Object(u.jsx)("td",{id:"penalty",children:Object(u.jsx)("span",{id:"penalty-c-harfi",children:"C"})}),K.penalties.map((function(e,t){return Object(u.jsx)("td",{className:"curr-hand_player-penalty",children:Object(u.jsx)("input",{type:"text",name:"player".concat(t+1,"-curr-penalty"),id:"player".concat(t+1,"-curr-penalty"),value:e||"","data-i":t,onChange:ue})},t)})),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-clear-curr-penalties",onClick:function(){var e=Object(o.a)({},K);e.penalties=["","","",""],Q(e)},children:"-"})})]})]})]}),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{className:"btn btn-new-row",onClick:function(){U(G+1),J([].concat(Object(i.a)(E),[["","","",""]]))},children:"Yeni El"}),Object(u.jsx)("button",{className:"btn btn-clear-all-scores",onClick:function(){J((function(){return[]})),W((function(){return[]})),H((function(){return[]})),Q((function(e){return Object(o.a)(Object(o.a)({},e),{},{indicators:[0,0,0,0],penalties:["","","",""]})})),te((function(){return[{id:r.id,name:r.name,score:""},{id:f.id,name:f.name,score:""},{id:g.id,name:g.name,score:""},{id:v.id,name:v.name,score:""}]}))},children:"Skorlar\u0131 Temizle"}),Object(u.jsx)("button",{className:"btn btn-clear-all",onClick:function(){J((function(){return[]})),W((function(){return[]})),H((function(){return[]})),te((function(){return[{id:r.id,name:r.name,score:""},{id:f.id,name:f.name,score:""},{id:g.id,name:g.name,score:""},{id:v.id,name:v.name,score:""}]})),Q((function(){return{suit:{name:"choose",normalWinnerPlayerDecrement:0,normalOpponentMultiplyer:0,opponentMultiplyer:0,kafaWinnerPlayerDecrement:0,kafaOpponentMultiplyer:0,color:""},scores:["","","",""],indicators:[0,0,0,0],penalties:["","","",""]}})),c((function(){return{id:1,name:""}})),m((function(){return{id:2,name:""}})),y((function(){return{id:3,name:""}})),I((function(){return{id:4,name:""}}))},children:"Her\u015feyi Temizle"})]})]})},f=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)("h1",{className:"App-h1",children:"S\xfcper 81"})}),Object(u.jsx)("main",{className:"main-content",children:Object(u.jsx)(j,{})})]})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.dcd1beec.chunk.js.map