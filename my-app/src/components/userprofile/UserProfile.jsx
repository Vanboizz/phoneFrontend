import React from 'react'
import "../userprofile/UserProfile.css"
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, updateUser } from '../feature/user/userSlice'


const UserProfile = () => {

    const { user, accessToken } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [fullname, setFullName] = useState(user ? user[0].fullname : 'x')

    const [email, setEmail] = useState(user ? user[0].email : '')
    const [phonenumber, setPhonenumber] = useState(user ? user[0].phonenumber : '')
    const [dates, setDates] = useState([]);

    const [months, setMonths] = useState([]);
    const [monthchoose, setMonthChoose] = useState();

    const [years, setYears] = useState([]);
    const [yearchoose, setYearChoose] = useState('');

    const [inputDate, setInputDate] = useState('0')
    const [inputMonth, setInputMonth] = useState('0')
    const [inputYear, setInputYear] = useState('0')
    const [gender, setGender] = useState('Female')


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

    useEffect(() => {
        setFullName(user ? user[0].fullname : '')
        setEmail(user ? user[0].email : '')
        setPhonenumber(user ? user[0].phonenumber : '')
    }, [user])

    const checkLeapYear = (y) => {
        return ((y % 4 === 0) && (y % 100 !== 0 || y % 400 === 0)) ? true : false
    }

    const handleYear = (e) => {
        setYearChoose(parseInt(e.target.value))
        if (monthchoose === 2) {
            checkLeapYear(parseInt(e.target.value)) ? getDate(29) : getDate(28);
        }
    }


    useEffect(() => {
        dispatch(getUser(accessToken))
    }, [])

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        dispatch(updateUser({ fullname: fullname, email: email, phonenumber: phonenumber, gender: gender, days: inputDate, months: inputMonth, years: inputYear, accessToken }))
    }

    return (
        <div className='userprofile'>
            <p className='userprofile__name'>{user ? user[0].fullname : null}</p>

            <form action="" onSubmit={handleUpdateProfile}>
                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>FULL NAME</label>
                    <input
                        placeholder='Add full name'
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                        className='userprofile__form-input' type="text" name='fullname'
                    />
                </div>

                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>EMAIL</label>
                    <input
                        placeholder='Add email'
                        className='userprofile__form-input'
                        type="text" name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>PHONE NUMBER</label>
                    <input
                        placeholder='Add phone number'
                        className='userprofile__form-input'
                        type="text" name='phonenumber'
                        onChange={(e) => setPhonenumber(e.target.value)}
                        value={phonenumber}
                    />
                </div>

                <div className="userprofile__form">

                    <label className='userprofile__form-text'>GENDER</label>

                    <div className='userprofile__form-choose'>
                        {/* remainer gender */}
                        <div className="choose__male">
                            <input name='gender' type="radio" value="Male" className='pick-up__input' onChange={e => setGender(e.target.value)} />
                            <label htmlFor="html" className='pick-up__text'>Male</label>
                        </div>

                        <div className="choose__female">
                            <input name='gender' type="radio" value="Female" className='delivery__input' defaultChecked onChange={(e) => setGender(e.target.value)} />
                            <label htmlFor="html" className='delivery__text'>Female</label>
                        </div>
                    </div>
                </div>

                <div className='userprofile__form'>
                    <label className='userprofile__form-text'>DATE OF BIRTH</label>

                    <div className='userprofile__form-birth'>
                        <select onChange={(e) => setInputDate(e.target.value)} name="date" id="date-select" className='userprofile__form-birth-input'>
                            <option value="0" placeholder=''>Date</option>
                            {
                                dates
                                    ? dates.map((date, index) => (
                                        <option key={index} value={date} placeholder=''>{date}</option>
                                    ))
                                    : null
                            }
                        </select>

                        <select name="month" id="month-select" className='userprofile__form-birth-input'
                            onChange={(e) => {
                                handleMonth(e)
                                setInputMonth(e.target.value)
                            }}>
                            <option value="0" placeholder=''>Month</option>
                            {
                                months
                                    ? months.map((month, index) => (
                                        <option key={index} value={month} placeholder=''>{month}</option>
                                    ))
                                    : null
                            }
                        </select>

                        <select name="year" id="year-select" className='userprofile__form-birth-input'
                            onChange={(e) => {
                                handleYear(e)
                                setInputYear(e.target.value)

                            }}>
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