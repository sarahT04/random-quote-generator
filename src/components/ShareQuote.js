import React from 'react'
import { useScreenshot, createFileName } from "use-react-screenshot";


function ShareQuote({ getQuote, innerRef, onCreateNewQuoteClick }) {

    const [, takeScreenShot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
    });

    const download = (image, { name = "Quote by " + getQuote.split('-')[1].trim(), extension = "jpg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
    };

    const downloadScreenshot = () => takeScreenShot(innerRef.current).then(download);
    // const createNew = () => ();

    return (
        <div id="share-quote">
            <button title="Save this quote!" onClick={downloadScreenshot}><i className="fa fa-download" aria-hidden="true"></i></button>
            <button title="Create new quote!" onClick={onCreateNewQuoteClick}>Create</button>
            <a href={"https://twitter.com/intent/tweet?hashtags=quote&text=" + getQuote} className='button' id="tweet-quote" target="_top" title="Tweet this quote!"><i className="fa fa-twitter" aria-hidden="true"></i> </a>
        </div>
    )
}

export default ShareQuote