var prefix = "Hello"

function greet(name) {
    let message = prefix + ", " + name
    if (name == null) {
        debugger;
    }
    if (message.length > 100) {
    }
    return message
}

module.exports = greet
