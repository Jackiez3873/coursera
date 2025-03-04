function Nav() {
    return (
      <React.Fragment className="Nav">
        <ul>
            <li>
                <Link rel="Home" href="#home"/>
            </li>
            <li>
                <Link rel="About" href="#about"/>
            </li>
            <li>
                <Link rel="Menu" href="#menu"/>
            </li>
            <li>
                <Link rel="Reservations" href="#reservations"/>
            </li>
            <li>
                <Link rel="Order Online" href="order online"/>
            </li>
            <li>
                <Link rel="Login" href="#login"/>
            </li>
        </ul>

        
      </React.Fragment>
    );
  }
  export default Nav;