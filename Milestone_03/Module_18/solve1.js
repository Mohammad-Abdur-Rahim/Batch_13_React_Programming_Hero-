// 12 inche =  1 feet ....

function inchToFeet(inch){
    const feet = parseInt(inch / 12 );
    const inche = inch % 12 ;
    const  result = feet + ' ft ' + inche + ' inch';
    return result ;
}

const myHeight = inchToFeet(80);
console.log(myHeight);









