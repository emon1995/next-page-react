import { useState } from "react";
// import "./App.css";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const navigation = useNavigation();

  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  ">
      <Header />
      <div className="min-h-[calc(100vh-152px)]">
        {navigation.state === "loading" ? <LoadingSpinner /> : <Outlet />}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
