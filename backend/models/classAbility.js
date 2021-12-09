module.exports = class ClassAbility {
  constructor(id, title, description, cost, unlockedLevel, tags) {
    this.id = id;
    this.name = title;
    this.description = description;
    this.cost = cost;
    this.unlockedLevel = unlockedLevel;
    this.tags = tags;
  }

  get id() {
    this.id;
  }

  get name() {
    this.name;
  }

  set name(name) {
    this.name = name;
  }

  get description() {
    this.description;
  }

  set description(description) {
    this.description = description;
  }

  get cost() {
    this.cost;
  }

  set cost(cost) {
    if (cost > 0) this.cost = cost;
  }

  get unlockedLevel() {
    this.unlockedLevel;
  }

  set unlockedLevel(unlockedLevel) {
    this.unlockedLevel = unlockedLevel;
  }

  get tags() {
    this.tags;
  }

  set tags(tags) {
    this.tags = tags;
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
