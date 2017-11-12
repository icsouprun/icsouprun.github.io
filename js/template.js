$navigation = $(    
	"<nav class='navbar navbar-default navbar-custom navbar-fixed-top'>"+
        "<div class='container-fluid'>"+
            "<div class='navbar-header page-scroll'>"+
                "<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>"+
                    "<span class='sr-only'>Toggle navigation</span>" +
                    "Menu <i class='fa fa-bars'></i>"+
                "</button>"+
                "<a class='navbar-brand' href='index.html'>IC Soup Run</a>"+
            "</div>"+
            "<div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>"+
                "<ul class='nav navbar-nav navbar-right'>"+
                    "<li>"+
                        "<a href='index.html'>Home</a>"+
                    "</li>"+
                    "<li>" +
                        "<a href='whatwedo.html'>What we do</a>"+
                    "</li>"+
					"<li>"+
						"<a href='more.html'>More</a>"+
					"</li>"+
					"<li>"+
                        "<a href='faq.html'>FAQ</a>"+
                    "</li>"+
                    "<li>" +
                        "<a href='contact.html'>Contact</a>"+
                    "</li>"+
                "</ul>"+
            "</div>" +
        "</div>" +
    "</nav>");

$("#navigation_space").append($navigation);