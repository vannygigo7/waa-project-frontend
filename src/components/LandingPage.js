import NavBar from "./NavBar";
import auctionIcon from "../assets/images/Auction.gif";
import calendarIcon from "../assets/images/calendar.webp";
import moneybagIcon from "../assets/images/money-bag.webp";
import guestsIcon from "../assets/images/guests.webp";
import bidIcon from "../assets/images/bid.webp";
import todoIcon from "../assets/images/to-do-list.webp";
import smartphoneIcon from "../assets/images/smartphone.png";
import gearIcon from "../assets/images/gear.png";
import Footer from "./Footer";

export default function LandingPage() {
    return (
        <div>
            <NavBar />
            <div className="container text-center">
                <div className="row">
                    <div className="col des-text">
                        <div>
                            <div>
                                <h1 className="big-des-text-color">A Simpler Way to Run Your Nonprofit Auctions</h1>
                                <p className="mt-3">AuctionSnap is an easy-to-use, cost-efficient nonprofit auction tool with mobile bidding. Whether you are holding an in-person, online, or hybrid auction, AuctionSnap will streamline the process.</p>
                                <a className="btn primary-btn">Bid Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <img src={auctionIcon} />
                    </div>
                </div>
            </div>
            <h1 className="text-center mt-5 mb-5 big-des-text-color">Effortless Auction Management</h1>
            <div className="container text-center">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={calendarIcon} className="card-img-size" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Save Time, Stay Organized</h5>
                                <p className="card-text">Seamlessly manage all auction items, details, and descriptions in one place—from start to finish.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={moneybagIcon} className="card-img-size" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Raise More Money</h5>
                                <p className="card-text">Make bidding easier, more accessible, and exciting, and see more action on your auctions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={guestsIcon} className="card-img-size" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Give Superior Experiences</h5>
                                <p className="card-text">Empower guests to bid and checkout remotely or in-person directly from desktop and mobile.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <h1 className="text-center mt-5 mb-4 big-des-text-color">Support Your Fundraising Auctions</h1>
            <p className="text-center">Effortlessly manage every part of your nonprofit <br /> auctions, from listing items to checking out bidders.</p>

            <div className="container text-center mt-4">
                <div className="row row-cols-1 row-cols-md-2 g-4 ">
                    <div className="col">
                        <div className="card m-auto border-white" style={{width: "25rem"}}>
                            <img src={todoIcon} className="card-img-size" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Item Management</h5>
                                <p className="card-text">Organize items by type, tag, and starting bids for a seamless auction setup.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card m-auto border-white" style={{width: "25rem"}}>
                            <img src={gearIcon} className="card-img-size" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Auto-Bidding</h5>
                                <p className="card-text">Encourage healthy competition and maximize bids with automated bidding functionality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card m-auto border-white" style={{width: "25rem"}}>
                            <img src={bidIcon} className="card-img-size" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Real-Time Bidding</h5>
                                <p className="card-text">Engage participants and increase anticipation with live, dynamic bidding from their devices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card m-auto border-white" style={{width: "25rem"}}>
                            <img src={smartphoneIcon} className="card-img-size" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Secure Mobile Checkout</h5>
                                <p className="card-text">Expedite post-event checkouts with our secure and convenient mobile checkout process.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}