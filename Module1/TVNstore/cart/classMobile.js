class MobilePhone {
    stt;
    name;
    number;
    price;
    img;

    constructor(stt, name, number, price, img) {
        this.stt = stt
        this.name = name;
        this.number = number;
        this.price = price;
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