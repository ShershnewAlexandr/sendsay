import React from 'react';
import PropTypes from 'prop-types';
import lang from '../../../utils/lang/ru.json';
import './textInput.scss';

function TextInput(props) {
    const { label, placeholder, disabled, isPassword, autoFocus, isOptional, input, meta } = props;
    const { invalid, touched, active } = meta;

    return (
        <div className="text-input__main-container mb-20">
            <div className="text-input__labels-container">
                <span className={`text-input__label ${invalid && touched && !active ? 'text-red' : 'text-black'}`}>
                  {label}
                </span>
                {
                    isOptional && (
                        <span className="text-input__optional text-gray">{lang["text-input"].option}</span>
                    )
                }
            </div>
            <input
                type={isPassword ? 'password' : 'text'}
                {...input}
                className={`text-input__input ${isPassword ? 'text-input__input_password' : ''} ${invalid && touched ? 'text-input__input_error' : ''}`}
                placeholder={placeholder}
                disabled={disabled}
                autoFocus={autoFocus}
            />
        </div>
    );
}

TextInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    isPassword: PropTypes.bool,
    isOptional: PropTypes.bool,
    disabled: PropTypes.bool,
    input: PropTypes.object,
    meta: PropTypes.object,
};

export default TextInput;
