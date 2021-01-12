function quickSort(array) {
    if (array.length < 1) return []
    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[0] > array[i]) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return [].concat(quickSort(left), array[0], quickSort(right))
}

function mergeSort(array) {
    if (array.length < 2) return array;

    let middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle, array.length)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let result = []

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    while (left.length) result.push(left.shift())
    while (right.length) result.push(right.shift())

    return result

}


console.log(mergeSort([9, 5, 3, 6, 7, 1, 0, 8]))
console.log(quickSort([9, 5, 3, 6, 7, 1, 0, 8]))