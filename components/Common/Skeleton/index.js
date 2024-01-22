import React from "react";
import { Skeleton as AntSkeleton } from "antd";

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
    <AntSkeleton
      loading={loading}
      active={active}
      round={round}
      title={title}
      paragraph={paragraph}
      {...rest}
    >
      {children}
    </AntSkeleton>
  );
};

Skeleton.defaultProps = {
  loading: false,
  active: true,
  round: false,
  title: true,
};

Skeleton.Table = SkeletonTable;
