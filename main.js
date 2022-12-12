let studentRecords= [
    {name:'john',id:123,marks:98},
    {name:'baba',id:101,marks:23},
    {name:'yaga',id:200,marks:45},
    {name:'wick',id:115,marks:75},
];

let names=[];
for (const stu of studentRecords) {
    names.push(stu.name.toUpperCase());
}
console.log(names);

let names1 = studentRecords.map( index => index.name.toUpperCase());
console.log(names1);

let names2 = studentRecords.filter(stu => stu.marks > 50)
console.log(names2);



let names3 = studentRecords.filter(stu => stu.marks > 50 && stu.id > 120)
console.log(names3);



let totalsum=studentRecords.reduce(((a,m)=>a+m.marks),0)
console.log(totalsum);


let name4 = studentRecords.filter(stu => stu.marks > 50).map(stu => stu.name)
console.log(name4)


let totalMarks = studentRecords.filter(stu => stu.id > 120).reduce((acc,curr) => acc + curr.marks ,0)
console.log(totalMarks);


let summ=0;
let a=[];
for( i in studentRecords){
    if(studentRecords[i].marks < 50){
        studentRecords[i].marks = studentRecords[i].marks + 15
    }
    if(studentRecords[i].marks > 50){
        a.push(studentRecords[i].marks)
    }
}
console.log(a);





let ar=[];
function Student(name,division,rollno)
{
    this.sname=name;
    this.dclass=division;
    this.rno=rollno;
}

let s1= new Student("pooja","e17",1)
let s2= new Student("anika","e18",2)
let s3= new Student("shree","e19",3)
let s4= new Student("shravya","e20",4)
let s5= new Student("ditya","e21",5)
let s6= new Student("rohit","e22",6)

ar.push(s1);
ar.push(s2);
ar.push(s3);
ar.push(s4);
ar.push(s5);
ar.push(s6);
console.log(ar)
