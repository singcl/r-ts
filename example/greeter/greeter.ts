class Greeter {
    constructor(private greeting: string) { }
    public greet(): string {
        return '<h1>' + this.greeting + '</h1>';
    }
}

const greeter = new Greeter('Hello World!');

document.body.innerHTML = greeter.greet();