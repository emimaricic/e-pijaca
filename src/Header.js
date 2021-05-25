
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css'
function Header() {
    return (
        <div className = 'header'>
           <img 
           className = 'header__logo'
           src = "" /> 

           <div className = 'header__search'>
               <input
               className = "header__searchInput" type = "text" />
               <SearchIcon className = "header__searchIcon"/>
           </div>
        
            <div className = 'header__nav'>
                <div className = 'header__option'>
                  <span className = 'header__optionLineOne'>Pozdrav Korisnik</span>
                  <span className = 'header__optionLineTwo'>Prijava</span>
                </div>
                <div className = 'header__option'>
                <span className = 'header__optionLineTwo'>Wishlist</span>
                </div>

                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </div>
        
        </div>
    )
}

export default Header
