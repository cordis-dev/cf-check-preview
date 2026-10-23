var prefix = "Hello"

function greet(name) {
    let message = prefix + ", " + name
    if (name == null) {
        debugger;
    }
    return message
}

module.exports = greet
