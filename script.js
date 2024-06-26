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
        this.occ=0;
        
    }
    

    game () {
        let won=false;
        
        const h2=document.querySelector('h2');
        h2.innerHTML=`player ${this.turn}'s turn`;
        btn.forEach((b) =>{  
            b.addEventListener('click',(bt)=>{ 
                
                if(bt.target.innerHTML===''&& !(won) ){ 
                const index =grid.indexOf(bt.target);
                
                console.log(grid[0]);
                grid[index].innerHTML=this.turn;
                console.log(this.winner());
                won =this.winner();
                this.Switch();
                if(this.CheckDraw()===false){
               h2.innerHTML=`player ${this.turn}'s turn`;
                }else{
                     h2.innerHTML="It's a draw!";
                    this.occ++;
                      won=true;
                }
            }
            
            if(won && this.occ===0) {
                this.Switch();
                h2.innerHTML="Player "+this.turn+" wins!";
                this.occ++;
              
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
                   
                }
                if(win===3){
                    
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
            
            return true;
        }  
        win=0;
        return false;
        
            }
    CheckDraw (){
        return grid.filter((e)=> e.innerHTML!=='').length === 9 ;
    }
    
    Switch (){
        if(this.turn===this.player1){
            this.turn=this.player2;
        }else{
            this.turn=this.player1;
        }
    }
    
    static brr (){
        _reset.addEventListener('click', () => {
            grid.forEach((element) => {
                // Réinitialiser le contenu de chaque élément à une chaîne vide
                element.innerHTML = '';
            });
            
            console.log("Réinitialisation effectuée");
            anis =null;
            anis =new Game(player1,player2).game();
        });
    }      
}

let anis =new Game(player1,player2).game();

Game.brr();