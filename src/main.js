const callToAction = document.getElementById('callToAction').addEventListener('click', ()=>
{
    setTimeout(()=>{
        const mensajeDeInformación = '¡Saludos! Soy [Tu Nombre], y estoy emocionado/a de compartir contigo mi idea de negocio.'
        window.open('https://wa.me/' + 573043171488  + "?text=" + encodeURIComponent(mensajeDeInformación));
    },500);
})

const campbellAction = document.getElementById('campbell-com').addEventListener('click', ()=>
{
    window.open('https://campbellgr.com')
})
const lulopyAction = document.getElementById('lulopy-com').addEventListener('click',()=>
{
    window.open('https://lulopy.com')
})
const uwebAction = document.getElementById('continental-com').addEventListener('click', ()=>
{
    window.open('https://continentaldetrasteos.com/')
})
const batatabeat = document.getElementById('batatabeat-com').addEventListener('click', ()=>
{
    window.open('https://batatabeat.netlify.app/')
})
const shop = document.getElementById('shop-com').addEventListener('click', ()=>
{
    window.open('https://delomejor.shop/')
})

document.addEventListener("DOMContentLoaded", function() {
    const scrollRightButton = document.getElementById("scrollRightButton");
    const scrollLeftButton = document.getElementById("scrollLeftButton");
    const picturesContainer = document.querySelector(".section-four--pictures");

    scrollRightButton.addEventListener("click", function() {
        picturesContainer.scrollBy({
            left: 350, // Ajusta la cantidad de desplazamiento según tu preferencia
            behavior: "smooth" // Esto hará que el desplazamiento sea suave
        });
    });

    scrollLeftButton.addEventListener("click", function() {
        picturesContainer.scrollBy({
            left: -350, // Ajusta la cantidad de desplazamiento según tu preferencia
            behavior: "smooth" // Esto hará que el desplazamiento sea suave
        });
    });
});