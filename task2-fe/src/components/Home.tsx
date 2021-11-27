import axios from "axios";
import { useEffect, useState } from "react";
import ListUser from "./ListUser";

const Home = () => {
    const [enteredName, setEnteredName] = useState("");
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/user`).then((result) => {
            setListUser(result.data.data);
        });
    }, []);

    const nameChangeHandler = (event: any) => {
        setEnteredName(event.target.value);
    };

    const submitHandler = async (event: any) => {
        event.preventDefault();
        console.log(process.env.REACT_APP_SERVER_URL);
        const result = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/user?name=${enteredName}`
        );
        if (result.data) {
            setListUser(result.data.data);
        }
        setEnteredName("");
    };

    return (
        <>
            <div className="flex justify-center flex-col items-center bg-biloba-flower-500 rounded-md pt-5 pb-5">
                <form onSubmit={submitHandler}>
                    <div>
                        <label className="block">Name</label>
                        <input
                            onChange={nameChangeHandler}
                            value={enteredName}
                            type="text"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-ripe-plum-500 text-white pt-2 pb-2 pl-4 pr-4 rounded-xl mt-4 font-bold"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex justify-center flex-col items-center bg-black mt-8 rounded-md">
                <ListUser listUser={listUser} />
            </div>
        </>
    );
};

export default Home;
