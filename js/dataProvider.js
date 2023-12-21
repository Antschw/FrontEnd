if (document.title === "Les Sportifs - Accueil") {
    console.log("You are on page Accueil");
    fillBoxes();
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
                    throw new Error('Error when fetching path');
                }
                return response.json(); // On convertit la réponse en JSON
            })
            .then(data => {
                box.children[0].src = data.source;
                box.children[1].innerText = data.title;
                box.children[2].innerText = data.date;
                box.children[3].innerText = data.subtitle;
                box.children[4].innerText = data.author;
            })
            .catch(error => {
                console.error('Error when loading the JSON file:', error);
            });

        countBox += 1;
    });
}


