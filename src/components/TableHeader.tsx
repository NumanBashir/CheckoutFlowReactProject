// TableHeader.tsx
import React from 'react';

const TableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <th>Produkt</th>
        <th>Antal</th>
        <th>Pris</th>
        <th>Samlede Pris</th>
      </tr>
    </thead>
  );
};

export default TableHeader;

