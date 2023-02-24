class Functions {
    static setInputOnlyNumbers(inputSelector) {
        const inputPhone = document.querySelector(inputSelector),
            validNumber = new RegExp(/^\d*\.?\d*$/);
        let lastValid = document.querySelector(inputSelector).value;

        function validateNumber(elem) {
            if (validNumber.test(elem.value)) {
                lastValid = elem.value;
            } else {
                elem.value = lastValid;
            }
        }

        inputPhone.addEventListener('input', function (e) {
            validateNumber(this);
        });
    }
}

export default Functions;