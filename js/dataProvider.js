import data from '/data/article1.json' assert { type: 'json' };

if (document.title === "Les Sportifs - Accueil") {
    console.log("You are on page Accueil");
    fillBoxes();
} else {
    console.log("You are on page Article")
    fillArticle();
}

function fillBoxes(){
    const boxLayout = document.querySelector(".box-layout");
    const boxes = boxLayout.querySelectorAll('.box');
    let countBox = 1;

    boxes.forEach(box => {
        let path = `/data/article${countBox}.json`;

        // On utilise fetch pour charger le fichier JSON
        fetch(path)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Réseau ou réponse non OK');
                }
                return response.json(); // On convertit la réponse en JSON
            })
            .then(data => {
                box.children[1].innerText = data.title;
                box.children[2].innerText = data.date;
                box.children[3].innerText = data.subtitle;
                box.children[4].innerText = data.author;
            })
            .catch(error => {
                console.error('Erreur lors du chargement du fichier JSON:', error);
            });

        countBox += 1;
    });
}

function fillArticle(){

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
}


