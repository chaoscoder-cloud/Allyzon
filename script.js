/* General Page Styles */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to bottom, #ff758c, #ff7eb3);
    font-family: Arial, sans-serif;
    margin: 0;
    text-align: center;
    color: white;
    overflow: hidden;
}

/* Falling Hearts Animation */
@keyframes fall {
    0% { transform: translateY(-100vh); }
    100% { transform: translateY(100vh); }
}
.hearts-container {
    position: fixed;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
.heart {
    position: absolute;
    width: 15px;
    height: 15px;
    background: red;
    clip-path: polygon(50% 0%, 100% 35%, 80% 100%, 50% 75%, 20% 100%, 0% 35%);
    opacity: 0.7;
    animation: fall 6s linear infinite;
}

/* Box */
.container {
    position: relative;
    width: 200px;
    height: 200px;
    perspective: 800px;
}
.lid {
    width: 100%;
    height: 50px;
    background-color: red;
    position: absolute;
    top: 0;
    left: 0;
    transform-origin: top;
    transition: transform 1s ease-in-out;
    cursor: pointer;
}
.open-lid { transform: rotateX(-120deg); }
.box {
    width: 100%;
    height: 100%;
    background-color: red;
    border-radius: 15px;
}

/* Question & Buttons */
.message-container {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 10px;
    border-radius: 10px;
    color: black;
}

/* Love Letter */
.love-letter {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: blue;
    padding: 10px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
}

/* Love Message */
.love-message {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    color: black;
}
