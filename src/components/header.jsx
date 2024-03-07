function Header() {
    return ( 
        <header>
            <div>
                <img src="/images/logo.png" alt="logo" />
                <p>Furniro</p>
            </div>
            <nav>
                <ul>
                    <li>Boutique</li>
                    <li>A propos</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div>
                <img src="/images/akar-icons_search.svg" alt="search" />
                <img src="/images/akar-icons_heart.svg" alt="wishlist" />
                <img src="/images/cart.svg" alt="cart" />
            </div>
        </header>
     );
}

export default Header;