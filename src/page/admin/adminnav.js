import { Link } from "react-router-dom";;

const Adminnav = () => {
    return ( 
        <nav className="h-20 flex justify-center gap-8">
            <Link to="/admin">Home</Link>
            <Link to="/startup-data">Startup</Link>
            <Link to="/workshop-data">Workshop</Link>
            <Link to="/pkl-data">PKL</Link>
            <Link to="/training-data">Training</Link>
            <Link to="/kontak-data">Kontak</Link>
        </nav>
     );
}
 
export default Adminnav;