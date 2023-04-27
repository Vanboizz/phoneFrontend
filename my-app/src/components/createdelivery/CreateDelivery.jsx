import React from 'react'
import { useState, useEffect } from 'react';
import "../createdelivery/CreateDelivery.css"

const CreateDelivery = () => {
    const [provinces, setProvinces] = useState([]);
    const [provinceid, setProvinceid] = useState('');

    const [districtes, setDistrictes] = useState([]);
    const [districtid, setDistrictid] = useState('');

    const [wards, setWards] = useState([]);
    const [wardid, setWardid] = useState('');

    useEffect(() => {
        const getprovinces = async () => {
            const resprovince = await fetch("https://vapi.vnappmob.com/api/province/")
            const respro = await resprovince.json();
            setProvinces(await respro);
            return true;
        }
        getprovinces()
    }, []);

    const handleprovince = (e) => {
        const getprovinceid = e.target.value;
        setProvinceid(getprovinceid);
    }


    useEffect(() => {
        (async () => {
            if (provinceid !== "") {
                const resdistrict = await fetch(`https://vapi.vnappmob.com/api/province/district/${provinceid}`)
                const resdis = await resdistrict.json()
                setDistrictes(await resdis)
                return true;
            }
        })();
    }, [provinceid])

    const handleDistrict = (e) => {
        const getdistrictid = e.target.value;
        setDistrictid(getdistrictid)
    }


    useEffect(() => {
        (async () => {
            if (districtid !== "") {
                const reswards = await fetch(`https://vapi.vnappmob.com/api/province/ward/${districtid}`)
                const resw = await reswards.json()
                setWards(await resw)
                return true;
            }
        })();
    }, [districtid])

    const handleWard = (e) => {
        const getwardid = e.target.value;
        setWardid(getwardid)
    }
    return (

        <div className='createdelivery'>
            <p className='createdelivery__name'>CREATE DELIVERY ADDRESS</p>

            <form action="">
                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>FULLNAME</label>
                    <input placeholder='Add fullname' className='userprofile__form-input' type="text" name='username' defaultChecked />
                </div>

                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>EMAIL</label>
                    <input placeholder='Add email' className='userprofile__form-input' type="text" name='username' defaultChecked />
                </div>

                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>PHONE NUMBER</label>
                    <input placeholder='Add phone number' className='userprofile__form-input' type="text" name='username' />
                </div>

                <div className='userprofile__form'>

                    <div className='userprofile__form-birth'>

                        <select name="province" id="pet-select" className='userprofile__form-birth-input' onChange={(e) => handleprovince(e)}>
                            <option value="" placeholder=''>Province</option>
                            {
                                provinces.results
                                    ? provinces.results.map((province) => (
                                        <option key={province.province_id} value={province.province_id}> {province.province_name}</option>
                                    ))
                                    : null
                            }
                        </select>

                        <select name="district" id="pet-select" className='userprofile__form-birth-input' onChange={(e) => handleDistrict(e)}>
                            <option value="" placeholder=''>District</option>
                            {
                                districtes.results
                                    ? districtes.results.map((district) => (
                                        <option key={district.district_id} value={district.district_id}>{district.district_name}</option>
                                    ))
                                    : null
                            }
                        </select>

                        <select name="wards" id="pet-select" className='userprofile__form-birth-input' onChange={(e) => handleWard(e)}>
                            <option value="" placeholder=''>Wards</option>
                            {
                                wards.results
                                    ? wards.results.map((ward) => (
                                        <option key={ward.ward_id} value={ward.ward_id}>{ward.ward_name}</option>
                                    ))
                                    : null
                            }
                        </select>
                    </div>

                </div>

                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>ADDRESS DETAIL</label>
                    <input placeholder='Add address detail' className='userprofile__form-input' type="text" name='username' />
                </div>

                <div className='userprofile__form'>
                    <button type="submit" className='userprofile__form-update'>UPDATE INFOMATION</button>
                </div>

            </form>
        </div>
    )
}

export default CreateDelivery