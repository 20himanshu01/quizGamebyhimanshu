/*
const leftBoxes = document.getElementsByClassName("left-boxes")[0];
const rightBoxes = document.getElementsByClassName("right-boxes")[0];
const menRight = document.getElementsByClassName("menr")[0];
const tigerRight = document.getElementsByClassName("tigerr")[0];
const grassRight = document.getElementsByClassName("grassr")[0];
const goatRight = document.getElementsByClassName("goatr")[0];
const boatRight = document.getElementsByClassName("boatr")[0];
const menLeft = document.getElementsByClassName("menl")[0];
const tigerLeft = document.getElementsByClassName("tigerl")[0];
const grassLeft = document.getElementsByClassName("grassl")[0];
const goatLeft = document.getElementsByClassName("goatl")[0];
const boatLeft = document.getElementsByClassName("boatl")[0];
const winMode = document.getElementsByClassName("winMessage1")[0];
const lossMode = document.getElementsByClassName("resultinterface")[0];
const firstPage = document.getElementsByClassName("maininterface121")[0];
const button = document.getElementsByClassName("button1")[0];
const loose = document.getElementsByClassName("looseinterface")[0];
const gamecomt = document.getElementsByClassName("container")[0]
const button2nd = document.getElementsByClassName("button2")[0];
const leftBox = document.getElementsByClassName("left-box")[0]
const rightBox = document.getElementsByClassName("right-box")[0];
console.log(winMode)

// Defining losing combinations

// Function to toggle game elements
const toggle = () => {
    // Event handler for button click
    button.onclick = () => {
        // Hide initial interface elements
        firstPage.classList.add("hide");
        menRight.classList.add("hide1");
        tigerRight.classList.add("hide1");
        grassRight.classList.add("hide1");
        goatRight.classList.add("hide1");
        boatRight.classList.add("hide1");



    };

    // Event handlers for moving objects to the right
    tigerLeft.onclick = () => {
        tigerLeft.classList.add("hide1");
        menLeft.classList.add("hide1");
        boatLeft.classList.add("hide1");
        boatRight.classList.remove("hide1");
        menRight.classList.remove("hide1");
        tigerRight.classList.remove("hide1");
        checkWinLose();



    };

    goatLeft.onclick = () => {
        goatLeft.classList.add("hide1");
        menLeft.classList.add("hide1");
        boatLeft.classList.add("hide1");
        boatRight.classList.remove("hide1");
        menRight.classList.remove("hide1");
        goatRight.classList.remove("hide1");
        checkWinLose();
    };

    grassLeft.onclick = () => {
        grassLeft.classList.add("hide1");
        menLeft.classList.add("hide1");
        boatLeft.classList.add("hide1");
        boatRight.classList.remove("hide1");
        menRight.classList.remove("hide1");
        grassRight.classList.remove("hide1");
        checkWinLose();

    };

    menLeft.onclick = () => {
        menLeft.classList.add("hide1");
        boatLeft.classList.add("hide1");
        boatRight.classList.remove("hide1");
        menRight.classList.remove("hide1");
        loose.classList.remove("hide")
        gamecomt.classList.add("hide")
        checkWinLose();


    };

    // Event handlers for moving objects to the left
    tigerRight.onclick = () => {
        tigerRight.classList.add("hide1");
        boatLeft.classList.remove("hide1");
        menLeft.classList.remove("hide1");
        menRight.classList.add("hide1");
        boatRight.classList.add("hide1");
        tigerLeft.classList.remove("hide1");
        checkWinLose();
    };

    goatRight.onclick = () => {
        goatRight.classList.add("hide1");
        boatLeft.classList.remove("hide1");
        menLeft.classList.remove("hide1");
        menRight.classList.add("hide1");
        boatRight.classList.add("hide1");
        goatLeft.classList.remove("hide1");
        checkWinLose();
    };

    grassRight.onclick = () => {
        grassRight.classList.add("hide1");
        boatLeft.classList.remove("hide1");
        menLeft.classList.remove("hide1");
        menRight.classList.add("hide1");
        boatRight.classList.add("hide1");
        grassLeft.classList.remove("hide1");
        checkWinLose();
    };

    menRight.onclick = () => {
        boatLeft.classList.remove("hide1");
        menLeft.classList.remove("hide1");
        menRight.classList.add("hide1");
        boatRight.classList.add("hide1");
        checkWinLose();
    };
    button2nd.onclick = () => {
        loose.classList.add("hide")
        firstPage.classList.remove("hide")
        checkWinLose();
    }
};


// Function to check win or lose conditions
const checkWinLose = () => {
    const grassGoatOnLeft = grassLeft.classList.contains("hide1") && goatLeft.classList.contains("hide1");
    const tigerGoatOnLeft = tigerLeft.classList.contains("hide1") && goatLeft.classList.contains("hide1");
    const grassGoatOnRight = grassRight.classList.contains("hide1") && goatRight.classList.contains("hide1");
    const tigerGoatOnRight = tigerRight.classList.contains("hide1") && goatRight.classList.contains("hide1");
    const allOnRight = grassLeft.classList.contains("hide1") && tigerLeft.classList.contains("hide1") && goatLeft.classList.contains("hide1");

    // Lose conditions
    if ((grassGoatOnLeft && !menLeft.classList.contains("hide1")) || (tigerGoatOnLeft && !menLeft.classList.contains("hide1"))) {
        // Trigger game over
        loose.classList.remove("hide");
        gamecomt.classList.add("hide");
        return;
    }

    if ((grassGoatOnRight && !menRight.classList.contains("hide1")) || (tigerGoatOnRight && !menRight.classList.contains("hide1"))) {
        // Trigger game over
        loose.classList.remove("hide");
        gamecomt.classList.add("hide");
        return;
    }

    // Win condition
    if (allOnRight) {
        // Trigger win
        winMode.classList.remove("hide");
        gamecomt.classList.add("hide");
        return;
    }

};




toggle();*/

