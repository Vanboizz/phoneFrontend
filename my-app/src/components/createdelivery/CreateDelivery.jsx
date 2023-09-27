import React from 'react'
import { useState, useEffect } from 'react';
import "../createdelivery/CreateDelivery.css"
import { Button, Checkbox, Form, Input, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { updateDetailAddress } from '../feature/user/userSlice';
import { toast } from 'react-toastify';


const CreateDelivery = () => {
    const [provinces, setProvinces] = useState([]);
    const [provinceid, setProvinceid] = useState('');

    const [districtes, setDistrictes] = useState([]);
    const [districtid, setDistrictid] = useState('');

    const [wards, setWards] = useState([]);
    const [wardid, setWardid] = useState('');
    const accessToken = localStorage.getItem('accessToken');

    const dispatch = useDispatch()

    const onFinish = (values) => {
        const data = {
            values,
            accessToken
        }
        dispatch(updateDetailAddress({
            province: values?.province,
            district: values?.district,
            ward: values?.ward,
            detail_address: values?.detail_address,
            accessToken: accessToken
        })).then((res) => {
            if (res?.payload?.result) {
                toast.success('Update successfully', {
                    position: 'top-right',
                    autoClose: 3000,
                    style: { color: '#32a852', backgroundColor: '#D7F1FD' },
                });
            }
            else {
                toast.error('Update fail', {
                    position: 'top-right',
                    autoClose: 3000,
                    style: { color: '#bf0d0d', backgroundColor: '#D7F1FD' },
                });
            }
        })

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleProvince = (value, option) => {
        setProvinceid(option?.key);
        form.setFieldsValue({ 'district': undefined });
        form.setFieldsValue({ 'ward': undefined });
    }

    const handleDistrict = (value, option) => {
        setDistrictid(option?.key)
        form.setFieldsValue({ 'ward': undefined });
    }

    const handleWard = (value, option) => {
        setWardid(option?.key)
    }

    const [form] = Form.useForm();
    const onReset = () => {
        form.resetFields();
    };


    useEffect(() => {
        const getprovinces = async () => {
            const resprovince = await fetch("https://vapi.vnappmob.com/api/province/")
            const respro = await resprovince.json();
            setProvinces(await respro);
            return true;
        }
        getprovinces()
    }, []);
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

    const { Option } = Select;
    return (
        <>
            <div className='createdelivery'>
                <p className='createdelivery__name'>CREATE DELIVERY ADDRESS</p>
                <Form
                    form={form}
                    name="control-hooks"
                    onFinish={onFinish}
                    className='createdelivery_form'
                >
                    <Form.Item
                        label="Address"
                        required
                        className='createdelivery_address'
                        style={{ marginBottom: '0px' }}
                    >
                        <Form.Item
                            name="province"
                            required
                            rules={[
                                {
                                    required: true, validator: (rule, value) => {
                                        if (value === undefined)
                                            return Promise.reject('Please select province');
                                        return Promise.resolve();
                                    }
                                }
                            ]}
                        >
                            <Select
                                placeholder="Province"
                                onChange={(value, option) => handleProvince(value, option)}
                                allowClear
                                className='createdelivery_province'
                            >
                                {provinces?.results
                                    ? provinces?.results.map((province) => {
                                        return (
                                            <Option
                                                key={province?.province_id}
                                                value={province?.province_name}
                                            >
                                                {province?.province_name}
                                            </Option>
                                        )
                                    })
                                    : null}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="district"
                            rules={[
                                {
                                    required: true, validator: (rule, value) => {
                                        if (value === undefined)
                                            return Promise.reject('Please select district.');
                                        return Promise.resolve();
                                    }
                                }
                            ]}
                        >
                            <Select
                                placeholder="District"
                                onChange={(value, option) => handleDistrict(value, option)}
                                allowClear
                                className='createdelivery_district'
                            >
                                {
                                    districtes?.results
                                        ? districtes?.results.map((district) => (
                                            <Option
                                                key={district?.district_id}
                                                value={district?.district_name}
                                            >
                                                {district?.district_name}
                                            </Option>
                                        ))
                                        : null
                                }
                            </Select>

                        </Form.Item>

                        <Form.Item
                            name="ward"
                            rules={[
                                {
                                    required: true, validator: (rule, value) => {
                                        if (value === undefined)
                                            return Promise.reject('Please select ward.');
                                        return Promise.resolve();
                                    }
                                }
                            ]}
                        >
                            <Select
                                placeholder="Wards"
                                onChange={(value, option) => handleWard(value, option)}
                                allowClear
                                className='createdelivery_ward'
                            >
                                {
                                    wards?.results
                                        ? wards?.results.map((ward) => (
                                            <Option
                                                key={ward.ward_id}
                                                value={ward.ward_name}
                                            >
                                                {ward.ward_name}
                                            </Option>
                                        ))
                                        : null
                                }
                            </Select>

                        </Form.Item>

                    </Form.Item>


                    <Form.Item
                        name="detail_address"
                        label="Detail address"
                        rules={[
                            {
                                required: true, message: 'Please enter detail address'
                            }
                        ]}
                        className='createdelivery_note'
                    >

                        <Input
                            style={{ height: '40px' }}
                        />
                    </Form.Item>

                    <Form.Item
                        className='createdelivery-btn'
                    >
                        <Button type="primary" htmlType="submit">
                            UPDATE INFORMATION
                        </Button>
                    </Form.Item>
                </Form>
            </div >
        </>
    )
}
export default CreateDelivery