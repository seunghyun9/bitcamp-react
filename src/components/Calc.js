import React, {useState} from "react";
import { memberCalc } from "../api/index";
import { Layout } from '../containers/index';
export default function Calc(){
    
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('')
    const {num1, opcode, num2} = inputs; 

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({ ...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        memberCalc({num1, opcode, num2})
        .then(res => setResult(res.data))
        .catch( err => console.log(`에러발생 : ${err}`))
    }

    return <Layout>
    <form>
    <h1>계산기</h1>

    <div>
    <label><b>num1</b></label>
    <input type="text" name="num1" onChange={handleChange} /><br />

    <label htmlFor=""><b>opcode</b></label>
    <select name="opcode" onChange={handleChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
    </select>
    <br />

    <label htmlFor=""><b>num2</b></label>
    <input type="text" name="num2" onChange={handleChange} /><br />

    <button onClick={handleClick}>계산실행</button><br />

    <div>계산결과 : {result} </div>
    </div>
    </form>
    </Layout>
}