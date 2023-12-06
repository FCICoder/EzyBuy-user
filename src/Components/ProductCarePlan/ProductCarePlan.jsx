import Slider from 'react-slick'
import style from './ProductCarePlan.module.css'
import { useState } from 'react';

export default function ProductCarePlan() {
  const [isDropdownOpen, setisDropdownOpen] = useState('none');
  const [changeIcon, setChangeIcon] = useState('down')

  const [isDropdownOpen1, setisDropdownOpen1] = useState('none');
  const [changeIcon1, setChangeIcon1] = useState('down')


  const [isDropdownOpen2, setisDropdownOpen2] = useState('none');
  const [changeIcon2, setChangeIcon2] = useState('down')

  const toggleDropdown = () => {
    setisDropdownOpen(isDropdownOpen === 'none' ? 'inline' : 'none');
    setChangeIcon(changeIcon === 'down' ? 'up' : 'down');
  }

  const toggleDropdown1 = () => {
    setisDropdownOpen1(isDropdownOpen1 === 'none' ? 'inline' : 'none');
    setChangeIcon1(changeIcon1 === 'down' ? 'up' : 'down');
  }

  const toggleDropdown2 = () => {
    setisDropdownOpen2(isDropdownOpen2 === 'none' ? 'inline' : 'none');
    setChangeIcon2(changeIcon2 === 'down' ? 'up' : 'down');
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: true,
    autoplaySpeed: 1900,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,


        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return <>

    <div id="prodPlan">
      <h5 style={{}} className="">Walmart Protection Plans by Allstate</h5>

      <section>
        <div className="header row mt-5   " >
          <div className="col-md-6  " style={{ cursor: "pointer" }}>
            <div className="  rounded-4 border border-1 pb-4" style={{ boxShadow: "0px 3px 4px 1px rgb(0,0,0,.3)" }}>
              <div>
                <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-6edc/k2-_71a199d1-8182-4463-8c60-e222cadd6313.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
                  alt="left image"
                  className="w-100 rounded-3"
                />
              </div>
              <div className="mt-3 ms-3">
                <p className="fw-bold ">We've got you covered</p>
                <p className="mt-2" style={{ fontSize: "14px", fontWeight: "400", color: "rgb(70, 71, 74)" }}>Learn how to cover your purchases.</p>
                <button className={`btn btn-light  border border-1 mt-3 border-black rounded-5 ${style.button}`}>
                  Go to your account
                </button>
              </div>
            </div>

          </div>

          <div className="col-md-6  " style={{ cursor: "pointer" }}>
            <div className="pb-4 rounded-4 border border-1" style={{ boxShadow: "0px 3px 4px 1px rgb(0,0,0,.3)" }}>
              <div>
                <img
                  src="https://i5.walmartimages.com/dfw/4ff9c6c9-1414/k2-_59c32b70-4e3d-46e8-bb27-b9b8462cb07f.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
                  alt="left image"
                  className="w-100 rounded-3"
                />
              </div>
              <div className="mt-3 ms-3">
                <p className="fw-bold ">We've got you covered</p>
                <p className="mt-2" style={{ fontSize: "14px", fontWeight: "400", color: "rgb(70, 71, 74)" }}>Learn how to cover your purchases.</p>
                <button className={`btn btn-light  border border-1 mt-3 border-black rounded-5 ${style.button}`}>
                  File claim
                </button>
              </div>
            </div>

          </div>


        </div>
      </section>

      <div className='text-end mt-5'>
        <p style={{ fontSize: "12px" }}>*See Terms & Conditions for details and limitations.</p>
      </div>

      <div className='text-center mt-5 w-50 m-auto'>
        <h4>Terms & conditions</h4>
        <p className='  m-auto'>
          View
          <a href="#">Terms & conditions</a>
          for complete coverage details. Limitations and exclusions apply.
          Term begins on the date of purchase but does not replace the
          manufacturer's coverage.
        </p>
      </div>

      <section className='mt-5'>
        <h4 className='text-center'>What do Walmart Protection Plans cover?</h4>

        <div className='row mt-5 '>
          <div className="col-md-6  " >
            <div className=" bg-body-secondary rounded-4 border border-1 pb-5" style={{ boxShadow: "0px 3px 4px 1px rgb(0,0,0,.3)" }}>
              <div className='w-75 m-auto'>
                <div className='text-center mt-3'>
                  <h4>Standard Plans</h4>
                  <p>Available for most products like TVs, home appliances, lawn & garden, power tools & more</p>
                </div>

                <div className='text-center'>
                  <img
                    src="https://www.squaretrade.com/img/walmart/walmart-iframe/Standard%20Plan%20Items_RGB.png"
                    alt="left image"
                    className="w-75 rounded-3"
                  />
                </div>
                <hr />
                <div className="mt-3 ms-3">
                  <p className="fw-bold " style={{ fontSize: "20px" }}>What does my Standard Plan cover?</p>
                  <p className="mt-2 text-body-secondary" style={{ fontSize: "18px" }}>
                    <i class="fa fa-check text-primary me-1" style={{ fontSize: "24px" }} aria-hidden="true"></i>
                    Mechanical & electrical failures
                  </p>
                  <p className="mt-2 text-body-secondary" style={{ fontSize: "18px" }}>
                    <i class="fa fa-check text-primary me-1" style={{ fontSize: "24px" }} aria-hidden="true"></i>
                    Power surges or power supply failure
                  </p>
                  <p className="mt-2 text-body-secondary" style={{ fontSize: "18px" }}>
                    <i class="fa fa-check text-primary me-1" style={{ fontSize: "24px" }} aria-hidden="true"></i>
                    Breakdowns during normal use
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="col-md-6  " >
            <div className=" bg-body-secondary rounded-4 border border-1 pb-5" style={{ boxShadow: "0px 3px 4px 1px rgb(0,0,0,.3)" }}>
              <div className='w-75 m-auto'>
                <div className='text-center mt-3'>
                  <h4>Standard Plans</h4>
                  <p>Available for most products like TVs, home appliances, lawn & garden, power tools & more</p>
                </div>

                <div className='text-center '>
                  <img
                    src="https://www.squaretrade.com/img/walmart/walmart-iframe/Accident%20Plan%20Items_RGB.png"
                    alt="left image"
                    className="w-75 rounded-3"
                  />
                </div>
                <hr className='mt-5' />
                <div className="mt-3 ms-3 ">
                  <p className="fw-bold " style={{ fontSize: "20px" }}>What does my Standard Plan cover?</p>
                  <p className="mt-2 text-body-secondary" style={{ fontSize: "18px" }}>
                    <i class="fa fa-check text-primary me-1" style={{ fontSize: "24px" }} aria-hidden="true"></i>
                    Mechanical & electrical failures
                  </p>
                  <p className="mt-2 text-body-secondary" style={{ fontSize: "18px" }}>
                    <i class="fa fa-check text-primary me-1" style={{ fontSize: "24px" }} aria-hidden="true"></i>
                    Power surges or power supply failure
                  </p>
                  <p className="mt-2 text-body-secondary" style={{ fontSize: "18px" }}>
                    <i class="fa fa-check text-primary me-1" style={{ fontSize: "24px" }} aria-hidden="true"></i>
                    Breakdowns during normal use
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>


      <section className='mt-5'>


        <div className='slider'>
          <span className='row'>

            <Slider {...settings} className='col-md-12  '>
              <div className='me-2  ' >
                <div className=' w-75 m-auto d-flex justify-content-center align-content-center p-4  rounded-3 bg-body-secondary' style={{ height: "135px", boxShadow: "0px 3px 4px 1px rgb(0,0,0,.3)" }}>
                  <img style={{ objectFit: 'cover' }} src={"https://www.squaretrade.com/img/walmart/walmart-iframe/tvs.png"}
                    alt="image slider" className='img-fluid m-auto  ' />
                </div>
                <p className='text-center text-body-secondary mt-1'>TVs</p>
              </div>

              <div className='me-2' >
                <div className='w-75 m-auto d-flex justify-content-center align-content-center  p-4  rounded-3 bg-body-secondary' style={{ height: "135px", boxShadow: "0px 3px 4px 1px rgb(0,0,0,.3)" }}>
                  <img style={{ objectFit: 'cover' }} src={"https://www.squaretrade.com/img/walmart/walmart-iframe/laptops.png"}
                    alt="image slider" className='img-fluid m-auto ' />
                </div>
                <p className='text-center text-body-secondary mt-1'>Laptops</p>
              </div>

              <div className='me-2' >
                <div className=' w-75 m-auto  p-4 d-flex justify-content-center align-content-center rounded-3 bg-body-secondary ' style={{ height: "135px", boxShadow: "0px 3px 4px 1px rgb(0,0,0,.3)" }}>
                  <img style={{ objectFit: 'cover' }} src={"https://www.squaretrade.com/img/walmart/walmart-iframe/phones.png"}
                    alt="image slider" className='img-fluid m-auto' />
                </div>
                <p className='text-center text-body-secondary mt-1'>Mobile phones</p>
              </div>

              <div className='me-2'>
                <div className=' w-75 m-auto d-flex justify-content-center align-content-center  p-4  rounded-3 bg-body-secondary' style={{ height: "135px", boxShadow: "0px 3px 4px 1px rgb(0,0,0,.3)" }}>
                  <img style={{ objectFit: 'cover' }} src={"https://www.squaretrade.com/img/walmart/walmart-iframe/tablets.png"}
                    alt="image slider" className='img-fluid m-auto ' />
                </div>
                <p className='text-center text-body-secondary mt-1'>Tablets</p>
              </div>

              <div className='me-2'>
                <div className='w-75 m-auto  p-4 d-flex justify-content-center align-content-center  rounded-3 bg-body-secondary' style={{ height: "135px", boxShadow: "0px 3px 4px 1px rgb(0,0,0,.3)" }}>
                  <img style={{ objectFit: 'cover' }} src={"https://www.squaretrade.com/img/walmart/walmart-iframe/outdoor.png"}
                    alt="image slider" className='img-fluid m-auto ' />
                </div>
                <p className='text-center text-body-secondary mt-1'>Ouotdoor power equipment & patio</p>
              </div>

              <div className='me-2'>
                <div className=' w-75 m-auto  p-4 d-flex justify-content-center align-content-center rounded-3 bg-body-secondary' style={{ height: "135px", boxShadow: "0px 3px 4px 1px rgb(0,0,0,.3)" }}>
                  <img style={{ objectFit: 'cover' }} src={"https://www.squaretrade.com/img/walmart/walmart-iframe/general-merch.png"}
                    alt="image slider" className='img-fluid m-auto  ' />
                </div>
                <p className='text-center text-body-secondary mt-1'>General merchandise</p>
              </div>

              <div className='me-2'>
                <div className=' w-75 m-auto  p-4 d-flex justify-content-center align-content-center  rounded-3 bg-body-secondary' style={{ height: "135px", boxShadow: "0px 3px 4px 1px rgb(0,0,0,.3)" }}>
                  <img style={{ objectFit: 'cover' }} src={"https://www.squaretrade.com/img/walmart/walmart-iframe/jewelry.png"}
                    alt="image slider" className='img-fluid m-auto  ' />
                </div>
                <p className='text-center text-body-secondary mt-1'>Jewelry & watches</p>
              </div>

            </Slider>
          </span>

        </div>

        <div className='m-auto mt-5 w-75'>
          <p className=' ' style={{ fontSize: "17px", color: "rgb(68, 68, 100)", fontWeight: "500" }}>
            Standard Plan: Your television is covered for mechanical & electrical failures from normal use.
            Television plans also include premium tech support at no extra cost. Accidental damage, intentional damage,
            loss & theft are not covered.
          </p>

          <div className="row w-50 m-auto ">

            <div className=' col-sm-6  d-flex mt-5' >
              <div className=' d-flex ' style={{ width: 30 }}>
                <img src="https://www.squaretrade.com/img/walmart/walmart-iframe/Screen_Failure_Icon.svg"
                  className='w-75'
                  alt="icon" />
              </div>
              <p className='ms-3 fs-5' style={{ color: "rgb(68, 68, 100)" }}>Screen failure</p>

            </div>

            <div className='w-50 m-auto d-flex mt-5' >
              <div className=' d-flex' style={{ width: 30 }}>
                <img src="https://www.squaretrade.com/img/walmart/walmart-iframe/Remote_Failure_Icon.svg"
                  className='w-75'
                  alt="icon" />
              </div>
              <p className='ms-3 fs-5' style={{ color: "rgb(68, 68, 100)" }}>Remote failure</p>
            </div>

            <div className='w-50 m-auto d-flex mt-5' >
              <div className=' d-flex' style={{ width: 30 }}>
                <img src="https://www.squaretrade.com/img/walmart/walmart-iframe/Wont_Power_On_Icon.svg"
                  className='w-75'
                  alt="icon" />
              </div>
              <p className='ms-3 fs-5' style={{ color: "rgb(68, 68, 100)" }}>Won't power on</p>
            </div>

            <div className='w-50 m-auto d-flex mt-5' >
              <div className=' d-flex' style={{ width: 30 }}>
                <img src="https://www.squaretrade.com/img/walmart/walmart-iframe/Speaker_Failure_Icon.svg"
                  className='w-75'
                  alt="icon" />
              </div>
              <p className='ms-3 fs-5' style={{ color: "rgb(68, 68, 100)" }}>Speaker failure</p>
            </div>

          </div>
        </div>

        <div className='mt-5 row gx-0'>
          <div className="col-md-6 rounded-2">
            <img src="https://www.squaretrade.com/img/walmart/walmart-iframe/Object@2x.svg"
              className=' img-fluid'
              alt="Uniceif" />
          </div>
          <div className="col-md-6 rounded-2 bg-body-secondary d-flex justify-content-center align-items-center">
            <div className='text-center w-75 m-auto'>
              <h4 className='d-d-inline-block'>About Allstate</h4>
              <p className='' style={{ color: "rgb(68, 68, 100)", fontSize: "16px" }}>Allstate has been protecting people and the things most important to them for more than 90 years.
                So you know they’ll be there when you need them most.</p>
            </div>


          </div>
        </div>
      </section>

      <section className='mt-5'>
        <h4 className='text-center fw-bold ' style={{ color: "rgb(0, 0, 0,0.9)" }}>Frequently Asked Questions</h4>


        <div className='mt-4'>
          <div>
            <span style={{ fontSize: "22px" }} className='d-flex justify-content-between'>
              <p className='mt-2'>Where can I manage my Walmart Protection Plans?</p>
              <i className={`fas fa-chevron-${changeIcon} mt-3  text-end`}
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}></i>
            </span>

            <ul className={` ${style.c} border border-white`} style={{ display: `${isDropdownOpen}` }}>
              <li className=''>
                <div className="">
                  <p className='d-flex w-100 ' style={{ color: "rgb(68, 68, 100)", fontSize: "20px" }}>You can manage your plans anytime,anywhere online
                    <span className="text-decoration-underline ms-1 " href="#">
                      here
                    </span>
                  </p>
                </div>
              </li>

            </ul>
          </div>


        </div>
        <hr />
        <div className='mt-4'>
          <div>
            <span style={{ fontSize: "22px" }} className='d-flex justify-content-between'>
              <p className='mt-2'>Where can I manage my Walmart Protection Plans?</p>
              <i className={`fas fa-chevron-${changeIcon1} mt-3  text-end`}
                onClick={toggleDropdown1}
                aria-expanded={isDropdownOpen1}></i>
            </span>

            <ul className={` ${style.c} border border-white`} style={{ display: `${isDropdownOpen1}` }}>
              <li className=''>
                <div className="">
                  <p className='d-flex w-100 ' style={{ color: "rgb(68, 68, 100)", fontSize: "20px" }}>You can manage your plans anytime,anywhere online
                    <span className="text-decoration-underline ms-1 " href="#">
                      here
                    </span>
                  </p>
                </div>
              </li>

            </ul>
          </div>


        </div>
        <hr />
        <div className='mt-4'>
          <div>
            <span style={{ fontSize: "22px" }} className='d-flex justify-content-between'>
              <p className='mt-2'>Where can I manage my Walmart Protection Plans?</p>
              <i className={`fas fa-chevron-${changeIcon2} mt-3  text-end`}
                onClick={toggleDropdown2}
                aria-expanded={isDropdownOpen2}></i>
            </span>

            <ul className={` ${style.c} border border-white`} style={{ display: `${isDropdownOpen2}` }}>
              <li className=''>
                <div className="">
                  <p className='d-flex w-100 ' style={{ color: "rgb(68, 68, 100)", fontSize: "20px" }}>You can manage your plans anytime,anywhere online
                    <span className="text-decoration-underline ms-1 " href="#">
                      here
                    </span>
                  </p>
                </div>
              </li>

            </ul>
          </div>


        </div>

      </section>
      <p className='text-center text-body-secondary mt-5' style={{ fontSize: "16px" }}>Program administered and serviced by SquareTrade, an Allstate company.</p>

    </div>
  </>
}
