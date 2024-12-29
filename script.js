function ligthDarkMode() {
    const darkModeIcon = document.querySelector(".dark-mode i");
    const elements = document.querySelectorAll("body, section, nav a");

    // Alterna entre ícones de lua e sol
    darkModeIcon.classList.toggle("fa-sun");
    darkModeIcon.classList.toggle("fa-moon");

    // Define a cor do ícone de acordo com o tema
    darkModeIcon.style.color = darkModeIcon.classList.contains("fa-moon") ? "white" : "black";

    // Alterna a classe "dark-mode-class" em elementos relevantes
    elements.forEach(element => {
        element.classList.toggle("dark-mode-class");
    });

    // Salva a preferência do tema no LocalStorage
    const isDarkMode = darkModeIcon.classList.contains("fa-sun");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

// Aplica o tema salvo ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const darkModeIcon = document.querySelector(".dark-mode i");
    const elements = document.querySelectorAll("body, section, nav a");

    if (savedTheme === "dark") {
        darkModeIcon.classList.add("fa-sun");
        darkModeIcon.classList.remove("fa-moon");
        darkModeIcon.style.color = "black";

        elements.forEach(element => {
            element.classList.add("dark-mode-class");
        });
    } else {
        darkModeIcon.classList.add("fa-moon");
        darkModeIcon.classList.remove("fa-sun");
        darkModeIcon.style.color = "white";
    }
});
