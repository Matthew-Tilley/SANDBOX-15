    /*
    
    YouTube tutorial
    JavaScript function practice - is one word inside another?
    
    */


    function wordChecker(w1, w2){
        
        var isit = w1.indexOf(w2) > -1;
        
        return isit;
        
    }

    console.log(wordChecker("laptop", "lap"));
    // This works as expected.



/*  
    YouTube tutorial
    Code Explained / JavaScript Functions - LESSON
    
    This is actually the FIRST video, and I watched it after completing
    the second "PRACTICE" one.  Things learned:
    
    (1) For quite some time, I have been confused about the "semicolon / 
        no semicolon" connundrum related to functions.  It *seemed* like
        some people put them at the end of a function, whereas others
        omitted them.
        
    (2) In a FUNCTION DECLARATION it is *NOT* necessary to put a semicolon
        at the end because it is *NOT* an "executable statement."
        
    (3) In an ANONYMOUS function it *IS* necessary to put a semicolon at the
        end because it *IS* an executable statement.
        
    (4) All of the above, simplified:
        * Function declaration - semicolon;
        * Function expression (anonymous function) then - put a semicolon.
        
    (5) I understood the concept before, but this video did a good job of
        explaining the difference between "parameters" and "arguments."
        
        PARAMETERS are just "NAMES" being used as a temporary placeholder
        of sorts.
        
        ARGUMENTS are ACTUAL VALUES passed into the function.
        
    
    
*/




/*  
    YouTube tutorial
    Code Explained / JavaScript Functions - PRACTICE
*/



/*

(4A)    Sure enough, just did it again...worked like a charm.

        For a *VERY LONG* time I have (again) been under the 
        mistaken impression that GLOBAL variables needed to be
        pulled in VIA THE PARAMETERS AND ARGUMENTS but...that's
        obviously NOT the case.

        That might also go a long way in explaining why I have
        been having such a hard time with functions, and RETURN
        statements in particular!!!

let r = 10;
let q = 10;

function add(u,p)
{
    return r + q + u + p;
}

console.log(add(10,10));

*/



/*

(4) Now we might be getting somewhere - this may have very well
    been part of the problem.  I didn't realize that functions
    could reach out and *automatically* pull a GLOBAL variable
    into their scope.
    
    Before, I thought LOCAL and GLOBAL scopes were totally and
    completely separate things...unable to link-up unless there
    was specific action taken to connect them.  For example:

    let x = 12;
    let z = 99;

    function add(x,y){
    
    let y = 5;
    
    return x + y + z;
    
    }

    In the example above, I had THOUGHT one needed to SPECIFICALLY
    pull the variable in by specifying it as a parameter.  That's
    obviously not true, because the function below works just fine
    and dandy exactlyt as it is:    
        

let x = 12;
let z = 99;

function add(){
    
    let y = 5;
    
    return x + y + z;
    
}


console.log( add() );

*/




/*

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

*/




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

