export const listItems = [
  {
    categoria: "Exercícios",
    itens: [
      {
        nome: "Membros Inferiores",
        itens: [
          { nome: "Leg Curl" },
          { nome: "Leg Extension" },
          { nome: "Agachamento Livre" },
          { nome: "Cadeira Abdutora" },
          { nome: "Cadeira Adutora" },
        ],
      },
      {
        nome: "Membros Superiores",
        itens: [
          {
            nome: "Peitoral",
            itens: [
              { nome: "Supino Reto com Halter" },
              { nome: "Supino Reto com Barra" },
              { nome: "Supino Inclinado com Halter" },
              { nome: "Crucifixo Inclinado" },
            ],
          },
          {
            nome: "Costas",
            itens: [
              { nome: "Puxada Frente" },
              { nome: "Remada Curvada" },
              { nome: "Remada Unilateral com Halter" },
            ],
          },
          {
            nome: "Ombros",
            itens: [
              { nome: "Desenvolvimento com Halter" },
              { nome: "Elevação Lateral" },
              { nome: "Elevação Frontal" },
            ],
          },
        ],
      },
      {
        nome: "Mobilidade e Aquecimento",
        itens: [
          { nome: "Mobilidade 90/90" },
          { nome: "Mobilidade com Elástico" },
          { nome: "Mobilidade com Bastão" },
          { nome: "Alongamento Dinâmico" },
        ],
      },
    ],
  },
  {
    categoria: "Grupos Musculares",
    itens: [
      {
        nome: "Membros Inferiores",
        itens: [
          { nome: "Quadríceps" },
          { nome: "Isquiotibiais" },
          { nome: "Glúteos" },
          { nome: "Adutores" },
          { nome: "Panturrilhas" },
        ],
      },
      {
        nome: "Membros Superiores",
        itens: [
          { nome: "Peitoral" },
          { nome: "Dorsal / Latíssimo" },
          { nome: "Trapézio" },
          { nome: "Ombros / Deltoides" },
          { nome: "Bíceps" },
          { nome: "Tríceps" },
        ],
      },
      {
        nome: "Core",
        itens: [
          { nome: "Abdominais" },
          { nome: "Oblíquos" },
          { nome: "Lombar" },
        ],
      },
    ],
  },
  {
    categoria: "Aparelhos",
    itens: [
      {
        nome: "Puxadas e Remadas",
        itens: [
          { nome: "Low Row" },
          { nome: "Row Pure" },
          { nome: "Cross Over" },
          { nome: "D.A.P (Dual Adjustable Pulley)" },
        ],
      },
      {
        nome: "Peitoral e Ombros",
        itens: [
          { nome: "Supino Máquina" },
          { nome: "Shoulder Press Pure" },
          { nome: "Peck Deck (Voador)" },
        ],
      },
      {
        nome: "Pernas",
        itens: [
          { nome: "Cadeira Extensora" },
          { nome: "Mesa Flexora" },
          { nome: "Leg Press" },
          { nome: "Hack Squat" },
          { nome: "Banco Abdutor" },
          { nome: "Banco Adutor" },
        ],
      },
      {
        nome: "Core e Funcionais",
        itens: [
          { nome: "Banco de Abdominais" },
          { nome: "Banco Romano (Lombar)" },
          { nome: "Kinesis" },
        ],
      },
    ],
  },
];

export const flattenList = (items, path = []) => {
  return items.flatMap((item) => {
    const currentPath = [...path, item.nome || item.categoria];
    if (item.itens) {
      return flattenList(item.itens, currentPath);
    } else {
      return {
        label: item.nome,
        value: `/dashboard/${slugify(
          currentPath[currentPath.length - 2]
        )}/${slugify(item.nome)}`,
        categoria: currentPath[currentPath.length - 2],
      };
    }
  });
};

const slugify = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .trim();
