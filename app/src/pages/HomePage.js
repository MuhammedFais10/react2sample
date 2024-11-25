import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Cards from "../Components/Cards/Cards";

import CarouselPage from "../Components/Carousal/Carousal";
import Posts from "../Components/DataPage/DataPage";
import Name from "../Components/Name/name";

export default function HomePage({ data }) {
  return (
    <div>
      <>
        <Navbar />
        <CarouselPage />
        <Cards data={data} />
        <Name name="kjsvk" />
        <Name name="hari" />
        <Name name="almal" />
        <Name name="jas" />
        <Posts />
      </>
    </div>
  );
}
