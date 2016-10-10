// https://codility.com/programmers/lessons/4-counting_elements/missing_integer/
function solution(A) {
    let minimalPositiveInteger = 1;

    A = A.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    
    for (let i = 0, max = A.length; i < max; i += 1) {      
        let num = A[i];   
        if (num > 0 && num === minimalPositiveInteger) minimalPositiveInteger = num + 1;
    }
    
    return minimalPositiveInteger;
}
