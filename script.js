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

typeWriter("typing1", "Kanav Agarwal", 200)
setTimeout(function(){typeWriter("typing2", "Programmer and Web Developer", 200)}, 2700)
setTimeout(function(){typeWriter("typing3", "View my work", 200)}, 8300)