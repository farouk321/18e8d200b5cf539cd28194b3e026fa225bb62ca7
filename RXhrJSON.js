//-----------------RXhrJSON-----------------//
function RXhrJSONP(method, url, post, Rc = {count:6,timeout:1e4}) {
	return new Promise((call, fail) => { RXhrJSON(method, url, post, call, Rc, fail) });
}
function RXhrJSON(method, url,post,call,Rc={count:6,timeout:1e4},fail=()=>{}){
	RXhrP(method, url, post, Rc).then(JSON.parse).then(call).catch(fail);
}
function RXhrP(method, url, post, Rc = {count:6,timeout:1e4}) {
	return new Promise((call, fail) => { RXhr(method, url, post, call, Rc, fail) });
}
function RXhr(method, url,post,call,Rc={count:6,timeout:1e4},fail=()=>{}){
	(async function R(s=0){
		if (Rc.count==0) return fail();
		await sleep(s);
		Rc.count--;
		let http = new XMLHttpRequest();
		http.open(method, url, true);
		http.setRequestHeader('Content-Type', 'application/json');
		http.onreadystatechange = async function() {
		    if (http.readyState == 4) {
				if (http.status == 200){
				    call(http.responseText);
				}else{
				    return R(Rc.timeout);
				}
		    }
		}
		http.send(typeof post == "string"?post:JSON.stringify(post));
	})();
}
