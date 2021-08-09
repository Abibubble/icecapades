const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
let canvasWidth;
let canvasHeight;
let newSpriteWidth;
let newSpriteHeight;

const rotateMessage = document.getElementById("rotate-message");
const messageContent = `<!-- Icon made by "Pixel perfect" "https://www.flaticon.com/authors/pixel-perfect" 
                        from "https://www.flaticon.com/" -->
                        <div id="message-content">
                            <p>
                                Please rotate your device or resize the window to landscape
                            </p>
                            <img src="static/rotate/rotate.png" alt="Please Rotate Device">
                        </div>`;
const progressCont = document.getElementsByClassName("progress-container")[0];

window.addEventListener("resize", handleChange);

// Sets canvas to fill space between header and footer
function handleChange() {
    let headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
    let footerHeight = document.getElementsByTagName("footer")[0].offsetHeight;
    canvasWidth = canvas.width = window.innerWidth;
    canvasHeight = canvas.height = window.innerHeight - (headerHeight + footerHeight);
    
    if (canvasHeight > canvasWidth) {
        // portrait
        canvas.style.visibility = "hidden";
        progressCont.style.visibility = "hidden";
        canvas.style.display = "none";
        progressCont.style.display = "none";
        rotateMessage.innerHTML = messageContent;
    } else {
        // landscape
        canvas.style.visibility = "visible";
        canvas.style.display = "initial";
        progressCont.style.visibility = "visible";
        progressCont.style.display = "initial";
        rotateMessage.innerHTML = ""; 
    }
}

handleChange();