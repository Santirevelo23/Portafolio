const Contact = () => {
  return (
    <section
      id='contact'
      className='container relative max-w-4xl mx-auto min-h-screen flex-center px-5 bg-personalBlue'
    >
      <div className='pb-10'>
        <div className='text-center text-black'>
          <h3>Contacto</h3>
          <p className='px-2 mt-3 text-black'>
            Espero poder estar trabajando muy pronto contigo, no dudes en contactarme!
          </p>
        </div>
        <div className='mt-12 md:relative flex flex-col gap-5 sm:max-w-full mx-auto max-w-xs'>
          <div className='dark:bg-slate-800 bg-slate-50 dark:text-gray-100 text-gray-800 rounded-lg shadow-xl mx-auto md:w-2/3 py-14 px-7 w-full'>
            <h3 className='font-semibold text-3xl'>
              Contactame <br />
              <span className='text-primary'>Ahora!</span>
            </h3>
            <form className='*:flex *:flex-col *:gap-1 mt-5 md:w-2/3 w-full'>
              <div className=''>
                <label>David Santiago Obando </label>
              </div>
              <div className=''>
                <label>santi.revelo23@gmail.com</label>
              </div>
              <div className=''>
                <label>+57 3107124642</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;