
let countEl = document.getElementById("count-El")
let SaveEl = document.getElementById("save-El")

let count = 0; 

function increase(){
    count+=1;
    countEl.innerText= count;
}
function reset(){
    count = 0;
    countEl.innerText= count;
}

/*name = 'Abhinav'
greeting = 'Hi, my name is'
myGreeting = greeting + ' '+name 
console.log(myGreeting) */

function save(){
    let a = count + " - "
    SaveEl.textContent += a;
} 

 /*Challenge

   let firstName =  "Abhinav"
   let lastName = "Pratap"

   let fullName = firstName + " " + lastName

   console.log(fullName)*/


 






