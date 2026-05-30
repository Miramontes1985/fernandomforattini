export type Locale = "en" | "pt";

type LocalizedText = Record<Locale, string>;

type PublicationItem = {
  meta: LocalizedText;
  citation: LocalizedText;
  featured?: boolean;
};

type PublicationSection = {
  id: string;
  kicker: LocalizedText;
  title: LocalizedText;
  intro: LocalizedText;
  items: PublicationItem[];
  note?: LocalizedText;
};

export const publicationSections: PublicationSection[] = [
  {
    id: "governance",
    kicker: {
      en: "Research line 01",
      pt: "Linha de pesquisa 01",
    },
    title: {
      en: "Governance, corruption, and institutional transformation",
      pt: "Governança, corrupção e transformação institucional",
    },
    intro: {
      en: "Work on corruption, institutional reform, state capacity, public services, opacity, and governance failures.",
      pt: "Trabalhos sobre corrupção, reformas institucionais, capacidade estatal, serviços públicos, opacidade e falhas de governança.",
    },
    items: [
      {
        featured: true,
        meta: {
          en: "Book chapter · Cambridge University Press · 2026",
          pt: "Capítulo de livro · Cambridge University Press · 2026",
        },
        citation: {
          en: "Forattini, F. M. (2026). The contingency of mobilization: The social contexts of Operation Lava Jato in Brazil. In A comparative historical sociology of corruption (pp. 214-230). Cambridge University Press.",
          pt: "Forattini, F. M. (2026). The contingency of mobilization: The social contexts of Operation Lava Jato in Brazil. In A comparative historical sociology of corruption (pp. 214-230). Cambridge University Press.",
        },
      },
      {
        meta: {
          en: "Article · American Behavioral Scientist · 2026",
          pt: "Artigo · American Behavioral Scientist · 2026",
        },
        citation: {
          en: "Forattini, F. (2026). Beyond “best practices”: A historical-sociological critique of privatization, decentralization, and anti-corruption reforms in 1990s Brazil. American Behavioral Scientist.",
          pt: "Forattini, F. (2026). Beyond “best practices”: A historical-sociological critique of privatization, decentralization, and anti-corruption reforms in 1990s Brazil. American Behavioral Scientist.",
        },
      },
      {
        meta: {
          en: "Article · Journal of Interdisciplinary History / MIT Press · 2026",
          pt: "Artigo · Journal of Interdisciplinary History / MIT Press · 2026",
        },
        citation: {
          en: "Forattini, F. (2026). The rise and evolution of anti-corruption impulses in the United States and Brazil. Journal of Interdisciplinary History. MIT Press.",
          pt: "Forattini, F. (2026). The rise and evolution of anti-corruption impulses in the United States and Brazil. Journal of Interdisciplinary History. MIT Press.",
        },
      },
      {
        meta: {
          en: "Book chapter · Palgrave Macmillan · 2026",
          pt: "Capítulo de livro · Palgrave Macmillan · 2026",
        },
        citation: {
          en: "Forattini, F., Gillanders, R., Connolly, R., & Aja-Eke, D. (2026). Fighting sexual corruption in public services: Lessons from women’s experiences in Brazil. In Anti-Corruption Policy for Female Empowerment and Gender Equality. Palgrave Macmillan.",
          pt: "Forattini, F., Gillanders, R., Connolly, R., & Aja-Eke, D. (2026). Fighting sexual corruption in public services: Lessons from women’s experiences in Brazil. In Anti-Corruption Policy for Female Empowerment and Gender Equality. Palgrave Macmillan.",
        },
      },
      {
        meta: {
          en: "Book chapter · Routledge · 2026",
          pt: "Capítulo de livro · Routledge · 2026",
        },
        citation: {
          en: "Connolly, R., Forattini, F., & Gillanders, R. (2026). Corruption and SDG 11: Sustainable cities and communities. In R. Gillanders & C. K. Jha (Eds.), Corruption and the Sustainable Development Goals. Routledge.",
          pt: "Connolly, R., Forattini, F., & Gillanders, R. (2026). Corruption and SDG 11: Sustainable cities and communities. In R. Gillanders & C. K. Jha (Eds.), Corruption and the Sustainable Development Goals. Routledge.",
        },
      },
      {
        meta: {
          en: "Article · Journal of Public Governance and Policy · 2024",
          pt: "Artigo · Journal of Public Governance and Policy · 2024",
        },
        citation: {
          en: "Forattini, F. M. (2024). Corruption consolidation in local governments: Networks, opacity, and governance failures. Journal of Public Governance and Policy: Latin American Review, 91-113.",
          pt: "Forattini, F. M. (2024). Corruption consolidation in local governments: Networks, opacity, and governance failures. Journal of Public Governance and Policy: Latin American Review, 91-113.",
        },
      },
      {
        meta: {
          en: "Submitted article · Public Administration",
          pt: "Artigo submetido · Public Administration",
        },
        citation: {
          en: "Forattini, F., Gillanders, R., & Connolly, R. (submitted). Anticipatory deterrence and sexual corruption in public services: Silence, withdrawal, inequality. Public Administration.",
          pt: "Forattini, F., Gillanders, R., & Connolly, R. (submetido). Anticipatory deterrence and sexual corruption in public services: Silence, withdrawal, inequality. Public Administration.",
        },
      },
    ],
  },
  {
    id: "classification",
    kicker: {
      en: "Research line 02",
      pt: "Linha de pesquisa 02",
    },
    title: {
      en: "Inequality, identity, and social classification",
      pt: "Desigualdade, identidade e classificação social",
    },
    intro: {
      en: "Work on racial categories, Indigenous recognition, inequality, social data, vulnerability, and environmental politics.",
      pt: "Trabalhos sobre categorias raciais, reconhecimento indígena, desigualdade, dados sociais, vulnerabilidade e política ambiental.",
    },
    items: [
      {
        featured: true,
        meta: {
          en: "Book chapter · Oxford University Press · 2026",
          pt: "Capítulo de livro · Oxford University Press · 2026",
        },
        citation: {
          en: "Forattini, F., & Miranda Braga, B. (2026). The weight of the “pardo” category: Official statistics and the deracialization of Indigenous peoples. In Oxford Intersections: Racism by Context. Oxford University Press.",
          pt: "Forattini, F., & Miranda Braga, B. (2026). The weight of the “pardo” category: Official statistics and the deracialization of Indigenous peoples. In Oxford Intersections: Racism by Context. Oxford University Press.",
        },
      },
      {
        meta: {
          en: "Article · Cronos · 2023",
          pt: "Artigo · Cronos · 2023",
        },
        citation: {
          en: "Forattini, F. M., & Clarete, L. (2023). Production and reproduction of social inequalities related to COVID-19 expressed on social networks. Cronos, 24(1), 38-66.",
          pt: "Forattini, F. M., & Clarete, L. (2023). Produção e reprodução das desigualdades sociais relacionadas à COVID-19 expressas nas redes sociais. Cronos, 24(1), 38-66.",
        },
      },
      {
        meta: {
          en: "Article · European Review of Latin American and Caribbean Studies · 2020",
          pt: "Artigo · European Review of Latin American and Caribbean Studies · 2020",
        },
        citation: {
          en: "Forattini, F. (2020). Piripkura: The plight of Indigenous people, environment, and Brazilian identity. European Review of Latin American and Caribbean Studies, (110).",
          pt: "Forattini, F. (2020). Piripkura: The plight of Indigenous people, environment, and Brazilian identity. European Review of Latin American and Caribbean Studies, (110).",
        },
      },
      {
        meta: {
          en: "Under review · Leiden University Press",
          pt: "Em revisão · Leiden University Press",
        },
        citation: {
          en: "Forattini, F. (under review). Environmental warfare in the Brazilian Amazon: Militarized development and human and environmental destruction in Brazil. Leiden University Press.",
          pt: "Forattini, F. (em revisão). Environmental warfare in the Brazilian Amazon: Militarized development and human and environmental destruction in Brazil. Leiden University Press.",
        },
      },
    ],
  },
  {
    id: "technology",
    kicker: {
      en: "Research line 03",
      pt: "Linha de pesquisa 03",
    },
    title: {
      en: "Technology, society, and sociotechnical governance",
      pt: "Tecnologia, sociedade e governança sociotécnica",
    },
    intro: {
      en: "Work on responsible AI, digital public services, care ethics, gender-focused technology, sextortion, and information systems.",
      pt: "Trabalhos sobre IA responsável, serviços públicos digitais, ética do cuidado, tecnologia com foco em gênero, sextortion e sistemas de informação.",
    },
    items: [
      {
        featured: true,
        meta: {
          en: "Article · Information Systems Management · 2026",
          pt: "Artigo · Information Systems Management · 2026",
        },
        citation: {
          en: "Forattini, F., & Connolly, R. (2026). Prometheus ambition, Zeusian order: Why leaps in information systems require structurally aware ethical frameworks. Information Systems Management.",
          pt: "Forattini, F., & Connolly, R. (2026). Prometheus ambition, Zeusian order: Why leaps in information systems require structurally aware ethical frameworks. Information Systems Management.",
        },
      },
      {
        meta: {
          en: "Article · ACM SIGMIS Database · 2026",
          pt: "Artigo · ACM SIGMIS Database · 2026",
        },
        citation: {
          en: "Forattini, F., & Connolly, R. (2026). From design to policy: Embedding care ethics and STEM institutional insights in gender-focused technology. ACM SIGMIS Database: The DATABASE for Advances in Information Systems.",
          pt: "Forattini, F., & Connolly, R. (2026). From design to policy: Embedding care ethics and STEM institutional insights in gender-focused technology. ACM SIGMIS Database: The DATABASE for Advances in Information Systems.",
        },
      },
      {
        meta: {
          en: "Article · ACM SIGMIS Database · 2025",
          pt: "Artigo · ACM SIGMIS Database · 2025",
        },
        citation: {
          en: "Forattini, F., Connolly, R., & Joshi, K. D. (2025). Breaking boundaries: Advancing gender and technology research to combat sextortion. ACM SIGMIS Database: The DATABASE for Advances in Information Systems, 56(1).",
          pt: "Forattini, F., Connolly, R., & Joshi, K. D. (2025). Breaking boundaries: Advancing gender and technology research to combat sextortion. ACM SIGMIS Database: The DATABASE for Advances in Information Systems, 56(1).",
        },
      },
      {
        meta: {
          en: "Conference proceedings · HICSS · 2025",
          pt: "Anais de conferência · HICSS · 2025",
        },
        citation: {
          en: "Forattini, F. M. (2025). Gender-focused technology design and care ethics integration: Addressing social and practical challenges. In Proceedings of the 58th Hawaii International Conference on System Sciences.",
          pt: "Forattini, F. M. (2025). Gender-focused technology design and care ethics integration: Addressing social and practical challenges. In Proceedings of the 58th Hawaii International Conference on System Sciences.",
        },
      },
      {
        meta: {
          en: "Under review · European Journal of Information Systems",
          pt: "Em revisão · European Journal of Information Systems",
        },
        citation: {
          en: "Forattini, F., & Connolly, R. (under review). When Promethean leaps meet institutional power: Designing digital public services through a care-ethical lens. European Journal of Information Systems.",
          pt: "Forattini, F., & Connolly, R. (em revisão). When Promethean leaps meet institutional power: Designing digital public services through a care-ethical lens. European Journal of Information Systems.",
        },
      },
      {
        meta: {
          en: "Submitted conference paper · HICSS",
          pt: "Trabalho de conferência submetido · HICSS",
        },
        citation: {
          en: "Forattini, F., Connolly, R., & Almeida, J. (submitted). When stronger configurations are not enough: Auditing AI agents in gender-sensitive public service encounters. In 60th Hawaii International Conference on System Sciences.",
          pt: "Forattini, F., Connolly, R., & Almeida, J. (submetido). When stronger configurations are not enough: Auditing AI agents in gender-sensitive public service encounters. In 60th Hawaii International Conference on System Sciences.",
        },
      },
    ],
  },
  {
    id: "political-culture",
    kicker: {
      en: "Research line 04",
      pt: "Linha de pesquisa 04",
    },
    title: {
      en: "Political history, culture, and repertoires of contestation",
      pt: "História política, cultura e repertórios de contestação",
    },
    intro: {
      en: "Work on political culture, media, liberalism, cultural repertoires, humor, and the institutionalization of authoritarian power.",
      pt: "Trabalhos sobre cultura política, mídia, liberalismo, repertórios culturais, humor e institucionalização do poder autoritário.",
    },
    items: [
      {
        meta: {
          en: "Article · Projeto História · 2023",
          pt: "Artigo · Projeto História · 2023",
        },
        citation: {
          en: "Forattini, F., & Longhi, C. R. (2023). Liberty and liberalism: tensions and disputes in the context of the 1940 Brazilian Writers’ Congresses. Projeto História.",
          pt: "Forattini, F., & Longhi, C. R. (2023). Liberdade e liberalismo: tensões e disputas no contexto dos Congressos Brasileiros de Escritores de 1940. Projeto História.",
        },
      },
      {
        meta: {
          en: "Article · Domínios da Imagem · 2023",
          pt: "Artigo · Domínios da Imagem · 2023",
        },
        citation: {
          en: "Forattini, F., & Andreotti, B. (2023). Superman and Reagan’s conservative turn: A reflection on the heroic imaginary in United States political culture (1978-1986). Domínios da Imagem, 17(33).",
          pt: "Forattini, F., & Andreotti, B. (2023). Superman e a virada conservadora de Reagan: Uma reflexão sobre o imaginário heroico na cultura política dos Estados Unidos (1978-1986). Domínios da Imagem, 17(33).",
        },
      },
      {
        meta: {
          en: "Article · Letras & Letras · 2020",
          pt: "Artigo · Letras & Letras · 2020",
        },
        citation: {
          en: "Forattini, F. (2020). Humor in times of cholera: humor as a discourse of resistance to the coup. Letras & Letras.",
          pt: "Forattini, F. (2020). Humor em tempos de cólera: o humor como discurso de resistência ao golpe. Letras & Letras.",
        },
      },
      {
        meta: {
          en: "Article · Captura Críptica · 2020",
          pt: "Artigo · Captura Críptica · 2020",
        },
        citation: {
          en: "Forattini, F. (2020). The institutionalization of the 1964 coup through an analysis of Institutional Act No. 1 and the mainstream media. Captura Críptica.",
          pt: "Forattini, F. (2020). A institucionalização do golpe de 1964 por meio de uma análise do Ato Institucional nº 1 e da grande mídia. Captura Críptica.",
        },
      },
    ],
  },
];

