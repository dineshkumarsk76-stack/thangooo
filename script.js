const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const mainContainer = document.getElementById('main-container');
const giftBox = document.getElementById('gift-box');
const galleryBox = document.getElementById('gallery-box');
const audio = document.getElementById('love-song');
const slideshowImg = document.getElementById('slideshow-img');

// 1. Photos List (Folder name 'photos/' ah thookiyachu)
const photos = [
    'p1.jpg',
    'p2.jpg',
    'p3.jpg',
    'p4.jpg',
    'p5.jpg',
    'p6.jpg',
    'p7.jpg',
    'p8.jpg'
];

let currentIndex = 0;

// 2. NO Button odum logic
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 3. YES Button click panna gift box varum
yesBtn.addEventListener('click', () => {
    mainContainer.classList.add('hidden');
    giftBox.classList.remove('hidden');
});

// 4. Gift box tap panna gallery varum
giftBox.addEventListener('click', () => {
    giftBox.classList.add('hidden');
    galleryBox.classList.remove('hidden');
    audio.play(); // Song play aagum
    startSlideshow(); // Slideshow start aagum
});

// 5. Automatic Slideshow (5 Seconds once)
function startSlideshow() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % photos.length;
        slideshowImg.src = photos[currentIndex];
    }, 5000); // 5000ms = 5 Seconds
}
