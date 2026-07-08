import { StudentWelcomeData, Pillar, NavigationStep } from "../types";

export interface LocaleContent {
  header: {
    university: string;
    experience: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    button: string;
    scrollIndicator: string;
  };
  journey: {
    chapter: string;
    eyebrow: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    words: string[];
  };
  experience: {
    chapter: string;
    eyebrow: string;
    title: string;
    pillars: Pillar[];
  };
  preparation: {
    chapter: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    instruction: string;
  };
  envelope: {
    label: string;
    university: string;
    clickToOpen: string;
    loading: string;
    audioToggle: string;
    audioOn: string;
    audioOff: string;
  };
  letter: {
    university: string;
    salutationDefault: string;
    salutationPersonalized: (name: string) => string;
    paragraphs: string[];
    welcomePhrase: string;
    signatureTitle: string;
    signees: {
      role: string;
      name: string;
    }[];
  };
  postLetter: {
    title: string;
    subtitle: string;
    btnContinue: string;
    btnReopen: string;
  };
  steps: {
    chapter: string;
    title: string;
    subtitle: string;
    items: NavigationStep[];
  };
  manifesto: {
    chapter: string;
    title: string;
    subtitle: string;
    welcomePhrase: string;
    university: string;
  };
  footer: {
    allRightsReserved: string;
    officialWebsite: string;
    privacyPolicy: string;
    contact: string;
  };
}

