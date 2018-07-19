
/*  
    YouTube tutorial
    Code Explained / JavaScript Functions - PRACTICE
*/


(3) Now I'm creating a function that RETURNS two numbers passed into it
    after they've been added together.  Wrapping it in a console.log() 
    so I can "see" the output, it works as expected.
    
    I understand that the "a" and "b" in the actual function declaration
    are "parameters" that just act as "name definitions" for passing
    arguments into the function when called.$anchorScroll
    
    I also understand that when the function is invoked (called) the
    items passed into the parenthesis are called "arguments" at that
    point.
    
    Still no problem, conceptually...
    

function add(a,b){
    
    return a + b;
    
}

console.log(add(5,10));


/*

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

*/



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

