
//Extract the last four characters from the string below;
//"extravaganza"
let x="extravaganza";
console.log(x[8],x[9], x[10], x[11]);
//Insert the following string at the fourth index of the below variable:
//"eat"
//const food = "The quick fox jumped over the lazy dog"
const b=`eat`
const food = `The quick fox jumped ${b} the lazy dog`
console.log(food)
//Count how many times the following string appears in the string variable:
//1. "the"
//2."brown"
const story= `The quick brown fox jumps over the lazy dog`
let count = (story.match(/the/g) || []).length;
console.log(count);
let position = (story.match(/brown/g) || []).length;
console.log(position);

//Using JavaScript, find the following words from the following strings:
//1. "are"
//const string1 = "The pupils are reading in the library";
//2. "sitting"
//const string2 = "The child was sitting on the table before it fell"
const string1 = "The pupils are reading in the library";
let positon=(string1.search("are"));
console.log(positon)
//2."sitting"
const string2 = "The child was sitting on the table before it fell";
let positions=(string2.search("sitting"));
console.log(positions)

//Convert the following strings into the specified format:
//1. UpperCase: "wonderful"
//2. LowerCase: "amazing", "UndERneath"
//3. Title case "A wonderful world"
// TitleCase
let f="A wonderful world";
f=f.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
console.log(f);

