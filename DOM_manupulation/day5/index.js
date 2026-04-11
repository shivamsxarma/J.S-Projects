let add = document.createElement('p');
add.innerText = "hellow from shivam sharma : click here to get more info->>   "
console.log(add)
add.style.backgroundColor = 'grey'
add.style.color = 'white'

let button = document.createElement('button')
button.innerText = "Click me"
console.log(button)
button.style.backgroundColor = 'grey'
button.style.color = 'white'

let divTag = document.createElement('div')
divTag.innerText = "hellow i am div tag"
divTag.style.backgroundColor=('red')
divTag.classList.add("div1")



let body = document.querySelector('body');
body.append(add)
add.append(button)
add.append(divTag)

