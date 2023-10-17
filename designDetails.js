//-----------------groupBy-----------------//
async function designDetails(Id) {
	var url = 'https://merch.amazon.com/api/productconfiguration/get?id=' + Id;
	var params = '';
	return RXhrJSONP("POST",url);
}
