// const students = [
//     {
//         id: 1,
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85,
//     },
//     {
//         id: 2,
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         id: 3,
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         id: 4,
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     }
// ];
//
// // ["Bob", "Alex",  "Nick", "John"]
//
// // const getNames = (arr) => {
// //     const result = []
// //     const getNewValue = (el) => el.name
// //     for (let i = 0; i< arr.length; i++) {
// //         const newValue = getNewValue(arr[i])
// //         result[i] = newValue
// //     }
// //     return result
// // }
// //
// // console.log(getNames(students))
//
// // ["Bob, 22 yo, 89 score",.....]
//
// // const getData = (arr) => {
// //     const result = []
// //     const getNewValue = (el) => `${el.name}, ${el.age}, ${el.scores}`
// //     for (let i=0;i < arr.length; i++){
// //         const newValue = getNewValue(arr[i])
// //         result[i] = newValue
// //     }
// //     return result
// // }
// // console.log(getData(students))
//
// const easyMap = (arr, fn) => {
//     const result = []
//     for (let i = 0; i < arr.length; i++){
//         const newValue = fn(arr[i])
//         result[i] = newValue
//     }
//     return result
// }
//
// console.log(easyMap(students , (el) => el.name) )
// console.log(easyMap(students , (el) => `${el.name}, ${el.age}, ${el.scores}`) )
// console.log(easyMap(students , (el) => el.scores) )
//
// console.log(students.map((el => el.name)))
// console.log(students.map((el => `${el.name}, ${el.age}, ${el.scores}`)))
// console.log(students.map((el => el.name)))
//
// const easyFilter = (arr, fn) => {
//     const result = []
//     for (let i=0; i < arr.length; i++){
//         if (fn(arr[i]) === true){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
//
// console.log(easyFilter(students,el => el.scores >= 100))
//
// const easyFind = (arr, fn) => {
//     for (let i = 0; i < length; i++){
//         if(fn(arr[i] === true)){
//             return arr[i]
//         }
//     }
// }
// // if ( true(students[1] === true))
// // students[1].name === Alex //true
// // ("Alex" === true)
// function el () {
//     el.name === "Alex"
//     return el.name
// }
// console.log(el(students[1]))
// console.log(easyFind(easyFind(students, el => el.name === "Alex")))
// console.log(students.find(el => el.name === "Alex"))
//
// // ["Bob", "Alex", "Nick", "John"] => "Bob, Alex, Nick, John"
// const easyJoin = (arr, separator = ",") => {
//     let result = ""
//     let realseparator = separator ? separator : ","
//     for (let i = 0; i < arr.length; i++) {
//         if (i < arr.length - 1) {
//             result = result + arr[i] + separator
//
//         } else {
//             result += arr[i]
//         }
//     result = (i < arr.length -1) ? result + arr[i] + realseparator: result + arr[i]
//     }
//     // result = (i < arr.length -1) ? result + arr[i] + realseparator: result + arr[i]
//     return result
// }
//
// console.log(easyJoin(["Bob", "Alex",  "Nick", "John"], " "))
// console.log(easyJoin(["Bob", "Alex",  "Nick", "John"] ))
//1. Реализуйте функцию, которая принимает в качестве параметра массив чисел и возвращает самое большое значение из массива (максимум массива)
// [1,22,3,4,5]
// const masBig = (mas) => {
//     let masB = []
//     let count = 0;
//     for (let i = 0; i < mas.length; i++) {
//         if(mas[i] > count) {
//             count = mas[i]
//         }
//     }
//     return count
// }
// const array = [1,2,4,2,4,2,5]
// console.log(masBig(array))
// //2. Реализуйте функцию, которая принимае в качестве параметра массив с вложенными в него массивами из чисел и возвращает
// //массив, состоящий из максимальных значений каждого вложенного массива.
// // [[1,2,3], [4,5,6]] => [3,6]
// const masBigArray = (mas) => {
//     let masB = []
//     let count = 0;
//     for(let j = 0; j < mas.length; j++){
//         for (let i = 0; i < mas.length; i++) {
//             if (mas[j][i] < mas[j][i + 1]) {
//                 count = mas[j][i + 1]
//             }
//         }
//         masB.push(count)
//     }
//     return masB
// }
// const arrayMas = [[1,2,3], [4,5,6]]
// console.log(masBigArray(arrayMas))
// //3. Реализуйте функцию, которая принимае в качестве параметра массив значений и возвращает новый массив, очищенный от значений,
// // которые могут быть интерпретированы как false
// // [1,2,3,4, false, 5,6] => [1,2,3,4,5,6]
// const masTrueFunc = (mas) => {
//     let masB = []
//     let count = 0;
//         for (let i = 0; i < mas.length; i++) {
//             if (typeof mas[i] === "number") {
//                 masB.push(mas[i])
//             }
//         }
//
//     return masB
// }
// const masTrue = [1,2,3,4, false, 5,6]
// console.log(masTrueFunc(masTrue))
// //4. Реализуйте функцию, которая принимае в качестве параметра массив произвольных элементов и переменную, которая содержит произвольное значение.
// // Если это значение содержится в массиве, функция должна возвращать индекс первого вхождения значения в массив, если не содержится - произвольное отрицательное число.
// // ([1,2,3,4,5,5], 5) => 4, ([1,2,3,4,5,5], 10) => -1
// const findIndex = (mas, elem) => {
//     let masB = []
//     let count = 0;
//     for (let i = 0; i < mas.length; i++) {
//         if (mas[i] === elem) {
//             return i
//         }
//     }
// }
// const arrayIndex = [1,2,3,4,5,5]
// const index = 5
// console.log(findIndex(arrayIndex,index))
// //5. Реализуйте функцию, которая возвращает массив,  в котором элементы исходного массива разбиты на вложенные массивы указанной длинны
// // ([1,2,3,4,5,6], 3) => [[1,2,3], [4,5,6]]
// // const masLength = (mas,elem) => {
// //     let masB = []
// //     let count = 0;
// //     for(let j = 0; j < mas.length/elem; j++){
// //         for (let i = 0; i < 3; i++) {
// //                 masB[j].push(mas[count])
// //                 count += 1
// //         }
// //     }
// //     return masB
// // }
// // const arrayLenght = [1,2,3,4,5,6]
// // const indexLenght = 3
// // console.log(masLength(arrayLenght,indexLenght))
// //6. Реализуйте функцию, которая принимае в качестве параметра массив чисел и количество максимальных элементов.
// // Возвращает массив, сосотоящий из указанного количества максимальных элементов
// // ([1,22,3,4,5], 2) => [22, 5]
// // NB!!! При решении использовать только цикл, не испльзовать методы массивов и функцию Math.max()
const masBigIndex = (mas,elem) => {
    let masB = []
    let count = 0;
    let double = mas.slice()
    for (let j = 0; j < elem; j++) {
        for (let i = 0; i < double.length; i++) {
            if (double[i] > double[i - 1] && double[i] < double[i + 1] && double[i+1] > masB[j]) {
                count = double[i+1]
                let a = double.indexOf(double[i+1])
                double.splice(a,1)
                masB.push(count)
                i = double.length
            }else if (double[i] > double[i + 1]) {
                count = double[i]
                let a = double.indexOf(double[i])
                double.splice(a,1)
                masB.push(count)
                i = double.length
            }
            // if (double[i] > double[i-1] &&  i === double.length-1){
            //     count = double[i+1]
            //     masB.push(count)
            // }
        }
        // i = 0
        // masB.push(count)
        // double.splice()
    }
    console.log("rrr", double)
    return masB
}
console.log("six",masBigIndex([1,22,7,3,4,5,10], 2))

