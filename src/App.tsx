import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, MonitorSmartphone, Database, PaintBucket, Menu, X, ChevronUp, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

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
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-12 h-12 mx-auto mb-4 text-[#E34F26]" fill="currentColor"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>`,
      color: "text-[#E34F26]"
    },
    {
      name: "CSS",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-12 h-12 mx-auto mb-4 text-[#264DE4]" fill="currentColor"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>`,
      color: "text-[#264DE4]"
    },
    {
      name: "JavaScript",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-12 h-12 mx-auto mb-4 text-[#F7DF1E]" fill="currentColor"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>`,
      color: "text-[#F7DF1E]"
    },
    {
      name: "React.JS",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-12 h-12 mx-auto mb-4 text-[#61DAFB]" fill="currentColor"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>`,
      color: "text-[#61DAFB]"
    },
    {
      name: "Vue.js",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-12 h-12 mx-auto mb-4 text-[#4FC08D]" fill="currentColor"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"/></svg>`,
      color: "text-[#4FC08D]"
    },
    {
      name: "TypeScript",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-12 h-12 mx-auto mb-4 text-[#007ACC]" fill="currentColor"><path d="M128 0H384c70.7 0 128 57.3 128 128V384c0 70.7-57.3 128-128 128H128C57.3 512 0 454.7 0 384V128C0 57.3 57.3 0 128 0zM322.1 354.9l17.5-52.5H272v-35.8h69.3v-52.5H272v-35.8h84.4V167H189.6v35.8h69.3v35.8H189.6v52.5h69.3v35.8H172.1l-17.5 52.5h69.3v35.8h-69.3v52.5h102.5v.2z"/></svg>`,
      color: "text-[#007ACC]"
    },
    {
      name: "PHP",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-12 h-12 mx-auto mb-4 text-[#777BB4]" fill="currentColor"><path d="M369.7 391L320 493.7c-1.8 4.1-5.6 6.7-9.9 6.7H74c-4.3 0-8.1-2.7-9.9-6.7L14.3 391c-1.8-4.1 1-8.5 5.3-8.5h54.1l-20.8-48.4c-1.8-4.1 1-8.5 5.3-8.5h41.3c4.3 0 7.1 2.7 5.3 6.7l-17.5 41.7h122.6l-17.5-41.7c-1.8-4.1 1-8.5 5.3-8.5h41.3c4.3 0 7.1 2.7 5.3 6.7l-20.8 48.4h54.1c4.3 0 7.1 4.3 5.3 8.5zM192 320c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"/></svg>`,
      color: "text-[#777BB4]"
    },
    {
      name: "NativeScript",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-12 h-12 mx-auto mb-4 text-[#3655FF]" fill="currentColor"><path d="M224 32C100.3 32 0 132.3 0 256s100.3 224 224 224 224-100.3 224-224S347.7 32 224 32zm0 400c-97.2 0-176-78.8-176-176S126.8 80 224 80s176 78.8 176 176-78.8 176-176 176zm80-256h-48v64h-64v-64h-48v128h48v-64h64v64h48V176z"/></svg>`,
      color: "text-[#3655FF]"
    },
    {
      name: "Tailwind CSS",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-12 h-12 mx-auto mb-4 text-[#38B2AC]" fill="currentColor"><path d="M448 209.1c-26.5-56.8-69.3-97.6-126.1-121.4C270.1 64.5 224 64 176.1 64c-47.9 0-94.1.5-145.8 23.7C24.3 111.5-18.5 152.3-45 209.1c-26.5 56.8-26.5 121.4 0 178.2 26.5 56.8 69.3 97.6 126.1 121.4C81.9 447.5 128 448 176.1 448c47.9 0 94.1-.5 145.8-23.7 56.8-23.8 99.6-64.6 126.1-121.4 26.5-56.8 26.5-121.4 0-178.2zM176.1 384c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm96-128c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"/></svg>`,
      color: "text-[#38B2AC]"
    },
    {
      name: "React Native",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-12 h-12 mx-auto mb-4 text-[#61DAFB]" fill="currentColor"><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm0 400c-97.2 0-176-78.8-176-176S158.8 80 256 80s176 78.8 176 176-78.8 176-176 176zm-80-176c0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80-80-35.8-80-80zm80-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"/></svg>`,
      color: "text-[#61DAFB]"
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
      description: "Blog empresarial con sistema de membresía y contenido premium",
      image: "/2.png",
      url: "https://elegant-fudge-31eee0.netlify.app/", // Placeholder URL
      tags: ["WordPress", "JavaScript", "MySQL"]
    },
    {
      title: "Gestor de Tareas",
      description: "Aplicación CRUD para la gestión de tareas, con funcionalidades como creación, edición, eliminación.",
      image: "public/3.png",
      url: "https://statuesque-creponne-2e4905.netlify.app/", // Updated URL
      tags: ["TypeScript", "Vite", "MongoDB"]
    },
    {
      title: "Gestor de Tareas",
      description: "Un e-commerce rápido y moderno construido con Vite, React y TypeScript, potenciado por TailwindCSS para estilos.",
      image: "public/4.png",
      url: "https://voluble-kelpie-c2d92e.netlify.app/", // Updated URL
      tags: ["TypeScript", "Node.js", "Mock API"]
    },
    {
      title: "E-Store Admin Dashboard",
      description: "Tienda en línea personalizada con WooCommerce, integración de pagos y gestión de inventario",
      image: "public/5.png",
      url: "https://lucky-frangollo-39acd2.netlify.app/#", // Placeholder URL
      tags: ["Tailwind ", "JavaScript", "PHP"]
    },
    {
      title: "Landing page",
      description: "Diseñado para llevarte de principiante a profesional en tiempo récord.",
      image: "public/6.png",
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
      <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Sobre Mí</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="Profile"
                    className="w-full h-full object-cover opacity-80"
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
      <section id="technologies" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Tecnologías</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <div 
                  className={`${tech.color} transition-transform duration-300 group-hover:scale-110`}
                  dangerouslySetInnerHTML={{ __html: tech.icon }}
                />
                <h3 className="text-center font-semibold dark:text-white">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition duration-300">
              <Code2 className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Frontend</h3>
              <p className="text-gray-600 dark:text-gray-300">HTML, CSS, JavaScript, React</p>
              <div className="mt-4 space-y-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition duration-300">
              <Database className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Backend</h3>
              <p className="text-gray-600 dark:text-gray-300">PHP, MySQL, WordPress</p>
              <div className="mt-4 space-y-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition duration-300">
              <PaintBucket className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Diseño</h3>
              <p className="text-gray-600 dark:text-gray-300">UI/UX, Responsive Design</p>
              <div className="mt-4 space-y-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:transform hover:scale-105 transition duration-300">
              <MonitorSmartphone className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">CMS</h3>
              <p className="text-gray-600 dark:text-gray-300">WordPress, WooCommerce</p>
              <div className="mt-4 space-y-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Proyectos Actuales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover opacity-75 transition duration-300 group-hover:scale-110"
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