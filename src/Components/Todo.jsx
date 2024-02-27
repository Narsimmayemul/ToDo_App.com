// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';
// 
// const Todo = ()=>{
// 
    // const url = 'http://localhost:3000/'
    // const [data , setData]=useState([]);
    // const [id , setId]=useState(0);
    // const [_id , set_Id]=useState(0);
    // const [name , setName]=useState('');
    // const [time , setTime]=useState(0);
    // const [work , setWork]=useState('');
// 
    // const getData = async()=>{
        // try {
            // const dataf = await fetch(url);
            // const res = await dataf.json();
            // setData(res);
        // } catch (error) {
            // console.log('error from react get fun'+error)
        // }
    // }
    // 
    // const postFun= async ()=>{
        // try {
            // console.log('posting');
            // const datad = req.body;
            // const dataf = await axios.post(url , {
                // id : id,
                // name:name,
                // time:time,
                // work:work,
            // });
            // console.log(dataf)
            // getData();
            // setId(0);
            // setName("");
            // setTime(0);
            // setWork("");
        // } catch (error) {
            // console.log('this error from react post fun   ' + error)
        // }
    // }
//    const handleDelete= async(od)=>{
    // try {
        // console.log(od)
        //  await axios.delete(`${url}${od}`)
        // console.log('deleting');
        // getData()
    // } catch (error) {
        // console.log('this error from react delete fun   ' + error)
    // }
//    }
// 
// 
// 
//    const handle_Update = async(e)=>{
    // const datad = e;
    // set_Id(e._id);
    // setId(e.id);
    // setName(e.name);
    // setTime(e.time);
    // setWork(e.work);
//    }
// 
//    const Update_Fun= async()=>{
    // console.log('updating')
    // try {
        // const dataf = await axios.put(url+_id , {
            // id : id,
            // name:name,
            // time:time,
            // work:work,
        // });
        // console.log(dataf)
        // set_Id(0)
        // setId(0);
        // setName("");
        // setTime(0);
        // setWork("");
    //   
        // getData();
        // console.log('updated done');
// 
    // } catch (error) {
        // console.log('this error from update fun   '+ error)
    // }
//    }
// 
    // useEffect(() => {
    // getData()
    // }, [])
// 
    // return(
        // <>
    {/* <div className='container' style={{ display:"flex" ,justifyContent:'center',padding:'30px', flexDirection:"row" ,width:"100%"}}> */}
        {/* {data.map((e)=>{ */}
            // return <div key={e.id} style={{border:"1px solid black" , display:'flex' ,padding:'40px', width:"90%"}}> 
         {/* <ol style={{listStyleType:"none"}}> */}
            {/* <li>{e.name}</li> */}
            {/* <hr /> */}
            {/* <li>{e.time}</li> */}
            {/* <hr /> */}
            {/* <li>{e.work}</li> */}
            {/* <hr /> */}
            {/* <button onClick={()=>handleDelete(e._id)} >delete</button> */}
            {/* <hr /> */}
            {/* <button onClick={()=>handle_Update(e)} >Update</button> */}
         {/* </ol> */}
         {/* </div> */}
// })}
    {/* </div> */}
{/*  */}
{/*  */}
    {/* <div style={{border:"1px solid black" , width:"100%"}}> */}
    {/* <input type="text"  placeholder='ID' onChange={(e)=>{setId(e.target.value),console.log(e.target.value)}}/> */}
    {/* <input type="text"  placeholder='Name' onChange={(e)=>{setName(e.target.value),console.log(e.target.value)}}/> */}
    {/* <input type="text"  placeholder='Time' onChange={(e)=>{setTime(e.target.value),console.log(e.target.value)}}/> */}
    {/* <input type="text"  placeholder='Work' onChange={(e)=>{setWork(e.target.value),console.log(e.target.value)}}/> */}
    {/* <button onClick={postFun}>Post</button> */}
{/* </div> */}
{/*  */}
{/* <br /> */}
{/*  */}
{/* <div style={{border:"1px solid black" , width:"100%"}}> */}
    {/* <input type="text"  placeholder='ID' value={id} onChange={(e)=>{setId(e.target.value),console.log(e.target.value)}}/> */}
    {/* <input type="text"  placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value),console.log(e.target.value)}}/> */}
    {/* <input type="text"  placeholder='Time' value={time} onChange={(e)=>{setTime(e.target.value),console.log(e.target.value)}}/> */}
    {/* <input type="text"  placeholder='Work' value={work} onChange={(e)=>{setWork(e.target.value),console.log(e.target.value)}}/> */}
    {/* <button onClick={Update_Fun}>Update</button> */}
{/* </div> */}
{/*  */}
    {/* </> */}
    // )
