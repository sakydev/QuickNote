$('#newnote').keypress(function(event){
   var keycode = (event.keyCode ? event.keyCode : event.which);
   if(keycode == '13'){
    $('#note-list').append('<li>' + $(this).val() + '</li>');
    $(this).val('');
    if($("#uparrow").is(":visible")){
      $('#uparrow').trigger('click');
    }
  }
});

 $('#downarrow, #uparrow').on('click', function(e) {
  $('#downarrow, #uparrow, #note-list').toggle();
});