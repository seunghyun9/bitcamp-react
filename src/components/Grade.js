import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    const [name, setName] = useState("");
    const [kor, setKor] = useState(0);
    const [eng, setEng] = useState(0);
    const [math, setMath] = useState(0);
    const [sum, setSum] = useState(0);
    const [avg, setAvg] = useState(0.0);
    const execute = () => {
        let name = document.getElementById('name').value
        console.log('이름 : ' + name)
        let kor = document.getElementById('kor').value
        console.log('국어점수 : ' + kor)
        let eng = document.getElementById('eng').value
        console.log('영어점수 : ' + eng)
        let math = document.getElementById('math').value
        console.log('수학점수 : ' + math)
        setName(name)
        setKor(kor)
        setEng(eng)
        setMath(math)
        setSum(Number(kor) + Number(eng) + Number(math))
        setAvg(Number(sum) / 3)
    }
    return <Layout><h1>성적표</h1>
    <div>
    <label><b>Username</b></label>
    <input id="name"/><br/>
    <label><b>kor</b></label>
    <input id="kor"/><br/>
    <label><b>eng</b></label>
    <input id="eng"/><br/>
    <label><b>math</b></label>
    <input id="math"/><br/>
    <button onClick={() => {execute()}}>합격 여부 판단</button>
    <div>{name} : 국어점수:{kor}점 / 영어점수:{eng}점 / 수학점수:{math}점</div><br/>
    <div>총점:{sum}</div>
    <div>평균점수:{avg}</div>
    </div>
    </Layout>
}
