export default class Gen {
    constructor(key, name, baseCost, baseValue, count, url) {
        this.key = key;
        this.name = name;
        this.baseCost = baseCost;
        this.cost = baseCost;
        this.baseValue = baseValue;
        this.count = count;
        this.URL = url;
    }

    addGenerator() {
        this.count++;
        this.cost = Math.floor(this.baseCost * Math.pow(1.25, this.count));
    }

    getGenerator() {
        return this.count;
    }

    getCost() {
        return this.cost;
    }

    getBaseCost() {
        return this.baseCost;
    }

    getBaseValue() {
        return this.baseValue;
    }

    getValue() {
        return this.baseValue * this.count;
    }
}

