import { MDBRow } from "mdb-react-ui-kit";
import ProductItem from "./ProductItem";
import { Product } from "../types/";

interface Props {
    products: Product[];
}

const ProductList: React.FC<Props> = (props: Props) => {
    return (
        <MDBRow className="mt-3 ">
            {props.products.map((product, idx) => (
                <ProductItem
                    key={idx}
                    title={product.title}
                    price={product.price}
                    images={product.images}
                    description={product.description}
                />
            ))}
        </MDBRow>
    );
};

export default ProductList;
