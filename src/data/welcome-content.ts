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

export const locales: Record<"pt" | "en" | "fr", LocaleContent> = {
  pt: {
    header: {
      university: "France UNIVERSITY OF SCIENCE AND THEOLOGY",
      experience: "CERIMÔNIA DE BOAS-VINDAS",
    },
    hero: {
      eyebrow: "France UNIVERSITY OF SCIENCE AND THEOLOGY",
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
      university: "France University of Science and Theology",
      clickToOpen: "Clique para abrir",
      loading: "Abrindo envelope...",
      audioToggle: "Ativar experiência sonora",
      audioOn: "Áudio: Ligado",
      audioOff: "Áudio: Desligado",
    },
    letter: {
      university: "France UNIVERSITY OF SCIENCE AND THEOLOGY",
      salutationDefault: "Caro(a) estudante,",
      salutationPersonalized: (name: string) => `Caro(a) ${name},`,
      paragraphs: [
        "É com grande alegria que damos as boas-vindas a você na France University of Science and Theology.",
        "Hoje marca o início de uma nova jornada em sua vida acadêmica e pessoal. Ao ingressar na FUST, você passa a fazer parte de uma comunidade internacional dedicada ao conhecimento, à reflexão e à transformação do mundo por meio da educação.",
        "Nossa universidade nasceu com um propósito claro: unir ciência, fé e sabedoria para formar líderes preparados para enfrentar os desafios da sociedade moderna.",
        "Aqui, você encontrará mais do que cursos e disciplinas. Encontrará um ambiente de crescimento, diálogo e descoberta, onde cada estudante é encorajado a desenvolver seu potencial intelectual, espiritual e humano.",
        "Esperamos que esta jornada seja marcada por aprendizado profundo, novas amizades e conquistas significativas.",
        "Que este seja apenas o primeiro capítulo de uma história extraordinária.",
      ],
      welcomePhrase: "Seja muito bem-vindo(a) à FUST.",
      signatureTitle: "France University of Science and Theology",
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
      university: "France University of Science and Theology",
    },
    footer: {
      allRightsReserved: "© 2026 France University of Science and Theology. Todos os direitos reservados.",
      officialWebsite: "Website Oficial",
      privacyPolicy: "Política de Privacidade",
      contact: "Contato de Suporte",
    },
  },
  en: {
    header: {
      university: "France UNIVERSITY OF SCIENCE AND THEOLOGY",
      experience: "WELCOME CEREMONY",
    },
    hero: {
      eyebrow: "France UNIVERSITY OF SCIENCE AND THEOLOGY",
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
      university: "France University of Science and Theology",
      clickToOpen: "Click to open",
      loading: "Opening envelope...",
      audioToggle: "Enable sound experience",
      audioOn: "Audio: On",
      audioOff: "Audio: Off",
    },
    letter: {
      university: "France UNIVERSITY OF SCIENCE AND THEOLOGY",
      salutationDefault: "Dear student,",
      salutationPersonalized: (name: string) => `Dear ${name},`,
      paragraphs: [
        "It is with great joy that we welcome you to the France University of Science and Theology.",
        "Today marks the beginning of a new journey in your academic and personal life. By joining FUST, you become part of an international community dedicated to knowledge, reflection, and the transformation of the world through education.",
        "Our university was born with a clear purpose: to unite science, faith, and wisdom to form leaders prepared to face the challenges of modern society.",
        "Here, you will find more than courses and subjects. You will find an environment of growth, dialogue, and discovery, where every student is encouraged to develop their intellectual, spiritual, and human potential.",
        "We hope that this journey is marked by deep learning, new friendships, and significant achievements.",
        "May this be just the first chapter of an extraordinary story.",
      ],
      welcomePhrase: "Welcome to FUST.",
      signatureTitle: "France University of Science and Theology",
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
      university: "France University of Science and Theology",
    },
    footer: {
      allRightsReserved: "© 2026 France University of Science and Theology. All rights reserved.",
      officialWebsite: "Official Website",
      privacyPolicy: "Privacy Policy",
      contact: "Support Contact",
    },
  },
  fr: {
    header: {
      university: "FRANCE UNIVERSITY OF SCIENCE AND THEOLOGY",
      experience: "CÉRÉMONIE DE BIENVENUE",
    },
    hero: {
      eyebrow: "FRANCE UNIVERSITY OF SCIENCE AND THEOLOGY",
      title: "Votre prochain chapitre commence ici.",
      subtitle: "Aujourd'hui, vous commencez bien plus qu'une nouvelle étape académique. Vous commencez un voyage de connaissances, d'objectifs et de transformation.",
      button: "Commencer mon voyage",
      scrollIndicator: "Continuez pour commencer",
    },
    journey: {
      chapter: "01 — COMMENCEMENT",
      eyebrow: "UN NOUVEAU VOYAGE",
      title: "À partir d'aujourd'hui, vous faites partie de quelque chose de plus grand.",
      paragraph1: "Rejoindre FUST, c'est intégrer une communauté académique internationale dédiée à la connaissance, à la réflexion et à la transformation de la société.",
      paragraph2: "Ici, chaque cours, chaque découverte et chaque défi fera partie de la construction de votre propre histoire.",
      words: ["Connaissance", "Objectif", "Découverte", "Transformation"],
    },
    experience: {
      chapter: "02 — DÉCOUVERTE",
      eyebrow: "CE QUE VOUS TROUVEREZ",
      title: "Ce que vous trouverez dans ce voyage",
      pillars: [
        {
          number: "I",
          title: "Une connaissance qui transforme",
          description: "Une formation académique qui stimule la pensée critique, la recherche et la compréhension des grands défis de notre époque.",
        },
        {
          number: "II",
          title: "Une communauté internationale",
          description: "Vous ferez partie d'une communauté connectée par différentes histoires, cultures et perspectives, unies par le désir d'apprendre et de transformer.",
        },
        {
          number: "III",
          title: "Science, foi et sagesse",
          description: "Un parcours académique construit sur le dialogue entre la connaissance, l'objectif et les valeurs qui aident à former des leaders préparés pour l'avenir.",
        },
      ],
    },
    preparation: {
      chapter: "03 — APPARTENANCE",
      eyebrow: "AVANT DE CONTINUER",
      title: "Il y a un message qui vous attend.",
      subtitle: "Nous avons préparé quelque chose de spécial pour marquer le début de votre voyage à FUST.",
      instruction: "Ouvrez votre lettre de bienvenue.",
    },
    envelope: {
      label: "Un message pour vous",
      university: "France University of Science and Theology",
      clickToOpen: "Cliquez pour ouvrir",
      loading: "Ouverture de l'enveloppe...",
      audioToggle: "Activer l'expérience sonore",
      audioOn: "Audio : Activé",
      audioOff: "Audio : Désactivé",
    },
    letter: {
      university: "FRANCE UNIVERSITY OF SCIENCE AND THEOLOGY",
      salutationDefault: "Cher(e) étudiant(e),",
      salutationPersonalized: (name: string) => `Cher(e) ${name},`,
      paragraphs: [
        "C'est avec une grande joie que nous vous accueillons à la France University of Science and Theology.",
        "Aujourd'hui marque le début d'un nouveau voyage dans votre vie académique et personnelle. En rejoignant FUST, vous faites partie d'une communauté internationale dédiée à la connaissance, à la réflexion et à la transformation du monde par l'éducation.",
        "Notre université est née avec un objectif clair : unir la science, la foi et la sagesse pour former des leaders préparés à affronter les défis de la société moderne.",
        "Ici, vous trouverez plus que des cours et des matières. Vous trouverez un environnement de croissance, de dialogue et de découverte, où chaque étudiant est encouragé à développer son potentiel intellectuel, spirituel et humain.",
        "Nous espérons que ce voyage sera marqué par un apprentissage profond, de nouvelles amitiés et des réalisations significatives.",
        "Que cela ne soit que le premier chapitre d'une histoire extraordinaire.",
      ],
      welcomePhrase: "Bienvenue à FUST.",
      signatureTitle: "France University of Science and Theology",
      signees: [
        { name: "Dr. Arthur Pendelton", role: "Président" },
        { name: "Dre. Clarice Vance", role: "Doyenne Académique" },
      ],
    },
    postLetter: {
      title: "Votre voyage commence maintenant.",
      subtitle: "À partir de ce moment, de nouvelles connaissances, défis et réalisations feront partie de votre histoire.",
      btnContinue: "Continuer mon voyage",
      btnReopen: "Lire à nouveau",
    },
    steps: {
      chapter: "04 — BIENVENUE",
      title: "Vos premiers pas",
      subtitle: "Tout ce dont vous avez besoin pour commencer votre parcours académique en toute sécurité.",
      items: [
        {
          id: "step-1",
          number: "01",
          title: "Découvrez votre portail académique",
          description: "Explorez les outils, plateformes et ressources qui feront partie de votre routine d'étude.",
          buttonText: "Accéder au portail académique",
          link: "https://canvas.fust.edu",
        },
        {
          id: "step-2",
          number: "02",
          title: "Organisez votre parcours",
          description: "Consultez vos données académiques, votre calendrier et les orientations initiales.",
          buttonText: "Voir les orientations",
          link: "https://fust.edu/orientations",
        },
        {
          id: "step-3",
          number: "03",
          title: "Connectez-vous avec FUST",
          description: "Découvrez nos canaux de communication et d'assistance officiels.",
          buttonText: "Explorer les canaux",
          link: "https://fust.edu/contact",
        },
      ],
    },
    manifesto: {
      chapter: "05 — PARCOURS",
      title: "Les grands voyages commencent par un premier pas.",
      subtitle: "Aujourd'hui, ce pas a été franchi.",
      welcomePhrase: "Bienvenue à FUST.",
      university: "France University of Science and Theology",
    },
    footer: {
      allRightsReserved: "© 2026 France University of Science and Theology. Tous droits réservés.",
      officialWebsite: "Site Web Officiel",
      privacyPolicy: "Politique de Confidentialité",
      contact: "Contact d'Assistance",
    },
  },
};
