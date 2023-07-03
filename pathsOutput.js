
// Input
// home/arts/paint.jpg

// Output
// home
// |--arts
//    |--paint.jpg



const dir = "home/arts/paint.jpg"
let path = dir.split("/")
let result = path.join(" |--")
let result2 = result.split(" ")
let arr = [result2[0]];
let space = ""
for(let i = 1; i < result2.length; i++) {

    let el = space + result2[i];
    arr.push(el);
    space += "   "

}
let arr2 = arr.join("\n")

console.log(arr2)
