import About from "./About"
import Cards from "./Cards"
import Footer from "./Footer"

const Page = () => {
  return (
      <>
          <>
              <div className="flex flex-col justify-center items-center lg:px-48">
                <Cards></Cards>
              <About></About>   
              </div>
             
              <Footer></Footer>
          
          </>
      </>
  )
}
export default Page