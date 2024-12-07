let music = new Audio('./Assets/bgmusic.mp3');
let keyMusic = new Audio('./Assets/keyMusic.mp3')



function shuffleNumbers() {
    //select all boxnum elements
    const boxnums = document.querySelectorAll('.boxnum');
    
    //Extract numbers into an Array
    const numbers = Array.from(boxnums, num=> num.textContent);
    
    //shuffle alogorithm
    const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
    boxnums.forEach((box, index) => {
        box.textContent = shuffledNumbers[index];
    });

    setTimeout(() => {
        music.play();

        const boxnums = document.querySelectorAll('.boxnum');

        const button2 = document.getElementById('btn2'); 
        button2.classList.add('sbtnhide') // so that player will get more than 10second to remember the cards

        boxnums.forEach(box => {
            box.classList.add('hidden'); // Add the 'hidden' class
            box.classList.remove('show'); // Remove the 'show' class for consistency

        });

        
    },10000)

    
}






function hideNumbers() {
    music.play();

    // Select all elements with the class 'boxnum'
    const boxnums = document.querySelectorAll('.boxnum');

    //select element of change.no button
    const button2 = document.getElementById('btn2');
    button2.classList.add('sbtnhide')

    // Initially hide all boxnum elements
    boxnums.forEach(box => {
        box.classList.add('hidden'); // Add the 'hidden' class
        box.classList.remove('show'); // Remove the 'show' class for consistency

    });
}

let boxes = document.getElementsByClassName('box');
const boxnums = document.querySelectorAll('.boxnum');
const resetButton = document.getElementById('btn2');

// This below 2 line is for trophy 
const trophy = document.getElementById('Trophy')
trophy.style.display = 'none';



let currentNumber = 1; // Start from 1 (the first number in the sequence)

Array.from(boxes).forEach((element, index) => {
    element.addEventListener('click', () => {
        const boxnum = boxnums[index];
        const clickedNumber = parseInt(boxnum.textContent); // Get the number in the clicked box

        if (clickedNumber === currentNumber) {
            // Correct number clicked
            boxnum.classList.add('show'); // Show the number
            boxnum.classList.remove('hidden'); // Ensure 'hidden' class is removed
            currentNumber++; // Move to the next number in the sequence

            if (currentNumber > 9) {
                // If all numbers are clicked in sequence
                alert("You win! 🎉");
                resetButton.style.display = "block"; // Show the reset button
                trophy.style.display = "block"; // Show the trophy
                currentNumber = 1; // Reset the sequence for a new game
            }
        } else {
            // Wrong number clicked
            currentNumber = 1; // Reset the sequence
            alert("Wrong number clicked! Start over.");

            // Hide all numbers
            boxnums.forEach(box => {
                box.classList.add('hidden'); // Hide all numbers
                box.classList.remove('show'); // Remove 'show' class for consistency
            });
        }
    });
});

// Add click event to the reset button

// resetButton.addEventListener('click', () => {
//     hideNumbers(); // Call the hideNumbers function
//     resetButton.style.display = "none"; // Hide the reset button
// });
