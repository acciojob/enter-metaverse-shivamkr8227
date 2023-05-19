//your JS code here. If required.
const statusele=document.getElementById("status");
const enterbtn=document.getElementById("enterBtn");

enterbtn.addEventListener("click",()=>{
	statusele.innerText="Entered Metaverse";
	const h1ele=document.createElement("h1");
	h1ele.innerText=statusele.innerText;
	statusele.parentNode.replaceChild(h1ele, statusele);
});