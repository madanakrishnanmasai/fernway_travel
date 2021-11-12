import './Page2.css';

export const Page3 = () => {
    return (
        <div className="pageTwo">

            <div className="pageTwoPartOne">
                <img src="https://www.linkpicture.com/q/Frame-153.png" type="image"/>
            </div>

            <div className="pageTwoPartTwo">
            <p className="pageTwoParaOne">Choose the Travel Plan that suits you or create one from scratch with us.</p>
            <div className='pageTwoFlex'>
                <div>Skip</div>
                    <div className='pageTwoSliderDiv'>
                        <div className='sliderDot'></div> 
                        <div className='sliderDotFilled'></div> 
                        <div className='sliderDot'></div> 
                    </div>
                <div>Next</div>
                </div>
            </div>
        </div>
    )
}
