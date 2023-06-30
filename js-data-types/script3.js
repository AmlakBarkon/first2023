console.log("script3")
const splitMe = "I am the eggman I am the walrus";

function splitString(str) {
  return str.split(" ");
  
}

const newString = splitString(splitMe);
const amlak =[]
newString.forEach(element => {
    if(element =='the'){
        amlak.push('amlak')
    }else{
        amlak.push(element)
    }
});
console.log(newString);
console.log(amlak)