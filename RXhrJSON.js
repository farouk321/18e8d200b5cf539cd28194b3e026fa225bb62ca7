//-----------------RXhrJSON-----------------//
function RXhrJSONP(method, url, post, Rc = {count:6,timeout:1e4}) {
return new Promise((call, fail) => { RXhrJSON(method, url, post, call, Rc, fail) });
}
function RXhrJSON(method, url,post,call,Rc={count:6,timeout:1e4},fail=()=>{}){
    (function R(s=0){
	if (Rc.count==0) return fail();
	await sleep(s);
	Rc.count--;
	let http = new XMLHttpRequest();
	http.open(method, url, true);
	http.setRequestHeader('Content-Type', 'text/plain');
	http.onreadystatechange = async function() {
	    if (http.readyState == 4) {
		if (http.status == 200){
		    try{
			var O = JSON.parse(http.responseText);
		    }catch(e){
			return R(1000);
		    }
		    call(O);
		}else{
		    return R(Rc.timeout);
		}
	    }
	}
	http.send(post);
    })();
}
