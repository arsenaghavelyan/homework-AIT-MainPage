import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'

function Courses() {
    const { language } = useContext(LanguageContext)

    const courseInfoHAY = [
        {
            id: 1,
            courseName: "Web ծրագրավորում",
            time: "6 ամիս",
            imgUrl: "https://api.aitschool.am/web_course.png"
        },
        {
            id: 2,
            courseName: "UI/UX",
            time: "2 ամիս",
            imgUrl: "https://api.aitschool.am/ui-ux.png"
        },
        {
            id: 3,
            courseName: "SMM",
            time: "2 ամիս",
            imgUrl: "https://api.aitschool.am/smm.png"
        },
        {
            id: 4,
            courseName: "Գրաֆիկ դիզայն",
            time: "2 ամիս",
            imgUrl: "https://api.aitschool.am/graphic-design.png"
        },
        {
            id: 5,
            courseName: "Անգլերեն",
            time: "4 ամիս",
            imgUrl: "https://api.aitschool.am/english.png"
        },
        {
            id: 6,
            courseName: "Համակարգչային գրագիտություն",
            time: "2 ամիս",
            imgUrl: "https://www.pngitem.com/pimgs/m/19-199141_computer-literacy-png-digital-literacy-clipart-transparent-png.png"
        },
        {
            id: 7,
            courseName: "AIT Kids",
            time: "8 ամիս",
            imgUrl: "https://api.aitschool.am/kids.blog.webp"
        },
        {
            id: 8,
            courseName: "LinkedIn Mastery",
            time: "10 դաս",
            imgUrl: "https://api.aitschool.am/free-linkedin-2-5645838-4695696.webp"
        }
    ]

    const courseInfoENG = [
        {
            id: 1,
            courseName: "Web Programming",
            time: "6 month",
            imgUrl: "https://api.aitschool.am/web_course.png"
        },
        {
            id: 2,
            courseName: "UI/UX",
            time: "2 month",
            imgUrl: "https://api.aitschool.am/ui-ux.png"
        },
        {
            id: 3,
            courseName: "SMM",
            time: "2 month",
            imgUrl: "https://api.aitschool.am/smm.png"
        },
        {
            id: 4,
            courseName: "Graphic design",
            time: "2 month",
            imgUrl: "https://api.aitschool.am/graphic-design.png"
        },
        {
            id: 5,
            courseName: "English",
            time: "4 month",
            imgUrl: "https://api.aitschool.am/english.png"
        },
        {
            id: 6,
            courseName: "Computer literacy",
            time: "2 month",
            imgUrl: "https://www.pngitem.com/pimgs/m/19-199141_computer-literacy-png-digital-literacy-clipart-transparent-png.png"
        },
        {
            id: 7,
            courseName: "AIT Kids",
            time: "8 month",
            imgUrl: "https://api.aitschool.am/kids.blog.webp"
        },
        {
            id: 8,
            courseName: "LinkedIn Mastery",
            time: "10 lesson",
            imgUrl: "https://api.aitschool.am/free-linkedin-2-5645838-4695696.webp"
        }
    ]

    const courseInfoRUS = [
        {
            id: 1,
            courseName: "Web программирование",
            time: "6 месяцев",
            imgUrl: "https://api.aitschool.am/web_course.png"
        },
        {
            id: 2,
            courseName: "UI/UX",
            time: "2 месяцев",
            imgUrl: "https://api.aitschool.am/ui-ux.png"
        },
        {
            id: 3,
            courseName: "SMM",
            time: "2 месяцев",
            imgUrl: "https://api.aitschool.am/smm.png"
        },
        {
            id: 4,
            courseName: "Графический дизайн",
            time: "2 месяцев",
            imgUrl: "https://api.aitschool.am/graphic-design.png"
        },
        {
            id: 5,
            courseName: "Английский",
            time: "4 месяцев",
            imgUrl: "https://api.aitschool.am/english.png"
        },
        {
            id: 6,
            courseName: "Компьютерная грамотность",
            time: "2 месяцев",
            imgUrl: "https://www.pngitem.com/pimgs/m/19-199141_computer-literacy-png-digital-literacy-clipart-transparent-png.png"
        },
        {
            id: 7,
            courseName: "AIT Дети",
            time: "8 месяцев",
            imgUrl: "https://api.aitschool.am/kids.blog.webp"
        },
        {
            id: 8,
            courseName: "LinkedIn Mastery",
            time: "10 урок",
            imgUrl: "https://api.aitschool.am/free-linkedin-2-5645838-4695696.webp"
        }
    ]
    return (
        <div>
            <div>
                <h2 className='text-[36px] text-[#0e243c] mt-[200px] text-center'>
                    {
                        language === "Հայերեն" ? (
                            <>
                                Դասընթացներ
                            </>
                        ) : ""
                    }
                    {
                        language === "English" ? (
                            <>
                                Courses
                            </>
                        ) : ""
                    }
                    {
                        language === "Русский" ? (
                            <>
                                Курсы
                            </>
                        ) : ""
                    }
                </h2>
            </div>
            <div className='flex flex-wrap justify-center items-center w-full gap-[62px]  mt-[100px] ' >
                {
                    language === "Հայերեն" ? (
                        <>
                            {
                                courseInfoHAY.map((el) => {
                                    return (
                                        <div key={el.id} className='flex flex-col text-center   object-cover justify-center items-center rounded-[24px] text-[#0e243c] bg-white w-[350px] h-[350px] cursor-pointer'>
                                            <img src={el.imgUrl} className='w-[200px] ' />
                                            <p>{el.courseName}</p>
                                            <p>{el.time}</p>
                                        </div>
                                    )
                                })
                            }
                        </>
                    ) : ''
                }
                {
                    language === "English" ? (
                        <>
                            {
                                courseInfoENG.map((el) => {
                                    return (
                                        <div key={el.id} className='flex flex-col text-center   object-cover justify-center items-center rounded-[24px] text-[#0e243c] bg-white w-[350px] h-[350px] cursor-pointer'>
                                            <img src={el.imgUrl} className='w-[200px] ' />
                                            <p>{el.courseName}</p>
                                            <p>{el.time}</p>
                                        </div>
                                    )
                                })
                            }
                        </>
                    ) : ''
                }
                {
                    language === "Русский" ? (
                        <>
                            {
                                courseInfoRUS.map((el) => {
                                    return (
                                        <div key={el.id} className='flex flex-col text-center   object-cover justify-center items-center rounded-[24px] text-[#0e243c] bg-white w-[350px] h-[350px] cursor-pointer'>
                                            <img src={el.imgUrl} className='w-[200px] ' />
                                            <p>{el.courseName}</p>
                                            <p>{el.time}</p>
                                        </div>
                                    )
                                })
                            }
                        </>
                    ) : ''
                }
            </div>
        </div>
    )
}

export default Courses