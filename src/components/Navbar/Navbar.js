import React from 'react'
import './Nabvar.css'

export const Navbar = () => {
    const imagesArray = [
        {
            id: 0,
            image: 'https://seeklogo.com/images/M/mugiwara-logo-303FD55C54-seeklogo.com.png',
            text:'Luffy'
        },
        {
            id: 1,
            image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/343bcb53-19ba-406f-bde1-93de701450af/d8fq8fa-12c8b6ae-617f-4cfd-84bc-683fee72b3f0.png',
            text:'Thousand Sunny'

        },
        {
            id: 2,
            image: 'https://icons.iconarchive.com/icons/crountch/one-piece-jolly-roger/256/Zoro-icon.png',
            text:'Zoro'

        },
        {
            id: 3,
            image: 'https://cdn.icon-icons.com/icons2/1029/PNG/256/Nami_icon-icons.com_76120.png',
            text:'Nami'

        },
        {
            id: 4,
            image: 'https://cdn.icon-icons.com/icons2/1029/PNG/256/Ussop_icon-icons.com_76124.png',
            text:'Ussop'
            
        },
        {
            id: 8,
            image: 'https://cdn.icon-icons.com/icons2/1029/PNG/256/Sanji_icon-icons.com_76122.png',
            text:'Sanji'

        },
        {
            id: 5,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1gjgGXs6jIETEo38kDQ3XZ0j_FVMSc5OlD1GADugy_nHj8_3ReFJCF4wRuyLJJlQGXI&usqp=CAU',
            text:'Chopper'

        },
        {
            id: 6,
            image: 'https://i.pinimg.com/originals/f1/de/70/f1de707180b24852f7ad80f199d6034a.png',
            text:'Nico Robin'

        },
        {
            id: 7,
            image: 'https://www.nicepng.com/png/full/54-548128_one-piece-franky-jolly-roger.png',
            text:'Franky'

        },
        {
            id: 9,
            image: 'https://icons.iconarchive.com/icons/crountch/one-piece-jolly-roger/256/Brook-icon.png',
            text:'Brook'

        },
        {
            id: 10,
            image: 'https://preview.redd.it/8oumpy0kkuq61.png?auto=webp&s=0c40edb5902ea9b3948d00697e73dbca578c15e4',
            text:'Jinbei'

        },
    ]
    return (
        <div className='flex flex-col justify-center items-center w-auto lg:h-56 bg-red-700 '>
            <div className='flex flex-col justify-center items-center w-3/6 sm:w-2/12 '>
                <img src='https://occ-0-999-2164.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABa4UAEx4vGcwwHQGJ4rLB3zaYiVdZZ7lgSdgv8OAWEb34BGXEFbNumHPKAupfLMmOiOD-DIsXy5DRklM_Qk9xwIape-S7O0u67l4BYO9Ghj-.png?r=74a'
                    className='w-max'
                />
            </div>
            <div className='sm:grid grid-cols-8 flex-col lg:flex  lg:flex-row flex-wrap'>
                {
                    imagesArray.map((imagen) => (
                        <div className='flex flex-col items-center my-4 ' key={imagen.id}>
                            <div className='flex items-center justify-center mx-4 bg-white w-14 h-14 rounded-3xl  '>
                                <img src={imagen.image} className='w-10 object-cover opacity-75' />
                            </div>
                            <span className='text-white text-sm text-slate-200 italic'>{imagen.text}</span>
                        </div>

                    ))
                }
            </div>

        </div>
    )
}
