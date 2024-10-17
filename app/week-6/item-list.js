import item from "./item.json";
import { useState } from "react";
export default function ItemList() {

  const [sortby, setSortBy] = useState("name");

  const byname = () => {
    if (sortby === "name") {
      item.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      item.sort((a, b) => b.name.localeCompare(a.name));
    }
  };

  const bycategory = () => {
    if (sortby === "category") {
      item.sort((a, b) => a.category.localeCompare(b.category));
    } else {
      item.sort((a, b) => b.category.localeCompare(a.category));
    }
  }; 
  


  
 
