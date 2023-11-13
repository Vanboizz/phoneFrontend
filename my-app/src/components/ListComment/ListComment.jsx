import React, { useEffect, useState } from 'react'
import { AiOutlineClockCircle, AiOutlineSend } from "react-icons/ai";
import { MdQuestionAnswer } from "react-icons/md"
import dayjs from 'dayjs';
import axios from 'axios';
import ListReply from '../ListReply/ListReply';

const ListComment = (props) => {
    const { comment, accessToken, productsById } = props
    const [hidenFormReply, setHidenFormReply] = useState(false)
    const [reply, setReply] = useState("")
    const [listReply, setListReply] = useState([])

    const handleHidenFormReply = (e) => {
        e.preventDefault()
        if (!hidenFormReply) {
            setHidenFormReply(true)
        }
        else {
            setHidenFormReply(false)
        }
    }

    const handleSubmitReply = (e) => {
        e.preventDefault()
        if (productsById && productsById.data) {
            axios.post("http://localhost:8000/comment/addComment", {
                idproducts: productsById.data.idproducts,
                comment: reply,
                parentId: comment.idcomment
            }
                , {
                    headers: {
                        Authorization: "Bearer " + accessToken
                    },
                }
            )
                .then(() => {
                    getListReply()
                    setReply("")
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    const getListReply = async () => {
        if (productsById && productsById.data) {
            try {
                const response = await axios.get(`http://localhost:8000/comment/getComment/${productsById.data.idproducts}`);
                setListReply(response.data.data);
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        getListReply()
    }, [])

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <p style={{ backgroundColor: "#168d8d", color: "white", height: "32px", width: "32px", borderRadius: "50%", fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center" }}>N</p>
                    <h4>Nguyen Van Nam</h4>
                </div>
                <div style={{ display: "flex", gap: "4px" }}>
                    <AiOutlineClockCircle />
                    <h5>{dayjs(comment.commentday).from()}</h5>
                </div>
            </div>
            <div style={{
                backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 1px 2px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)", padding: "10px", margin: "12px 0", lineHeight: "1.5", width: "calc(100% - 40px)", marginLeft: "auto"
            }}>
                <p style={{ fontSize: "12px" }}>{comment.comment}</p>
                <button onClick={handleHidenFormReply} style={{ border: "none", color: "#1a94ff", fontWeight: "bold", display: "flex", alignItems: "center", gap: "8px", backgroundColor: "transparent", marginLeft: "auto", cursor: "pointer", fontSize: "14px" }}>
                    <MdQuestionAnswer />
                    Answer
                </button>
            </div>
            <div>
                {
                    listReply.map((value, index) => (
                        value.parentId !== null &&
                        value.parentId === comment.idcomment &&
                        < ListReply key={index} value={value} />
                    ))
                }
            </div>
            {
                hidenFormReply &&
                <form action="" style={{ margin: "12px 0" }} onSubmit={handleSubmitReply}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <p style={{ backgroundColor: "#168d8d", color: "white", height: "32px", width: "32px", borderRadius: "50%", fontWeight: "bold", display: "flex", justifyContent: "center", alignItems: "center" }}>N</p>
                        </div>
                        <div>
                            <textarea
                                name='review'
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                                style={{
                                    borderRadius: "8px",
                                    resize: "vertical",
                                    display: "block",
                                    boxShadow: "0 0 10px 0 rgba(60,64,67,.1), 0 2px 6px 2px rgba(60,64,67,.15)",
                                    border: "0",
                                    padding: "8px",
                                    width: "650px"
                                }}
                                placeholder='Please leave your answer'
                                required>
                            </textarea>
                        </div>
                        <div>
                            <button type='submit' style={{ border: "none", backgroundColor: "#1a94ff", color: "white", fontWeight: "bold", display: "flex", alignItems: "center", padding: "8px", cursor: "pointer", fontSize: "16px", borderRadius: "8px" }}>
                                <AiOutlineSend size={24} />
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            }
        </div >
    )
}

export default ListComment