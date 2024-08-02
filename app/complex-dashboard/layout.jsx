import React from "react";

export default function LayoutPage({ children, statistics, products, users }) {
  return (
    <div className="flex p-4 gap-6 min-h-screen cont">
      {children}
      <div className="flex flex-col flex-1 gap-6 cont">
        {users}
        {statistics}
      </div>
      {products}
    </div>
  );
}
