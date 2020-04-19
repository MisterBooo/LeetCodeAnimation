class MinStack {

    private Stack<Integer> _data;
    private Stack<Integer> _min;

    /** initialize your data structure here. */
    public MinStack() {
        _data = new Stack<>();
        _min = new Stack<>();
    }
    
    public void push(int x) {
        _data.add(x);
        if (_min.isEmpty()){
            _min.push(x);
        }
        else{
            if (x > _min.peek()){
                x = _min.peek();
            }
            _min.push(x);
        }
    }
    
    public void pop() {
        _data.pop();
        _min.pop();
    }
    
    public int top() {
        return _data.peek();
    }
    
    public int getMin() {
        return _min.peek();
    }
}