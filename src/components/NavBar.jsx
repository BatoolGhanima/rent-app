import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <>
            <nav className='flex text-[18px] flex-row-reverse justify-around  items-center p-4 mb-3'>
                
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="links flex flex-row-reverse gap-8 justify-between text-gray-500 ">
                        <Link to={'/'} className='hover:text-[#24584F] hover:text-xl'>
                            الرئيسة
                        </Link>
                        <Link to={'/cards'} className='hover:text-[#24584F] hover:text-xl'>
                            الخدمات</Link>
                        <Link to={'/about'} className='hover:text-[#24584F] hover:text-xl'>
                            من نحن 
                        </Link>
                        <Link to={'/footer'} className='hover:text-[#24584F] hover:text-xl'> اتصل بنا </Link>
                    </div>
                    <div className="buttons flex flex-row-reverse gap-4 ">
                        <button className=" border border-[#24584F] bg-[#24584F] text-white  px-4 py-2 hover:text-[#24584F] hover:bg-white transition-all ">اطلب خدمة</button>
                        <button className="bg-white border border-[#24584F] hover:bg-[#24584F] text-[#24584F] hover:text-white px-4 py-2 transition-all">تسجيل الدخول</button>

                        </div>
                
            </nav>
        </>
    )
};
export default NavBar;
