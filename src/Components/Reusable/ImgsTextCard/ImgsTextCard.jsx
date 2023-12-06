import classes from '../CircleCat/CircleCat.module.css'
export default function ImgsTextCard() {
  return <>
  <div className=" mt-5 border rounded " style={{backgroundColor:"#F7F7F8"}}>
    <div className="row d-flex justify-content-evenly">
      <div className=" rounded col-md-3 m-3">
        <a href="" className={classes.noDe}>
        <h5>Fleece styles starting at $10</h5>
        <p className='text-black-50'>The softest, coziest picks to wear now $ layer later </p>
        </a>
      </div>
      <div className="col-md-3 m-3">
        <a href="" className={classes.noDe}>
        <img src="https://i5.walmartimages.com/seo/Mens-Sherpa-Lined-Hooded-Puffer-Jacket-Sizes-S-to-2XL_d3d2293b-f0fc-4da1-abf5-b9624d3de923.32a64982cf56cc80480ff5709eecb4f5.jpeg?" className='w-100'/ >
        </a>
      </div>
      <div className="col-md-3 m-3">
        <a href="" className={classes.noDe}>
        <img src="https://i5.walmartimages.com/seo/Allegra-K-Women-s-Notch-Lapel-Double-Breasted-Belted-Mid-Length-Trenchcoat_26492303-b14a-4657-9560-b3ffc4223900.952401081a91cfe16bff10937fab977d.jpeg" className='w-100'/>
        </a>
      </div>
    </div>
  </div>
  </>
}
