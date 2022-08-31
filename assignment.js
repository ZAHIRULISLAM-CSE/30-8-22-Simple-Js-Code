//feet To mile

function feetToMile(feetValue){
    if(feetValue>=0){
    var Mile=feetValue*0.0001893939;
    return Mile;
    }
    else{
        return "Put Positive Value feet can not be negative"
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
        return "Order Cannot Be negative"
    }
}

var needWood=woodCalculator(10,20,15);
console.log(needWood);


//brickCalculator:1st10-15feet,next 10-12 feet,else sob gula-10feet

//function brickCalculator(totalTala){

//}


//tinyFriend
//var friendName=["Alu","Golooo","Itttuuu","Jo"]

//var array=["Joy",'abcd',"abcdgf","jo","j"];

function tiny(name){
    var ti=name[0];
    for(i=0;i<name.length;i++){
        if(name[i].length<ti.length){
            ti=name[i];
        }
    }
    console.log(ti);
}




var array=["Joy",'abcd',"abcdgf","jo","j"];
tiny(array);

