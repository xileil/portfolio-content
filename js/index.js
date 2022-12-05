let fig = document.getElementById("funfact");

let factButton = document.getElementById("fact_button");
factButton.addEventListener("click", hideFact);

function hideFact(){
    if(factButton.innerText == "Interesting!"){
        fig.style.display = "none";
        factButton.innerText = "Show Again";
    }
    else {
        fig.style.display = "block";
        factButton.innerText = "Interesting!";
    }
}