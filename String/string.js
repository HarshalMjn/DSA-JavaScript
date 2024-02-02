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

//Case convertion: - toUpperCase() and toLowerCase() method
let origstr12 = "Hello World";
let uppercaseString = origstr12.toUpperCase();
console.log(uppercaseString);

//Trimming :
//the trim() method is used for trimming (removing) white spaces from both ends of a string.
// White spaces include spaces, tabs, and newline characters. The trim() method does not modify the original string; instead, 
//it returns a new string with leading and trailing white spaces removed.
let str12 = " this is a string with spaces  ";
let trimStr = str12.replace(/\s/g, '');
console.log(trimStr);
let trim2 = str12.trim()
console.log(trim2);
//The expression /\s/g is a regular expression in JavaScript, 
//and it is used with the replace method to remove all white spaces from a string.

//string split
//syntax of split method string.split(separtor,limit);
//separator: This is the delimiter based on which the string will be split.
// It can be a string or a regular expression. 
//If this parameter is omitted or an empty string is provided, 
//the string will be split into an array of characters.

//limit: This is an optional parameter that specifies the maximum number of elements to include in the resulting array. 
//If this parameter is provided, the array will have at most limit elements,
// with the last element containing the remaining part of the string.

//1)Splitting by Space:
let sentence = "This is a sample sentence";
let words = sentence.split(' ');
console.log(words); // Outputs: ["This", "is", "a", "sample", "sentence."]

//2)Splitting by Comma and limit:

let csvData = "John,Doe,30,New York";
let values = csvData.split(","); // Outputs: ["John", "Doe", "30", "New York"]
let values1 = csvData.split(",",3)
console.log(values,values1); // Outputs: ["John", "Doe", "30"]

//3)splitting by Regular Expression:
let mixedData = "apple,banana;cherry|data";
let items = mixedData.split(/[;,|]/);
console.log(items); //['apple', 'banana', 'cherry', 'data']

//4)Splitting with Limit:
let longString = "one, two, three, four, five";
let limitedArray = longString.split(",",3);
console.log(limitedArray);  ['one', ' two', ' three']


//Join() method:
//method in JavaScript is used to join the elements of an array into a string. 
//It takes an optional parameter, which is a separator that specifies how the array elements should be separated in the resulting string.
// If no separator is provided, the default is a comma (,).

//Basic Syntax:array.join(separator);
//array: The array whose elements you want to join into a string.
//separator: (Optional) A string that specifies how to separate the elements in the resulting string.
// If omitted, a comma is used as the default separator.

//Example Usage:
let fruits = ["apple", "banana", "orange"];
let joinString = fruits.join(",")
console.log(joinString); // Outputs: "apple, banana, orange"

//Default Behavior: If no separator is specified, the join() method uses a comma as the default separator.
let numbers = [1,2,3,4,5];
let defnum = numbers.join();
console.log(defnum); // Outputs: "1,2,3,4,5"

//Use Case with an Empty Separator:You can use an empty string as the separator to join the elements without any separation.
let character = ['a', 'b', 'c', 'd'];
let noSep = character.join('');
console.log(noSep); // Outputs: "abcd"

//Joining with a Custom Separator:
//You can use a custom separator to join the elements with a different character or string.
let colors = ['red', 'green','blue'];
let custSep = colors.join('-');
console.log(custSep); // Outputs: "red - green - blue"

//The split() and join() methods are often used together when working with strings and arrays. Let's go through an example:
//Scenario:
//Suppose you have a string containing names separated by commas, 
//and you want to split this string into an array of names. Later,
// you want to modify the array and join the elements back into a string.

//original string of names separated ny comms
let namesString = 'John, Jane, Bob, Alice';

//step 1 : split the string into array using split()
let namesArray = namesString.split(', ');

// Step 2: Modify the array (for example, add a new name)
namesArray.push("Harshal");

//// Step 3: Join the array elements into a string using join()
let updateNameString = namesArray.join(', ');

//Display the result
console.log("Original string:", namesString); //Original string: John, Jane, Bob, Alice
console.log("Array of names:", namesArray); //Array of names: [ 'John', 'Jane', 'Bob', 'Alice', 'Harshal' ]
console.log("Updated string:", updateNameString); //Updated string: John, Jane, Bob, Alice, Harshal













