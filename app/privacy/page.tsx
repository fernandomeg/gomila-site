import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — GoMila",
  description: "Política de privacidad de la aplicación GoMila para rastreo de paseos de perros.",
};

const lastUpdated = "1 de mayo de 2025";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Nav */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-2xl">🐕</span>
            <span className="text-xl font-bold text-gray-900">GoMila</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            Política de Privacidad
          </h1>
          <p className="text-gray-500">Última actualización: {lastUpdated}</p>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 prose prose-gray max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
            <p className="text-gray-600 leading-relaxed">
              Bienvenido a <strong>GoMila</strong>. Esta Política de Privacidad describe cómo
              recopilamos, usamos y protegemos la información personal cuando utilizas nuestra
              aplicación móvil y sitio web para el rastreo de paseos de perros.
            </p>
            <p className="text-gray-600 leading-relaxed mt-3">
              Al usar GoMila, aceptas las prácticas descritas en este documento. Si no estás de
              acuerdo con algún punto, te pedimos que no utilices la aplicación.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. Información que Recopilamos
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Recopilamos la siguiente información para ofrecerte el servicio:
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-0.5">•</span>
                <span>
                  <strong>Datos de ubicación GPS:</strong> Registramos la ruta de cada paseo
                  mientras la función de rastreo está activa. Esta información se almacena en tu
                  cuenta y nunca se comparte con terceros sin tu consentimiento.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-0.5">•</span>
                <span>
                  <strong>Información de la cuenta:</strong> Nombre de usuario, correo electrónico
                  y contraseña (almacenada de forma cifrada).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-0.5">•</span>
                <span>
                  <strong>Datos de mascotas:</strong> Nombre, raza, edad y foto de tu perro
                  (opcionales).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-0.5">•</span>
                <span>
                  <strong>Datos de uso:</strong> Estadísticas anónimas de uso para mejorar la
                  experiencia de la aplicación.
                </span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. Uso de la Información
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Utilizamos tu información exclusivamente para:
            </p>
            <ul className="space-y-2 text-gray-600">
              {[
                "Registrar y mostrar el historial de paseos de tu perro.",
                "Generar estadísticas de actividad y rutas favoritas.",
                "Mejorar las funcionalidades de la aplicación.",
                "Enviarte notificaciones y recordatorios (solo si los activas).",
                "Soporte técnico y atención al usuario.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. Permisos de la Aplicación
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              GoMila solicita los siguientes permisos en tu dispositivo:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "📍",
                  name: "Ubicación en primer plano",
                  reason: "Para rastrear la ruta mientras usas la app.",
                },
                {
                  icon: "🗺️",
                  name: "Ubicación en segundo plano",
                  reason: "Para continuar el rastreo si minimizas la app durante un paseo.",
                },
                {
                  icon: "🔔",
                  name: "Notificaciones",
                  reason: "Para recordatorios de paseo (opcional).",
                },
                {
                  icon: "💾",
                  name: "Almacenamiento",
                  reason: "Para guardar rutas y fotos de mascotas localmente.",
                },
              ].map((perm) => (
                <div
                  key={perm.name}
                  className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span>{perm.icon}</span>
                    <span className="font-semibold text-gray-900 text-sm">{perm.name}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{perm.reason}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. Compartición de Datos
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>No vendemos ni compartimos tu información personal con terceros</strong>{" "}
              con fines comerciales. Los datos solo pueden compartirse en los siguientes casos:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-0.5">•</span>
                <span>Con proveedores de infraestructura (Firebase/Google) para el almacenamiento seguro de datos.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-0.5">•</span>
                <span>Cuando sea requerido por ley o autoridades competentes.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-500 font-bold mt-0.5">•</span>
                <span>Con tu consentimiento explícito para funciones sociales (si las activas).</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. Seguridad de los Datos
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Implementamos medidas técnicas y organizativas para proteger tu información:
              cifrado en tránsito (HTTPS/TLS), contraseñas hasheadas con bcrypt, acceso
              restringido a datos sensibles y copias de seguridad regulares. Sin embargo,
              ningún sistema es 100% seguro; te recomendamos usar contraseñas fuertes y únicas.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Tus Derechos</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Como usuario tienes derecho a:
            </p>
            <ul className="space-y-2 text-gray-600">
              {[
                "Acceder a todos tus datos personales almacenados.",
                "Corregir información incorrecta.",
                "Eliminar tu cuenta y todos los datos asociados.",
                "Exportar tu historial de paseos.",
                "Retirar el consentimiento para el uso de ubicación en segundo plano en cualquier momento desde la configuración del dispositivo.",
              ].map((right) => (
                <li key={right} className="flex gap-3">
                  <span className="text-blue-500 font-bold mt-0.5">→</span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              8. Retención de Datos
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Conservamos tus datos mientras tu cuenta esté activa. Al eliminar tu cuenta,
              todos los datos personales (rutas, perfil, mascotas) se borran permanentemente
              en un plazo máximo de 30 días. Los datos anónimos de uso pueden conservarse
              para análisis estadísticos.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Menores de Edad</h2>
            <p className="text-gray-600 leading-relaxed">
              GoMila no está dirigida a menores de 13 años. No recopilamos conscientemente
              información de menores. Si detectamos que un usuario es menor de 13 años,
              eliminaremos su cuenta de inmediato.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              10. Cambios a esta Política
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Podemos actualizar esta Política de Privacidad ocasionalmente. Cuando hagamos
              cambios significativos, te notificaremos mediante una notificación en la app o
              un correo electrónico. La fecha de última actualización siempre estará visible
              al inicio de este documento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto</h2>
            <p className="text-gray-600 leading-relaxed">
              Si tienes preguntas sobre esta Política de Privacidad o sobre cómo manejamos
              tus datos, contáctanos:
            </p>
            <div className="mt-4 p-4 bg-amber-50 border border-amber-100 rounded-xl text-gray-700">
              <p>
                <strong>GoMila Support</strong>
                <br />
                Email:{" "}
                <a
                  href="mailto:support@gomila.app"
                  className="text-amber-600 hover:underline"
                >
                  support@gomila.app
                </a>
              </p>
            </div>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🐕</span>
            <span className="text-white font-bold">GoMila</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} GoMila. Todos los derechos reservados.</p>
          <Link href="/" className="text-sm hover:text-white transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </footer>
    </main>
  );
}
