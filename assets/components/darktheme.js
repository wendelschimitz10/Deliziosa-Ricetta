const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getColorStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style);

const mainColor = {
    bg: getColorStyle(html, "--background-color"),
    colorText: getColorStyle(html, "--color-text"),
}

const darkThemeColor = {
    bg: "#2D2424",
    colorText: "#FFF",
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