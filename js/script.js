// Déclaration des variables pour le menu burger et la navigation
let burgerMenu = document.querySelector("#burger-menu");
let nav = document.querySelector("nav");

// Ajout d'un écouteur d'événements sur le menu burger
burgerMenu.addEventListener("click", () => {
    // Vérification si le menu burger est ouvert
    if (burgerMenu.classList.contains("open"))
    {
        // Si ouvert, on ferme le menu burger et la navigation
        burgerMenu.classList.remove("open");
        nav.classList.remove("open")
    } else
    {
        // Si fermé, on ouvre le menu burger et la navigation
        burgerMenu.classList.add("open");
        nav.classList.add("open")
    }
});

// Fonction pour afficher une notification
function notify(message) {
    // Sélection du conteneur de notification
    let container = document.querySelector("#notification-container");

    // Création d'une nouvelle notification
    let notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;

    // Ajout de la notification au conteneur
    container.appendChild(notification);

    // Suppression de la notification après 3 secondes
    setTimeout(() => {
        notification.remove();
    }, 3000);
}