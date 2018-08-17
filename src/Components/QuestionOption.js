import React from 'react';

export function Question (props) {
    return (<h2 className="question-heading">{props.question}</h2>);
}

export function Option (props) {
    return (<p className="question-option">{props.option}</p>);
}

export function QuestionWithOption (props) {
    return (
        <div className="question-wrapper">
            <Question question={props.question}></Question>
            <Option option={props.option}></Option>
        </div>
    );
}

