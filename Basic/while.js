var languages=[
    'javascript',
    'java',
    'C++',
    'Python',
    'HTML',
    'Golang'

];

var i=0;
while(i<languages.length){
    console.log(languages[i]);
    i++;
}

//break va continue

for(var i=0;i<10;i++){
    console.log(i);
    if(i>=5){
        break;
    }
}
console.log("===");
//continue
for(var i=0;i<10;i++){
    if(i%2 !==0){
        continue;
    }
    console.log(i);
    
}

//Do While()

