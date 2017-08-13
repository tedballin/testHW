var APIURL = 'https://imhungry-app.herokuapp.com';

$.ajax({
	method:"GET",
	url: APIURL + '/restaurant',
})
//ajax chaining
.done(function( restaurantList ){
	console.log(restaurantList);
	for(var i=0; i<restaurantList.length; i++){
		var content = $('<div>').addClass('rList-content');
		$('<h2>').text(restaurantList[i].name).appendTo(content);
		$('<h3>').text(restaurantList[i].type).appendTo(content);
		$('<p>').text(restaurantList[i].address).appendTo(content);
		// $('#rList').append($('<div id="' +restaurantList[i]._id+ '">').html('<h2>' + restaurantList[i].name + '</h2>'));
				var rlist = $('<div>').addClass('rList');
		$(rlist).append($('<img>').attr("src", restaurantList[i].image));
		$(content).appendTo(rlist);
		$(rlist).appendTo('.rest');
}

});

$('#add-form').submit(function(e) {
			//disable page refresh
			e.preventDefault();
			var newRes = {
			name: $('#name').val(),
			type: $('#type').val(),
			address: $('#address').val(),
		}
		console.log(newRes);
		
		$.ajax({
			method:'POST',
			url:APIURL + '/restaurant',
			// convert javascript object to json file
			data: JSON.stringify(newRes),
			contentType:'application/json',
			//send notification if successfully send the data
			success: function(data){
				//clear input
				$('#add-form').trigger('reset');
				alert('Success!');
			}
		})
});
