import React from 'react';

const ItemStatusFilter = () => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-outline-secondary">All</button>
      <button type="button" className="btn btn-outline-secondary">Active</button>
      <button type="button" className="btn btn-outline-secondary">Done</button>
    </div>
  )
}

export default ItemStatusFilter;