class Mobile {
    name;
    img;
    price;
    number;

    constructor(name, img, price, number) {
        this.name = name;
        this.img = img;
        this.price = price;
        this.number = number;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    get img() {
        return this.img;
    }

    set img(value) {
        this.img = value;
    }

    get price() {
        return this.price;
    }

    set price(value) {
        this.price = value;
    }

    get number() {
        return this.number;
    }

    set number(value) {
        this.number = value;
    }
}