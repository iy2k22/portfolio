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
    genProject("benchIt", "https://github.com/valentinbiz/benchIt", "JavaScript, React, React Native")
];

$(document).ready(() => {
    const main = $("main");
    
    for (let project of projects) {
        const heading = $("<h2></h2>");
        heading.text(project.name);
        const repo = $("<a>GitHub Repository</a>");
        repo.attr("href", project.repo);
        const lang = $("<p></p>");
        lang.text(`Language(s): ${project.lang}`);
        const img = $("<img>");
        img.attr("src", project.img);
        main.append(heading);
        main.append(repo);
        main.append(lang);
        main.append(img);
    }
})