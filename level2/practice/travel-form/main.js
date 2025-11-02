const form = document["travel"]

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const firstname = form.firstname.value
    const lastname = form.lastname.value
    const age = form.age.value
    const gender = form.gender.value
    const destination = form.locations.value

    let dietaries = document.travel.dietaries

    let checkedDietaries = [];

    for(var i = 0; i < dietaries.length; i++){
        if(dietaries[i].checked){
            checkedDietaries.push(dietaries[i].value)
        }
    }
    

    alert("First Name: " + firstname + "\nLast Name: " + lastname + "\nAge: " + age + "\nGender: " + gender + "\nDestination: " + destination + "\nDietary Restrictions: " + checkedDietaries) 

    
})

 