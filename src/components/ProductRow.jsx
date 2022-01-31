import React from 'react';

const ProductRow = (props) => {
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
                {props.products.map((product) => {
                    return (
                        <tr key={product.id}>
                            {product.inStock === false && (
                                <>
                                    <td className='red'>{product.name}</td>
                                    <td>{product.price}</td>
                                </>
                            )}
                            {product.inStock === true && (
                                <>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                </>
                            )}
                        </tr>
                    )
                })}
            
        </tbody>
    </table>
  );
};

export default ProductRow;
