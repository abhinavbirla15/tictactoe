let start = document.querySelector(".start");
let choice = document.querySelectorAll(".choice");
let quit=document.querySelector(".quit");
let p_point=0,c_point=0;

const comp_choice = () => {
    const option = ['stone', 'paper', 'scissor']
    return option[Math.floor(Math.random() * option.length)];
}
choice.forEach((choose) => {
    choose.addEventListener('click', () => {
        let c_choice = comp_choice();
        let p_choice = choose.id;
        if (c_choice === 'stone') {
            if (p_choice === 'stone') {
                document.querySelector(".message").innerText="its draw";
            }
            else if (p_choice === 'paper') {
                document.querySelector(".message").innerText = "You win";
                document.getElementById("computer").innerText=`${c_point+=1}`;
            }
            else {
                document.querySelector(".message").innerText = "You lose";
                document.getElementById("player").innerText=`${p_point+=1}`;
            }
        }
        else if (c_choice === 'paper') {
            if (p_choice === 'stone') {
                document.querySelector(".message").innerText = "You lose";
                document.getElementById("computer").innerText=`${c_point+=1}`;
            }
            else if (p_choice === 'paper') {
                document.querySelector(".message").innerText = "It's a draw";
            }
            else {
                document.querySelector(".message").innerText = "You win";
                document.getElementById("player").innerText=`${p_point+=1}`;
            }
        }
        else if (c_choice === 'scissor') {
            if (p_choice === 'stone') {
                document.querySelector(".message").innerText = "You win";
                document.getElementById("player").innerText=`${p_point+=1}`;
            }
            else if (p_choice === 'paper') {
                document.querySelector(".message").innerText = "You lose";
                document.getElementById("computer").innerText=`${c_point+=1}`;
            }
            else {
                document.querySelector(".message").innerText = "It's a draw";
            }
        }
    })
});
start.addEventListener("click",()=>{
    document.querySelector(".game-contain").style.visibility="visible";
});
quit.addEventListener("click", () => {
    // Reset player and computer points
    p_point = 0;
    c_point = 0;

    // Hide the game container
    document.querySelector(".game-contain").style.visibility = "hidden";

    // Reset the message display
    document.querySelector(".message").innerText = "Let's Play";

    // Reset the score displays for player and computer
    document.getElementById("player").innerText = `{p_point}`;
    document.getElementById("computer").innerText = `{c_point}`;

    // Reset the computer's choice display if applicable
    const computerChoiceElement = document.querySelector(".computer-choice");
    if (computerChoiceElement) {
        computerChoiceElement.innerText = ""; // Clear the computer's choice
    }
});

