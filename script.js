mainBox = document.getElementById("full-view")
mainImg = document.getElementById("main-img")

function viewimg(link){
     mainBox.style.display = "flex"
     mainImg.src = link


}

function closeimg(){
    mainBox.style.display = "none"

}