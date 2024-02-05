const genProject = (name, repo, lang, img) => {
    return {
        name: name,
        repo: repo,
        lang: lang,
        img: img || "../assets/images/placeholder.webp"
    };
};

const projects = [
    genProject("NC Games (Backend)", "https://github.com/iy2k22/be-nc-games", "JavaScript"),
    genProject("NC Games (Frontend)", "https://github.com/iy2k22/nc-games-fe", "React"),
    genProject("benchIt", "https://github.com/valentinbiz/benchIt", "JavaScript, React, React Native"),
    genProject("NC Games (Backend)", "https://github.com/iy2k22/be-nc-games", "JavaScript"),
    genProject("NC Games (Frontend)", "https://github.com/iy2k22/nc-games-fe", "React"),
    genProject("benchIt", "https://github.com/valentinbiz/benchIt", "JavaScript, React, React Native")
];

$(document).ready(() => {
    const main = $("#projects");
    for (let project of projects) {
        const projDiv = $("<div>");
        projDiv.addClass("col-sm-10 col-md-4 col-lg-3 project");
        const image = $("<img />");
        image.attr("src", project.img);
        image.addClass("projImg text-center img-fluid");
        const projBox = $("<div>");
        projBox.addClass("box projBox");
        const projName = $("<h4>");
        projName.text(project.name);
        const projLink = $("<a>");
        projLink.attr("href", project.repo);
        projLink.text("GitHub");
        const langs = $("<p>");
        langs.text(`Languages: ${project.lang}`);
        projBox.append(projName);
        projBox.append(projLink);
        projBox.append(langs);
        projDiv.append(image);
        projDiv.append(projBox);
        main.append(projDiv);
    }
})