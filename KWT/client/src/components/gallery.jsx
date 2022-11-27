import React from "react";

const Gallery = () => {
    const images = [
        {
            img: 'https://wallpaperset.com/w/full/7/3/4/101918.jpg',
        },

        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kt04W_4E8mFHIPicA_wNGFtG-3gLsZFsTA&usqp=CAU'
        },

        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7i511wdJmgPR_54w24CfeRs-pI1H09502cg&usqp=CAU'
        },

        {
            img: 'https://wallpaperset.com/w/full/7/3/4/101918.jpg'
        },

        {
            img: 'https://wallpaperset.com/w/full/7/3/4/101918.jpg'
        },

        {
            img: 'https://wallpaperset.com/w/full/7/3/4/101918.jpg'
        },
    ]
    return (
        <>
            <div className='images'>
                {images.map((image) => {
                    return (
                        <div className='image'
                            style={{
                                backgroundImage: `url(${image.img})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}>
                            <div className="czorny">
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Gallery