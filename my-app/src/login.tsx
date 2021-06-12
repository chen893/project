import React from 'react';
import {useState} from 'react';
import './login.css';
import { Form, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  function changeName(e:any) {
    setuserName(e.target.value);
  }
  function changePassword(e:any){
    setpassword(e.target.value);
  }
  const login = ()=>{
    if(!userName|| !password){
      message.error('内容不能为空');
    }
    console.log(userName);
    console.log(password)
  }
  return (
    <div className='main'>
      <div className='loginType'>
        <span>登录</span>
        <span>注册</span>
      </div>
      <div className='loginInput'>
        <Input placeholder="用户名" value={userName} onChange={changeName}/>
        <Input placeholder="密码"  value={password} onChange={changePassword}/>
      </div>
      <Button type="primary" className="loginBtn" onClick={login}>登录</Button>
    </div>
  );
}

export default Login;
