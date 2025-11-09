let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    let countGoombas = document.getElementsByName("goombas")[0].value;
    let countBobombs = document.getElementsByName("bobombs")[0].value;
    let countCheepCheep = document.getElementsByName("cheepCheep")[0].value;

   let costGoombas = countGoombas * 5

    let total = document.createElement("div");
    total.className = "total";
    
  
    let totalText = document.createElement("h2");
    totalText.textContent = `Total: ${costGoombas}`;
    
    total.appendChild(totalText);
    
    document.body.appendChild(total);
});
