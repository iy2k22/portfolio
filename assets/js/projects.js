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
        projName.html("")
        projName.text(project.name);
        projName.addClass("boxHeading");
        const projLink = $("<a>");
        projLink.attr("href", project.repo);
        projLink.html("<i class=\"fa-brands fa-github-alt\"></i>GitHub");
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