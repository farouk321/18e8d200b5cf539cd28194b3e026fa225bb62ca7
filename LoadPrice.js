//-----------------LoadPrice-----------------//
async function LoadPrice(){
	await Login();
	await GetS(365);
	return (this.LoadPriceU)||(this.LoadPriceU=new LoadN());
	function LoadN(){
		var Price={},
		PriceObj = {
			"Div": {
				 "PHONE_CASE_APPLE_IPHONE": [1.436, 0, 0, 0, 0, 0, 1.4], 
				 "PHONE_CASE_SAMSUNG_GALAXY": [1.436, 0, 0, 0, 0, 0, 1.4], 
				 "RAGLAN": [1.362, 1.501, 1.605, 1.575, 1.599, 1.639, 0], 
				 "ZIP_HOODIE": [1.407, 1.633, 1.714, 1.577, 1.616, 1.623, 1.344], 
				 "STANDARD_SWEATSHIRT": [1.338, 1.587, 1.659, 1.547, 1.58, 1.584, 1.823], 
				 "TOTE_BAG": [1.206, 0, 0, 0, 0, 0, 0], 
				 "STANDARD_TSHIRT": [1.351, 1.514, 1.584, 1.526, 1.553, 1.554, 1.35], 
				 "STANDARD_LONG_SLEEVE": [1.393, 1.58, 1.662, 1.523, 1.542, 1.602, 1.603], 
				 "VNECK": [1.337, 1.538, 1.607, 1.549, 1.577, 1.587, 0], 
				 "THROW_PILLOW": [1.24, 0, 0, 0, 0, 0, 0], 
				 "STANDARD_PULLOVER_HOODIE": [1.386, 1.562, 1.653, 1.516, 1.54, 1.553, 1.755], 
				 "PREMIUM_TSHIRT": [1.323, 0, 0, 0, 0, 0, 0], 
				 "POP_SOCKET": [7.142, 8.571, 8.5, 8.571, 8.714, 8.642, 0], 
				 "TANK_TOP": [1.311, 1.584, 1.654, 1.482, 1.51, 1.547, 0]
			},
			"Zero": {
				 "PHONE_CASE_APPLE_IPHONE": [13.83, 0, 0, 0, 0, 0, 1617.04], 
				 "PHONE_CASE_SAMSUNG_GALAXY": [13.83, 0, 0, 0, 0, 0, 1617.04], 
				 "RAGLAN": [18.76, 14.62, 15.96, 16.86, 16.88, 16.74, 0], 
				 "ZIP_HOODIE": [26.79, 23.1, 25.87, 25.29, 25.63, 25.17, 3757], 
				 "STANDARD_SWEATSHIRT": [25.12, 24.04, 26.35, 22.97, 23.35, 23.3, 2975.53], 
				 "TOTE_BAG": [15.54, 0, 0, 0, 0, 0, 0], 
				 "STANDARD_TSHIRT": [13.38, 12.06, 13.72, 13.71, 13.72, 13.28, 1616.22], 
				 "STANDARD_LONG_SLEEVE": [17.67, 16.51, 17.82, 16.19, 16.2, 16.01, 2148.14], 
				 "VNECK": [15.16, 12.9, 13.54, 14.53, 14.5, 14.05, 0], 
				 "THROW_PILLOW": [17.38, 0, 0, 0, 0, 0, 0], 
				 "STANDARD_PULLOVER_HOODIE": [25.04, 25.61, 28.61, 25.56, 25.92, 25.39, 3345.86], 
				 "PREMIUM_TSHIRT": [15.06, 0, 0, 0, 0, 0, 0], 
				 "POP_SOCKET": [0, 0.02, -0.01, 0.02, -0.02, 0.03, 0], 
				 "TANK_TOP": [15.27, 13.38, 14.25, 13.86, 13.86, 13.7, 0]
			},
			"Max": {
				 "PHONE_CASE_APPLE_IPHONE": [30, 0, 0, 0, 0, 0, 6500], 
				 "PHONE_CASE_SAMSUNG_GALAXY": [30, 0, 0, 0, 0, 0, 6500], 
				 "RAGLAN": [45, 30, 35, 35, 35, 35, 0], 
				 "ZIP_HOODIE": [37.99, 45, 50, 50, 50, 50, 8000], 
				 "STANDARD_SWEATSHIRT": [33.99, 45, 50, 50, 50, 50, 8000], 
				 "TOTE_BAG": [25, 0, 0, 0, 0, 0, 0], 
				 "STANDARD_TSHIRT": [35, 17.48, 19.98, 19.48, 19.48, 19.48, 6500], 
				 "STANDARD_LONG_SLEEVE": [40, 35, 35, 40, 40, 40, 6500], 
				 "VNECK": [35, 35, 35, 35, 35, 35, 0], 
				 "THROW_PILLOW": [45, 0, 0, 0, 0, 0, 0], 
				 "STANDARD_PULLOVER_HOODIE": [35.99, 33.99, 38.99, 33.99, 33.99, 33.99, 8000], 
				 "PREMIUM_TSHIRT": [45, 0, 0, 0, 0, 0, 0], 
				 "POP_SOCKET": [20, 20, 20, 20, 20, 20, 0], 
				 "TANK_TOP": [35, 30, 30, 30, 30, 30, 0]
			},
			"Min": {
				 "PHONE_CASE_APPLE_IPHONE": [0, 0, 0, 0, 0, 0, 0], 
				 "PHONE_CASE_SAMSUNG_GALAXY": [0, 0, 0, 0, 0, 0, 0], 
				 "RAGLAN": [0, 0, 0, 0, 0, 0, 0], 
				 "ZIP_HOODIE": [26.99, 0, 0, 0, 0, 0, 0], 
				 "STANDARD_SWEATSHIRT": [24.99, 0, 0, 0, 0, 0, 0], 
				 "TOTE_BAG": [0, 0, 0, 0, 0, 0, 0], 
				 "STANDARD_TSHIRT": [0, 12.07, 13.71, 13.75, 13.75, 13.31, 0], 
				 "STANDARD_LONG_SLEEVE": [0, 0, 0, 0, 0, 0, 0], 
				 "VNECK": [0, 0, 0, 0, 0, 0, 0], 
				 "THROW_PILLOW": [0, 0, 0, 0, 0, 0, 0], 
				 "STANDARD_PULLOVER_HOODIE": [24.99, 25.62, 28.65, 25.52, 25.92, 25.42, 0], 
				 "PREMIUM_TSHIRT": [0, 0, 0, 0, 0, 0, 0], 
				 "POP_SOCKET": [11.72, 9.68, 10.34, 12.29, 12.28, 11.86, 0], 
				 "TANK_TOP": [0, 0, 0, 0, 0, 0, 0]
			}
		},des=.99,desJP=00,
		marplace={"US":["USD",0,1],"GB":["GBP",.2,1],"DE":["EUR",.19,1],"FR":["EUR",.2,1],"IT":["EUR",.22,1],"ES":["EUR",.21,1],"JP":["JPY", .1,200]};
		marplace.T=Object.keys(marplace);
		var history = {};
		this.mc = mc;
		this.GetPrice = GetPrice;
		this.AlgoPriceA = AlgoPriceA;
		this.DefPriceA = DefPriceA;
		this.GP = GP;
		this.history = history;
		var DefPrice={JP:3,ES:3,IT:3,FR:3,DE:3,GB:4,US:4.5};
		var AlgoPrice=[];
		
		function mc(n){
			if (!marplace.T) marplace.T=Object.keys(marplace);
			return marplace.T.indexOf(n)+1;
		}
		function DefPriceA(d){
			DefPrice=d;
		}
		function AlgoPriceA(t,p){
			AlgoPrice.push([t,p]);
		}
		function PriceAlgo(asin,market){
			var P=DefPrice[market];
			for (var al of AlgoPrice) if (eval(al[0])) P=al[1];
			P=Number(P);
			if (isNaN(P)||P<0) P=0;
			history[P]=(history[P]||0)+1
			return P;
		}
		function GetPrice(asin,market){
			return GP(PriceAlgo(asin,market));
		}
		function F(n,i=1){return Math.floor(n*i)/i;}
		function R(n,i=1){return Math.round(n*i)/i;}
		function Ry(a,b,p){ 
			var r;
			let M=marplace.T[b];
			let Mk=marplace[M];
			let div=PriceObj.Div[a][b];
			let zero=PriceObj.Zero[a][b];
			let max=PriceObj.Max[a][b];
			let min=PriceObj.Min[a][b];
			if (!div) return 0;
			r=(zero+Mk[2]*p*div);
			return Prsi(r);
			function Prsi(r){
				if (M=="JP"){
					r=R(r,1e-2);
					r=R(F(F(r-desJP-1,1),1e-2)+Mk[2]+desJP+(!p?Mk[2]:0),1);
				}else{
					r=R(r,100);
					r=R(F(F(r-des-0.01,100),1)+Mk[2]+des+(!p?Mk[2]:0),100);
				}
				if (r<min) return Prsi(min);
				if (r>max) return Prsi(max-(M=="JP"?100:1));
				return r;
			}
		}
		function GP(p){
			if (Price[p]==undefined){
				Prc(p);
				Price.i=1;
			}
			function Prc(u){
				var JC=0,Id,G=0,FT=0,To=0;
				if (!marplace.T) marplace.T=Object.keys(marplace);
				if (!marplace.P) marplace.P=Object.keys(PriceObj.Zero);
				//--------------------------------------------
				Price[u]=JSON.parse(JSON.stringify(PriceObj.Zero));
				for (var JC=0;JC<marplace.P.length;JC++){
					Id=marplace.P[JC];
					To+=PriceObj.Zero[Id].length;
					if (JC==marplace.P.length-1) FT=1;
					for (var i=0;i<PriceObj.Zero[Id].length;i++){
						RY(Id,i,u);
					}
				}
				function RY(a,b,u){
					Price[u][a][b]=Ry(a,b,u);
					G+=1;
					if (G==To&&FT) console.log("Price:"+u+", "+G+"/"+To);
				}
			}
			return Price[p];
		}
	}
}
