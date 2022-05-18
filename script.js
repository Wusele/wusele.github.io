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

function printScroll() {
    console.log(document.documentElement.scrollTop);
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function linksFunction() {
    document.body.scrollTop = 1862;
    document.documentElement.scrollTop = 1862;
}

function aboutFunction() {
    document.body.scrollTop = 941;
    document.documentElement.scrollTop = 941;
}

function contactFunction() {
    document.body.scrollTop = 1890;
    document.documentElement.scrollTop = 1890;
}



function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text);
    console.log('Copied text to clipboard: ' + text)
}
