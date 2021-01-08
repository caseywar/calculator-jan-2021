// IMPORT MODULES under test here:
import { getSum, getSubSum, getMultSum, getDivSum } from '../util.js';

const test = QUnit.test;

test('it should return, 3 when provided 1 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 3;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(1, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return, 12 when provided 6 and 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 12;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(6, 6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



test('it should return, 4 when provided 6 and 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSubSum(6, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return, -3 when provided 0 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -3;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSubSum(0, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



test('it should return, 6 when provided 2 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 6;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMultSum(2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return, 24 when provided 6 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 24;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getMultSum(6, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



test('it should return, 4 when provided 8 and 2', (expect) => {

    const expected = 4;
    const actual = getDivSum(8, 2);
    expect.equal(actual, expected);
});

test('it should return 6 when provided 12 and 2', (expect) => {
    const expected = 6;
    const actual = getDivSum(12, 2);
    expect.equal(actual, expected);
})