const photos = [
    {file:"photo1.jpg",caption:"My annoying but lovable bhaiya. 🤎😂"},
    {file:"photo2.jpg",caption:"I wish you always succeed in your life. ✨🫶"},
    {file:"photo3.jpg",caption:"Bas thoda kam bhula karo! 😂😭"},
    {file:"photo4.jpg",caption:"So proud of you, big bro. 🥹❤️"},
    {file:"photo5.jpg",caption:"You’re stuck with me forever. 🫶♾️"},
    {file:"photo6.jpg",caption:"Stay happy, stay blessed! ✨🤍"},
    {file:"photo7.jpg",caption:"The ultimate protector since day one. 🛡️❤️"},
    {file:"photo8.jpg",caption:"Thanks for paving the way (and taking the heat first). 😂❤️"},
    {file:"photo9.jpg",caption:"Forever my partner-in-crime. 🤝😈"},
    {file:"photo10.jpg",caption:"Always looking up to you. 🥹✨"},
    {file:"photo11.jpg",caption:"My personal 24/7 advisor and bodybuilder. 😂💪"},
    {file:"photo12.jpg",caption:"Thanks for paying for all my food! 😂🍕💸"},
    {file:"photo13.jpg",caption:"Palke bichae baithe hain aapke order ke liye, bhaiya. 🫡😂"},
    {file:"photo14.jpg",caption:"Annoying you is my forever hobby. 😌😂"},
    {file:"photo15.jpg",caption:"My personal Google for life advice. 🤓❤️"},
    {file:"photo16.jpg",caption:"Kuch bhi ho, stand humesha bhai hi leta hai. 🥹🫂"},
    {file:"photo17.jpg",caption:"May your bank account grow as fast as your age! 💸😂🎂"},
    {file:"photo18.jpg",caption:"Mummy-Papa ka favorite ban-ne ki acting kab band karoge? 😂😭"},
    {file:"photo19.jpg",caption:"Mere bina tumhari life kitni boring hoti, soch lo! 😌😂❤️"},
    {file:"photo20.jpg",caption:"mera phone kho diya apne 😭😂 yh kabhi nhi bhulungi ❤️📱"}
];

const emojis = [
    "🌸","🌹","💐","❤️","💖","💕","✨","⭐","🌟",
    "🎈","🎀","🦋","🥳","🎉","🎊","🤎","🫶","😂",
    "🥹","💗","🌷","🎁"
];

let currentPhoto = 0;
let memoryTimer;
let emojiInterval;

/* Make photos stay in the center longer */
const slowMemoryStyle = document.createElement("style");

slowMemoryStyle.innerHTML = `
@keyframes memoryMoveSlow {

    0% {
        transform: translateX(115vw) rotate(8deg) scale(0.8);
        opacity: 0;
    }

    12% {
        opacity: 1;
    }

    28% {
        transform: translateX(25vw) rotate(-4deg) scale(1);
    }

    38% {
        transform: translateX(0) rotate(2deg) scale(1.05);
    }

    68% {
        transform: translateX(0) rotate(-2deg) scale(1.05);
        opacity: 1;
    }

    80% {
        transform: translateX(-25vw) rotate(-5deg) scale(1);
        opacity: 1;
    }

    100% {
        transform: translateX(-120vw) rotate(8deg) scale(0.8);
        opacity: 0;
    }
}

.memoryCard {
    animation: memoryMoveSlow 8.5s ease-in-out forwards !important;
}
`;

document.head.appendChild(slowMemoryStyle);


/* Emoji rain */
function emojiRain(amount = 25) {

    const container = document.getElementById("emojiRain");

    for (let i = 0; i < amount; i++) {

        const emoji = document.createElement("div");

        emoji.className = "fallingEmoji";

        emoji.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left = Math.random() * 100 + "vw";

        emoji.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        emoji.style.animationDelay =
            Math.random() * 2 + "s";

        emoji.style.fontSize =
            (18 + Math.random() * 25) + "px";

        container.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 8000);
    }
}


