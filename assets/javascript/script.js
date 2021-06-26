//Current day on screen//

$("#currentDay").text(moment().format("----HH:mm:ss---- dddd, MMMM Do, YYYY----"))


//Comparations with current time//

function milHourCheck () {
    let todaysTime = moment().hours()
    $(".time-block").each(function () {
       
        let seeTime = parseInt($(this).attr("id").split("-")[1])
       
       
        if (todaysTime === seeTime) {
           $(this).addClass("present")
  
  
        } else if (seeTime < todaysTime) {
           $(this).removeClass("present")
           $(this).addClass("past")
  
  
        } else {
           $(this).removeClass("present")
           $(this).removeClass("past")
           $(this).addClass("future")
        }
     })
  }  

  //Save locally info button//
  
$(".saveBtn").on("click", function() {
      
    let mil = $(this).siblings(".description").val();
    let clock = $(this).parent().attr("id");
    console.log(mil, clock)
    localStorage.setItem(clock, mil);
  
  })

  //Storage for the information submitted by User//

  $("#hour-0000 .description").val(localStorage.getItem("hour-0000"))
  $("#hour-0100 .description").val(localStorage.getItem("hour-0100"))
  $("#hour-0200 .description").val(localStorage.getItem("hour-0200"))
  $("#hour-0300 .description").val(localStorage.getItem("hour-0300"))
  $("#hour-0400 .description").val(localStorage.getItem("hour-0400"))
  $("#hour-0500 .description").val(localStorage.getItem("hour-0500"))
  $("#hour-0600 .description").val(localStorage.getItem("hour-0600"))
  $("#hour-0700 .description").val(localStorage.getItem("hour-0700"))
  $("#hour-0800 .description").val(localStorage.getItem("hour-0800"))
  $("#hour-0900 .description").val(localStorage.getItem("hour-0900"))
  $("#hour-1000 .description").val(localStorage.getItem("hour-1000"))
  $("#hour-1100 .description").val(localStorage.getItem("hour-1100"))
  $("#hour-1200 .description").val(localStorage.getItem("hour-1200"))
  $("#hour-1300 .description").val(localStorage.getItem("hour-1300"))
  $("#hour-1400 .description").val(localStorage.getItem("hour-1400"))
  $("#hour-1500 .description").val(localStorage.getItem("hour-1500"))
  $("#hour-1600 .description").val(localStorage.getItem("hour-1600"))
  $("#hour-1700 .description").val(localStorage.getItem("hour-1700"))
  $("#hour-1800 .description").val(localStorage.getItem("hour-1800"))
  $("#hour-1900 .description").val(localStorage.getItem("hour-1900"))
  $("#hour-2000 .description").val(localStorage.getItem("hour-2000"))
  $("#hour-2100 .description").val(localStorage.getItem("hour-2100"))
  $("#hour-2200 .description").val(localStorage.getItem("hour-2200"))
  $("#hour-2300 .description").val(localStorage.getItem("hour-2300"))
  
  milHourCheck()