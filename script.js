document.addEventListener("DOMContentLoaded", () => {
    createFallingHearts();
});

function openBox() {
    document.querySelector('.lid').classList.add('open-lid');
    setTimeout(() => { document.getElementById('message-container').style.display = 'block'; }, 500);
}

function no(event) {
    event.stopPropagation();
    alert('ANONG NO? BAHALA KA DYAN MAG YE-YES KA👺');
}

function yes(event) {
    event.stopPropagation();
    document.querySelector('.container').style.display = 'none';
    document.getElementById('message-container').style.display = 'none';
    setTimeout(() => { document.getElementById('love-letter').style.display = 'block'; }, 500);
}

function flyAwayLetter() {
    const loveLetter = document.getElementById('love-letter');
    loveLetter.style.transform = 'translate(-50%, -200vh) rotate(30deg)';
    loveLetter.style.opacity = '0';
    setTimeout(() => {
        loveLetter.style.display = 'none';
        showLoveMessage();
    }, 1000);
}

function showLoveMessage() {
    document.getElementById('love-message').innerHTML = `<p><b>To Ally,</b></p>
    <p>You are the melody in my heart, the warmth in my soul.</p>
    <p>Forever yours,</p> <b>Kian ❤️</b>`;
    document.getElementById('love-message').style.display = 'block';
}

function createFallingHearts() {
    const container = document.querySelector('.hearts-container');
    for (let i = 0; i < 10; i++) {  // Limited the hearts to 10
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";
        container.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 6000);
    }
    setInterval(createFallingHearts, 3000); // Slowed down new heart creation
}
