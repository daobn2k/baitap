

let btn = document.querySelectorAll("button");
let result = document.getElementById("input");

for (var i = 0; i <btn.length ; i++){
  btn[i].addEventListener("click", (e)=>{
  value = e.target.value;
  result.value += "" +value;
})
}

function hamtinh(){
     let input = result.value;
     console.log(input.length)
    result.value = eval(input);
}

function reset(){
    result.value = ""
}

function xoa(){
    let input = result.value;
    console.log(input.length)
    result.value = input.substring(0,input.length-1)
}