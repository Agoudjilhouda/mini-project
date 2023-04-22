
function changeImage(){
    let displaypic = document.getElementById("bag")
    if(displaypic.src.match("img/Group 4.png")){
        displaypic.src = "img/icons8-bag-50.png"
    }
    else {
        displaypic.src = "img/Group 4.png"
        
    }
}
