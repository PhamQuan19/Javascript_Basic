var courses=[
    {
        id:1,
        name: 'Javascript',
        coin:10
    },
    {
        id:2,
        name: 'HTML,CSS',
        coin:0
    },
    {
        id:3,
        name: 'Ruby',
        coin:0
    },
    {
        id:4,
        name: 'PHP',
        coin:400
    },
    {
        id:5,
        name: 'ReactJS',
        coin:500
    },
    {
        id:6,
        name: 'Ruby',
        coin:600
    },
    {
        id:7,
        name: 'Ruby',
        coin:12
    }

];

function courseHanler(course, index){
    // console.log(course);
    return{
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index:index,
    }
}
var newCourses = courses.map(courseHanler);
console.log(newCourses);