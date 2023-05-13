function About() {
  return (
    <section className='container mx-auto px-2 py-44'>
      <div className='text-center'>
        <h1 className='text-7xl font-bold'>About.</h1>
        <p className='text-2xl font-bold'> — See more info about me —</p>
      </div>
      <div className=" flex-end mx-auto my-20 flex h-[500px] flex-col justify-center bg-[url('src/assets/about.jpg')] bg-contain bg-no-repeat lg:w-[870px]">
        <div className='mb-20 text-end'>
          <h1 className='text-7xl font-bold text-fuchsia-500'>Makhmud.</h1>
          <h1 className='text-2xl '>Web developer.</h1>
        </div>
      </div>
      <div className='mx-auto my-10 max-w-[500px] text-justify text-2xl text-secondary'>
        As a web developer, my core competency lies in front-end development, where I utilize industry- leading
        technologies such as React, TailwindCSS, and Nextjs to craft visually stunning and responsive websites that are
        optimized for seamless user experience on all devices. I continuously strive to learn new technologies and best
        practices in web development to stay on the cutting edge of the industry.
      </div>

      <div className='my-10 text-center text-2xl'>
        —"You don't have to be great to start, but you have to start to be great."
      </div>
    </section>
  );
}

export default About;
