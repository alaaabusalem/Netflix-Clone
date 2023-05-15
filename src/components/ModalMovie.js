import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

function ModalMovie(props) {
  return (
    <>
       <Modal show={props.showFlag} onHide={props.handleCloseFlag} Key={props.item.id}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.item.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.item.poster_path} width='100%'></Image>
                    
                
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleCloseFlag}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleCloseFlag}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
    </>
  );
}

export default ModalMovie;