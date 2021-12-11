module.exports = class ClassAbility {
  #id;
  #name;
  #description;
  #minCost;
  #maxCost;
  #hasCostRange;
  #unlockedLevel;
  #tags;
  #isOptional;

  constructor(
    id,
    title,
    description,
    minCost,
    maxCost,
    unlockedLevel,
    tags,
    isOptional = false
  ) {
    if (typeof id === "undefined" || id < 0)
      throw new Error("A class ability cannot have a negative id");
    this.#id = id;
    this.#name = title;
    this.#description = description;

    if (typeof minCost === "undefined" || minCost < 0)
      throw new Error("A class ability cannot cost less than zero resources");
    this.#minCost = minCost;
    this.#hasCostRange = false;
    if (typeof minCost !== "undefined") {
      if (maxCost <= minCost)
        throw new Error("The class ability cost range must be valid");
      this.#hasCostRange = true;
    }
    this.#maxCost = maxCost;

    if (
      typeof unlockedLevel === "undefined" ||
      unlockedLevel < 1 ||
      unlockedLevel > 20
    )
      throw new Error(
        "A class ability must be unlocked in a valid game level: [1,20]"
      );
    this.#unlockedLevel = unlockedLevel;

    if (typeof tags === "undefined") this.#tags = [];
    else this.#tags = tags;

    this.#isOptional = isOptional;
  }

  get id() {
    this.#id;
  }

  get name() {
    this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get description() {
    this.#description;
  }

  set description(description) {
    this.#description = description;
  }

  get minCost() {
    this.#minCost;
  }

  set minCost(cost) {
    if (cost > 0) this.#minCost = cost;
  }

  get maxCost() {
    this.#maxCost;
  }

  get costRange() {
    if (this.#hasCostRange) return [this.#minCost, this.#maxCost];
    else return [this.#minCost];
  }

  set maxCost(cost) {
    if ((cost > 0) & (cost > this.#minCost)) this.#maxCost = cost;
  }

  get unlockedLevel() {
    this.#unlockedLevel;
  }

  set unlockedLevel(unlockedLevel) {
    this.#unlockedLevel = unlockedLevel;
  }

  get tags() {
    this.#tags;
  }

  set tags(tags) {
    this.#tags = tags;
  }

  addTags(newTag) {
    this.#tags.push(newTag);
  }

  removeTags(tag) {
    const index = this.#tags.indexOf(tag);

    if (index > -1) {
      this.tags.splice(index, 1);
    }
  }
};
