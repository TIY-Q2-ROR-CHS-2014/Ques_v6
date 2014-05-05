$(document.body).on("click", "a.change_workflow", function() {
  $.ajax({
    type: "PATCH",
    url: $(this).attr("que_urls"),
    dataType: "script"
  })
});
$(".flash_message").fadeOut(2000)
