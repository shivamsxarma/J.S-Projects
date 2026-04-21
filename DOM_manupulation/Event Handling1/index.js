// event handling
/** @type {HTMLDivElement} */
/** @type {HTMLInputElement} */
/** @type {HTMLButtonElement} */

// let firstbtn = document.querySelector('.firstbtn')
// firstbtn.onclick = ()=>{
//     alert('hatt bhai')
// }

// let secondbtn = document.querySelector('.secondbtn')
// secondbtn.addEventListener('click',()=>{
//     alert('ye hai asli event listner')
// })

// firstbtn.addEventListener('mouseup',function(){
//     alert('mouse downed')
// })

// firstbtn.addEventListener('mousedown',function(){
//     alert('mouse up')
// })
// firstbtn.addEventListener('auxclick',function(){
//     alert('right click happened')
// })
// firstbtn.addEventListener('contextmenu',function(){
//     alert('right click happened')
// })


// firstbtn.addEventListener('keypress',()=>{
//     console.log("key press huaaa hauu")
// })

let formName = document.querySelector('form')
let nameInput = document.querySelector('#name')
let emailInput = document.querySelector('#email')
let submitBtn = document.querySelector('submitBtn')
let body = document.querySelector('body')
let box =  document.querySelector('#box')


formName.addEventListener('submit',(e)=>{ 
e.preventDefault()
if((!nameInput.value || !emailInput.value)){
    alert('bhar isko bhai')
    return;
}

box.innerHTML = `<p>${nameInput.value}</p>
<p>${emailInput.value}</p>` hellow 
})shigukgkudqwuilb x