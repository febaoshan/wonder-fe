"use strict";
var Header = /** @class */ (function () {
    function Header() {
        var dom = document.createElement('div');
        dom.innerText = 'This is Header';
        document.body.appendChild(dom);
    }
    return Header;
}());
var Body = /** @class */ (function () {
    function Body() {
        var dom = document.createElement('div');
        dom.innerText = 'This is Body';
        document.body.appendChild(dom);
    }
    return Body;
}());
var Footer = /** @class */ (function () {
    function Footer() {
        var dom = document.createElement('div');
        dom.innerText = 'This is Footer';
        document.body.appendChild(dom);
    }
    return Footer;
}());
var Page = /** @class */ (function () {
    function Page() {
        new Header();
        new Body();
        new Footer();
    }
    return Page;
}());
