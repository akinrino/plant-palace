import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path className='logo-icon'
                            d="M23.36 16H22.26C22.7857 15.6013 23.2683 15.1489 23.7 14.65C24.5925 13.5762 25.2503 12.3274 25.6309 10.984C26.0115 9.6406 26.1066 8.23237 25.91 6.85C25.8738 6.61154 25.7527 6.39419 25.569 6.23799C25.3852 6.08179 25.1512 5.99727 24.91 6C23.0877 6.1273 21.3284 6.71947 19.8 7.72C19.2773 5.65984 18.2059 3.77987 16.7 2.28C16.5131 2.09677 16.2618 1.99414 16 1.99414C15.7382 1.99414 15.4869 2.09677 15.3 2.28C14.1415 3.42161 13.246 4.80225 12.676 6.32559C12.1061 7.84894 11.8754 9.4783 12 11.1C12.1664 12.7636 12.7399 14.3607 13.67 15.75C12.1679 15.3643 10.8204 14.5265 9.81 13.35C8.60367 11.8775 7.9619 10.0231 8 8.12C8.55749 8.22729 9.10334 8.38803 9.63 8.6C9.87665 8.69813 10.1522 8.69426 10.396 8.58924C10.6398 8.48422 10.8319 8.28665 10.93 8.04C11.0281 7.79335 11.0243 7.51782 10.9192 7.27402C10.8142 7.03022 10.6167 6.83813 10.37 6.74C9.33257 6.32316 8.23563 6.07339 7.12 6C6.87884 5.99727 6.64481 6.08179 6.46105 6.23799C6.27729 6.39419 6.15616 6.61154 6.12 6.85C5.92341 8.23237 6.01849 9.6406 6.39912 10.984C6.77975 12.3274 7.43749 13.5762 8.33 14.65C8.7523 15.1473 9.2248 15.5997 9.74 16H8.64C8.20586 16.0026 7.79024 16.1762 7.48325 16.4832C7.17625 16.7902 7.00263 17.2059 7 17.64V20.36C7.00101 20.7005 7.10861 21.0321 7.30768 21.3083C7.50676 21.5845 7.78733 21.7914 8.11 21.9L8.88 28.13C8.94565 28.6461 9.19709 29.1207 9.58728 29.4649C9.97748 29.8091 10.4797 29.9993 11 30H21C21.5203 29.9993 22.0225 29.8091 22.4127 29.4649C22.8029 29.1207 23.0544 28.6461 23.12 28.13L23.89 21.9C24.2127 21.7914 24.4932 21.5845 24.6923 21.3083C24.8914 21.0321 24.999 20.7005 25 20.36V17.64C24.9974 17.2059 24.8238 16.7902 24.5168 16.4832C24.2098 16.1762 23.7941 16.0026 23.36 16ZM20.36 9.77C21.4201 8.93251 22.6703 8.36923 24 8.13C24.0329 10.031 23.3877 11.8815 22.18 13.35C21.1696 14.5265 19.8221 15.3643 18.32 15.75C19.2536 14.3616 19.8306 12.7645 20 11.1C20.0245 10.7137 20.0245 10.3263 20 9.94C20.1272 9.90836 20.2465 9.85046 20.35 9.77H20.36ZM16 4.49C17.4761 6.2846 18.1937 8.58439 18 10.9C17.8059 12.6101 17.11 14.2246 16 15.54C14.89 14.2246 14.1941 12.6101 14 10.9C13.8063 8.58439 14.5239 6.2846 16 4.49ZM21 28H11C10.9672 28.0001 10.9356 27.9878 10.9114 27.9655C10.8873 27.9433 10.8725 27.9127 10.87 27.88L10.13 22H16C16.2652 22 16.5196 21.8946 16.7071 21.7071C16.8946 21.5196 17 21.2652 17 21C17 20.7348 16.8946 20.4804 16.7071 20.2929C16.5196 20.1054 16.2652 20 16 20H9V18H23V20H20C19.7348 20 19.4804 20.1054 19.2929 20.2929C19.1054 20.4804 19 20.7348 19 21C19 21.2652 19.1054 21.5196 19.2929 21.7071C19.4804 21.8946 19.7348 22 20 22H21.87L21.13 27.88C21.1275 27.9127 21.1127 27.9433 21.0886 27.9655C21.0645 27.9878 21.0328 28.0001 21 28Z"
                        />
                    </svg>
                    Plant<span>Planet</span>
                </div>

                <div className="footer-links">
                    <div className="footer-links__top">
                        <Link to="/" className='footer-link'>HOME</Link>
                        <Link to="/shop" className='footer-link'>SHOP</Link>
                        <Link to="/sitemap" className='footer-link'>SITEMAP</Link>
                        {/* <a href="" className="footer-link">HOME</a> */}
                        {/* <a href="" className="footer-link">SHOP</a> */}
                        {/* <a href="" className="footer-link">SITEMAP</a> */}
                    </div>
                    <div className="footer-links__bottom">
                        <a href="" className="footer-link">FEEDBACK</a>
                        <a href="" className="footer-link">CONTACT</a>
                    </div>
                </div>

                <div className="copyright">
                    <p>&copy; 2023 OURGROUP | ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer