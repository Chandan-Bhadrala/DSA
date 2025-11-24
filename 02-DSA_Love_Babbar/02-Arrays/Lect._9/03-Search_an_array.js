function maxAndMin(arr) {
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }

    return [max, min];
}

// Example usage:
const size = 5;
const arr = [4, 2, 9, 1, 7];

const result = maxAndMin(arr);
console.log("Maximum:", result[0], "Minimum:", result[1]);
