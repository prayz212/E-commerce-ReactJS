import { Item } from "../partials";
import ErrorScreen from "./ErrorScreen";
import "./HomeScreen.css";

const HomeScreen = ({ products, loading, error }) => {
  console.log({ products, loading, error });
  return (
    <div className="homescreen">
      {error ? (
        <ErrorScreen error={error} />
      ) : (
        <>
          <h2 className="homescreen__title">Latest Products</h2>
          <div className="homescreen__product">
            {loading ? (
              <>
                <Item isLoading={loading} />
                <Item isLoading={loading} />
                <Item isLoading={loading} />
                <Item isLoading={loading} />
              </>
            ) : (
              products.map((product) => (
                <Item
                  key={product._id}
                  isLoading={loading}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  productId={product._id}
                />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
