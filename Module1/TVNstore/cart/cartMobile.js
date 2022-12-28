// cre newArr
let products = [new MobilePhone("", "", "","",)];

//display SP
function display() {
    let show = "";
    let sumProduct = 0;
    let count = 0;
    for (let i = 0; i < products.length; i++) {
        sumProduct += Number(products[i].number);
        show += `<tr style='text-align: center'>
                   <td>${count++}</td>
                   <td>${products[i].name}</td>
                   <td>${products[i].number}</td>
                   <td>${products[i].price}</td>
                   <td>${products[i].number * products[i].price}</td>
                   <td><img style='width: 100px' src="${products[i].img}"></td>
                   <td style='text-align: center;width: 50px' class='button'><button onclick='deleteByTr(" + i + ")'>Delete</button></td>
                 </tr>`
    }
    //print in html
    document.getElementById("listProduct").innerHTML = show;
}

display();

//cre function sp
function creNewProduct() {
    let name = document.getElementById("productName").value
    let price = document.getElementById("productNumber").value
    let number = document.getElementById("productPrice").value
    let img = document.getElementById("productImage").value
    let newProduct = new MobilePhone(name, number, price, img)
    //push newArr
    products.push(newProduct)
    display()
}

//delete
function deleteByTr(index) {
    products.splice(index, 1)
    display()
}