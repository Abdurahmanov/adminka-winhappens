$(document).ready(function () {
	$.datetimepicker.setLocale('ru');
    $('.calendar-field').datetimepicker({
        format: 'd.m.Y',
        timepicker: false,
        dayOfWeekStart: 1,
    });

    $("#games__fast").click(function (b) {
        
        b.preventDefault();
      $("#block__fast").show();
      $("#block__many").hide();
      if (!$('#games__fast').hasClass('report__button_active')){
          $('#games__fast').addClass('report__button_active');
          $('#games__many').removeClass('report__button_active'); 
      }
      else{
          $('#games__fast').removeClass('report__button_active');    

      }
    });

    $("#games__many").click(function (b) {
        
        b.preventDefault();
      $("#block__many").show();
      $("#block__fast").hide();
      if (!$('#games__many').hasClass('report__button_active')){
          $('#games__many').addClass('report__button_active');
          $('#games__fast').removeClass('report__button_active');   
      }
      else{
          $('#games__many').removeClass('report__button_active');        
      }
    });

    $("#games__archive").click(function (b) {
        
        b.preventDefault();
      if (!$('#games__fast').hasClass('report__button_active')){
      		 $("#block__many_archive").show();   
      		   $('#games__archive').addClass('report__button_active');   
      		   $("#block__fast_archive").hide();  
      		    $("#block__many").hide(); 
      		    $("#block__fast").hide();
      		    $('#games__curent').removeClass('report__button_active');  
      }
      else{
          $("#block__fast_archive").show();  
           $("#block__fast").hide();
           $('#games__archive').addClass('report__button_active');
          $('#games__curent').removeClass('report__button_active');
          $("#block__many_archive").hide();     

      }
    });

    $("#games__curent").click(function (b) {
        
        b.preventDefault();
      if (!$('#games__fast').hasClass('report__button_active')){
      		   $("#block__many").show(); 
      		   $("#block__many_archive").hide(); 
      }
      else{
        	 $("#block__fast").show(); 
      		   $("#block__fast_archive").hide();  
      		   $('#games__curent').addClass('report__button_active');  
      		   $('#games__archive').removeClass('report__button_active');     

      }
    });

    

    $("#games__tables").click(function (b) {
        
        b.preventDefault();
      $("#games-info__tables").show();
      $("#games-info__players").hide();
      if (!$('#games__tables').hasClass('report__button_active')){
          $('#games__tables').addClass('report__button_active');
          $('#games__players').removeClass('report__button_active'); 
          $(".report__filters").hide();  
           $(".report_long-details").hide(); 
      }
      else{
          $('#games__tables').removeClass('report__button_active');    

      }
    });

    $("#games__players").click(function (b) {
        
        b.preventDefault();
      $("#games-info__players").show();
       $("#games-info__tables").hide();
      if (!$('#games__players').hasClass('report__button_active')){
          $('#games__players').addClass('report__button_active');
          $('#games__tables').removeClass('report__button_active');
           $(".report__filters").show();  
           $(".report_long-details").show(); 
      }
      else{
          $('#games__players').removeClass('report__button_active');  
                
      }
    });

     $(".modalbox").fancybox();
     $(document).on('click', '.modal-close', function() {
        $.fancybox.close();
    });


});