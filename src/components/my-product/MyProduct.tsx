
import type {IProduct} from "../models/IProduct.ts";
import type {FC} from "react";

// type MyPropsType = {
//     product: IProduct;
// }

const MyProduct: FC<IProduct> = ({title, price, image}) => {
    // const {title, price, image} = product;
    return (
        <div>
            <h2>{title}. {price} uah</h2>
            <img src={image} alt={title}/>
        </div>
    );
};

export default MyProduct;