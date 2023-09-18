import { React, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const serviceID = "service_tnnc1hk";
  const templateID = "template_v3y4z1e";
  const publicKey = "dKVKW0naXT1jqV3MO";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidation()) {
      return;
    }

    try {
      const { from_name, message, name, subject } = formData;
      const templateParams = {
        from_name,
        message,
        name,
        subject,
      };
      const res = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;
    //Name
    if (!formData.name) {
      formIsValid = false;
      errors.name = "Cannot be empty";
    }
    //Subject
    if (!formData.subject) {
      formIsValid = false;
      errors.subject = "Cannot be empty";
    }
    //Email
    if (!formData.from_name) {
      formIsValid = false;
      errors.email = "Cannot be empty";
    }
    //Message
    if (!formData.message) {
      formIsValid = false;
      errors.message = "Cannot be empty";
    }
    setErrors(errors);
    return formIsValid;
  };

  const [formData, setFormData] = useState({
    from_name: "",
    message: "",
    name: "",
    subject: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    handleValidation();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <form name="contactForm" onChange={handleChange} onSubmit={handleSubmit}>
      <label>
        Name:
        <br />
        <input type="text" name="name" id="name" />
        {errors.name && <p className="errors">{errors.name}</p>}
      </label>
      <label>
        Subject:
        <br />
        <input type="text" name="subject" id="subject" />
        {errors.subject && <p className="errors">{errors.subject}</p>}
      </label>
      <label>
        Email Address:
        <br />
        <input type="email" name="from_name" id="email" />
        {errors.email && <p className="errors">{errors.email}</p>}
      </label>
      <label>
        Body:
        <br />
        <input type="text" name="message" id="body" />
        {errors.message && <p className="errors">{errors.message}</p>}
      </label>
      <br />
      <button disabled={Object.keys(errors).length}>Submit</button>
    </form>
    </div>
    
  );
};
// export contact
export default Contact;
