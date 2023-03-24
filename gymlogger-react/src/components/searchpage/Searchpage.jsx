import { useEffect } from "react";
import './searchpage.css';
import { COLORS } from "../../values/colors";

export default function SearchPage() {

    useEffect(() => {
        console.log("Search page gerendered!");
    });

    return (
    <div className="searchpage">
        <h1>Search page!</h1>
    </div>
    );
}