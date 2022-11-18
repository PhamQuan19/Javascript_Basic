var readlineSync = require('readline-sync');
var fs=require('fs');

var students =[];

function loadData(){
    var fileContent=fs.readFileSync('./data.json');
    students=JSON.parse(fileContent);
}
function showMenu(){
    console.log('1.Show all students');
    console.log('2.Create a new student');
    console.log('3.Save and Exit');
    var option = readlineSync.question('Chon chuong trinh> ');
    switch(option){
        case '1':
            showStudents();
            showMenu();
            break;
        case '2':
            showCreateStudent();
            showMenu();
            console.log(students);
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('wrong option');
            showMenu();
            break;
    }
}


function showStudents(){
    for(var student of students){
        console.log(student.name, student.age);
    }
}

function showCreateStudent(){
    var name = readlineSync.question('Name: ');
    var age = readlineSync.question('Age: ');
    var student={
        name: name,
        age: parseInt(age)
    };
    students.push(student);
}

function saveAndExit(){
    var content=JSON.stringify(students);
    fs.writeFileSync('./data.json',content,{encoding:'utf8'});
}
function main(){
    loadData();
    // console.log(students[0]);
    showMenu();
   
}

main();
