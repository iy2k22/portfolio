const projData = {
    "be-nc-games": {
        name: "NC Games (Backend)",
        repo: "https://github.com/iy2k22/be-nc-games",
        lang: ["JavaScript"],
        img: "../assets/images/nc-games-be.png",
        desc: "The first part of my NC Games app. This is an API that leverages Express and NodePostgres to access data stored in an SQL database.",
        deployed: "https://be-nc-games-jnf9.onrender.com/"
    },
    "fe-nc-games": {
        name: "NC Games (Frontend)",
        repo: "https://github.com/iy2k22/nc-games-fe",
        lang: ["JavaScript", "React"],
        img: "../assets/images/nc-games-fe.png",
        desc: "The second of my NC Games app. This utilises Axios to fetch data and React to put it on the screen.",
        deployed: "https://master--incredible-meerkat-f15c3c.netlify.app/"
    },
    "benchit": {
        name: "benchIt",
        repo: "https://github.com/valentinbiz/benchIt",
        lang: ["JavaScript", "React", "React Native"],
        desc: "The final project of the Northcoders bootcamp. This is an Android app that uses React Native."
    },
    "garden": {
        name: "Gardener's Little Helper",
        repo: "https://github.com/Oxanal3891/gardening-app",
        lang: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
        img: "../assets/images/garden.png",
        desc: "The first project of the edX front-end bootcamp. It's not the most advanced project but this was where I really got to hone my jQuery skills.",
        deployed: "https://oxanal3891.github.io/gardening-app/"
    },
    "zenarch": {
        name: "ZenArch",
        repo: "https://github.com/Kjhohura24/Architecture_App",
        lang: ["React", "Bootstrap", "Tailwind"],
        img: "../assets/images/zenarch.png",
        desc: "The second (and final) project of the edX front-end bootcamp. I was mainly responsible for the image collage on the front page, which uses Tailwind.",
        deployed: "https://65cd242522d9651ea1976569--sparkling-sherbet-b40e86.netlify.app/"
    },
    "error": {
        name: "Error",
        repo: "./projects.html" ,
        lang: [],
        img: "",
        desc: "It appears you've tried to access a project that doesn't exist. Perhaps you've made a typo?"
    }
};

$(document).ready(() => {
    let err = false;
    const search = new URLSearchParams(window.location.search);
    const { name, repo, lang, img, desc, deployed } = projData[search.get("name")] || projData.error;
    if (!projData[search.get("name")])
        err = true;
    
    // tab title
    $("title").text(name);
    $("#heading h1").text(name);
    
    $("#project-description").text(desc);
    if (err) {
        $("#project-description").css({
            "margin-bottom": 0,
            "text-align": "center"
        });
        $("#box-header").detach();
        $("#project-img").detach();
        $("#repo-link").detach();
        $("#deployed-link").detach();
        $(".body-row").detach();
        return;
    }
    $("#project-img").attr("src", img);
    $("#repo-link").attr("href", repo);
    if (deployed)
        $("#deployed-link").attr("href", deployed);
    else
        $("#deploy-container").detach();
    
    // add list of tech
    const langList = $("#lang");
    for (let language of lang) {
        const newLi = $("<li>");
        newLi.html(`<span class="fa-li"><i class="fa-solid fa-code"></i></span>${language}`);
        langList.append(newLi);
    }
});