let validate;
validate = (values, args) => {
    const errors = {};
    if (!values.login) {
        errors.login = 'Required';
    } else if (typeof values.login !== 'string') {
        errors.login = 'Not a string';
    } else {
        let re = new RegExp('^[a-zA-Z0-9@. ]+$');
        if (!re.test(values.login)) {
            errors.login = "regexp err";
        }
    }

    if (!values.subLogin) {

    } else if (typeof values.subLogin !== 'string') {
        errors.subLogin = 'Not a string';
    } else {
        let re = new RegExp('^[a-zA-Z0-9@. ]+$');
        if (!re.test(values.subLogin)) {
            errors.subLogin = "regexp err";
        }
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (typeof values.password !== 'string') {
        errors.password = 'Not a string';
    } else {
        let re = new RegExp('^[a-zA-Z0-9@. ]+$');
        if (!re.test(values.password)) {
            errors.password = "regexp err";
        }
    }

    return errors;
};

export default validate;
