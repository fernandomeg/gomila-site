import Link from "next/link";

const features = [
  {
    icon: "📍",
    title: "Rastreo GPS en Tiempo Real",
    description:
      "Sigue la ruta exacta de cada paseo. Visualiza el mapa en vivo mientras tu perro explora el mundo.",
  },
  {
    icon: "📅",
    title: "Historial Completo de Paseos",
    description:
      "Accede a todos los paseos registrados: distancia recorrida, duración, hora de inicio y fin.",
  },
  {
    icon: "📊",
    title: "Estadísticas de Actividad",
    description:
      "Conoce los patrones de actividad de tu perro: kilómetros semanales, zonas favoritas y más.",
  },
  {
    icon: "🐾",
    title: "Perfiles de Mascotas",
    description:
      "Gestiona varios perros en una sola cuenta. Cada perfil con su propio historial y métricas.",
  },
  {
    icon: "🔔",
    title: "Recordatorios de Paseo",
    description:
      "Configura alertas para no olvidar el paseo diario. Mantén la rutina de tu mascota.",
  },
  {
    icon: "🗺️",
    title: "Rutas Guardadas",
    description:
      "Guarda las rutas favoritas y vuelve a usarlas cuando quieras con un solo toque.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐕</span>
            <span className="text-xl font-bold text-gray-900">GoMila</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">
              Características
            </a>
            <a href="#download" className="hover:text-gray-900 transition-colors">
              Descargar
            </a>
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-amber-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
              <span>🚀</span>
              <span>Ya disponible en Android</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight text-balance mb-6">
              Cada paseo,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-green-500">
                una aventura
              </span>{" "}
              registrada
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              GoMila rastrea los paseos de tu perro con GPS en tiempo real. Guarda el
              historial, analiza la actividad y mantén a tu mascota feliz y saludable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" id="download">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-6 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-700 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76a2 2 0 0 0 2.05-.21l11.62-6.7-2.7-2.7L3.18 23.76zM20.54 10.3l-2.72-1.57-3.07 3.07 3.07 3.07 2.74-1.58a1.97 1.97 0 0 0 0-3.0zM3.18.24 14.15 9.85l-2.7 2.7L3.18 5.84A2 2 0 0 1 3.18.24zM2 1.4v21.2L13.1 12 2 1.4z" />
                </svg>
                Google Play
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-4 rounded-2xl font-semibold text-lg hover:border-gray-400 transition-colors"
              >
                Ver características
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-[580px]">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-green-400 rounded-[3rem] opacity-20 blur-3xl scale-110" />
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl h-full">
                <div className="bg-gray-800 rounded-[2.5rem] h-full overflow-hidden flex flex-col items-center justify-center gap-4 p-6">
                  <div className="w-full h-48 bg-gradient-to-br from-green-800 to-teal-900 rounded-2xl flex items-center justify-center">
                    <span className="text-6xl">🗺️</span>
                  </div>
                  <div className="w-full space-y-2">
                    <div className="bg-gray-700 rounded-xl p-3 flex justify-between items-center">
                      <span className="text-white text-sm font-medium">Distancia</span>
                      <span className="text-amber-400 font-bold">2.4 km</span>
                    </div>
                    <div className="bg-gray-700 rounded-xl p-3 flex justify-between items-center">
                      <span className="text-white text-sm font-medium">Duración</span>
                      <span className="text-green-400 font-bold">32 min</span>
                    </div>
                    <div className="bg-gray-700 rounded-xl p-3 flex justify-between items-center">
                      <span className="text-white text-sm font-medium">Pasos</span>
                      <span className="text-blue-400 font-bold">3,210</span>
                    </div>
                  </div>
                  <button className="w-full bg-amber-500 text-white rounded-2xl py-3 font-bold text-sm">
                    🐾 Iniciar Paseo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Todo lo que necesitas para pasear feliz
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              GoMila combina GPS preciso, registro automático y estadísticas inteligentes
              en una app intuitiva.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-50 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-green-500">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            ¿Listo para empezar a registrar aventuras?
          </h2>
          <p className="text-amber-100 text-xl mb-10">
            Descarga GoMila gratis y empieza a rastrear el primer paseo hoy.
          </p>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-50 transition-colors shadow-xl"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 23.76a2 2 0 0 0 2.05-.21l11.62-6.7-2.7-2.7L3.18 23.76zM20.54 10.3l-2.72-1.57-3.07 3.07 3.07 3.07 2.74-1.58a1.97 1.97 0 0 0 0-3.0zM3.18.24 14.15 9.85l-2.7 2.7L3.18 5.84A2 2 0 0 1 3.18.24zM2 1.4v21.2L13.1 12 2 1.4z" />
            </svg>
            Descargar en Google Play
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐕</span>
            <span className="text-white font-bold text-lg">GoMila</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} GoMila. Todos los derechos reservados.</p>
          <nav className="flex gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
