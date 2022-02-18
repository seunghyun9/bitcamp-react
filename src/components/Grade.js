import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    const [name, setName] = useState("");
    const [kor, setKor] = useState(0);
    const [eng, setEng] = useState(0);
    const [math, setMath] = useState(0);
    return <Layout>
    <h1>
    성적표
    </h1>
    <form>
    <div></div>
    <div>
    <label><b>Username</b></label>
    <input></input><br/>
    <label><b>kor</b></label>
    <input></input><br/>
    <label><b>eng</b></label>
    <input></input><br/>
    <label><b>math</b></label>
    <input></input><br/>
    <button>합격 여부 판단</button>
    </div>
    </form>
    </Layout>
}