/* OPEN button */
function openBirthday() {

    const song = document.getElementById("birthdaySong");

    if (song) {

        song.volume = 1;
        song.currentTime = 0;

        song.load();

        const playPromise = song.play();

        if (playPromise !== undefined) {

            playPromise.catch((error) => {

                console.log("Audio error:", error);

                alert(
                    "Song could not play. Please check that birthday-song.mp3 is inside the assets folder."
                );

            });

        }
    }

    document
        .getElementById("opening")
        .classList.add("hidden");

    document
        .getElementById("cake")
        .classList.remove("hidden");

    emojiRain(70);

    clearInterval(emojiInterval);

    emojiInterval = setInterval(() => {
        emojiRain(18);
    }, 3500);
}


/* NO button */
function dontOpen() {

    const message = document.getElementById("noMessage");

    message.innerHTML =
        "Areee 😭💔 You really chose NO?! Try again, Bhaiya! 😂";

    emojiRain(35);
}


/* Start memories */
function startMemories() {

    document
        .getElementById("cake")
        .classList.add("hidden");

    document
        .getElementById("memories")
        .classList.remove("hidden");

    document
        .getElementById("letterButton")
        .style.display = "none";

    currentPhoto = 0;

    showPhoto();

    emojiRain(40);
}


/* Show photos 1–19 */
function showPhoto() {

    const stage =
        document.getElementById("memoryStage");

    const number =
        document.getElementById("photoNumber");

    stage.innerHTML = "";

    const card =
        document.createElement("div");

    card.className = "memoryCard";


    const tape =
        document.createElement("div");

    tape.className = "memoryTape";


    const image =
        document.createElement("img");

    image.src =
    photos[currentPhoto].file;

    image.alt =
        "Birthday memory " + (currentPhoto + 1);


    const caption =
        document.createElement("div");

    caption.className =
        "memoryCaption";

    caption.textContent =
        photos[currentPhoto].caption;


    card.appendChild(tape);

    card.appendChild(image);

    card.appendChild(caption);

    stage.appendChild(card);


    number.textContent =
        `${currentPhoto + 1} / 19`;


    emojiRain(22);


    clearTimeout(memoryTimer);


    memoryTimer = setTimeout(() => {

        if (currentPhoto < 18) {

            currentPhoto++;

            showPhoto();

        } else {

            document
                .getElementById("letterButton")
                .style.display = "block";

            emojiRain(60);
        }

    }, 8500);
}


/* Show letter */
function showLetter() {

    clearTimeout(memoryTimer);

    document
        .getElementById("memories")
        .classList.add("hidden");

    document
        .getElementById("letter")
        .classList.remove("hidden");

    emojiRain(50);
}


/* Final screen with PHOTO 20 */
function finishBirthday() {

    document
        .getElementById("letter")
        .classList.add("hidden");

    const final =
        document.getElementById("final");

    const finalCard =
        final.querySelector(".finalCard");


    finalCard.innerHTML = `

        <div class="finalEmoji">
            🥹🤎
        </div>

        <h1>
            One Last Thing... 📸
        </h1>

        <div style="
            margin: 20px auto;
            max-width: 420px;
        ">

            <img
                src="assets/photo20.jpg"
                alt="Final birthday memory"
                style="
                    width: 100%;
                    max-height: 55vh;
                    object-fit: contain;
                    border-radius: 18px;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.35);
                    border: 8px solid #fff;
                "
            >

        </div>

        <div style="
            font-size: 20px;
            font-weight: 700;
            margin: 18px auto;
            max-width: 500px;
        ">
            mera phone kho diya apne 😭😂 yh kabhi nhi bhulungi ❤️📱
        </div>

        <div class="bigBirthday">
            HAPPY BIRTHDAY! 🎂🎉
        </div>

        <div style="
            font-size: 32px;
            font-weight: 900;
            margin-top: 25px;
        ">
            OKIEE BYEEE 👋😂🤎
        </div>

    `;


    final.classList.remove("hidden");

    emojiRain(100);
}


/* Initial emoji rain */
emojiRain(20);
