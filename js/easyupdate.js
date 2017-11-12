var link =  "https://sheets.googleapis.com/v4/spreadsheets/";
const spreadsheetID = "1LGIYvsCCgM15_w8ZjdtFCvobsztQKfUrSnINP-D5mbo";
const API_KEY = "?key=AIzaSyA9DYSpPCqnhbcNDumc49vhtMt7h0hlYK8";
var format = ""
var dataSheets = {};

// UPDATE ANNOUNCEMENTS
range = "/values/announcements!" + "A3:" + "N1000";
$.ajax({
	type: "GET",
	url: link + spreadsheetID + range + API_KEY,
	success: function(data, status){
		dataSheets = data;
		input = dataSheets.values;
		console.log(input);

		var title;
		var subtitle;
		var content;
		var hrefstart = ""
		var hrefend = ""
		var imagetag = ""

		// Announcements
		for (i in input){
			title = input[i][0]
			subtitle = input[i][1]
			content = input[i][2]
			if (input[i][3]!=undefined){
				hrefstart = "<a href='" + input[i][3] + "'>"
				hrefend = "</a>"
			} 
			if (input[i][4]!=undefined) imagetag = "<img style='max-width: 100%' src='"+input[i][4]+"' alt='' />"
			
			var announce = $("<!--Announcements -->" +
				"<div class='container'>" +
				  "<div class='row'>" +
					"<div class='col-lg-8 col-md-10 mx-auto'>"+
					  "<div class='post-preview'>" + 
						hrefstart +
						  "<h2 class='post-title'>" + title + "</h2>" +
						  "<h3 class='post-subtitle'>" + subtitle + "</h3>" + 
						hrefend +
						"<p class='post-meta'>" + content + "</p>" + 
						imagetag +
					  "</div>" +
					  "<hr>" +
					"</div>" +
				  "</div>" +
				"</div>")
			$("#mainAnnouncements").append(announce)
		}		
	}
})

// UPDATE MORE PAGE
range = "/values/more!" + "A3:" + "N1000";
//new get request for all the data
$.ajax({
	type: "GET",
	url: link + spreadsheetID + range + API_KEY,
	success: function(data, status){
		dataSheets = data;
		var input = dataSheets.values;
		console.log(input);

		// More data 
		var question;
		var textans;
		for (i in input){
			imgURL = input[i][0]
			title = input[i][1]
			weblink = input[i][2]
			description = input[i][3]
			var post = $(
			"<div class='col-lg-3 col-md-4 col-sm-6 portfolio-item'>" +
			  "<div class='card h-100'>" +
				"<a href='" + weblink +"'><img class='card-img-top text-center' src='" + imgURL +"'></a>" +
				"<div class='card-body'>" +
				  "<h4 class='card-title text-center'>" +
					"<a href='" + weblink +"'>" + title +"</a>" +
				  "</h4>" +
				  "<p class='card-text text-center'>" + description + "</p>" +
				"</div>" +
			  "</div>" +
			"</div>")
			$("#moreposts").append(post)
		}
	}
})

// UPDATE FAQ PAGE
range = "/values/faq!" + "A3:" + "N1000";
//new get request for all the data
$.ajax({
	type: "GET",
	url: link + spreadsheetID + range + API_KEY,
	success: function(data, status){
		dataSheets = data;
		var input = dataSheets.values;
		console.log(input);

		// FAQ data 
		var question;
		var textans;
		for (i in input){
			question = input[i][0]
			textans = input[i][1]
			var FAQmod = $("<b>" + question + "</b><br>" + textans + "<br><br>")
			$("#FAQcontent").append(FAQmod)
		}
	}
})
