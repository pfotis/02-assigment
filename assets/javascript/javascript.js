var assigments = [
    {
        image : "",
        title : "",
        webpage : "",
        repository : ""
    },
    {
        image : "",
        title : "",
        webpage : "",
        repository : ""
    },
    
];

function addAssigment(photo , projectName, webpage, repository){

    var line = $("<div>");
    line.addClass("row");
    $(".assigment").append(line);

    var firstCollum = $("<div>");
    firstCollum.addClass("col-xs-12 col-sm-6 col-lg-6");
    line.append(firstCollum);

    var image = $("<img>");
    image.attr("src", photo);
    image.attr("alt", "name");
    image.addClass("img-portofolio");
    firstCollum.append(image);

    var secondCollum = $("<div>");
    secondCollum.addClass("col-xs-12 col-sm-6 col-lg-6");
    line.append(secondCollum);

    var title = $("<div>");
    title.addClass("text-block");
    title.text(projectName);
    secondCollum.append(title);

    linkFunction(webpage);

    linkFunction(repository);


    function linkFunction(webpage){

        var linkWebpage = $("<a>");
        linkWebpage.attr("href", webpage);
        linkWebpage.attr("target", "_blank");
        secondCollum.append(linkWebpage);
    
        var linkTitle = $("<div>");
        linkTitle.addClass("text-block");
        linkTitle.text("webpage");
        linkWebpage.append(linkTitle);
    }

}


