const genProject = (name, link, lang, img) => {
    return {
        name: name,
        link: link,
        lang: lang,
        img: img || "https://placehold.co/600x400"
    };
};

const projects = [
    genProject("NC Games (Backend)", "be-nc-games", "JavaScript", "../assets/images/nc-games-be.png"),
    genProject("NC Games (Frontend)", "nc-games-fe", "React", "../assets/images/nc-games-fe.png"),
    genProject("benchIt", "benchIt", "JavaScript, React, React Native"),
];

$(document).ready(() => {
    const main = $("#projects");
    for (let project of projects) {
        const projDiv = $("<div>");
        projDiv.addClass("col-sm-10 col-md-4 col-lg-3 project");
        const image = $("<img />");
        image.attr("src", project.img);
        image.addClass("projImg img-fluid");
        const projBox = $("<div>");
        projBox.addClass("box projBox");
        const projName = $("<h4>");
        projName.html("")
        projName.text(project.name);
        projName.addClass("boxHeading");
        const projLink = $("<a>");
        projLink.attr("href", `./project.html?name=${project.link}`);
        projLink.html("<i class=\"fa-brands fa-readme\"></i>INFO");
        projLink.addClass("link");
        const langs = $("<p>");
        langs.html(`<i class="fa-solid fa-code"></i>${project.lang}`);
        projBox.append(projName);
        projBox.append(langs);
        projBox.append(projLink);
        projDiv.append(image);
        projDiv.append(projBox);
        main.append(projDiv);
    }
})