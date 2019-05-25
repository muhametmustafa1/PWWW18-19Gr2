document.writeln(`
	<div id="siteHeader" class="zIndex1"> <!-- Pjesa statike -->
		<!--<link rel="icon" href="images/logo.png" sizes="32x32 48x48" type="image/png">-->
		<link rel="stylesheet" type="text/css" href="css/animation.css">
		<div id="logo" class="logo alignleft">
			<figure class="figureSyle" >
				  <img src="images/logo.png" width="70px" height="70px" alt="Logo nuk u gjet!" />
				  <figcaption>Nje vend argetimi per te gjithe</figcaption>
			</figure>
		</div>
		<div class="rightSideBar alignright">
			<div class="Search alignright marginBotN zIndex1">
				<link rel="stylesheet" type="text/css" href="css/css-library/simpleSearch.css">
				<div class="simpleSearch" style="margin-top: -15px;">
					<div class="search__container">
					    <p class="search__title" style="font-size: 20px;">
					        Forma e kerkimit :) <!--Go ahead, hover over search-->
					    </p>
					    <input id="kerko" class="search__input" type="text" placeholder="Kërko">
					</div>
				</div>
			</div><br /><br />

			<link rel="stylesheet" type="text/css" href="css/css-library/transparent-menu.css">
			<div id="introMenu" class="menyja zIndex1" style="clear:both;">
				<ul>
					<li><a href="index.html">Home</a></li>

						<li><a href="filmat.html">Filma</a>
							<ul>
								<li><a>Premiere</a></li>
								<li><a>Te Rinj</a></li>
								<li><a>Me te shikuarit </a></li>
							</ul>
						</li>

						<li><a href="serialet.html">Seriale</a>
							<ul>

								<li><a>Telenovela</a></li>
								<li><a>TV Seriale </a></li>
								<li><a>Drama</a></li>
							</ul>
						</li>

						<li><a href="anime.html">Anime</a>
							<ul>
								<li><a>Atraktiv</a></li>
								<li><a>Inovativ</a></li>
								<li><a>Edukativ</a></li>
							</ul>
						</li>

						<li><a href="liveStreaming.html">Live Streaming</a>
							<ul>
								<li><a>NBA</a></li>
								<li><a>TV SHOWS</a></li>
								<li><a>SOCCER</a></li>
							</ul></li>
				</ul>
			</div>
		</div>
	</div> <!--<script type="text/javascript" src="js&#92;searchJS.js"></script> -->
	`);
