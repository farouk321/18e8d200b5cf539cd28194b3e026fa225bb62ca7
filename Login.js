//-----------------Login-----------------//
function Login(){
	var http = new XMLHttpRequest();
	var url = 'https://merch.amazon.com/manage/designs';
	http.open('GET', url, false);
	http.onreadystatechange = function() {
		if (http.readyState == 4 && http.status == 200) {
			User = http.responseText.match(/customerId":"([^"]+)"/)[1];
			User2 = http.responseText.match(/accountId":"([^"]+)"/)[1];
		}
	};
	http.send();
}
