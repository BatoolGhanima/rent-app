import secondHome from '../assets/secondHome1.svg';
import secondHome1 from '../assets/secondHome2.svg';
import secondHome2 from '../assets/secondHome3.svg';
import secondHome4 from '../assets/secondHome4.svg';
import secondHome5 from '../assets/secondHome5.svg';
import secondHome6 from '../assets/secondHome6.svg';
import vector from '../assets/Vector.svg'
import Vector2 from '../assets/Vector (2).svg'
import Vector3 from '../assets/Vector (1).svg'
const Cards = () => {
    const products = [
        {
          id: 1,
          image: secondHome,
          title: "الشقة السكنية المثالية",
          price: "$250.00",
          description: "البيت الأزرق الساطع من أجمل البيوت في البلاد حيث يمتاز بالتصميم الرائع."
        },
        {
            id: 2,
            image: secondHome1,
            title: "البيت الأزرق الساطع",
            price: "$250.00",
            description: "البيت الأزرق الساطع من أجمل البيوت في البلاد حيث يمتاز بالتصميم الرائع."
        },
        {
            id: 3,
            image: secondHome2,
            title: "الشقة السكنية المثالية",
            price: "$250.00",
            description: "البيت الأزرق الساطع من أجمل البيوت في البلاد حيث يمتاز بالتصميم الرائع."
        },
        {
            id: 4,
            image: secondHome4,
            title: "الشقة السكنية المثالية",
            price: "$250.00",
            description: "البيت الأزرق الساطع من أجمل البيوت في البلاد حيث يمتاز بالتصميم الرائع."
        },
        {
            id: 5,
            image: secondHome5,
            title: "الشقة السكنية المثالية",
            price: "$250.00",
            description: "البيت الأزرق الساطع من أجمل البيوت في البلاد حيث يمتاز بالتصميم الرائع."
        },
        {
            id: 6,
            image: secondHome6,
            title: "الشقة السكنية المثالية",
            price: "$250.00",
            description: "البيت الأزرق الساطع من أجمل البيوت في البلاد حيث يمتاز بالتصميم الرائع."
          },
    ];

    return (
        <>
            <div className='lg:px-48'>

           
            <div className='flex justify-center items-center flex-col mt-8 '>
                <h1 className="text-[48px] mt-8 font-semibold text-black">
                جميع العقارات                </h1>
                <p className="text-[20px] mt-4 text-gray-500">
                اختر من بين مجموعة من اتواع العقارات لتناسب احتياجك ونمط حياتك.                </p>
            </div>
            <div className='<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
'>
                

            {products.map((product) => (
                <div key={product.id} className="flex flex-col  w-[384px] h-[430px] p-4 m-4 rounded-lg shadow-lg relative hover:translate-y-[-10px] transition-all hover:shadow-xl  ">
                    <img src={product.image} alt={product.title} className="w-full h-[240px] object-cover rounded-md" />
                    <div className="p-2 text-right ">
                        <div className='flex justify-around gap-4 items-center'>
                        <span className="text-lg font-bold text-green-600">{product.price}</span>

                                 <h2 className="text-xl text-nowrap  font-semibold">{product.title}</h2>
                        </div>
                        <button className='w-8 h-8 pt-1 bg-gray-400 rounded-[50%] absolute top-8 right-8 text-center'> 🤍 </button>

                        <p className="text-sm text-right text-[#23232366] mt-2">{product.description}</p>
 
                        <div className="mt-4 flex justify-between">
                        <button className="px-2 py-1 bg-white text-[#24584F] border border-[#24584F] rounded-md hover:text-white hover:bg-[#24584F]">احجز الآن</button>

                            <button className=" flex  gap-2 justify-center items-center  px-3 py-1 text-gray-400 rounded-md"> 6 <img src={Vector2} alt="" /> </button>
                            <button className=" flex gap-2 justify-center items-center  px-3 py-1 text-gray-400 rounded-md"> 6 <img src={Vector3} alt="" /></button>
                            <button className=" flex gap-2 justify-center items-center  px-3 py-1 text-gray-400 rounded-md"> 3 <img src={vector} alt="" /></button>
                        </div>
                    </div>
                </div>
            ))}

            </div>
            <button className="m-4 px-2 py-1 align-middle w-32 bg-white text-[#24584F] border border-[#24584F]  hover:bg-[#24584F] hover:text-white transition-all"> عرض الكل ↗ </button>
            </div>
        </>
    );
};

export default Cards;
