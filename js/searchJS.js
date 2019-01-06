//Qitu fillon kodi i kerkimit
         $(document).on('keypress',function(e) {
          var kerko = ((document.getElementById("kerko").value).toLowerCase()).trim();
          var isInDatabase = false;
          isInDatabase = ($( (('kerko').toLowerCase()).trim() ).length == 0);
          console.log("Kerko: " + kerko);
          if((e.which == 13) && (isInDatabase)) {
              alert('You pressed enter!' + kerko);
              $('html,body').animate({
              scrollTop: $("#"+kerko).offset().top},
              'slow');
          }
        });
      //Qitu mbaron kodi i kerkimit

      //Search button script
        //Qitu fillon kodi i kerkimit
        /*$('#search__container').keypress(function(event){
        var kerko = ((document.getElementById("kerko").value).toLowerCase()).trim();
          var isInDatabase = false;
          isInDatabase = ($( (('kerko').toLowerCase()).trim() ).length == 0);
          console.log("Kerko: " + kerko);
          if((e.which == 13) && (isInDatabase)) {
                alert('You pressed enter!' + kerko);
                $('html,body').animate({
                scrollTop: $("#"+kerko).offset().top},
                'slow');
          }
    });*/
        /*
        $(document).on('keypress',function(e) {
          var kerko = ((document.getElementById("kerko").value).toLowerCase()).trim();
          var isInDatabase = false;
          isInDatabase = ($( (('kerko').toLowerCase()).trim() ).length == 0);
          console.log("Kerko: " + kerko);
          if((e.which == 13) && (isInDatabase)) {
              alert('You pressed enter!' + kerko);
              $('html,body').animate({
              scrollTop: $("#"+kerko).offset().top},
              'slow');
          }
        });*/
        //Qitu mbaron kodi i kerkimit