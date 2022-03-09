import React, {useState} from 'react' 
import { memberInfo } from '../api/index';
import { Layout } from '../containers/index';
export default function Info(){

    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState('') 
    const {name, gender, age, phone, address, vaccine} = inputs;

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({ ...inputs, [name]: value})
    }
    const handleClick = (e) => {
        e.preventDefault()
        memberInfo({name, gender, age, phone, address, vaccine})
        .then(res => setResult(res.data))
        .catch( err => console.log(`에러발생 : ${err}`))
    }

    return (<Layout>
        <form>
        <h1>개인정보</h1>

        <div>
        <label><b>Username</b></label>
        <input type="text" name="name" onChange={handleChange} /><br />

        <label htmlFor=""><b>gender</b></label>
        <input type="text" name="gender" onChange={handleChange} /><br />

        <label htmlFor=""><b>age</b></label>
        <input type="text" name="age" onChange={handleChange} /><br />

        <label htmlFor=""><b>phone</b></label>
        <input type="text" name="phone" onChange={handleChange} /><br />

        <label htmlFor=""><b>address</b></label>
        <input type="text" name="address" onChange={handleChange} /><br />

        <label htmlFor=""><b>vaccine</b></label>
        <input type="text" name="vaccine" onChange={handleChange} /><br />
        
        <button onClick={handleClick}>개인정보 조회</button>
        </div>
        <div>개인정보 조회 결과 : {result}</div>
        
        </form>
        </Layout>)
}