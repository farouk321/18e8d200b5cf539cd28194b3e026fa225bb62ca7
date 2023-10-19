requirejs.config({
	paths: {
	 "FindDesign": "./FindDesign",
	 "FindListing": "./FindListing",
	 "DesignDetails": "./DesignDetails",
	 "LoadPrice": "./LoadPrice",
	 "RXhrJSON": "./RXhrJSON",
	 "GetSales": "./GetSales",
	 "Login": "./Login",
	 "groupBy": "./groupBy",
	 "Sleep": "./Sleep",
	},
	shim: {
		"FindDesign": {
			deps: ["RXhrJSON","Login","groupBy","Sleep"],
		},
		"FindListing": {
			deps: ["RXhrJSON","GetSales","Login","groupBy","Sleep"],
		},
		"DesignDetails": {
			deps: ["RXhrJSON"],
		},
		"LoadPrice": {
			deps: ["GetSales"],
		},
		"GetSales": {
			deps: ["RXhrJSON"],
		},
	}
});
