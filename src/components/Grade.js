import React, {useState} from "react";
import { memberGrade } from "../api";
import Layout from "../containers/Layout";
export default function Grade(){

    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {name, kor, eng, math} = inputs; 

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({ ...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        memberGrade({name, kor, eng, math})
        .then(res => setResult(res.data))
        .catch( err => console.log(`에러발생 : ${err}`)) 
    }

    return <Layout><h1>성적표</h1>
    <form>
        <div>
            <label><b>Username</b></label>
            <input type="text" name="name" onChange={handleChange} /><br />

            <label htmlFor=""><b>kor score</b></label>
            <input type="text" name="kor" onChange={handleChange} /><br />

            <label htmlFor=""><b>eng score</b></label>
            <input type="text" name="eng" onChange={handleChange} /><br />

            <label htmlFor=""><b>math score</b></label>
            <input type="text" name="math" onChange={handleChange} /><br />

            <button onClick={handleClick}>성적계산</button>
            <div>성적표 : {result}</div>
        </div>
    </form>
    </Layout>
}
