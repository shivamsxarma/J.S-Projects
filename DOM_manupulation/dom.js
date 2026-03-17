var a = document.querySelector("h1");
var clicka =0;
// console.log(a);
a.innerHTML = " HTML changed DOM nahi aaya samajh";
a.style.color = "black"
a.style.backgroundColor = "brown"

a.addEventListener("click" , function(){
    a.style.color = "white";
    // a.innerHTML = "aa gaya DOM samajh";
    // a.style.backgroundColor = "purple"

    if   (clicka == 0){
    a.innerHTML = "aa gaya DOM samajh";
    a.style.backgroundColor = "purple"
    clicka=1;
    }
    else{
        a.innerHTML = " HTML changed DOM nahi aaya samajh ";
a.style.color = "black"
a.style.backgroundColor = "brown"
clicka =0;
    }
})

var b = document.querySelector("#bulb");
var flag = 0;
b.addEventListener("click" , function(){
if(flag == 0 ){
b.style.backgroundColor = "yellow"
flag =1 ;
}    

else {
    b.style.backgroundColor = "white"
    flag =0 ;
}

} )


var on = document.querySelector("#on");
var clicked =0;
on.addEventListener("click" , function(){
    if(clicked == 0){
b.style.backgroundColor = "yellow"
clicked = 1;
    }

    else {
b.style.backgroundColor = "white"
clicked =0;
    }

} )


var off = document.querySelector("#off");

off.addEventListener("click" , function(){
b.style.backgroundColor = "white"
} )


var  d = document.getElementById("button2")
// d.innerHTML =  "clicked";
// d.style.backgroundColor = "grey"
d.addEventListener("click" , function(){
     d.style.backgroundColor = "black"
     d.innerHTML = "helllow"
})