import React from "react";

type Props = {};

const Badge = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="bg-red-500 text-white px-2 py-1 text-xs rounded">
      {props.children}
    </div>
  );
};

export default Badge;
