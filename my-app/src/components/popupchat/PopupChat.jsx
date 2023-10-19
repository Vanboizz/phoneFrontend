import React, { useEffect, useRef, useState } from 'react'
import { IoMdClose } from "react-icons/io"
import { IoIosSend } from "react-icons/io";
import "../popupchat/PopupChat.css"

const PopupChat = (props) => {
    const { setIsPopupChat } = props
    const messageContainerRef = useRef(null)
    const [chat, setChat] = useState("")
    const [messages, setMessages] = useState([]);

    const handleCloseModalChat = () => {
        setIsPopupChat(false)
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        const container = messageContainerRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setChat('');
        scrollToBottom();
    }

    return (
        <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "99999" }}>
            <div style={{ width: "350px", height: "480px", boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)", borderRadius: "8px" }}>
                <div style={{ width: "350px", height: "50px", backgroundColor: "#1a94ff", borderRadius: "8px 8px 0 0" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: "0" }}>
                        <div style={{ display: "flex", gap: "4px", alignItems: "center", paddingLeft: "8px" }}>
                            <div style={{ backgroundColor: "blue", width: "32px", height: "32px", borderRadius: "50%" }}></div>
                            <div style={{ color: "#fff" }}>
                                <h4>Elliot Egharevba</h4>
                                <h5>Stream Speciallist</h5>
                            </div>
                        </div>
                        <div style={{ padding: "16px", cursor: "pointer" }} onClick={handleCloseModalChat}>
                            <IoMdClose style={{ color: "#fff", fontSize: "24px" }} />
                        </div>
                    </div>
                    <div ref={messageContainerRef} style={{ overflowY: "scroll", overflowX: "hidden", height: "360px" }} className='custom-scroll'>
                        <div style={{ display: "flex", alignItems: "flex-end", padding: "8px" }}>
                            <div>
                                <img style={{ width: "32px", height: "32px", borderRadius: "50%" }} src="https://scontent.xx.fbcdn.net/v/t39.30808-1/365565269_3603515913266585_7906588074020528425_n.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=5fac6f&_nc_ohc=wDT4wgye6EIAX9UYdEG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfBQo6iTGC5s8V3DmPjKBf0ZLVN7plpQGqKVsOAyjyEBoA&oe=652B5C90" alt="" />
                            </div>
                            <div style={{ flex: "1", marginLeft: "8px" }}>
                                <p style={{ backgroundColor: "#F1F4F7", maxWidth: "28%", wordWrap: "break-word", padding: "8px", borderRadius: "12px" }}>
                                    Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-end", padding: "8px" }}>
                            <div style={{ flex: "1" }}></div>
                            <div style={{ maxWidth: "72%", wordWrap: "break-word", padding: "8px", borderRadius: "12px", backgroundColor: "#1a94ff", color: "white" }}>
                                Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-end", padding: "8px" }}>
                            <div>
                                <img style={{ width: "32px", height: "32px", borderRadius: "50%" }} src="https://scontent.xx.fbcdn.net/v/t39.30808-1/365565269_3603515913266585_7906588074020528425_n.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=5fac6f&_nc_ohc=wDT4wgye6EIAX9UYdEG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfBQo6iTGC5s8V3DmPjKBf0ZLVN7plpQGqKVsOAyjyEBoA&oe=652B5C90" alt="" />
                            </div>
                            <div style={{ flex: "1", marginLeft: "8px" }}>
                                <p style={{ backgroundColor: "#F1F4F7", maxWidth: "28%", wordWrap: "break-word", padding: "8px", borderRadius: "12px" }}>
                                    Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-end", padding: "8px" }}>
                            <div style={{ flex: "1" }}></div>
                            <div style={{ maxWidth: "72%", wordWrap: "break-word", padding: "8px", borderRadius: "12px", backgroundColor: "#1a94ff", color: "white" }}>
                                Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-end", padding: "8px" }}>
                            <div>
                                <img style={{ width: "32px", height: "32px", borderRadius: "50%" }} src="https://scontent.xx.fbcdn.net/v/t39.30808-1/365565269_3603515913266585_7906588074020528425_n.jpg?stp=dst-jpg_p100x100&_nc_cat=109&ccb=1-7&_nc_sid=5fac6f&_nc_ohc=wDT4wgye6EIAX9UYdEG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AfBQo6iTGC5s8V3DmPjKBf0ZLVN7plpQGqKVsOAyjyEBoA&oe=652B5C90" alt="" />
                            </div>
                            <div style={{ flex: "1", marginLeft: "8px" }}>
                                <p style={{ backgroundColor: "#F1F4F7", maxWidth: "28%", wordWrap: "break-word", padding: "8px", borderRadius: "12px" }}>
                                    Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                </p>
                            </div>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-end", padding: "8px" }}>
                            <div style={{ flex: "1" }}></div>
                            <div style={{ maxWidth: "72%", wordWrap: "break-word", padding: "8px", borderRadius: "12px", backgroundColor: "#1a94ff", color: "white" }}>
                                Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmitForm} style={{ position: "absolute", bottom: "0", left: "0", width: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", padding: "8px" }}>
                            <div style={{ background: "#fff", width: "100%", padding: "8px", borderRadius: "8px", border: "1px solid #D3D3D3", display: "flex" }}>
                                <input value={chat} onChange={(e) => setChat(e.target.value)} style={{ border: "none", outline: "none", flex: "1", marginLeft: "4px" }} type="text" placeholder='Enter a message' />
                                <button style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}>
                                    <IoIosSend style={{ fontSize: "24px", color: "#1a94ff" }} />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default PopupChat