export const translations = {
  en: {
    nav: {
      home: "HOME",
      projects: "PROJECTS",
      contact: "CONTACT",
    },
    hero: {
      badge: "Full Stack Software Engineer & IT Consultant",
      title: "Jan Eberwein",
      titleSuffix: ", BSc",
      subtitle: "",
      description:
        "I build high-performance software and AI-driven interfaces.<br/>Focused on clean code, seamless usability, and scalable architecture.<br/>Helping businesses and individuals turn complex ideas into digital reality.",
      viewProjects: "View Projects",
      getInTouch: "Contact",
    },
    about: {
      title: "ABOUT",
      p1: "I am currently finishing my master's degree in Interactive Media at FH Oberösterreich - Campus Hagenberg. I combine design, code, and technology to create digital products that feel simple, useful, and carefully crafted.",
      p2: "My work focuses on modern frontend development, interactive systems, data visualization, and AI-supported workflows. I am interested in leveraging new technologies to solve problems and build automated, intelligent solutions.",
    },
    projects: {
      title: "PROJECTS",
      viewProject: "View Project",
      viewSource: "View Source",
    },
    skills: {
      title: "SKILLS",
      categories: {
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend & Databases",
        ai: "AI, Agents & Prompting",
        tools: "Tools & DevOps",
        creative: "Creative & Interactive",
      },
    },
    contact: {
      title: "CONTACT",
      subtitle: "",
      email: "hello@janeberwein.at",
      location: "Hagenberg im Mühlkreis, Austria",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your Name",
        emailLabel: "Email",
        emailPlaceholder: "your@email.com",
        messageLabel: "Message",
        messagePlaceholder: "How can I help you?",
        sendButton: "Send Message",
        sendingButton: "Sending...",
        successMessage: "Message sent successfully! I'll get back to you soon.",
        errorMessage: "Failed to send message. Please try again.",
        invalidCaptcha: "Invalid CAPTCHA. Please try again.",
      }
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
  de: {
    nav: {
      home: "Start",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      badge: "Full Stack Software Engineer & IT Consultant",
      title: "Jan Eberwein",
      titleSuffix: ", BSc",
      subtitle: "",
      description:
        "Ich entwickle performante Software und KI-gestützte Interfaces.<br/>Fokus auf sauberen Code, nahtlose Usability und skalierbare Architektur.<br/>Ich helfe Unternehmen und Menschen, komplexe Ideen in digitale Realität umzusetzen.",
      viewProjects: "Projekte ansehen",
      getInTouch: "Kontakt aufnehmen",
    },
    about: {
      title: "ABOUT",
      p1: "Ich schließe gerade meinen Master in Interactive Media ab. Ich liebe es, Design, Code und Technologie zu verbinden, um digitale Produkte zu erschaffen, die sich einfach, nützlich und sorgfältig entwickelt anfühlen.",
      p2: "Meine Arbeit konzentriert sich auf moderne Frontend-Entwicklung, interaktive Systeme, Datenvisualisierungen und KI-gestützte Workflows. Ich interessiere mich besonders dafür, neue Technologien zur Lösung komplexer Probleme zu nutzen und automatisierte, intelligente Lösungen zu bauen.",
    },
    projects: {
      title: "PROJECTS",
      viewProject: "Projekt ansehen",
      viewSource: "Quellcode ansehen",
    },
    skills: {
      title: "SKILLS",
      categories: {
        languages: "Sprachen",
        frontend: "Frontend",
        backend: "Backend & Datenbanken",
        ai: "KI, Agenten & Prompting",
        tools: "Tools & DevOps",
        creative: "Kreativ & Interaktiv",
      },
    },
    contact: {
      title: "CONTACT",
      subtitle: "",
      email: "hello@janeberwein.at",
      location: "Salzburg, Österreich",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Dein Name",
        emailLabel: "Email",
        emailPlaceholder: "deine@email.com",
        messageLabel: "Nachricht",
        messagePlaceholder: "Wie kann ich dir helfen?",
        sendButton: "Nachricht Senden",
        sendingButton: "Wird gesendet...",
        successMessage: "Nachricht erfolgreich gesendet! Ich melde mich in Kürze bei dir.",
        errorMessage: "Fehler beim Senden der Nachricht. Bitte versuche es noch einmal.",
        invalidCaptcha: "Ungültiges CAPTCHA. Bitte versuche es erneut.",
      }
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      backToTop: "Nach oben",
    },
  },
};

export type Language = "en" | "de";
export type TranslationKey = typeof translations.en;
