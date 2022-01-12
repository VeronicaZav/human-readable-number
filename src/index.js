module.exports = function toReadable (number) {
    let n = number;
    let num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
    let tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
    let units = n%10;
    let ten = Math.floor(n%100/10);

    if (n < 20) {return num[n];}   
    else if (n < 100) {return tens[Math.floor(n/10)-2] + (units? " " + num[units]:"");}
    else {return num[Math.floor(n/100)] +" hundred" + (n%100 == 0?"": " " + (ten>1? "" + tens[ten-2] + (units? " " + num[units]: ""):""+num[n%100]));}
}
