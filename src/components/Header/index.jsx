import './Header.less'
import { Button, Select } from 'antd';
import { Link, useHistory } from 'react-router-dom'

// import routes from '../../routes'


export const Header = () => {
    return ( 
       <header className='container header'>
           {/* to={routes.home} */}
            <Link style={{ color: "#1D212A" }} >
                <div className="logo">Blog</div>
            </Link>
            <nav>
            {/* to={routes.sign_up} */}
                <Link >Contact us</Link>
                <a href="">Blog</a>
            </nav>
            <Select defaultValue="EN" style={{ width: 69 }} >
                <Option value="EN">EN</Option>
                <Option value="RU">RU</Option>
            </Select>


            <div>
            {/* to={routes.login} */}
                <Link >
                    <Button type="text">Log in</Button>
                </Link>
                {/* to={routes.sign_up} */}
                <Link >
                    <Button primary>Sign up</Button>
                </Link>
                </div>
       </header>
    )
}