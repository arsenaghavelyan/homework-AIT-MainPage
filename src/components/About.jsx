import React, { useContext } from 'react'
import LanguageContext from '../contexts/LanguageContext'

function About() {
    const { language } = useContext(LanguageContext)

    return (
        <div >
            <div>
                <h2 className='text-[36px] text-[#0e243c] mt-[200px] text-center'>
                    {
                        language === "Հայերեն" ? (
                            <>
                                Ինչ կտա ձեզ AIT-ին
                            </>
                        ) : ''
                    }
                    {
                        language === "English" ? (
                            <>
                                What will AIT get you?
                            </>
                        ) : ''
                    }
                    {
                        language === "Русский" ? (
                            <>
                                Что даст вам AIT?
                            </>
                        ) : ''
                    }
                </h2>
            </div>
            <div className='flex'>
                <div className='w-[50vw] flex flex-col justify-evenly items-center'>
                    <div className='bg-white p-[30px] flex justify-evenly items-center w-[40vw] h-[20vh] rounded-[15px]'>
                        <div>
                            <p className='text-[110px] text-[#1D5B79] font-bold'>01</p>
                        </div>
                        <div className='w-[350px]'>
                            <h2 className='text-[30px] text-[#0e243c]'>
                                {
                                    language === "Հայերեն" ? (
                                        <>
                                            Կրթություն
                                        </>
                                    ) : ''
                                }
                                {
                                    language === "English" ? (
                                        <>
                                            Education
                                        </>
                                    ) : ''
                                }
                                {
                                    language === "Русский" ? (
                                        <>
                                            Образование
                                        </>
                                    ) : ''
                                }
                            </h2>
                            <p className='text-[#1D5B79]'>
                                {
                                    language === "Հայերեն" ? (
                                        <>
                                            Մասնակցի՛ր 10 ամսյա դասընթացին և ձեռք բեր ծրագրավորման հիմնարար գիտելիքներ:
                                            Ինչպես նաև կարող եք ուսանել Graphic Design, UI/UX Design, SMM և Անգլերեն
                                        </>
                                    ) : ''
                                }
                                {
                                    language === "English" ? (
                                        <>
                                            Take the 10-month course and gain basic programming knowledge.
                                            You can also study Graphic Design, UI/UX Design, SMM and English
                                        </>
                                    ) : ''
                                }
                                {
                                    language === "Русский" ? (
                                        <>
                                            Пройдите 10-месячный курс и получите базовые знания в области программирования.
                                            Вы также можете изучать графический дизайн, дизайн UI / UX, SMM и английский язык.
                                        </>
                                    ) : ''
                                }
                            </p>
                        </div>
                    </div>
                    <div className='bg-white p-[30px] flex justify-evenly items-center w-[40vw] h-[20vh] rounded-[15px] ml-[100px]'>
                        <div>
                            <p className='text-[110px] text-[#1D5B79] font-bold'>02</p>
                        </div>
                        <div className='w-[350px]'>
                            <h2 className='text-[30px] text-[#0e243c]'>
                                {
                                    language === "Հայերեն" ? (
                                        <>
                                            Պրակտիկա
                                        </>
                                    ) : ""
                                }
                                {
                                    language === "English" ? (
                                        <>
                                            Practice
                                        </>
                                    ) : ""
                                }
                                {
                                    language === "Русский" ? (
                                        <>
                                            Упражняться
                                        </>
                                    ) : ""
                                }
                            </h2>
                            <p className='text-[#1D5B79]'>
                                {
                                    language === "Հայերեն" ? (
                                        <>
                                            Դասընթացի ավարտից հետո անցեք փորձաշրջան դպրոցին կից գործող
                                            ծրագրավորման ընկերությունում։ Կիրառի՛ր գիտելիքներդ՝ աշխատելով
                                            իրական նախագծերի վրա։
                                        </>
                                    ) : ""
                                }
                                {
                                    language === "English" ? (
                                        <>
                                            After completing the course, go on a probationary period at a school-affiliated institution
                                            in a programming company. Apply your knowledge by working
                                            on real projects.
                                        </>
                                    ) : ""
                                }
                                {
                                    language === "Русский" ? (
                                        <>
                                            После окончания курса пройти испытательный срок в учебном заведении при школе
                                            в компании программистов. Применяйте свои знания, работая
                                            на реальных проектах.
                                        </>
                                    ) : ""
                                }
                            </p>
                        </div>
                    </div>
                    <div className='bg-white p-[30px] flex justify-evenly items-center w-[40vw] h-[20vh] rounded-[15px]'>
                        <div>
                            <p className='text-[110px] text-[#1D5B79] font-bold'>03</p>
                        </div>
                        <div className='w-[350px]'>
                            <h2 className='text-[30px] text-[#0e243c]'>
                                {
                                    language === "Հայերեն" ? (
                                        <>
                                            Աշխատանք
                                        </>
                                    ) : ''
                                }
                                {
                                    language === "English" ? (
                                        <>
                                            Work
                                        </>
                                    ) : ''
                                }
                                {
                                    language === "Русский" ? (
                                        <>
                                            Работа
                                        </>
                                    ) : ''
                                }
                            </h2>
                            <p className='text-[#1D5B79]'>
                                {
                                    language === "Հայերեն" ? (
                                        <>
                                            Ստացի՛ր մեր թիմին միանալու հնարավորություն։ Մեր ուսանողները կազմում են մեր թիմի 80%ը։
                                        </>
                                    ) : ""
                                }
                                {
                                    language === "English" ? (
                                        <>
                                            Get a chance to join our team. Our students make up 80% of our team.
                                        </>
                                    ) : ""
                                }
                                {
                                    language === "Русский" ? (
                                        <>
                                            Получите шанс присоединиться к нашей команде. Наши студенты составляют 80% нашей команды.
                                        </>
                                    ) : ""
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://aitschool.am/images/globus.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About