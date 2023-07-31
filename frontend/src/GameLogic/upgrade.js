export default class UpgradeClass {
    constructor(key, name, cost, description, type, multiplier) {
        this.key = key;
        this.name = name;
        this.cost = cost;
        this.description = description;
        
        //type is int 0-3, 0 is click, 1 is generator, 2 is global
        this.type = type;
        this.multiplier = multiplier;
        this.owned = false;
    }

    getCost() {
        return this.cost;
    }

    getMultiplier() {
        return this.multiplier;
    }

    getType() {
        return this.type;
    }

    getOwned() {
        return this.owned;
    }
    
    buy() {
        this.owned = true;
    }
}