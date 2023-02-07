import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Example() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={show}
        onEnter={handleShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        id="myModal"
        className="modal fade"
        tabindex="-1"
      >
        <Modal.Header>
          <Modal.Title>Essa página não é adequada para menores.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Para continuar na página, clique no botão abaixo.
        </Modal.Body>
        <Modal.Footer>
          <Button
            href="https://www.google.com.br/search?q=leite"
            variant="secondary"
          >
            Tenho menos de 18 anos
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Tenho mais de 18 anos
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
