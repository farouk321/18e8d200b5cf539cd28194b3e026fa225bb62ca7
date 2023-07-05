//-----------------GetSales-----------------//
function GetS(S,d=30,c=null,st=0,C=0,N=Date.now()){
	if (S[d]) return new Promise((r)=>{r(S[d])});
	S[d]={};
	return Sales(S[d],d,c,st,C,N);
	function Sales(v,d=30,c=null,st=0,C=0,N=Date.now()){
	    var mart = {
	    ATVPDKIKX0DER: "US",
	    A1F83G8C2ARO7P: "GB",
	    A1PA6795UKMFR9: "DE",
	    A13V1IB3VIYZZH: "FR",
	    APJ6JRA9NG5V4: "IT",
	    A1RKKUPIHCS9HS: "ES",
	    A1VC38T7YXB528: "JP"
	};
		var dd=d<=90?d:90;
		d-=dd;
		var T=N - st * 24 * 3600 * 1000;
		url = 'https://merch.amazon.com/api/reporting/purchases/records?'+
			'marketplaceId='+Object.keys(mart).join('&marketplaceId=')+
			'&fromDate=' + (T - (dd-1) * 24 * 3600 * 1000) + '&toDate=' + T;
		return RXhrJSONP('GET', url, '').then(async function(Sale) {
			for (var i in Sale){
				for (var i2 in Sale[i]){
					C+=Sale[i][i2][0].unitsSold;
					v[Sale[i][i2][0].asin] = (v[Sale[i][i2][0].asin]||0) + Sale[i][i2][0].unitsSold;
				}
			}
			if (d>0){
				return Sales(v,d,c,st+dd,C,N);
			}else{
				console.log("Sold:"+C+", "+(st+dd)+"/"+(d+dd+st));
				c&&c();
			}
			return v;
		});
	}
}
