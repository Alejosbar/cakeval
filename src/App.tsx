import { useState } from 'react'
import logo from './assets/logo.png'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Misión', href: '#mision' },
  { label: 'Visión', href: '#vision' },
  { label: 'Objetivos', href: '#objetivos' },
  { label: 'Contacto', href: '#contacto' },
]

const SPECIFIC_OBJECTIVES = [
  { num: '01', text: 'Crear y gestionar contenido en redes sociales.' },
  { num: '02', text: 'Implementar campañas publicitarias.' },
  { num: '03', text: 'Mejorar el posicionamiento de las marcas.' },
  { num: '04', text: 'Analizar el mercado y el público objetivo.' },
  { num: '05', text: 'Mejorar las estrategias.' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#EEEAFF]">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#inicio">
            <img src={logo} alt="Cakeval" className="h-14 w-auto" />
          </a>
          <nav className="hidden md:flex gap-8">
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#4A4570] hover:text-[#6B5CE7] font-medium transition-colors duration-200 text-sm tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center gap-2 bg-[#6B5CE7] hover:bg-[#4F3FD3] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
          >
            Empecemos
          </a>
          <button
            className="md:hidden p-2 text-[#6B5CE7]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#EEEAFF] px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#4A4570] hover:text-[#6B5CE7] font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative pt-24 min-h-screen flex items-center overflow-hidden bg-white"
      >
        {/* decorative blobs */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 rounded-full"
          style={{ background: 'radial-gradient(circle, #89CFF0 0%, transparent 70%)', transform: 'translate(30%, -20%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 rounded-full"
          style={{ background: 'radial-gradient(circle, #6B5CE7 0%, transparent 70%)', transform: 'translate(-20%, 30%)' }}
        />

        <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-[#6B5CE7]/10 text-[#6B5CE7] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-[#6B5CE7]/20">
              Tabio, Cundinamarca
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A1535] leading-[1.1] mb-6">
              La clave que{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #6B5CE7, #89CFF0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                impulsa
              </span>{' '}
              tu marca
            </h1>
            <p className="text-[#4A4570] text-lg leading-relaxed mb-10 max-w-md">
              Publicidad creativa, accesible y efectiva para los pequeños emprendimientos de Tabio. Tu visibilidad es nuestra misión.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#mision"
                className="bg-[#6B5CE7] hover:bg-[#4F3FD3] text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200"
              >
                Conócenos
              </a>
              <a
                href="#contacto"
                className="border-2 border-[#89CFF0] text-[#5AB8E8] hover:bg-[#89CFF0]/10 font-semibold px-8 py-3.5 rounded-full transition-colors duration-200"
              >
                Trabajemos juntos
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl opacity-40"
                style={{ background: 'linear-gradient(135deg, #6B5CE7, #89CFF0)', filter: 'blur(40px)', transform: 'scale(1.1)' }}
              />
              <div className="relative bg-white rounded-3xl p-10 border border-[#EEEAFF] shadow-xl">
                <img src={logo} alt="Cakeval logo" className="w-64 h-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6B5CE7]/40 animate-bounce">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* MISSION */}
      <section id="mision" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="w-full aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #EEEAFF, #D6EDFA)' }}
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=600&fit=crop&auto=format"
                alt="Equipo Cakeval trabajando con emprendedores locales"
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#6B5CE7] text-white rounded-2xl px-6 py-4 shadow-xl">
              <div className="text-3xl font-extrabold">2019</div>
              <div className="text-xs text-[#C8C0FF] mt-1">Fundada en Tabio</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#EEEAFF] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B5CE7" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="text-[#6B5CE7] font-semibold text-sm tracking-widest uppercase">Nuestra Misión</span>
            </div>
            <h2 className="text-4xl font-extrabold text-[#1A1535] leading-tight mb-6">
              Apoyamos el crecimiento de tu negocio
            </h2>
            <p className="text-[#4A4570] text-lg leading-relaxed mb-6">
              La misión de Cakeval es el apoyo a los pequeños emprendimientos de Tabio dando un servicio de publicidad creativa accesible y efectiva que permite el aumento de su visibilidad y la atracción de más clientes.
            </p>
            <p className="text-[#4A4570] text-lg leading-relaxed">
              Trabajamos con responsabilidad, compromiso y cercanía con la comunidad donde comprendemos las necesidades de cada negocio y brindamos estrategias publicitarias que impulsan su crecimiento económico y fortalecen el comercio local.
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section
        id="vision"
        className="py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#6B5CE7]/10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B5CE7" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <span className="text-[#6B5CE7] font-semibold text-sm tracking-widest uppercase">Nuestra Visión</span>
            </div>
            <h2 className="text-4xl font-extrabold text-[#1A1535] leading-tight mb-6">
              Líderes en publicidad municipal para el 2029
            </h2>
            <p className="text-[#4A4570] text-lg leading-relaxed mb-6">
              La visión de Cakeval en el 2029 es consolidarnos como empresa líder en publicidad a nivel municipal, reconocida por contribuir al desarrollo de pequeños negocios emprendedores.
            </p>
            <p className="text-[#4A4570] text-lg leading-relaxed">
              Buscamos ser un motor de crecimiento para la economía local, promoviendo una publicidad innovadora que genere positivismo a estas empresas.
            </p>

            <div className="mt-10 flex gap-8">
              <div>
                <div className="text-3xl font-extrabold text-[#6B5CE7]">2029</div>
                <div className="text-sm text-[#4A4570] mt-1">Meta de liderazgo</div>
              </div>
              <div className="w-px bg-[#EEEAFF]" />
              <div>
                <div className="text-3xl font-extrabold text-[#6B5CE7]">100+</div>
                <div className="text-sm text-[#4A4570] mt-1">Negocios apoyados</div>
              </div>
              <div className="w-px bg-[#EEEAFF]" />
              <div>
                <div className="text-3xl font-extrabold text-[#6B5CE7]">Local</div>
                <div className="text-sm text-[#4A4570] mt-1">Enfoque municipal</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=500&fit=crop&auto=format"
                alt="Visión de crecimiento empresarial Cakeval"
                className="w-full object-cover"
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: 'linear-gradient(180deg, transparent 50%, #2D2060 100%)' }}
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-serif italic text-lg leading-snug">
                "Un motor de crecimiento para la economía local."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GENERAL OBJECTIVE */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#6B5CE7] font-semibold text-sm tracking-widest uppercase">Propósito</span>
            <h2 className="text-4xl font-extrabold text-[#1A1535] mt-3 mb-6">Objetivo General</h2>
            <p className="text-[#4A4570] text-lg leading-relaxed">
              Desarrollar e implementar estrategias integrales de publicidad y marketing digital adaptadas a las necesidades del entorno municipal, que permitan a las pequeñas empresas optimizar su presencia en internet, incrementar su visibilidad comercial en el mercado local y fortalecer de manera duradera la relación con sus clientes, con el propósito de acelerar su posicionamiento e impulsar un crecimiento comercial continuo y sostenible.
            </p>
          </div>

          <div
            className="rounded-3xl p-10 md:p-14 relative overflow-hidden border border-[#EEEAFF]"
            style={{ background: 'linear-gradient(135deg, #6B5CE7 0%, #89CFF0 100%)' }}
          >
            <div className="relative grid md:grid-cols-3 gap-8 text-center">
              {[
                { icon: '📡', title: 'Presencia digital', desc: 'Optimizar la presencia en internet de cada pequeña empresa.' },
                { icon: '📈', title: 'Visibilidad local', desc: 'Incrementar la visibilidad en el mercado comercial municipal.' },
                { icon: '🤝', title: 'Relación con clientes', desc: 'Fortalecer de forma duradera el vínculo con sus clientes.' },
              ].map(item => (
                <div key={item.title} className="flex flex-col items-center gap-3">
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="font-bold text-lg text-white">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPECIFIC OBJECTIVES */}
      <section
        id="objetivos"
        className="py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#6B5CE7] font-semibold text-sm tracking-widest uppercase">Lo que hacemos</span>
            <h2 className="text-4xl font-extrabold text-[#1A1535] mt-3">Objetivos Específicos</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIFIC_OBJECTIVES.map((obj, i) => (
              <div
                key={obj.num}
                className="bg-white rounded-2xl p-7 shadow-sm border border-[#EEEAFF] hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="text-5xl font-extrabold mb-4 select-none"
                  style={{
                    background: 'linear-gradient(90deg, #6B5CE7, #89CFF0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    opacity: 0.4,
                  }}
                >
                  {obj.num}
                </div>
                <p className="text-[#1A1535] font-medium text-lg leading-snug group-hover:text-[#6B5CE7] transition-colors">
                  {obj.text}
                </p>
              </div>
            ))}

            {/* filler card */}
            <div
              className="hidden lg:flex bg-[#6B5CE7] rounded-2xl p-7 items-end"
              style={{ background: 'linear-gradient(135deg, #6B5CE7, #89CFF0)' }}
            >
              <div>
                <p className="text-white/80 text-sm mb-2">¿Listo para crecer?</p>
                <a href="#contacto" className="text-white font-bold text-lg hover:underline">
                  Hablemos →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section
        id="contacto"
        className="py-24"
        style={{ background: 'linear-gradient(135deg, #1A1535 0%, #2D2060 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#6B5CE7]/30 text-[#89CFF0] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Contáctanos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Impulsemos tu marca<br />
            <span
              style={{
                background: 'linear-gradient(90deg, #6B5CE7, #89CFF0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              juntos
            </span>
          </h2>
          <p className="text-[#B8B0E8] text-lg max-w-xl mx-auto mb-12">
            Estamos aquí para ayudarte a crecer. Cuéntanos sobre tu negocio y diseñaremos la estrategia perfecta para ti.
          </p>

          <form className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 text-left grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[#B8B0E8] text-sm font-medium">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#89CFF0] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#B8B0E8] text-sm font-medium">Negocio</label>
              <input
                type="text"
                placeholder="Nombre de tu negocio"
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#89CFF0] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#B8B0E8] text-sm font-medium">Correo electrónico</label>
              <input
                type="email"
                placeholder="tu@correo.com"
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#89CFF0] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#B8B0E8] text-sm font-medium">Teléfono</label>
              <input
                type="tel"
                placeholder="+57 300 000 0000"
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#89CFF0] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-[#B8B0E8] text-sm font-medium">Mensaje</label>
              <textarea
                rows={4}
                placeholder="Cuéntanos sobre tu negocio y qué necesitas..."
                className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#89CFF0] transition-colors resize-none"
              />
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-[#6B5CE7] hover:bg-[#4F3FD3] text-white font-bold px-12 py-4 rounded-full transition-colors duration-200 text-lg"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A1535] border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Cakeval" className="h-12 w-auto brightness-0 invert opacity-80" />
          <p className="text-[#4A4570] text-sm text-center">
            © {new Date().getFullYear()} Cakeval — Tabio, Cundinamarca. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            {['Facebook', 'Instagram', 'WhatsApp'].map(name => (
              <a
                key={name}
                href="#"
                className="text-[#4A4570] hover:text-[#89CFF0] text-sm transition-colors"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
