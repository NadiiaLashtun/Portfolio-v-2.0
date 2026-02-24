import { Outlet } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
