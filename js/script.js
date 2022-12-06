// inizio funzioni

//creo il tag div con relativa classe
function generateSquare(num){
    const element = document.createElement('div');

    element.classList.add('square');

    element.innerText = num;

    return element;
}

//fine funzioni

let grid = document.getElementById('grid');

let button = document.getElementById('play');


button.addEventListener('click', function(){
    
    //se è presente una griglia, la canella
    if(grid){
        grid.innerHTML="";
    }

    // creo un ciclo for per aggiungere le caselle all'interno della griglia
    for(let i = 1; i <= 100; i++){
    
        // assegno alla variabile, l'elemento generato dalla funzione
        let square = generateSquare(i);
    
        square.addEventListener('click',function(){
            this.classList.add('checked');
            
            console.log(`La casella selezionata contiene il numero: ${i}`);
        });
        
        // aggiungo gli elementi alla griglia in HTML
        grid.appendChild(square);
    }
});

