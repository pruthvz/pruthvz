import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollTop from "./GoTop";

const Layout = ({ children }) => {
  return (
    <div>
      <ScrollTop />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
