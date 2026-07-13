document.addEventListener("DOMContentLoaded", () => {
    const odkazy = document.querySelectorAll("nav a");
    const sekce = document.querySelectorAll("section");

    odkazy.forEach(odkaz => {
        odkaz.addEventListener("click", (udalost) => {
            udalost.preventDefault(); 
            
            sekce.forEach(s => s.classList.remove("aktivni"));
            
            const cil = odkaz.getAttribute("data-cil");
            document.getElementById(cil).classList.add("aktivni");
        });
    });
});