import React, { Fragment, useLayoutEffect, useEffect, useEffectState, useState } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

export const Previewhtml = () => {
  let htmlElements;
  const [htmlElt, setHtmlElt] = useState('');
  const [checkLoop, setCheckLoop] = useState(true);

  useLayoutEffect(() => {
    const myIframe = document.querySelector('#storybook-preview-iframe').contentWindow.document.body;
    htmlElements = myIframe.querySelector('#root');

    if(htmlElements) {
      console.log('After : ', htmlElements.outerHTML)
      setHtmlElt(htmlElements.outerHTML)
    }
  })

  return <div>
    <Editor
     height="90vh"
     defaultLanguage="html"
     defaultValue={htmlElt}
     theme="vs-dark"
     options={{
      "autoIndent": true,
      "formatOnPaste": true,
      "formatOnType": true
     }}
   />
   </div>
}
