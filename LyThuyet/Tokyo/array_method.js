var user =[
   {name:'Tôm',gender:'male'},
   {name:'Cua',gender:'female'},
   {name:'Tí',gender:'male'},
   {name:'Tẹo',gender:'female'},
   {name:'Gấu',gender:'male'}
];

var userList=$('#userList');
var genderFilter=$('#genderFilter');

render(userList,user);

genderFilter.on('change',function(){
    var selectedGender=this.value;
});

function render(container,item){
    var htmlItem=item.map(function(item){
        return '<li class="list-group-item">'+item.name+'</li>';
    });
    var html=htmlItem.join('');
    container.html(html);
}