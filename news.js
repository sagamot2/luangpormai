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