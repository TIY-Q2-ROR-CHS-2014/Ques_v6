// Live/On - Javascript
// Respond_to - Rails (controller stuff)
// AJAX - Asynchronous JavaScript And XML
// JSON - is a way of storing data
// pass it to and from the server

// var when_page_is_ready = function() {
//   $('#q').change(function() {
//     console.log("Hi");
//   });

//   // Live was how you did this before
//   // On is the new hotness
//   $(document.body).on("click", ".do_something_cool", function() {
//     console.log("We are doing cool stuff");
//   });

//   // This doesn't work, I'm going to find out why
//   // console.log( $(".do_something_cool") );
//   // $(".do_something_cool").click( function() {
//   //   console.log("We are doing cool stuff");
//   // });

//   $("body").prepend(
//     "<a href='/'>Home</a>"
//   );
// }

// // Turbolinks breaks javascripts. This is how you reload
// // them on a per-page basis.
// $(document).ready(when_page_is_ready);
// $(document).on("page:load", when_page_is_ready);





var when_page_is_ready = function() {
  // $.ajax({
  //   type: "GET",
  //   url: "/ques",
  //   dataType: "JSON",
  //   success: function(data) {
  //     console.log(data);
  //     $.each(data, function(index, value){
  //       console.log(value);
  //       $('ul.students').append(
  //         "<li>" + value.name + "</li>"
  //       )
  //     })
  //   }
  // });

  $(document.body).on("click", "a.change_workflow", function() {
    $.ajax({
      type: "PATCH",
      url: $(this).attr("que_url"),
      dataType: "script" //,
      // success: function(data) {
      //   console.log(data);
      //   console.log( $("li.student_" + data.id) )
      //   $("li.student_" + data.id).html(
      //     data.name + "(" + data.workflow_state + ")"
      //   )
      // }
    })
  });

}
$(document).ready(when_page_is_ready);
$(document).on("page:load", when_page_is_ready);
