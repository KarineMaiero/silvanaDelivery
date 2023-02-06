import Modal from "react-bootstrap/Modal";

export default function ModalConfirm() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Essa página não é adequada para menores.</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Para continuar na página, clique no botão "sim" apenas se tiver mais
            de 18 anos.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <a href="https://www.google.com/" class="btn btn-secondary active">
            Não tenho 18 anos
          </a>
          <a href="http://localhost:3000/" class="btn btn-primary active">
            Tenho 18 anos
          </a>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
