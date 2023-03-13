	function loadBestHeight() {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				const response = JSON.parse(this.responseText);
				const bestHeight = response.data.bestHeight;
				document.getElementById("bestheight").innerText = " " + bestHeight;
				
				// Calculating nodestake and displaying in the new div element
				const nodestake = Math.floor(bestHeight / 100) + 21;
				const nodestakeDiv = document.createElement("div");
				nodestakeDiv.id = "nodestake";
				nodestakeDiv.innerText = nodestake;
				document.body.appendChild(nodestakeDiv);
			}
		};
		xhttp.open("GET", "https://nosostats.com:49443/api/dBheightS", true);
		xhttp.send();
}
// Refresh the function every 20 seconds
setInterval(loadBestHeight, 5000);

