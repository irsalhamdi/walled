import React from 'react';

export default function LayoutGlobal({ children, style }) {
  return (
    <div style={{ ...style, height: "100vh" }}>
      {children}
    </div>
  );
}