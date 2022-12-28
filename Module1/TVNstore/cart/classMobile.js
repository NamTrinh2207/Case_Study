class MobilePhone {
    name;
    price;
    number;
    img;

    constructor(name, number, price, img) {
        this.name = name;
        this.price = price;
        this.number = number;
        this.img = img;
    }
    
    get name() {
        return this.name
    }

    set name(value) {
        this.name = value
    }

    get price(){
        return this.price
    }
    set price(value){
        this.price = value
    }

    get number(){
        return this.number
    }
    set number(value){
        this.number = value
    }
}