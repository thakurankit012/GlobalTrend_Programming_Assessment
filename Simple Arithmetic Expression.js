function evaluateExpression(expr) {
    return new Function('return ' + expr)();
}
