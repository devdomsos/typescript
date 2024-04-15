const age: number = 55;

for (let i = 0; i <= age; i++) {
    console.log("Age", i)
}

// Use an 'if-else' statement to check if 'age' is greater than 18.
// Display appropriate messages depending on whether the condition is met or not.

if (age > 18) {
    console.log("Age is greater than 18")
} else {
    console.log("Age is lesser than 18")
}

// Step 4: Declare a variable named 'score' of type 'number' and assign it the value 0.
const score: number = 0;

// Step 5: Use an 'if' statement to check if 'score' has a value.
//     Display 'Score is available.' if 'score' has a value other than 0.

if (score) {
    if (score > 0) {
        console.log("Score is available.")
    }
    // Step 6: Use an 'if-else' statement to check if 'score' is evaluated as a 'truthy' value.
    //     Display 'Score is evaluated as truthy.' if 'score' is considered 'truthy'.
    console.log("Score is evaluated as truthy.")
}

// Step 7: Declare a variable named 'username' of type 'string' and assign it the value '' (empty string).
const userName: string = "";

if (!userName) {
    // Step 9: Use an 'if-else' statement to check if 'username' is evaluated as a 'falsy' value.
    //     Display 'Username is evaluated as falsy.' if 'username' is considered 'falsy'.
    console.log("Username is evaluated as falsy")
} else {
    // Step 8: Use an 'if' statement to check if 'username' has a value.
    //     Display 'Username is available.' if 'username' has a value.
    console.log("Username is available")
}

// Step 10: Declare a variable named 'isAdmin' of type 'boolean' and assign it the value 'false'.
const isAdmin: boolean = false;

if (isAdmin) {
    // Step 11: Use an 'if-else' statement to check if 'isAdmin' is evaluated as a 'truthy' value.
    //     Display 'isAdmin is evaluated as truthy.' if 'isAdmin' is considered 'truthy'.

    console.log("isAdmin is evaluated as truthy.")
} else {
    // Step 8: Use an 'if' statement to check if 'username' has a value.
    //     Display 'Username is available.' if 'username' has a value.
    console.log("isAdmin is false.")
}