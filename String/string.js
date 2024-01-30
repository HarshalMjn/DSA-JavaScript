//Declaration:
let singleQuoted = 'This is string';
let doubleQuoted = "This is also string";
let backticks = `Strings can be create with backtiks`

console.log(singleQuoted) 
console.log(doubleQuoted) 
console.log(backticks) 

//immutable nature:
//Strings in JavaScript are immutable, meaning their values cannot be changed after they are created.
//While you can perform operations on strings to create new strings, the original string remains unchanged.
let originalString = "Hello";
let newString = originalString + " , Mahajan";
console.log(newString); // Hello word!
console.log(originalString) //Hello

//indexing
//zero-base indexing
let str1 = "Harshal";
console.log(str1[0]); //H
console.log(str1.length) //7
console.log(str1[10]); //undefine

//iterating
//a)using for loop:
//You can use a for loop along with the string length to iterate over each character.

let myStr1 = "Harshal";

for( let i = 0; i< myStr1.length; i++) {
    console.log(myStr1[i]);
}

//b)using for of loop:
//The for...of loop is a more concise way to iterate over the characters in a string.
let myStr2 = "Harshal";
for(let char of myStr2) {
    console.log(char);
}

//c)using forEach Method
//You can convert the string into an array using split('') and then use the forEach method.
 let myStr3 = "Hello";
 
 myStr3.split('').forEach(function(char){
    console.log(char);
 })



//Concatenation:
//Concatenation is the process of combining two or more strings into a single string.
// In JavaScript, you can concatenate strings using the + operator or the concat method.
// Here's an explanation of both methods:

//a) Using the " + " operator
//The + operator is not only used for addition but also for string concatenation.
//When the + operator is used with strings, it concatenates them.

let firstName = "Harshal";
let lastName = "Mahajan";
let fulName = firstName + " " + lastName;
console.log(fulName);

//b) Using the concat Method:

//The concat method is available for strings and is used to concatenate one or more strings.
let string1 = "Harshal,";
let string2 = "Mahajan";
let greeting = string1.concat(string2);
console.log(greeting);



//Substring Extraction:
//In JavaScript, you can extract a substring from a string using:
//the substring method or by using string slicing with square brackets.

//1)Using substring Method:
//The substring method takes two parameters: the starting index and the ending index (optional). 
//It returns a new string containing characters from the original string within the specified range.
let originalstr = "Harshal Mahajan";
let substring = originalstr.substring(0,5)
console.log(substring); //Harsh
// the substring starts at index 0 and includes characters up to, 
//but not including, the character at index 5.

//2)Using String Slicing:
//You can use string slicing with square brackets to extract a substring.
//The syntax is string[startIndex, endIndex].
let originalstr1 = "Hello Wolrd!";
let substring1 = originalstr1.slice(0,5);
console.log(substring1);

