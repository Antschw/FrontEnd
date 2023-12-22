let firstNameInput = document.querySelector("#firstName");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let passwordVerificationInput = document.querySelector("#passwordVerification");

let errorNode = document.querySelector("#errorMessage");

function notify(message) {
    let container = document.querySelector("#notification-container");

    let notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;

    container.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

document.querySelector("#registerForm").addEventListener("submit", async (event) => {
    errorNode.setAttribute("hidden", "");

    let firstName = firstNameInput.value;
    let name = nameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let passwordVerification = passwordVerificationInput.value;

    if ((!firstName || !name || !email || !password || !passwordVerification) || 
        (firstName == "" || name == "" || email == "" || password == "" || passwordVerification == "")) {
        errorNode.innerText = "Merci de remplir tous les champs";
        errorNode.removeAttribute("hidden");
        return event.preventDefault();
    }

    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        errorNode.innerText = "Format d'email invalide";
        errorNode.removeAttribute("hidden");
        return event.preventDefault();
    }

    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        errorNode.innerText = "Le mot de passe doit contenir au moins 8 caractères, dont au moins une majuscule, une minuscule, un chiffre et un caractère spécial";
        errorNode.removeAttribute("hidden");
        return event.preventDefault();
    }

    
    if (password !== passwordVerification) {
        errorNode.innerText = "Les mots de passe ne correspondent pas";
        errorNode.removeAttribute("hidden");
        return event.preventDefault();
    }

    notify("Inscription réussie");
    event.preventDefault();
});