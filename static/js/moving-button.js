// -------------------------------------------------------------------- Moving button

// Moves quit butotn on game over modal and updates the text
function movingQuitButton() {
    let quitBad = document.getElementById("quit-bad");
    
    if (quitBad.style.bottom == "2px") {
        quitBad.style.bottom = "200px";
        quitBad.style.right = "500px";
        quitBad.innerText = "You didn't think we'd let you desert him that easily, did you?";
    } else if (quitBad.style.bottom == "200px") {
        quitBad.style.bottom = "400px";
        quitBad.style.right = "200px";
        quitBad.innerText = "Have you no heart?";
    } else if (quitBad.style.bottom == "400px") {
        quitBad.style.bottom = "250px";
        quitBad.style.right = "20px";
        quitBad.innerText = "You really should help him get home";
    } else if (quitBad.style.bottom == "250px") {
        quitBad.style.bottom = "2px";
        quitBad.style.right = "2px";
        quitBad.innerText = "I'm a monster, leave Tux to fend for himself";
    }
}