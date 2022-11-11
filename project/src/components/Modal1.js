import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Modal1(props){
    function onAgree() {
        props.onAccept();
    }

    function onDisagree() {
        props.onAccept();
    }

    return(
        <div className='position: fixed'>
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>User update</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>User Name : progress</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary m-2" onClick={onAgree}>Save changes</Button>
                <Button variant="secondary m-2" onClick={onDisagree}>Close</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </div>
    );

}
export default Modal1;