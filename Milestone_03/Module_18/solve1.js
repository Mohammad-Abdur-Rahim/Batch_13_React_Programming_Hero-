// Duplicate Remove array [] ....

function dupicateArray(nums){
    const unique = [];
    for(const num of nums){
        if(unique.includes(num) == false){
            unique.push(num);
        }
    }
    return unique ;

}

const nums = [1,22,22,34,5,34,5,67,9,90,100];
console.log(dupicateArray(nums));