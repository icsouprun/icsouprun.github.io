var link =  "https://sheets.googleapis.com/v4/spreadsheets/";
const spreadsheetID = "1LGIYvsCCgM15_w8ZjdtFCvobsztQKfUrSnINP-D5mbo";
const API_KEY = "?key=AIzaSyA9DYSpPCqnhbcNDumc49vhtMt7h0hlYK8";
var range = "/values/" + "A" + ":" + "A";
var format = ""
var dataSheets = {};

// UPDATE FAQ PAGE
// finding no. of rows from spreadsheet
$.ajax({
	type: "GET",
	url: link + spreadsheetID + range + format + API_KEY,
	async: false,
	success: function(data, status){
	         	console.log("Length:", data.values.length, "Status :", status);
	         	range = "/values/Sheet1!" + "A3:" + "N" + (data.values.length).toString();
	     	}

})

//new get request for all the data
$.ajax({
	type: "GET",
	url: link + spreadsheetID + range + API_KEY,
	async: false,
	success: function(data, status){
		dataSheets = data;
			}
})

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

// UPDATE ANNOUNCEMENTS
// finding no. of rows from spreadsheet
$.ajax({
	type: "GET",
	url: link + spreadsheetID + range + format + API_KEY,
	async: false,
	success: function(data, status){
	         	console.log("Length:", data.values.length, "Status :", status);
	         	range = "/values/Sheet2!" + "A3:" + "N" + (data.values.length).toString();
	     	}

})

//new get request for all the data
$.ajax({
	type: "GET",
	url: link + spreadsheetID + range + API_KEY,
	async: false,
	success: function(data, status){
		dataSheets = data;
			}
})

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
	if (input[i][4]!=undefined) imagetag = "<img src='"+input[i][4]+"' alt='' />"
	
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
