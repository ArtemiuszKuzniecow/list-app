import React from "react";
import reactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { LoremIpsum, Avatar } from "react-lorem-ipsum";
import App from "./app";

const root = reactDom.createRoot(document.getElementById("root"));

root.render(<App />);
