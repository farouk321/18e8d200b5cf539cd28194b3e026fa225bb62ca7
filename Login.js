//-----------------Login-----------------//
function Login(){
	if (this.LOGIN) return new Promise.resolve(this.LOGIN);
	var A={};
	this.LOGIN=A;
	return new Promise(r=>{
		var http = new XMLHttpRequest();
		var url = 'https://merch.amazon.com/manage/designs';
		http.open('GET', url, false);
		http.onreadystatechange = function() {
			if (http.readyState == 4 && http.status == 200) {
				let text=http.responseText
				let U = text.match(/customerId":"([^"]+)"/)[1];
				let U2 = text.match(/accountId":"([^"]+)"/)[1];
				A.U=U;
				A.U2=U2;
				r(A)
			}
		};
		http.send();
	});
}
