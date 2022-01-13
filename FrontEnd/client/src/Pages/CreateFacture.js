import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
const CreateFacture = () => {
    const navigate = useNavigate()
  const [inputValues, setInputValues] = useState({
    id: "",
    date: "",
    amount: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(inputValues)
    fetch('http://localhost:8080/api/AddFacture',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(inputValues)
    }).then(raw => raw.json()).then(data => {
        navigate('/AllFactures')
    })
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Field>
        <label>ID</label>
        <input placeholder="ID" name="id" onChange={handleOnChange} />
      </Form.Field>
      <Form.Field>
        <label>Date</label>
        <input placeholder="Date" type={"date"} name="date" onChange={handleOnChange} />
      </Form.Field>
      <Form.Field>
        <label>Amount</label>
        <input placeholder="Amount" name="amount" onChange={handleOnChange} />
      </Form.Field>
      <Button color="green">Create</Button>
    </Form>
  );
};

export default CreateFacture;
