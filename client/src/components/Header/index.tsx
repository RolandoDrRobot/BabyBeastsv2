import monster from '../../img/logo.jpg';

import './main.css';

interface HeaderInterface {
  address: string;
}

function Header({ address }: HeaderInterface) {

  return (
    <>
      <nav className="navbar">
        <div className='container'>
          <div className="logo d-flex align-items-center mb-2">
            <a href="/"><img src={monster} height="70" alt="Logo" /></a>
            <h2>BABY <span>BEASTS</span></h2>
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
