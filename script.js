let themeDots = document.getElementsByClassName('theme-dot');

let theme = localStorage.getItem('theme');

if(theme === null || theme === undefined){
    setTheme('light');
}else{
    setTheme(theme);
}

for(var i = 0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode === 'light'){
        document.getElementById('theme-style').href = 'default.css';
    }else if(mode === 'blue'){
        document.getElementById('theme-style').href = 'blue.css';
    }else if(mode === 'green'){
        document.getElementById('theme-style').href = 'green.css';
    }else{
        document.getElementById('theme-style').href = 'purple.css';
    }

    localStorage.setItem('theme', mode);
}