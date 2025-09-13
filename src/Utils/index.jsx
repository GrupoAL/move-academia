export const listOptions = ["Exercícios", "Grupo Muscular", "Aparelho"];

export function convertExercises(data) {
  const sortByName = (a, b) => a.nome.localeCompare(b.nome);

  const exercicios = data
    .map((ex) => ({
      id: ex.id,

      nome: ex.exercicio,
      descricao: ex.descricao,
      material: ex.material,
      foto_aparelho: ex.foto_aparelho,
      video_exercicio: ex.video_exercicio,
      data_cadastro: ex.data_cadastro,
      data_update: ex.data_update,
    }))
    .sort(sortByName);

  const aparelhosMap = new Map();
  data.forEach((ex) => {
    if (!aparelhosMap.has(ex.aparelho)) {
      aparelhosMap.set(ex.aparelho, {
        id: ex.id,

        nome: ex.aparelho,
        descricao: ex.descricao,
        material: ex.material,
        foto_aparelho: ex.foto_aparelho,
        video_exercicio: ex.video_exercicio,
        data_cadastro: ex.data_cadastro,
        data_update: ex.data_update,
      });
    }
  });
  const aparelhos = Array.from(aparelhosMap.values()).sort(sortByName);

  const gruposMap = new Map();
  data.forEach((ex) => {
    ex.grupo_muscular.forEach((grupo) => {
      if (!gruposMap.has(grupo)) {
        gruposMap.set(grupo, {
          nome: grupo,
          itens: [],
        });
      }
      gruposMap.get(grupo).itens.push({
        id: ex.id,
        nome: ex.exercicio,
        descricao: ex.descricao,
        material: ex.material,
        foto_aparelho: ex.foto_aparelho,
        video_exercicio: ex.video_exercicio,
        data_cadastro: ex.data_cadastro,
        data_update: ex.data_update,
      });
    });
  });

  const grupos = Array.from(gruposMap.values())
    .map((grupo) => ({
      ...grupo,
      itens: grupo.itens.sort(sortByName),
    }))
    .sort(sortByName);

  return [
    {
      categoria: "Exercícios",
      itens: exercicios,
    },
    {
      categoria: "Aparelhos",
      itens: aparelhos,
    },
    {
      categoria: "Grupos Musculares",
      itens: grupos,
    },
  ];
}

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
