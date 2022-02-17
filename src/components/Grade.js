import React from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    return <Layout>
    <h1>
    성적표
    </h1>
    <form>
    <div></div>
    <div>
    <label><b>이름</b></label>
    <input></input><br/>
    <label><b>국어 점수</b></label>
    <input></input><br/>
    <label><b>영어 점수</b></label>
    <input></input><br/>
    <label><b>수학 점수</b></label>
    <input></input><br/>
    <button>합격 여부 판단</button>
    </div>
    </form>
    </Layout>
}
