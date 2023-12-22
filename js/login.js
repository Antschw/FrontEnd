let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");

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

document.querySelector("#loginForm").addEventListener("submit", async (event) => {
    errorNode.setAttribute("hidden", "");

    let email = emailInput.value;
    let password = passwordInput.value;

    // alert((!email || !password) || (email == "" || password == ""));

    if ((!email || !password) || (email === "" || password === "")) {
        errorNode.innerText = "Merci de préciser l'email et le mot de passe";
        errorNode.removeAttribute("hidden");
        return event.preventDefault();
    }

    notify("Connecté avec succès");
    setTimeout(() => {
        document.location.href = "profile.html";
    }, 1000);
    event.preventDefault();
})