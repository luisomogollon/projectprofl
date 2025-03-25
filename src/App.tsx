import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, MonitorSmartphone, PaintBucket, Menu, X, ChevronUp, Sun, Moon, BarChart } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { SiPhp, SiTypescript, SiNativescript, SiTailwindcss, SiReact, SiHtml5, SiCss3, SiJavascript, SiVuedotjs, SiAstro } from "react-icons/si";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const technologies = [
    {
      name: "HTML",
      icon: <SiHtml5 className="w-12 h-12 mx-auto mb-4 text-[#E34F26] opacity-90" />,
      color: "text-[#E34F26]"
    },
    {
      name: "CSS",
      icon: <SiCss3 className="w-12 h-12 mx-auto mb-4 text-[#264DE4] opacity-90" />,
      color: "text-[#264DE4]"
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-12 h-12 mx-auto mb-4 text-[#F7DF1E] opacity-90" />,
      color: "text-[#F7DF1E]"
    },
    {
      name: "React.JS",
      icon: <SiReact className="w-12 h-12 mx-auto mb-4 text-[#61DAFB] opacity-90" />,
      color: "text-[#61DAFB]"
    },
    {
      name: "Vue.js",
      icon: <SiVuedotjs className="w-12 h-12 mx-auto mb-4 text-[#4FC08D] opacity-90" />,
      color: "text-[#4FC08D]"
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-12 h-12 mx-auto mb-4 text-[#007ACC] opacity-90" />,
      color: "text-[#007ACC]"
    },
    {
      name: "PHP",
      icon: <SiPhp className="w-12 h-12 mx-auto mb-4 text-[#777BB4] opacity-90" />, // Usando react-icons
      color: "text-[#777BB4]"
    },
    {
      name: "NativeScript",
      icon: <SiNativescript className="w-12 h-12 mx-auto mb-4 text-[#3655FF] opacity-90" />,
      color: "text-[#3655FF]"
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-12 h-12 mx-auto mb-4 text-[#38B2AC] opacity-90" />,
      color: "text-[#38B2AC]"
    },
    {
      name: "Astro",
      icon: <SiAstro className="w-12 h-12 mx-auto mb-4 text-[#FF5D01] opacity-90" />,
      color: "text-[#FF5D01]"
    }
  ];

  const projects = [
    {
      title: "E-commerce Website",
      description: "Tienda en línea personalizada con WooCommerce, integración de pagos y gestión de inventario",
      image: "/1.png", // Actualización de la imagen
      url: "https://lighthearted-vacherin-6a4fa0.netlify.app/", // Placeholder URL
      tags: ["Typescript", "Vite", "React.js"]
    },
    {
      title: "Blog Corporativo",
      description: "Blog empresarial Contenido Prueba y premium",
      image: "/2.png",
      url: "https://elegant-fudge-31eee0.netlify.app/", // Placeholder URL
      tags: ["Astro", "JavaScript", "Vite"]
    },
    {
      title: "Gestor de Tareas",
      description: "Aplicación CRUD para la gestión de tareas, con funcionalidades como creación, edición, eliminación.",
      image: "/3.png",
      url: "https://statuesque-creponne-2e4905.netlify.app/", // Updated URL
      tags: ["TypeScript", "Vite", "MongoDB"]
    },
    {
      title: "Gestor de Tareas",
      description: "Un e-commerce rápido y moderno construido con Vite, React y TypeScript, potenciado por TailwindCSS para estilos.",
      image: "/4.png",
      url: "https://voluble-kelpie-c2d92e.netlify.app/", // Updated URL
      tags: ["TypeScript", "Node.js", "Mock API"]
    },
    {
      title: "E-Store Admin Dashboard",
      description: "Tienda en línea personalizada con WooCommerce, integración de pagos y gestión de inventario",
      image: "/5.png",
      url: "https://lucky-frangollo-39acd2.netlify.app/#", // Placeholder URL
      tags: ["Tailwind ", "JavaScript", "PHP"]
    },
    {
      title: "Landing page",
      description: "Diseñado para llevarte de principiante a profesional en tiempo récord.",
      image: "/6.png",
      url: "https://singular-paletas-1c1afd.netlify.app/", // Placeholder URL
      tags: ["Vue.js", "Vite", "Node.js"]
    },
  ];

  const navLinks = [
    { href: "#about", text: "Sobre Mí" },
    { href: "#skills", text: "Habilidades" },
    { href: "#technologies", text: "Tecnologías" },
    { href: "#projects", text: "Proyectos" },
    { href: "#contact", text: "Contacto" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm z-50 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold text-blue-900 dark:text-blue-400">LM</a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
                >
                  {link.text}
                </a>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
              <button
                className="text-gray-700 dark:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="container mx-auto px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-gray-900 text-white pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            Luis Michinaux
            <span className="block text-3xl md:text-4xl text-blue-400 mt-2">Software Developer</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Especializado en desarrollo web con HTML, CSS, JavaScript y WordPress. 
            Creo soluciones digitales a medida para mis clientes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Ver Proyectos
            </a>
            <a 
              href="#contact"
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Sobre Mí</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold">3+</div>
                    <div className="text-sm">Años de<br/>Experiencia</div>
                  </div>
                </div>
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p className="mb-6">
                  Con más de 3 años de experiencia en el desarrollo web, me especializo en crear 
                  experiencias digitales excepcionales que combinan diseño atractivo con 
                  funcionalidad robusta.
                </p>
                <p className="mb-6">
                  Mi enfoque se centra en entender las necesidades específicas de cada cliente 
                  para entregar soluciones personalizadas que superen sus expectativas.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-500">25+</div>
                    <div className="text-gray-600 dark:text-gray-300">Proyectos.</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-500">8+</div>
                    <div className="text-gray-600 dark:text-gray-300">Tecnologías.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Tecnologías</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <div 
                  className={`${tech.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  {React.cloneElement(tech.icon, { className: "w-14 h-14 mx-auto mb-4" })}
                </div>
                <h3 className="text-center text-lg font-semibold dark:text-white">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
            <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition duration-300 h-64">
              <Code2 className="w-14 h-14 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-300">HTML, CSS, JavaScript, React</p>
              <div className="mt-4 space-y-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: '90%'}}></div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition duration-300 h-64">
              <PaintBucket className="w-14 h-14 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Diseño</h3>
              <p className="text-gray-600 dark:text-gray-300">UI/UX, Responsive Design</p>
              <div className="mt-4 space-y-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: '75%'}}></div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition duration-300 h-64">
              <MonitorSmartphone className="w-14 h-14 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">CMS</h3>
              <p className="text-gray-600 dark:text-gray-300">WordPress, WooCommerce</p>
              <div className="mt-4 space-y-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: '95%'}}></div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition duration-300 h-64">
              <BarChart className="w-14 h-14 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Marketing </h3>
              <p className="text-gray-600 dark:text-gray-300">SEO, Digital, Growth Hacking</p>
              <div className="mt-4 space-y-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: '85%'}}></div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-200 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Proyectos Actuales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover opacity-87 transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.url}
                    className="inline-flex items-center text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition duration-300"
                  >
                    Live Demo
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://github.com/luisomogollon"
              className="bg-transparent border-2 border-blue-500 dark:border-blue-400 hover:bg-blue-500/10 text-blue-500 dark:text-blue-400 font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
            >
              Ver mas proyectos.
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Contacto</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 dark:text-white">¡Hablemos de tu proyecto!</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Estoy disponible para proyectos freelance y colaboraciones. 
                  Contáctame y conversemos sobre cómo puedo ayudarte.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white">Email</h4>
                      <p className="text-gray-600 dark:text-gray-300">luiso1990s@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white">LinkedIn</h4>
                      <p className="text-gray-600 dark:text-gray-300">@luis-michinaux</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Github className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-white">GitHub</h4>
                      <p className="text-gray-600 dark:text-gray-300">@luisomogollon</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Luis Michinaux</h3>
              <p className="text-gray-400">
                Desarrollador web especializado en crear experiencias digitales excepcionales.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Sígueme</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/luis-michinaux/" className="text-gray-400 hover:text-white transition duration-300">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/luisomogollon" className="text-gray-400 hover:text-white transition duration-300">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p>© 2025 Luis Michinaux. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;