export const bookSections: PublicationSection[] = [
  {
    id: "books",
    kicker: {
      en: "Books",
      pt: "Livros",
    },
    title: {
      en: "Books",
      pt: "Livros",
    },
    intro: {
      en: "Authored books listed in the CV.",
      pt: "Livros autorais listados no CV.",
    },
    note: {
      en: "These books are held in leading university and public libraries worldwide, including The British Library, U.S. Library of Congress, Yale, Harvard, Princeton, Stanford, among others.",
      pt: "Esses livros estão reconhecidos em importantes bibliotecas universitárias e públicas do mundo, incluindo The British Library, U.S. Library of Congress, Yale, Harvard, Princeton, Stanford, entre outras.",
    },
    items: [
      {
        meta: {
          en: "Book · Brazil Publishing · 2020",
          pt: "Livro · Brazil Publishing · 2020",
        },
        citation: {
          en: "Forattini, F. (2020). Demystifying the Castelo Branco government and its relationship with the mainstream media. Brazil Publishing.",
          pt: "Forattini, F. (2020). Desmistificando o governo Castelo Branco e sua relação com a grande mídia. Brazil Publishing.",
        },
      },
      {
        meta: {
          en: "Book · Ape’Ku · 2020",
          pt: "Livro · Ape’Ku · 2020",
        },
        citation: {
          en: "Forattini, F. (2020). It was a coup! Humor as resistance to the military coup and its legitimating discourses. Ape’Ku.",
          pt: "Forattini, F. (2020). Foi golpe! O humor como resistência ao golpe militar e seus discursos legitimadores. Ape’Ku.",
        },
      },
    ],
  },
  {
    id: "edited-books",
    kicker: {
      en: "Edited books",
      pt: "Organização de livros",
    },
    title: {
      en: "Edited books",
      pt: "Organização de livros",
    },
    intro: {
      en: "Edited volumes listed in the CV.",
      pt: "Coletâneas organizadas listadas no CV.",
    },
    items: [
      {
        meta: {
          en: "Edited book · Bordô-Grená · 2021",
          pt: "Livro organizado · Bordô-Grená · 2021",
        },
        citation: {
          en: "Forattini, F. (Ed.). (2021). Essays on corruption. Bordô-Grená.",
          pt: "Forattini, F. (Ed.). (2021). Ensaios sobre corrupção. Bordô-Grená.",
        },
      },
      {
        meta: {
          en: "Edited book · Brazil Publishing · 2020",
          pt: "Livro organizado · Brazil Publishing · 2020",
        },
        citation: {
          en: "Forattini, F. (Ed.). (2020). Corruption: what it is, how it affects us, and ways to fight it. Brazil Publishing.",
          pt: "Forattini, F. (Ed.). (2020). Corrupção: o que é, como nos afeta e formas de combatê-la. Brazil Publishing.",
        },
      },
    ],
  },
];

export const allPublicationSections = [...publicationSections, ...bookSections];
