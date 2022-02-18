import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Bmi(){
    const [name, setName] = useState("");
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const execute = () => {
        let name = document.getElementById('name').value
        console.log('이름 : ' + name)
        let height = document.getElementById('height').value
        console.log('키 : ' + height)
        let weight = document.getElementById('weight').value
        console.log('몸무게 : ' + weight)
        setName(name)
        setHeight(height)    
        setWeight(weight)
    }
    return <Layout><h1>BMI 측정기</h1>
    <div>
    <label><b>Username</b></label><br/>
    <input id="name"/><br/>
    <label><b>height(cm)</b></label><br/>
    <input id="height"/><br/>
    <label><b>weight(kg)</b></label><br/>
    <input id="weight"/><br/>
    <button onClick={() => {execute()}}>BMI 측정</button>
    <div>결과: {name}, {height}cm, {weight}kg</div>
    </div>
    </Layout>
}
