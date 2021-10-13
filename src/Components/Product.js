import { useCookies } from 'react-cookie';

const Product = ({product}) => {

    const {name,price,id,image} = product
    const [cookies, setCookie] = useCookies(["cartData"]);
      

    const addtocart = (e) => {
        const productId=e.target.getAttribute("for")
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate()+1);
        const CookiesData=cookies

        if("cartData" in CookiesData === false){
            setCookie('cartData', productId, { path: '/', expires: tomorrow });
        }
        else{
            console.log(CookiesData)
            var arr=CookiesData.cartData.split(",")
            console.log(arr)
            var productIndex=arr.indexOf(productId.toString())
            console.log(productIndex)
            if(productIndex == -1){
                var newProduct=CookiesData.cartData +","+productId
                console.log(newProduct)
                setCookie('cartData', newProduct, { path: '/', expires: tomorrow });
                console.log("product updated in cart")
            }
            else{
                console.log("product exist")
            }
        }
    }
    return(
        <div class="card" style={{width:"400px"}}>
            <img class="card-img-top" src={image} alt="Card image" />
            <div class="card-body">
                <h4 class="card-title">{name}</h4>
                <p class="card-text">{price}</p>
                <p class="card-text">{id}</p>
                <button class="btn btn-primary" onClick={addtocart} for={id}>add to cart</button>
            </div>
        </div>
    )
}

export default Product