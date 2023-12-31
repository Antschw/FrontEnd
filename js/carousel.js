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
    progressBars[0].style.width = "2%"  // intilalisation de la première progresse bar du première élément
}

/*
 * On parcours tous les childrens de container pour :
 *  - cacher l'enfant,
 *  - lui ajouter la class "hidding" (pour l'animation).
 * Si l'enfant est l'ainé alors on le laisse affiché
 */
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

/*
 * On masque l'enfant currentIndex
 * On remet à 1% la taille de notre progresseBar correspondant à notre currentIndex
 * Si nous ne somme pas déjà sur notre index 0 on descend d'un index
 * Sinon on remonte à notre index le plus élevé
 * On affiche notre nouveau currentIndex
 * On ajuste la progressBar correspondante
 * On reset notre autoSwitch histoire que l'image reste affiché un peu
 */
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

