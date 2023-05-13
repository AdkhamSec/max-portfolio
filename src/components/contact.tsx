import { FaFacebookF, FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';

function Contact() {
  const date = new Date();

  return (
    <section className='container mx-auto px-2 pt-44'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold md:text-7xl'>Contact.</h1>
        <p className='mb-20 text-2xl font-bold'> — Contact me for your projects —</p>
      </div>
      <div
        className="flex-end md:b-20 mx-auto flex h-[500px] flex-col justify-center bg-[url('src/assets/contact.jpg')] bg-contain bg-no-repeat sm:h-[400px]
      md:h-[400px] lg:w-[870px]"
      >
        <div className='text-shadow mb-20 text-end '>
          <h1 className='mb-8 text-5xl font-bold text-fuchsia-500 md:text-7xl'>makhmud.dev</h1>
          <h1 className='text-shadow text-2xl'>makhmudjon17@gmail.com</h1>
          <h1 className='text-2xl'>+ 82 10 3057 1711</h1>
        </div>
      </div>
      <footer className='pb-10 text-center'>
        <div className=' flex justify-center space-x-5 py-10 text-2xl'>
          <FaTelegramPlane />
          <FaGithub />
          <FaFacebookF />
          <FaLinkedin />
        </div>
        <p>© {date.getFullYear()} makhmud.dev</p>
      </footer>
    </section>
  );
}

export default Contact;
