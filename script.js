const quotes = [
    "บุญบาปอยู่ที่ใจ ไม่ได้อยู่ที่อื่น",
    "การภาวนาคือการสร้างสติ ให้เห็นความจริงของกายและใจ",
    "มีสติอยู่ทุกลมหายใจ นั่นแหละคือทางพ้นทุกข์",
    "ความสุขที่แท้จริง เกิดจากการปล่อยวางไม่ใช่การครอบครอง"
];

window.onload = function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote-text");
    
    quoteElement.style.opacity = 0; 
    
    setTimeout(() => {
        quoteElement.innerText = `"${quotes[randomIndex]}"`;
        quoteElement.style.transition = "opacity 1s ease-in-out";
        quoteElement.style.opacity = 1;
    }, 200);
};