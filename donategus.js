let tTimer;
function showToast(msg){
const t=document.getElementById('toast');
t.textContent=msg;
t.classList.add('active');
clearTimeout(tTimer);
tTimer=setTimeout(()=>t.classList.remove('active'),2500);
}
function copyText(val,msg){
navigator.clipboard.writeText(val).then(()=>{
showToast(msg);
if(navigator.vibrate)navigator.vibrate(40);
});
}
function quickAmt(val,btn){
document.getElementById('amtInput').value=val;
resetBtns();
btn.classList.add('active');
}
function resetBtns(){
document.querySelectorAll('.p-btn').forEach(b=>b.classList.remove('active'));
}
function generateQR(){
const val=document.getElementById('amtInput').value;
const area=document.getElementById('qrArea');
const img=document.getElementById('qrImg');
const lbl=document.getElementById('qrLabel');
if(!val||val<=0){
showToast('ใส่ยอดเงินด้วยนะครับ');
return;
}
area.classList.remove('show');
void area.offsetWidth;
img.src=`https://promptpay.io/0801138627/${val}.png`;
lbl.textContent=`ยอดโอน: ฿${Number(val).toLocaleString()}`;
img.onload=()=>{
area.classList.add('show');
showToast('สร้าง QR เรียบร้อย');
};
}