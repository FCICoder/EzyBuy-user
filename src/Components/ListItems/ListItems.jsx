import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { FavPrdContext } from "../../context/FavPrdContext";
import { useContext, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import instance from "../../axiosConfig/instance";
import { LangContext } from "../../context/LangContext";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

// import style from './ListItems.module.css'
export default function ListItems() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { lang, dir } = useContext(LangContext);
  let { getWishList1 , removeFromWishList1} = useContext(FavPrdContext);
  let [isLoading, setIsLoading] = useState(true);
  let [items, setItems] = useState('');

  function addToCartHandler(prd) {
    dispatch(
      addToCart({
        id: prd._id,
        quantity: 1,
        price: prd.price,
        img: prd.images[0],
        title: prd.title,
        retailer_id: prd.retailer_id,
        status: "Pending",
      })
    );
  }
  async function getfavList() {
    let data = await getWishList1();
    setItems(data.wishList);
    setIsLoading(false);
  }
  // console.log(items);

  async function removeFromList(id){
    if (localStorage.getItem('customerToken')) {
      let {data}  = await instance.patch(`/customer/wishList/${id}`,{
        headers: {
          'authorization': localStorage.getItem('customerToken')
        }}).catch(err=>{
        console.log(err.response.data.data)
        if(err.response.data.data = 'jwt expired'){
          // toast.error("Your Sign in session Ended Please Sign in again..!")
          // navigate('/login');
          // localStorage.removeItem('customerToken');
        }
      })
      if (data.message == 'product successfully deleted') {
        toast.success('Successfully Removed');
        getfavList();
      }
    } else {
      location.href = '/login'
    }    
  }
  useEffect(() => {
    getfavList();
  }, [])
  return <>
    {
      isLoading ?
        <div className=' w-100 py-5 fs-1 d-flex justify-content-center align-items-center' style={{}}>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['black','black',"black",'black', 'black']}

          />
        </div> :
        <div className="row">
          {
        items?.map((prd)=>
        <div key={prd.id} className="col-md-3" style={{ cursor: 'pointer' }}>
            <span className=' fw-bold text-primary p-1 rounded-2 bg-body-secondary' style={{ fontSize: "9px" }}>
              {lang==='en'?'Best seller':'الاكثر مبيعا'}
            </span>
            <div className='text-end '>
            </div>
            <div >

              <div className="" style={{height:180}}>
                <img
                  src={prd.images[0]}
                  alt="Perfume" className='img-fluid' 
                  onClick={() => navigate(`/product/${prd._id}`)}
                  />
              </div>
              <button className='btn btn-primary rounded-5 fw-bold mt-3'
              onClick={() => addToCartHandler(prd)}
              >{lang==='en'?'+ Add':'+ اضف'}</button>
              <div className='mt-1'>
                <span className='text-success  fs-5' style={{ fontWeight: "700" }}>Now</span>
                <span className='text-success fw-bold ms-1 me-1 position-relative' style={{ top: "-8px" }}>$</span>
                <span className='text-success  fs-4' style={{ fontWeight: "700" }}>{prd.price.toString().split('.').splice(0, 1)}</span>
                <span className='text-success fw-bolder position-relative' style={{ top: "-8px" }}>{prd.price.toString().split('.').splice(1)}</span>
                <span className='ms-2 fs-5 text-body-secondary text-decoration-line-through '>${Math.round((prd.discountPercentage) * prd.price)}</span>
              </div>
              <div className='mt-2'>
                <span className='bg-body-secondary text-success me-1 p-1 rounded-3 ' style={{ fontWeight: "600" }}> You save</span>
                <span className='text-success' style={{ fontWeight: "700" }}>{(Math.round(prd.discountPercentage * prd.price) - (prd.price))}</span>
                <p className='mt-1' style={{ fontSize: "14px", fontWeight: "400" }}>{lang === 'en'?prd.title.toString().split(' ').splice(0, 2).join(' '):prd.ar_title} </p>
              </div>
              <div className='mt-2'>

              <Rating
                      readonly={true}
                      initialRating={
                        prd?.ratingQuantity > 1 ? prd?.ratingQuantity : prd?.rating
                      }
                      fullSymbol={<FontAwesomeIcon icon={faStar} color="goldenRod" />}
                      emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    />
                <span className='text-body-secondary' style={{ fontSize: "11px" }}> {prd.rating}</span>
                <p className="mt-2" style={{ fontSize: "11px" }}>
                      {lang === 'en'?'Free shipping, arrives':'شحن مجاني خلال '}
                      <strong> 
                      {lang === 'en'?'in +3 day':'3 ايام'}
                        
                        </strong>
                    </p>
              </div>
            </div>
            <button className="btn btn-danger w-100" onClick={()=>removeFromList(prd._id)}>{lang==='en'?'remove':'ازاله'}</button>
          </div>
        )
        }
        </div>
    }
    <Toaster/>
  </>
}
