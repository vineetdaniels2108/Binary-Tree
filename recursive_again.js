// Recursive binary search

function binary(arr, value){
    var middle = Math.floor(arr.length/2);
    if(arr[middle] == value) {
        return true;
    }
    else if(value < arr[middle] && arr.length > 1) {
        return binary(arr.slice(0, middle), value);
    }
    else if(value > arr[middle] && arr.length > 1) {
        return binary(arr.slice(middle, arr.length), value)
    } else {
        return false
    }
}

// Greatest Common Factor

function rGCF(a, b) {
    if (a == b) {
        return a;
    }
    if (a > b) {
        return rGCF(a-b, b);
    }
    if (a < b) {
        return rGCF(a, b-a);
    }
}


//reworking for big numbers

function GCF(a, b) {
    if (a == b) {
        return a;
    }
    if (a > b) {
        if ((a/b) % 1 === 0) {
            return b;
        } else {
            return GCF(a-b, b);
        }
    }
    if (a < b) {
        if ((a/b) % 1 === 0) {
            return b;
        } else {
            return GCF(a, b-a);
        }
    }
}