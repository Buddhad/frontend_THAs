var student = { name : "Buddhadeb", sclass : "Second Year", rollno : 1900290130156}; 
for(let item in student){
    console.log(item,student[item]);
}
delete student.rollno;
for(let item in student){
    console.log(item,student[item]);
}