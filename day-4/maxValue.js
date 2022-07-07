function maxthreeValue(a,b,c){
    max_value = 0;

    if(a>b){
        max_value = a;

    }
    else{
        max_value = b;
    }
    if(c>max_value){
        max_value = c
    }{
        return max_value
    }
}


console.log(maxthreeValue(1,2,-3));
console.log(maxthreeValue(10,200,3));

console.log(maxthreeValue(1,-2,3012));