let fig = document.getElementById("culturefig");

let figButton = document.getElementById("fig_button");
figButton.addEventListener("click", figHide);

function figHide(){
    if(figButton.innerText == "Hide Figcaption"){
        fig.style.display = "none";
        figButton.innerHTML = "Enable Figcaption";
    }
    else if(figButton.innerText == "Enable Figcaption"){
        fig.style.display = "block";
        figButton.innerText = "Hide Figcaption";
    }
}