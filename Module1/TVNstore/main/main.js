// Khach hang them san pham vao gio hang
let btn = document.getElementsByClassName("cart-button")
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (event) {
        let productImg = event.target.parentElement.getElementsByClassName("product-thumb")[0].src
        let productName = event.target.parentElement.getElementsByClassName("product-name")[0].innerHTML
        let productPrice = event.target.parentElement.getElementsByClassName("product-price")[0].innerHTML
        addCart(productImg, productName, productPrice)
    })
}

//Tạo một dòng rỗng trong giỏ hàng
let count = 0;//khởi tạo biến đếm giỏ hàng
function addCart(productImg, productName, productPrice) {
    let addtr = document.createElement("tr")
    let cartItem = document.querySelectorAll("tbody tr")//khởi tạo lại giỏ hàng kiểm tra phone trùng tên
    for (let i = 0; i < cartItem.length; i++) {//lặp for trong giỏ hàng
        let listPhone = document.querySelectorAll(".checkName")
        if (listPhone[i].innerHTML === productName) {
            alert("Sản phẩm bạn chọn đã có trong giỏ hàng !")
            return;
        }
    }
    alert("Đã thêm Sản phẩm vào giỏ hàng")
    count++;// tăng count lên 1 khi click vào thêm sản phẩm
    document.getElementsByClassName("ascending")[0].textContent = count

    //Tạo dòng mới chưa sản phẩm trong giỏ hàng
    let trContent = `<tr>
                       <td style="display: flex; align-items: center"><img style="width: 70px" src = "${productImg}"><span class="checkName">${productName}</span></td>
                       <td><span class="price">${productPrice}</span><sup>đ</sup></td>
                       <td><input style="width: 30px; outline: none; border-radius: 5px; text-align: center" type="number" value="1" min="1"></td>
                       <td onclick="countDelete()" class="delete" style="cursor: pointer; padding-right: 22px">Xóa</td>    
                    </tr>`
    addtr.innerHTML = trContent//in ra màn hình
    let cartTable = document.querySelector("tbody")//select table
    cartTable.append(addtr) //thêm tr đã tạo vaào tbody
    //gọi hàm tính tổng
    cartTotal()
    deleteListPhone()
}

function countDelete() {
    count--
    document.getElementsByClassName("ascending")[0].textContent = count
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
            let deleteItem = event.target.parentElement
            deleteItem.remove()
            // console.log(deleteItem)
            cartTotal()//sau khi xóa gọi lại hàm tính tổng
        })
        // count--;
        // document.getElementsByClassName("ascending")[0].textContent = count
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

// position-cart------------------------------------------------------------
//click show cart
let cartShow = document.querySelector(".showCart")
cartShow.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "11%";
})
//click hide cart
let cartBtn = document.querySelector(".fa-arrow-alt-circle-right")
cartBtn.addEventListener("click", function () {
    document.querySelector(".cart").style.right = "-100%";
})
// position-user------------------------------------------------------------

// //click show user
let adminShow = document.querySelector(".showAdmin")
adminShow.addEventListener("click", function () {
    document.querySelector(".form-login").style.bottom = "30%";
    // console.log(adminShow)
})
// //click hide user
let adminBtn = document.querySelector(".fa-times-circle")
adminBtn.addEventListener("click", function () {
    document.querySelector(".form-login").style.bottom = "-100%";
})

/*-------------------------------------logIn----------------------------*/
function user() {
    let username = "kieuanhkute";
    let password = "12345";
    let user = document.getElementById("userName");
    let pass = document.getElementById("passWord");
    if (user.value === username && pass.value === password) {
        alert("Đăng nhập thành công !")
        window.location.href = "product.html";
        localStorage.setItem("user", "admin");
    } else {
        alert("Tài khoản hoặc mật khẩu không đúng")
    }
}