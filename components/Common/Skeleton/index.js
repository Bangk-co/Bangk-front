import React from "react";
import { Skeleton as MUISkeleton } from "@mui/material";

import { SkeletonTable } from "./Table";

export const Skeleton = ({
  loading,
  active,
  round,
  title,
  paragraph,
  children,
  ...rest
}) => {
  return (
    <MUISkeleton
      loading={loading}
      active={active}
      round={round}
      title={title}
      paragraph={paragraph}
      {...rest}
    >
      {children}
    </MUISkeleton>
  );
};

MUISkeleton.defaultProps = {
  loading: false,
  active: true,
  round: false,
  title: true,
};

MUISkeleton.Table = SkeletonTable;
