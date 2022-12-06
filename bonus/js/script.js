// inizio funzioni

//creo il tag div con relativa classe
function generateSquare(){
    const element = document.createElement('div');

    element.classList.add('square');

    return element;
}

//fine funzioni

let grid = document.getElementById('grid');

let button = document.getElementById('play');

let difficulty = document.getElementById('difficulty');

button.addEventListener('click', function(){

    if(difficulty[0].selected == true){
        // creo un ciclo for per aggiungere le caselle all'interno della griglia
        for(let i = 1; i <= 100; i++){
        
            // assegno alla variabile, l'elemento generato dalla funzione
            let square = generateSquare();
        
            square.classList.add('square-100');

            square.addEventListener('click',function(){
                this.classList.add('checked');
                
                this.innerText = i;
                alert(`La casella selezionata contiene il numero: ${this.innerText}`);
            });
            
            // aggiungo gli elementi alla griglia in HTML
            grid.appendChild(square);
        }
    }
    else if(difficulty[1].selected == true){
        // creo un ciclo for per aggiungere le caselle all'interno della griglia
        for(let i = 1; i <= 81; i++){
        
            // assegno alla variabile, l'elemento generato dalla funzione
            let square = generateSquare();
        
            square.classList.add('square-81');

            square.addEventListener('click',function(){
                this.classList.add('checked');
                
                this.innerText = i;
                alert(`La casella selezionata contiene il numero: ${this.innerText}`);
            });
            
            // aggiungo gli elementi alla griglia in HTML
            grid.appendChild(square);
        }
    }
    else{
        // creo un ciclo for per aggiungere le caselle all'interno della griglia
        for(let i = 1; i <= 49; i++){
        
            // assegno alla variabile, l'elemento generato dalla funzione
            let square = generateSquare();
        
            square.classList.add('square-49');

            square.addEventListener('click',function(){
                this.classList.add('checked');
                
                this.innerText = i;
                alert(`La casella selezionata contiene il numero: ${this.innerText}`);
            });
            
            // aggiungo gli elementi alla griglia in HTML
            grid.appendChild(square);
        }
    }
    
});

