import React from 'react';

const FormInput = props => {
  return (
    <div className={props.general.className}>
      <label htmlFor={props.individual.id}>{props.individual.label}</label>
      <input 
          className="form-control"
          id={props.individual.id}
          name={props.individual.name}
          onChange={props.general.onChange}
          type="text"
          value={props.individual.value}
        />
    </div>
  );
}

export default FormInput;