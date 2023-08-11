// Select the output elements
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");

// Select the input elements
let isValid = false;
const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");

// Error elements
const error_year = document.querySelector(".error-year");
const error_month = document.querySelector(".error-month");
const error_day = document.querySelector(".error-day");

input_day.addEventListener('input', e => {
    if(+input_day.value > 31 || +input_day.value < 0) {
        error_day.textContent = "Must be a valid day";
        isValid = false;
    }
    else if (+input_day.value === 0) {
        isValid = false;
        error_day.textContent = "This field is required";
    }
    else {
        isValid = true;
        error_day.textContent = "";
    }
})

input_month.addEventListener('input', e => {
    if(+input_month.value > 12 || +input_month.value < 0) {
        error_month.textContent = "Must be a valid month";
        isValid = false;
    }
    else if (+input_month.value === 0) {
        isValid = false;
        error_month.textContent = "This field is required";
    }
    else {
        isValid = true;
        error_month.textContent = "";
    }
})

input_year.addEventListener('input', e => {
    if(+input_year.value > new Date().getFullYear()) {
        error_year.textContent = "Must be in the past";
        isValid = false;
    }
    else if (+input_year.value < 0) {
        isValid = false;
        error_year.textContent = "Must be a valid year"
    }
    else if (+input_year.value === 0) {
        isValid = false;
        error_year.textContent = "This field is required";
    }
    else {
        isValid = true;
        error_year.textContent = "";
    }
})

submit_btn.addEventListener('click', calculateDate => {
    if (isValid) {
        let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
        let birthdayObj = new Date(birthday); //Converts birth date to milliseconds
        let ageDiffMill = Date.now() - birthdayObj; //Calculates age difference in milliseconds
        let ageDate = new Date(ageDiffMill); //Convert difference in milliseconds to a date
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay() - 1;
        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYears;

    } else {
        alert("Error!")
    }
})
