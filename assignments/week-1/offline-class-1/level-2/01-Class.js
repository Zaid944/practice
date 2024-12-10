class Animal {
    constructor(name, legCount) {
        this.name = name;
        this.legCount = legCount;
    }
    describe() {
        return `${this.name} has ${this.legCount} legs`;
    }
}
const a = new Animal("Lion", 4);
console.log(a);
