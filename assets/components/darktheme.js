const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getColorStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style);

const mainColor = {
    bgColor: getColorStyle(html, "--bg-color"),
    colorText: getColorStyle(html, "--color-text"),
    headerColor: getColorStyle(html, "--header-color"),
    footerColor:getColorStyle(html, "--footer-color"),
    footerColor:getColorStyle(html, "--footer-color"),
    modalHeader:getColorStyle(html, "--modal-header"),
    newsColor:getColorStyle(html, "--news-color")
}

const darkThemeColor = {
    bgColor: "#262525",
    colorText: "#fff",
    headerColor: "#282832",
    footerColor: "#282832",
    modalHeader: "#282832",
    newsColor: "#282832",
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    );
}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkThemeColor) : changeColors(mainColor);
})