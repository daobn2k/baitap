var MenuItem = document.getElementById("Menu_item");

MenuItem.style.maxHeight = "0px";

function menuToggle(){
    if( MenuItem.style.maxHeight == "0px"){
        MenuItem.style.maxHeight ="200px";
    }else{
        MenuItem.style.maxHeight ="0px";
    }
}