import { FaFacebookF, FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';

function MainPage() {
  return (
    <>
      <div className='w-100 grid  h-screen grid-cols-1 place-content-center bg-black'>
        <div className='container mx-auto grid h-80vh grid-cols-2 content-center bg-hero bg-contain bg-center bg-no-repeat'>
          <div className='flex h-inherit flex-col justify-between pl-3'>
            <div className='text-2xl font-bold'>Makhmud.</div>
            <div className='pb-20 text-7xl font-bold'>
              An Autodidact <p>Developer</p>
            </div>
            <div className='text-xl font-bold'></div>
          </div>
          <div className=' flex h-inherit flex-col justify-between pr-3'>
            <div className='text-end text-xl font-bold'>
              <div className='text-end text-lg font-bold text-fuchsia-600'>MENU</div>
              <div className='text-end text-2xl font-bold'>About.</div>
              <div className='text-end text-2xl font-bold'>Works.</div>
              <div className='text-end text-2xl font-bold'>Contact.</div>
            </div>

            <div className='flex justify-end space-x-5 text-2xl'>
              <FaTelegramPlane />
              <FaGithub />
              <FaFacebookF />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
