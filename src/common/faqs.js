import React from 'react'

function Faqs() {
    function showStuff(id) {
        if (document.getElementById(id).style.display === "block") {
            document.getElementById(id).style.display = "none";
        } else {
            document.getElementById(id).style.display = "block";
        }
    }
    return (
        <div >
            <div className='my-4'>
                <h3 className='d-flex justify-content-center'>FAQ’s</h3>
            </div>
            <div className='my-2'>
                <div className='bg-gray border border-1 p-2' onClick={() => showStuff("show1")}>What is Lorem Ipsum?</div>
                <div id="show1" className='bg-light border border-1 p-2' style={{ display: "none" }}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className='my-2'>
                <div className='bg-gray border border-1 p-2' onClick={() => showStuff("show2")}>Where does it come from?</div>
                <div id="show2" className='bg-light border border-1 p-2' style={{ display: "none" }}>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                </div>
            </div>
            <div className='my-2'>
                <div className='bg-gray border border-1 p-2' onClick={() => showStuff("show3")}>Why do we use it?</div>
                <div id="show3" className='bg-light border border-1 p-2' style={{ display: "none" }}>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </div>
            <div className='my-2'>
                <div className='bg-gray border border-1 p-2' onClick={() => showStuff("show4")}>Where can I get some?</div>
                <div id="show4" className='bg-light border border-1 p-2' style={{ display: "none" }}>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
            </div>
            <div className='my-2'>
                <div className='bg-gray border border-1 p-2' onClick={() => showStuff("show5")}>Where does it come from?</div>
                <div id="show5" className='bg-light border border-1 p-2' style={{ display: "none" }}>
                    <p>Integer non facilisis nunc. Aenean commodo ante at libero semper bibendum. Donec elementum et arcu quis sodales. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget volutpat nunc, eu vulputate ante. Etiam blandit justo non nisi eleifend dignissim. Etiam ante nibh, porttitor ut turpis vitae, ultricies tempor orci. Curabitur fringilla, ante at posuere posuere, mauris ex cursus magna, non elementum neque velit et diam. Nam leo eros, fringilla nec vehicula eget, interdum vel nibh. In sit amet ultricies ligula. Morbi id ullamcorper risus, vitae cursus tortor.</p>
                    <p> Ut ut turpis ac purus scelerisque imperdiet quis mattis dui. Ut mollis faucibus blandit. Curabitur rutrum ex at quam volutpat luctus vel sit amet nibh. Aenean semper ultricies hendrerit. Aenean accumsan venenatis est, nec laoreet tortor luctus sed. Pellentesque interdum, leo eget tempus sodales, orci diam porta nunc, id suscipit diam mi non neque. Praesent ullamcorper ultrices urna, scelerisque pellentesque enim convallis in. Morbi luctus a diam ac dictum. Nam nec orci in elit molestie vulputate. Nullam pulvinar pharetra magna, quis lacinia tellus porttitor ac.</p>
                </div>
            </div>
        </div>
    )
}

export default Faqs
