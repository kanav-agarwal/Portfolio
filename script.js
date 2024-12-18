function typeWriter(elementId, cursorId, text, speed){
    let i = 0
    let element = document.getElementById(elementId)
    let cursor = document.getElementById(cursorId)

    function addLetter(){
        if(i < text.length){
            element.innerHTML += text.charAt(i)
            i++
        }
        else{
            clearInterval(textInterval)
            clearInterval(cursorInterval)
            cursor.style.visibility = 'hidden'
        } 
    }  

    function blinkingCursor(){
        cursor.style.visibility = cursor.style.visibility === "hidden" ? "visible":"hidden"; 
    }

    let cursorInterval = setInterval(blinkingCursor, 250)
    let textInterval = setInterval(addLetter, speed)
}


let timePerChar = 175
setTimeOut(function(){typeWriter("typing1", "cursor1", "Kanav Agarwal", timePerChar)}, 0)
setTimeout(function(){typeWriter("typing2", "cursor2", "Programmer and Web Developer", timePerChar)}, 13 * timePerChar)
setTimeout(function(){typeWriter("typing3", "cursor3", "View my work", timePerChar)}, (13 + 28) * timePerChar)
