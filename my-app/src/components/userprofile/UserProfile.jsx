import React from 'react'
import "../userprofile/UserProfile.css"
import { useState, useEffect } from 'react'


const UserProfile = () => {

    const [dates, setDates] = useState([]);

    const [months, setMonths] = useState([]);
    const [monthchoose, setMonthChoose] = useState();

    const [years, setYears] = useState([]);
    const [yearchoose, setYearChoose] = useState('');


    const getDate = (d) => {
        var tempdates = []
        for (var i = 1; i <= d; i++) {
            tempdates.push(i);
        }
        setDates(tempdates)
    }
    useEffect(() => {
        getDate(31)
    }, [])

    const getMonth = (m) => {
        var tempmonth = []
        for (var i = 1; i <= m; i++) {
            tempmonth.push(i);
        }
        setMonths(tempmonth)
    }
    useEffect(() => {
        getMonth(12)
    }, [])

    const handleMonth = (e) => {
        switch (parseInt(e.target.value)) {
            case 0: 
            case 1: 
            case 3:
            case 5: 
            case 7:
            case 8:
            case 10:
            case 12:
                setMonthChoose(0)
                getDate(31);
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                setMonthChoose(1)
                getDate(30);
                break;
            case 2:                
                setMonthChoose(2)
                checkLeapYear(yearchoose) ? getDate(29) : getDate(28);
                break;
          }
    }

    useEffect(() => {
        const getYear = () => {
            const temp = new Date();
            const yearcurr = temp.getFullYear();
            var tempYear = []
            for (var i = yearcurr; i >= 1890; i--) {
                tempYear.push(i);
            }
            setYears(tempYear)
        }
        getYear()
    }, [])

    const checkLeapYear = (y) => {
        return ((y % 4 === 0) && (y % 100 !== 0 || y % 400 === 0)) ? true : false
    }

    const handleYear = (e) => {
        setYearChoose(parseInt(e.target.value))
        if (monthchoose === 2) {
            checkLeapYear(parseInt(e.target.value)) ? getDate(29) : getDate(28);
        }
    }


    return (
        <div className='userprofile'>
            <p className='userprofile__name'>Nguyễn Huỳnh Tuấn Khang</p>

            <form action="">
                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>USER NAME</label>
                    <input placeholder='Add user name' className='userprofile__form-input' type="text" name='username' />
                </div>

                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>FULL NAME</label>
                    <input placeholder='Add full name' className='userprofile__form-input' type="text" name='username' />
                </div>

                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>EMAIL</label>
                    <input placeholder='Add email' className='userprofile__form-input' type="text" name='username' />
                </div>

                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>PHONE NUMBER</label>
                    <input placeholder='Add phone number' className='userprofile__form-input' type="text" name='username' />
                </div>

                <div className="userprofile__form">

                    <label className='userprofile__form-text'>GENDER</label>

                    <div className='userprofile__form-choose'>
                        <div className="choose__male">
                            <input name='method' type="radio" value="xxx" className='pick-up__input' defaultChecked />
                            <label htmlFor="html" className='pick-up__text'>Male</label>
                        </div>

                        <div className="choose__female">
                            <input name='method' type="radio" value="yyy" className='delivery__input' defaultChecked />
                            <label htmlFor="html" className='delivery__text'>Female</label>
                        </div>
                    </div>
                </div>

                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>DATE OF BIRTH</label>

                    <div className='userprofile__form-birth'>

                        <select name="pets" id="pet-select" className='userprofile__form-birth-input'>
                            <option value="0" placeholder=''>Date</option>
                            {
                                dates
                                    ? dates.map((date, index) => (
                                        <option key={index} value={date} placeholder=''>{date}</option>
                                    ))
                                    : null
                            }
                        </select>

                        <select name="pets" id="pet-select" className='userprofile__form-birth-input' onChange={(e) => handleMonth(e)}>
                            <option value="0" placeholder=''>Month</option>
                            {
                                months
                                    ? months.map((month, index) => (
                                        <option key={index} value={month} placeholder=''>{month}</option>
                                    ))
                                    : null
                            }
                        </select>

                        <select name="pets" id="pet-select" className='userprofile__form-birth-input' onChange={(e) => handleYear(e)}>
                            <option value="0" placeholder=''>Year</option>
                            {
                                years
                                    ? years.map((year, index) => (
                                        <option key={index} value={year} placeholder=''>{year}</option>
                                    ))
                                    : null
                            }
                        </select>
                    </div>
                </div>
                <div className='userprofile__form'>
                    <button type="submit" className='userprofile__form-update'> UPDATE INFOMATION</button>
                </div>

            </form>
        </div>
    )
}

export default UserProfile