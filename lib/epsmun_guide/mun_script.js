function darkmode() {
    const body = document.body;
    const header = body.querySelector(".header");
    const container = body.querySelector(".container");

    body.classList.toggle("dark-background");
    header.classList.toggle("dark-mode");
    container.classList.toggle("dark-mode");
}