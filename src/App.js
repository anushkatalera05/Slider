
import './App.css';
import image1 from './assests/coffee.jpg'
import image2 from './assests/doppio.jpg'
import image3 from './assests/cappuccino.jpg'
import image4 from './assests/latte.jpg'
import image5 from './assests/manilo.jpg'
import image6 from './assests/cortado.jpg'
import image7 from './assests/blackcoffee.jpg'
import image8 from './assests/flatwhite.jpg'
import image9 from './assests/frappe.jpg'
import image10 from './assests/Americano.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data =[
  {
    name : 'Espresso ',
    img: image1,
    title:'Espresso is brewed by machine, forcing a small amount of nearly boiling water and steam'

  },
  {
    name : 'Doppio ',
    img: image2,
    title:'Doppio - a double shot, extracted using a double handle and basket. '

  },
  {
    name : 'Cappuccino ',
    img: image3,
    title:'Cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk including a layer of milk foam. '

  },
  {
    name : 'Latte ',
    img: image4,
    title:'A latte or caffè latte is a milk coffee that boasts a silky layer of foam as a real highlight to the drink.'

  },
  {
    name : 'Manilo',
    img: image5,
    title:' Popularised due to its strength and taste, without a lot of milk. Similar to a half flat white, but slightly smaller.'

  },
  {
    name : 'Cortado ',
    img: image6,
    title:' Cortado is typically consumed in coffee bars as it is not intended to be taken on the go.'

  },
  {
    name : 'Black Coffee',
    img: image7,
    title:'Black coffee is simply coffeewith nothing added – no cream, no milk, no sweetener.'

  },
  {
    name : 'Flat white',
    img: image8,
    title:'A flat white is a coffee drink consisting of espresso and steamed milk.'

  },
  {
    name : 'Frappe',
    img: image9,
    title:'A coffee frappe is a delicious, iced beverage that has been blended or beaten until it forms a foamy texture. .',

  },
  {
    name : 'Americano',
    img: image10,
    title:'The Americano is another popular type of coffee drink, and its very easy to make! ',

  }
]
function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };
  return (
    <div className='w-3/4 m-auto'>
      <h1 className='text-white flex justify-center mt-10 font-bold text-4xl'>"Savoring the moment, one sip at a time"</h1>
   <div className='mt-20'>
   <Slider {...settings}>
     {data.map((d) =>(
      <div className='bg-white text-black rounded-xl h-[400px]'>
       <div className='flex justify-center items-center mt-4'>
       <img src={d.img} alt='' className='h-44 w-44 '/>
       </div>
       <div className='flex flex-col justify-center items-center gap-4 p-4'>
        <p className='text-xl font-semibold'>{d.name}</p>
        <p>{d.title}</p>
       </div>
      </div>
      
     ))}
     </Slider>
   </div>
    </div>
  );
}

export default App;
