
// ===================================== PART 1  =====================================


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


// ===================================== PART 2  =====================================

// Step 1: Create an array of numbers. Use the '.map' function to double all the numbers in the array.

const array1: number[] = [1,2,6,8,10,50];

const array2 = array1.map(e => e * 2);
console.log("Array of doubled numbers", array2)

// Step 2: Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.

const array3: string[] = ["Hell","AquaMan","Circus","Equalizer3"];

const array4 = array3.filter(e => e.length > 5)
console.log("Array of filtered words", array4)

// Step 3: Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
const array5: number[] = [1,2,6,8,10,50];

const array6: number = array5.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log("Reduced Array of numbers", array6)

/*
Step 4: Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.
*/
const array7: number[] = [1,2,6,8,10,50];

const array8: boolean = array7.some((e) => e > 10);
console.log("Does Array contain element greater than 10?", array8)


const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

const sortedList = list.sort( (a, b) => b - a);
console.log("Sorted List In Descending Order", sortedList)
const squaredNumbers = sortedList.map( e => e * e)
console.log("Squared Numbers", squaredNumbers)
// Remove the lowest two numbers and the highest 4 numbers from the list.
console.log("Length of Array to slice", squaredNumbers.length)
// We want to remove 4 elements of 13 = 4 first argument. And 13 - 2 = 2nd argument.
const trimmedList = squaredNumbers.slice(4, 11);
console.log("Trimmed List ", trimmedList)
const filteredArray = trimmedList.filter(e => e % 4 !== 0);
console.log("filteredArray List ", filteredArray)
const reducedArray = filteredArray.reduce( (prev, curr) => prev + curr, 0);
console.log("ReducedArray List ", reducedArray)


// ===================================== PART 3  =====================================
// ================================ TypeScript Types =====================================

type Grade = GradeGermanSystemNumbers | GradeGermanSystemStrings | GradeAmericanSystemStrings | UndefinedGrade;
type GradeGermanSystemNumbers = 1 | 2 | 3 | 4 | 5 | 6;
type GradeGermanSystemStrings = "1" | "2" | "3" | "4" | "5" | "6";
type GradeAmericanSystemStrings = "A" | "B" | "C" | "D" | "E" | "F";
type UndefinedGrade = undefined | "*"
type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades?: Grade[]
}

const printStudent = (student: Student): Student => {
    const {firstName, lastName, age, grades} = student

    const fullName = `${firstName} ${lastName} (${age})`;
    const printAsterixForMissingGrades = grades.map((grade: Grade) => {
        if (!grade) {
            return "*"
        }
        return grade;
    })
    const gradeString = printAsterixForMissingGrades.join(',')
    console.log(fullName);
    console.log('==============================');
    console.log(`Grades: ${gradeString}`);

    return {
        firstName,
        lastName,
        age,
        grades
    }
}

const student1: Student = {
    firstName: 'Anton',
    lastName: 'Meier',
    age: 17,
    grades: [1, "F", undefined, 1, 3, "B", 1, 2]
}

const student2: Student ={
    firstName: "Berta",
    lastName: "Müller",
    age: 17,
    grades: ["A", "*", "1"]
}

const student3: Student = {
    firstName: "Cäsar",
    lastName: "Schmidt",
    age: 17,
    grades: ["A", "1", "*", "3", "2", "4", "5"]
}
console.log("")
printStudent(student1)
console.log("")
printStudent(student2)
console.log("")
printStudent(student3)