import React, { useState, useContext } from 'react';
import { DataConst } from '../context/DataProvide';
import { Controlled as ControlledEditor } from "react-codemirror2";
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JS from '../assets/js.png';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

function Editor({ heading, language, value, onChange, icon, expanded, onClick, expandedText }) {
  const style = expanded ? { flex: '1 1 100%' } : {};

  const handleChange = (editor, data, value) => {
    onChange(value);
  }
  
  return (
    <div className="editor_column" style={style}>
      <div className='code_head'>
        <img src={icon} style={{height: 30, width: 30}} alt={heading} />
        <span className='code_heading_text'>{heading}</span>
        <span className='expand_text' onClick={onClick}>{expandedText}</span>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="controlled-editor"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
}

function Test() {
  const [expandedColumns, setExpandedColumns] = useState([false, false, false]);
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataConst);

  const toggleExpand = (index) => {
    const newExpandedColumns = [...expandedColumns];
    newExpandedColumns[index] = !newExpandedColumns[index];
    setExpandedColumns(newExpandedColumns);
  };

  const getButtonText = (index) => {
    return expandedColumns[index] ? 'Minimize' : 'Maximize';
  };

  return (
    <div className="editor_container">
      <Editor
        language="xml"
        heading="HTML"
        value={html}
        onChange={setHtml}
        icon={HTML}
        expanded={expandedColumns[0]}
        onClick={() => toggleExpand(0)}
        expandedText={getButtonText(0)}
      />
      <Editor
        language="css"
        heading="CSS"
        value={css}
        onChange={setCss}
        icon={CSS}
        expanded={expandedColumns[1]}
        onClick={() => toggleExpand(1)}
        expandedText={getButtonText(1)}
      />
      <Editor
        language="javascript"
        heading="JS"
        value={js}
        onChange={setJs}
        icon={JS}
        expanded={expandedColumns[2]}
        onClick={() => toggleExpand(2)}
        expandedText={getButtonText(2)}
      />
    </div>
  );
}

export default Test;
