import homeImage from '../assets/firstHome.svg'
import Page from './Page';
const FirstSection = () => {
  return (
    <>
      <div className='lg:px-32'>
        

      <div className="first sm:w-[600px] relative md:w-[1000px] m lg:w-[1400px] lg:h-[800px]  ">
        <img src={homeImage} alt="" className='absolut inset-0 w-full h-full object-cover' />
        <div className='sm:h-full md:h-[600px] sm:w-[600px] md:w-[1000px]   lg:w-[1400px] lg:h-[800px] flex flex-col justify-start items-center absolute top-0 left-0  bg-gradient-to-b from-black '>
          <h1 className='md:text-[56px]  mt-8 font-semibold text-white'>
        المكان المناسب لحياتك يبدا من هنا !
          </h1>
          <p className='md:text-[20px] mt-4 text-white'>
          عقارك المثالي لم يعد  بعيدا ... من ايجار  !

          </p>
        
        
     
      <div className=' md:w-[70%] sm:top-[93%] lg:w-[80%] md:top-[92%] absolute justify-center items-center left-[50%] translate-x-[-50%] gap-1 p-2 md:gap-6 flex bg-white md:h-[122px] shadow-lg  px-4'>
        <select name="propertyType" id="propertyType" className='border md:py-4 md:px-2 md:w-[150px] md:h-[56px] text-gray-500 z-10'>
          <option value="">شقق سكنية</option>
          <option value="apartment">شقة</option>
          <option value="villa">فيلا</option>
          <option value="office">مكتب</option>
        </select>
        <select name="location" id="location" className='md:py-4 md:px-2 border  md:w-[150px] md:h-[56px] text-gray-500'>
          <option value="">استشارات عقارية</option>
          <option value="riyadh">في كل مكان</option>
          <option value="jeddah">سوريا</option>
         
        </select>
        <select name="rooms" id="rooms" className='md:py-4 md:px-2 border  md:w-[150px] md:h-[56px] text-gray-500'>
          <option value="">تأجير فيلات</option>
          <option value="1">1 غرفة</option>
          <option value="2">2 غرف</option>
          <option value="3">3 غرف</option>
          <option value="4">4+ غرف</option>
        </select>
        <select name="price" id="price" className='md:py-4 md:px-2 border  md:w-[150px] md:h-[56px] text-gray-500'>
          <option value="">السعر</option>
          <option value="0-1000">500 - 1000 </option>
          <option value="1000-3000">1000 - 3000 </option>
          <option value="3000-5000">3000 - 5000 </option>
          <option value="5000+">5000+ </option>
        </select>
        <button className="bg-[#24584F] border border-[#24584F] hover:bg-white text-white hover:text-green-700 md:px-4 md:py-2"> البحث </button>
      </div>
</div>
</div>
    </div>
  
     <Page />
    </> );
};

export default FirstSection;