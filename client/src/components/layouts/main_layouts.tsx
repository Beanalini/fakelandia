import Header from "../header/header";
import { Outlet } from "react-router";
import { MisdemeanoursProvider } from "../hooks/useMisdemeanoursContext";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-6" style={{ flex: "1" }}>
        <MisdemeanoursProvider>
          <Outlet />
        </MisdemeanoursProvider>
      </main>
    </>
  );
};

export default MainLayout;
