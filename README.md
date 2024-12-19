# Unhandled Exception in Calculator

This repository demonstrates an example of an unhandled exception in a simple JavaScript calculator. The `divide` function does not handle the case where the divisor is zero, resulting in an error that crashes the application. The solution demonstrates how to properly handle this error using a try-catch block.

## Bug

The `calculator.js` file contains the buggy code.  The `divide` function throws an error if the denominator is zero, but this error is not caught, leading to program termination.

## Solution

The `calculatorSolution.js` file provides a corrected version of the calculator.  It uses a `try...catch` block to handle the `Error` thrown when dividing by zero. This prevents the application from crashing and allows for more graceful error handling.