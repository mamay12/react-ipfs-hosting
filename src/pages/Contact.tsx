import {Link} from "react-router";

function Contact(){
    return (
        <div>
            <p>This is Contact page</p>
            <Link to='/'>Go to Main page</Link>
            <br/>
            <Link to='/about'>Go to About page</Link>
        </div>
    )
}

export default Contact
