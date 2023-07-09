import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'

function Branches() {
    const { language } = useContext(LanguageContext)
    return (
        <div className='flex flex-col justify-center items-center'>
            <div >
                <h2 className='text-[36px] text-[#0e243c] mt-[200px] text-center'>
                    {
                        language === "Հայերեն" ? (
                            <>
                                Մասնաճյուղեր
                            </>
                        ) : ''
                    }
                    {
                        language === "English" ? (
                            <>
                                Branches
                            </>
                        ) : ''
                    }                    {
                        language === "Русский" ? (
                            <>
                                Ветви
                            </>
                        ) : ''
                    }
                </h2>
            </div>
            <div className=' flex justify-center items-center object-cover'>
                <div className='imgDiv'>
                    <img src="https://aitschool.am/images/office_ararat.jpg" />
                    <p className='text-[20px]' >
                        {
                            language === "Հայերեն" ? (
                                <>
                                    Ք․Արարատ
                                </>
                            ) : ''
                        }
                        {
                            language === "English" ? (
                                <>
                                    City Ararat
                                </>
                            ) : ''
                        }
                        {
                            language === "Русский" ? (
                                <>
                                    Город Арарат
                                </>
                            ) : ''
                        }
                    </p>
                </div>
                <div className='imgDiv'>
                    <img src="https://aitschool.am/images/office_yerevan.jpeg" />
                    <p className='text-[20px]'>
                    {
                            language === "Հայերեն" ? (
                                <>
                                    Ք․Երևան
                                </>
                            ) : ''
                        }
                        {
                            language === "English" ? (
                                <>
                                    City Yerevan
                                </>
                            ) : ''
                        }
                        {
                            language === "Русский" ? (
                                <>
                                    Город Ереван
                                </>
                            ) : ''
                        }
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Branches