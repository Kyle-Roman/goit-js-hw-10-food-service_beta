const refs = {
    body: document.querySelector('body'),
    themeSwitchBtn: document.getElementById('theme-switch-toggle'),
};

const themes = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
defaultTheme();
checkStatus();

refs.themeSwitchBtn.addEventListener('change', toggle => {
    toggle.target.checked ? themeDark() : themeLight()
});

function defaultTheme() {
    refs.body.classList.add(themes.LIGHT);
    localStorage.setItem('body_theme', themes.LIGHT);
};

function checkStatus() {
    if (localStorage.getItem('checked') === "true") {
        (refs.themeSwitchBtn.checked = true);
        localStorage.setItem('body_theme', themes.DARK);
        refs.body.classList.remove(themes.LIGHT)
        refs.body.classList.add(themes.DARK);
    } else {
        (refs.themeSwitchBtn.checked = false);
    }
};

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