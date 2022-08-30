

function getresult (array){
    sum=0;

    for( var i=0; i<array.length; i++){
            var element=array[i];
            sum=sum+element;
            //console.log(sum);
    }
    return sum;
}
var array=[10,8,98,66,22,56,09,82];
var result=getresult(array);
console.log(result);
