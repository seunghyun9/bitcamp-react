import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    // const [name, setName] = useState("");
    // const [kor, setKor] = useState(0);
    // const [eng, setEng] = useState(0);
    // const [math, setMath] = useState(0);
    // const [sum, setSum] = useState(0);
    // const execute = () => {
    //     let name = document.getElementById('name').value
    //     console.log('이름 : ' + name)
    //     let kor = document.getElementById('kor').value
    //     console.log('국어점수 : ' + kor)
    //     let eng = document.getElementById('eng').value
    //     console.log('영어점수 : ' + eng)
    //     let math = document.getElementById('math').value
    //     console.log('수학점수 : ' + math)
    //     setName(name)
    //     setKor(kor)
    //     setEng(eng)
    //     setMath(math)
    //     setSum("총점 : " + (Number(kor) + Number(eng) + Number(math)) + "평균 : " + (Number(kor) + Number(eng) + Number(math))/3)
    // }

    const [inputs, setInputs] = useState({})
    const {name, kor, eng, math} = inputs; // Object  Destructuring

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({ ...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        const gradeRequest = {name, kor, eng, math}
        alert(` 사용자이름: ${JSON.stringify(gradeRequest)}`)   
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

            <button onClick={handleClick}>성적결과</button>
        </div>
    </form>
    </Layout>
}
