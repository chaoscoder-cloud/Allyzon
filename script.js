function openBox() {
    document.querySelector('.lid').style.transform = 'rotateX(120deg)';

    setTimeout(() => {
        document.querySelector('.message-container').style.display = 'block';
    }, 500);
}

function no(event) {
    event.stopPropagation();
    alert("ANONG NO? BAHALA KA JAN MAY YEYES KA👺");
}

function yes(event) {
    event.stopPropagation();
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.message-container').style.display = 'none';

    setTimeout(() => {
        document.querySelector('.love-letter').style.display = 'block';
    }, 500);
}

function flyAwayLetter() {
    const loveLetter = document.getElementById('love-letter');
    loveLetter.classList.add('fly-away');

    setTimeout(() => {
        loveLetter.style.display = 'none';
        showLoveMessage();
    }, 1500);
}

function showLoveMessage() {
    document.getElementById('love-message').innerHTML = `
        <p><b>To Ally,</b></p>
        <p>You are the melody in my heart, the warmth in my soul, and the dream I never want to wake from.</p>
        <p>With every heartbeat, my love for you grows stronger, and I promise to cherish you always.</p>
        <p>Forever yours,</p>
        <b>Kian ❤️</b>
    `;

    document.getElementById('love-message').style.display = 'block';
    document.getElementById('love-message').style.opacity = '1';
}
