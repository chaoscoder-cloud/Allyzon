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

// Clicking "Yes" hides the box & shows the love letter
function yes(event) {
    event.stopPropagation();

    document.querySelector('.container').style.display = 'none';
    document.getElementById('message').style.display = 'none';

    setTimeout(() => {
        document.getElementById('love-letter').style.display = 'block';
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
        <p><b>To Allyzon</b></p>
        <p>Happy Valentines day pag nakita mo toh edi nag yes ka well wala ka din naman magagawa HAHHAHA</p>
        <p>pero thank you nalang sa pag accept</p>
        <p>Un lang sana nagustuhan mo tong anek anek na toh at may surprise ako sayo HAHHAHA</p>
        <b>From Kian</b>
    `;

    document.getElementById('love-message').style.display = 'block';
    document.getElementById('love-message').style.opacity = '1';
}

// Generate limited falling hearts
function createHearts() {
    const container = document.querySelector('.hearts-container');
    
    setInterval(() => {
        const hearts = container.getElementsByClassName('heart');
        
        if (hearts.length < 10) { // Limit to 10 hearts at a time
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDuration = `${3 + Math.random() * 2}s`;
            container.appendChild(heart);
            
            setTimeout(() => {
                heart.style.opacity = '0'; // Fade out before removing
                setTimeout(() => heart.remove(), 1000);
            }, 4000);
        }
    }, 700);
}

createHearts();
