import SearchIcon from '../assets/icons/search-icon';
import Footer from './footer';
import BackButton from './back-button';

export default function Layout({ children, pageTitle, previousId, nextId, previousName, nextName }) {
  return (
    <>
      <header className='fixed top-0 inset-x-0 shadow-lg bg-teal-400 py-1 px-2'>
        <nav className='header-nav flex justify-between items-center'>
          <div className='flex flex-row items-center'>
            <BackButton pageTitle={pageTitle} />
            <h1 className='font-bold text-xl p-2 text-white'>{pageTitle}</h1>
          </div>
          <div>
            <button className='focus:outline-none h-10 w-10 rounded-full flex pt-3 pl-3'>
              <SearchIcon  />
            </button>
          </div>
        </nav>
      </header>
      {children}
      <Footer pageTitle={pageTitle} previousId={previousId} nextId={nextId} previousName={previousName} nextName={nextName} />
    </>
  )
}