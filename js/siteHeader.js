document.writeln(`
	<div id="siteHeader" class="zIndex0"> <!-- Pjesa statike -->
		<link rel="stylesheet" type="text/css" href="css/animation.css">
		<div class="logo alignleft">
			<figure class="figureSyle">
				  <img src="images/logo.png" width="70px" height="70px" alt="Logo nuk u gjet!" />
				  <figcaption>Nje vend argetimi per te gjithe</figcaption>
			</figure>
		</div>
		<div class="rightSideBar alignright">
			<div class="Search alignright marginBotN zIndex0">
				<link rel="stylesheet" type="text/css" href="css/css-library/simpleSearch.css">
				<div class="simpleSearch">
					<div class="search__container">
					    <!--<p class="search__title">
					        Go ahead, hover over search
					    </p>-->
					    <input class="search__input" type="text" placeholder="Search">
					</div>	
				</div>
			</div><br /><br />

			<link rel="stylesheet" type="text/css" href="css/css-library/transparent-menu.css">
			<div id="introMenu" class="menyja alignright zIndex0" style="clear:both;">
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a href="liveStreaming.html">Live Streaming</a>
						<ul>
							<li><a>Our Team</a></li>
							<li><a>Camp Sites</a></li>
							<li><a>Mission &amp; Vision</a></li>
							<li><a>Resorces</a></li>
						</ul></li>
						<li><a href="filmat.html">Filma</a>
							<ul>
								<li><a>Activities</a></li>
								<li><a>Parks</a></li>
								<li><a>Shops</a></li>
								<li><a>Events</a></li>
							</ul>
						</li>
						<li><a href="serialet.html">Seriale</a>
							<ul>
								<li><a>Map</a></li>
								<li><a>Direction</a></li>
							</ul>
						</li>
						<li><a href="anime.html">Anime</a></li>
				</ul>
			</div>
		</div>
	</div>`);