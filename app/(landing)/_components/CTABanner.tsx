export default function CTABanner(){
    return(
    <section className="bg-blue-900 p-24 sm:py-32 lg:py-24 text-center">
        <div className="mx-auto max-w-2xl sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">Ready to get organized? </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray-300">Start managing clients, projects, and tasks in one place.</p>
     
        <div className="justify-center mt-16 h-60 lg:mt-8">
            <a href="/signup" className="rounded-md mt-8 inline-block bg-white py-3 px-6">Get started free</a>
        </div>
      </div>
</section>

    )
}