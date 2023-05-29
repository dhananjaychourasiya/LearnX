import { useLocation, useOutletContext, useParams } from "react-router-dom";

const ProductDetail=()=>{
    const {id} = useParams();
    const pobj = useOutletContext();

    return(
        
        <div className="prodDetailContainer">
            <div className="imgContainer">
                <img src={pobj[id-1].img}/>
            </div>
            <div className="details">
                <h2>{pobj[id-1].pname}  @  {pobj[id-1].price}</h2>
                <h3> {pobj[id-1].desc} </h3>
                <h4> Shipping : {pobj[id-1].shipping} </h4>
            </div>
        </div>
    )
}

export default ProductDetail;