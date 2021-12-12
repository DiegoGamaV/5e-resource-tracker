module.exports = class ClassAbility {
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
      throw new Error("A class ability cannot have a negative or undefined id");
    this.id = id;
    this.name = title;
    this.description = description;

    if (typeof minCost === "undefined" || minCost < 0)
      throw new Error("A class ability cannot cost less than zero resources");
    this.minCost = minCost;
    this.hasCostRange = false;
    if (typeof minCost !== "undefined") {
      if (maxCost <= minCost)
        throw new Error("The class ability cost range must be valid");
      this.hasCostRange = true;
    }
    this.maxCost = maxCost;

    if (
      typeof unlockedLevel === "undefined" ||
      unlockedLevel < 1 ||
      unlockedLevel > 20
    )
      throw new Error(
        "A class ability must be unlocked in a valid game level: [1,20]"
      );
    this.unlockedLevel = unlockedLevel;

    if (typeof tags === "undefined") this.tags = [];
    else this.tags = tags;

    this.isOptional = isOptional;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get description() {
    return this._description;
  }

  set description(description) {
    this._description = description;
  }

  get minCost() {
    return this._minCost;
  }

  set minCost(cost) {
    if (cost >= 0) this._minCost = cost;
    else
      throw new Error("A class ability cannot cost less than zero resources");
  }

  get maxCost() {
    return this._maxCost;
  }

  set maxCost(cost) {
    if (typeof maxCost === "undefined") {
      this._maxCost = cost;
      this.hasCostRange = false;
    } else if ((cost > 0) & (cost > this.minCost)) this._maxCost = cost;
    else throw new Error("The class ability cost range must be valid");
  }

  getCostRange() {
    if (this.hasCostRange) return [this.minCost, this.maxCost];
    else return [this.minCost];
  }

  get unlockedLevel() {
    return this._unlockedLevel;
  }

  set unlockedLevel(unlockedLevel) {
    if (unlockedLevel >= 1 && unlockedLevel <= 20)
      this._unlockedLevel = unlockedLevel;
    else {
      throw new Error(
        "A class ability must be unlocked in a valid game level: [1,20]"
      );
    }
  }

  get tags() {
    return this._tags;
  }

  set tags(tags) {
    this._tags = tags;
  }

  addTags(newTag) {
    this.tags.push(newTag);
  }

  removeTags(tag) {
    const index = this.tags.indexOf(tag);

    if (index > -1) {
      this.tags.splice(index, 1);
    }
  }
};
