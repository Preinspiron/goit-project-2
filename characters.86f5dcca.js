!function(){const e=document.querySelector(".pseudoselect"),t=document.querySelector(".characters-options-list"),i=document.querySelector(".js-click-order");let l=!1;function c(i){!1===l?(e.style.backgroundColor="#34387F",t.style.visibility="visible",t.addEventListener("click",(i=>{e.innerHTML=`${i.target.textContent}`,t.style.visibility="",e.style.backgroundColor="#171717",l=!l}))):(e.style.backgroundColor="#171717",t.style.visibility=""),l=!l}i.addEventListener("click",(e=>{e.preventDefault(),c()})),e.addEventListener("click",c)}();
//# sourceMappingURL=characters.86f5dcca.js.map