export const locales: Record<"pt" | "en" | "es", LocaleContent> = {
  pt: {
    header: {
      university: "FLORIDA UNIVERSITY OF SCIENCE AND THEOLOGY",
      experience: "CERIMÔNIA DE BOAS-VINDAS",
    },
    hero: {
      eyebrow: "FLORIDA UNIVERSITY OF SCIENCE AND THEOLOGY",
      title: "Seu próximo capítulo começa aqui.",
      subtitle: "Hoje você inicia mais do que uma nova etapa acadêmica. Inicia uma jornada de conhecimento, propósito e transformação.",
      button: "Começar minha jornada",
      scrollIndicator: "Continue para começar",
    },
    journey: {
      chapter: "01 — COMEÇO",
      eyebrow: "UMA NOVA JORNADA",
      title: "A partir de hoje, você faz parte de algo maior.",
      paragraph1: "Ingressar na FUST significa fazer parte de uma comunidade acadêmica internacional dedicada ao conhecimento, à reflexão e à transformação da sociedade.",
      paragraph2: "Aqui, cada aula, cada descoberta e cada desafio fará parte da construção da sua própria história.",
      words: ["Conhecimento", "Propósito", "Descoberta", "Transformação"],
    },
    experience: {
      chapter: "02 — DESCOBERTA",
      eyebrow: "O QUE VOCÊ ENCONTRARÁ",
      title: "O que você encontrará nesta jornada",
      pillars: [
        {
          number: "I",
          title: "Conhecimento que transforma",
          description: "Uma formação acadêmica que estimula o pensamento crítico, a pesquisa e a compreensão dos grandes desafios do nosso tempo.",
        },
        {
          number: "II",
          title: "Uma comunidade internacional",
          description: "Você fará parte de uma comunidade conectada por diferentes histórias, culturas e perspectivas, unidas pelo desejo de aprender e transformar.",
        },
        {
          number: "III",
          title: "Ciência, fé e sabedoria",
          description: "Uma jornada acadêmica construída sobre o diálogo entre conhecimento, propósito e os valores que ajudam a formar líderes preparados para o futuro.",
        },
      ],
    },
    preparation: {
      chapter: "03 — PERTENCIMENTO",
      eyebrow: "ANTES DE CONTINUAR",
      title: "Há uma mensagem esperando por você.",
      subtitle: "Preparamos algo especial para marcar o início da sua jornada na FUST.",
      instruction: "Abra sua carta de boas-vindas.",
    },
    envelope: {
      label: "Uma mensagem para você",
      university: "Florida University of Science and Theology",
      clickToOpen: "Clique para abrir",
      loading: "Abrindo envelope...",
      audioToggle: "Ativar experiência sonora",
      audioOn: "Áudio: Ligado",
      audioOff: "Áudio: Desligado",
    },
    letter: {
      university: "FLORIDA UNIVERSITY OF SCIENCE AND THEOLOGY",
      salutationDefault: "Caro(a) estudante,",
      salutationPersonalized: (name: string) => `Caro(a) ${name},`,
      paragraphs: [
        "É com grande alegria que damos as boas-vindas a você na Florida University of Science and Theology.",
        "Hoje marca o início de uma nova jornada em sua vida acadêmica e pessoal. Ao ingressar na FUST, você passa a fazer parte de uma comunidade internacional dedicada ao conhecimento, à reflexão e à transformação do mundo por meio da educação.",
        "Nossa universidade nasceu com um propósito claro: unir ciência, fé e sabedoria para formar líderes preparados para enfrentar os desafios da sociedade moderna.",
        "Aqui, você encontrará mais do que cursos e disciplinas. Encontrará um ambiente de crescimento, diálogo e descoberta, onde cada estudante é encorajado a desenvolver seu potencial intelectual, espiritual e humano.",
        "Esperamos que esta jornada seja marcada por aprendizado profundo, novas amizades e conquistas significativas.",
        "Que este seja apenas o primeiro capítulo de uma história extraordinária.",
      ],
      welcomePhrase: "Seja muito bem-vindo(a) à FUST.",
      signatureTitle: "Florida University of Science and Theology",
      signees: [
        { name: "Dr. Arthur Pendelton", role: "Presidente" },
        { name: "Dra. Clarice Vance", role: "Reitora Acadêmica" },
      ],
    },
    postLetter: {
      title: "Sua jornada começa agora.",
      subtitle: "A partir deste momento, novos conhecimentos, desafios e conquistas farão parte da sua história.",
      btnContinue: "Continuar minha jornada",
      btnReopen: "Ler novamente",
    },
    steps: {
      chapter: "04 — BOAS-VINDAS",
      title: "Seus primeiros passos",
      subtitle: "Tudo o que você precisa para começar sua jornada acadêmica com segurança.",
      items: [
        {
          id: "step-1",
          number: "01",
          title: "Conheça seu ambiente acadêmico",
          description: "Explore as ferramentas, plataformas e recursos que farão parte da sua rotina de estudos.",
          buttonText: "Acessar ambiente acadêmico",
          link: "https://canvas.fust.edu",
        },
        {
          id: "step-2",
          number: "02",
          title: "Organize sua jornada",
          description: "Confira suas informações acadêmicas, calendário e orientações iniciais.",
          buttonText: "Ver orientações",
          link: "https://fust.edu/orientations",
        },
        {
          id: "step-3",
          number: "03",
          title: "Conecte-se com a FUST",
          description: "Conheça nossos canais oficiais de comunicação e suporte.",
          buttonText: "Conhecer canais oficiais",
          link: "https://fust.edu/contact",
        },
      ],
    },
    manifesto: {
      chapter: "05 — JORNADA",
      title: "Grandes jornadas começam com um primeiro passo.",
      subtitle: "Hoje, esse passo foi dado.",
      welcomePhrase: "Bem-vindo(a) à FUST.",
      university: "Florida University of Science and Theology",
    },
    footer: {
      allRightsReserved: "© 2026 Florida University of Science and Theology. Todos os direitos reservados.",
      officialWebsite: "Website Oficial",
      privacyPolicy: "Política de Privacidade",
      contact: "Contato de Suporte",
    },
  },
  en: {
    header: {
      university: "FLORIDA UNIVERSITY OF SCIENCE AND THEOLOGY",
      experience: "WELCOME CEREMONY",
    },
    hero: {
      eyebrow: "FLORIDA UNIVERSITY OF SCIENCE AND THEOLOGY",
      title: "Your next chapter begins here.",
      subtitle: "Today you begin more than a new academic stage. You start a journey of knowledge, purpose, and transformation.",
      button: "Begin my journey",
      scrollIndicator: "Continue to begin",
    },
    journey: {
      chapter: "01 — BEGIN",
      eyebrow: "A NEW JOURNEY",
      title: "From today, you are part of something bigger.",
      paragraph1: "Joining FUST means becoming part of an international academic community dedicated to knowledge, reflection, and the transformation of society.",
      paragraph2: "Here, every class, every discovery, and every challenge will be part of building your own history.",
      words: ["Knowledge", "Purpose", "Discovery", "Transformation"],
    },
    experience: {
      chapter: "02 — DISCOVER",
      eyebrow: "WHAT YOU WILL FIND",
      title: "What you will find in this journey",
      pillars: [
        {
          number: "I",
          title: "Knowledge that transforms",
          description: "An academic education that stimulates critical thinking, research, and understanding of the great challenges of our time.",
        },
        {
          number: "II",
          title: "An international community",
          description: "You will be part of a community connected by different histories, cultures, and perspectives, united by the desire to learn and transform.",
        },
        {
          number: "III",
          title: "Science, faith and wisdom",
          description: "An academic journey built on the dialogue between knowledge, purpose, and the values that help shape leaders prepared for the future.",
        },
      ],
    },
    preparation: {
      chapter: "03 — BELONG",
      eyebrow: "BEFORE YOU CONTINUE",
      title: "There is a message waiting for you.",
      subtitle: "We have prepared something special to mark the beginning of your journey at FUST.",
      instruction: "Open your welcome letter.",
    },
    envelope: {
      label: "A message for you",
      university: "Florida University of Science and Theology",
      clickToOpen: "Click to open",
      loading: "Opening envelope...",
      audioToggle: "Enable sound experience",
      audioOn: "Audio: On",
      audioOff: "Audio: Off",
    },
    letter: {
      university: "FLORIDA UNIVERSITY OF SCIENCE AND THEOLOGY",
      salutationDefault: "Dear student,",
      salutationPersonalized: (name: string) => `Dear ${name},`,
      paragraphs: [
        "It is with great joy that we welcome you to the Florida University of Science and Theology.",
        "Today marks the beginning of a new journey in your academic and personal life. By joining FUST, you become part of an international community dedicated to knowledge, reflection, and the transformation of the world through education.",
        "Our university was born with a clear purpose: to unite science, faith, and wisdom to form leaders prepared to face the challenges of modern society.",
        "Here, you will find more than courses and subjects. You will find an environment of growth, dialogue, and discovery, where every student is encouraged to develop their intellectual, spiritual, and human potential.",
        "We hope that this journey is marked by deep learning, new friendships, and significant achievements.",
        "May this be just the first chapter of an extraordinary story.",
      ],
      welcomePhrase: "Welcome to FUST.",
      signatureTitle: "Florida University of Science and Theology",
      signees: [
        { name: "Dr. Arthur Pendelton", role: "President" },
        { name: "Dr. Clarice Vance", role: "Academic Dean" },
      ],
    },
    postLetter: {
      title: "Your journey starts now.",
      subtitle: "From this moment on, new knowledge, challenges, and achievements will be part of your story.",
      btnContinue: "Continue my journey",
      btnReopen: "Read again",
    },
    steps: {
      chapter: "04 — WELCOME",
      title: "Your first steps",
      subtitle: "Everything you need to start your academic journey safely.",
      items: [
        {
          id: "step-1",
          number: "01",
          title: "Get to know your academic portal",
          description: "Explore the tools, platforms, and resources that will be part of your study routine.",
          buttonText: "Access academic portal",
          link: "https://canvas.fust.edu",
        },
        {
          id: "step-2",
          number: "02",
          title: "Organize your route",
          description: "Check your academic details, calendar, and initial guidelines.",
          buttonText: "See guidelines",
          link: "https://fust.edu/orientations",
        },
        {
          id: "step-3",
          number: "03",
          title: "Connect with FUST",
          description: "Find our official communication and support channels.",
          buttonText: "Explore channels",
          link: "https://fust.edu/contact",
        },
      ],
    },
    manifesto: {
      chapter: "05 — ROUTE",
      title: "Great journeys begin with a single step.",
      subtitle: "Today, that step was taken.",
      welcomePhrase: "Welcome to FUST.",
      university: "Florida University of Science and Theology",
    },
    footer: {
      allRightsReserved: "© 2026 Florida University of Science and Theology. All rights reserved.",
      officialWebsite: "Official Website",
      privacyPolicy: "Privacy Policy",
      contact: "Support Contact",
    },
  },
  es: {
    header: {
      university: "FLORIDA UNIVERSITY OF SCIENCE AND THEOLOGY",
      experience: "CEREMONIA DE BIENVENIDA",
    },
    hero: {
      eyebrow: "FLORIDA UNIVERSITY OF SCIENCE AND THEOLOGY",
      title: "Su próximo capítulo comienza aquí.",
      subtitle: "Hoy comienza más que una nueva etapa académica. Comienza un viaje de conocimiento, propósito y transformación.",
      button: "Comenzar mi viaje",
      scrollIndicator: "Continúe para comenzar",
    },
    journey: {
      chapter: "01 — COMIENZO",
      eyebrow: "UN NUEVO VIAJE",
      title: "A partir de hoy, usted forma parte de algo más grande.",
      paragraph1: "Ingresar a la FUST significa formar parte de una comunidad académica internacional dedicada al conocimiento, la reflexión y la transformación de la sociedad.",
      paragraph2: "Aquí, cada clase, cada descubrimiento y cada desafío formará parte de la construcción de su propia historia.",
      words: ["Conocimiento", "Propósito", "Descubrimiento", "Transformación"],
    },
    experience: {
      chapter: "02 — DESCUBRIMIENTO",
      eyebrow: "LO QUE ENCONTRARÁ",
      title: "Lo que encontrará en este viaje",
      pillars: [
        {
          number: "I",
          title: "Conocimiento que transforma",
          description: "Una formación académica que estimula el pensamiento crítico, la investigación y la comprensión de los grandes desafíos de nuestro tiempo.",
        },
        {
          number: "II",
          title: "Una comunidad internacional",
          description: "Formará parte de una comunidad conectada por diferentes historias, culturas y perspectivas, unidas por el deseo de aprender y transformar.",
        },
        {
          number: "III",
          title: "Ciencia, fe y sabiduría",
          description: "Un viaje académico construido sobre el diálogo entre conocimiento, propósito y los valores que ayudan a formar líderes preparados para el futuro.",
        },
      ],
    },
    preparation: {
      chapter: "03 — PERTENENCIA",
      eyebrow: "ANTES DE CONTINUAR",
      title: "Hay un mensaje esperando por usted.",
      subtitle: "Preparamos algo especial para marcar el inicio de su viaje en la FUST.",
      instruction: "Abra su carta de bienvenida.",
    },
    envelope: {
      label: "Un mensaje para usted",
      university: "Florida University of Science and Theology",
      clickToOpen: "Presione para abrir",
      loading: "Abriendo sobre...",
      audioToggle: "Activar experiencia sonora",
      audioOn: "Audio: Encendido",
      audioOff: "Audio: Apagado",
    },
    letter: {
      university: "FLORIDA UNIVERSITY OF SCIENCE AND THEOLOGY",
      salutationDefault: "Estimado(a) estudiante,",
      salutationPersonalized: (name: string) => `Estimado(a) ${name},`,
      paragraphs: [
        "Es con gran alegría que le damos la bienvenida a la Florida University of Science and Theology.",
        "Hoy marca el comienzo de un nuevo viaje en su vida académica y personal. Al ingresar a la FUST, usted pasa a formar parte de una comunidad internacional dedicada al conocimiento, la reflexión y la transformación del mundo a través de la educación.",
        "Nuestra universidad nació con un propósito claro: unir ciencia, fe y sabiduría para formar líderes preparados para enfrentar los desafíos de la sociedad moderna.",
        "Aquí encontrará más que cursos y materias. Encontrará un ambiente de crecimiento, diálogo y descubrimiento, donde cada estudiante es alentado a desarrollar su potencial intelectual, espiritual y humano.",
        "Esperamos que este viaje esté marcado por un aprendizaje profundo, nuevas amistades y logros significativos.",
        "Que este sea solo el primer capítulo de una historia extraordinaria.",
      ],
      welcomePhrase: "Bienvenido(a) a la FUST.",
      signatureTitle: "Florida University of Science and Theology",
      signees: [
        { name: "Dr. Arthur Pendelton", role: "Presidente" },
        { name: "Dra. Clarice Vance", role: "Decana Académica" },
      ],
    },
    postLetter: {
      title: "Su viaje comienza ahora.",
      subtitle: "A partir de este momento, nuevos conocimientos, desafíos y logros formarán parte de su historia.",
      btnContinue: "Continuar mi viaje",
      btnReopen: "Leer nuevamente",
    },
    steps: {
      chapter: "04 — BIENVENIDA",
      title: "Sus primeros pasos",
      subtitle: "Todo lo que necesita para comenzar su viaje académico con seguridad.",
      items: [
        {
          id: "step-1",
          number: "01",
          title: "Conozca su portal académico",
          description: "Explore las herramientas, plataformas y recursos que formarán parte de su rutina de estudio.",
          buttonText: "Acceder al portal académico",
          link: "https://canvas.fust.edu",
        },
        {
          id: "step-2",
          number: "02",
          title: "Organice su trayecto",
          description: "Consulte sus datos académicos, calendario y orientaciones iniciales.",
          buttonText: "Ver orientaciones",
          link: "https://fust.edu/orientations",
        },
        {
          id: "step-3",
          number: "03",
          title: "Conéctese con la FUST",
          description: "Conozca nuestros canales oficiales de comunicación y soporte.",
          buttonText: "Explorar canales",
          link: "https://fust.edu/contact",
        },
      ],
    },
    manifesto: {
      chapter: "05 — TRAYECTO",
      title: "Los grandes viajes comienzan con un primer paso.",
      subtitle: "Hoy, ese paso ha sido dado.",
      welcomePhrase: "Bienvenido(a) a la FUST.",
      university: "Florida University of Science and Theology",
    },
    footer: {
      allRightsReserved: "© 2026 Florida University of Science and Theology. Todos los derechos reservados.",
      officialWebsite: "Sitio Web Oficial",
      privacyPolicy: "Política de Privacidad",
      contact: "Contacto de Soporte",
    },
  },
};
