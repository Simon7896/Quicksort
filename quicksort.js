function quicksort(list, start, end) {
    if (start >= end || start < 0) { return }

    var pivot = partition(list, start, end)

    quicksort(list, start, pivot-1)
    quicksort(list, pivot+1, end)
}

function partition(list, start, end) {
    var pivot = list[end]

    var i = start-1

    for (var j=start; j<end; j++) {
        if (compare(list[j], pivot)) {
            i++
            swap(list, i, j)
        }
    }
    i++
    swap(list, i, end)
    return i
}

function swap(list, i, j) {
    var temp= list[i]
    list[i] = list[j]
    list[j] = temp
}

function compare(a, b) {
    const compareVal = a.localeCompare(b)
    return compareVal < 0
}

list = [
    "Sort a List", 
    "Social Media API", 
    "Try using Bootstrap", 
    "Create a Browser Extension", 
    "Redesign Your Favorite Website", 
    "Build a Data Visualization", 
    "Explore Hardware(Emulators Welcome!"
]

console.log(list)
quicksort(list, 0, 6)
console.log(list)