
import React from 'react'
import Image from 'react-bootstrap/esm/Image';


function TopContent() {
    return (
        <div className='container mt-5'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            <div className='card my-5'>
                <div className='col-12 row'>
                    <div className='col-4'>
                        <Image src='https://static.asianpaints.com/content/dam/asian_paints/sps_overhaul/webp-images/misscall-component/desktopsps-missed-call-component.webp'  />
                    </div>
                    <div className='col-8 my-auto'>
                        <div className='col-md-12 row'>
                            <div className='col-md-6'>
                                <p className=''>To paint your home, please give us a call at.</p>
                            </div>
                            <div className='col-md-5'>
                                <a href="tel:+1800-209-5678">1800-209-5678</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <h4>Why choose us?</h4>
                <h4>Why choose us?</h4>
            </div>
        </div>
    )
}

export default TopContent;