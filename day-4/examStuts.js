function examStuats(totalMarks,exam){
    if(exam){
        return totalMarks >=90
    }else{
        return( totalMarks >= 89 && totalMarks <=100);
    }
}
console.log(examStuats(78));
console.log(examStuats(95));

console.log(examStuats(91));
