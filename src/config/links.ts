/**
 * Ids dos links utilizados na aplicação
 */
export const links = {
  home: "header",
  quemSomos: "quem-somos",
  informacoesImportantes: "informacoes-importantes",
  miaumigos: "miaumigos",
  queroAdotar: "quero-adotar",
};

export const titles = {
  home: "Início",
  quemSomos: "Quem Somos",
  informacoesImportantes: "Informações Importantes",
  miaumigos: "miaumigos",
  queroAdotar: "Quero adotar",
};

// função que pega a string e coloca um '#' na frente
export const getLink = (link: string) => `#${link}`;
