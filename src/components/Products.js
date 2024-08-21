import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
`;

function Products({ products }) {
  return (
    <ProductsContainer>
      {products.map(product => (
        <Card 
          key={product.id} 
          title={product.title} 
          description={product.description} 
          imageUrl={product.imageUrl} 
        />
      ))}
    </ProductsContainer>
  );
}

export default Products;
