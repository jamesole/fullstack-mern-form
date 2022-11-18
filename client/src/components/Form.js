import React, {useState} from "react";
import axios from 'axios';

export default function Form(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function submit(e) {
        const user = {name:name, email:email}
        axios.post('http://localhost:8000/form', user)
        .then(res => console.log(res))
        setName('');
        setEmail('');
    }

    function nameChange(e) {
        setName(e.target.value);
    }
    function emailChange(e) {
        setEmail(e.target.value);
    }

    return(
        <form onSubmit={submit}>
            <label>Name</label>
            <input type={"text"} required onChange={nameChange} value={name}/><br></br>
            <label>Email</label>
            <input type={"email"} required onChange={emailChange} value={email}/><br></br><br></br>
            <button type="submit">Submit</button>
        </form>
    );
}
