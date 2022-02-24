import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Login(){
   const [name, setName] = useState("");
   const [pw, setPw] = useState(0);
   const login = () => {
      let name = document.getElementById('name').value
      console.log('이름 : ' + name)
      let pw = document.getElementById('pw').value
      console.log('비번 : ' + pw)
      setName(name)
      setPw(pw)

   // const [inputs, setInputs] = useState({})
   // const {name, pw} = inputs; // Object  Destructuring

   // const handleChange = (e) => {
   //      e.preventDefault()
   //      const {value, name} = e.target;
   //      setInputs({ ...inputs, [name]: value})
   //  }
   // const handleClick = (e) => {
   //      e.preventDefault()
   //      const loginRequest = {name, pw}
   //      alert(` 사용자이름: ${JSON.stringify(loginRequest)}`)    
   //  }
   }
   return (<Layout>
   <form>
   <h1>로그인</h1>
   
  
   <div>
   <label><b>Username</b></label>
   <input type="text" name="name"  /><br />

   <label htmlFor=""><b>Password</b></label>
   <input type="text" pw="pw"  /><br />

   <button>Login</button><br />
   <label><input type="checkbox" />Remember me</label><br />
   </div>

   <div>
   <button>Cancel</button><br />
   <span>Forgot <a>password?</a></span>
   </div>

   </form>
   </Layout>)
}