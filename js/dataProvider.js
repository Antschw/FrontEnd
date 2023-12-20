import data from '/data/article1.json' assert { type: 'json' };

const tabtitle = document.querySelector("#tabtitle");
const title = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle");
const introduction = document.querySelector("#introduction");
const firstPart = document.querySelector("#firstPart");
const secondPart = document.querySelector("#secondPart");
const conclusion = document.querySelector("#conclusion");
const final = document.querySelector("#final");


document.addEventListener('DOMContentLoaded', () => {
    tabtitle.innerText += data.title;
    title.innerText = data.title;
    subtitle.innerText = data.subtitle;
    introduction.innerText = data.introduction;
    firstPart.innerText = data.firstPart;
    secondPart.innerText = data.secondPart;
    conclusion.innerText = data.conclusion;
    final.innerText = data.author + " - " + data.work + " - " + data.date;
});