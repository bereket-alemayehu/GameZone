import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const handleSearch = (searchText: string) => {
  console.log(searchText);
};

const Layout = () => {
  return (
    <>
      <NavBar onSearch={handleSearch} />
      <Outlet />
    </>
  );
};

export default Layout;
