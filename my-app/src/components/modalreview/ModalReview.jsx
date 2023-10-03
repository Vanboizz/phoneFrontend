import React, { useState } from 'react'
import "../modalreview/ModalReview.css"
import { AiOutlineClose, AiFillCamera, AiOutlineCloseCircle } from "react-icons/ai"
import { FaStar } from 'react-icons/fa'

const ratingLabels = ["Very bad", "Bad", "Normal", "Good", "Great"]
const perfomanceLabels = ["Lag", "Unstable", "Stable", "Strong", "Super strong"]
const batteryLifeLabels = ["Very weak", "Weak", "Enough to use", "Terrible", "Extremely terrible"]
const cameraQuantityLabels =
    ["Not taken well", "Not taken well", "Fine", "Beautiful capture", "Beautiful, professional photography"]

const ModalReview = (props) => {
    const { productsById, isModal, setIsModal } = props
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedRating, setSelectedRating] = useState(5)
    const [selectedPerformance, setSelectedPerformance] = useState(5)
    const [selectedBatteryLife, setSelectedBatteryLife] = useState(5)
    const [selectedCameraQuanlity, setSelectedCameraQuanlity] = useState(5)
    const [hoverRating, setHoverRating] = useState(0);
    const [hoverPerformance, setHoverPerformance] = useState(0);
    const [hoverBatteryLife, setHoverBatteryLife] = useState(0);
    const [hoverCameraQuantity, setHoverCameraQuantity] = useState(0);

    const handleCloseModal = () => {
        setIsModal(false)
    }

    const handleRatingMouseLeave = () => {
        setHoverRating(0);
    };

    const handleRatingMouseEnter = (star) => {
        setHoverRating(star);
    };

    const handlePerformanceMouseLeave = () => {
        setHoverPerformance(0);
    };

    const handlePerformanceMouseEnter = (star) => {
        setHoverPerformance(star);
    };

    const handleBatteryLifeMouseLeave = () => {
        setHoverBatteryLife(0);
    };

    const handleBatteryLifeMouseEnter = (star) => {
        setHoverBatteryLife(star);
    };

    const handleCameraQuantityMouseLeave = () => {
        setHoverCameraQuantity(0);
    };

    const handleCameraQuantityMouseEnter = (star) => {
        setHoverCameraQuantity(star);
    };

    const handleRatingClick = (selectedRating) => {
        setSelectedRating(selectedRating)
    }

    const handlePerformanceClick = (selectedPerformance) => {
        setSelectedPerformance(selectedPerformance);
    };

    const handleBatteryLifeClick = (selectedBatteryLife) => {
        setSelectedBatteryLife(selectedBatteryLife);
    };

    const handleCameraQuantityClick = (selectedCameraQuanlity) => {
        setSelectedCameraQuanlity(selectedCameraQuanlity);
    };


    const handleImageChange = (e) => {
        const files = e.target.files;
        const imageArray = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const url = URL.createObjectURL(file);
            imageArray.push(url);
        }

        if (selectedImages.length + imageArray.length <= 3) {
            setSelectedImages(prevSelectedImages => [...prevSelectedImages, ...imageArray]);
        }
    };

    const handleDeleteImage = (indexToRemove) => {
        setSelectedImages(prevSelectedImages => {
            const newSelectedImages = [...prevSelectedImages];
            newSelectedImages.splice(indexToRemove, 1);
            return newSelectedImages;
        });
    }
    return (
        <div className='wrapper-modalreview'>
            <div className='modal-review is-active'>
                <div
                    style={{
                        backgroundColor: "#f4f6f8",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                    <p
                        style={{
                            fontSize: "20px",
                            padding: "15px",
                            fontWeight: "bold"
                        }}>
                        Reviews & comments
                    </p>
                    <button onClick={handleCloseModal} style={{ border: "none", backgroundColor: "transparent", padding: "15px", fontSize: "20px", cursor: "pointer" }}>
                        <AiOutlineClose />
                    </button>
                </div>
                <div className='scroll' style={{ overflowY: "scroll", maxHeight: "88vh" }}>
                    <div>
                        <h3 style={{ padding: "15px" }}>{productsById.data?.nameproducts}
                            {
                                productsById?.data?.size.map((size, index) => (
                                    <span key={index}> {size.namesize}</span>
                                ))
                            }
                        </h3>
                    </div>
                    <form action="" >
                        <div style={{ color: "#111", fontSize: "16px", fontWeight: "bold", padding: "15px", }}>General Assessment</div>
                        <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%", borderBottom: "1px solid rgba(145,158,171,.239)", padding: "10px 0" }}>
                            {
                                [1, 2, 3, 4, 5].map((star, index) => (
                                    <div
                                        key={index}
                                        style={{ textAlign: "center", lineHeight: "1.5", cursor: "pointer" }}
                                        onMouseEnter={() => handleRatingMouseEnter(star)}
                                        onMouseLeave={handleRatingMouseLeave}
                                        onClick={() => handleRatingClick(star)}
                                    >
                                        <FaStar
                                            style={{ color: star <= (hoverRating || selectedRating) ? "#ffbf00" : "#ccc", fontSize: "24px" }}
                                        />
                                        <p style={{ fontSize: "12px" }}>{ratingLabels[star - 1]}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <div style={{ color: "#111", fontSize: "16px", fontWeight: "bold", padding: "15px", }}>
                                According to experience
                            </div>
                            <div style={{ display: "flex", padding: "15px", justifyContent: "space-between", alignItems: "center" }}>
                                <p style={{ fontSize: "13px", width: "50%" }}>Performance</p>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    {[1, 2, 3, 4, 5].map((star, index) => (
                                        <FaStar
                                            key={index}
                                            style={{ color: star <= (hoverPerformance || selectedPerformance) ? "#ffbf00" : "#ccc", fontSize: "16px", cursor: "pointer" }}
                                            onMouseEnter={() => handlePerformanceMouseEnter(star)}
                                            onMouseLeave={handlePerformanceMouseLeave}
                                            onClick={() => handlePerformanceClick(star)}
                                        />
                                    ))}
                                </div>
                                <div style={{ fontSize: "13px", width: "110px", textAlign: "left" }}>
                                    {perfomanceLabels[selectedPerformance - 1]}
                                </div>
                            </div>
                            <div style={{ display: "flex", padding: "15px", justifyContent: "space-between", alignItems: "center" }}>
                                <p style={{ fontSize: "13px", width: "50%" }}>Battery life</p>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    {[1, 2, 3, 4, 5].map((star, index) => (
                                        <FaStar
                                            key={index}
                                            style={{ color: star <= (hoverBatteryLife || selectedBatteryLife) ? "#ffbf00" : "#ccc", fontSize: "16px", cursor: "pointer" }}
                                            onMouseEnter={() => handleBatteryLifeMouseEnter(star)}
                                            onMouseLeave={handleBatteryLifeMouseLeave}
                                            onClick={() => handleBatteryLifeClick(star)}
                                        />
                                    ))}
                                </div>
                                <div style={{ fontSize: "13px", width: "110px", textAlign: "left" }}>
                                    {batteryLifeLabels[selectedBatteryLife - 1]}
                                </div>
                            </div>
                            <div style={{ display: "flex", padding: "15px", justifyContent: "space-between", alignItems: "center" }}>
                                <p style={{ fontSize: "13px", width: "50%" }}>Camera quality</p>
                                <div style={{ display: "flex", gap: "12px" }}>
                                    {[1, 2, 3, 4, 5].map((star, index) => (
                                        <FaStar
                                            key={index}
                                            style={{ color: star <= (hoverCameraQuantity || selectedCameraQuanlity) ? "#ffbf00" : "#ccc", fontSize: "16px", cursor: "pointer" }}
                                            onMouseEnter={() => handleCameraQuantityMouseEnter(star)}
                                            onMouseLeave={handleCameraQuantityMouseLeave}
                                            onClick={() => handleCameraQuantityClick(star)}
                                        />
                                    ))}
                                </div>
                                <div style={{ fontSize: "13px", width: "110px", textAlign: "left" }}>
                                    {cameraQuantityLabels[selectedCameraQuanlity - 1]}
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "13px" }}>
                            <textarea style={{ maxHeight: "40vh", margin: "10px 0", borderRadius: "8px", resize: "vertical", display: "block", maxWidth: "100%", minWidth: "100%", padding: "13px", minHeight: "8em" }} placeholder='Please share some thoughts about the product'></textarea>
                        </div>
                        <div style={{ display: "flex", padding: "13px" }}>
                            {selectedImages.length > 0 && (
                                <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
                                    {selectedImages.map((imageUrl, index) => (
                                        <div key={index} style={{ position: "relative" }}>
                                            <img style={{ maxWidth: "100px", maxHeight: "70px", borderRadius: "5px" }} src={imageUrl} alt={`Selected Image ${index}`} />
                                            <div style={{ cursor: "pointer", position: "absolute", top: "0", left: "100%" }} onClick={() => handleDeleteImage(index)}>
                                                <AiOutlineCloseCircle fontSize={20} />
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            )}
                            {selectedImages.length < 3 && (
                                <div>
                                    <input style={{ display: "none" }} type="file" id='image' multiple="multiple" accept="image/x-png,image/gif,image/jpeg" onChange={handleImageChange} />
                                    <label htmlFor="image" style={{ border: "1px dashed rgba(145,158,171,.239)", borderRadius: "8px", color: "#637381", cursor: "pointer", fontSize: "13px", fontWeight: "bold", gap: "10px", padding: "7px 11px", whiteSpace: "nowrap", margin: "0 0.5rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                        <AiFillCamera fontSize={24} />
                                        <div style={{ height: "24px", marginTop: "3px", lineHeight: "1.5" }}>
                                            Add Image
                                        </div>
                                    </label>
                                </div>
                            )}
                        </div>
                        <div style={{ position: "sticky", bottom: "0", width: "100%", zIndex: "400", backgroundColor: "white" }}>
                            <button style={{ border: "none", backgroundColor: "#1a94ff", color: "white", fontWeight: "bold", textAlign: "center", margin: "10px auto", padding: "10px 30px", borderRadius: "5px", width: "95%", cursor: "pointer" }}>SUBMIT REVIEW</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ModalReview