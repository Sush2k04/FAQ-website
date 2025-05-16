const element = document.querySelectorAll(".question");
element.forEach(q=>{
    q.addEventListener("click",()=>{
        const ans = q.nextElementSibling;
        const isVisible = ans.style.display === 'block';

        const an = document.querySelectorAll(".answer");
        an.forEach(v=>{
            v.style.display = 'none';
        })
        if (!isVisible) {
            ans.style.display = 'block';
    }
    })
})