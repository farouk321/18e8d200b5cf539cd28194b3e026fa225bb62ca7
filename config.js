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
			deps: ["RXhrJSON"],
			deps: ["GetSales"],
			deps: ["Login"],
			deps: ["groupBy"],
			deps: ["Sleep"],
		}
	}
});
