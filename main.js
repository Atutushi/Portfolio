window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    
    // Espera 5 segundos antes de iniciar la animación de desvanecimiento
    setTimeout(function() {
        loader.classList.add('hidden'); // Agrega la clase para ocultar el loader
    }, 3000); // 5000 milisegundos = 5 segundos
});

//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada

function seleccionar(link) {

    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
    }

}


document.addEventListener("DOMContentLoaded", function() {
  const servicios = document.querySelectorAll('.servicio');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Deja de observar después de que el servicio sea visible
      }
    });
  }, {
    threshold: 0.1 // Activa la animación cuando el 10% del servicio es visible
  });

  servicios.forEach(servicio => {
    observer.observe(servicio);
  });
});
