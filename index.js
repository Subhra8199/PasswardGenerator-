let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let passLength = 15

let ElPassOne = document.getElementById("passO")
let ElPassTwo = document.getElementById("passT")


function randomChar(){
   let randomNum = Math.floor(Math.random() * characters.length)
   return characters[randomNum] 
}
function startGen(){
    let randomPasswordOne = ""
    let randomPasswordTwo = ""
        for(let i=0; i < passLength; i++){
            randomPasswordOne += randomChar() 
    }
    ElPassOne.textContent = randomPasswordOne
        
        for(let i=0; i < passLength; i++){
             randomPasswordTwo +=  randomChar()   
        }
    ElPassTwo.textContent = randomPasswordTwo
}




