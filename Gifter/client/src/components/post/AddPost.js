import React, {useState } from "react";
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import AddNewPostForm from '../PostForm';

const [modal, setModal] = useState(false)
const toggle = () => setModal(!modal)

export const PostForm = () => {
    return (
    <>
        <Modal isOpen = {modal} toggle = {toggle}>
        <ModalHeader toggle = {toggle}>
            New Post
        </ModalHeader>
        <ModalBody>
            <AddNewPostForm toggler = {toggle}/>
        </ModalBody>
    </Modal>
</>)
}