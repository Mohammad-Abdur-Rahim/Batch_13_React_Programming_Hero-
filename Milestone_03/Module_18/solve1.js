// Leap Year Check ....

function isLeapYear(year){

    if( year % 400 ==0 || (year % 100 !== 0  &&  year % 4 == 0)){
        
        return 'Leap Year' ;
    }
    else{
        return 'No' ;
    }
}

console.log(isLeapYear(2000));










