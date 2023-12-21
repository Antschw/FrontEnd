let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");

let errorNode = document.querySelector("#errorMessage");

document.querySelector("#loginForm").addEventListener("submit", async (event) => {
    errorNode.setAttribute("hidden", "");

    let email = emailInput.value;
    let password = passwordInput.value;

    // alert((!email || !password) || (email == "" || password == ""));

    if ((!email || !password) || (email == "" || password == "")) {
        errorNode.innerText = "Merci de préciser l'email et le mot de passe";
        errorNode.removeAttribute("hidden");
        return event.preventDefault();
    }

    alert("Enjoy");
    event.preventDefault();
})