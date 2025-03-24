import logo from '../assets/logo.svg'
import { MdOutlineMailOutline } from "react-icons/md";
import { CiPhone, CiLocationOn } from "react-icons/ci";
import { FaFacebook,FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className='bg-[#2A2A2A] flex flex-col items-center justify-center mt-32'>

            
            <div className="flex flex-row-reverse gap-28 bg-[#2A2A2A] flex-wrap  px-[100px] py-[50px]  mt-[124px] text-right rtl ">
                
                <div className='flex flex-col text-right items-end w-[250px]'>
                    <img src={logo} alt=""  className='h-[50px]'/>
                    <p className='text-gray-500 text-[14px] mt-3'>ما يميزه هو التزامها بالشفافية والمصد اقية بالإضافة إلى تقديم حلول مبتكرة تناسب كافة .التزام الشفافية والمصداقية، بالإضافة إلى تقديم حلول مبتكرة  تناسب كافة الشرائح</p>
                    <div className='icons flex text-xl text-white gap-6 mt-6'>
                    <FaFacebook /><FaTwitter /><MdOutlineMailOutline/>


                    </div>
                </div>
                
                <div>
                    <h2 className='text-white text-xl mb-2'>الرئيسة</h2>
                <h3 className='text-gray-500 text-[16px]  mt-2'>من نحن </h3>
                <h3 className='text-gray-500 text-[16px]  mt-2'>من نحن </h3>
                <h3 className='text-gray-500 text-[16px]  mt-2'>من نحن </h3>
                <h3 className='text-gray-500 text-[16px]  mt-2'> الرئيسة </h3>
                <h3 className='text-gray-500 text-[16px]  mt-2'>من نحن </h3>
               
                </div>
                <div>
                    <h2 className='text-white text-xl mb-2'>الخدمات</h2>
                <h3 className='text-gray-500 text-[16px]  mt-2'>من نحن </h3>
                <h3 className='text-gray-500 text-[16px]  mt-2'>من نحن </h3>
                <h3 className='text-gray-500 text-[16px]  mt-2'>من نحن </h3>
                <h3 className='text-gray-500 text-[16px]  mt-2'> الرئيسة </h3>
                <h3 className='text-gray-500 text-[16px]  mt-2'>من نحن </h3>
               
                </div>
                <div>
                    <h2 className='text-white text-xl mb-2 text-nowrap'>من نحن</h2>
                <h3 className='text-gray-500 text-[16px]  mt-2'>من نحن </h3>
                <h3 className='text-gray-500 text-[16px]  mt-2'>من نحن </h3>
                <h3 className='text-gray-500 text-[16px]  mt-2'>من نحن </h3>
                <h3 className='text-gray-500 text-[16px]  mt-2'> الرئيسة </h3>
                <h3 className='text-gray-500 text-[16px]  mt-2'>من نحن </h3>
               
                </div>
                <div className='text-white text-right  flex flex-col items-end '>
                <h2 className='text-white text-xl mb-6 '> اتصل بنا</h2>
                    <input type="email" placeholder='أدخل الإيميل' className='bg-white outline-none p-2 mb-2  text-gray-500 text-right' />
                  
                    <p className=' mt-6 flex flex-row-reverse gap-2 items-center text-[16px] '> <span className='text-white-500 mr-2'><CiLocationOn  size={30}/> </span> <a href="">أعزاز - حلب - سوريا</a></p>
                    <p className=' mt-6 flex flex-row-reverse gap-2 items-center text-[16px] '> <span className='text-white-500 mr-2'><CiPhone  size={30}/> </span> <a href="">  + 44 745 434 16 71 </a></p>
                    <p className=' mt-6 flex flex-row-reverse gap-2 items-center text-[16px] '> <span className='text-white-500 mr-2'><MdOutlineMailOutline  size={30}/> </span> <a href="">info@mishwarksa.com</a></p>

                </div>
                </div>
            <p className='text-gray-500 my-24 border-t-2 lg:w-[1200px] pt-7 text-center'>حقوق الطبع والنشر  |  محمد الشيخ . 2025</p>
            </div>
            
        </>
  )  
}
export default Footer