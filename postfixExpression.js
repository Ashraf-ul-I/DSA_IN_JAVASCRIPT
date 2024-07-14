class Stack{
    constructor(){
        this.t=-1;
        this.Max=1000;
        this.stack=Array(this.Max).fill(0);
    }
    
    push(value){
        
        if(this.t>(this.Max-1)){
            console.log("stack is overflow");
            return false
        }else{
            this.t+=1;
            this.stack[this.t]=value;
            console.log(value + "pushed into stack");
            return true;
        }
        
    }
    
    pop(){
        if(this.t<0){
            console.log("Stack is underflow");
            return 0
        }else{
            let lastValue=this.stack[this.t];
            this.t-=1;
            return lastValue;
        }
    };
    
    peek(){
        if(this.t<0){
            console.log("stack is underflow");
            
        }else{
            let peekIs=this.stack[this.t];
            return peekIs;
        }
    };
    
    print(){
        for(let i=this.t;i>-1;i--){
            console.log(this.stack[i]+"\n")
        }
    }

}

function postFixExpression(exp){
    const stack=new Stack();
    for(let i=0;i<exp.length;i++){
        let c=exp[i];
       if(! isNaN( parseInt(c) ))
            stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
        else{
            let val1=stack.pop();
            let val2=stack.pop();
            
            switch(c){
                case '+':
                    stack.push(val2+val1);
                    break;
                case '-':
                    stack.push(val2- val1);
                    break;
                      
                case '/':
                    stack.push(val2/val1);
                    break;
                      
                case '*':
                    stack.push(val2*val1);
                    break;
            }
        }
    }
    return stack.pop()
    
}
let exp="231*+9-";

console.log("postfix expression of this expression is :"+ postFixExpression(exp))




