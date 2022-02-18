import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Bmi(){
    const [name, setName] = useState("");
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    return <Layout>
    <h1>
    BMI 측정기
    </h1>
    <form>
    <div></div>
    <div>
    <label><b>Username</b></label><br/>
    <input></input><br/>
    <label><b>height(cm)</b></label><br/>
    <input></input><br/>
    <label><b>weight(kg)</b></label><br/>
    <input></input><br/>
    <button>BMI 측정</button>
    </div>
    </form>
    </Layout>
}
