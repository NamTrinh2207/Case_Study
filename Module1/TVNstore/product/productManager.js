let productArr = [
   new Mobile("iphone 14 promax","https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_12.png", 40000000,1),
   new Mobile("iphone 11 pro","https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/3/_/3_225.jpg", 23000000,1),
   new Mobile("Samsung","https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/s/a/samsung_galaxy_z_fold_4-7.jpg", 23000,1),
];
//Tạo table hiển thị ra màn hình
function display() {
    let display = " ";
    let count = 1;
    let counts = 0;
    for (let i = 0; i < productArr.length; i++) {
        display += 
            `<tr>
            <td>${(count++)}</td>
            <td>${productArr[i].name}</td>
            <td><img style='width: 100px' src="${productArr[i].img}"</td>
            <td>${productArr[i].price}<sup>đ</sup></td>
            <td>${productArr[i].number}</td>        
            <td>${productArr[i].number*productArr[i].price}<sup>đ</sup></td>        
            <td><button onclick='edit(${i})'>Sửa</button></td>
            <td><button onclick='del(${i})'>Xóa</button></td>
            </tr>`
        }  
    // console.log(productArr.img)
        document.getElementById("output").innerHTML = display;
}
display()
function add() {
    //lấy thông tin sản phẩm từ view
    let name = document.getElementById("name").value;
    let img = document.getElementById("img").value
    let price = document.getElementById("price").value;
    let number = document.getElementById("number").value;
    //tạo mảng con lưu thông tin sản phẩm
    let newProd = new Mobile(name, img, price,number);
    productArr.push(newProd);
    display();
}

function edit(index) {
    let name = document.getElementById("name").value;
    let img = document.getElementById("img").value
    let price = document.getElementById("price").value;
    let number = document.getElementById("number").value;
    //tạo mảng con lưu thông tin sản phẩm
    let newProd = new Mobile(name, img, price,number);
    productArr[index] = (newProd);
    display();
}

function del(index) {
    //xóa 1 phần tử tính từ vị trí index
    productArr.splice(index, 1);
    display();
}