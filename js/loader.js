window.onload = function () {
    const loader = document.querySelector(".preload");
    const body = document.querySelector("body")

    body.style.overflow="hidden";   // on empêche le scroll

    /*
     * Au bout de 1000ms on réactive le scroll
     * et on cache le loader/spinner.
     */
    setTimeout(() => {
        body.style.overflow="visible";
        loader.style.display = "none";
    }, 1000);
};