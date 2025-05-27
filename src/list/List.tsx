import Navbar from "../components/Navbar";
import CompanyGrid from "./components/CompanyGrid";
import Footer from "../components/Footer";

function List() {
  return (
    <div>
        <Navbar active="2"/>
        <CompanyGrid />
        <Footer />
    </div>
  );
}
 
export default List;