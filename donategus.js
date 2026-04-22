document.addEventListener('DOMContentLoaded',()=>{
let tTimer;
window.showToast=function(msg){
const t=document.getElementById('toast');
if(!t)return;
t.textContent=msg;
t.classList.add('active','show');
clearTimeout(tTimer);
tTimer=setTimeout(()=>t.classList.remove('active','show'),2500);
};
window.copyText=window.copyData=function(val,msg){
navigator.clipboard.writeText(val).then(()=>{
showToast(msg||'คัดลอกเรียบร้อย');
if(navigator.vibrate)navigator.vibrate(40);
});
};
const amtInput=document.getElementById('amtInput')||document.getElementById('amount');
const presetBtns=document.querySelectorAll('.preset-btn, .p-btn');
presetBtns.forEach(btn=>{
btn.addEventListener('click',function(){
const val=this.textContent.replace(/[^0-9]/g,'');
if(amtInput)amtInput.value=val;
presetBtns.forEach(b=>b.classList.remove('active'));
this.classList.add('active');
});
});
if(amtInput){
amtInput.addEventListener('input',()=>{
presetBtns.forEach(b=>b.classList.remove('active'));
});
}
window.generateQR=window.createQR=function(){
const val=amtInput?amtInput.value:0;
const area=document.getElementById('qrArea')||document.getElementById('qrResult');
const img=document.getElementById('qrImg')||document.getElementById('qrImage');
const lbl=document.getElementById('qrLabel')||document.querySelector('.qr-label');
if(!val||val<=0){
showToast('ระบุยอดเงินก่อนนะครับ 🙏');
return;
}
if(area){
area.classList.remove('show','active');
void area.offsetWidth;
}
if(img){
img.src=`https://promptpay.io/0801138627/${val}.png`;
img.onload=()=>{
if(area)area.classList.add('show','active');
showToast('สร้าง QR สำเร็จ!');
};
}
if(lbl){
lbl.textContent=`ยอดโอน: ฿${Number(val).toLocaleString('th-TH')}`;
}
};
});
