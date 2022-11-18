import axios from "axios";
import React, {useState} from 'react'

export default function GetData(props) {

    const[data, setData] = useState([]);


    function clicked(e) {
        e.preventDefault();

        axios.get('http://localhost:8000/form')
        .then((res) => setData(res.data));
    }

    function remove(e) {
        console.log(e.target.value);
        axios.delete(`http://localhost:8000/form/${e.target.value}`)
        window.location.reload();
    }


    return(
        <div>
        <form onSubmit={clicked}>
            <button type="submit" name="getData" value={'get'}>Get Data</button>
        </form>
        <ul>
        {data.map(dat => {
            return (
                <li key={dat._id}>
                    {dat.name}, email: {dat.email}
                    <button value={dat._id} onClick={remove}>Complete</button>
                </li>
            )
        })}
        </ul>
        </div>
    );
}
