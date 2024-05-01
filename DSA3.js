let arr = [11, 22, 33, 65, 55, 78, 14, 31,28]

let element = 58
let index = 4

for (let i = arr.length-1; i >= index; i--){
   
    arr[i + 1] = arr[i]

    if (i == index) {
        arr[index] = element
    }
}
console.log(arr);