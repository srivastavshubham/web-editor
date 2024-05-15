import { useState, useEffect, useContext } from 'react';
import { DataConst} from '../context/DataProvide';

const Result = () => {

    const [src, setSrc] = useState('');
    const { html, css, js } = useContext(DataConst);

    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js, srcCode])

    return (
        <div style={html || css || js ? {height:'1000px'} :null}>
            <label style={{fontWeight:'bolder',fontSize:'30px',color:'#1d1e22'}}>Output </label>
            <iframe 
                srcDoc={src}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
            />    
        </div>
    )
}

export default Result;