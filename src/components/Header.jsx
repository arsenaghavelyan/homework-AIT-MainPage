import React from 'react'
import { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

function Header() {

    function languageFn(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const lang = formData.get("langSelect")
        // console.log(lang);
        setLanguage(lang)
    }
    const { language, setLanguage } = useContext(LanguageContext)
    return (
        <div className='flex  justify-evenly  items-center p-5'>
            <div className='flex justify-start cursor-pointer'>
                <img src="https://aitschool.am/images/Ait-Logo.svg" className='ml-6' />
            </div>
            <div>
                <ul className='col-lg-8 col-md-10 flex items-end cursor-pointer'>
                    {
                        language === "Հայերեն" ? (
                            <>
                                <li>Գլխավոր</li>
                                <li>Դասընթացներ</li>
                                <li>Գրանցում</li>
                                <li>Մեր մասին</li>
                                <li>Բլոգ</li>
                                <li>Կապ</li>
                            </>) : ""
                    }
                    {
                        language === "English" ? (
                            <>
                                <li>Main</li>
                                <li>Courses</li>
                                <li>Registration</li>
                                <li>About us</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </>) : ""
                    }
                    {
                        language === "Русский" ? (
                            <>
                                <li>Основной</li>
                                <li>Курсы</li>
                                <li>Регистрация</li>
                                <li>О нас</li>
                                <li>Блог</li>
                                <li>Контакт</li>
                            </>) : ""
                    }
                </ul>
            </div>
            <form onSubmit={languageFn}>
                <select name="langSelect" id="langSelect" className='bg-gradient-to-r from-blue-300 to-green-300 rounded-full cursor-pointer shadow-sm p-2 border-none font-light text-base leading-normal text-blue-900 my-5 mx-5 w-50'>
                    <option value="Հայերեն">Հայերեն</option>
                    <option value="English">English</option>
                    <option value="Русский">Русский</option>
                </select>
                <button type='submit' className='bg-gradient-to-r from-green-300 to-blue-300 rounded-full cursor-pointer shadow-sm p-2 border-none font-light text-base leading-normal text-blue-900 my-5 mx-5 w-50'>
                    {
                        language === "Հայերեն" ? (
                            <>
                                Սեխմել փոխելու համար
                            </>
                        ) : ""
                    }
                    {
                        language === "English" ? (
                            <>
                                Click to change
                            </>
                        ) : ""
                    }
                    {
                        language === "Русский" ? (
                            <>
                                Нажмите, чтобы изменить
                            </>
                        ) : ""
                    }
                </button>
            </form>
        </div>
    )
}

export default Header