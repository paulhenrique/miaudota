import Cat01 from "../../assets/images/foto-gato-01-zenitsuInosuke.png";
import Cat02 from "../../assets/images/foto-gato-02-braz.png";
import Cat03 from "../../assets/images/foto-gato-03-zaide.png";
export const catsData = [
  {
    name: "Zenitsu & Inosuke",
    birth: "Nascidos em dezembro/2022",
    tags: ["male"],
    image: Cat01,
    alt: "foto de dois gatos. O gato da esquerda tem pelagem curta tigrada e olhos verdes, e o gato à direita é  branco e preto de olhos verdes. Eles estão deitados sobre um fundo rosa salmão e olham para a câmera.",
    link: "http://adoteumgatinho.com.br/detalhes-gato/17958/zenitsu-e-inosuke",
    points: [
      {
        name: "Zenitsu",
        description: "O gatinho Zenitsu é branco e preto, de olhos verdes.",
        radius: 30,
        position: {
          x: 220,
          y: 50,
        },
      },
      {
        name: "Inosuke",
        description: "O gatinho Inosuke é tigrado e branco, de olhos verdes.",
        radius: 150,
        position: {
          x: 100,
          y: 215,
        },
      },
    ],
  },
  {
    name: "Braz",
    birth: "Nascido em janeiro/2022",
    tags: ["male", "specialAdoption"],
    image: Cat02,
    link: "http://adoteumgatinho.com.br/detalhes-gato/17983/princesa-daisy",
    alt: "foto de um gato preto de apenas um olho, que é verde. Ele está sentado ao lado de uma caixa de madeira e olha para a câmera.",
    points: [
      {
        name: "Braz",
        description: "O gatinho Braz é preto e tem apenas um dos olhinhos.",
        radius: 75,
        position: {
          x: 254,
          y: 100,
        },
      },
    ],
  },
  {
    name: "Zaide",
    birth: "Nascida em março/2017",
    link: "http://adoteumgatinho.com.br/detalhes-gato/17996/focaccia",
    tags: ["female"],
    image: Cat03,
    alt: "foto do rosto de um gato de pelagem tigrada e olhos verdes, olhando para a câmera em um fundo branco.",
    points: [
      {
        name: "Zaide",
        description:
          "A gatinha Zaide tem pelagem curta tigrada e olhos verdes.",
        radius: 150,
        position: {
          x: 180,
          y: 180,
        },
      },
    ],
  },
];
