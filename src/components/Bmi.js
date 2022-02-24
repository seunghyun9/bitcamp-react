import React, {useState} from 'react' 
import Layout from '../containers/Layout';
import axios  from 'axios';
export default function Bmi(){

    const [inputs, setInputs] = useState({})
    const {name, weight, height} = inputs; // Object  Destructuring

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({ ...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        const bmiRequest = {name, height, weight}
        alert(` 사용자이름: ${JSON.stringify(bmiRequest)}`)    
        // axios.get(`http://localhost:8080/member/bmi/한성수/175.5/63.5`)
        //     .then((res)=>{
        //         alert(`답장이 도착했습니다 [내용] ${JSON.stringify(res.data)}`)
        //     })
    }
    


    return (<Layout>
    <form>
    <h1>BMI 측정기</h1>
   
    
    <div>
    <label><b>Username</b></label>
    <input type="text" name="name" onChange={handleChange} /><br />

    <label htmlFor=""><b>height</b></label>
    <input type="text" name="height" onChange={handleChange} /><br />

    <label htmlFor=""><b>weight</b></label>
    <input type="text" name="weight" onChange={handleChange} /><br />

    <button onClick={handleClick}>BMI 측정</button>
    </div> 
    
    </form>
    </Layout>)
}
