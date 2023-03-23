let generalCollection = [];

class Movie{
    constructor(){
        
        if(JSON.parse(localStorage.getItem('generalCollection')) != null){
            generalCollection = JSON.parse(localStorage.getItem('generalCollection'));
            this.id = generalCollection[generalCollection.length-1].id + 1;
        }
        else this.id = 0;
        this.titleMovie = document.getElementById("title").value.trim(),
        this.country = document.getElementById("country").value.trim(),
        this.photo = document.getElementById("photo").value.trim()
    }
}


formMovie.addEventListener("submit", sumbitForm);

function sumbitForm(){
    clearDivMessageError();
    if(checkEmptyInput() == false){
        createMovie();
        addMessageSuccess("Ваша работа добавлена");
    }
    event.preventDefault();
}

function createMovie(){
    let movie = new Movie();

    if(JSON.parse(localStorage.getItem('generalCollection')) != null){
        generalCollection = JSON.parse(localStorage.getItem('generalCollection'));
    }

    generalCollection.push(movie);
    localStorage.setItem('generalCollection', JSON.stringify(generalCollection));
}


function checkEmptyInput(){
    let res = false;

    if(document.getElementById("title").value.trim() == ""){
        addMessageError("Введите ваше имя");
        res = true;
    }
    if(document.getElementById("country").value.trim() == ""){
        addMessageError("Введите урок");
        res = true;
    }
    
    
    
    return res;
}

function addMessageError(strMessage){
    let p = document.createElement('p');
    p.setAttribute("class", "error");
    p.textContent = strMessage;
    let div = document.getElementById('message');
    div.appendChild(p); 
}

function addMessageSuccess(strMessage){
    let p = document.createElement('p');
    p.setAttribute("class", "success");
    p.textContent = strMessage;
    let div = document.getElementById('message');
    div.appendChild(p); 
}

function clearDivMessageError(){
    let div = document.getElementById('message');

    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}
