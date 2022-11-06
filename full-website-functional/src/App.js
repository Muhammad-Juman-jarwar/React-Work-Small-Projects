import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Auth from './components/OtherFiles/Auth';
import Header from './components/OtherFiles/Header';
import Counter from './components/OtherFiles/Counter';
import UserProfile from './components/OtherFiles/UserProfile';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import SignUp from './components/Buttons/Sign-Up';
import Overlay from './components/StartMenu/Overlay';


function App() {

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const showCart = useSelector((state) => state.ui.cartIsVisible);

  const signUpForm = useSelector((state) => state.overlay.showSignUpForm);

  return (
    <Fragment>
      {!isAuth && <Overlay />}
      {signUpForm && !isAuth && <SignUp />}
      <Header />
    <Layout>
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      {showCart && <Cart />}
      {isAuth && <Products />}
      {isAuth && <Counter />}
    </Layout>
    </Fragment>
  );
};

export default App;
