var plusOne = function(digits) {
    let last = digits.length-1
    console.log("Last is ",digits[last])
    if (digits[last]==9) {
        digits[last]=1;
        digits.push(0) }
    else
        digits[last]+=1
    return digits
};

digits = [2,9]
console.log(plusOne(digits))