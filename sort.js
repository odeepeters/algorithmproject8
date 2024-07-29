function insertionSort(arr) {
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // The current element to be inserted into the sorted portion
        let key = arr[i];
        // Start from the end of the sorted portion
        let j = i - 1;
        
        // Move elements of the sorted portion that are greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Place the key at its correct position
        arr[j + 1] = key;
    }
    
    return arr;
}

//usage
let array = [5, 2, 9, 1, 5, 6];
console.log("Original Array:", array);
let sortedArray = insertionSort(array);
console.log("Sorted Array:", sortedArray);
