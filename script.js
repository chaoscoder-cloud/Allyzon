function openBox() {
    document.querySelector('.lid').classList.add('open-lid');
    
    setTimeout(() => {
        document.getElementById('message-container').style.display = 'block';
    }, 500);
}

function no(event) {
    event.stopPropagation();
    alert("ANONG NO? BAHALA KA JAN MAY YEYES KA👺");
}

function yes(event) {
    event.stopPropagation();

    // Hide the box and message
    document.querySelector('.container').style.display = 'none';
    document.getElementById('message-container').style.display = 'none';

    // Show the love letter
    setTimeout(() => {
        document.getElementById('love-letter').style.display = 'block';
    }, 500);
}

function flyAwayLetter() {
    const loveLetter = document.getElementById('love-letter');

    // Make letter fly away
    loveLetter.style.transform = "translate(-50%, -200vh) rotate(30deg)";
    loveLetter.style.opacity = "0";

    setTimeout(() => {
        loveLetter.style.display = 'none';
        showLoveMessage();
    }, 1000);
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
}
