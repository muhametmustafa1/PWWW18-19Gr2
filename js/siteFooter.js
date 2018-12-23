document.writeln(`<div id="siteFooter">
		<div id="NewsLetter">
			<div class="contentNews">
				<h4>Stay In The Know!</h4><hr />
				<input type="text" class="NewsletterT" value="" />
				<input type="button" class="NewsletterB" value="GO">
				<p>To unsubscribe please click here >></p>
			</div>
			<br>
			Te dhenat per sot: <br>
			 <p id=oradata></p> <br>
			<button onclick ="getLocation()">Lokacioni juaj: </button> <p id="lokacioni"></p>

		</div>
		<div class="NewsContent">

			<div class="Element leftN">
				<h4>Filmat</h4>
				<p>Filmat me te shikuar ne kinemate boteror vijne neper shtepite tuaja ekskluzivisht ne Cubi Tv .</p>
			</div>

			<div class="Element rightN">
				<h4>LiveStreaming</h4>
				<p>Faqja e pare ne Kosove dhe me gjere me linka te cilet punojne! Vendi ku mund te gjeni linka te cilet nuk bllokohen vazhdimisht dhe pa ads .</p>
			</div>

			<div class="Element centerN">
				<h4>Serialet</h4>
				<p>Deshironi episodat e fundit te serialeve me te reja !? At'here kjo eshte faqja e duhur te cilen ju po kerkoni. Nje faqe me serialet me te mira te kohes.</p>
			</div>
		</div>

		<div id="CopyRight">
			<p class="pL"">Copyright &copy; 2013 Domain Name - All Rights Reserved</p>
			<link rel="stylesheet" type="text/css" href="css/css-library/verticallyRotating.css">
			<div class="pR">
				<div class="siteVerticalRotate">
					<div class="Iam">
					<b>
					  <div class="innerIam">
					    R!n0<br />
					    x0n!<br />
					    aRd!ti<br />
					    M3t!<br />
					    R!n0
					    </div>
					</b>
					<p>Ky website u mundesua nga:  </p>
					</div>
				</div>
			</div>
			<div style="clear:both;">
			</div>
		</div>
	</div>`);


	var lokacioni = document.getElementById("lokacioni");

	function getLocation() {
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(showPosition, showError);
	  } else {
	    lokacioni.innerHTML = "Shfletuesi juaj nuk e mbeshtet Geolocation";
	  }
	}

	function showPosition(position) {
	  lokacioni.innerHTML = "Gjeresia: " + position.coords.latitude +
	  ", gjatesia: " + position.coords.longitude;
	}

	function showError(error) {
	  switch(error.code) {
	    case error.PERMISSION_DENIED:
	      lokacioni.innerHTML = "Perdoruesi e refuzoi kerkesen per Geolocation"
	      break;
	    case error.POSITION_UNAVAILABLE:
	      lokacioni.innerHTML = "Informacioni per lokacion nuk eshte ne dispozicion"
	      break;
	    case error.TIMEOUT:
	      lokacioni.innerHTML = "Kerkeses per gjetjen e lokacionit i ka skaduar koha"
	      break;
	    case error.UNKNOWN_ERROR:
	      lokacioni.innerHTML = "Gabim i panjohur"
	      break;
	  }
	}

	var koha = new Date();
	var oret = koha.getHours();
	var minutat = koha.getMinutes();

	if(oret <10) {
		oret = "0"+oret;
	}
	if(minutat <10) {
		minutat = "0"+minutat;
	}

	var data = koha.getDate()
	var muaji = koha.getMonth();
	var viti = koha.getFullYear();

	if(data <10) {
		data = "0"+data;
	}
	if(muaji <10) {
		muaji = "0"+muaji;
	}


	var oradata = document.getElementById("oradata");
	oradata.innerHTML = "Ora eshte: "+oret+":"+minutat + ", kurse "+
										"data sot eshte: " + data+ "/"+ muaji+ "/"+viti;
