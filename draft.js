var val = 0;
	ss();
	function ss(){
		var i;
		var x = document.getElementsByClassName("slides");
		for(i = 0; i<x.length; i++){
			x[i].style.display = "none";
		}
		val++;
		if(val > x.length){val = 1;}
		x[val-1].style.display = "block";
		setTimeout(ss, 3000);

	}


		var curdate = new Date();
	var day = curdate.getDay();
	var thr = curdate.getHours();
	var tmin = curdate.getMinutes();
	var time = (thr*100)+tmin;
	var DAY = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
	var MONTH = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
	var datetime = " " + curdate.getDate() + " "
                + MONTH[(curdate.getMonth())]  + ", " 
                + curdate.getFullYear() ;

    document.getElementById("Date").innerHTML = datetime;
    document.getElementById("Day").innerHTML = DAY[curdate.getDay()];
    //document.getElementById("show").innerHTML = time;

    if(day == 1 || day == 2 || day == 3 || day == 4 || day == 5)
    {
    	if(time >= 00 && time<100){
    		document.getElementById("cs").innerHTML = "Crime Patrol";
    		document.getElementById("ns").innerHTML = "Teleshopping";
    	}
    	else if(time >= 800 && time<830){
    		document.getElementById("cs").innerHTML = "Vighnaharta Ganesh";
    		document.getElementById("ns").innerHTML = "Mere Sai";
    	}
    	else if(time >= 830 && time<900){
    		document.getElementById("cs").innerHTML = "Mere Sai";
    		document.getElementById("ns").innerHTML = "Yeh Un Dino Ki Baat Hai";
    	}
    	else if(time >= 900 && time<930){
    		document.getElementById("cs").innerHTML = "Yeh Un Dino Ki Baat Hai";
    		document.getElementById("ns").innerHTML = "The Kapil Sharma Show";
    	}
    	else if(time >= 930 && time<1100){
    		document.getElementById("cs").innerHTML = "The Kapil Sharma Show";
    		document.getElementById("ns").innerHTML = "Rishta Likhenge Hum Naya";
    	}
    	else if(time >= 1100 && time<1130){
    		document.getElementById("cs").innerHTML = "Rishta Likhenge Hum Naya";
    		document.getElementById("ns").innerHTML = "Porus";
    	}
    	else if(time >= 1130 && time<1200){
    		document.getElementById("cs").innerHTML = "Porus";
    		document.getElementById("ns").innerHTML = "Crime Patrol";
    	}
    	else if(time >= 1200 && time<1930){
    		document.getElementById("cs").innerHTML = "Crime Patrol";
    		document.getElementById("ns").innerHTML = "Mere Sai @7:30pm";
    	}
    	else if(time >= 1930 && time<2000){
    		document.getElementById("cs").innerHTML = "Mere Sai";
    		document.getElementById("ns").innerHTML = "Vighnaharta Ganesh";
    	}
    	else if(time >= 2000 && time<2030){
    		document.getElementById("cs").innerHTML = "Vighnaharta Ganesh";
    		document.getElementById("ns").innerHTML = "Porus";
    	}
    	else if(time >= 2030 && time<2100){
    		document.getElementById("cs").innerHTML = "Porus";
    		document.getElementById("ns").innerHTML = "Rishta Likhenge Hum Naya";
    	}
    	else if(time >= 2100 && time<2130){
    		document.getElementById("cs").innerHTML = "Rishta Likhenge Hum Naya";
    		document.getElementById("ns").innerHTML = "Haasil";
    	}
    	else if(time >= 2130 && time<2200){
    		document.getElementById("cs").innerHTML = "Haasil";
    		document.getElementById("ns").innerHTML = "Ek Deewana Tha";
    	}
    	else if(time >= 2200 && time<2230){
    		document.getElementById("cs").innerHTML = "Ek Deewana Tha";
    		document.getElementById("ns").innerHTML = "Yeh Un Dino Ki Baat Hai";
    	}
    	else if(time >= 2230 && time<2300){
    		document.getElementById("cs").innerHTML = "Yeh Un Dino Ki Baat Hai";
    		document.getElementById("ns").innerHTML = "Crime Patrol";
    	}
    	else if(time >= 2300 && time<2400){
    		document.getElementById("cs").innerHTML = "Crime Patrol";
    		document.getElementById("ns").innerHTML = "Teleshopping";
    	}
    	else {
    		document.getElementById("cs").innerHTML = "Crime Patrol";
    		document.getElementById("ns").innerHTML = "Crime Patrol";
    	}
    }
    else if(day == 6 || day == 0){
    	if(time >= 00 && time<100){
    		document.getElementById("cs").innerHTML = "Crime Patrol";
    		document.getElementById("ns").innerHTML = "Teleshopping";
    	}
    	else if(time >= 800 && time<830){
    		document.getElementById("cs").innerHTML = "Vighnaharta Ganesh";
    		document.getElementById("ns").innerHTML = "Mere Sai";
    	}
    	else if(time >= 830 && time<900){
    		document.getElementById("cs").innerHTML = "Mere Sai";
    		document.getElementById("ns").innerHTML = "Yeh Un Dino Ki Baat Hai";
    	}
    	else if(time >= 900 && time<930){
    		document.getElementById("cs").innerHTML = "Yeh Un Dino Ki Baat Hai";
    		document.getElementById("ns").innerHTML = "The Kapil Sharma Show";
    	}
    	else if(time >= 930 && time<1100){
    		document.getElementById("cs").innerHTML = "The Kapil Sharma Show";
    		document.getElementById("ns").innerHTML = "Rishta Likhenge Hum Naya";
    	}
    	else if(time >= 2000 && time<2130){
    		document.getElementById("cs").innerHTML = "The Kapil Sharma Show";
    		document.getElementById("ns").innerHTML = "Super Dancer";
    	}
    	else if(time >= 2130 && time<2330){
    		document.getElementById("cs").innerHTML = "Super Dancer";
    		document.getElementById("ns").innerHTML = "Crime Patrol";
    	}
    	else if(time >= 1200 && time<1930){
    		document.getElementById("cs").innerHTML = "Crime Patrol";
    		document.getElementById("ns").innerHTML = "Mere Sai @7:30pm";
    	}
    	else if(time >= 1930 && time<2000){
    		document.getElementById("cs").innerHTML = "Mere Sai";
    		document.getElementById("ns").innerHTML = "Vighnaharta Ganesh";
    	}
    }