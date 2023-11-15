import React, { useEffect, useState } from 'react'
import Style from './analyze-general-component.module.scss'
import astroData from '../../mock-data/data.json'
import { useLocation, useNavigate } from 'react-router-dom'

const AnalyzeGeneralComponent = () => {
    const navigate = useNavigate();
    const data = astroData.astroData;
    const [randomObject, setRandomObject] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedObject = data[randomIndex];
        setRandomObject(selectedObject);
    }, [location.state.dob])

    const handleReadClick = () => {
        navigate('/analyze-detail', { state: randomObject });
    }

    return (
        randomObject === null ? <></> :
            <div className={Style.body}>
                <div>
                    <span>Họ và tên: {location.state.name}</span><br />
                    <span>Ngày Sinh: {location.state.dob}</span>
                </div>
                {/* <div className='m-1'><strong></strong></div> */}
                <div className={Style.mainNumber}>
                    {randomObject.mainNumber}
                </div>
                <div>
                    <strong> Chào bạn, {randomObject.zodiac}</strong>
                </div>
                <div className={Style.content}>
                    <div dangerouslySetInnerHTML={{ __html: randomObject.generalInformation }} />
                </div>
                <button className="btn-light btn w-25 m-3" onClick={handleReadClick}>Xem Thêm</button>
            </div>
    )
}

export default AnalyzeGeneralComponent
