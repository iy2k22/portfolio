$(document).ready(() => {
    const search = new URLSearchParams(window.location.search);
    $("title").text(search.get("name"));
})