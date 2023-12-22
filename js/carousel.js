const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const container = document.querySelector("#container");
const autoSwitchRate = 10000;

let currentIndex = 0;
let autoSwitchInterval;
let progressBars;

previous.addEventListener("click",previousClick,false);
next.addEventListener("click",nextClick,false);

initVisibility();
initProgressBars();
startAutoSwitch();

function initProgressBars() {
    progressBars = document.querySelectorAll(".progress-bar");
    progressBars[0].style.width = "2%"
}

function initVisibility() {
    for (let i = 0 ; i < container.children.length ; i++) {
        if (i === 0) {
            container.children[i].style.display = "block";
            container.children[i].classList.add("hidding");
        } else {
            container.children[i].style.display = "none";
            container.children[i].classList.add("hidding");
        }
    }
}

function previousClick() {
    container.children[currentIndex].style.display = "none";
    progressBars[currentIndex].style.width = "1%";
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = container.children.length - 1;
    }
    container.children[currentIndex].style.display = "block";
    progressBars[currentIndex].style.width = "2%";
    resetAutoSwitch();
}

function nextClick() {
    container.children[currentIndex].style.display = "none";
    progressBars[currentIndex].style.width = "1%";
    if (currentIndex < container.children.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    container.children[currentIndex].style.display = "block";
    progressBars[currentIndex].style.width = "2%";
    resetAutoSwitch();
}

function startAutoSwitch() {
    autoSwitchInterval = setInterval(() => {
        nextClick();
    }, autoSwitchRate);
}

function resetAutoSwitch() {
    clearInterval(autoSwitchInterval);
    startAutoSwitch();
}

