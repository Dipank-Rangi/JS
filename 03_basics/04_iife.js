// Immmediately Invoked Function Expressions (IIFE)


// function ko without call kre hi vo execute ho jaaye .... like as jaise hi code run hua ye apne aap run ho jaaye gya isko call krne ki jrurat nhi hai

// global scope ke pollution se bachne k lia hum IIFE ka use krte hain


// After IIFE semicolon is imp(;)
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})() ;

( (name) => {
    console.log(`hii... ${name}`);
}
 )("DIPANK");

