$(document).ready(function() {
  $.get( "/contacts", function(contacts) {
    contacts.forEach(function(contacts){
  $( "#get-contacts" ).append("<p>" + contacts.first_name +" "+ contacts.last_name+" "+contacts.email+" " +"</p>");
   
});

});

  $('#new-contact').on("submit",function (event) {
    console.log("hi");
    event.preventDefault();
    // Get the data from the form elements
    var form = $("form#new-contact");
    var data = form.serialize();
    $.ajax({
      url: '/contacts',
      method: 'POST',
      data: data,
      dataType:"json",
      success:function(results){
        console.log(results);
        $('#get-contacts').append("<p>" + results.first_name +" "+ results.last_name+" "+results.email+" " +"</p>");
      }
    })
    
  });

  });

