import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className="main pt-20 lg:pt-40">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default SharedLayout;
