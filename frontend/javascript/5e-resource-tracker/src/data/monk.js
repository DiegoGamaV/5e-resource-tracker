const monkClass = {
  id: 0,
  name: "Monge",
  abilities: [
    {
      id: 0,
      name: "Rajada de Golpes",
      description:
        "Imediatamente após usar a ação de Ataque no seu turno, você pode gastar 1 Ponto de Ki para fazer 2 ataques desarmados como uma ação bônus.",
      minCost: 1,
      hasCostRange: false,
      unlockedLevel: 2,
      tags: ["Combate", "Dano"],
      isOptional: false,
    },
    {
      id: 1,
      name: "Defesa Paciente",
      description:
        "Você pode gastar 1 Ponto de Ki para usar a ação de Esquiva como uma ação bônus no seu turno.",
      minCost: 1,
      hasCostRange: false,
      unlockedLevel: 2,
      tags: ["Combate", "Defesa", "Aprimoramento"],
      isOptional: false,
    },
    {
      id: 2,
      name: "Passo do Vento",
      description:
        "Você pode gastar 1 Ponto de Ki para usar a ação de Desengajar ou Disparar como uma ação bônus no seu turno.",
      minCost: 1,
      hasCostRange: false,
      unlockedLevel: 2,
      tags: ["Combate", "Defesa", "Aprimoramento", "Movimento"],
      isOptional: false,
    },
    {
      id: 3,
      name: "Refletir Projéteis",
      description:
        "Você pode usar sua reação para refletir ou pegar um projétil quando um ataque com arma à distância acerta você. Ao fazer isso, você reduz o dano do ataque em 1d10 + seu modificador de Destreza + seu nível de Monge.\nSe você reduzir o dano a 0, você pode pegar o projétil se ele for pequeno o suficiente para caber em uma de suas mãos, e você tenha ao menos uma mão livre. Você pode então gastar 1 Ponto de Ki e fazer um ataque à distância com arma (6/18 m de alcance) com a arma ou munição que você pegou, como parte da mesma reação. Você pode adicionar sua proficiência à rolagem de ataque, independentemente da suas proficiências com armas, e o projétil conta como uma arma de Monge para esse ataque.",
      minCost: 0,
      hasCostRange: true,
      maxCost: 1,
      unlockedLevel: 3,
      tags: ["Combate", "Defesa", "Negação", "Dano"],
      isOptional: false,
    },
    {
      id: 4,
      name: "Ataque Empoderado por Ki",
      description:
        "Se você gastar 1 Ponto de Ki como parte de alguma ação no seu turno, você pode usar sua ação bônus para fazer um ataque desarmado ou com uma Arma de Monge como uma ação bônus antes do final do seu turno.",
      minCost: 1,
      hasCostRange: false,
      unlockedLevel: 3,
      tags: ["Combate", "Dano"],
      isOptional: false,
    },
    {
      id: 5,
      name: "Cura Acelerada",
      description:
        "Como uma ação você casta 2 Pontos de Ki e rola um dado de Artes Marciais. Você recupera um número de Pontos de Vida igual ao número rolado mais seu bônus de proficiência.",
      minCost: 2,
      hasCostRange: false,
      unlockedLevel: 4,
      tags: ["Cura"],
      isOptional: false,
    },
    {
      id: 6,
      name: "Golpe Atordoante",
      description:
        "Quando você acertar outra criatura com um ataque com arma corpo-a-corpo, você pode gastar 1 Ponto de Ki para tentar um golpe atordoante. O alvo deve ter sucesso em um teste de resistência de Constituição ou ficar atordoado até o final de seu próximo turno.",
      minCost: 1,
      hasCostRange: false,
      unlockedLevel: 5,
      tags: ["Combate", "Controle", "Enfraquecimento"],
      isOptional: false,
    },
    {
      id: 7,
      name: "Mira Focada",
      description:
        "Quando você errar um ataque, você pode gastar entre 1 a 3 Pontos de Ki para aumentar sua rolagem de ataque em 2 para cada Ponto de Ki gasto, potencialmente transformando seu erro em um acerto.",
      minCost: 1,
      hasCostRange: true,
      maxCost: 3,
      unlockedLevel: 5,
      tags: ["Combate", "Dano"],
      isOptional: false,
    },
    {
      id: 8,
      name: "Alma de Diamante",
      description:
        "Quando você fizer um teste de resistência e falhar, você pode gastar 1 Ponto de Ki para rolá-lo novamente, e deve usar o segundo resultado.",
      minCost: 1,
      hasCostRange: false,
      unlockedLevel: 14,
      tags: ["Combate", "Defesa"],
      isOptional: false,
    },
    {
      id: 9,
      name: "Corpo Vazio",
      description:
        "Você pode usar sua ação para gastar 4 Pontos de Ki e ficar invisível por 1 minuto. Durante esse tempo você tem resistência a todos os tipos de dano, exceto dano de energia.\nAdicionalmente você pode gastar 8 Pontos de Ki para conjurar a magia Projeção Astral, sem a necessidade de componentes materiais. Ao fazer isso, você não pode levar outras criaturas com você.",
      minCost: 4,
      hasCostRange: true,
      maxCost: 8,
      unlockedLevel: 14,
      tags: ["Combate", "Defesa"],
      isOptional: false,
    },
  ],
  resourceName: "Pontos de Ki",
  resourceAmountByLevelList: [
    0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ],
  abilityIdCounter: 10,
};

export default monkClass;
