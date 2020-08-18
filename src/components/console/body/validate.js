let validate;
validate = (values, args) => {
    const errors = {};
    if (!values.request) {
        errors.request = 'Required';
    } else if (typeof values.request !== 'string') {
        errors.request = 'Not a string';
    } else {
        let parsedJSON = null;
        try {
            parsedJSON = JSON.parse(values.request);
        } catch {
            errors.request = 'Not a JSON';
        }
    }

    return errors;
};

export default validate;
