import React from "react";

import { Div } from "@/styles/Common";
import { MUISkeleton } from "../../Skeleton";

export const TableSkeleton = ({ columns }) => {
  const numberOfColumns = columns || 8;

  return (
    <Div gap={16}>
      {[...Array(numberOfColumns)].map((v, idx) => (
        <MUISkeleton
          key={idx}
          title={false}
          loading
          paragraph={{
            rows: 10,
            width: "100%",
          }}
        />
      ))}
    </Div>
  );
};
