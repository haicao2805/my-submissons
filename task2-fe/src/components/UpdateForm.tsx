import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

const UpdateForm = () => {
    const navigate = useNavigate();
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredBirthday, setEnteredBirthday] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const { id } = useParams();

    const [defaultData, setDefaultData] = useState({
        _id: id || "",
        username: "",
        email: "",
        birthday: new Date(Date.now()),
    });

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_SERVER_URL}/user/${id}`)
            .then((result) => {
                setDefaultData({
                    _id: id || "",
                    username: result.data.data.username,
                    email: result.data.data.email,
                    birthday: result.data.data.birthday,
                });
                setEnteredUsername(result.data.data.username);
                setEnteredEmail(result.data.data.email);
                setEnteredBirthday(result.data.data.birthday);
            })
            .catch(() => {
                navigate("/");
            });
    }, []);

    const usernameChangeHandler = (event: any) => {
        setEnteredUsername(event.target.value);
    };
    const emailChangeHandler = (event: any) => {
        setEnteredEmail(event.target.value);
    };
    const birthdayChangeHandler = (event: any) => {
        setEnteredBirthday(event.target.value);
    };

    const submitHandler = (event: any) => {
        event.preventDefault();
        setErrorMessage("");
        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/user`, {
                _id: id,
                username: enteredUsername,
                email: enteredEmail,
                birthday: enteredBirthday,
            })
            .then(() => {
                navigate("/");
            })
            .catch(({ response }) => {
                setErrorMessage(response.data.errorMessage);
                setEnteredUsername(defaultData.username);
                setEnteredEmail(defaultData.email);
                setEnteredBirthday(defaultData.birthday.toString());
            });
    };

    return (
        <>
            <p className="text-center text-4xl mb-4 font-bold">
                Update user information
            </p>
            <div className="flex justify-center flex-col items-center bg-biloba-flower-500 rounded-md pt-5 pb-5">
                <p className="text-red-500">{errorMessage}</p>
                <form onSubmit={submitHandler}>
                    <div>
                        <label className="block font-medium">Username</label>
                        <input
                            onChange={usernameChangeHandler}
                            value={enteredUsername}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Email</label>
                        <input
                            onChange={emailChangeHandler}
                            value={enteredEmail}
                            type="text"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Birthday</label>
                        <input
                            onChange={birthdayChangeHandler}
                            value={enteredBirthday}
                            type="date"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-ripe-plum-500 text-white pt-2 pb-2 pl-4 pr-4 rounded-xl mt-4 font-bold"
                        >
                            Update
                        </button>

                        <Link to={`/`}>
                            <button
                                type="submit"
                                className="bg-red-500 text-white pt-2 pb-2 pl-4 pr-4 rounded-xl mt-4 font-bold"
                            >
                                Back
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateForm;
