import './App.css'

function App() {
  return (
    <>
      <header className="navbar">
        <h2>PawHome 🐾</h2>

        <nav>
          <a href="#">Inicio</a>
          <a href="#">Mascotas</a>
          <a href="#">Nosotros</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-overlay">
          <h1>Encuentra a tu mejor amigo</h1>

          <p>
            Miles de mascotas esperan un hogar lleno de amor.
          </p>

          <button>Adoptar ahora</button>
        </div>
      </section>

      <section className="stats">
        <div>
          <h2>500+</h2>
          <p>Mascotas disponibles</p>
        </div>

        <div>
          <h2>200+</h2>
          <p>Refugios asociados</p>
        </div>

        <div>
          <h2>3000+</h2>
          <p>Adopciones exitosas</p>
        </div>
      </section>

      <section className="info-section">
        <img
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a"
          alt="Perro"
        />

        <div>
          <h2>Adopta Putito</h2>

          <p>
            Todas nuestras mascotas reciben atención veterinaria y seguimiento
            antes de ser entregadas.
          </p>
        </div>
      </section>

      <section className="info-section reverse">
        <img
          src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4"
          alt="Gato"
        />

        <div>
          <h2>Proceso simple</h2>

          <p>
            Busca una mascota, envía tu solicitud y agenda una visita.
          </p>
        </div>
      </section>

      <section className="testimonials">
        <h2>Historias felices</h2>

        <div className="cards">

          <div className="card card1">
            <p>
              "Gracias a PawHome encontré a Luna y cambió mi vida."
            </p>
            <h4>- María</h4>
          </div>

          <div className="card card2">
            <p>
              "El proceso fue rápido y muy seguro."
            </p>
            <h4>- Carlos</h4>
          </div>

          <div className="card card3">
            <p>
              "Ahora tengo un compañero increíble."
            </p>
            <h4>- Sofía</h4>
          </div>

        </div>
      </section>

      <section className="cta">
        <h2>¿Listo para adoptar?</h2>

        <button>Comenzar</button>
      </section>

      <footer>
        <p>© 2026 PawHome | Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App