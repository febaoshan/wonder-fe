class Header {
    constructor() {
        const dom = document.createElement('div');
        dom.innerText = 'This is Header';
        document.body.appendChild(dom);
    }
}

class Body {
    constructor() {
        const dom = document.createElement('div');
        dom.innerText = 'This is Body';
        document.body.appendChild(dom);
    }
}

class Footer {
    constructor() {
        const dom = document.createElement('div');
        dom.innerText = 'This is Footer';
        document.body.appendChild(dom);
    }
}
class Page {
    constructor() {
        new Header();
        new Body();
        new Footer();
    }
}