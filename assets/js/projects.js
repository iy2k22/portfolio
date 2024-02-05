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
    
    for (let i = 0; i < projects.length; ++i) {
    }
})