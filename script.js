backButton = document.getElementById("backBtn");

window.onload = function() {
    topFunction()
    setText('< section >', 'section-1')
};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
        backButton.style.display = "block";
    }else {
        backButton.style.display = "none";
    }
}


function reloadWebsite() {
    location.reload();
}

function openProject(text) {
    switch(text) {
        case "firebase":
            window.open("https://github.com/Wusele/FirebaseAPI-1.16.4");
            break
        case "discordBotX":
            window.open("https://github.com/Wusele/Discord-Bot-X/tree/main");
            break
    }
}

function imageUnBlur(title, description) {
    
}

function getDimensions(id) {
    console.log("Width: " + document.getElementById(id).clientWidth + " : Height: " + document.getElementById(id).clientHeight)
}

function setText(text, id) {
    var el = document.getElementById(id);
    el.innerHTML = text;
    
    console.log('Text of ' + id + ' changed to ' + text);
}

function printScroll() {
    console.log(document.documentElement.scrollTop);
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function showPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    
    
  }



function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text);
    console.log('Copied text to clipboard: ' + text)
}
