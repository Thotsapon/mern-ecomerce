import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import ProfileDropdown from '../components/ProfileDropdown'

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	return (
		<header className='fixed top-0 left-0 w-full bg-[#FFFFFF] bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-emerald-800'>
			<div className='container mx-auto px-4 py-3'>
				<div className='flex flex-wrap justify-between items-center'>
					<Link to='/' className='text-2xl font-bold text-[#7A3DF2] items-center space-x-2 flex'>
						Car shop
					</Link>

					<nav className='flex flex-wrap items-center gap-4'>
						<Link
							to={"/"}
							className='text-[#7A3DF2] hover:text-[#3F3DF2] transition duration-300
					 ease-in-out'
						>
							Home
						</Link>
						{user && (
							<Link
								to={"/cart"}
								className='relative group text-[#7A3DF2] hover:text-[#3F3DF2] transition duration-300 
							ease-in-out'
							>
								<ShoppingCart className='inline-block mr-1 group-hover:text-[#3F3DF2]' size={20} />
								<span className='hidden sm:inline'>Cart</span>
								{cart.length > 0 && (
									<span
										className='absolute -top-2 -left-2 bg-[#3F3DF2] text-white rounded-full px-2 py-0.5 
									text-xs group-hover:bg-[#3D74F2] transition duration-300 ease-in-out'
									>
										{cart.length}
									</span>
								)}
							</Link>
						)}
						{isAdmin && (
							<Link
								className='bg-[#7A3DF2] hover:bg-[#3F3DF2] text-white px-3 py-1 rounded-md font-medium
								 transition duration-300 ease-in-out flex items-center'
								to={"/secret-dashboard"}
							>
								<Lock className='inline-block mr-1' size={18} />
								<span className='hidden sm:inline'>Dashboard</span>
							</Link>
						)}

						{user ? (
							<button
								className='bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 
						rounded-md flex items-center transition duration-300 ease-in-out'
								onClick={logout}
							>
								<LogOut size={18} />
								<span className='hidden sm:inline ml-2'>Log Out</span>
							</button>
						) : (
							<>
								<Link
									to={"/signup"}
									className='bg-[#7A3DF2] hover:bg-[#3F3DF2] text-white py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out'
								>
									<UserPlus className='mr-2' size={18} />
									Sign Up
								</Link>
								<Link
									to={"/login"}
									className='bg-[#7A3DF1] hover:bg-[#3F3DF2] text-white py-2 px-4 
									rounded-md flex items-center transition duration-300 ease-in-out'
								>
									<LogIn className='mr-2' size={18} />
									Login
								</Link>
							</>
						)}
						{user &&  (
							<>
					{/*
							<div class="relative">
							
							<a href="#" class="flex items-center p-3 text-gray-800 hover:bg-gray-100 rounded-lg" onclick="toggleDropdown(event)">
								
								<img class="w-8 h-8 rounded-full mr-2 border" src="img/user.jpg" alt="User Profile" />
								
								<span class="hidden lg:inline-flex font-medium  text-black">
									{user.name}
								</span>
							</a>
							
							<div id="userDropdownMenu" class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden z-50">
								
								<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
									My Profile
								</a>
								<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
									Settings
								</a>
								<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
									Log Out
								</a>
							</div>
						</div>
					*/}
					<ProfileDropdown user={user}/>
						</>)}
					</nav>
				</div>
			</div>
		</header>
	);
};
export default Navbar;
