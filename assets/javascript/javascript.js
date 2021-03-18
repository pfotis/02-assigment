var assigments = [
    {
        title : "Code Refactor",
        image : "./assets/image/portofolio/cssFile1.png",
        webpage : "https://pfotis.github.io/code-refactor/",
        repository : "https://github.com/pfotis/code-refactor"
    },
    {
        title : "Password Generator",
        image : "./assets/image/portofolio/first_look.png",
        webpage : "https://pfotis.github.io/generator-password/",
        repository : "https://github.com/pfotis/generator-password"
    },
    {
        title : "Code Quiz",
        image : "./assets/image/portofolio/startQuiz.png",
        webpage : "https://pfotis.github.io/Code-Quiz/",
        repository : "https://github.com/pfotis/Code-Quiz"
    },
    {
       
        title : "Day Planner",
        image : "./assets/image/portofolio/in_the_begin.png",
        webpage : "https://pfotis.github.io/Day-Planner/",
        repository : "https://github.com/pfotis/Day-Planner"
    },
    {
       
        title : "Weather Dashboard",
        image : "./assets/image/portofolio/add_cities.png",
        webpage : "https://pfotis.github.io/Weather-Dashboard/",
        repository : "https://github.com/pfotis/Weather-Dashboard"
    },
    {
        title : "Melbourne Reboot",
        image : "./assets/image/portofolio/APIproject.png",
        webpage : "https://h-mai.github.io/APIproject/index.html",
        repository : "https://github.com/h-mai/APIproject"
    },
    {
        title : "Portofolio",
        image : "./assets/image/portofolio/aboutMe.png",
        webpage : "https://pfotis.github.io/portofolio/",
        repository : "https://github.com/pfotis/portofolio"
    },
    {
        title : "burger",
        image : "./assets/image/portofolio/first_impress.png",
        webpage : "https://secret-garden-47035.herokuapp.com/",
        repository : "https://github.com/pfotis/burger"
    },
    {
        title : "Restaurateur",
        image : "./assets/image/portofolio/login.png",
        webpage : "https://frozen-woodland-65100.herokuapp.com/",
        repository : "https://github.com/wendyVo/Project02.git"
    },
    {
        title : "readMe-Generator",
        image : "./assets/image/portofolio/readme1.png",
        webpage : "https://drive.google.com/file/d/1W41klD2MLD-vAK8Abcu3CTzQpkCfHNL0/view",
        repository : "https://github.com/pfotis/readMe-Generator"
    },
    {
        title : "employee-tracker",
        image : "./assets/image/portofolio/employeeList.png",
        webpage : "https://drive.google.com/file/d/1mQIzJpGsT2iBNYjOlvrsvdQfpXXiyIcy/view",
        repository : "https://github.com/pfotis/employee-tracker"
    },
    {
        title : "note-taker",
        image : "./assets/image/portofolio/index.png",
        webpage : "https://arcane-hamlet-40149.herokuapp.com/",
        repository : "https://github.com/pfotis/note-taker"
    },
    {
        title : "team-profile-generator",
        image : "./assets/image/portofolio/teamPhoto.png",
        webpage : "https://github.com/pfotis/team-profile-generator",
        repository : "https://github.com/pfotis/team-profile-generator"
    }
];

function addAssigment(projectName, photo, webpage, repository){

    var line = $("<div>");
    line.addClass("row");
    $(".assigment").append(line);

    var firstCollum = $("<div>");
    firstCollum.addClass("col-xs-12 col-sm-6 col-lg-6");
    line.append(firstCollum);

    var image = $("<img>");
    image.attr("src", photo);
    image.attr("alt", projectName);
    image.addClass("img-portofolio");
    firstCollum.append(image);

    var secondCollum = $("<div>");
    secondCollum.addClass("col-xs-12 col-sm-6 col-lg-6");
    line.append(secondCollum);

    var title = $("<div>");
    title.addClass("text-block");
    title.text(projectName);
    secondCollum.append(title);

    var namelink = ["Webpage", "Repository"];

    linkFunction(webpage, namelink[0]);

    linkFunction(repository, namelink[1]);


    function linkFunction(webpage , nameLink){

        var linkWebpage = $("<a>");
        linkWebpage.attr("href", webpage);
        linkWebpage.attr("target", "_blank");
        linkWebpage.addClass("button buttonColor");
        secondCollum.append(linkWebpage);
    
        var linkTitle = $("<div>");
        linkTitle.text(nameLink);
        linkWebpage.append(linkTitle);
    }

}

for(var i=0; i<assigments.length; i++){
    addAssigment(assigments[i].title,assigments[i].image, assigments[i].webpage, assigments[i].repository);
}


