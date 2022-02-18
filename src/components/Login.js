import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Login(){
   const [name, setName] = useState("");
   const [pw, setPw] = useState(0);
   return <Layout>
   <h1>
   로그인
   </h1>
   <form>
   <div></div>
   <div>
   <label><b>Username</b></label><br/>
   <input></input><br/>
   <label><b>Password</b></label><br/>
   <input></input><br/>
   <button>Login</button><br/>
   <label><input type = "checkbox"/>Remember me</label>
   </div>
   <div>
   <button>Cancel</button>
   <span>Forgot <a>password?</a></span>
   </div>
   </form>
   </Layout>
}