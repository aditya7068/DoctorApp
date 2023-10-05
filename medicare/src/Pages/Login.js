import React from 'react';
import {Form,Input,Checkbox,message} from 'antd';
import { showLoading, hideLoading } from '../redux/features/alertSlice';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const Login = ()=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onfinishHandler = async (values) => {
        try {
            dispatch(showLoading());
            const res = await axios.post('/api/v1/user/login', values);
            dispatch(hideLoading());
            if(res.data.success){
                localStorage.setItem("token", res.data.token);
                message.success('Login Successfully');
                navigate('/books');
            }
            else{
                message.error(res.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
            message.error('Something went Wrong');
        }
    }

     return(
        <>
            <div className="form-container">
                <Form layout="vertical" onFinish={onfinishHandler} autoComplete="off" className="cloud p-4">
                <h1>Login <span>Form</span></h1>
                    <Form.Item label="Email" name="email">
                        <Input type="email" required/>
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" required/>
                    </Form.Item>
                    <Checkbox className='remember' style={{color: "black"}}>Remember me</Checkbox>
                    <div className="smile">
                    <button className='btn1' type='submit'>Login</button>
                    <h6>Not a User<Link to="/register" className='m-1'>Register Here</Link></h6>
                    </div>
                </Form>
            </div>
        </>
     )
}

export default Login;