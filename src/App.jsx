import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import PasswordPage from "./Pages/PasswordPage";
import RegisterPage from "./Pages/RegisterPage";
import GroceryPage from "./Pages/GroceryPage";
import BeautyPage from "./Pages/BeautyPage";
import KidsPage from "./Pages/KidsPage";
import FashionPage from "./Pages/FashionPage";
import ElectronicsPage from "./Pages/ElectronicsPage";
import SingleProductPage from "./Pages/SingleProductPage";
import ProductCarePlan from "./Components/ProductCarePlan/ProductCarePlan";
import HealthWellness from "./Pages/Health & Wellness";
import Cart from "./Components/Cart/Cart";
import MyItems from "./Components/MyItems/MyItems";
import Reorder from "./Components/MyItems/Reorder";
import Lists from "./Components/MyItems/Lists";
import Registers from "./Components/MyItems/Registers";
import AccountPage from "./Pages/AccountPage";
import PurchaseHistory from "./Components/Account/PurchaseHistory";
import PersonalInfo from "./Components/Account/PersonalInfo";
import Addresses from "./Components/Account/Addresses";
import LoginContextProvider from "./context/LoginContext";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store";
import Wrapper from "./Components/ScrollToTop";
import Checkout from "./Components/Checkout/Checkout";
import LangContextProvider from "./context/LangContext";
import FavPrdContextProvider from "./context/FavPrdContext";
import ListItems from "./Components/ListItems/ListItems";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import Thanks from "./Components/Thanks/Thanks";
import Offers from "./Components/MyItems/Offers";
import Paypal from "./Components/Checkout/Paypal";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "groceries", element: <GroceryPage /> },
        { path: "beauty", element: <BeautyPage /> },
        { path: "kids", element: <KidsPage /> },
        { path: "fashion", element: <FashionPage /> },
        { path: "electronics", element: <ElectronicsPage /> },
        { path: "product/:id", element: <SingleProductPage /> },
        { path: "protection", element: <ProductCarePlan /> },
        { path: "health", element: <HealthWellness /> },
        { path: "cart", element: <Cart /> },
        { path: "checkout", element: <Checkout /> },
        { path: "thanks", element: <Thanks /> },
        {
          path: "myaccount",
          element: <AccountPage />,
          // children: [
          //   { index: true, element: <PurchaseHistory /> }, //fix later
          //   { path: "mysavings", element: <MySavings /> },
          //   { path: "wallet", element: <Wallet /> },
          //   { path: "personalinfo", element: <PersonalInfo /> },
          //   { path: "addresses", element: <Addresses /> },
          //   { path: "community", element: <Community /> },
          //   { path: "giving", element: <Giving /> },
          // ],
        },
        {
          path: "myitems",
          element: <MyItems />,
          children: [
            { index: true, element: <Reorder /> }, //fix later
            {
              path: "lists", element: <ProtectedRoute><Lists /></ProtectedRoute>, children: [
                { path: "items", element: <ListItems /> },
                { path: "offers", element: <Offers /> },
              ]
            },
            { path: "registers", element: <Registers /> },
          ],
        },
      ],
    },
    { path: "login", element: <LoginPage /> },
    { path: "passwordPage", element: <PasswordPage /> },
    { path: "register", element: <RegisterPage /> },
    { path: "paypal", element: <Paypal /> },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <>
      <Provider store={store}>
        <LangContextProvider>
          <LoginContextProvider>
            <FavPrdContextProvider>
              <Elements stripe={stripePromise}>
                <Wrapper>
                  <RouterProvider router={routers}>
                    <App />
                  </RouterProvider>
                </Wrapper>
              </Elements>
            </FavPrdContextProvider>
          </LoginContextProvider>
        </LangContextProvider>
      </Provider>
    </>
  );
}

export default App;
