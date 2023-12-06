import CardElem from "../CardElem/CardElem";

// import style from './CardCont.module.css'
export default function CardCont(props) {
  return <>
 <div className="mt-4">
  <h5 className="font-weight-bold">Your Events haul</h5>
  <div className="d-flex flex-wrap flex-md-nowrap gap-3 align-items-center  justify-content-around ">
    <CardElem image="https://i5.walmartimages.com/dfw/4ff9c6c9-8059/k2-_be068da0-75e4-4fac-96f3-08fb96a19051.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF" h="Halloween Candy" p="Some quick example text to build on the card title and make up the bulk of the card's content"/>
    <CardElem image="https://th.bing.com/th/id/OIP.9_HKXLt-yQsgImoOW0QdVAHaFA?w=233&h=180&c=7&r=0&o=5&pid=1.7" h="Halloween Candy" p="Some quick example text to build on the card title and make up the bulk of the card's content"/>
    <CardElem image="https://th.bing.com/th/id/OIP.citZmN8_BqV0BvceDP91oAHaEo?pid=ImgDet&w=204&h=127&c=7" h="Winter Snow" p="Some quick example text to build on the card title and make up the bulk of the card's content"/>
  </div>
 </div>
  </>
}
