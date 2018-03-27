function(arg){
  var dt1 = new Date("2018-03-25");
  for (i = 0; i < arg.length; i++){
    dt2 = new Date(arg[i]);
      if(dt2 > dt1){
        var result= "Fail";
        break;}
      else{
        var result = "Pass";}
      }
  return result;
  }