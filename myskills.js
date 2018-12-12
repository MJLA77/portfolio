function animateLeft(obj, from, to){
    if(from >= to){         
        obj.style.visibility = 'hidden';
        return;  
    }
    else {
        var box = obj;
        box.style.marginLeft = from + "px";
        setTimeout(function(){
            animateLeft(obj, from + 1, to);
        }, 25) 
    }
 }
 
 function animateMe() {
 animateLeft(document.getElementById('skills'), 100, 700);
 }