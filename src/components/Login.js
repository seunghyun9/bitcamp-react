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
   }
   return <Layout><h1>로그인</h1>
   <div>
   <label><b>Username</b></label><br/>
   <input id="name"/><br/>
   <label><b>Password</b></label><br/>
   <input id="pw"/><br/>
   <button onClick={() => {login()}}>Login</button><br/>
   <label><input type = "checkbox"/>Remember me</label>
   </div>
   <div>
   <button>Cancel</button>
   <span>Forgot <a>password?</a></span>
   </div>
   <div>{name}님 비밀번호 {pw} 맞습니다</div>
   </Layout>
}