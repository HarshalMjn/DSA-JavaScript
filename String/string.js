//-----------------------------------------> Declaration: <-----------------------------------------
let singleQuoted = 'This is string';
let doubleQuoted = "This is also string";
let backticks = `Strings can be create with backtiks`

console.log(singleQuoted) 
console.log(doubleQuoted) 
console.log(backticks) 

//-----------------------------------------> immutable nature: <----------------------------------------
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

//-----------------------------------------> iterating <-----------------------------------------
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



//-----------------------------------------> Concatenation: <-----------------------------------------
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



//-----------------------------------------> Substring Extraction: <-----------------------------------------
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

//-----------------------------------------> Trimming : <-----------------------------------------
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

// -----------------------------------------> string split <-----------------------------------------
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


//-----------------------------------------> Join() method: <----------------------------------------------------
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

//------------------------------------> Replace Characters <------------------------------------------------------
//To replace characters in a string in JavaScript,
// you can use the replace() method. 
//The replace() method searches a string for a specified value or a regular expression and returns a new string where the specified values are replaced

//normal
 let origi = "Hello, World! Hii";
 let replacestr = origi.replace('World', 'Universe'); 
 
 //regular expressions for more complex replacements or  Multiple Occurrences:
 let repstr = origi.replace(/l/g, 'X') 

 //Case-Insensitive Replacement:
 let repstr1 = origi.replace(/hii/i,'bye')

 console.log(replacestr); // Outputs: "Hello, Universe! Hii"
 console.log(repstr); // Outputs: HeXXo, WorXd! Hii
 console.log(repstr1); //Hello, World! bye



 //------------------------------------------->Reverse a string <----------------------------------------------------
 //1)Using Array Methods (split() and reverse()): (best method)
 let origs = "Hello, World!";
 let revStr = origs.split('').reverse().join('');
 console.log(revStr);

 //2)Using a Loop:
 let orrg = "Hello, World!";
 let revsString =  '';

 for(let i =orrg.length-1; i >= 0; i--) {
    revsString += orrg[i]
 }
 console.log(revsString);

 //3)Using Array.from() and reverse():
 //The Array.from() method is used to create an array from an iterable
 // (in this case, the original string), and then reverse() and join('') are applied.
 let originalString12 = "Hello, Wolrd!";
 let revString = Array.from(originalString12).reverse().join('');
 console.log(revString);

//--------------------------------------->Palindrome string <------------------------------------------------------------------
//A palindrome is a string that reads the same backward as forward.
let paliStr = "A man, a plan, a canal, Panama!";
let clranString15 = paliStr.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

let revStr14 = clranString15.split('').reverse().join('');
if( clranString15  ===  revStr14) {
    console.log(clranString15,"is Palindrome");
} else {
    console.log(clranString15,"is Not Palindrome");
}

//Using functionction
function isPalidrome1(str) {

    const cleanzstr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    console.log(cleanzstr);

    const revStr = cleanzstr.split('').reverse().join('');
   
    return cleanzstr === revStr;
}
 // Example usage:
 let testString1 = "A man, a plan, a canal, Panama!";
 console.log(isPalidrome1(testString1));
 

//--------------------------------->  ANAGRAM STRING <---------------------------------------------

//An anagram is a word or phrase formed by rearranging the letters of another.
// To check if two strings are anagrams, 
//you can compare whether they have the same characters with the same frequency.

function areAnagramString(str1,str2) {

    let cleanstr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let cleanstr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    return cleanstr1.split('').sort().join('') === cleanstr2.split('').sort().join('');

}

let word1 = 'abcd';
let world2 = 'h';

if(areAnagramString(word1,world2)) {
    console.log(`${word1} and ${world2} are anagram`)
} else {
    console.log(`${word1} and ${world2} are not anagram`);
}


//-----------------------------------> longestSubstring <---------------------------
function longestSubstringWithoutRepeating(s) {
    let longestSubstring = '';
    let currentSubstring = '';
    let charIndexMap = {};

    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];

        if (charIndexMap[currentChar] === undefined || charIndexMap[currentChar] < i - currentSubstring.length) {
            currentSubstring += currentChar;
        } else {
            currentSubstring = s.substring(charIndexMap[currentChar] + 1, i + 1);
        }

        charIndexMap[currentChar] = i;

        if (currentSubstring.length > longestSubstring.length) {
            longestSubstring = currentSubstring;
        }
    }

    return longestSubstring;
}

// Example usage:
let inputString = "Harshal";
let result = longestSubstringWithoutRepeating(inputString);
console.log(result);
// Outputs: "Harsh"

























