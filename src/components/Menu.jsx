import "./Menu.css";

import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function Menu() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div
                id="menu"
                className="menu"
                onClick={handleShow}
            >
                <svg
                    data-open-aria-modal
                    width="52"
                    height="37"
                    viewBox="0 0 52 37"
                    fill="none"
                >
                    <path
                        className="menu-icon-path"
                        d="M3.7 0H22.2C23.1813 0 24.1224 0.38982 24.8163 1.0837C25.5102 1.77759 25.9 2.7187 25.9 3.7C25.9 4.6813 25.5102 5.62241 24.8163 6.3163C24.1224 7.01018 23.1813 7.4 22.2 7.4H3.7C2.7187 7.4 1.77759 7.01018 1.08371 6.3163C0.38982 5.62241 0 4.6813 0 3.7C0 2.7187 0.38982 1.77759 1.08371 1.0837C1.77759 0.38982 2.7187 0 3.7 0ZM29.6 29.6H48.1C49.0813 29.6 50.0224 29.9898 50.7163 30.6837C51.4102 31.3776 51.8 32.3187 51.8 33.3C51.8 34.2813 51.4102 35.2224 50.7163 35.9163C50.0224 36.6102 49.0813 37 48.1 37H29.6C28.6187 37 27.6776 36.6102 26.9837 35.9163C26.2898 35.2224 25.9 34.2813 25.9 33.3C25.9 32.3187 26.2898 31.3776 26.9837 30.6837C27.6776 29.9898 28.6187 29.6 29.6 29.6ZM3.7 14.8H48.1C49.0813 14.8 50.0224 15.1898 50.7163 15.8837C51.4102 16.5776 51.8 17.5187 51.8 18.5C51.8 19.4813 51.4102 20.4224 50.7163 21.1163C50.0224 21.8102 49.0813 22.2 48.1 22.2H3.7C2.7187 22.2 1.77759 21.8102 1.08371 21.1163C0.38982 20.4224 0 19.4813 0 18.5C0 17.5187 0.38982 16.5776 1.08371 15.8837C1.77759 15.1898 2.7187 14.8 3.7 14.8Z"
                    />
                </svg>
            </div>

            <Offcanvas
                show={show}
                onHide={handleClose}
                backdrop="static"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    I will not close if you click outside of me.
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Menu;
