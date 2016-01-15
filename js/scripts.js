$(document).ready(function(){

  $("form#blanks").submit(function(event){
    var temp = $("input[name='tempOptions']:checked").val();
    var citytype = $("input[name='cityTypeOptions']:checked").val();
    var name = $("input#inputName").val();
    var age = $("input#inputAge").val();
    var color = $("input#inputColor").val();
console.log(age)
console.log(name)
console.log(color)
    if (age < 18) {
      var destination = "Disney World";

    } else {
      if (temp === 'warm'){
        if (citytype === 'urban'){
          var destination = "Honalulu";
        } else {
          var destination = "Fiji";
        }


    } else {
      if (citytype === 'urban'){
        var destination = "Moscow";
      } else {
        var destination = "Nuuk, Greenland";
      }
    }
  }





console.log(destination)
    $(".results").show();
    $(".vacationSelection").text(destination);
    event.preventDefault();
  });
});
