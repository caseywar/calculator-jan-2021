import { getSum, getSubSum, getMultSum, getDivSum } from './util.js';



const additionField = document.getElementById('add-input-1');
const additionField2 = document.getElementById('add-input-2');
const addResults = document.getElementById('add-results');

export function myClickHandler() {
    const fieldValue = additionField.valueAsNumber;
    const fieldValue2 = additionField2.valueAsNumber;
    const sum = getSum(fieldValue, fieldValue2);
    addResults.textContent = sum;
}



const subtractionField = document.getElementById('sub-input-1');
const subtractionField2 = document.getElementById('sub-input-2');
const subResults = document.getElementById('sub-results');

export function subClickHandler() {
    const subFieldValue = subtractionField.valueAsNumber;
    const subFieldValue2 = subtractionField2.valueAsNumber;
    const subSum = getSubSum(subFieldValue, subFieldValue2)
    subResults.textContent = subSum;
}



const multiplicationField = document.getElementById('mult-input-1')
const multiplicationField2 = document.getElementById('mult-input-2')
const multResults = document.getElementById('mult-results')

export function multClickHandler() {
    const multFieldValue = multiplicationField.valueAsNumber;
    const multFieldValue2 = multiplicationField2.valueAsNumber;

    const multSum = getMultSum(multFieldValue, multFieldValue2);
    multResults.textContent = multSum;
}



const divisionField = document.getElementById('div-input-1');
const divisionField2 = document.getElementById('div-input-2');
const divResults = document.getElementById('div-results');

export function divClickHandler() {
    const divValue1 = divisionField.valueAsNumber;
    const divValue2 = divisionField2.valueAsNumber;

    const divSum = getDivSum(divValue1, divValue2);
    divResults.textContent = divSum;
}

