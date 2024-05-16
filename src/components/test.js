import React, { useState } from 'react';
import './styles.css';

function Column({ expanded, onClick }) {
  const style = expanded ? { flex: '1 1 100%' } : {};
  
  return (
    <div className="column" style={style}>
      <button onClick={onClick}>Expand</button>
    </div>
  );
}

function Test() {
  const [expandedColumn, setExpandedColumn] = useState(null);

  const handleExpand = (index) => {
    setExpandedColumn(index);
  };

  return (
    <div className="container">
      <Column
        expanded={expandedColumn === 0}
        onClick={() => handleExpand(0)}
      />
      <Column
        expanded={expandedColumn === 1}
        onClick={() => handleExpand(1)}
      />
      <Column
        expanded={expandedColumn === 2}
        onClick={() => handleExpand(2)}
      />
    </div>
  );
}

export default Test;
