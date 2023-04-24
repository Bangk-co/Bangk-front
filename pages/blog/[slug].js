import React from "react";
import BlogDetailDesktop from "@/components/Blog/BlogDetail";
import BlogDetailMobile from "@/components/Blog/BlogDetailMobile";

const BlogDetail = ({ isMobile, isTablet }) => {
  return isMobile ? (
    <BlogDetailMobile />
  ) : (
    <BlogDetailDesktop isTablet={isTablet} />
  );
};

export default BlogDetail;
