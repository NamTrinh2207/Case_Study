//--------------------------sliderShow------------------------------
let size = document.getElementsByClassName("slideShow")[0].clientWidth;
let changeSlide = document.getElementsByClassName("change-slide")[0];
let change = 0;
let img = changeSlide.getElementsByTagName("img");
let max = size * img.length;
max -= size
function next(){
    if (change < max){
        change += size
    }else {
        change = 0;
    }
    change += size
    changeSlide.style.marginLeft = '-' + change + 'px'
}




    
    

    
