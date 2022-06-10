function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    const namedFn = "";
    return function namedFn() {
        console.log("this is a named function");
    };
}

function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
}