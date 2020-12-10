
var A = [10, 4, 7, 11, 900];
var B = [50, 589, 'u', 11, 9999];

function compareArrays(arr1, arr2) {
    function sum(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] == 'number') {
                sum += arr[i];
            }
        }
        return sum;
    }

    if (sum(arr1) > sum(arr2)) {
        return arr1;
    } else {
        return arr2;
    }
}

var largerArray = compareArrays(A, B);
console.log(largerArray);




// function sum(A, B) {
//      sumA = 0;
//      sumB = 0;
//     for (var i = 0; i < A.length; i++) {
//         if (typeof A[i] == 'number') {
//             sumA += A[i];
//         }
//     }

//     for (var i = 0; i < B.length; i++) {
//         if (typeof B[i] == 'number') {
//             sumB += B[i];
//         }
//     }

//     if (sumA > sumB) {
//         return A;
//     } else {
//         return B;
//     }
// }

// // console.log(sum(A, B));