// }
// 
// export default Todo;
// 




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Todo.module.css'

const Todo = () => {
    const url = 'http://localhost:3000/';
    const [data, setData] = useState([]);
    const [id, setId] = useState(0);
    const [_id, set_Id] = useState(0);
    const [name, setName] = useState('');
    const [time, setTime] = useState(0);
    const [work, setWork] = useState('');

    const [_id1, set_Id1] = useState(0);
    const [id1, setId1] = useState(0);
    const [name1, setName1] = useState('');
    const [time1, setTime1] = useState(0);
    const [work1, setWork1] = useState('');

    const getData = async () => {
        try {
            const dataf = await fetch(url);
            const res = await dataf.json();
            setData(res);
        } catch (error) {
            console.log('error from react get fun' + error);
        }
    }

    const postFun = async () => {
        try {
            const dataf = await axios.post(url, {
                id: id,
                name: name,
                time: time,
                work: work,
            });
            getData();
            setId(0);
            setName("");
            setTime(0);
            setWork("");
        } catch (error) {
            console.log('this error from react post fun   ' + error);
        }
    }

    const handleDelete = async (od) => {
        try {
            await axios.delete(`${url}${od}`);
            getData();
        } catch (error) {
            console.log('this error from react delete fun   ' + error);
        }
    }

    const handle_Update = async (e) => {
        const datad = e;
        set_Id1(e._id);
        setId1(e.id);
        setName1(e.name);
        setTime1(e.time);
        setWork1(e.work);
    }

    const Update_Fun = async () => {
        try {
            await axios.put(url + _id, {
                id1:   id,
                name1: name,
                time1: time,
                work1: work,
            });
            setId1(0);
            setName1("");
            setTime1(0);
            setWork1("");
            getData();
        } catch (error) {
            console.log('this error from update fun   ' + error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>

            

            <div className={styles.container}>
                {data.map((e) => {
                    return <div key={e.id} className={styles.todoitem}>
                        <ol style={{ listStyleType: "none" }}>
                            <li>{e.name}</li>
                            <hr className='hr-line' />
                            <li>{e.time} PM</li>
                            <hr className='hr-line' />
                            <li>{e.work}</li>
                            <hr className='hr-line' />
                            <button className={styles.button} onClick={() => handleDelete(e._id)}>Delete</button>
                            <hr className='hr-line' />
                            <button className={styles.button} onClick={() => handle_Update(e)}>Update</button>
                        </ol>
                    </div>
                })}
            </div>

            <div className={styles.inputcontainer}>
                <input type="Number" placeholder='ID'  value={id}  onChange={(e) => setId(e.target.value)} />
                <input type="text" placeholder='Name'  value={name}  onChange={(e) => setName(e.target.value)} />
                <input type="Number" placeholder='Time'value={time}  onChange={(e) => setTime(e.target.value)} />
                <input type="text" placeholder='Work'  value={work}  onChange={(e) => setWork(e.target.value)} />
                <button className={styles.button} onClick={postFun}>Post</button>
            </div>

            <div className={styles.inputcontainer}>
                <input type="Number" placeholder='ID'   value={id1} onChange={(e) =>     setId1(e.target.value)} />
                <input type="text" placeholder='Name'   value={name1} onChange={(e) => setName1(e.target.value)} />
                <input type="Number" placeholder='Time' value={time1} onChange={(e) => setTime1(e.target.value)} />
                <input type="text" placeholder='Work'   value={work1} onChange={(e) => setWork1(e.target.value)} />
                <button className={styles.button} onClick={Update_Fun}>Update</button>
            </div>

        </>
    )
}

export default Todo;
