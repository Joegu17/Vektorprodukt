function Rechnen() {
	var ax = parseInt(document.getElementById('zahl1').value);
	var bx = parseInt(document.getElementById('zahl2').value);
	var ay = parseInt(document.getElementById('zahl3').value);
	var by = parseInt(document.getElementById('zahl4').value);
	var az = parseInt(document.getElementById('zahl5').value);
	var bz = parseInt(document.getElementById('zahl6').value);
	var cx = ay * bz - az * ay;
	var cy = az * bx - ax * bz;
	var cz = ax * by - ay * bx;
	alert("Der Vektor ist: \n" + cx + "\n" + cy + "\n" + cz);
	}


var los  = document.getElementById('los');
los.addEventListener('click', Rechnen, true);