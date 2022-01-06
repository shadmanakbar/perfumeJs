import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import logo from '../logo.png'
//const NavBar = ({token}) => (

class NavBar extends Component {
constructor(props) {
super(props);



};

render()
{
if(!this.props.token)
{
return(
<>

<nav>

<ul>
<img src={logo} alt="Logo" />

<li>
<Link to = "/" >Home</Link>
</li>
<li>
<Link to = "/signin" >Sign In</Link>
</li>
<li>
<Link to = "/iframe" >IFrame</Link>
</li>
</ul>

</nav>
</>

)
}

else{

return(
<>

<nav>

<ul>
<img src={logo} alt="Logo" />

<li>
<Link to = "/" >Home</Link>
</li>

<li>
<Link to = "/schedulerun" >Schedule Run</Link>
</li>
<li>
<Link to = "/signup" >Run Status</Link>
</li>
</ul>

</nav>
</>

)
}
}
}
export default NavBar;
