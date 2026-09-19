/* =========================
   OPEN SURPRISE
========================= */

function openSurprise() {

    let welcome =
        document.getElementById("welcomeScreen");

    let loading =
        document.getElementById("loadingScreen");

    let result =
        document.getElementById("resultScreen");


    // Hide welcome

    welcome.classList.add("hidden");


    // Show loading

    loading.classList.remove("hidden");


    // Wait 3 seconds

    setTimeout(function() {

        // Hide loading

        loading.classList.add("hidden");


        // Show result

        result.classList.remove("hidden");


        // Start confetti

        createConfetti();

    }, 3000);

}



/* =========================
   SHOW LOVE MESSAGE
========================= */

function showMessage() {

    let result =
        document.getElementById("resultScreen");

    let message =
        document.getElementById("messageScreen");


    // Hide result

    result.classList.add("hidden");


    // Show message

    message.classList.remove("hidden");

}



/* =========================
   SHOW PHOTO
========================= */

function showPhoto() {

    let message =
        document.getElementById("messageScreen");

    let photo =
        document.getElementById("photoScreen");


    // Hide message

    message.classList.add("hidden");


    // Show photo

    photo.classList.remove("hidden");

}



/* =========================
   SHOW FINAL MESSAGE
========================= */

function showFinalMessage() {

    let photo =
        document.getElementById("photoScreen");

    let final =
        document.getElementById("finalScreen");


    // Hide photo

    photo.classList.add("hidden");


    // Show final message

    final.classList.remove("hidden");


    // More confetti

    createConfetti();

}



/* =========================
   CREATE CONFETTI
========================= */

function createConfetti() {

    for (let i = 0; i < 100; i++) {

        // Create a new div

        let confetti =
            document.createElement("div");


        // Give it the confetti class

        confetti.classList.add("confetti");


        // Random horizontal position

        confetti.style.left =
            Math.random() * 100 + "vw";


        // Random color

        confetti.style.backgroundColor =
            getRandomColor();


        // Random starting delay

        confetti.style.animationDelay =
            Math.random() * 2 + "s";


        // Add confetti to the webpage

        document.body.appendChild(confetti);


        // Remove it after animation

        setTimeout(function() {

            confetti.remove();

        }, 6000);

    }

}



/* =========================
   RANDOM CONFETTI COLOR
========================= */

function getRandomColor() {

    let colors = [

        "#ff4f81",

        "#c2185b",

        "#ffd166",

        "#ff9ec4",

        "#ffffff"

    ];


    let randomIndex =
        Math.floor(
            Math.random() * colors.length
        );


    return colors[randomIndex];

}