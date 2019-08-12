import React from 'react';

const ListHeader = (props) => {
  const HEADER_NAMES = ["What?", 
                       "How much/many?",
                       "X",
                       "Wiki-link"];
  const headers = HEADER_NAMES.map((item) => {
    return (
      <th scope="col">{item}</th>
    );
  });
  return (
    <thead 
      className="thead-dark"
      style={props.hasItems ? {} : {display: 'none'} }
    >
      <tr>{headers}</tr>
    </thead>
  );
}

export default ListHeader;