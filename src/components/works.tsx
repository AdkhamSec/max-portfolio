import project1 from '/project1.png';

function Works() {
  return (
    <div className='sm: w-full bg-[url("src/assets/works_bg.jpg")] bg-cover bg-center'>
      <section className=' container mx-auto bg-glass px-2 py-40'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold md:text-7xl'>Works.</h1>
          <p className='text-2xl font-bold'> — See my projects —</p>
        </div>
        {/* work list */}
        <div className='text-shadow relative mx-auto my-20'>
          <div className='ml-2 h-inherit  lg:absolute'>
            <h1 className='mb-5 mt-10 p-4 text-5xl font-bold text-fuchsia-500 md:text-7xl'>makhmud.dev</h1>
            <h1 className='text-xl text-secondary'>Portfolio website</h1>
            <h1 className='text-xl text-secondary'>personal project</h1>
            <h1 className=' my-28 text-xl text-secondary'> — view details</h1>
          </div>

          <img className='ml-auto max-h-inherit shadow-custom lg:mr-0 lg:w-70% xl:mr-24' src={project1} alt='' />
        </div>
      </section>
    </div>
  );
}

export default Works;
