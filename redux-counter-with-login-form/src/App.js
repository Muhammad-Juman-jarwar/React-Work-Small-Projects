import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import LoginForm from './components/LoginForm';
import LogInOut from './components/LogInOut';
import UserProfile from './components/UserProfile';

function App(info) {
  const isAuth = useSelector((state) => state.auth.isAuthenticated)
  return (
    <Fragment>
      <LogInOut />
      {!isAuth && <LoginForm />}
      {isAuth && <UserProfile />}
      {isAuth && <Counter />}
    </Fragment>
  );
}

export default App;