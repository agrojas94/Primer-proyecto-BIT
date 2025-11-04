// --- FILTRO DE GALERÍA ---
function filtrarCategoria(categoria) {
  const juegos = document.querySelectorAll('.card-item');
  juegos.forEach(juego => {
    if (categoria === 'todos' || juego.dataset.categoria === categoria) {
      juego.style.display = 'block';
    } else {
      juego.style.display = 'none';
    }
  });
}

// --- VALIDACIÓN DE FORMULARIO ---
function validarFormulario() {
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor completa todos los campos.");
    return false;
  }

  alert("¡Gracias por tu mensaje! 🎮");
  return true;
}

// --- DETALLE DE JUEGO ---
const juegos = {
  gta6: {
    titulo: "GTA VI",
    descripcion: "El regreso más esperado de Rockstar Games, con una historia ambientada en Vice City y un mundo abierto aún más grande.",
    imagen: "assets/img/gta6.jpg"
  },
  spiderman2: {
    titulo: "Spider-Man 2",
    descripcion: "Peter Parker y Miles Morales unen fuerzas en esta secuela llena de acción y gráficos espectaculares.",
    imagen: "assets/img/spiderman2.jpg"
  },
  starfield: {
    titulo: "Starfield",
    descripcion: "Una aventura espacial épica donde podrás explorar cientos de planetas y crear tu propia historia en el universo.",
    imagen: "assets/img/starfield.jpg"
  },
  zelda: {
    titulo: "Zelda: Tears of the Kingdom",
    descripcion: "Una experiencia mágica con nuevas mecánicas, libertad total y una narrativa inolvidable.",
    imagen: "assets/img/zelda.jpg"
  }
};

const params = new URLSearchParams(window.location.search);
const gameKey = params.get("game");
if (gameKey && juegos[gameKey]) {
  const contenedor = document.getElementById("detalle-juego");
  contenedor.innerHTML = `
    <div class="text-center">
      <h2>${juegos[gameKey].titulo}</h2>
      <img src="${juegos[gameKey].imagen}" class="img-fluid rounded my-3" alt="${juegos[gameKey].titulo}">
      <p>${juegos[gameKey].descripcion}</p>
      <a href="index.html" class="btn btn-primary">Volver</a>
    </div>
  `;
}
