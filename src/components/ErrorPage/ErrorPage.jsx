import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center pt-52">
            <div>
            <img src="https://i.ibb.co/rGZ3VWw/20230927082857-fpdl-in-404-page-found-concept-with-people-scene-flat-cartoon-design-office-worker-is.jpg" alt="" />
            <Link className="flex justify-center pt-10" to='/'><button className="btn btn-secondary">Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;