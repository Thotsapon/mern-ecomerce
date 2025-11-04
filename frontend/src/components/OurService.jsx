import carair from '../images/car-air.png'
import battery from '../images/battery.png'
import brake from '../images/brake.png'
import oil from '../images/oil.png'
import tire from '../images/tire.png'
import engine from '../images/engine.png'


function ContentDetail() {

  return (
<div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#7A3DF2] mb-5">Our Services</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="bg-white rounded-lg shadow-xl overflow-hidden transition duration-300 ease-in-out transform hover:scale-[1.02]">
            <div className="overflow-hidden">
                <img className="w-full h-48 object-cover" src={carair} alt="General Carpentry"/>
            </div>
            <div className="p-6 text-center border-t-4 border-gray-100">
                <h4 className="text-xl font-semibold mb-3 text-black">Repair temps</h4>
                <p className="text-gray-600 mb-4">Heating and air conditioning (A/C) repairs.</p>
                <a className="text-blue-600 font-medium hover:text-blue-800" href="">
                    Read More<i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden transition duration-300 ease-in-out transform hover:scale-[1.02]">
            <div className="overflow-hidden">
                <img className="w-full h-48 object-cover" src={engine} alt="Furniture Manufacturing"/>
            </div>
            <div className="p-6 text-center border-t-4 border-gray-100">
                <h4 className="text-xl font-semibold mb-3 text-black">Engine dianostic</h4>
                <p className="text-gray-600 mb-4">Engine dianostic service and repair engine.</p>
                <a className="text-blue-600 font-medium hover:text-blue-800" href="">
                    Read More<i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden transition duration-300 ease-in-out transform hover:scale-[1.02]">
            <div className="overflow-hidden">
                <img className="object-scale-down w-full h-48 object-cover" src={oil} alt="Furniture Remodeling"/>
            </div>
            <div className="p-6 text-center border-t-4 border-gray-100">
                <h4 className="text-xl font-semibold mb-3 text-black" >Oil change</h4>
                <p className="text-gray-600 mb-4">oil change service for your good engine health.</p>
                <a className="text-blue-600 font-medium hover:text-blue-800" href="">
                    Read More<i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden transition duration-300 ease-in-out transform hover:scale-[1.02]">
            <div className="overflow-hidden">
                <img className="object-scale-down w-full h-48 object-cover" src={battery} alt="Wooden Floor"/>
            </div>
            <div className="p-6 text-center border-t-4 border-gray-100">
                <h4 className="text-xl font-semibold mb-3 text-black">Battery services</h4>
                <p className="text-gray-600 mb-4 ">Charging and change battery on your car to mobility electronic whole car.</p>
                <a className="text-blue-600 font-medium hover:text-blue-800" href="">
                    Read More<i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden transition duration-300 ease-in-out transform hover:scale-[1.02]">
            <div className="overflow-hidden">
                <img className="object-scale-down w-full h-48 object-cover" src={tire} alt="Wooden Furniture"/>
            </div>
            <div className="p-6 text-center border-t-4 border-gray-100">
                <h4 className="text-xl font-semibold mb-3">Tire change</h4>
                <p className="text-gray-600 mb-4">Tire change service for your good driving car on the road.</p>
                <a className="text-blue-600 font-medium hover:text-blue-800" href="">
                    Read More<i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden transition duration-300 ease-in-out transform hover:scale-[1.02]">
            <div className="overflow-hidden">
                <img className="object-scale-down w-full h-48 object-cover" src={brake} alt="Custom Work"/>
            </div>
            <div className="p-6 text-center border-t-4 border-gray-100">
                <h4 className="text-xl font-semibold mb-3">Brake change</h4>
                <p className="text-gray-600 mb-4">Brake change service get your brake work better when you kick brake on your car.</p>
                <a className="text-blue-600 font-medium hover:text-blue-800" href="">
                    Read More<i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </div>
</div>
   
  )
}

export default ContentDetail
