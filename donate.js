const fortunes = [
    { num: "๑", text: "บุญบาปอยู่ที่ใจ ไม่ได้อยู่ที่อื่น" },
    { num: "๒", text: "การภาวนาคือการสร้างสติ ให้เห็นความจริงของกายและใจ" },
    { num: "๓", text: "มีสติอยู่ทุกลมหายใจ นั่นแหละคือทางพ้นทุกข์" },
    { num: "๔", text: "ความสุขที่แท้จริง เกิดจากการปล่อยวางไม่ใช่การครอบครอง" },
    { num: "๕", text: "อดีตผ่านไปแล้ว อนาคตยังมาไม่ถึง จงอยู่กับปัจจุบัน" },
    { num: "๖", text: "ผู้ให้ย่อมเป็นที่รัก โภคทรัพย์ย่อมเกิดแก่ผู้บริจาค" }
];

function shakeSiemSee() {
    const shakeBox = document.getElementById('shake-box');
    const btnShake = document.getElementById('btn-shake');
    const cylinderArea = document.getElementById('cylinder-area');
    const resultArea = document.getElementById('result-area');

    btnShake.innerText = "กำลังตั้งจิต...";
    btnShake.disabled = true;
    shakeBox.classList.add('shaking');

    setTimeout(() => {
        shakeBox.classList.remove('shaking');
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const result = fortunes[randomIndex];
        document.getElementById('fortune-number').innerText = `ไม้หมายเลข ${result.num}`;
        document.getElementById('fortune-text').innerText = `"${result.text}"`;
        cylinderArea.style.display = 'none';
        resultArea.style.display = 'block';
        btnShake.innerText = "เขย่าเซียมซี";
        btnShake.disabled = false;

    }, 2000); 
}

function resetSiemSee() {
    document.getElementById('cylinder-area').style.display = 'block';
    document.getElementById('result-area').style.display = 'none';
}