const leftBoxes = document.getElementsByClassName("left-boxes")[0];
const rightBoxes = document.getElementsByClassName("right-boxes")[0];
const menRight = document.getElementsByClassName("menr")[0];
const tigerRight = document.getElementsByClassName("tigerr")[0];
const grassRight = document.getElementsByClassName("grassr")[0];
const goatRight = document.getElementsByClassName("goatr")[0];
const boatRight = document.getElementsByClassName("boatr")[0];
const menLeft = document.getElementsByClassName("menl")[0];
const tigerLeft = document.getElementsByClassName("tigerl")[0];
const grassLeft = document.getElementsByClassName("grassl")[0];
const goatLeft = document.getElementsByClassName("goatl")[0];
const boatLeft = document.getElementsByClassName("boatl")[0];
const winMode = document.getElementsByClassName("winMessage1")[0];
const lossMode = document.getElementsByClassName("resultinterface")[0];
const firstPage = document.getElementsByClassName("maininterface121")[0];
const button = document.getElementsByClassName("button1")[0];
const loose = document.getElementsByClassName("looseinterface")[0];
const gamecomt = document.getElementsByClassName("container")[0]
const button2nd = document.getElementsByClassName("button2")[0];
const leftBox = document.getElementsByClassName("left-box")[0]
const rightBox = document.getElementsByClassName("right-box")[0];
const timeover=document.getElementsByClassName("loose1interface")[0];
const buttontime=document.getElementsByClassName("button4")[0];
console.log(winMode)

let gameTimer; // Variable to hold the timer reference

// Function to start the game timer
const startGameTimer = () => {
    gameTimer = setTimeout(() => {
        // Show the lose message and hide game elements
        timeover.classList.remove("hide");
        gamecomt.classList.add("hide");
    }, 15000); // 20 seconds timer
};

// Function to reset the game timer
const resetGameTimer = () => {
    clearTimeout(gameTimer); // Clear the previous timer
    startGameTimer(); // Start a new timer
};

