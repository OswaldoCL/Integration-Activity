import Modal1 from "./Modal1";
import Backdrop from "./Backdrop";
import {useState} from 'react';
import { Button } from 'react-bootstrap';


function Buttons(props){
    const [showModal, setShowModal] = useState(false);

    function updateUser(){
        setShowModal(true);
    }
    function deleteUser(){

    }
    function showItems(){

    }
    function closeModalHandler(){
        setShowModal(false);
    }


    return(
        <div className="actions text-align=center">
            <Button variant="info" className="btn-sm m-4 ms-3" onClick={updateUser}>Update</Button>
            <Button variant="danger" className="btn-sm m-4 ms-3" onClick={deleteUser}>Delete</Button>
            <Button variant="info" className="btn-sm m-4 ms-3" onClick={showItems}>Items</Button>
            {showModal && <Modal1 onAccept={closeModalHandler} />}
            {showModal && <Backdrop onAccept={closeModalHandler} />}
        </div>
    );
}
export default Buttons;