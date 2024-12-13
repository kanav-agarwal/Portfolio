function typeWriter(elementClass, text, speed){
    let i = 0
    let element = document.getElementsByClassName(elementClass)

    let interval = setInterval(addLetter, speed)

    function addLetter(){
        if(i < text.length){
            element[0].innerHTML += text.charAt(i)
            i++
        }
        else{
            clearInterval(interval)
        } 
    }  
}
let timePerChar = 175
typeWriter("typing1", "Kanav Agarwal", timePerChar)
setTimeout(function(){typeWriter("typing2", "Programmer and Web Developer", timePerChar)}, 13 * timePerChar)
setTimeout(function(){typeWriter("typing3", "View my work", timePerChar)}, (13 + 28) * timePerChar)