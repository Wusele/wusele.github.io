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

function linksFunction() {
    document.body.scrollTop = 2720;
    document.documentElement.scrollTop = 2720;
}

function aboutFunction() {
    document.body.scrollTop = 890;
    document.documentElement.scrollTop = 890;
}

function contactFunction() {
    document.body.scrollTop = 2820;
    document.documentElement.scrollTop = 2820;
}

function portfolioFunction() {
    document.body.scrollTop = 1840;
    document.documentElement.scrollTop = 1840;
}



function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text);
    console.log('Copied text to clipboard: ' + text)
}
