import { Link, Outlet } from "react-router-dom";

export default function header() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> home</Link>
                    </li>
                    <li>
                        <Link to="/about"> About us</Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact us </Link>
                    </li>
                    
                </ul>
            </nav>
            <Outlet/ >
        </>
    )
}