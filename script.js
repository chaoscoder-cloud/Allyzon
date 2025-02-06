function openBox() {
    // Apply the open class to trigger the lid opening
    document.querySelector('.container').classList.add('open');

    setTimeout(() => {
        // Show the message and buttons after opening the box
        document.querySelector('.message').style.opacity = '1';
        document.querySelector('.buttons').classList.add('slide'); // Slide buttons out
    }, 500);
}

function yes(event) {
    event.stopPropagation();
    // Hide the box and buttons after selection
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.message').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none'; 

    setTimeout(() => {
        document.querySelector('.love-letter').style.display = 'block';
    }, 500);
}

function no(event) {
    event.stopPropagation();
    alert("ANONG NO? BAHALA KA JAN MAG YE-YES KA👺");
}

function openLetter() {
    // When the letter is clicked, reveal the love message
    const loveMessage = document.getElementById('love-message');
    loveMessage.innerHTML = `
        <p><b>To Ally,</b></p>
        <p>You are the melody in my heart, the warmth in my soul, and the dream I never want to wake from.</p>
        <p>With every heartbeat, my love for you grows stronger, and I promise to cherish you always.</p>
        <p>Forever yours,</p>
        <b>Kian ❤️</b>
    `;
    loveMessage.style.display = 'block';
    loveMessage.style.opacity = '1';
}

// Generate Falling Hearts
setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.querySelector(".hearts-container").appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}, 300);
