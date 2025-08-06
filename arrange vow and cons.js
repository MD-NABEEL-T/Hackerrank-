function vowelsAndConsonants(s) 
{
    let vowels="";
    let consonants="";
    for(let i=0;i<s.length;i++)
    {
        switch(s[i])
        {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowels+=s[i];
                break;
            default :
                consonants+=s[i];
        }
    }
    for (j of vowels){
        console.log(j);
    }
    for(k of consonants){
        console.log(k);
    }


}
let s = "javascriptloops";
vowelsAndConsonants(s);