var memberCard={
    tier: 'silver'

};


/*
 bronze:2%
 silver:5%
 gold:8%
 diamond:10%
 */
// function getTotal(price,card){
//     var discointRate;
//     if(card.tier=='bronze'){
//         discointRate=0.02;
//     }else if( card.tier=='silver'){
//         discointRate=0.05;
//     }else if(card.tier=='gold'){
//         discointRate=0.08;
//     }else{
//         discointRate=0.1;
//     }

//     return price*(1-discointRate);
// }

function getTotal(price,card){
    var discointRate;
    switch(card.tier){
        case 'bronze':
        discointRate=0.02;
        break;

        case 'silver':
        discointRate=0.05;
        break;

        case 'gold':
        discointRate=0.02;
        break;

        case 'bronze':
        discointRate=0.08;
        break;

        case 'diamond':
        discointRate=0.1;
        break;


    }
    return price*(1-discointRate);
}

var total = getTotal(500000,memberCard);
console.log(total);


//vidu 2
//res, green orange Đèn giao thông

var trafficLight='orange';
function goOrNotInVietNam(lightValue){
    switch(lightValue){
        case 'green':
            console.log('go');
            break;
        case 'orange':
            console.log('go');
            break;
        default:
            console.log('stop');
            break;
        
    }
}

goOrNotInVietNam(trafficLight);