const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const mainContainer = document.getElementById('main-container');
const giftBox = document.getElementById('gift-box');
const galleryBox = document.getElementById('gallery-box');
const audio = document.getElementById('love-song');
const slideshowImg = document.getElementById('slideshow-img');

// --- போட்டோஸ் லிஸ்ட் (photos ஃபோல்டருக்குள் இருக்க வேண்டும்) ---
const photos = [
    'photos/p1.jpg',
    'photos/p2.jpg',
    'photos/p3.jpg',
    'photos/p4.jpg',
    'photos/p5.jpg',
    'photos/p6.jpg',
    'photos/p7.jpg',
    'photos/p8.jpg',
];

let currentIndex = 0;

// 1. NO Button ஓடும் லாஜிக்
noBtn.addEventListener('mouseover', () => {
    const containerRect = mainContainer.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    const maxX = containerRect.width - btnRect.width - 40;
    const maxY = containerRect.height - btnRect.height - 40;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// 2. YES பட்டன் -> Heart Box காட்டுகிறது
yesBtn.addEventListener('click', () => {
    mainContainer.style.display = 'none';
    giftBox.classList.remove('hidden');
});

// 3. Heart Box கிளிக் -> Song Play & Photos Start (Direct Action)
giftBox.addEventListener('click', () => {
    giftBox.classList.add('hidden'); // பாக்ஸ் மறையும்
    galleryBox.classList.remove('hidden'); // கேலரி வரும்
    
    // பாட்டு ப்ளே ஆகும்
    audio.play().catch(error => {
        console.log("Audio play blocked. User interaction needed.");
    });

    // முதல் போட்டோவை செட் செய்
    slideshowImg.src = photos[currentIndex];

    // போட்டோ லூப் ஆரம்பம்
    startSlideshow();
    createLoveShower();
});

// 5 செகண்டுக்கு ஒரு முறை போட்டோ மாறும் லாஜிக்
function startSlideshow() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % photos.length; // அடுத்த போட்டோ
        slideshowImg.src = photos[currentIndex]; // போட்டோ மாறும்
    }, 5000); // 5000ms = 5 நொடிகள்
}

// இதய மழை
function createLoveShower() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-50px';
        heart.style.animation = 'fall 3s linear forwards';
        document.body.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 3000);
    }, 100);
}

const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fall { to { transform: translateY(110vh); opacity: 0; } }`;
document.head.appendChild(styleSheet);