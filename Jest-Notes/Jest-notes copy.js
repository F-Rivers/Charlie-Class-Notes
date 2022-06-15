// test driven development TDD - breaks code into series of tests 
// process - create test, make it pass, refactor 

// unit testing - testing individual pieces of the code 

// consider three things 
    // input 
    // the result 
    // the expected output 

// Jest - automated testing, created by facebook to test React applications 

// YARN - Yet Another Resource Negotiator - a package manager for your code 

// red-green-refactor process 
// 1: write the test first 
    // describe() method - a string that states the function name and a callback function 
        // describe("soup", () => {})
    // it() method - nested in the code block of the describe method(), a string describing what the funtion is doing and callback function 

    describe("soup", () => {
        it("returns a string that says Aloha, Charlie2022, here's some soup!", () => {
            expect(soup().toEqual("Aloha, Charlie2022, here's some soup!"))
        })
    })

// 2: Run your test to see a failing test 
    // $ yarn jest 

    // if you see an error message that test suit failed to run 

    // your test suite must contain at least one test 
        // at onResult 
        // at Array.map 

    // Good failure 
        // returns a string that says the aloha prompt 
        // ReferenceError: soup is not defined 

// 3: write the code 
    // input - none because when the function is called, I want to instantly give an output 
    // output - string with the aloha prompt
    // return the statement 

const soup = () => {
    return "Aloha, Charlie2022, here's some soup!"
}

// 4: Run your testing suite to your test pass 
    // $ yarn test 

// 5: Refactor if necessary 
