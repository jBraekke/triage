import React from 'react';
import './Navbar.css';
import Logo from '../../images/logo.svg';

const Navbar = (): JSX.Element => {
    return (
        <div className="header">
            <div className="navbar">
                <img src={Logo} alt="logo" height={50} />
                <div className="profile">
                    <svg role="img" aria-hidden="true" viewBox="0 0 48 48" width="48" height="48" fill="black"><path d="M26.682 15.15a.503.503 0 10-.001-1.004.503.503 0 00.001 1.005zm-5.293 0a.503.503 0 10-.001-1.004.503.503 0 00.001 1.005zm13.247 25.526h-3.225v-6.947h-.899v6.947H17.488v-6.947h-.9v6.947h-3.224v-8.461c0-3.813 2.5-7.226 6.111-8.39 2.795 1.394 6.254 1.394 9.05 0 3.611 1.164 6.111 4.577 6.111 8.39v8.46zm-5.993-18.173l-.253-.073-.233.124c-2.543 1.354-5.77 1.354-8.314 0l-.233-.124-.254.073c-4.294 1.246-7.293 5.239-7.293 9.712v9.76h23.873v-9.76c0-4.473-2.999-8.466-7.293-9.712zM16.157 12.326h.261v1.59h-.26a.797.797 0 010-1.591zm1.561 0h.728a4.034 4.034 0 003.542-2.108 4.086 4.086 0 003.573 2.108h4.72v2.018a6.09 6.09 0 01-6.082 6.083h-.398a6.09 6.09 0 01-6.083-6.083v-2.018zm0-1.285a6.09 6.09 0 016.083-6.082h.398a6.088 6.088 0 016.082 6.082v.285h-4.72a3.089 3.089 0 01-3.085-3.085v-.213h-1v.267a3.034 3.034 0 01-3.03 3.03h-.728v-.284zm13.863 1.285h.262a.797.797 0 010 1.59h-.262v-1.59zm-15.424 2.59h.291c.294 3.804 3.475 6.81 7.353 6.81h.398c3.877 0 7.06-3.006 7.353-6.81h.291c.99 0 1.796-.805 1.796-1.795 0-.99-.806-1.795-1.796-1.795h-.262v-.285c0-4.071-3.312-7.382-7.382-7.382h-.398c-4.07 0-7.383 3.31-7.383 7.382v.285h-.26c-.992 0-1.797.805-1.797 1.795 0 .99.805 1.796 1.796 1.796z"></path></svg>
                    <p>Jørgen Hattemaker</p>
                </div>
            </div>
            <nav className="breadcrumb" role="navigation" aria-label="Brødsmulesti helsenorge">
                <div className="breadcrumb-wrapper">
                    <a className="breadcrumb__anchor" href="https://tjenester.helsenorge.no">
                        <svg role="img" aria-hidden="true" viewBox="0 0 48 48" width="48" height="48" fill="black">
                            <path d="M30.66 32.951l-1.409 1.42L18.8 24l10.451-10.37 1.409 1.42L21.64 24z"></path>
                        </svg>
                        <span className="breadcrumb__label">helsenorge.no</span>
                    </a>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;