import aboutImage from '../assets/aboutImage.svg'
const About = () => {
  return (
      <>
          <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-24 mt-8 '>
              <div className=' text-right'>
              <h1 className="text-[56px] mt-8 font-semibold text-black">
                      من نحن
                  </h1>
                  <p className='mt-4 text-[#23232399] text-xl'>
                  شركة [ ايجار ] تعتبر من أبرز الشركات العقارية التي تتميز بالريادة والاحترافية في السوق. بخبرتها الواسعة وفريقها المتخصص، استطاعت أن تحقق مكانة مرموقة بفضل رؤيتها الطموحة وخدماتها المتميزة التي تلبي احتياجات العملاء بأعلى معايير الجودة.
<br /><br />
ما يميز [ ايجار ] هو التزامها بالشفافية والمصداقية، بالإضافة إلى تقديم حلول مبتكرة تناسب كافة الشرائح. سواء كنت تبحث عن منزل فإن [ ايجار ] ستكون دائمًا الخيار الأمثل.


                  </p>
              </div>
            
              <div className='relative w-[550px] h-[400px] rounded-xl '>
                  <img src={aboutImage} alt="" className='top-4 left-4 w-full h-full absolute z-10' /> 
                  <div className='w-[350px] h-[350px] rounded-tl-xl border-[#24584F]   border-t-8 border-l-8 top-0  absolute '></div>
              </div>

          </div>
          <div className='flex gap-6 text-center mt-20'>
              <div className='flex flex-col gap-4'>
                  <img src="" alt="" />
                  <h2 className='text-[24px] text-[#232323CC] '>الوثوقية والمصداقية</h2>
                  <p className='text-[#23232380] text-[16px] mt-[16px]'> ما يميزه هو التزامها بالشفافية والمصداقية، بالإضافة إلى تقديم حلول مبتكرة تناسب كافة الشرائح. سواء كنت تبحث عن منزل أحلامك</p>
              </div>
              <div className='flex flex-col gap-4'>
                  <img src="" alt="" />
                  <h2 className='text-[24px] text-[#232323CC] '>الحكمة في القرارات </h2>
                  <p className='text-[#23232380] text-[16px] mt-[16px]'> ما يميزه هو التزامها بالشفافية والمصداقية، بالإضافة إلى تقديم حلول مبتكرة تناسب كافة الشرائح. سواء كنت تبحث عن منزل أحلامك</p>
              </div>
              <div className='flex flex-col gap-4'>
                  <img src="" alt="" />
                  <h2 className='text-[24px] text-[#232323CC] '>سرعة الاستجابة والرد </h2>
                  <p className='text-[#23232380] text-[16px] mt-[16px]'> ما يميزه هو التزامها بالشفافية والمصداقية، بالإضافة إلى تقديم حلول مبتكرة تناسب كافة الشرائح. سواء كنت تبحث عن منزل أحلامك</p>
              </div>
          </div>
      </>
  )
}
export default About