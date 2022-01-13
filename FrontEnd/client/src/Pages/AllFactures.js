import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
const AllFactures = () => {
  const [factures, setFactures] = useState();
  useEffect(() => {
    fetch("http://localhost:8080/api/listFacture")
      .then((raw) => raw.json())
      .then((data) => {
        console.log(data);
        setFactures(data);
      });
  }, []);
  const DeleteFactureHandler = (e) => {
    if (window.confirm("Are you sure you want to delete this facture")) {
      fetch("http://localhost:8080/api/Facture/" + e.target.id, {
        method: "DELETE",
      }).then((raw) => {
        fetch("http://localhost:8080/api/listFacture")
          .then((raw) => raw.json())
          .then((data) => {
            console.log(data);
            setFactures(data);
          });
      });
    }
  };
  return (
    <React.Fragment>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {factures &&
            factures.map((facture) => (
              <Table.Row key={facture.id}>
                <Table.Cell>{facture.id}</Table.Cell>
                <Table.Cell>{new Date(facture.date).toLocaleDateString()}</Table.Cell>
                <Table.Cell>{facture.amount}</Table.Cell>
                <Table.Cell>
                  <Link to={"/UpdateFacture/" + facture.id}>
                    <Button color="yellow" as={"div"}>
                      Update
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    color="red"
                    id={facture.id}
                    onClick={DeleteFactureHandler}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </React.Fragment>
  );
};

export default AllFactures;
