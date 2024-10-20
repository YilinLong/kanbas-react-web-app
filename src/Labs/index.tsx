import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import {Navigate, Route, Routes} from "react-router-dom";
import TOC from "./TOC";
import Lab3 from "./Lab3";
import KanbasNavigation from "../Kanbas/Navigation";
import BootstrapNavigation from "./Lab2/BootstrapNavigation";

export default function Labs() {
  return (
      <div>
          <h1>Labs</h1>
          <li>Name: Yilin Long</li>
          <li>Section: 02</li>
          <td valign="top">
              <BootstrapNavigation/>
          </td>
          <TOC/>
          <Routes>
              <Route path="/" element={<Navigate to="Lab1"/>}/>
              <Route path="Lab1" element={<Lab1/>}/>
              <Route path="Lab2" element={<Lab2/>}/>
              <Route path="Lab3/*" element={<Lab3 />} />
          </Routes>
      </div>
  );
}
//full name: Yilin Long
