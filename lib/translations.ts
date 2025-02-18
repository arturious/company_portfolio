export const translations = {
  en: {
    hero: {
      title: "Full Stack Developer",
      description: "We deliver cutting-edge technology solutions that drive business growth and digital transformation.",
    },
    services: {
      sectionTitle: "Our Services",
      software: {
        title: "Software & Web Development",
        description: "• Website development (landing pages, corporate websites, e-commerce) • Mobile app development (iOS, Android)."
      },
      security: {
        title: "Cybersecurity",
        description: "• Security audits and vulnerability testing (pentest) • Server setup and protection."
      },
      support: {
        title: "Technical Support & Administration",
        description: "• Network setup and support • CCTV system implementation and setup • Website and application maintenance."
      },
      ai: {
        title: "AI & Automation",
        description: "• Business process automation with AI • Chatbot and voice assistant development • Data analysis and machine learning."
      },
      design: {
        title: "UI/UX Design",
        description: "• Website and application design • Corporate identity development • Interface prototyping and testing."
      },
      consulting: {
        title: "Consulting & Training",
        description: "• IT consulting for digital transformation • Programming and cybersecurity training."
      },
      title: "Our Services",
      description: "We offer a wide range of services to meet your needs.",
    },
    contact: {
      title: "Get in Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Thanks for your message! I'll get back to you soon.",
    },
    footer: {
      rights: "© 2024 Name. All rights reserved.",
      terms: "Terms of Service",
      privacy: "Privacy",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      projects: "Проекты",
      contact: "Контакты",
      resume: "Резюме",
    },
    hero: {
      title: "Full Stack Разработчик",
      description:"Мы предлагаем передовые технологические решения, которые способствуют росту бизнеса и цифровой трансформации.",
    },
    projects: {
      title: "Проекты",
      viewOnGithub: "Смотреть на GitHub",
    },
    techStack: {
      title: "Технологии",
    },
    contact: {
      title: "Связаться с нами",
      name: "Имя",
      email: "Email",
      message: "Сообщение",
      send: "Отправить",
      sending: "Отправка...",
      success: "Спасибо за сообщение! Я свяжусь с вами в ближайшее время.",
    },
    footer: {
      rights: "© 2024 John.dev. Все права защищены.",
      terms: "Условия использования",
      privacy: "Конфиденциальность",
    },
    services: {
      sectionTitle: "Наши Услуги",
      software: {
        title: "Разработка ПО и веб-сервисов",
        description: "• Разработка веб-сайтов (лендинги, корпоративные сайты, интернет-магазины) • Разработка мобильных приложений (iOS, Android)."
      },
      security: {
        title: "Кибербезопасность",
        description: "• Аудит и тестирование на уязвимости (pentest) • Настройка и защита серверов."
      },
      support: {
        title: "Техническая поддержка и администрирование",
        description: "• Настройка и поддержка сетей • Внедрение и настройка систем видеонаблюдения • Поддержка сайтов и приложений."
      },
      ai: {
        title: "Искусственный интеллект и автоматизация",
        description: "• Автоматизация бизнес-процессов с помощью AI • Разработка чат-ботов и голосовых ассистентов • Анализ данных и машинное обучение."
      },
      design: {
        title: "UI/UX-дизайн",
        description: "• Разработка дизайна для сайтов и приложений • Разработка фирменного стиля • Прототипирование и тестирование интерфейсов."
      },
      consulting: {
        title: "Консалтинг и обучение",
        description: "• IT-консалтинг по цифровой трансформации • Обучение программированию и кибербезопасности."
      }
    },
  },
}

export type Language = keyof typeof translations

