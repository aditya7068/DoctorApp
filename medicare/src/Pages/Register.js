import React from 'react';
import {Form,Input,message,Checkbox} from 'antd';
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showLoading , hideLoading } from '../redux/features/alertSlice';


const Register = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onfinishHandler = async (values) => {
        try {
            dispatch(showLoading());
            const res = await axios.post('/api/v1/user/register', values);
            dispatch(hideLoading());
            if(res.data.success){
                message.success('Registered Successfully');
                navigate('/login');
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
                <Form layout="vertical" onFinish={onfinishHandler} className="cloud p-4">
                <h1>Register <span>Form</span></h1>
                    <Form.Item label="Name" name="name">
                        <Input type="text" required/>
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input type="email" required/>
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" required/>
                    </Form.Item>
                    <Checkbox className='remember' style={{color: "black"}}>Remember me</Checkbox>
                    <div className="smile">
                    <button className='btn1' type='submit'>Register</button>
                    <h6>Already User<Link to="/login" className='m-1'>Login Here</Link></h6>
                    </div>
                </Form>
            </div>
        </>
     )
}

export default Register;