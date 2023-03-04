function loadSupply() {
	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			const response = JSON.parse(this.responseText);
			const supply = (response.data.supplyInNOSO / 1000000).toFixed(2);
			document.getElementById("supply").innerText = "" + supply + "M /";
		}
	};
	xhttp.open("GET", "https://nosostats.com:49443/api/supply", true);
	xhttp.send();
}