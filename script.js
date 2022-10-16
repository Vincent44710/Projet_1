const burger = document.querySelector('.burger');

burger.addEventListener('click',() =>{
    burger.classList.toggle('active')
    // Quand ont va click sur la div .burger ca va l'activer et au reclick , la retirer, c'est le principe du toggle.
});