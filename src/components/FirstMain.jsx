import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'

function FirstMain() {
    const { language } = useContext(LanguageContext)
    return (
        <div>
            <div className='w-full flex items-center justify-evenly'>
                <div className='ml-[150px] flex flex-col  '>
                    <h1 className='h1-teg'>Ararat</h1>
                    <p id="p-tag" className='text-[108px]'>IT School</p>
                    <p className='font-sans text-[20px] text-[#0e243c]'>
                        {
                            language === "Հայերեն" ? (
                                <>
                                    Բացահայտիր IT անսահման հնարավորությունները
                                </>
                            ) : ''
                        }
                        {
                            language === "English" ? (
                                <>
                                    Discover the endless possibilities of IT
                                </>
                            ) : ''
                        }
                        {
                            language === "Русский" ? (
                                <>
                                    Откройте для себя безграничные возможности IT
                                </>
                            ) : ''
                        }
                    </p>
                    <button className='button'>
                        {
                            language === "Հայերեն" ? (
                                <>
                                    Դասընթացներ
                                </>
                            ) : ''
                        }
                        {
                            language === "English" ? (
                                <>
                                    Courses
                                </>
                            ) : ''
                        }
                        {
                            language === "Русский" ? (
                                <>
                                    Курсы
                                </>
                            ) : ''
                        }
                    </button>
                </div>
                <div>
                    <img src="https://aitschool.am/images/main_image.png" className='w-[550px]' />
                </div>
            </div>
        </div>
    )
}

export default FirstMain