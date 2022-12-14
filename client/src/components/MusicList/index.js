import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { QUERY_PRODUCTS } from '../../utils/queries';
import spinner from '../../assets/spinner.gif';
import { idbPromise } from "../../utils/helpers";
import { Grid } from '@mui/material';

function MusicList() {
  const [state, dispatch] = useStoreContext();

  const currentCategory = '63ac98cc8843f37678d39e81';

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    // if there's data to be stored
    if (data) {
      // let's store it in the global state object
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });
  
      // but let's also take each product and save it to IndexedDB using the helper function 
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
        // add else if to check if `loading` is undefined in `useQuery()` Hook
  } else if (!loading) {
    // since we're offline, get all of the data from the `products` store
    idbPromise('products', 'get').then((products) => {
      // use retrieved data to set global state for offline browsing
      dispatch({
        type: UPDATE_PRODUCTS,
        products: products
      });
    });
  }
}, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <Grid container direction="row" sx={{ alignItems: "center", justifyContent: "center" }}>
      {state.products.length ? (
        <div >
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              description={product.description}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}    
    </Grid>
  );
}

export default MusicList;
