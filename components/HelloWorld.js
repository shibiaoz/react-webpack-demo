class HelloWorld {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '('+this.x+','+this.y+')';
    }
    say() {
        return 'hello - test!!';
    }
}
export default HelloWorld;
