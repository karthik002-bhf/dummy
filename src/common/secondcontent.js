import React from 'react'
import { Image } from 'react-bootstrap'

function Secondcontent() {
    return (
        <div>
            <div className='text-center'>
                <h4>Why choose us?</h4>
            </div>
            <div className='bg-light py-4'>
                <div className='container'>
                    <div className='col-md-12 row px-0 mx-0 text-center'>
                        <div className='col-md-2 col-sm-4 col-6'>
                            <div className='mx-auto' style={{ width: "120px", height: "120px", overflow: "hidden", borderRadius: "100%", }}>
                                <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-trained-professional-icon-asian-paints.webp' className='' fluid />
                            </div>
                            <p>Trained Professional</p>
                        </div>
                        <div className='col-md-2 col-sm-4 col-6'>
                            <div className='mx-auto' style={{ width: "120px", height: "120px", overflow: "hidden", borderRadius: "100%", }}>
                                <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-technical-site-evaluation-icon-asian-paints.webp' className='' fluid />
                            </div>
                            <p>Technical site evaluation</p>
                        </div>
                        <div className='col-md-2 col-sm-4 col-6'>
                            <div className='mx-auto' style={{ width: "120px", height: "120px", overflow: "hidden", borderRadius: "100%", }}>
                                <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-personalized-colour-consultation-icon-asian-paints.webp' className='' fluid />
                            </div>
                            <p>Personalized Colour Consultation</p>
                        </div>
                        <div className='col-md-2 col-sm-4 col-6'>
                            <div className='mx-auto' style={{ width: "120px", height: "120px", overflow: "hidden", borderRadius: "100%", }}>
                                <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-stringent-safety-protocol-icon-asian-paints.webp' className='' fluid />
                            </div>
                            <p>Stringent Safety Protocol</p>
                        </div>
                        <div className='col-md-2 col-sm-4 col-6'>
                            <div className='mx-auto' style={{ width: "120px", height: "120px", overflow: "hidden", borderRadius: "100%", }}>
                                <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-supervised-painting-icon-asian-paints.webp' className='' fluid />
                            </div>
                            <p>Supervised Painting</p>
                        </div>
                        <div className='col-md-2 col-sm-4 col-6'>
                            <div className='mx-auto' style={{ width: "120px", height: "120px", overflow: "hidden", borderRadius: "100%", }}>
                                <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/services/services-sps-why-chose-our-services-mechanized-tools-icon-asian-paints.webp' className='' fluid />
                            </div>
                            <p>Mechanized Tools</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Secondcontent
