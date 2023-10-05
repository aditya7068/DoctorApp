import React,{useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import web2 from '../Image/book.png';
import axios from 'axios';
import {Form,Input,message} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { showLoading , hideLoading } from '../redux/features/alertSlice';



const Books = () => {

          const navigate = useNavigate();
          const dispatch = useDispatch();
          const handleLogout = () => {
              localStorage.clear();
              message.success('Logout Successfully');
              navigate('/');
          }
  

        const getuserData = async () => {
          try {
            await axios.post('/api/v1/user/getUserData', {}, {
              headers:{Authorization: "Bearer" + localStorage.getItem('token'),},
            });
          } catch (error) {
            console.log(error);
          }
        };


        useEffect(() => {
          getuserData();
        }, []);


    const {user} = useSelector(state => state.user);
    // const location = useLocation();
    
        const handleFinish = async (values) => {
          try {
            dispatch(showLoading());
            const res = await axios.post('/api/v1/user/books', {...values, userId:user._id}, {
              headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            });
            dispatch(hideLoading());
            if(res.data.success){
                message.success('Appointment Done Successfully');
                navigate('/');
            }
            else{
                message.error(res.data.success);
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
            message.error('Something went Wrong');
        }
        }



     return(
        <>
            <section className='book'>
            <div className='row'>
                      <div className='col-12 mx-auto'>
              <div className='p-4 d-flex dom' onClick={handleLogout}>
                            
                              
                              <h4 className='pt-2'><i class="px-2 fas fa-user"></i><Link to="/">{user?.name}</Link></h4>
                      
                           <div className="che">
                                <i className='fa-solid fa-right-from-bracket'></i>
                                <Link to="/">Logout</Link>
                            </div>
              </div>
              </div>
              </div>
               <div className='container-fluid'>
                  <div className='row'>
                      <div className='col-12 mx-auto mb-5'>
                      <div className='row'>                    
                          <div className='col-md-6 col-sm-12 col-lg-6 mt-5'>
                              <img className='img-fluid animated' src={web2} alt="#" />
                          </div>
                          <div className='head col-md-6 col-sm-12 col-lg-6'>
                          <Form layout="vertical" onFinish={handleFinish}>
                            <h3>Book Appointment</h3>                        
                            <Form.Item label="Name:" name="name">
                                <Input type="text" placeholder="Your Name" class="box" required/>
                            </Form.Item>
                            <Form.Item label="Contact No:" name="phone">
                                <Input type="number" placeholder="Your Number" class="box" required/>
                            </Form.Item>
                            <Form.Item label="Email:" name="email">
                            <Input type="email" placeholder="Your Email" class="box" required/>
                            </Form.Item>
                            <Form.Item label="Date:" name="date">
                            <Input type="date" class="box" required/>
                            </Form.Item>
                            <Form.Item label="Address:" name="address">
                            <Input type="text" placeholder="Your Address" class="box" required/>
                            </Form.Item>
                            <button className='btn' type='submit'>Book Now</button>
                        </Form>
                          </div>
                          
                          </div>
                </div>
            </div>
        </div>
                          
            </section>
            <hr />
        </>
     )
}

export default Books;