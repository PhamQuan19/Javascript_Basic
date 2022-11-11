/*
  
  
 */

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

];

//for each

// courses.forEach(function(course, index){
//     console.log(index,course);
// });

//every : kt tat ca các phân tử mảng phải thoả mãn 1 đk gì đó

//kiem tra xem tất cả các khoá học có phải là free hay ko
//gặp phần tử sai dừng luôn vòng lặp
// var isFree = courses.every(function(course, index){
//     return course.coin ===0;
// });

// console.log(isFree);

//find
//tim kiem khoa hoc Ruby
//chu ý: Nếu có 2 phần tử thì chỉ in đc ra 1 cái
// var course = courses.find(function(course, index){
//     return course.name ==='Ruby';
// });

// console.log(course);

//filter
//tim kiếm hết danh sách
// var listCourse = courses.filter(function(course, index){
//     return course.name ==='Ruby';
// });

// console.log(listCourse);

//BT
/*
Hãy tạo hàm getMostFavoriteSport có 1 tham số (hàm này và luôn truyền đối số là 1 array).
 Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.
*/
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
];

function getMostFavoriteSport(array){
    var sport = sports.filter (function(sports){
    return sports.like > 5;
    });

    return sport;
}

// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]





