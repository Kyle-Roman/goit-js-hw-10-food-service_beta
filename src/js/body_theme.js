const refs = {
    body: document.querySelector('body'),
    themeSwitchBtn: document.getElementById('theme-switch-toggle'),
};

const themes = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const defaultTheme = localStorage.setItem('body_theme', themes.LIGHT);

const checkStatus = function () {
    if (localStorage.getItem('checked') === "true") {
        (refs.themeSwitchBtn.checked = true);
        refs.body.classList.add(themes.DARK);
    } else {
        (refs.themeSwitchBtn.checked = false);
    }
};
checkStatus();

refs.themeSwitchBtn.addEventListener('change', toggle => {
    toggle.target.checked ? themeDark() : themeLight()});




function themeLight() {
    if (localStorage.getItem('body_theme', themes.LIGHT)) {
        refs.body.classList.remove(themes.DARK);
        refs.body.classList.add(themes.LIGHT);
        localStorage.setItem('body_theme', themes.LIGHT);
        localStorage.setItem('checked', false);
    }    
};

function themeDark() {
    if (localStorage.getItem('body_theme', themes.DARK)) {
        refs.body.classList.remove(themes.LIGHT);
        refs.body.classList.add(themes.DARK);
        localStorage.setItem('body_theme', themes.DARK);
        localStorage.setItem('checked', true);
    }    
};


// refs.body.classList.add(defaultTheme);


// localStorage.setItem('body_theme', JSON.stringify(themes));

// const bodyTheme = JSON.parse(localStorage.getItem('body_theme'));

