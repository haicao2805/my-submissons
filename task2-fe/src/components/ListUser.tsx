import { Link } from "react-router-dom";

export class User {
    _id: string;
    username: string;
    email: string;
    birthday: Date;
}

type Input = {
    listUser: User[];
};

const ListUser = (props: Input) => {
    if (props.listUser.length === 0) {
        return (
            <h1 className="bg-black text-white pt-8 pb-8 text-3xl">No data</h1>
        );
    } else
        return (
            <table className="text-white table-auto border-2 border-black rounded-md">
                <thead>
                    <tr>
                        <th className="w-1/2 ...">Username</th>
                        <th className="w-1/2 ...">Email</th>
                        <th className="w-1/2 ...">Birthday</th>
                        <th className="w-1/2 ..."></th>
                    </tr>
                </thead>

                <tbody>
                    {props.listUser.map((item) => (
                        <tr key={item._id} className="bg-mine-shaft-500 mb-3">
                            <td className="border-2 border-black">
                                {item.username}
                            </td>
                            <td className="border-2 border-black">
                                {item.email}
                            </td>
                            <td className="border-2 border-black">
                                {item.birthday}
                            </td>
                            <td className="border-2 border-black">
                                <Link to={`/user/${item._id}`}>
                                    <button
                                        type="submit"
                                        className="bg-green-500 p-2 m-2"
                                    >
                                        Update
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
};

export default ListUser;
