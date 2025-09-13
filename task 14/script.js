// Function that returns a Promise to perform division
const divide = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log(`Dividing ${a} by ${b}...`);
        if (b === 0) {
            reject("Error: Division by zero is not allowed.");
        } else {
            resolve(a / b);
        }
    });
};

// Async function to run all test cases in order
const runTests = async () => {
    try {
        const result1 = await divide(10, 2);
        console.log(" Result is:", result1);
    } catch (error) {
        console.log(error);
    }

    try {
        const result2 = await divide(10, 0);
        console.log(" Result is:", result2);
    } catch (error) {
        console.log(error);
    }

    try {
        const result3 = await divide(52, 7);
        console.log(" Result is:", result3);
    } catch (error) {
        console.log(error);
    }

    try {
        const result4 = await divide(5, 0);
        console.log(" Result is:", result4);
    } catch (error) {
        console.log(error);
    }

    try {
        const result5 = await divide(87, 56);
        console.log(" Result is:", result5);
    } catch (error) {
        console.log(error);
    }
};

// Run the tests
runTests();
