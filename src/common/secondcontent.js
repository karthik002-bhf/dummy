import React from 'react'
import { Image } from 'react-bootstrap'

function Secondcontent() {
    return (
        <div>
            <div className='d-flex justify-content-center'>
                <h4>Why choose us?</h4>
            </div>
            <div className='col-md-12 row'>
                <div className='col-md-2 col-sm-4 col-6'>
                    <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-trained-professional-icon-asian-paints.webp' className='' fluid  />
                    <p>Trained Professional</p>
                </div>
                <div className='col-md-2 col-sm-4 col-6'>
                    <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-technical-site-evaluation-icon-asian-paints.webp' className='' fluid  />
                    <p>Technical site evaluation</p>
                </div>
                <div className='col-md-2 col-sm-4 col-6'>
                    <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-personalized-colour-consultation-icon-asian-paints.webp' className='' fluid  />
                    <p>Personalized Colour Consultation</p>
                </div>
                <div className='col-md-2 col-sm-4 col-6'>
                    <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-stringent-safety-protocol-icon-asian-paints.webp' className='' fluid  />
                    <p>Stringent Safety Protocol</p>
                </div>
                <div className='col-md-2 col-sm-4 col-6'>
                    <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-supervised-painting-icon-asian-paints.webp' className='' fluid  />
                    <p>Supervised Painting</p>
                </div>
                <div className='col-md-2 col-sm-4 col-6'>
                    <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-mechanized-tools-icon-asian-paints.webp' className='' fluid  />
                    <p>Mechanized Tools</p>
                </div>
            </div>
        </div>
    )
}

export default Secondcontent
