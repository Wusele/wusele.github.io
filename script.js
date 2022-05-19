backButton = document.getElementById("backBtn");

window.onload = function() {topFunction()};
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
    }
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
