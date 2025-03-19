import React from 'react';

export default function LayoutGlobal({ children, style }) {
  return (
    <div style={{ ...style }}>
      {children}
    </div>
  );
}