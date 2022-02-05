![logo](https://user-images.githubusercontent.com/98092597/152608740-8c2aba32-4e03-4d2c-8809-cecf3dfbc3d8.png)

## Deliziosa Ricetta
Italian recipes Website.

Created to demonstrate my knowledge in a challenge proposed by mentors from the company Compass Uol.

## Languages
* Html 5
* CSS3
* JS

## Technology
* Bootstrap v5.1.3
* Sublime Text Version: Build 4126
* Visual Studio code (Extension Live server)

## Services Used
* Github
* Trello (https://trello.com/b/LVho6iGw/deliziosa-ricetta - Method Kanban)


### Features

- [x] Navbar Menu
- [x] User sign up
- [x] Dark Theme / Main Theme
- [x] Home page
- [x] Receitas salgadas page
- [x] Receitas doces page
- [x] Newsletter sign up
- [X] Footer Menu 

## Layout Main
<h3>1) Navbar Menu</h3>
<p> All contents from this website can be changed to dark theme.</p>

![navbar_menu](https://user-images.githubusercontent.com/98092597/152621425-50da5520-7d7d-4ce8-8618-71c447eddcdf.png)
	
<h3>2) Bannerslide </h3>

<p> I used <a href="https://www.canva.com/">canva</a> to fix images dimension 1400x600</p>

![bannerslide](https://user-images.githubusercontent.com/98092597/152621666-8db1c53d-305f-4c70-94f9-35841404eb97.png)

<h3>3) Cards format</h3>

<p> I used flex to all cards.<br>
This cards have hover (scale) action.
</p>

![cards](https://user-images.githubusercontent.com/98092597/152622186-5d6af929-ebfd-437c-909a-86acba127a75.png)


<h3>4) Newsletter </h3>
<p> This section has an mail box that show a small modal</p>

![newsletter](https://user-images.githubusercontent.com/98092597/152622652-d0f14c83-4963-42df-bd15-ddd755945f4f.png)

<h3>5) Modal Newsletter </h3>

![modalnewsletter](https://user-images.githubusercontent.com/98092597/152623117-98322f86-37a3-4e38-b01a-dd71c6d870dd.png)

<h3>6) Footer </h3>

![footer](https://user-images.githubusercontent.com/98092597/152623341-77da8548-2a9c-4877-a6af-a5e7e86fe9a7.png)


<h3>7) Sign up forms </h3>

<p> In this section i used REGEX to get password/CPF&&CEP default</p>

![Captura de tela de 2022-02-04 22-28-26](https://user-images.githubusercontent.com/98092597/152623525-74d48934-a6cb-46d2-b485-3a8c0fbe22b5.png)

![Captura de tela de 2022-02-04 22-30-30](https://user-images.githubusercontent.com/98092597/152623584-4b340bab-ec26-4ecb-bc6c-317f2b3d9c95.png)

```
<div class="input__div">
    <input name="senha" id="senha" class="input__user" type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$" title="A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, um número e não deve conter símbolos." data-tipo="senha" placeholder="Senha" required>
    <label class="input__label" for="senha"></label>
</div>
<div class="input__div">
    <input name="cpf" id="cpf" class="input__user" type="text" pattern="[0-9]{11}" title="O campo do CPF é composto por 11 números." data-tipo="cpf" placeholder="CPF" required>
    <label class="input__label" for="cpf"></label>
</div>
<div class="input__div">
    <input name="cep" id="cep" class="input__user" type="text" pattern="[\d]{5}-?[\d]{3}" data-tipo="cep" placeholder="CEP" required>
    <label class="input__label" for="cep"></label>
</div>
```

<h3>8) Dark theme demonstration </h3>

![Captura de tela de 2022-02-04 22-34-42](https://user-images.githubusercontent.com/98092597/152623722-cc510b13-5b59-469d-b7d1-36b1665fdd57.png)

```
HTML5:
<div class="dark__theme">
     <label class="theme__switch" for="switch">	
         <span class="theme__switch__text"> Claro / Escuro</span>
         <div class="switch__wrapper">
             <input class="switch__input__checkbox" id="switch" type="checkbox" name="theme">
             <span class="switch__button"></span>
         </div>
     </label>
</div>

CSS3:
html {
    --main-color-orange: #FF914D;
    --secondary-color-red: #DC2810;
    --secondary-color-white: #fff;
    --secondary-color-black: #000;
    --carousel-shadow: #000;
    --header-color: rgb(248, 249, 250);
    --bg-color: #fff;
    --color-text: #000;
    --footer-color: rgb(248, 249, 250);
    --modal-header: #FF914D;
    --news-color:#FF914D;
}

JS:
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

```

## Autor

## References



<h4 align="center"> 
	<img alt="GitHub" src="https://img.shields.io/github/license/wendelschimitz10/Deliziosa-Ricetta?style=plastic">
	
	🚧  Deliziosa Ricetta 🚀 Under development...  🚧
</h4>
