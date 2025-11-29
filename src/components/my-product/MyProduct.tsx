
import type {IProduct} from "../models/IProduct.ts";
import type {FC} from "react";

type MyPropsType = {
    product: IProduct;
}

const MyProduct: FC<MyPropsType> = ({product}) => {
    return (
        <div>
            <h2>{product.title}. {product.price} uah</h2>
            <img src={product.image} alt={product.title}/>
        </div>
    );
};

export default MyProduct;