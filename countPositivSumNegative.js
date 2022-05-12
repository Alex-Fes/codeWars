function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
        return [];
    }
    let total = [0,0];
    for (i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            total[1] += input[i];
        } else if (input[i] > 0){
            total[0] += 1;
        }
    }
    return total;
}