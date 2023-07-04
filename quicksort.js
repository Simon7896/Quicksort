function quicksort(list, start, end) {
    if (start >= end || start < 0) { return }

    var pivot = partition(list, start, end)

    quicksort(list, start, pivot-1)
    quicksort(list, pivot+1, end)
}

function partition(list, start, end) {
    
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

console.log(quicksort(list))