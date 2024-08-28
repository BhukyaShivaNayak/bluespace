
import "./index.css"

import { useEffect, useState } from "react";

import UserData from "../UserData";
const API = "http://localhost:6005/api/jobs"

const Table1 = () => {

    const [users, setUser] = useState([]);

    const fetchUser = async (url) => {
        try {

            const res = await fetch(url);
            const data = await res.json();

            if (data.length > 0) {
                setUser(data);

            }
        }

        catch (e) {
            console.error(e)

        }
    }

    useEffect(
        () => {
            fetchUser(API);
        }, []

    )
    return <>
        <table className="table-data">
            <thead>
                <tr>
                    <th>Job Title</th>
                    <th>Location</th>
                    <th>Compensation</th>
                    <th>Resume in Progress</th>
                    <th>Hiers Required</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <UserData users={users} />

            </tbody>

        </table></>
}

export default Table1
