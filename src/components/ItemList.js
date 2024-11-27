import React from 'react';
import Pagination from './Pagination';

const ItemList = ({ items, page, onPageChange }) => {
  const itemsPerPage = 10;
  const displayedItems = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div>
      <ul>
        {displayedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Pagination 
        currentPage={page} 
        totalPages={Math.ceil(items.length / itemsPerPage)} 
        onPageChange={onPageChange} 
      />
    </div>
  );
};

export default ItemList;
