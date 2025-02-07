// Open the lid and show the question
function openLid() {
    let lid = document.getElementById('lid');
    lid.classList.add('open');

    setTimeout(() => {
        document.querySelector('.message').style.opacity = '1';
        document.querySelector('.message').style.transform = 'translate(-50%, -150px)';
    }, 500);
}

// Clicking "No" shows an alert
function no(event) {
    event.stopPropagation(); // Prevent click event from propagating
    alert("ANONG NO? BAHALA KA DYAN MAG YE-YES KA👺");
}

// Clicking "Yes" hides the box & shows the love letter
function yes(event) {
    event.stopPropagation();

    document.querySelector('.container').style.display = 'none';
    document.querySelector('.message').style.display = 'none';

    setTimeout(() => {
        document.querySelector('.love-letter').style.display = 'block';
    }, 500);
}

// Clicking the love letter makes it disappear & shows the message
function openLetter() {
    const loveLetter = document.getElementById('love-letter');
    loveLetter.classList.add('fly-away');

    setTimeout(() => {
        loveLetter.style.display = 'none';
        showLoveMessage();
    }, 1500);
}

// Show the love message
function showLoveMessage() {
    document.getElementById('love-message').innerHTML = `
        <p><b>To My Love,</b></p>
        <p>You are the melody in my heart, the warmth in my soul, and the dream I never want to wake from.</p>
        <p>With every heartbeat, my love for you grows stronger, and I promise to cherish you always.</p>
        <p>Forever yours,</p>
        <b>Your Valentine ❤️</b>
    `;

    document.getElementById('love-message').style.display = 'block';
    document.getElementById('love-message').style.opacity = '1';
}

// Generate limited falling hearts
function createHearts() {
    const container = document.querySelector('.hearts-container');

    setInterval(() => {
        if (container.getElementsByClassName('heart').length < 10) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = `${Math.random() * 100}vw`;
            container.appendChild(heart);

            setTimeout(() => heart.remove(), 4000);
        }
    }, 700);
}

createHearts();
