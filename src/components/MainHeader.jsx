import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className="main__header">
        <div className="container main__header-container">
            <div className="main__header-left">
                <h1>The Only RPG Sheet You'll Ever Need</h1>
                <p>
                    OneSheet hopes to be the leading service site for all RPG needs.
                    We hope to accomplish the basic storage functions for D&D sheets,
                    and we are developing the potential to convert from one system to another!
                </p>
                <Link to='/mySheets' className='btn lg'>Choose Your Character</Link>
            </div>
            <div classname="main__header-right">
                <div className="main__header-circle"></div>
                <div className="main__header-image">
                    <img src={Image} alt="Main Header Image"/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default MainHeader