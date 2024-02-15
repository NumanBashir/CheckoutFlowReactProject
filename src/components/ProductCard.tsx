// ProductCard.tsx
import React from 'react';
import './ProductCard.css';
import TableHeader from './TableHeader.tsx'; // Husk at filen nu er omdøbt til .tsx

const ProductCard: React.FC = () => {
  return (
    <div>
      <table>
        <TableHeader /> {/* Tilføjelse af TableHeader komponenten her */}
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          {/* ...andre rækker efter behov... */}
        </tbody>
      </table>
    </div>
  );
};

export default ProductCard;


