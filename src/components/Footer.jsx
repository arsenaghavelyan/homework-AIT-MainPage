import React from 'react'

function Footer() {

    const contactInfoFooter = [
        {
            id: 1,
            imgURL: "https://aitschool.am/images/Phone.svg",
            tagInfo: "+374(93)-67-69-66"
        },
        {
            id: 2,
            imgURL: "https://aitschool.am/images/Mail.svg",
            tagInfo: "info@aitschool.am"
        },
        {
            id: 3,
            imgURL: "https://aitschool.am/images/Instagram.svg",
            tagInfo: "ararat_itcenter"
        },
        {
            id: 4,
            imgURL: "https://aitschool.am/images/FacebookIcon.svg",
            tagInfo: "Ararat IT Center"
        },
        {
            id: 5,
            imgURL: "https://aitschool.am/images/LinkedinIcon.svg",
            tagInfo: "Ararat IT Center"
        },
    ]
    return (
        <div className='w-[75vw] h-[15vh] mt-[50px]  bg-white rounded-[24px] m-auto flex justify-evenly '>
            <div className='flex  justify-evenly items-center w-full'>
                {
                    contactInfoFooter.map((el) => {
                        return (
                            <div key={el.id} className='flex cursor-pointer '>
                                <img src={el.imgURL} />
                                <h2 className='text-[#0e243c] ml-[10px]'>{el.tagInfo}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Footer