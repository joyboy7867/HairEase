import React from 'react';

const page = () => {
    return <div>
        <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
					<h3 className="text-3xl font-semibold">How it Works..</h3>
					<span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">For Customers </span>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
						<h3 className="text-xl font-semibold tracking-wide">Browse:</h3>
					
						<p className="mt-3">Explore a wide range of barber shops   
                              in your area.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
						<h3 className="text-xl font-semibold tracking-wide">Select: </h3>
						
						<p className="mt-3">Choose your preferred barber and view  
                             their available services. </p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
						<h3 className="text-xl font-semibold tracking-wide">Book:</h3>
						
						<p className="mt-3">Pick a date and time that suits you and  
                             confirm your appointment. </p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section className="dark:bg-gray-100 dark:text-gray-800 mt-5">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
        <div className="col-span-12 sm:col-span-3">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
					<h3 className="text-3xl font-semibold">How it Works..</h3>
					<span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">For Barber Shops </span>
				</div>
			</div>
		
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
						<h3 className="text-xl font-semibold tracking-wide">Register: </h3>
					
						<p className="mt-3">Sign up and create a profile for     
                              your barber shop.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
						<h3 className="text-xl font-semibold tracking-wide">List Services: </h3>
						
						<p className="mt-3">Add your services and set       
                              availability for your barbers.</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
						<h3 className="text-xl font-semibold tracking-wide">Manage Appointments:</h3>
						
						<p className="mt-3">Keep track of your        
                              bookings and grow your customer base. </p>
					</div>
				</div>
			</div>
          
		</div>
	</div>
</section>
    </div>;
}



export default page;