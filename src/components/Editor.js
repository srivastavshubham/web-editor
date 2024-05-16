import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "../App.css";
import HTML from '../assets/html.png'

import { useState } from "react";


const containerStyle = {
	flexGrow: 1,
	flexBasis: 0,
	display: 'flex',
	flexDirection: 'column',
	padding: '0 8px 8px',
};

function Editor({ heading, language, value, onChange, icon, color }) {
	const [open, setOpen] = useState(true);

	const handleChange = (editor, data, value) => {
		onChange(value);
	};
	return (
		<div style={{
			flexGrow: open ? 1: 0,
			flexBasis: 0,
			display: 'flex',
			flexDirection: 'column',
			padding: '0 8px 8px'}}>
			<div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:'5px',background:'#1d1e22',borderBottom:'1px solid black'}}>
				<img src={icon} style={{height: 30,width: 30}}/>
				<span style={{fontSize:'20px',paddingLeft:'5px', color:"white"}}>{heading}</span>
				<span style={{fontSize:'20px',paddingLeft:'5px', color:"white"}} onClick={() => setOpen((prevState) => !prevState)}>dd</span>
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

export default Editor;
