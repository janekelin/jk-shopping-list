import FormInput from './FormInput'
import React from 'react';

const Form = props => {
  const {currentProduct, currentQuantity} = props;
  const general = { 
    className: "col-sm-12 col-lg-5 form-group",
    onChange: props.handleChange 
  };
  const productInput = {
    id: 'product',
    label: 'What to buy?',
    name: 'currentProduct',
    value: currentProduct,
  };
  const quantityInput = {
    id: 'quantity',
    label: 'How much/many?',
    name: 'currentQuantity',
    value: currentQuantity,
  };
  
  return (
    <form 
      className={props.className}
      onSubmit={props.handleSubmit}
    >
      <FormInput
        general={general}
        individual={productInput}
      />
      <FormInput 
        general={general}
        individual={quantityInput}
      />
      <button 
        className="col-sm-12 col-lg-2 btn btn-outline-info"
      >Add</button>
    </form>
  );
}

export default Form;