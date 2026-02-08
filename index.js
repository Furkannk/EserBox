function cevapGoster(button) {
    const cevap = button.parentElement.nextElementSibling;

    if (cevap.style.display === "none" || cevap.style.display === "") {
        cevap.style.display = "block";
        button.textContent = "Cevabı Gizle";
    } else {
        cevap.style.display = "none";
        button.textContent = "Cevabı Göster";
    }
}
