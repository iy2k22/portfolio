const projData = {
    "be-nc-games": {
        name: "NC Games (Backend)",
        repo: "https://github.com/iy2k22/be-nc-games",
        lang: ["JavaScript"],
        img: "../assets/images/nc-games-be.png"
    },
    "fe-nc-games": {
        name: "NC Games (Frontend)",
        repo: "https://github.com/iy2k22/nc-games-frontend",
        lang: ["React"],
        img: "../assets/images/nc-games-fe.png"
    },
    "benchit": {
        name: "benchIt",
        repo: "https://github.com/valentinbiz/benchIt",
        lang: ["JavaScript", "React", "React Native"],
        img: "https://placehold.co/600x400"
    },
    "garden": {
        name: "Gardener's Little Helper",
        repo: "https://github.com/Oxanal3891/gardening-app",
        lang: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
        img: "../assets/images/garden.png"
    },
    "error": {
        name: "Error",
        repo: "./projects.html" ,
        lang: [],
        img: "https://placehold.co/600x400"
    }
};

$(document).ready(() => {
    const search = new URLSearchParams(window.location.search);
    const { name, repo, lang, img } = projData[search.get("name")] || projData.error;
    $("title").text(name);
    $("#heading h1").text(name);
    
    $("#box-header").text(name);
    $("#project-img").attr("src", img);
    $("#repo-link").attr("href", repo);
    
    // add list of tech
    const langList = $("#lang");
    for (let language of lang) {
        const newLi = $("<li>");
        newLi.html(`<span class="fa-li"><i class="fa-solid fa-code"></i></span>${language}`);
        langList.append(newLi);
    }
});