document.writeln(`<link rel="stylesheet" type="text/css" href="css/css-library/dynamicCarousel.css"><div class="CarouselN zIndex0">
	<div class="dynamicCarousel">
		<div class="carousel-options" style="float:right;">
		  <p >
		    <label style="visibility:hidden;">
		      Cells
		      <input class="cells-range" type="range" min="3" max="15" value="3" />
		    </label>
		  </p>
		  <p>
		  	<span>
		    <button class="previous-button glowLeft" style="float:center">Previous</button>
		    <button class="next-button glowLeft" style="float:center;">Next</button>
		    </span>
		  </p>
		  <p>
		    Orientation:
		    <label>
		      <input type="radio" name="orientation" value="horizontal" checked />
		      horizontal
		    </label>
		    <label>
		      <input type="radio" name="orientation" value="vertical" />
		      vertical
		    </label>
		  </p>
		</div>
		<div class="sceneN">
			<div class="scene">
			  	<div class="carousel" >creed-2-posterImage.jpg
				    <div class="carousel__cell"><img src="images/forText-poster.jpg" alt="nuk u gjet fotojaP2"></div>
				    <div class="carousel__cell"><img src="images/terminator-6-posterImage.jpg" alt="nuk u gjet fotojaP2"></div>
				    <div class="carousel__cell"><img src="images/creed-2-posterImage.jpg" alt="nuk u gjet fotojaP2"></div>
			  	</div>
			</div>
		</div>
	</div>
	<div style="clear:both;"></div>
	</div>`);