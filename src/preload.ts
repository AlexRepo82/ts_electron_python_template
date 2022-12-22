// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { PythonShell } from "python-shell";
import * as path from "path";

window.addEventListener("DOMContentLoaded", 
  function(){
    const replaceText = function (selector: string, text: string){
      const element = document.getElementById(selector);
      if (element) {
        element.innerText = text;
      }
    };

    replaceText("welcome", "Hello, World!");
  }
);