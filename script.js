document.querySelectorAll(".dropdown").forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.classList.toggle("show");
    });
});