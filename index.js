const clickMe = document.querySelector("#pusa");
clickMe.addEventListener("click", (e) => {
    const modal = document.getElementById("show_modal");
    modal.classList.add("block");
    modal.classList.remove("hidden");
    rocket.classList.remove("hidden");

    setTimeout(() => {
        modal.classList.remove("block");
        modal.classList.add("hidden");
    }, 1000)
});

const rocketButton = document.getElementById("rocketButton");
const rocket = document.getElementById("rocket");
const jose = document.getElementById("jose");
const matapang = document.getElementById("matapang");
const jollibee = document.getElementById("jollibee");
const lengleng = document.getElementById("lengleng");
const pakyu = document.getElementById("pakyu");

rocketButton.addEventListener("click", () => {
    rocketButton.classList.add("hidden")
    matapang.classList.remove("hidden");

    matapang.classList.add("block");


    setTimeout(() => {
        matapang.classList.add("hidden");
        jollibee.classList.remove("hidden");
        jollibee.classList.add("block");
    }, 2000)

    setTimeout(() => {
        jollibee.classList.add("hidden");
        lengleng.classList.remove("hidden");
        lengleng.classList.add("block");
    }, 3500)

    setTimeout(() => {
        lengleng.classList.add("hidden");
        pakyu.classList.remove("hidden");
        pakyu.classList.add("block");
        darkMode.classList.remove("hidden");
    }, 5000)


    // rocketButton.classList.add("move-out");
    // jose.classList.add("animate-leftToRight");
    // setTimeout(() => {
    //     jose.classList.remove("animate-leftToRight");
    // }, 2200)
});

const darkMode = document.getElementById("dark_mode");

darkMode.addEventListener("click", () => {
    const darkModeDiv = document.getElementById("dark_mode_div");
    darkModeDiv.classList.add("flex", "items-center", "justify-center");
    darkModeDiv.classList.remove("hidden");
});