$('#manualinputlabel').click(function(e) {
              $('.popover-title').append('<button id="popovercloseid" type="button" class="close">&times;</button>');
              $(this).popover();

          });

      $(document).click(function(e) {
         if(e.target.id=="popovercloseid" )
         {
              $('#manualinputlabel').popover('hide');                
         }

      });