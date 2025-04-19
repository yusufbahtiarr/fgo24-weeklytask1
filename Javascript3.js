// 1.
const square = (printSquare) => {
    let result = ''
    if(typeof printSquare !== "number"){
        console.log("Input harus bertipe angka");
        return
    }
    for (let i=1; i <= printSquare; i++){
        for (let j=1; j <= printSquare; j++){
            result += j + ' '
        }
        result += "\n"
    }
    console.log(result);
}
square(3)

// 2.
const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arrSpread = [...arr1, ...arr2]
console.log(arrSpread);


