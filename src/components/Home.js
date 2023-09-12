import React from 'react'
import "./Home.css"
import {GiHamburgerMenu} from "react-icons/gi"

const Home = () => {
  return (
    <div className='home-container'>
        <nav className='header'>
            <div className='left-container'>
                <div className='title-container'>
                    <img src='https://res.cloudinary.com/dwkuugaam/image/upload/v1694498530/yfqmly5nxotyuojnvutt.png' alt="title logo" className='title-logo' />
                    
                </div>
                <div className='select-container'>
                    <select>
                        <option value="Solutions">Solutions</option>
                    </select>
                    <p>Pricing</p>
                    <select>
                        <option value="Resources">Resources</option>
                    </select>
                </div>
            </div>
            <div className='right-container'>
                <h1>Login</h1>
                <button className='button-container' type="button">Start free trial</button>
                <button className='button' ><GiHamburgerMenu /></button>
            </div>

        </nav>
        <section className='section-container'>
            <div className='header-section-container'>
                <h5 className='save'>Pay Monthly</h5>
                <h5>Pay Yearly (Save 25%)</h5>
            </div>
            <div className='templates'>
                <fieldset className='basic'><h1 >Basic</h1></fieldset>
                <fieldset><h1>Shopify</h1></fieldset>
                <fieldset><h1>Advanced</h1></fieldset>
            </div>
            <div className='box-container'>
                <fieldset className='basic-field'><legend>MOST POPULAR</legend>
                    <div className='basic-container'>
                        <div className='top-container'>
                            <h1>Basic</h1>
                            <h5>FOR INDIVIDUALS & SMALL BUSINESS</h5>
                            <p>Everything you need to create your store, ship products, and process payments</p>


                        </div>
                        <div className='middle-container'>
                            <h1>₹1,994<span>INR/mo</span></h1>
                            <h5>Get your first 3 months for ₹20/mo </h5>
                        </div>
                        <div className='bottom-container'>
                            <h3>what's included on Basic</h3>
                            <ul className='list-container'>
                                <li><span></span>Basic reports</li>
                                <li><span></span>Up to 1,000 Inventry locations</li>
                                <li><span></span>2 staff accounts</li>
                            </ul>
                        </div>
                        <button type='button' className='button-section'>Try for free</button>
                    </div>
                </fieldset>
                <fieldset className='field-shopify-container'>
                    <div className='shopify-container'>
                        <div className='top-container'>
                            <h1>Shopify</h1>
                            <h5>FOR SMALL BUSINESS</h5>
                            <p>Level up your business with professional reporting and more staff accounts</p>


                        </div>
                        <div className='middle-container'>
                            <h1>₹7,447<span>INR/mo</span></h1>
                            <h5>Get your first 3 months for ₹20/mo </h5>
                        </div>
                        <div className='bottom-container'>
                            <h3>what's included on Basic</h3>
                            <ul className='list-container'>
                                <li><span></span>Professional</li>
                                <li><span></span>Up to 1,000 Inventry locations</li>
                                <li><span></span>5 staff accounts</li>
                            </ul>
                        </div>
                        <button type='button' className='button-section'>Try for free</button>
                    </div>
                </fieldset>
                <fieldset className='field-advanced-container'>
                    <div className='advanced-container'>
                        <div className='top-container'>
                            <h1>Advanced</h1>
                            <h5>FOR MEDIUM TO LARGE BUSINESS</h5>
                            <p>Get the best of Shopify with custom reporting and our lowest transaction fees</p>


                        </div>
                        <div className='middle-container'>
                            <h1>₹30,164<span>INR/mo</span></h1>
                            <h5>Get your first 3 months for ₹20/mo </h5>
                        </div>
                        <div className='bottom-container'>
                            <h3>what's included on Basic</h3>
                            <ul className='list-container'>
                                <li><span></span>Custom report builder</li>
                                <li><span></span>Up to 1,000 Inventry locations</li>
                                <li><span></span>15 staff accounts</li>
                            </ul>
                        </div>
                        <button type='button' className='button-section'>Try for free</button>
                    </div>
                </fieldset>
            </div>
        </section>
    </div>
  )
}

export default Home