const container = $(".container");

let rowDiv = $("<div>");

function aboutMe(){
     rowDiv.addClass("row");
     container.append(rowDiv);
     var article = $("<article>");
     article.addClass("col-xs-12 col-sm-12 col-lg-7");
     rowDiv.append(article);
     var header2 = $("<h2>");
     header2.text("About Me");
     article.append(header2);
     var image = $("<img>");
     image.attr("src","./assets/img/me.JPG");
     image.attr("alt","me");
     image.addClass("img-thumbnail");
     article.append(image);
     paragraph = $("<p>");
     paragraph.addClass("paragraph");
     article.append(paragraph);
     $(document).ready(function(){
        paragraph.load("./aboutMe.txt");
    });

     
}

aboutMe();