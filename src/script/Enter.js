document.addEventListener('keypress', function(e) {
    if(e.key === "Enter"){
       const buttonEnter = document.querySelector('.button')
       
       buttonEnter.click()
    }
})
