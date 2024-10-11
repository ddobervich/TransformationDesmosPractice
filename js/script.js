 /**
   * Function to generate Desmos expressions for integer points
   * @param {string} expression - The function expression as a string
   * @return {Array<string>} - List of Desmos expressions for plotting points
   */
 function generateDesmosExpressions(expression) {
    const points = [];
    const xValues = Array.from({ length: 21 }, (_, i) => i - 10); // Array from -10 to 10

    console.log("Expression: " + expression);
    
    for (const x of xValues) {
      try {
        // Create a new function to evaluate the y-value
        const y = eval(expression.replace(/x/g, `(${x})`));
        if (Number.isFinite(y)) {
          points.push(`(${x}, ${y})`);
        }
      } catch (error) {
        console.error(`Error evaluating expression at x=${x}:`, error);
      }
    }

    // Convert points to Desmos expressions
    return points.map(point => `(${point})`);
  }