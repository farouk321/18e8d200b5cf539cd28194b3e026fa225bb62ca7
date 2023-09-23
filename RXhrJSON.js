//-----------------RXhrJSON-----------------//
function RXhrJSONP(method, url, post, Rc = {count:6,timeout:1e4}) {
return new Promise((call, fail) => { RXhrJSON(method, url, post, call, Rc, fail) });
}
function RXhrJSON(method, url,post,call,Rc={count:6,timeout:1e4},fail=()=>{}){
    (function R(){
	if (Rc.count==0) return fail();
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
			await sleep(1000);
			return R();
		    }
		    call(O);
		}else{
			await sleep(Rc.timeout);
		    return R();
		}
	    }
	}
	http.send(post);
    })();
}
