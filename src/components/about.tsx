function About() {
  return (
    <section className='container mx-auto px-2 py-44'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold md:text-7xl'>About.</h1>
        <p className='text-2xl font-bold'> — See more info about me —</p>
      </div>
      <div className=" flex-end mx-auto my-20 flex h-[500px] max-w-[870px] flex-col justify-center bg-[url('src/assets/about.jpg')] bg-contain bg-no-repeat">
        <div className='mb-20 text-end'>
          <h1 className='text-5xl font-bold text-fuchsia-500 md:text-7xl'>Makhmud.</h1>
          <h1 className='text-2xl '>Web developer.</h1>
        </div>
      </div>
      <div className='mx-auto my-10 max-w-[500px] text-justify text-2xl text-secondary'>
        I am a web develover who loves designing visually stunning plus minimalist User Interfaces more than anything else, with the exception of solving logical problems and programming chanllanges. Always eager to try out new things in web space and comtribute to Open Source.
      </div>

      <div className='my-10 text-center text-2xl'>
        —"You don't have to be great to start, but you have to start to be great."
      </div>
    </section>
  );
}

export default About;
