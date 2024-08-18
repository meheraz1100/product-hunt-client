import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="bg-[#f2f4f8] font-roboto min-h-screen">
        <div className="h-full w-full">
          <Outlet />
        </div>
      </div>
    </> 
  );
};
export default Root;
