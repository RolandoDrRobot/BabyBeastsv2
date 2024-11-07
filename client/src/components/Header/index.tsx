import monster from '../../img/logo.jpeg';

import './main.css';

interface HeaderInterface {
  address: string;
}

function Header({ address }: HeaderInterface) {

  return (
    <>
      <nav className="navbar">
        <div className='container'>
          <div className="logo d-flex align-items-center m-auto">
            <a href="/"><img src={monster} height="70" alt="Logo" /></a>
          </div>
          {
            address && <button className="connect-btn">
              Account ...{address?.slice(-6)}
            </button>
          }
        </div>
      </nav>
    </>
  )
}

export default Header;
