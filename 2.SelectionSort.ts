function selectionSort (array :number[]){
    for (let i = 0; i < array.length; i++) {
        let index = i;
        for (let j = i+1; j < array.length; j++) {
            if(array[j]<array[index]){
                index = j
            }
        }
        // let temp = array[i];
        // array[i] = array [index]
        // array [index] = temp
            [array[i],array[index]] = [array[index],array[i]]

    }
    return array;
}
let list: number[] = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];
console.log(selectionSort(list));