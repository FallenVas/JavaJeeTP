import React, { useEffect, useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useNavigate, useParams } from "react-router-dom";


  
  const UpdateFacture = () => {
    const navigate = useNavigate();
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
      console.log(inputValues);
      fetch("http://localhost:8080/api/UpdateFacture/"+params.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValues),
      })
        .then((raw) => raw.json())
        .then((data) => {
          navigate("/AllFactures");
        });
    };
    const params = useParams()
    useEffect(() => {
        fetch('http://localhost:8080/api/Facture/'+params.id , {
        }).then(raw => raw.json()).then(data => {
        setInputValues(data)
        console.log(data)
        })
    },[])
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
  return (
    <Form onSubmit={onSubmitHandler}>
      <Form.Field>
        <label>ID</label>
        <input placeholder="ID" name="id" onChange={handleOnChange} defaultValue={inputValues.id} />
      </Form.Field>
      <Form.Field>
        <label>Date</label>
        <input
            value={formatDate(inputValues.date)}
          placeholder="Date"
          type={"date"}
          name="date"
          onChange={handleOnChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Amount</label>
        <input placeholder="Amount" name="amount" onChange={handleOnChange} defaultValue={inputValues.amount} />
      </Form.Field>
      <Button color="yellow">Update</Button>
    </Form>
  );
};

export default UpdateFacture;
