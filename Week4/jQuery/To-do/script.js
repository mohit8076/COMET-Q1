$(document).ready(
    function(){
        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
                 $('ol').append('<li>' + toAdd + '</li>');
            }
        );
      
      $(document).on('dblclick','li', function(){
        $(this).addClass('strike').fadeOut('slow');    
      });
      
      $('input').focus(function() {
        $(this).val('');
      });
      
    }
);