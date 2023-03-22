import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img2 from '../assets/slide-2.jpg';
import img1 from '../assets/slide-1.jpg';
import img3 from '../assets/slide-3.jpg';

const Carousel = () => {
    return ( 
      <div> 
        <AwesomeSlider className='h-[80vh] brightness-50 absolute' >
            <div><img className='bg-no-repeat' src={img1} alt="" /></div>
            <div><img className='bg-no-repeat' src={img2} alt="" /></div>
            <div><img className='bg-no-repeat' src={img3} alt="" /></div>
        </AwesomeSlider>
      </div>
     );
}
 
export default Carousel;