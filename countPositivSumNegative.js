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



function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}


function countPositivesSumNegatives(input) {
    if (!Array.isArray(input) || !input.length) return [];
    return input.reduce((arr, n) => {
      if (n > 0) arr[0]++;
      if (n < 0) arr[1] += n;
      return arr;
    }, [0, 0]);
  }