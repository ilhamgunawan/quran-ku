import SearchIcon from '../assets/icons/search-icon';
import HeartIcon from '../assets/icons/heart-icon';

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <header className='fixed top-0 inset-x-0 flex justify-between items-center shadow-lg bg-teal-400 py-1 px-2'>
        <h1 className='font-bold text-xl p-2 text-white'>QuranKu{pageTitle ? ` / ${pageTitle}` : ''}</h1>
        <nav>
          <button className='focus:outline-none border-none p-2'>
            <SearchIcon  />
          </button>
        </nav>
      </header>
      {children}
      <footer className='fixed bottom-0 inset-x-0 flex justify-center bg-gray-900 p-3'>
        <div className='flex items-center'>
          <p className='text-gray-500'>Crafted with</p>
          <HeartIcon />
          <p className='text-gray-500'>from Indonesia</p>
        </div>
      </footer>
    </>
  )
}