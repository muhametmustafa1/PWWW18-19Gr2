      //Qitu fillon kodi i kerkimit
      //This function checks if @varable is null
      function varExist(variable){
              if(typeof(variable) !== "undefined") {
                  //it exist
                  var varExist=true;
              }
              else {
                alert("Var not defind");
                  //it doesn't
                  var varExist=false;
              }
              return varExist;
            }

      $(document).ready(function(){
        $(document).on('keypress',function(e) {
          if(e.which == 13) {
            var kerko = ((document.getElementById("kerko").value).toLowerCase()).trim();
            var isInDatabase = false;
            var isNull = document.getElementById(kerko);
            isInDatabase = varExist(isNull);

            alert('isInDatabase!' + isInDatabase);
              alert('You pressed enter!' + kerko);
              if(isInDatabase){
                $('html,body').animate({
                scrollTop: $("#"+kerko).offset().top}, 'slow');
              }  
          }
        });
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