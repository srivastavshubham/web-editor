import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "../App.css";
import HTML from '../assets/html.png'

import { useState } from "react";


const headStyle = {
	background: '#1d1e22',
	padding: '9px 12px',
	display: 'flex',
  };

const headerStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	background: '#060606',
	color: '#aaaebc',
	fontWeight: 700,
  };

const containerStyle = {
	flexGrow: 1,
	flexBasis: 0,
	display: 'flex',
	flexDirection: 'column',
	padding: '0 8px 8px',
  };

function Editor({ heading, language, value, onChange, icon, color }) {

	const handleChange = (editor, data, value) => {
		onChange(value);
	};
	return (
		<div style={containerStyle}>
			<div style={headerStyle}>
				<div style={headStyle}>
					<img src={icon} style={{
							marginRight: 5,
							height: 20,
							width: 20,
							display: "flex",
							placeContent: "center",
							paddingBottom: 2,
						}}/>
					{heading}
				</div>
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
