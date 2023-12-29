import React from "react";
import Banner from "@/components/Blog/Banner";
import { Div } from "@/styles/Common";
import Cards from "@/components/Blog/Cards";

const Blog = ({ isMobile, isTablet }) => {
  return (
    <Div direction="column">
      <Banner isMobile={isMobile} />
      <Cards isMobile={isMobile} isTablet={isTablet} />
    </Div>
  );
};

export default Blog;
