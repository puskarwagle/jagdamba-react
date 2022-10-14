import '../styles/form.css';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import FormHead from './formhead.js';

	const onSubmit = async (data) => {
  const { name, number, email, location, message } = data;
  
  console.log('Name: ', name);
  console.log('Number: ', number);
  console.log('Email: ', email);
  console.log('Location: ', location);
  console.log('Message: ', message);

  try {
    const templateParams = {
      name,
      number,
      email,
      location,
      message
    };
    await emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_USER_ID
    );
    //reset();
  } catch (e) {
    console.log(e);
  }
};

/* */ /* */ 

const Form = () => {
  const {
    register,
    handleSubmit,
    /* reset, */
    formState: { errors }
  } = useForm();
  
return (
  <div className="Form">
  	<FormHead />
    <form id="contact" action="" method="post" onSubmit={handleSubmit(onSubmit)} noValidate>
    	<div className="grid-form grid-form1">
      	<label for="name">Full Name</label>
      	<input name="name" type="text" required 
      	{...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}></input>
      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
      </div>
      
      <div className="grid-form grid-form2">
      	<label for="number">Phone</label>
      	<input id="number" type="tel" required
      	{...register('number', {
                        required: { value: true, message: 'Please enter a number' },
                        minLength: {
                        	value: 9,
                        	message: 'Number cannot be less than 9 characters'
                        },
                        maxLength: {
                          value: 15,
                          message: 'Number cannot exceed 15 characters'
                        }
                      })}></input>
      {errors.number && (<span className='errorMessage'>{errors.number.message}</span>)}
      </div>
      
      <div className="grid-form grid-form3">
      	<label for="email">Email</label>
      	<input name="email" type="email" required 
      	{...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}></input>
      {errors.email && (<span className='errorMessage'>Please enter a valid email address</span>)}
      </div>
      
      <div className="grid-form grid-form4">
      	<label for="location">Location</label>
      	<input name="location" type="text" required 
      	{...register('location', {
                        required: { value: true, message: 'Please enter a location' },
                        maxLength: {
                          value: 75,
                          message: 'Location cannot exceed 75 characters'
                        }
                      })}></input>
      {errors.location && (<span className='errorMessage'>{errors.location.message}</span>)}
      </div>
      
      <div className="grid-form grid-form5">
      	<label for="message">Message</label>
      	<textarea name="message" required
      	{...register('message', {
                        required: true
                      })}></textarea>
      {errors.message && <span className='errorMessage'>Please enter a message</span>}
      </div>
      
      <button className="grid-form grid-form6" id="submit"  name="submit" type="submit" data-submit="...Sending">SEND</button>
    </form>
  </div>
);
}

export default Form;
