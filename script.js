const player1="X";
const player2="O";
const _reset=document.querySelector(".yo");
const btn=document.querySelectorAll(".tic");
let grid = Array.from(btn);




class Game{
    constructor(player1,player2){
        this.player1=player1;
        this.player2=player2;
        this.turn=player1;
        this.brr();
    }
    

    game () {
        let won=false;
        const h2=document.querySelector('h2');
        h2.innerHTML=`player ${this.turn}s turn`;
        btn.forEach((b) =>{  
            b.addEventListener('click',(bt)=>{ 
                
                if(bt.target.innerHTML===''&& !(won) ){ 
                const index =grid.indexOf(bt.target);
                
                console.log(grid[0]);
                grid[index].innerHTML=this.turn;
                console.log(this.winner());
                won =this.winner();
                this.Switch();
                h2.innerHTML=`player ${this.turn}s turn`;
            }
            if(won) {
                this.Switch();
                h2.innerHTML="Player "+this.turn+" wins!";
            };
            })       
        });
    }

    winner (){
                let win=0;
                //check rows
                
                    
                for (let i= 0; i < 3; i++) {
                    win=0;
                for (let index = i*3; index < i*3+3; index++) {
                    const element = grid[index];
                    if(element.innerHTML===this.turn){
                            win++;
                    }
                    //console.log(win);
                }
                if(win===3){
                    console.log("Player "+this.turn+" wins!");
                    return true;
                }
            }
            win=0;
            //check coloumn
            for (let i= 0; i < 3; i++) {
                win=0;
            for (let index = i; index <= i+3+3; index+=3) {
                const element = grid[index];
                if(element.innerHTML===this.turn){
                        win++;
                }
                
            }
            if(win===3){
                console.log("Player "+this.turn+" wins!");
                return true;
            }
        }
        win=0;
        //check diagonals left to right
        for (let index = 0; index <= 8; index+=4) {
            const element = grid[index];
            if(element.innerHTML===this.turn){
                    win++;
            }
            
        }
        if(win===3){
            console.log("Player "+this.turn+" wins!");
            return true;
        }
        win=0;

        for (let index = 6; index > 1; index-=2) {
            const element = grid[index];
            if(element.innerHTML===this.turn){
                    win++;
            }
            
        }
        if(win===3){
            console.log("Player "+this.turn+" wins!");
            return true;
        }  
        win=0;
        return false;
        
            }
    Switch (){
        if(this.turn===this.player1){
            this.turn=this.player2;
        }else{
            this.turn=this.player1;
        }
    }
    
    brr (){
        _reset.addEventListener('click', () => {
            grid.forEach((element) => {
                // Réinitialiser le contenu de chaque élément, par exemple, à une chaîne vide
                element.innerHTML = '';
            });
            console.log("Réinitialisation effectuée");
           
        });
    }

           
}



new Game(player1,player2).game();



