reverseString= (s) =>{
    try {
       
        s = s.split("").reverse().join("");
        // first we split then it becomes an array so if we dont use join it will print reverse array ok so use join() then becomes an array back
    } catch (e) {
        console.log(e.message);
    } finally {
        console.log(s);
    }
}
reverseString("123");
reverseString(123);