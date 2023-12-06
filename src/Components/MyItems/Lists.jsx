import React, { useContext, useEffect, useState } from 'react'
import style from './myitems.module.css'
import { FavPrdContext } from '../../context/FavPrdContext'
import { ColorRing } from 'react-loader-spinner';
import { Outlet, useNavigate } from 'react-router';
const Lists = () => {
  let {getWishList1} = useContext(FavPrdContext);
  let [isLoading , setIsLoading] = useState(true); 
  let [name , setName ] = useState('');
  let navigate = useNavigate();
  async function getfavList(){
  let data = await getWishList1();
  setName(data?.name)
  setIsLoading(false);
  }

  useEffect(()=>{
    getfavList();
  },[])

  
  return <>
    {
      isLoading?
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
        </div>:
       
        <div className='container d-flex flex-column gap-5 p-0 p-md-3 flex-wrap'>
        <div className='container d-flex  gap-3 flex-wrap'>
            <div className={style.list}>
              <div onClick={()=>navigate('items')} style={{cursor: 'pointer'}} >
                <h5><i class="fa-solid fa-heart"></i> {name} List</h5>
                <p>favorites, no items added yet</p>
              </div>
              <img src='https://i5.walmartimages.com/dfw/4ff9c6c9-a942/k2-_b7330de4-c256-4814-97d7-2bea89e38ac7.v1.jpg?odnHeight=80&odnWidth=80&odnBg=e6f1fc' />
            </div>
            <div className={style.list}>
              <div onClick={()=>navigate('offers')} style={{cursor: 'pointer'}}>
                <h5>Your Claimed Offers</h5>
                <p>No Special Offers Claimed yet</p>
              </div>
              <img src='https://i5.walmartimages.com/dfw/4ff9c6c9-98c3/k2-_6ea0a29e-93b2-4068-9bc6-2f49f4d0a335.v1.png?odnHeight=80&odnWidth=80&odnBg=FFFFFF' />
            </div>
        </div>
    </div>
    }
      {<Outlet/>}
    
    </>
}

export default Lists