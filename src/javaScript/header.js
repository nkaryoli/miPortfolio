const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const redes = document.querySelector("#redes")

open.addEventListener("click", () => {
    nav.classList.add("visible");
    // open.classList.add("hidden");
    redes.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
    open.classList.remove("hidden");
})
