function isNice(arr){
    if(arr.length === 0){
      return false;
    }
    for (var i = 0; i < arr.length; i++){
      var array = arr[i];
      if(!(arr.includes(array - 1) || arr.includes(array + 1))){
        return false;
      }
     }
    return true;
 }