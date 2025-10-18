document.animals.addEventListener("submit", function(e){
    e.preventDefault()

    var animal = document.animals.favorite.value
    console.log(animal)
})