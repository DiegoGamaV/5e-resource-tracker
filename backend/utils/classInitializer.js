var tags = require("../models/classAbilityTags");

const factory = require("../controllers/factory");

// ---------------------------------------- Cria a classe Monge

function initializeMonk() {
  const kiPointsProgression = [
    0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const monkId = factory.classController.addClass(
    "Monge",
    "Pontos de Ki",
    kiPointsProgression,
    "Tradições Monásticas"
  );

  // Rajada de Golpes - 2º Nível
  factory.classController.addClassAbility(
    monkId,
    "Rajada de Golpes",
    "Imediatamente após usar a ação de Ataque no seu turno, você pode gastar 1 Ponto de Ki para fazer 2 ataques desarmados como uma ação bônus.",
    1,
    undefined,
    2,
    [tags.COMBAT, tags.DAMAGE]
  );

  // Defesa Paciente - 2º Nível
  factory.classController.addClassAbility(
    monkId,
    "Defesa Paciente",
    "Você pode gastar 1 Ponto de Ki para usar a ação de Esquiva como uma ação bônus no seu turno.",
    1,
    undefined,
    2,
    [tags.COMBAT, tags.DEFENSE, tags.BUFF]
  );

  // Passo do Vento - 2º Nível
  factory.classController.addClassAbility(
    monkId,
    "Passo do Vento",
    "Você pode gastar 1 Ponto de Ki para usar a ação de Desengajar ou Disparar como uma ação bônus no seu turno.",
    1,
    undefined,
    2,
    [tags.COMBAT, tags.DEFENSE, tags.BUFF, tags.MOVEMENT]
  );

  // Característica da Tradição Monástica - 3º Nível
  factory.classController.addClassAbility(
    monkId,
    "Habilidade de Subclasse",
    "",
    0,
    undefined,
    3,
    []
  );

  // Refletir Projéteis - 3º Nível
  factory.classController.addClassAbility(
    monkId,
    "Refletir Projéteis",
    "Você pode usar sua reação para refletir ou pegar um projétil quando um ataque com arma à distância acerta você. Ao fazer isso, você reduz o dano do ataque em 1d10 + seu modificador de Destreza + seu nível de Monge.\nSe você reduzir o dano a 0, você pode pegar o projétil se ele for pequeno o suficiente para caber em uma de suas mãos, e você tenha ao menos uma mão livre. Você pode então gastar 1 Ponto de Ki e fazer um ataque à distância com arma (6/18 m de alcance) com a arma ou munição que você pegou, como parte da mesma reação. Você pode adicionar sua proficiência à rolagem de ataque, independentemente da suas proficiências com armas, e o projétil conta como uma arma de Monge para esse ataque.",
    0,
    1,
    3,
    [tags.COMBAT, tags.DEFENSE, tags.NEGATION, tags.DAMAGE]
  );

  // Ataque Empoderado por Ki - 3º Nível, opcional
  factory.classController.addClassAbility(
    monkId,
    "Ataque Empoderado por Ki",
    "Se você gastar 1 Ponto de Ki como parte de alguma ação no seu turno, você pode usar sua ação bônus para fazer um ataque desarmado ou com uma Arma de Monge como uma ação bônus antes do final do seu turno.",
    1,
    undefined,
    3,
    [tags.COMBAT, tags.DAMAGE],
    true
  );

  // Cura Acelerada - 4º Nível, opcional
  factory.classController.addClassAbility(
    monkId,
    "Cura Acelerada",
    "Como uma ação você casta 2 Pontos de Ki e rola um dado de Artes Marciais. Você recupera um número de Pontos de Vida igual ao número rolado mais seu bônus de proficiência.",
    2,
    undefined,
    4,
    [tags.HEALING],
    true
  );

  // Golpe Atordoante - 5º Nível
  factory.classController.addClassAbility(
    monkId,
    "Golpe Atordoante",
    "Quando você acertar outra criatura com um ataque com arma corpo-a-corpo, você pode gastar 1 Ponto de Ki para tentar um golpe atordoante. O alvo deve ter sucesso em um teste de resistência de Constituição ou ficar atordoado até o final de seu próximo turno.",
    1,
    undefined,
    5,
    [tags.COMBAT, tags.CONTROL, tags.DEBUFF]
  );

  // Mira Focada - 5º Nível, opcional
  factory.classController.addClassAbility(
    monkId,
    "Mira Focada",
    "Quando você errar um ataque, você pode gastar entre 1 a 3 Pontos de Ki para aumentar sua rolagem de ataque em 2 para cada Ponto de Ki gasto, potencialmente transformando seu erro em um acerto.",
    1,
    3,
    5,
    [tags.COMBAT, tags.DAMAGE],
    true
  );

  // Característica da Tradição Monástica - 6º Nível
  factory.classController.addClassAbility(
    monkId,
    "Habilidade de Subclasse",
    "",
    0,
    undefined,
    6,
    []
  );

  // Característica da Tradição Monástica - 11º Nível
  factory.classController.addClassAbility(
    monkId,
    "Habilidade de Subclasse",
    "",
    0,
    undefined,
    11,
    []
  );

  // Alma de Diamante - 14º Nível
  factory.classController.addClassAbility(
    monkId,
    "Alma de Diamante",
    "Quando você fizer um teste de resistência e falhar, você pode gastar 1 Ponto de Ki para rolá-lo novamente, e deve usar o segundo resultado.",
    1,
    undefined,
    14,
    [tags.COMBAT, tags.DEFENSE]
  );

  // Característica da Tradição Monástica - 17º Nível
  factory.classController.addClassAbility(
    monkId,
    "Habilidade de Subclasse",
    "",
    0,
    undefined,
    17,
    []
  );

  // Corpo Vazio - 18º Nível
  factory.classController.addClassAbility(
    monkId,
    "Corpo Vazio",
    "Você pode usar sua ação para gastar 4 Pontos de Ki e ficar invisível por 1 minuto. Durante esse tempo você tem resistência a todos os tipos de dano, exceto dano de energia.\nAdicionalmente você pode gastar 8 Pontos de Ki para conjurar a magia Projeção Astral, sem a necessidade de componentes materiais. Ao fazer isso, você não pode levar outras criaturas com você.",
    4,
    8,
    18,
    [tags.COMBAT, tags.DEFENSE]
  );

  console.log("Monk class initialized");

  const openHandId = factory.classController.addSubclass("Mão Aberta", monkId);

  // Técnica da Mão Aberta - 3º Nível
  factory.classController.addSubclassAbility(
    openHandId,
    "Técnica da Mão Aberta",
    "Você pode manipular o ki do seu oponente enquanto canaliza o seu próprio. Sempre que você acertar uma criatura com um dos ataques garantidos pela Rajada de Golpes, você pode impor um dos seguintes efeitos no alvo.\n-Ele deve ter sucesso em um teste de resistência de Destreza ou ficar caído.\nEle deve ter resistência de Força. Se fracassar, você pode empurrá-lo para até 4,5 metros de você.\nEle não pode ter reações até o final do seu próximo turno.",
    0,
    undefined,
    3,
    [tags.COMBAT, tags.CONTROL, tags.DEBUFF]
  );

  // Completude do Corpo - 6º Nível
  factory.classController.addSubclassAbility(
    openHandId,
    "Completude do Corpo",
    "Com uma ação, você recupera pontos de vida equivalentes a três vezes o seu nível. Você deve finalizar um descanso longo antes de utilizar essa característica novamente.",
    0,
    undefined,
    6,
    [tags.HEALING]
  );

  // Tranquilidade - 11º Nível
  factory.classController.addSubclassAbility(
    openHandId,
    "Tranquilidade",
    "No final de um descanso longo, você ganha o efeito da magia santuário que dura até o começo do seu próximo descanso longo (a magia pode acabar mais cedo normalmente). A CD de resistência para a magia é 8 + seu modificador de Sabedoria + seu bônus de proficiência.",
    0,
    undefined,
    11,
    [tags.CONTROL, tags.DEFENSE]
  );

  // Palma Trêmula - 17º Nível
  factory.classController.addSubclassAbility(
    openHandId,
    "Palma Trêmula",
    "Quando você acerta uma criatura com um ataque desarmado, você pode criar vibrações imperceptíveis que duram por um número de dias igual a seu nível de monge. As vibrações são inofensivas a não ser que você use sua ação para acabá-las. Para isso você e o alvo devem estar no mesmo plano de existência. Ao fazer isso, a criatura deve fazer um teste de resistência de Constituição. Se fracassar, ela cai a 0 pontos de vida. Se tiver sucesso, ela recebe 10d10 de dano necrótico.\nApenas uma criatura pode estar sob efeito dessa característica por vez. Você pode escolher terminar as vibrações de forma inofensiva sem precisar usar uma ação.",
    3,
    undefined,
    17,
    [tags.CONTROL, tags.DAMAGE]
  );

  console.log("Open Hand subclass initialized");

  const sombraId = factory.classController.addSubclass("Sombra", monkId);

  // Artes Sombrias - 3º Nível
  factory.classController.addSubclassAbility(
    sombraId,
    "Artes Sombrias",
    "Você pode usar sua ação para conjurar escuridão, visão no escuro, passos sem rastros ou siêncio sem precisar de componentes materiais.",
    2,
    undefined,
    3,
    [tags.CONTROL, tags.DEBUFF, tags.BUFF, tags.MOVEMENT]
  );

  // Passo Sombrio - 6º Nível
  factory.classController.addSubclassAbility(
    sombraId,
    "Passo Sombrio",
    "Você pode usar sua ação bônus para teletransportar-se a até 18 metros para um espaço desocupado que possa ver, desde que você e o destino estejam em penumbra ou escuridão. Após fazer isso você ganha vantagem no primeiro ataque corpo-a-corpo que fizer até o fim do turno.",
    0,
    undefined,
    6,
    [tags.COMBAT, tags.MOVEMENT]
  );

  // Manto de Sombras - 11º Nível
  factory.classController.addSubclassAbility(
    sombraId,
    "Manto de Sombras",
    "Quando estiver sob penumbra ou escuridão, você pode usar sua ação para ficar invisível. Você permanece invisível até atacar, conjurar uma magia ou estar sob luz plena",
    0,
    undefined,
    11,
    [tags.BUFF, tags.DEFENSE, tags.CONTROL]
  );

  // Oportunista - 17º Nível
  factory.classController.addSubclassAbility(
    sombraId,
    "Oportunista",
    "Quando uma criatura a 1,5 metros de você for acertada por um ataque feito por outra criatura que não seja você, você pode usar sua reação para atacar aquela criatura.",
    0,
    undefined,
    17,
    [tags.COMBAT, tags.DAMAGE]
  );

  console.log("Shadow subclass initialized");
}

module.exports = initializeMonk;
