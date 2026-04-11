const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
        hamburger?.classList.remove('open');
        navLinks?.classList.remove('open');
    });
});

const quotes = [
    "ความสงบของจิต คือสมบัติที่ประเสริฐที่สุด",
    "ทุกข์เกิดจากความยึดมั่น ปล่อยวางได้ก็พ้นทุกข์",
    "ภาวนาทุกวัน จิตใจจะสงบและมีปัญญา",
    "ความดีที่ทำไว้ จะเป็นที่พึ่งในยามทุกข์",
    "อย่าปล่อยให้จิตซัดส่าย กำหนดรู้อยู่กับปัจจุบัน",
    "ผู้ปฏิบัติธรรม ย่อมพบความสุขที่แท้จริง",
    "ทานที่ให้ด้วยใจบริสุทธิ์ ย่อมได้บุญมาก",
    "พุทโธ ทุกลมหายใจ จิตจะไม่หลงไป",
    "ครูบาอาจารย์ที่ดี คือแสงสว่างในความมืด",
    "ความเพียรพยายาม ทำให้บรรลุธรรมได้"
];

let current = 0;
const quoteEl = document.getElementById('quote-text');

function showQuote() {
    if (!quoteEl) return;
    quoteEl.style.opacity = '0';
    setTimeout(() => {
        quoteEl.textContent = '\u201c' + quotes[current] + '\u201d';
        quoteEl.style.opacity = '1';
        current = (current + 1) % quotes.length;
    }, 500);
}

if (quoteEl) {
    quoteEl.style.transition = 'opacity 0.5s ease';
    showQuote();
    setInterval(showQuote, 5000);
}

const modal    = document.getElementById('newsModal');
const closeBtn = document.querySelector('.close-btn');

if (modal) {
    setTimeout(() => { modal.style.display = 'flex'; }, 2500);
    closeBtn?.addEventListener('click', () => { modal.style.display = 'none'; });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity  = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.card').forEach((card, i) => {
    card.style.opacity    = '0';
    card.style.transform  = 'translateY(28px)';
    card.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
    observer.observe(card);
});
