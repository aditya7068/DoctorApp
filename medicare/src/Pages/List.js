// import { Layout } from 'antd';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Table} from 'antd';


const List = () => {

    const [list, setList] = useState([]);

const getList = async () => {
    try {
        const res = await axios.get('/api/v1/user/list', {
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        if(res.data.success){
            
            setList(res.data.data);
        }
    } catch (error) {
        console.log(error);
    }
};


useEffect(() => {
    getList();
}, []);


const columns = [
    {
        title:'Name',
        dataIndex:'name',
    },
    {
        title:'Phone',
        dataIndex:'phone',
    },
    {
        title:'Email',
        dataIndex:'email',
    },
    {
        title:'Address',
        dataIndex:'address',
    },
    {     
        title:'Date',
        dataIndex:'date',
    },
]


  return (
    <>
    <div className='mx-5'>
    <div className='p-4 done'>
            <h3 className='text-center heading'>Appointment <span> List</span></h3>
        </div>
    <Table columns={columns} dataSource={list}/>
    </div>
    </>
  )
}

export default List;