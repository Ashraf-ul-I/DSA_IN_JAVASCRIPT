class Stack{
    constructor(){
        //take t for keep remember the index of the array
        this.t=-1;
        //this is the maximum size of the array
        this.Max=1000;
        //create the stack using array of maxmimum length and fill with the initial value 0
        this.stack=Array(this.Max).fill(0);
    }
    
    push(item){
        //where we check the first step is that t bigger than max or not .if max then there no need to further step of push the value because array didnot have space
        if(this.t>=(this.Max-1)){
            console.log("Stack Overflow");
            return false;
        }else{
            //increase the index because we add a value to the stack so the index move one
            this.t+=1;
            this.stack[this.t]=item; //in the t index we add the item means the value we want to push in the stack.
            console.log(item + "pushed into stack");
            return true
        }
    }
    pop(){
        //before pop we have to check the index is smaller than 0 or not because is this than the stack is empty so there no need of any action for pop
        if(this.t<0){
            console.log("Stack Underflow")
            return 0;
        }else{
            var x= this.stack[this.t]; //here we take the value of last pushed 
            this.t-=1; //then decrease the index so then when new value will push to the stack its can get this index otherwise suppose the index at 7 then the value we pop from 7 if we didnot decrease this when new value pusdhed it will at the index 8 its mean index 7 will missed
            return x;
            
        }
        
    }
    
    peek(){
        if(this.t<0){
            console.log("Stack Underflow")
            return 0;
        }else{
            var x=this.stack[this.t];
            return x;
        }
    }
    
    print(){
        for(let i=this.t;i>-1;i--){
             console.log(" " + this.stack[i]);
        }
    }
}

function stackProcess(){
    const stack=new Stack();
    stack.push(10);
    stack.push(11);
    stack.push(20);
    stack.push(30);
    stack.push(40);
    stack.push(50);
    
    stack.print();
    stack.pop();
    console.log("Top Element of the stack is "+ stack.peek())
}

stackProcess();