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
    if (id === undefined || id < 0)
      throw new Error("A class ability cannot have a negative or undefined id");
    this.id = id;
    this.name = title;
    this.description = description;

    if (minCost === undefined || minCost < 0)
      throw new Error("A class ability cannot cost less than zero resources");
    this.minCost = minCost;
    this.hasCostRange = false;
    if (maxCost !== undefined) {
      if (maxCost <= minCost)
        throw new Error("The class ability cost range must be valid");
      this.hasCostRange = true;
    }
    this.maxCost = maxCost;

    if (unlockedLevel === undefined || unlockedLevel < 1 || unlockedLevel > 20)
      throw new Error(
        "A class ability must be unlocked in a valid game level: [1,20]"
      );
    this.unlockedLevel = unlockedLevel;

    if (tags === undefined) this.tags = [];
    else this.tags = tags;

    this.isOptional = isOptional;
  }

  getCostRange() {
    if (this.hasCostRange) return [this.minCost, this.maxCost];
    else return [this.minCost];
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
