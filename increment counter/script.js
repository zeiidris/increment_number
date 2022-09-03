const containers = document.querySelectorAll('.counter');
containers.forEach(counter =>{
    counter.innerHTML = "0";
    const updateCounter = ()=>{
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target/200;
        if (c<target) {
            counter.innerHTML = `${Math.ceil(c+increment)}`
            setTimeout(() => {
                updateCounter();
            }, 1);
        }
    }
    updateCounter();
})