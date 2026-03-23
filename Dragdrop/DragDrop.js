// const btn = document.getElementById("btn");
// btn.onclick = function(){
//     console.log("hellow world from shivam")
// }

// btn.addEventListener("click", function (){
//     console.log("clicked")
// })
// btn.addEventListener("click", function (){
//     console.log("clicked 2")
// })

// btn.addEventListener("click", function (){
//     console.log("clicked 3")
// })
const parent = document.getElementById("parent")
const child = document.getElementById("child")
const body = document.body;


body.addEventListener("click",function(){
    console.log("hellow body clicked")
})

parent.addEventListener("click",function(){
    console.log("hellow parent clicked")
})
child.addEventListener("click",function(){
    console.log("hellow child clicked")
})