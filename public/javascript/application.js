$(document).ready(function() {
  $.get( "/contacts", function(contacts) {
    contacts.forEach(function(contacts){
  $( "#get-contacts" ).append("<p>" + contacts.first_name +" "+ contacts.last_name+" "+contacts.email+" " +"</p>");
   
});

});

  $('#new-submit').click(function () {
    // Get the data from the form elements
    var form = $("form#new-contact")
    var data = form.serialize();
    $.ajax({
      url: '/contacts',
      method: 'POST',
      data: data,
      dataType:"json"
    })
    
  });

  });

