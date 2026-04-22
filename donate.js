document.addEventListener('DOMContentLoaded',()=>{
const hamburgerNav=document.getElementById('hamburgerNav');
const mainNavLinks=document.getElementById('mainNavLinks');
const topLinks=document.querySelectorAll('#mainNavLinks a');
if(hamburgerNav&&mainNavLinks){
hamburgerNav.addEventListener('click',()=>{
hamburgerNav.classList.toggle('active');
mainNavLinks.classList.toggle('active');
});
topLinks.forEach(link=>{
link.addEventListener('click',()=>{
hamburgerNav.classList.remove('active');
mainNavLinks.classList.remove('active');
});
});
}
});
function copyText(val,msg){
navigator.clipboard.writeText(val).then(()=>{
showToast(msg);
if(navigator.vibrate)navigator.vibrate(40);
}).catch(()=>{
showToast('คัดลอกไม่สำเร็จ กรุณาลองใหม่');
});
}
let toastTimeout;
function showToast(msg){
const t=document.getElementById('toast');
t.textContent=msg;
t.classList.add('show');
if(toastTimeout)clearTimeout(toastTimeout);
toastTimeout=setTimeout(()=>{
t.classList.remove('show');
},2500);
}
