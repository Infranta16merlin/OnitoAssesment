import './App.css';
import { useState } from 'react';


const initialValues = {

   contact:'',
    email:'',
    address:'',
    state:'',
    pincode:'',
    country:'',
    state:'',
    city:'',
    othercity:'',
    occupation:'',
    status:'',
    religion:'',
    bloodgrp:'',
    emerNumber:''
  }



const NewUser = () =>{

    const [name,setenteredName] = useState('');
  const [age,setAge] = useState('');
  const [sex,setSex] = useState('');
  const [data,setData] = useState([]);
  const [inputNumber,setInputNumber] = useState('');
  const[value,setValue] = useState('');
  const [number,setNumber] = useState('');
  const [values,setValues] = useState(initialValues)

  const handleNamechange = (e) =>{
   setenteredName(e.target.value);
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };


  const handleAgeChange = (e) =>{
    setAge(e.target.value);
   }

   const handleSexchange = (e) =>{
    setSex(e.target.value);
   }

   const handleValue = (e) =>{
    setValue(e.target.value);
   }

   const handleNumber = (e)=>{
    setNumber(e.target.value);
   }

   const hanldeMobileNumber = (e) =>{
    setInputNumber(e.target.value);
   }

  


  const hanldeSubmit = async (e) =>{
    e.preventDefault();
    const newData = {name:name,age:age,sex:sex,mobileNumber:inputNumber,number:number,value:value,values:values};
    if(age.trim().length === 0  || name.trim().length=== 0  || sex.trim().length===0){
      return ;
    }

    if(inputNumber &&  inputNumber.length !== 10 || values.emerNumber.length !== 10){
      alert('Please provide valid phone number');
       return ;
    } else{
      setInputNumber(inputNumber);
    }
  
    if( value && (value === 'aadhar' && number.length === 12) ||(value==='pan' && number.length === 10)){
      setValue(value);
    } else {
      alert('Please provide valid aadhar number');
      return ;
    }
    
     setData([...data,newData]);
  
     const response = await fetch('https://create-new-form-default-rtdb.firebaseio.com/data.json', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const newdata = await response.json();
  }




    return (
        <div className="form">
        <form onSubmit={hanldeSubmit}>
          
       
        <h4>Personal Details</h4>
        <div className='first-input'>
        <label htmlFor='Name'>Name </label>
        <input type='text' style={{position:'relative',right: '8%'}} value={name} onChange={handleNamechange}></input>
        <label htmlFor='DOB'>Date of Birth or Age </label>
        <input type='text'style={{position:'relative',right: '10%'}} value={age} onChange={handleAgeChange}></input>
        <label htmlFor='Sex'>Sex </label>
        <input type='text' style={{position:'relative',right: '12%'}} value={sex} onChange={handleSexchange}></input>
        </div>
        <br/>
        <div className='second-input'>
        <label htmlFor='MobileNum'>Mobile Number </label>
        <input type='text' style={{position:'relative',right: '12%'}} value={inputNumber} onChange={hanldeMobileNumber}></input>
        <label htmlFor='GovetId' style={{position:'relative',right: '4%'}}>Govt Issued Id</label>
       <select className='contact-select-main' value={value} onChange={handleValue}>
       <option value='pan'>PanCard</option>
       <option value='aadhar'>AadharCard</option>
       </select>
        <label htmlFor='Id'>ID No </label>
        <input type='text' style={{position:'relative',right: '12%'}} value={number} onChange={handleNumber}></input>
        </div>
        <br/>
        <h4>Contact Details</h4>
        <div className='third-input'>
        <label htmlFor='Guardian Details'>Guardian Details</label>
       <select className='contact-select'>
       <option >Mr.</option>
       <option >Mrs.</option>
        <option>Ms.</option>
       </select>
       <label htmlFor='guradinanName' > </label>
        <input type='text' style={{position:'relative',right:'18%'}} value={values.contact} onChange={handleInputChange} name='contact'></input>
        <label htmlFor='email'style={{position:'relative',right:'11%'}} value={values.email} >Email </label>
        <input type='text' style={{position:'relative',right:'18%'}} onChange={handleInputChange} name='email'></input>
        <label htmlFor='emercontact' style={{position:'relative',right:'11%'}} >Emergency Contact Number </label>
        <input type='text'  style={{position:'relative',right:'18%'}} value={values.emerNumber} onChange={handleInputChange} name='emerNumber'></input>
        </div>
        <br/>
        <h4>Address Details</h4>
        <div className='forth-input'>
        <label htmlFor='Address'>Address</label>
        <input type='text' value={values.address} onChange={handleInputChange} name='address' style={{position:'relative',left: '2%'}}></input>
        <label htmlFor='State' style={{position:'relative',left:'3%'}}>State</label>
       <select className='contact-select-2' value={values.state} onChange={handleInputChange} name='state' style={{position:'relative',left: '4%'}}>
       <option value='AP'>AP</option>
       <option value='Karnataka'>Karnataka</option>
        <option value='TN'>TN</option>
       </select>
       <label htmlFor='City' style={{position:'relative',left:'6%'}}>City</label>
       <select className='contact-select-3' value={values.city} onChange={handleInputChange} name='city' style={{position:'relative',left:'7%'}}>
       <option value='Bangalore'>Bangalore</option>
       <option value='Chennai'>Chennai</option>
        <option value='Cbe'>CBE</option>
       </select>
        </div>
        <br/>
        <div>
        <label htmlFor='Country'>Country </label>
        <input type='text' value={values.country} onChange={handleInputChange} name='country' style={{position:'relative',left:'2%'}}></input>
        <label htmlFor='pincode' style={{position:'relative',left: '3%'}}>PinCode </label>
        <input type='text' style={{position:'relative',left: '3%'}} value={values.pincode} onChange={handleInputChange} name='pincode'></input>
        </div>
  
        <h4>Other Details</h4>
        <div className='fifth-input' >
        <label htmlFor='occupation' style={{position:'relative',right: '0%'}}>Occupation </label>
        <input type='text' style={{position:'relative',right: '3%'}} value={values.occupation} onChange={handleInputChange} name='occupation'></input> 
        <label htmlFor='Religion' style={{position:'relative',right:'3%'}}>Religion</label>
       <select className='contact-select-4' value={values.religion} onChange={handleInputChange} name='religion'>
       <option value='Hindu' >Hindu</option>
       <option value='Christian'>Christian</option>
        <option value='Muslim'>Muslim</option>
        <option value='Others'>Others</option>
       </select>
       <label htmlFor='Martial Status' style={{position:'relative',right:'11%'}}>Martial Status</label>
       <select className='contact-select-5' value={values.status} onChange={handleInputChange} name='status'>
       <option value='married'>Married</option>
       <option value='unmarried'>Single</option>
        <option value='others'>Others</option>
       </select>
       <label htmlFor='City' style={{position:'relative',right: '16%'}}>City</label>
       <select className='contact-select-6' value={values.othercity} onChange={handleInputChange} name='othercity'>
       <option >Bangalore</option>
       <option >Chennai</option>
        <option>CBE</option>
       </select>
       <label htmlFor='bloodgrp' style={{position:'relative',right: '20%'}}>Blood Group </label>
        <input type='text' style={{position:'relative',right: '25%'}} value={values.bloodgrp} onChange={handleInputChange} name='bloodgrp'></input> 
  
        </div>
        
         <br>
         </br>
         <button className='btn'>Submit</button>
        
        </form> 
      </div>
      
    
    )

}

export default NewUser;