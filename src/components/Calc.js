import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Calc(){
    const [num1, setNum1] = useState(0)
    const [opcode, setOpcode] = useState("")
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    const sum = () => {
        return setResult(Number(num1) + Number(num2))
    }
    return <Layout><h1>계산기</h1>
    <div>
    <label><b>num1</b></label>
    <input id="num1" type="" /><br/>
    <label htmlFor=""><b>opcode</b></label>
    <select name="" id="">
        <option value="">+</option>
        <option value="">-</option>
        <option value="">*</option>
        <option value="">/</option>
        <option value="">%</option>
    </select>
    <br/>
    <label htmlFor=""><b>num2</b></label>
    <input id="num2" tpye=""/><br/>
    <button onClick={() => {setNum1(document.getElementById('num1').value)}}>num1 결정</button>
    <button onClick={() => {setNum2(document.getElementById('num2').value)}}>num2 결정</button>
    <button onClick={() => {sum()}}>더하기 실행</button>
    <div>계산 결과: {num1} + {num2} = {result}</div>
    </div>
    </Layout>
}