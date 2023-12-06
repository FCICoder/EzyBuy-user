import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Container from "../UI/container/Container";
import "./Layout.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/slices/cartSlice";
import { Online , Offline } from 'react-detect-offline'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartAction());
  }, []);
  return (
    <>
      <Navbar />
      <div className="content">
        <Container>
          <Outlet />
        </Container>
        <div>
          <Offline>
            <div className='network bg-light p-3 fs-5 '>
            <i class="fas fa-wifi text-danger me-1"></i> You are Offline
            </div>
          </Offline>
        </div>
        <Footer />
      </div>
    </>
  );
}
