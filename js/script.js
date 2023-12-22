let burgerMenu = document.querySelector("#burger-menu");
let nav = document.querySelector("nav");

burgerMenu.addEventListener("click", () => {
    console.log("aze");
    if (burgerMenu.classList.contains("open"))
    {
        burgerMenu.classList.remove("open");
        nav.classList.remove("open")
    } else
    {
        burgerMenu.classList.add("open");
        nav.classList.add("open")
    }
});