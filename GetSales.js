//-----------------GetSales-----------------//
function GetS(d=30,c=null,st=0){
    let ost=st
	if (!this.S) this.S={};
	let S=this.S;
	return Sales(d,c,st);
	function Sales(d=30,c=null,st=0,N=Date.now(),v={}){
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
        if (S[fst(ost,st+dd)]) return Promise.resolve().then(
			()=>{
				return done();
		});
		return RXhrJSONP('GET', url, '').then(async function(Sale) {
			for (var i in Sale){
				for (var i2 in Sale[i]){
					v[Sale[i][i2][0].asin] = (v[Sale[i][i2][0].asin]||0) + Sale[i][i2][0].unitsSold;
				}
			}
            return done()
		});
		function fst(ost,d){
			return (ost?"_"+ost+"-":"")+d
		}
		function done(){
			if (S[fst(ost,st+dd)]){
				v={...S[fst(ost,st+dd)]}
			}else{
				S[fst(ost,st+dd)]={...v}
				console.log("Sold:"+Object.values(v).reduce((g,e)=>{g+=e;return g;},0)+", "+fst(ost,st+dd));
			}
			if (d>0){
				return Sales(d,c,st+dd,N,v);
			}else{
				c&&c(v);
				return v
			}
		}
	}
}
