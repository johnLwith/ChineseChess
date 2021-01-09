class Bin implements Span {
    title: string = "Bin";
    empty: boolean = false;
}

class Span {
    title: string = null;
    empty: boolean = true;
    
}

class Board
{
    private spans: Span[][] = [];

    constructor(){
        for(let i = 0; i < 10; i++){
            this.spans[i] = [];
            for (let j = 0; j < 9; j++) {
               this.spans[i][j] = new Span();
            }
        }
    }

    public star(){
        console.log(this.spans);
        document.body.innerHTML = JSON.stringify(this.spans);
    }
}

new Board().star();