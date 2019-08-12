import React from 'react';

const ListBody = props => {
  const rows = props.itemsData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.product}</td>
        <td>{row.quantity}</td>
        <td>
          <button 
            className="btn btn-info"
            onClick={() => props.removeItem(index)}
            type="button"
          >Remove</button>
        </td>
        <td>
          {row.link ? 
            (<a className="text-info" href={row.link} target="_blank">{row.product} on Wikipedia</a>) :
            (<span lassName="text-muted">no entries in Wikipedia for {row.product}</span>)
          }
        </td>
      </tr>
    )
  })
  
  return (
    <tbody>{rows}</tbody>
  );
}

export default ListBody;