import React from 'react'
import { Link } from 'react-router-dom'
import { menuItems } from './NavMenu'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
	return (
		<nav className="border-gray-200 bg-gray-900 px-2.5 py-2.5 shadow-sm dark:bg-slate-800 sm:px-4 block print:hidden">
			<div className="container mx-0 flex max-w-full flex-wrap items-center lg:mx-auto">
				<div className="flex items-center">
					<a href="#" className="flex items-center outline-none">
						<img src="assets/images/logo-sm.png" alt className="h-6" />
						<img src="assets/images/logo.png" alt className="ml-2 hidden xl:block mt-1" />
					</a>
				</div>
				<div className="order-2 hidden w-full items-center justify-between md:order-1 md:ml-5 md:flex md:w-auto" id="mobile-menu-2">
					<ul className="font-body mt-4 flex flex-col font-medium md:mt-0 md:flex-row md:text-sm md:font-medium space-x-0 md:space-x-4 lg:space-x-6 xl:space-x-8 navbar">

						{menuItems.map((Menu, index) => {
							if (Menu.path) {
								return <li>

									<Link to={Menu.path}> <button key={index} id={"Navtitle" + index} className="flex w-full items-center border-b border-gray-800 py-2 px-3 font-medium md:border-0 md:p-0">
										<i className={"mr-1 pb-1 text-lg " + Menu.icon} /> {Menu.title}
									</button>
									</Link>
								</li>
							}
							else {
								return (
									<li className="dropdown">
										<button key={index} id={"Navtitle" + index} data-dropdown-toggle={"navApps" + index} className="dropdown-toggle flex w-full items-center border-b border-gray-800 py-2 px-3 font-medium md:border-0 md:p-0">
											<i className={"mr-1 pb-1 text-lg " + Menu.icon} /> {Menu.title}
											<i className="ti ti-chevron-down ml-auto lg:ml-1" />
										</button>

										<div id={"navApps" + index} className="dropdown-menu z-10 my-1 hidden w-full list-none divide-y divide-gray-100 rounded bg-gray-800 md:bg-white text-base shadow dark:divide-gray-600 border border-slate-700 md:border-white dark:border-slate-700/50 dark:bg-gray-900 md:w-44 dropdown-menu">
											<ul className="py-1">
												{Menu?.dropdown.map(subMenu => {
													return <li>
														<Link to={subMenu.path} className="nav-link  dark:hover:bg-slate-800/70">{subMenu.label}</Link>
													</li>

												})}

											</ul>
										</div>
									</li>)
							}
						})}
					</ul>
				</div>
				<div className="order-1 ml-auto flex items-center md:order-2">
					<div className="relative mr-2 hidden lg:mr-4 lg:block">
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<i className="ti ti-search text-gray-400 z-10" />
						</div>
						<input type="text" id="email-adress-icon" className="block w-full rounded-lg border border-gray-700 bg-gray-900 p-2 pl-10 text-gray-300 outline-none focus:border-gray-700 focus:ring-gray-700 dark:bg-slate-800 sm:text-sm" placeholder="Search..." />
					</div>
					<div className="mr-2 lg:mr-4">
						{/* <button id="toggle-theme" className="flex rounded-full md:mr-0 relative">

							<i className="ti ti-sun top-icon" />
						</button> */}
						<ThemeToggle/>
					</div>
					<div className="mr-2 lg:mr-4 dropdown relative">
						<button type="button" className="dropdown-toggle flex rounded-full md:mr-0" id="Notifications" aria-expanded="false" data-dropdown-toggle="navNotifications">
							<i className="ti ti-bell text-2xl text-gray-400" />
						</button>
						<div className="dropdown-menu dropdown-menu-right z-50 my-1 hidden w-64 list-none divide-y h-52 divide-gray-100 rounded border-slate-700 md:border-white text-base shadow dark:divide-gray-600 bg-white dark:bg-slate-800" id="navNotifications" data-simplebar>
							<ul className="py-1" aria-labelledby="navNotifications">
								<li className="py-2 px-4">
									<a href="javascript:void(0);" className="dropdown-item">
										<div className="flex align-items-start">
											<img className="object-cover rounded-full h-8 w-8 shrink-0 mr-3" src="assets/images/users/avatar-2.jpg" alt="logo" />
											<div className="flex-grow ml-0.5 overflow-hidden">
												<p className="text-sm font-medium text-gray-800 truncate dark:text-gray-300">Karen Robinson</p>
												<p className="text-gray-500 mb-0 text-xs  truncate dark:text-gray-400">
													Hey ! i'm available here
												</p>
											</div>
										</div>
									</a>
								</li>
								<li className="py-2 px-4">
									<a href="javascript:void(0);" className="dropdown-item">
										<div className="flex align-items-start">
											<img className="object-cover rounded-full h-8 w-8 shrink-0 mr-3" src="assets/images/users/avatar-3.jpg" alt="logo" />
											<div className="flex-grow ml-0.5 overflow-hidden">
												<p className="text-sm font-medium text-gray-800 truncate dark:text-gray-300">Your order is placed</p>
												<p className="text-gray-500 mb-0 text-xs  truncate dark:text-gray-400">
													Dummy text of the printing and industry.
												</p>
											</div>
										</div>
									</a>
								</li>
								<li className="py-2 px-4">
									<a href="javascript:void(0);" className="dropdown-item">
										<div className="flex align-items-start">
											<img className="object-cover rounded-full h-8 w-8 shrink-0 mr-3" src="assets/images/users/avatar-9.jpg" alt="logo" />
											<div className="flex-grow ml-0.5 overflow-hidden">
												<p className="text-sm font-medium text-gray-800 truncate dark:text-gray-300">Robert McCray</p>
												<p className="text-gray-500 mb-0 text-xs  truncate dark:text-gray-400">
													Good Morning!
												</p>
											</div>
										</div>
									</a>
								</li>
								<li className="py-2 px-4">
									<a href="javascript:void(0);" className="dropdown-item">
										<div className="flex align-items-start">
											<img className="object-cover rounded-full h-8 w-8 shrink-0 mr-3" src="assets/images/users/avatar-6.jpg" alt="logo" />
											<div className="flex-grow ml-0.5 overflow-hidden">
												<p className="text-sm font-medium text-gray-800 truncate dark:text-gray-300">Meeting with designers</p>
												<p className="text-gray-500 mb-0 text-xs  truncate dark:text-gray-400">
													It is a long established fact that a reader.
												</p>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="mr-2 lg:mr-0 dropdown relative">
						<button type="button" className="dropdown-toggle flex items-center rounded-full text-sm focus:bg-none focus:ring-0 dark:focus:ring-0 md:mr-0" id="user-profile" aria-expanded="false" data-dropdown-toggle="navUserdata">
							<img className="h-8 w-8 rounded-full" src="assets/images/users/avatar-1.jpg" alt="user photo" />
							<span className="ml-2 hidden text-left xl:block">
								<span className="block font-medium text-gray-400">Maria Gibson</span>
								<span className="-mt-1 block text-sm font-medium text-gray-500">Admin</span>
							</span>
						</button>
						<div className="dropdown-menu dropdown-menu-right z-50 my-1 hidden list-none divide-y divide-gray-100 rounded border-slate-700 md:border-white text-base shadow dark:divide-gray-600 bg-white dark:bg-slate-800" id="navUserdata">
							<div className="py-3 px-4">
								<span className="block text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</span>
								<span className="block truncate text-sm font-normal text-gray-500 dark:text-gray-400">name@flowbite.com</span>
							</div>
							<ul className="py-1" aria-labelledby="navUserdata">
								<li>
									<a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-900/20 dark:hover:text-white">Dashboard</a>
								</li>
								<li>
									<a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-900/20 dark:hover:text-white">Settings</a>
								</li>
								<li>
									<a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-900/20 dark:hover:text-white">Earnings</a>
								</li>
								<li>
									<a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-900/20 dark:hover:text-white">Sign out</a>
								</li>
							</ul>
						</div>
					</div>
					<button data-collapse-toggle="mobile-menu-2" type="button" id="toggle-menu" className="ml-1 inline-flex items-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden" aria-controls="mobile-menu-2" aria-expanded="false">
						<span className="sr-only">Open main menu</span>
						<i className="ti ti-menu-2 h-6 w-6 text-lg leading-6" />
						<i className="ti ti-X hidden h-6 w-6 text-lg leading-6" />
					</button>
				</div>
			</div>
		</nav>
	)
}
