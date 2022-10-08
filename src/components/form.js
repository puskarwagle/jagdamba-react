import '../styles/form.css';

function Form() {
  return (
  <div className="Form">
    <h3>Contact Us</h3>
    <form id="contact" action="" method="post">
    
    	<div className="grid-form grid-form1">
      	<label for="name">Full Name</label>
      	<input id="name" type="text" required />
      </div>
      
      <div className="grid-form grid-form2">
      	<label for="number">Phone</label>
      	<input id="number" type="tel" required />
      </div>
      
      <div className="grid-form grid-form3">
      	<label for="email">Email</label>
      	<input id="email" type="email" required />
      </div>
      
      <div className="grid-form grid-form4">
      	<label for="location">Location</label>
      	<input id="location" type="text" required />
      </div>
      
      <div className="grid-form grid-form5">
      	<label for="message">Message</label>
      	<textarea id="message" required></textarea>
      </div>
      
      <button className="grid-form grid-form6" id="submit"  name="submit" type="submit" data-submit="...Sending">SEND</button>
    </form>
  </div>
);
}

export default Form;
