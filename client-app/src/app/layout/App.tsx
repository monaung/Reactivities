import './styles.css'
import 'semantic-ui-css/semantic.min.css'
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/index.tsx';
import NavBar from './NavBar.tsx';
import { Container } from 'semantic-ui-react';

function App() {

  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <NavBar />
          <Container style={{ marginTop: '7em' }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  )
}

export default observer(App);
