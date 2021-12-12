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
    kiPointsProgression
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

  // Corpo Vazio - 18º Nível
  factory.classController.addClassAbility(
    monkId,
    "Corpo Vazio",
    "Você pode usar sua ação para gastar 4 Pontos de Ki e ficar invisível por 1 minuto. Durante esse tempo você tem resistência a todos os tipos de dano, exceto dano de energia.\nAdicionalmente você pode gastar 8 Pontos de Ki para conjurar a magia Projeção Astral, sem a necessidade de componentes materiais. Ao fazer isso, você não pode levar outras criaturas com você.",
    4,
    8,
    14,
    [tags.COMBAT, tags.DEFENSE]
  );

  console.log("Monk class initialized");
}

module.exports = initializeMonk;