// Function to toggle game elements
const toggle = () => {
    button.onclick = () => {
        // Hide initial interface elements
        firstPage.classList.add("hide");
        menRight.classList.add("hide1");
        tigerRight.classList.add("hide1");
        grassRight.classList.add("hide1");
        goatRight.classList.add("hide1");
        boatRight.classList.add("hide1");
        gamecomt.classList.remove("hide")

        startGameTimer(); // Start the game timer when button is clicked
    };

    tigerLeft.onclick = () => {
        tigerLeft.classList.add("hide1");
        menLeft.classList.add("hide1");
        boatLeft.classList.add("hide1");
        boatRight.classList.remove("hide1");
        menRight.classList.remove("hide1");
        tigerRight.classList.remove("hide1");
        checkWinLose();
        resetGameTimer(); // Reset the game timer
    };

    goatLeft.onclick = () => {
        goatLeft.classList.add("hide1");
        menLeft.classList.add("hide1");
        boatLeft.classList.add("hide1");
        boatRight.classList.remove("hide1");
        menRight.classList.remove("hide1");
        goatRight.classList.remove("hide1");
        checkWinLose();
        resetGameTimer(); // Reset the game timer
    };

    grassLeft.onclick = () => {
        grassLeft.classList.add("hide1");
        menLeft.classList.add("hide1");
        boatLeft.classList.add("hide1");
        boatRight.classList.remove("hide1");
        menRight.classList.remove("hide1");
        grassRight.classList.remove("hide1");
        checkWinLose();
        resetGameTimer(); // Reset the game timer
    };

    menLeft.onclick = () => {
        menLeft.classList.add("hide1");
        boatLeft.classList.add("hide1");
        boatRight.classList.remove("hide1");
        menRight.classList.remove("hide1");
        loose.classList.remove("hide")
        gamecomt.classList.add("hide")
        checkWinLose();
        resetGameTimer(); // Reset the game timer
    };

    tigerRight.onclick = () => {
        tigerRight.classList.add("hide1");
        boatLeft.classList.remove("hide1");
        menLeft.classList.remove("hide1");
        menRight.classList.add("hide1");
        boatRight.classList.add("hide1");
        tigerLeft.classList.remove("hide1");
        checkWinLose();
        resetGameTimer(); // Reset the game timer
    };

    goatRight.onclick = () => {
        goatRight.classList.add("hide1");
        boatLeft.classList.remove("hide1");
        menLeft.classList.remove("hide1");
        menRight.classList.add("hide1");
        boatRight.classList.add("hide1");
        goatLeft.classList.remove("hide1");
        checkWinLose();
        resetGameTimer(); // Reset the game timer
    };

    grassRight.onclick = () => {
        grassRight.classList.add("hide1");
        boatLeft.classList.remove("hide1");
        menLeft.classList.remove("hide1");
        menRight.classList.add("hide1");
        boatRight.classList.add("hide1");
        grassLeft.classList.remove("hide1");
        checkWinLose();
        resetGameTimer(); // Reset the game timer
    };

    menRight.onclick = () => {
        boatLeft.classList.remove("hide1");
        menLeft.classList.remove("hide1");
        menRight.classList.add("hide1");
        boatRight.classList.add("hide1");
        checkWinLose();
        resetGameTimer(); // Reset the game timer
    };
    button2nd.onclick = () => {
        resetGame(); // Reset the game state
    }
    buttontime.onclick = () => {
        resetGame(); // Reset the game state
    }
};

// Function to reset the game state
const resetGame = () => {
    // Hide all game elements except the first page
    menRight.classList.add("hide1");
    tigerRight.classList.add("hide1");
    grassRight.classList.add("hide1");
    goatRight.classList.add("hide1");
    boatRight.classList.add("hide1");
    timeover.classList.add("hide");
    loose.classList.add("hide");
    winMode.classList.add("hide");
    gamecomt.classList.add("hide");
    
    // Show initial interface elements
    firstPage.classList.remove("hide");
    
    // Reset character positions
    menLeft.classList.remove("hide1");
    tigerLeft.classList.remove("hide1");
    grassLeft.classList.remove("hide1");
    goatLeft.classList.remove("hide1");
    boatLeft.classList.remove("hide1");

    // Reset game timer
    resetGameTimer();
};

// Function to check win or lose conditions
const checkWinLose = () => {
    const grassGoatOnLeft = grassLeft.classList.contains("hide1") && goatLeft.classList.contains("hide1");
    const tigerGoatOnLeft = tigerLeft.classList.contains("hide1") && goatLeft.classList.contains("hide1");
    const grassGoatOnRight = grassRight.classList.contains("hide1") && goatRight.classList.contains("hide1");
    const tigerGoatOnRight = tigerRight.classList.contains("hide1") && goatRight.classList.contains("hide1");
    const allOnRight = grassLeft.classList.contains("hide1") && tigerLeft.classList.contains("hide1") && goatLeft.classList.contains("hide1");

    // Lose conditions
    if ((grassGoatOnLeft && !menLeft.classList.contains("hide1")) || (tigerGoatOnLeft && !menLeft.classList.contains("hide1"))) {
        // Trigger game over
        loose.classList.remove("hide");
        gamecomt.classList.add("hide");
        return;
    }

    if ((grassGoatOnRight && !menRight.classList.contains("hide1")) || (tigerGoatOnRight && !menRight.classList.contains("hide1"))) {
        // Trigger game over
        loose.classList.remove("hide");
        gamecomt.classList.add("hide");
        return;
    }

    // Win condition
    if (allOnRight) {
        // Trigger win
        winMode.classList.remove("hide");
        gamecomt.classList.add("hide");
        return;
    }
};

toggle();
