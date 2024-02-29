import React from 'react';

const FooterComponent = () => {


    return (
        <footer className="bg-gray-800 text-white text-center p-4">
            <div className="container mx-auto">
                <p>
                    © {new Date().getFullYear()} Your Company Name. All rights
                    reserved.
                </p>
                <p>
                    Follow us on
                    <a href="#" className="text-blue-400 ml-2">
                        Facebook
                    </a>
                    ,
                    <a href="#" className="text-blue-400 ml-2">
                        Twitter
                    </a>
                    , and
                    <a href="#" className="text-blue-400 ml-2">
                        Instagram
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
};

export default FooterComponent;
