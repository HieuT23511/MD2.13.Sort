// export class BubbleSort {
//     static list: number[] = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];
//     static bubbleSort(array: number[]) {
//         let needNextPass: boolean = true;
//         for (let i = 1; i < array.length && needNextPass; i++) {
//             needNextPass = false;
//             for (let j = 0; j < array.length - i; j++) {
//                 if (array[j] > array[j + 1]) {
//                     let temp = array[i];
//                     array[i] = array[i + 1];
//                     array[i + 1] = temp;
//                     needNextPass = true;
//                 }
//             }
//         }
//     }
// }
// BubbleSort.bubbleSort(BubbleSort.list);
// for (let k = 0; k < BubbleSort.list.length; k++) {
//     console.log(BubbleSort.list[k]+'')
// }

function bubbleSort(array: number[]): number[] {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                // let temp: number = array[j];
                // array[j] = array[j + 1];
                // array[j + 1] = temp;
                [array[j],array[j+1]] = [array[j+1],array[j]]
            }
        }
    }
    return array;
}
let list: number[] = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];
console.log(bubbleSort(list));
