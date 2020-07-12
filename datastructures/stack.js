class MaxStack {
  constructor() {
    this.values = [];
  }

  push(value) {
    let currentMax = 0;
    if (this.values.length === 0) currentMax = value;
    else {
      const prevMax = this.values[this.values.length - 1].max;
      currentMax = value > prevMax ? value : prevMax;
    }

    this.push({
      value,
      max: currentMax,
    });
  }

  pop() {
    const value = this.values.pop();
    return value.value;
  }

  max() {
    return this.values[this.values.length - 1].max;
  }
}

module.exports = {
  MaxStack,
};
