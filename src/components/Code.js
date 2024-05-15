import React, { useContext } from 'react';
import Editor from './Editor';
import { DataConst } from '../context/DataProvide';
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/js.png'



const containerStyle = {
  backgroundColor: '#060606',
  height: '55vh',
  display: 'flex',
};


export default function Code() {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataConst);

  return (
    <div style={containerStyle}>
      <Editor
        language="xml"
        heading="HTML"
        value={html}
        onChange={setHtml}
        icon={HTML}
        color="#FF3C41"
      />
      <Editor
        language="css"
        heading="CSS"
        value={css}
        onChange={setCss}
        icon={CSS}
        color="#0EBEFF"
      />
      <Editor
        language="javascript"
        heading="JS"
        value={js}
        onChange={setJs}
        icon={JS}
        color="#FCD000"
      />
    </div>
  );
}

