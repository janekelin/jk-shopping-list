import ListBody from './ListBody';
import ListHeader from './ListHeader';
import React, {Component} from 'react';

const List = props => {
const { itemsData, removeItem } = props;
    return (
      <table className="table col-sm-12">
        <ListHeader hasItems={itemsData.length} />
        <ListBody 
          itemsData={itemsData} 
          removeItem={removeItem}
        />
      </table>
    );
}

export default List;