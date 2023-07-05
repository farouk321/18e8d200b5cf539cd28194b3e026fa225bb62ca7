require=({
	paths: {
	 "FindListing": "./FindListing",
	 "RXhrJSON": "./RXhrJSON",
	 "GetSales": "./GetSales",
	 "Login": "./Login",
	 "groupBy": "./groupBy",
	 "Sleep": "./Sleep",
	},
	shim: {
		"FindListing": {
			deps: ["RXhrJSON","GetSales","Login","groupBy","Sleep"],
		}
	}
});
