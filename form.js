document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("email").addEventListener("input",function(event){
        let emailElement=event.target;
        if(emailElement.validity.typeMismatch){
          emailElement.setCustomValidity("Please enter a email address");
          emailElement.reportValidity();
        }
       else(emailElement.setCustomValidity(""))
    })
})