// Open the lid and show the question
function openLid() {
    let lid = document.getElementById('lid');
    lid.classList.add('open');

    setTimeout(() => {
        document.getElementById('message').style.opacity = '1';
        document.getElementById('message').style.transform = 'translate(-50%, -150px)';
    }, 500);
}

// Clicking "No" shows an alert
function no(event) {
    event.stopPropagation();
    alert("ANONG NO? BAHALA KA DYAN MAG YE-YES KA👺");
}

// Clicking "Yes" makes the letter slide out of the box
function yes(event) {
    event.stopPropagation();

    document.querySelector('.container').style.display = 'none';
    document.getElementById('message').style.display = 'none';

    setTimeout(() => {
        let loveLetter = document.getElementById('love-letter');
        loveLetter.style.display = 'block';
        setTimeout(() => loveLetter.classList.add('letter-slide'), 100);
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
