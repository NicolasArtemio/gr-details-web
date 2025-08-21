import { motion } from "framer-motion";
import {
  FaCar,
  FaCouch,
  FaBroom,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-poppins">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow sticky top-0 z-50">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold text-pink-600"
        >
          GR DETAIL
        </motion.h1>
        <nav className="space-x-6 hidden md:flex">
          {["Servicios", "Precios", "Reservas", "Ubicación", "Blog"].map(
            (item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="hover:text-pink-500 cursor-pointer"
              >
                {item}
              </motion.a>
            ),
          )}
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-pink-100 via-white to-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900"
        >
          Estética Vehicular Premium
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 mb-6"
        >
          Tu auto como recién salido de fábrica
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#reservas"
          className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow hover:bg-pink-700 transition"
        >
          Reservar Turno
        </motion.a>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Nuestros Servicios
        </h3>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <FaCar size={40} />, title: "Lavado exterior" },
            { icon: <FaBroom size={40} />, title: "Lavado completo" },
            { icon: <FaCouch size={40} />, title: "Limpieza de tapizados" },
            { icon: <FaCar size={40} />, title: "Lavado de motor" },
          ].map((servicio, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow hover:scale-105 transition"
            >
              <div className="flex justify-center mb-4 text-pink-600">
                {servicio.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                {servicio.title}
              </h4>
              <p className="text-gray-600">
                Servicio profesional para el cuidado de tu vehículo.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="py-20 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Planes y Horarios
        </h3>
        <div className="overflow-x-auto max-w-3xl mx-auto">
          <table className="w-full border border-gray-300 text-center">
            <thead>
              <tr className="bg-pink-100 text-pink-700">
                <th className="p-3 border border-gray-300">Servicio</th>
                <th className="p-3 border border-gray-300">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-300">Lavado exterior</td>
                <td className="p-3 border border-gray-300">$3000</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300">Lavado completo</td>
                <td className="p-3 border border-gray-300">$5000</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300">
                  Limpieza de tapizados
                </td>
                <td className="p-3 border border-gray-300">$8000</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300">Lavado de motor</td>
                <td className="p-3 border border-gray-300">$4000</td>
              </tr>
            </tbody>
          </table>
          <p className="text-center text-gray-600 mt-6">
            ⏰ Horarios: Lun–Sáb 9:00–19:00
          </p>
        </div>
      </section>

      {/* Reservas con Calendly */}
      <section id="reservas" className="py-20 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Reservá tu Turno
        </h3>
        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://calendly.com/tu-usuario"
            className="w-full h-[600px] rounded-xl border border-gray-300"
            title="Calendly Reserva"
          ></iframe>
        </div>
      </section>

      {/* Ubicación */}
      <section id="ubicación" className="py-20 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Dónde Estamos
        </h3>
        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..."
            className="w-full h-[400px] rounded-xl border border-gray-300"
            allowFullScreen
            loading="lazy"
            title="Google Maps"
          ></iframe>
          <div className="text-center mt-4">
            <a
              href="https://goo.gl/maps/"
              target="_blank"
              className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow hover:bg-pink-700 transition"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Redes */}
      <section id="redes" className="py-20 px-6 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-12 text-gray-900">Seguinos</h3>
        <div className="flex justify-center gap-6 text-pink-600 text-3xl">
          <a href="#" target="_blank">
            <FaInstagram />
          </a>
          <a href="#" target="_blank">
            <FaFacebook />
          </a>
          <a href="#" target="_blank">
            <FaTiktok />
          </a>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-20 px-6 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Novedades
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Nuevas promos del mes",
              desc: "Aprovechá descuentos especiales en lavados completos.",
            },
            {
              title: "El lavado de motor",
              desc: "¿Cuándo conviene hacerlo? Te contamos en detalle.",
            },
            {
              title: "Beneficios del encerado",
              desc: "Protegé la pintura de tu auto cada 3 meses.",
            },
          ].map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:scale-105 transition"
            >
              <h4 className="text-xl font-semibold text-pink-600 mb-2">
                {post.title}
              </h4>
              <p className="text-gray-600">{post.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 text-center text-gray-500">
        <p>© 2025 GR DETAIL - Estética Vehicular</p>
      </footer>
    </div>
  );
}
