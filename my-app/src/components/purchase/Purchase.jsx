import React from 'react'
import "../purchase/Purchase.css"
import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { GrFormClose } from "react-icons/gr";
import Orderdetail from '../orderdetail/Orderdetail';


const datas = [
    // {
    //     id: 1,
    //     img: "./iphone.webp",
    //     name: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
    //     color: "Xanh Lam",
    //     quantity: 1,
    //     datetime: "21-10-2022 15:27",
    //     price: 4000000,
    //     status: "cancel"
    // },
    // {
    //     id: 2,
    //     img: "./iphone.webp",
    //     name: "iPhone 12 Pro 64GB | Chính hãng VN/A",
    //     color: "Đen",
    //     quantity: 3,
    //     datetime: "23-05-2022 01:42",
    //     price: 8000000,
    //     status: "cancel"
    // },
    {
        id: 3,
        img: "./iphone.webp",
        name: "iPhone 12 Pro 64GB | Chính hãng VN/A",
        color: "Đen",
        quantity: 2,
        datetime: "25-09-2022 03:28",
        price: 8000000,
        status: "preparing"
    },
    {
        id: 4,
        img: "./iphone.webp",
        name: "iPhone 10 64GB | Chính hãng VN/A",
        color: "Xanh Đen",
        quantity: 2,
        datetime: "01-04-2023 07:27",
        price: 3500000,
        status: "delivering"
    },
    {
        id: 5,
        img: "./iphone.webp",
        name: "iPhone 13 Pro 128GB | Chính hãng VN/A",
        color: "Trắng Xanh",
        quantity: 3,
        datetime: "18-03-2022 05:19",
        price: 6500000,
        status: "delivering"
    },
    {
        id: 6,
        img: "./iphone.webp",
        name: "iPhone 10 64GB | Chính hãng VN/A",
        color: "Trắng Xanh",
        quantity: 4,
        datetime: "03-02-2022 13:27",
        price: 9500000,
        status: "arrived"
    },
    {
        id: 7,
        img: "./iphone.webp",
        name: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        color: "Xanh Lam",
        quantity: 1,
        datetime: "25-05-2022 15:27",
        price: 4000000,
        status: "arrived"
    },
    {
        id: 8,
        img: "./iphone.webp",
        name: "iPhone 12 Pro 64GB | Chính hãng VN/A",
        color: "Đen",
        quantity: 2,
        datetime: "01-03-2022 01:42",
        price: 8000000,
        status: "arrived"
    },
    {
        id: 9,
        img: "./iphone.webp",
        name: "iPhone 14 Pro Max 128GB | Chính hãng VN/A",
        color: "Đỏ Đô",
        quantity: 1,
        datetime: "05-02-2022 13:33",
        price: 3500000,
        status: "arrived"
    },
    {
        id: 10,
        img: "./iphone.webp",
        name: "iPhone 12 Pro 64GB | Chính hãng VN/A",
        color: "Xanh Lam",
        quantity: 2,
        datetime: "01-03-2022 01:42",
        price: 5500000,
        status: "arrived"
    },
    {
        id: 11,
        img: "./iphone.webp",
        name: "iPhone 10 64GB | Chính hãng VN/A",
        color: "Xanh Đen",
        quantity: 2,
        datetime: "01-04-2023 07:27",
        price: 3500000,
        status: "preparing"
    },
    {
        id: 12,
        img: "./iphone.webp",
        name: "iPhone 13 Pro 128GB | Chính hãng VN/A",
        color: "Trắng Xanh",
        quantity: 3,
        datetime: "18-03-2022 05:19",
        price: 6500000,
        status: "preparing"
    },

]

