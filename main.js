
function sum(A, B) {
     sumA = 0;
     sumB = 0;
    for (var i = 0; i < A.length; i++) {
        if (typeof A[i] == 'number') {
            sumA += A[i];
        }
    }

    for (var i = 0; i < B.length; i++) {
        if (typeof B[i] == 'number') {
            sumB += B[i];
        }
    }

    if (sumA > sumB) {
        return A;
    } else {
        return B;
    }
}

// console.log(sum(A, B));


