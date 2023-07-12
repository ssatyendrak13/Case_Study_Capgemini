import React, { useEffect } from 'react';
import { Card, Table } from 'reactstrap';

function ProfileAdminAllProduct() {



  useEffect(() => {
    // alert('Please select')
    document.title = 'All Products'
  }, [])


  const products = [
    {
      productId: 12312,
      name: 'AYUSH',
      type: 'BABA',
      price: "3453",
      soldQty: "FDGHJGH",
      stockQty: "DFGDFGDF",
    },
    {
      productId: 12312,
      name: 'AYUSH',
      type: 'BABA',
      price: "3453",
      soldQty: "FDGHJGH",
      stockQty: "DFGDFGDF",
    },
    {
      productId: 12312,
      name: 'AYUSH',
      type: 'BABA',
      price: "3453",
      soldQty: "FDGHJGH",
      stockQty: "DFGDFGDF",
    },
     {
      productId: 12312,
      name: 'AYUSH',
      type: 'BABA',
      price: "3453",
      soldQty: "FDGHJGH",
      stockQty: "DFGDFGDF",
    }
  ];

  return (
    <div>
      <div className="text-center" style={{ color: 'green', fontSize: '24px', fontWeight: 'bold' }}>
        Stock Products
      </div>
      <div className="container-fluid">
        <div className="table-responsive">
          <Table hover size="sm">
            <thead style={{ backgroundColor: '#2c6c4b', color: 'white', fontSize: '18px' }}>
              <tr>
                <th>Image</th>
                <th>ProductId</th>
                <th>Name</th>
                <th>Type</th>
                <th>Price</th>
                <th>Sold Qty</th>
                <th>Stock Qty</th>
                <th colSpan="2" style={{ textAlign: 'center' }}>Actions</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: 'white', fontSize: '16px' }}>
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product.productId}>
                    <td>
                      <img src={`./ShowImage?pid=${product.productId}`} style={{ width: '50px', height: '50px' }} alt="Product" />
                    </td>
                    <td>
                      <a href={`./updateProduct.jsp?prodid=${product.productId}`}>{product.productId}</a>
                    </td>
                    <td>{product.name.substring(0, Math.min(product.name.length, 25)) + '..'}</td>
                    <td>{product.type.toUpperCase()}</td>
                    <td>{product.price}</td>
                    <td>{product.soldQty}</td>
                    <td>{product.stockQty}</td>
                    <td>
                      <form method="get" action={`updateproduct?prodid=${product.productId}`}>
                        <button type="submit" className="btn btn-primary">Update</button>
                      </form>
                    </td>
                    <td>
                      <form method="post" action={`./RemoveProductSrv?prodid=${product.productId}`}>
                        <button type="submit" className="btn btn-danger">Remove</button>
                      </form>
                    </td>
                  </tr>
                ))
              ) : (
                <tr style={{ backgroundColor: 'grey', color: 'white' }}>
                  <td colSpan="7" style={{ textAlign: 'center' }}>No Items Available</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ProfileAdminAllProduct;
