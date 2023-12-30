requirejs.config({
	paths: {
	 "FindDesign": "./FindDesign",
	 "FindListing": "./FindListing",
	 "DesignDetails": "./DesignDetails",
	 "GetDesign": "./GetDesign",
	 "GeneratePriceObj": "./GeneratePriceObj",
	 "LoadPrice": "./LoadPrice",
	 "RXhrJSON": "./RXhrJSON",
	 "GetSales": "./GetSales",
	 "Login": "./Login",
	 "groupBy": "./groupBy",
	 "Sleep": "./Sleep",
	},
	shim: {
		"FindDesign": {
			deps: [],
		},
		"FindListing": {
			deps: ["GetSales"],
		},
		"GetDesign": {
			deps: [],
		},
		"GeneratePriceObj": {
			deps: [],
		},
		"LoadPrice": {
			deps: ["GetSales"],
		},
		"GetSales": {
			deps: [],
		},
	}
});
await (new Promise({r,f}=>requirejs(["RXhrJSON","Login","groupBy","Sleep"],r)))
