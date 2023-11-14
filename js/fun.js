const menu = document.querySelector('.main_header')
const options = document.querySelectorAll('.main_header ul li')


let lastKnownScrollPosition = 0;
let ticking = false;
let timeoutId;

function handleScroll() {
  const currentScrollPosition = window.scrollY;


  if (currentScrollPosition < lastKnownScrollPosition) {
    // Scrolling up
    menu.style.position = 'fixed';
    menu.style.top = '0px';
    menu.style.zIndex = '1';
    options.forEach((o) => {
        o.style.backgroundColor = 'rgba(0,0,0,0.3)';
        o.style.borderRadius = '50px';
        o.addEventListener('mouseover', () => {
            o.style.backgroundColor = 'rgba(255, 255, 255)';
            o.style.color = 'black'
          });
    
        o.addEventListener('mouseout', () => {
            o.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
            o.style.color = 'white';
          });

        clearTimeout(timeoutId);

        // Establecer un temporizador para volver a la posición relativa después de 3 segundos
        timeoutId = setTimeout(() => {
            menu.style.position = 'relative';
            menu.style.top = 'auto';
        }, 3000);
        
    })
  } else {
    // Scrolling down
    menu.style.position = 'relative'; // O cualquier otra posición según tus necesidades
    
    menu.style.top = 'auto';
  }

  lastKnownScrollPosition = currentScrollPosition;
  ticking = false;
}

document.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll);
    ticking = true;
  }
});



document.addEventListener("DOMContentLoaded", function() {
    const zoomableImages = document.querySelectorAll('.zoomable');

    window.addEventListener('scroll', function() {
        zoomableImages.forEach(function(image) {
            // Ajusta estos valores según sea necesario
            const scrollPosition = window.scrollY;
            const imagePosition = image.offsetTop;
            const windowHeight = window.innerHeight;
            console.log('scrollPosition' + scrollPosition, 'imagePosition' +imagePosition, 'windowHeight' + windowHeight)
            // Si la imagen está en la vista y se hace scroll hacia abajo
            if (scrollPosition > imagePosition - windowHeight / 2) {
                // Aplica un efecto de zoom
                const scale = 1 + (scrollPosition - imagePosition) / 1000;
                console.log('scale' + scale)
                image.style.transform = `scale(${scale})`;
            } else {
                // Restaura el tamaño original
                image.style.transform = 'scale(1)';
            }
        });
    });
});