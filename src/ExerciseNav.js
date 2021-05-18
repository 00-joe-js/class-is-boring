import { NavLink } from "react-router-dom";

const numExercises = 5;
const rangeArray = (n) => "~".repeat(n).split("");

const Nav = () => {
    return (
        <nav>
            {rangeArray(numExercises).map((_, i) => {
                const label = `0${i + 1}`;
                return <NavLink key={label} to={`/${label}`}>{label}</NavLink>
            })}
        </nav>
    );
}

export default Nav;