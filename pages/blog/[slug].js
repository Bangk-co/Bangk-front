import React from "react";
import BlogDetailDesktop from "@/components/Blog/BlogDetail";
import BlogDetailMobile from "@/components/Blog/BlogDetailMobile";

const BlogDetail = ({ isMobile }) => {
  return isMobile ? <BlogDetailMobile /> : <BlogDetailDesktop />;
};

export default BlogDetail;
