import React from 'react'
import { Image } from 'react-bootstrap'

function ThirdContent() {
    return (
        <div className='my-4'>
            <div className='px-4 py-2'>
                <h3>We help you with</h3>
            </div>
            <div className='col-md-12 d-flex justify-content-between'>
                <div className='col-md-3 col-sm-4 px-4'>
                    <div className=''>
                        <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-safe-painting-offerings-texture-asian-paints.webp' className='' fluid />
                    </div>
                    <h5>Wall Textures</h5>
                    <p> High-quality textured designs to get a modern facelift for your homes and other spaces.</p>
                </div>
                <div className='col-md-3 col-sm-4 px-4'>
                <div className=''>
                    <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/wallpaper-a-sps.webp' className='' fluid />
                    </div>
                    <h5>Wallpapers</h5>
                    <p>Designer wallpapers with attractive patterns which works wonders in elevating house walls</p>
                </div>
                <div className='col-md-3 col-sm-4 px-4'>
                <div className=''>
                    <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/sps-offerings-waterproofing-asian-paints-new.webp' className='' fluid />
                    </div>
                    <h5>Waterproofing</h5>
                    <p>Devised modern waterproofing techniques to make your home water resistant for years to come.</p>
                </div>
                <div className='col-md-3 col-sm-4 px-4'>
                <div className=''>
                    <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-safe-painting-offerings-wood-finishes-asian-paints.webp' className='' fluid />
                    </div>
                    <h5>Wood Finishes</h5>
                    <p>Preserve the beauty of your wood with a touch of style and luxury that goes hand in hand.</p>
                </div>
            </div>
        </div>
    )
}

export default ThirdContent
