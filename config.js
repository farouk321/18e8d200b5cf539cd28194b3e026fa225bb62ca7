requirejs.config({
	waitSeconds: 200,
	paths: {
	 "InitMerch": "./InitMerch",
	 "FindDesigns": "./FindDesigns",
	 "FindProducts": "./FindProducts",
	 "GetDesign": "./GetDesign",
	 "GeneratePriceObj": "./GeneratePriceObj",
	 "GetProductConfig": "./GetProductConfig",
	 "LoadPrice": "./LoadPrice",
	 "RXhrJSON": "./RXhrJSON",
	 "GetSales": "./GetSales",
	 "Login": "./Login",
	 "groupBy": "./groupBy",
	 "Sleep": "./Sleep",
	},
	shim: {
		"FindDesigns": {
			deps: [],
		},
		"FindListing": {
			deps: ["GetSales"],
		},
		"GetDesign": {
			deps: [],
		},
		"GeneratePriceObj": {
			deps: ["GetProductConfig"],
		},
		"LoadPrice": {
			deps: ["GetSales"],
		},
		"GetSales": {
			deps: [],
		},
		"InitMerch": {
			deps: ["RXhrJSON","groupBy","Sleep","Login","GetProductConfig","GeneratePriceObj"],
		},
	}
});
requirejs.LoadPromise=new Promise((r,f)=>requirejs(["InitMerch"],r))
