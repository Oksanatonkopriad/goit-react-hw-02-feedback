import React from 'react';
import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option => {
                return (
                    <button
                        key={option}
                        className={css.controls__btn}
                        type="button"
                        onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </button>
                )
            })}
        </div>
    );
};

FeedbackOptions.prpopTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};