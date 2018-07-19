
/*  
    YouTube tutorial
    Code Explained / JavaScript Functions - PRACTICE
*/



(2A)    More practice
        So...this worked exactly as I expected.  The anonymous function
        was assigned to the variable "funky."  When invoked, it returned
        a string value of "HEY!" to the variable of "funky".  Thus, when
        I call the function (wrapped in an alert) it outputs "HEY!" to
        the screen.  Still no problem, conceptually...

let funky = function(){
    return "HEY!";
}

alert(funky());



/*

(2) Anonymous function method
    I intuitively recognize this as being an anonymous function; no 
    problem there.  I also realize it is invoked by calling the
    variable name it is assigned to, then adding parens to call it
    as a function...no problem.

let funky = function(){
    alert("HEY!");
}

funky();

*/




/*

(1) Function declaration method - I totally understand this / no problem.

function funky(){
    
    alert("HEY!");
    
}

funky();

*/

