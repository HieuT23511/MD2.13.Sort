export class Sort {
    static unsortedArray: number[] = [3, 2, 5, 4, 1, -2, 6];

    static insertionSort(array: number[]) {
        for (let i = 1; i < array.length; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > key) {
                array [j + 1] = array [j];
                j--;
            }
            array[j + 1] = key;
        }
    }
}

Sort.insertionSort(Sort.unsortedArray);
Sort.unsortedArray.forEach(elements => console.log(elements));