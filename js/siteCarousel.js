document.writeln(`<link rel="stylesheet" type="text/css" href="css/dynamicCarousel.css"><div class="CarouselN">
	<div class="dynamicCarousel">
		<div class="carousel-options" style="float:right;">
		  <p>
		    <label>
		      Cells
		      <input class="cells-range" type="range" min="3" max="15" value="9" />
		    </label>
		  </p>
		  <p>
		  	<span style="display: block;">
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
			  	<div class="carousel" >
				    <div class="carousel__cell">1</div>
				    <div class="carousel__cell">2</div>
				    <div class="carousel__cell">3</div>
				    <div class="carousel__cell">4</div>
				    <div class="carousel__cell">5</div>
				    <div class="carousel__cell">6</div>
				    <div class="carousel__cell">7</div>
				    <div class="carousel__cell">8</div>
				    <div class="carousel__cell">9</div>
				    <div class="carousel__cell">10</div>
				    <div class="carousel__cell">11</div>
				    <div class="carousel__cell">12</div>
				    <div class="carousel__cell">13</div>
				    <div class="carousel__cell">14</div>
				    <div class="carousel__cell">15</div>
			  	</div>
			</div>
		</div>
	</div>
	<div style="clear:both;"></div>
	</div>`);