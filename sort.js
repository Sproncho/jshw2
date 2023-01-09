let arr = [3,2,1,5,3,4];
let a = 5;
let b= 6;

let arr2 =[ {name:'dan',age:21},{name:'slava',age:11},{name:'vanya',age:30},{name:'dan',age:12}]

function bubbleSort(arr){
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i -1; j++) {
            if(arr[j] > arr[j + 1]){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
}



function bubbleSortByComparator(arr,comp){
    if(typeof  comp != 'function'){
        console.log("wrong arguments");
        return;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i -1; j++) {
            if(comp(arr[j],arr[j+1])){
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
}



bubbleSort(arr);
bubbleSortByComparator(arr2,(arg1,arg2)=> arg1.age > arg2.age);
console.log(arr);
console.log(arr2);