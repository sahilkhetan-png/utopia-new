var registered = false;

async function register(){
    if(registered){return true}

    if ("serviceWorker" in navigator) {
        await navigator.serviceWorker.register("/graph.js", {
            scope: '/math/'
        }).then(()=>{
            registered = true;
        });
    }

    return registered;
}

window.addEventListener("load", () => {
    register();
});

if(location.hash != ''){
    register().then(()=>{
        document.querySelector(".gam").src = window.location.origin + location.hash.substring(1);
    });
}
