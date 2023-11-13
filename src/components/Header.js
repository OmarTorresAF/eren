import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex'>
      <Image
        className='m-4'
        width={124}
        height={74}
        src='/assets/logo.png'
        alt='logo image'
      />
      <div className='navbar bg-base-300 rounded-box'>
        <div className='flex-1 px-2 lg:flex-none '>
          <a className='text-lg font-bold'>Productos</a>
        </div>
        <div className='flex justify-end flex-1 px-2'>
          <div className='flex items-stretch dropdown dropdown-hover'>
            <a className='btn btn-ghost rounded-btn ]'>button</a>
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost rounded-btn'>
                Productos
              </label>
              <ul
                tabIndex={0}
                className='menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4'
              >
                <li>
                  <a>Aguro</a>
                </li>
                <li>
                  <a>Nek</a>
                </li>
                <li>
                  <a>Plato</a>
                </li>
                <li>
                  <a>Rictor</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
