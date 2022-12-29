// // cre newArr
// let products = [new MobilePhone("", "", "","")];
//
// //display SP
// function display() {
//     let show = "";
//     let sumProduct = 0;
//     let count = 0;
//     for (let i = 0; i < products.length; i++) {
//         sumProduct += Number(products[i].number);
//         show += `<tr style='text-align: center'>
//                    <td>${count++}</td>
//                    <td>${products[i].name}</td>
//                    <td>${products[i].number}</td>
//                    <td>${products[i].price}</td>
//                    <td>${products[i].number * products[i].price}</td>
//                    <td><img style='width: 100px' src="${products[i].img}"></td>
//                    <td style='text-align: center;width: 50px' class='button'><button onclick='deleteByTr(" + i + ")'>Delete</button></td>
//                  </tr>`
//     }
//     //print in html
//     document.getElementById("listProduct").innerHTML = show;
// }
// display();
//
// //cre function sp
// function creNewProduct() {
//     let name = document.getElementById("productName").value
//     let price = document.getElementById("productNumber").value
//     let number = document.getElementById("productPrice").value
//     let img = document.getElementById("productImage").value
//     let newProduct = new MobilePhone(name, number, price, img)
//     //push newArr
//     products.push(newProduct)
//     display()
// }
//
// //delete
// function deleteByTr(index) {
//     products.splice(index, 1)
//     display()
// }

// Khach hang them san pham vao gio hang

let btn = document.getElementsByClassName("cart-button")
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (event) {
        let btnItem = event.target
        let product = btnItem.parentElement
        let productImg = product.getElementsByClassName("product-thumb")[0].src
        let productName = product.getElementsByClassName("product-name")[0].innerHTML
        let productPrice = product.getElementsByClassName("product-price")[0].innerHTML
        addCart(productImg, productName, productPrice)
    })
}

//Tạo một dòng rỗng
function addCart(productImg, productName, productPrice) {
    let addtr = document.createElement("tr")
    let cartItem = document.querySelectorAll("tbody tr")//khởi tạo lại giỏ hàng kiểm tra máy trùng tên
    for (let i = 0; i < cartItem.length; i++) {//lặp for trong list cart
        let listPhone = document.querySelectorAll(".checkName")
        if (listPhone[i].innerHTML === productName) {
            alert("Sản phẩm bạn chọn đã có trong giỏ hàng !")
            return;
        }
    }
    alert("Đã thêm Sản phẩm vào giỏ hàng")
    let trcontent = `<tr>\n
                       <td style="display: flex; align-items: center"><img style="width: 70px" src = "${productImg}"><span class="checkName">${productName}</span></td>\n
                       <td><span class="price">${productPrice}</span><sup>đ</sup></td>\n
                       <td><input style="width: 30px; outline: none; border-radius: 5px" type="number" value="1" min="1"></td>\n
                       <td class="delete" style="cursor: pointer">Xóa</td>\n
                    </tr>`
    addtr.innerHTML = trcontent//in ra web
    let cartTable = document.querySelector("tbody")//select table
    cartTable.append(addtr)
    //gọi hàm tính tổng
    cartTotal()
    deleteListPhone()
}


// tính tổng tiền SP trong giỏ hàng
function cartTotal() {
    let total = 0;
    let cartItem = document.querySelectorAll("tbody tr")//khởi tạo 1 hàng mới
    //lặp for, lấy ô input[i] số lượng máy
    for (let i = 0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        let spanValue = cartItem[i].querySelector(".price").innerHTML
        // console.log(spanValue)
        //tổng += tổng
        total += Number(inputValue) * Number(spanValue)
        // console.log(total)
    }
    let totals = document.querySelector(".price-total p span")
    totals.innerHTML = total.toLocaleString("de-DE")
    inputChange()
    // console.log(totals)
}
// -------------------------------delete-------------------------------
function deleteListPhone() {
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++) {//lặp for trong list cart
        let listPhone = document.querySelectorAll(".delete")
        listPhone[i].addEventListener("click", function (event) {
            let deletePhone = event.target
            let deleteItem = deletePhone.parentElement
            deleteItem.remove()
            cartTotal()//sau khi xóa gọi lại hàm tính tổng
        })
        // console.log(listPhone)
    }
}

//tổng tiền thay đổi sau mỗi lần thêm tr
function inputChange() {
    let cartItem = document.querySelectorAll("tbody tr")
    for (let i = 0; i < cartItem.length; i++) {//lặp for trong list cart
        let inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function () {
            cartTotal()
        })
        // console.log(listPhone)
    }
}

function press() {
    alert("TVN Store Cảm ơn bạn đã đặt hàng! Chúc bạn ngày mới vui vẻ")
}

//click show cart
let cartShow = document.querySelector(".showCart")
cartShow.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "0";
})
//click hide cart
let cartBtn = document.querySelector(".fa-arrow-alt-circle-right")
cartBtn.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "-100%";
})
/*-------------------------------------logIn----------------------------*/
function user() {
    let username = "admin";
    let password = "123";
    let user = document.getElementById("userName");
    let pass = document.getElementById("passWord");
    if (user.value === username && pass.value === password) {
        window.location.href = "crea.html";
        localStorage.setItem("user", "admin");
    } else {
        document.getElementById("text").innerHTML ="Mật khẩu hoặc tài khoản sai!.Yêu cầu nhập đúng tài khoản và mật khẩu"
    }
}