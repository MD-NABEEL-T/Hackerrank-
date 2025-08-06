// The function must return a RegExp object that matches any string  beginning with and ending in the same vowel.
// Sample Input 0
// bcd

// Sample Output 0
// false

// Explanation 0
// This string starts with (and ends in) a consonant, so it cannot start and end with the same vowel.

// Sample Input 1
// abcd

// Sample Output 
// false

// Explanation 1
// This string ends in a consonant, so it cannot start and end with the same vowel.

// Sample Input 2

// abcda
// Sample Output 2

// true
// Explanation 2
// This string starts and ends with the same vowel (a).

// Sample Input 3
// abcdo

// Sample Output 3
// false
// Explanation 3
// This string starts with the vowel a but ends in the vowel o.

function regexVar(s="NABEEL") {
    let n =s.length -1;
    switch(s[0]){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            if(s[0]===s[n])
            {
                re = true;
                break;
            }
            else{
                re = false;
                break;
            }
        default:
            re = false;
    }
    return re;
}
let s = "ona";
console.log(regexVar(s));