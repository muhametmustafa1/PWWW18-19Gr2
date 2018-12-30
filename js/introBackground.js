var d = new Date();
var oret = d.getHours();
var minutat = koha.getMinutes();
var intro = document.getElementById("intro");

//Nese eshte mengjes deri ne ora 10 le te qendroje si eshte!!
//blue -3
var rgbColor = timeToRGBcolorConvertor(oret, minutat);
if(rgbColor !== null){
	intro.style.backgroundColor = `rgba(${rgbColor[0]},${rgbColor[1]},${rgbColor[2]},1)`; //kalter e mbyllur #FF0000
}

function timeToRGBcolorConvertor(hours, minutes){
	if( (0<=hours && hours<24) && (0<=minutes && minutes<60) ){
		var typesRGB = ['red','green','blue'];
		var sizeRGB = typesRGB.length;
		var valuesRGB = [0,0,0];
		const hourToMin = 60;
		const lowerBound = 6, upperBound = 22, measuringUnit = 8, maxPartialMinUnitVal = measuringUnit*hourToMin, maxPartialColUnitVal = 255*2;
		var x = (hours) % measuringUnit;
		var y = Math.floor( (hours) / measuringUnit );
		console.log("testss: hours: "+hours+" x: "+x+" y: "+y);
		var c;
		
		for (var i = 0; i <= sizeRGB - 1; i++) {
			if(y == i%sizeRGB){typesRGB[i] = 1; c = i;}
			else{}
		}
		
		let time = x*hourToMin+minutes, halfPartialMinUnitVal = maxPartialMinUnitVal/2, halfPartialColUnitVal = maxPartialColUnitVal/2;
		console.log("testss: c: "+c+" time: "+time+" y: "+y);
		if(c != undefined){

			if(time<halfPartialMinUnitVal){
				valuesRGB[(c)%sizeRGB] = halfPartialColUnitVal - Math.floor( time*maxPartialColUnitVal/maxPartialMinUnitVal );
				valuesRGB[(c+1)%sizeRGB] = halfPartialColUnitVal;
			}
			else{
				valuesRGB[(c+1)%sizeRGB] = halfPartialColUnitVal;
				valuesRGB[(c+2)%sizeRGB] = Math.floor( (time*maxPartialColUnitVal/maxPartialMinUnitVal) )-halfPartialMinUnitVal;
			}
			
		}
		return valuesRGB;
	}else{ return null;}
}	