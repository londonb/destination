$(document).ready(function(){

  $("form#blanks").submit(function(event){


    var temp = $("input[name='tempOptions']:checked").val();
    var citytype = $("input[name='cityTypeOptions']:checked").val();
    var name = $("input#inputName").val();
    var age = $("input#inputAge").val();
    var color = $("input#inputColor").val();


    if (age < 18) {
      var destination = "Disney World";

    } else {
      if (temp === 'warm'){
        if (citytype === 'urban'){
          var destination = "Honolulu";
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


    $(".results").show();
    $(".vacationSelection").text(destination).css("color", color);
    $(".nameGiven").text(name);
    event.preventDefault();
  });
});
