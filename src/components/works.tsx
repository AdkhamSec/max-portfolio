function Works() {
  return (
    <section className='py-42 container mx-auto px-2'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold md:text-7xl'>Works.</h1>
        <p className='text-2xl font-bold'> — See my projects —</p>
      </div>
      {/* work list */}
      <div className='relative mx-auto my-20'>
        <div className='text-shadow ml-2 h-inherit lg:absolute'>
          <h1 className=' mb-5 mt-10 text-5xl font-bold text-fuchsia-500 md:text-7xl'>makhmud.dev</h1>
          <h1 className='text-xl text-secondary'>Portfolio website</h1>
          <h1 className='text-xl text-secondary'>personal project</h1>
          <h1 className=' my-28 text-xl text-secondary'> — view details</h1>
        </div>

        <img className=' ml-auto max-h-inherit lg:mr-0 lg:w-70% xl:mr-24' src='src/assets/project1.png' alt='' />
      </div>
    </section>
  );
}

export default Works;