const Purchase = () => {
    const [statusSee, setStatusSee] = useState(1);
    const [statuscrr, setStatuscrr] = useState(1);
    const [dataapi, setDataApi] = useState(datas);
    const setStatus = (index) => {
        setStatuscrr(index);
    }

    const [currentItems, setcurrentItems] = useState([]) // list item in current page
    const [pageCount, setpageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0); // the index of the first item in current page
    const itemsPerPage = 3;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setcurrentItems(dataapi.slice(itemOffset, endOffset))
        setpageCount(Math.ceil(dataapi.length / itemsPerPage))
    }, [dataapi, itemOffset, itemsPerPage])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % datas.length;
        setItemOffset(newOffset);
    };

    const handleData = (str) => {
        if (str === '')
            setDataApi(datas);
        else
            setDataApi(datas.filter((data) => data.status === str))
    }

    const getStatusSee = (index) => {
        setStatusSee(index);
    }
    return (
        <>
            {
                datas.length >= 1 ?
                    (statusSee === 1 ?
                        (<div className='purchase'>
                            <p className='purchase__name'>ORDER MANAGEMENT</p>

                            <div className="purchase__status">
                                <button
                                    onClick={() => {
                                        setStatus(1);
                                        handleData('');
                                    }}
                                    className={statuscrr === 1 ? "purchase__status-common purchase__status-common-active" : "purchase__status-common"}>
                                    All
                                </button>

                                <button
                                    onClick={() => {
                                        setStatus(2);
                                        handleData('preparing');
                                    }}
                                    className={statuscrr === 2 ? "purchase__status-common purchase__status-common-active" : "purchase__status-common"}>
                                    Confirmed
                                </button>

                                <button
                                    onClick={() => {
                                        setStatus(3);
                                        handleData('delivering');
                                    }}
                                    className={statuscrr === 3 ? "purchase__status-common purchase__status-common-active" : "purchase__status-common"}>
                                    Being transported
                                </button>

                                <button
                                    onClick={() => {
                                        setStatus(4);
                                        handleData('arrived');
                                    }}
                                    className={statuscrr === 4 ? "purchase__status-common purchase__status-common-active" : "purchase__status-common"}>
                                    Received
                                </button>

                                <button
                                    onClick={() => {
                                        setStatus(5);
                                        handleData('cancel');
                                    }}
                                    className={statuscrr === 5 ? "purchase__status-common purchase__status-common-active" : "purchase__status-common"}>
                                    Cancelled
                                </button>
                            </div>

                            <div className="purchase__title">
                                <div className="purchase__title-des purchase-title-pro">PRODUCT</div>
                                <div className="purchase__title-des purchase-title-date">DATE TIME</div>
                                <div className="purchase__title-des purchase-title-price">PRICE</div>
                                <div className="purchase__title-des purchase-title-status">STATUS</div>
                            </div>

                            <div className="purchase__list">
                                {

                                    currentItems.length >= 1 ?
                                        currentItems.map((data) => (
                                            <div className="purchase__list-item" key={data.id}>
                                                <div className="purchase__list-item-pro">
                                                    <img src={data.img} alt="" className='purchase__list-item-pro-img' />
                                                    <div className="purchase__list-item-pro-detail">
                                                        <p className="purchase__list-item-pro-detail-namepro">{data.name}</p>
                                                        <p className="purchase__list-item-pro-detail-color">Color: {data.color}</p>
                                                        <p className="purchase__list-item-pro-detail-quantity">x{data.quantity}</p>
                                                    </div>
                                                </div>

                                                <div className="purchase__list-item-time">{data.datetime}</div>
                                                <div className="purchase__list-item-price">{data.price}</div>
                                                <div className={`purchase__list-item-status purchase__list-item-status-${data.status}`}>{data.status}</div>
                                                <div className="purchase__list-item-btn">
                                                    <button
                                                        onClick={() => getStatusSee(2)}
                                                        className='purchase__list-item-btn-detail'>See detail</button>
                                                </div>
                                                {data.status !== 'cancel' ? <GrFormClose className='purchase__list-item-icon' /> : null}
                                            </div>
                                        ))
                                        :
                                        (<div className="purchase__list-empty">
                                            <img src="https://media.itsnicethat.com/original_images/giphy-2021-gifs-and-clips-animation-itsnicethat-02.gif" alt="" className='purchase__list-empty-image' />
                                            <p className='purchase__list-empty-text'>Empty</p>
                                        </div>)
                                }
                            </div>
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="→"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                pageCount={pageCount}
                                previousLabel="←"
                                renderOnZeroPageCount={null}

                                containerClassName='pagination'
                                pageLinkClassName='page-num'

                                previousLinkClassName='arrow-prev'
                                nextLinkClassName='arrow-next'

                                activeLinkClassName='active'

                                nextClassName='purchase__next'
                                previousClassName='purchase__prev'
                            />
                        </div>) : <Orderdetail parentCallback={getStatusSee} />)
                    :
                    (<div className="empty">
                        <img src="https://media.itsnicethat.com/original_images/giphy-2021-gifs-and-clips-animation-itsnicethat-02.gif" alt="" className='empty-image' />
                        <p className='empty-text'>Empty</p>
                    </div>)
            }
        </>
    )
}
export default Purchase