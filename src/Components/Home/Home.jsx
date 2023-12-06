// import Sample from "../Reusable/Sample/Sample";
// import TwoImages from "../Reusable/TwoImages/TwoImages";
import CircleCat from "../Reusable/CircleCat/CircleCat";
import DropDownCat from "../Reusable/DropDownCat/DropDownCat";
import DropDownCont from "../Reusable/DropDownCont/DropDownCont";
import CirCatCont from "../Reusable/CirCatCont/CirCatCont";
import CarouselCont from "../Reusable/CarouselCont/CarouselCont";
import CarouselElem from "../Reusable/CarouselElem/CarouselElem";
import CardElem from "../Reusable/CardElem/CardElem";
import CardCont from "../Reusable/CardCont/CardCont";
import ShopNowCard from "../Reusable/ShopNowCard/ShopNowCard";
// import Sample from "../Reusable/Sample/Sample";
// import TwoImages from "../Reusable/TwoImages/TwoImages";

import style from "./Home.module.css";
import { useContext, useEffect, useState } from "react";
import instance from "../../axiosConfig/instance";
import axios from "axios";
import { LoginContext } from "../../context/LoginContext";
import { useSelector } from "react-redux";
import { ColorRing } from "react-loader-spinner";
import { LangContext } from "../../context/LangContext";
export default function Home() {
  const {customerToken} = useContext(LoginContext)
  const [products,setProducts] = useState([])
  let [isLoading, setIsLoading ] = useState(true);
  const {dir, lang} = useContext(LangContext)
  useEffect(()=>{
    instance.get('/product/all').then((data)=> {
      setProducts(data.data)
      setIsLoading(false);
    })
    
  },[])
  const cards = [
    {
      imgURL:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-e5d3/k2-_78b09564-e996-47ed-abc4-acd5f980158c.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70",
      title: "Host and Haunted \n Nights",
    },
    {
      imgURL: "https://i5.walmartimages.com/dfw/4ff9c6c9-a7f6/k2-_60daf5f8-6385-4594-b209-4faec78010cc.v1.jpg?odnHeight=578",
      title: 'Conjure\n Up \n Your Look',
    },
    {
      imgURL:'https://i5.walmartimages.com/dfw/4ff9c6c9-de54/k2-_160cc920-b447-4adb-947e-6b22db3f5859.v1.jpg?odnHeight=216&odnWidth=385&odnBg=&odnDynImageQuality=70',
      title:'Treat bags & \n more.'
    },
    {
      imgURL:'https://i5.walmartimages.com/dfw/4ff9c6c9-a094/k2-_f6d8950f-696c-40b2-83b4-7fcc1fee9399.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70',
      title:'Halloween Thrills'
    },
    {
      imgURL:'https://i5.walmartimages.com/dfw/4ff9c6c9-9b1a/k2-_46d000b6-4576-43ac-aa78-51a2ea2f0844.v1.jpg?odnHeight=388&odnWidth=385&odnBg=&odnDynImageQuality=70',
      title:"Devil's in the details!"
    },
    {
      imgURL:'https://i5.walmartimages.com/dfw/4ff9c6c9-e703/k2-_04fe4d37-4282-43d9-9224-bdc382ef9ee0.v1.jpg?odnHeight=388',
      title:'Up to 65% off'
    },
    {
      imgURL:'https://i5.walmartimages.com/dfw/4ff9c6c9-21d7/k2-_010ce435-9cfa-4871-98d9-b58993dee070.v1.jpg?odnHeight=216&odnWidth=794&odnBg=&odnDynImageQuality=70',
      title:'members get free shipping with no order minimum!'
    },
    {
      imgURL:'https://i5.walmartimages.com/dfw/4ff9c6c9-d60f/k2-_05fc03e3-7634-4bf2-9540-408e8c1f572b.v1.jpg?odnHeight=216&odnWidth=385&odnBg=&odnDynImageQuality=70',
      title:'Pumpkin carving from 4$'
    },
    {
      imgURL:'https://i5.walmartimages.com/dfw/4ff9c6c9-5a93/k2-_83783cdc-5702-4729-8022-911f62460d6e.v1.jpg?odnHeight=256',
      title:'Wickedly Fun Style'
    },
    {
      imgURL:'https://i5.walmartimages.com/dfw/4ff9c6c9-df55/k2-_61d339bc-a3fd-4167-b2eb-242f58043643.v1.jpg?odnHeight=578',
      title:'Treat your pup all fall'
    },

  ];

  let b1 = {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
   
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 5,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 5,
    },
    1300: {
      slidesPerView: 7,
      spaceBetween: 5,
    },
    1400: {
      slidesPerView: 7,
      spaceBetween: 5,
    },
   
    1700: {
      slidesPerView: 8,
      spaceBetween: 5,
    },
  }
  let b2 = {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
   
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 5,
    }
    
  }
  return (
    <>
     {isLoading ?
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
      <div className="d-flex flex-column gap-4 align-items-center w-100" >
        {/* Grid */}
        <div className="row d-flex w-100 justify-content-center ">
          <div className="d-flex align-items-center flex-column gap-4 col-6 col-md-6 col-xl-3 col-lg-3 mb-4">
            <ShopNowCard src={cards[0].imgURL} title={cards[0].title}/>
            <ShopNowCard txtColor='white' src={cards[1].imgURL} title={cards[1].title}/>
            <ShopNowCard src={cards[2].imgURL} title={cards[2].title}/>
          </div>
          <div className="d-lg-flex d-xl-flex flex-column gap-4 col-6 d-none ">
            <ShopNowCard src={cards[3].imgURL} title={cards[3].title}/>
            <div className="d-flex gap-4">
            <ShopNowCard txtColor='white' src={cards[4].imgURL} title={cards[4].title}/>
            <ShopNowCard  src={cards[5].imgURL} title={cards[5].title}/>
            </div>
            <ShopNowCard src={cards[6].imgURL} titleWidth='500px' title={cards[6].title}/>
          </div>
          <div className="d-flex align-items-center flex-column gap-4 col-6 col-md-6 col-xl-3 col-lg-3 ">
            <ShopNowCard src={cards[7].imgURL} title={cards[7].title}/>
            <ShopNowCard txtColor='white' src={cards[8].imgURL} title={cards[8].title}/>
            <ShopNowCard src={cards[9].imgURL} title={cards[9].title}/>
          </div>
        </div>
        {/* Deals */}
        <div className=" p-1 p-md-5" style={{maxWidth:'100vw'}} dir={dir}>

        <CarouselCont breakpoints={b1} products={products}  headline={lang == 'en' ? 'Top Deals' : 'أفضل العروض'} desc={lang == 'en' ? 'Up to 65% off' : 'خصم يصل إلى 65%'}/>
        </div>
        <div  className="row d-flex align-items-center w-100 gap-4 justify-content-center">
          <div dir={dir} className="col-12 col-lg-5">
        <CarouselCont breakpoints={b2} products={products}  headline={lang == 'en'? 'Add to your collection' :'أضف لقائمتك'} desc={lang =='en' ? 'Metallics, neutrals & more for all.':'المعادن والألوان المحايدة والمزيد للجميع.'}/>
          </div>
          <div className="col-12 col-lg-6">
            <ShopNowCard src={cards[3].imgURL} title={cards[0].title}/>
          </div>
      </div>
      </div>
}
    </>
  );
}
