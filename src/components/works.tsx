function Works() {
  return (
    <section className='py-42 container mx-auto px-2'>
      <div className='text-center'>
        <h1 className='text-7xl font-bold'>Works.</h1>
        <p className='text-2xl font-bold'> — See my projects —</p>
      </div>
      {/* work list */}
      <div className='relative mx-auto my-20'>
        <div className='ml-2 h-inherit lg:absolute'>
          <h1 className=' mb-5 mt-10 text-7xl font-bold text-fuchsia-500'>makhmud.dev</h1>
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
