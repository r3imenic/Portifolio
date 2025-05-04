function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
  }
  function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
  }
  // Typewriter Effect
  const texts = [
    "DESENVOLVEDOR",
    "PROGRAMADOR",
    "DESENVOLVEDOR WEB"
  ]
  let speed  =100;
  const textElements = document.querySelector(".typewriter-text");
  let textIndex = 0;
  let charcterIndex = 0;
  function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
  }
  function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
  }
  window.onload = typeWriter
  
  function ligthDarkMode() {
    const darkModeIcon = document.querySelector(".dark-mode i");
    const elements = document.querySelectorAll("body, .nav-container .links a, .content");
  
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
    const elements = document.querySelectorAll("body, .nav-container .links a, .content");
  
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

  let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrollando para baixo -> Esconde o header
    header.style.top = "-100px";
  } else {
    // Scrollando para cima -> Mostra o header
    header.style.top = "0";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
});
