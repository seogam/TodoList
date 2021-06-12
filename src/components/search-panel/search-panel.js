import React from 'react';
import ItemStatusFilter from '../item-status-filter';

const SearchPanel = () => {
  return (
    <div className="d-flex mb-2 input-group input-group-lg">
      <input className="form-control" placeholder="search" />
      <ItemStatusFilter />
    </div>
  )
}

export default SearchPanel;