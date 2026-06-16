class MinStack {
    constructor() {
        this.stack = [];
        this.minStack =[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val) // yah normal stack
        if(this.minStack.length === 0){
            this.minStack.push(val);
            
        } else{
            let current = this.minStack[this.minStack.length -1];
            this.minStack.push(Math.min(val , current));
        }
    }

    /**
     * @return {void}
     */
    pop() {
       
        this.minStack.pop();
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length-1];
    }
}
