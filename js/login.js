// Sélection des éléments du formulaire de connexion
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");

// Sélection du noeud d'erreur pour afficher les messages d'erreur
let errorNode = document.querySelector("#errorMessage");

// Ajout d'un écouteur d'événements sur le formulaire de connexion
document.querySelector("#loginForm").addEventListener("submit", async (event) => {
    // Masquer le message d'erreur
    errorNode.setAttribute("hidden", "");

    // Récupération de la valeur de l'email et du mot de passe
    let email = emailInput.value;
    let password = passwordInput.value;

    // Vérification si l'email et le mot de passe sont renseignés
    if ((!email || !password) || (email === "" || password === "")) {
        // Affichage du message d'erreur
        errorNode.innerText = "Merci de préciser l'email et le mot de passe";
        errorNode.removeAttribute("hidden");
        return event.preventDefault();
    }

    // Notification de connexion réussie
    notify("Connecté avec succès");
    setTimeout(() => {
        document.location.href = "profile.html";
    }, 1000);
    event.preventDefault();
})