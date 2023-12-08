import React, { useEffect, useState } from 'react'
import "../listfavourite/ListFavourite.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getListFavorite } from '../../components/feature/favorite/favoriteSlice'
import { Link } from 'react-router-dom'
import { FaStar, FaPlusCircle } from 'react-icons/fa'
import { Button } from 'antd';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const ListFavourite = () => {
    const favorites = useSelector((state) => state.favorite)
    const accessToken = localStorage.getItem("accessToken")
    const dispatch = useDispatch()
    const [More, setMore] = useState(false)

    useEffect(() => {
        dispatch(getListFavorite({ accessToken }))
    }, [])

    return (
        <div style={{ marginTop: "32px" }}>
            <Header />

            <div className='title__list-favourite'>LIST FAVORITE</div>
            {
                favorites.favorites.length === 0 ?
                    (<div className="favourite__list-empty">
                        <img src="https://media.itsnicethat.com/original_images/giphy-2021-gifs-and-clips-animation-itsnicethat-02.gif" alt="" className='favourite__list-empty-image' />
                        <p className='favourite__list-empty-text'>Empty</p>
                    </div>)
                    : null
            }

            <div className='list-favourite' style={{ maxHeight: More ? undefined : '410px' }}>

                {
                    favorites?.favorites.map((value, index) => (
                        <Link to={`/productsdetail/${value.idproducts}`} state={{ product: value }} key={index} className='link'>
                            <div className='item' key={index} onClick={() => window.location.replace(`/productsdetail/${value.idproducts}`)}>
                                <div className='discount'>
                                    <p >Giảm <span>{value.discount}%</span></p>
                                </div>
                                <div className='url'>
                                    <img key={index} src={value.image[0].avt} alt="" />
                                </div>
                                <h3 style={{ color: "#000" }}>{value.nameproducts}</h3>
                                <div className='format'>

                                    <p>{(value?.size[0]?.pricesize - ((value?.size[0]?.pricesize * value?.discount) / 100)).toLocaleString('en-US').replace(/,/g, '.') + '$'}&nbsp;</p>
                                    <p>{(value?.size[0]?.pricesize).toLocaleString('en-US').replace(/,/g, '.') + '$'}&nbsp;</p>
                                </div>
                                <div className='promotion' style={{ color: "#000" }}>
                                    {value.promotion}
                                </div>
                                <div className='icon'>
                                    <div>
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                    </div>
                                    <button>
                                        <FaPlusCircle className='circle' />
                                    </button>
                                </div>
                            </div>
                        </Link>

                    ))

                }
            </div>
            {
                favorites.favorites.length >= 6
                    ?
                    <div className='category__btn-show'>
                        <Button onClick={() => setMore(!More)}>
                            <span>
                                {
                                    More ? 'Collagse' : 'See More'
                                }
                            </span>
                            <div>
                                {
                                    More ? <FaAngleUp /> : <FaAngleDown />
                                }
                            </div>
                        </Button>
                    </div>
                    : null
            }
            <Footer />
        </div>
    )
}

export default ListFavourite