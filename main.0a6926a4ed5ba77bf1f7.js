(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{QfWi:function(o,n){var t=document.querySelector('button[data-action="start"'),e=document.querySelector('button[data-action="stop"'),a=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];setRandomColor=function(){var o,n,t=a[(o=0,n=a.length-1,Math.floor(Math.random()*(n-o+1)+o))];console.log(t),document.body.style.background=t},t.addEventListener("click",(function(o){t.disabled=!0,randomColor=setInterval((function(){return setRandomColor()}),1e3)})),e.addEventListener("click",(function(o){t.disabled=!1,clearInterval(randomColor)}))}},[["QfWi",1]]]);
//# sourceMappingURL=main.0a6926a4ed5ba77bf1f7.js.map