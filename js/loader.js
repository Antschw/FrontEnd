window.onload = function () {
    const loader = document.querySelector(".preload");
    const body = document.querySelector("body")
    body.style.overflow="hidden";

    setTimeout(() => {
        body.style.overflow="visible";
        loader.style.display = "none";
    }, 1000);
};