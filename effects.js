/**
 * Efectos adicionales para mejorar la experiencia visual
 */

// Función para crear un efecto de brillo al mover el cursor
function addShimmerEffect() {
  const body = document.querySelector('body');
  const shimmer = document.createElement('div');
  shimmer.classList.add('cursor-shimmer');
  body.appendChild(shimmer);

  body.addEventListener('mousemove', (e) => {
    shimmer.style.left = `${e.clientX}px`;
    shimmer.style.top = `${e.clientY}px`;
    shimmer.style.opacity = '1';
    
    // Desvanecer gradualmente
    setTimeout(() => {
      shimmer.style.opacity = '0';
    }, 100);
  });
}

// Función para añadir un efecto de ondulación en el agua cuando se hace clic
function addWaterRippleEffect() {
  const seaLevel = document.querySelector('.seaLevel');
  
  document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.classList.add('water-ripple');
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    
    seaLevel.appendChild(ripple);
    
    // Eliminar el efecto después de la animación
    setTimeout(() => {
      ripple.remove();
    }, 2000);
  });
}

// Inicializar efectos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  // Generar burbujas aleatorias
  generateBubbles();
  
  // Añadir efectos interactivos si no es dispositivo móvil
  if (window.innerWidth > 768) {
    addShimmerEffect();
    addWaterRippleEffect();
  }
});

// Función para generar burbujas de forma dinámica
function generateBubbles() {
  const bubblesContainer = document.querySelector('.bubbles');
  
  // Crear burbujas iniciales
  createBubbleBatch(bubblesContainer, 30);
  
  // Crear nuevas burbujas periódicamente
  setInterval(() => {
    createBubbleBatch(bubblesContainer, 5);
  }, 5000);
}

// Crear un lote de burbujas
function createBubbleBatch(container, count) {
  for (let i = 0; i < count; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Propiedades aleatorias para cada burbuja
    const size = Math.random() * 15 + 5;
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 10;
    
    // Aplicar estilos
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.animationDelay = `${delay}s`;
    bubble.style.animationDuration = `${duration}s`;
    
    container.appendChild(bubble);
    
    // Eliminar la burbuja después de completar la animación
    setTimeout(() => {
      bubble.remove();
    }, duration * 1000 + delay * 1000);
  }
}
