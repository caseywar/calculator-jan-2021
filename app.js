const additionField = document.getElementById('add-input-1');

const additionField2 = document.getElementById('add-input-2');

const addButton = document.getElementById('add-button');

const addResults = document.getElementById('add-results');


addButton.addEventListener('click', () => {

    const fieldValue = additionField.valueAsNumber;
    const fieldValue2 = additionField2.valueAsNumber;

    const result = fieldValue + fieldValue2;

    addResults.textContent = result;

    // post-click logic goes here!
});

const subtractionField = document.getElementById('sub-input-1');

const subtractionField2 = document.getElementById('sub-input-2');

const subButton = document.getElementById('sub-button');

const subResults = document.getElementById('sub-results');

// console.log(subtractionField)
// console.log(subtractionField2)
// console.log(subButton)
// console.log(subResults)
subButton.addEventListener('click', () => {
    // console.log('yo')
    const subFieldValue = subtractionField.valueAsNumber;
    const subFieldValue2 = subtractionField2.valueAsNumber;

    const subtractionResult = subFieldValue - subFieldValue2;

    subResults.textContent = subtractionResult;

    // post-click logic goes here!
});

const multiplicationField = document.getElementById('mult-input-1')
const multiplicationField2 = document.getElementById('mult-input-2')
const multButton = document.getElementById('mult-button')
const multResults = document.getElementById('mult-results')

// console.log(multiplicationField)
// console.log(multiplicationField2)
// console.log(multButton)
// console.log(multResults)

multButton.addEventListener('click', () => {

    // console.log('sup')
    const multFieldValue = multiplicationField.valueAsNumber;
    const multFieldValue2 = multiplicationField2.valueAsNumber;

    const multiplicationResult = multFieldValue * multFieldValue2;

    multResults.textContent = multiplicationResult;
    // post-click logic goes here!
});

const divisionField = document.getElementById('div-input-1');
const divisionField2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divResults = document.getElementById('div-results');

// console.log(divisionField);
// console.log(divisionField2);
// console.log(divButton);
// console.log(divResults);

divButton.addEventListener('click', () => {
    // console.log('suh');

    const divValue1 = divisionField.valueAsNumber;
    const divValue2 = divisionField2.valueAsNumber;

    const divisionResult = divValue1 / divValue2;

    divResults.textContent = divisionResult;

    // post-click logic goes here!
});


