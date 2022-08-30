//feet To mile

function feetToMile(feetValue){
    if(feetValue>=0){
    var Mile=feetValue*0.0001893939;
    return Mile;
    }
    else{
        return "Put Positive Value feet can not be nagetive"
    }
}
var mileResult=feetToMile(800);
console.log(mileResult);

//woodCalculator-table:3+chair-1+bed-5 q.feet wood

function woodCalculator(orderTable,orderChair,orderBed){
    if(orderTable>=0 && orderChair>=0 && orderBed>=0){
    var totalWood=orderTable*3+orderChair*1+orderBed*5;
    return totalWood;
    }
    else{
        return "Order Cannot Be nagetive"
    }
}

var needWood=woodCalculator(10,20,15);
console.log(needWood);


//brickCalculator:1st10-15feet,next 10-12 feet,else sob gula-10feet

//function brickCalculator(totalTala){

//}


//tinyFriend
function tinytiny (tinyFriend){
var max=0;
for(i=0;i<tinyFriend.length;i++){
    //console.log(tinyFriend[i.length]);
if(tinyFriend[i].length>max)
max=tinyFriend[i].length
}
return max[i];
}


 var friendName=["Alu","Golooo","Itttuuu","Jo"]
//console.log(friendName.length)
var result=tinytiny(friendName);
console.log(result);


