import React from 'react';
import PropTypes from 'prop-types';
import './textareaInput.scss';

function TextareaInput(props) {
    const { label, placeholder, disabled, isPassword, autoFocus, input, meta, width, readOnly, isError} = props;
    const { invalid, touched, active } = meta;

    return (
        <div className="textarea-input__main-container">
            <div className="textarea-input__labels-container">
                <span className={`textarea-input__label ${(invalid && touched && !active) || isError ? 'text-red' : 'text-black'}`}>
                  {label}
                </span>
            </div>
            <textarea
                type={'text'}
                {...input}
                className={`textarea-input__input ${isPassword ? 'textarea-input__input_password' : ''} ${(invalid && touched) || isError ? 'textarea-input__input_error' : ''}`}
                placeholder={placeholder}
                disabled={disabled || readOnly}
                autoFocus={autoFocus}
                style={{
                    width
                }}
                readOnly={readOnly}
            ></textarea>
        </div>
    );
}

TextareaInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    isPassword: PropTypes.bool,
    isOptional: PropTypes.bool,
    disabled: PropTypes.bool,
    input: PropTypes.object,
    meta: PropTypes.object,
};

export default TextareaInput;