var array=[10,10,11,11,56,57,88,88,99,0,0,6,12,4,6,7,10,12,12]
var empty=[]

for(i=0;i<array.length;i++){
    var index=empty.indexOf(array[i]);
    if(index<0){
        empty.push(array[i]);
    }
}
console.log(empty);