import data from '/data/article1.json' assert { type: 'json' };

const title = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle");
const content = document.querySelector("#content");
const final = document.querySelector("#final");


document.addEventListener('DOMContentLoaded', () => {
    title.innerText = data.title;
    subtitle.innerText = data.subtitle;
    content.innerText = data.texte;
    final.innerText = data.author + " - " + data.date;
});