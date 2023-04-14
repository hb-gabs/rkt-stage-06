export class Router {
    routes = {};

    addRoute(routeName, filePath) {
        this.routes[routeName] = filePath;
    }

    route(e) {
        e = e || window.event;
        e.preventDefault();
        window.history.pushState({}, "", e.target.href);
        this.redirect();
    }

    redirect() {
        const { pathname } = window.location;
        const path = this.routes[pathname];
        fetch(path)
        .then(data => data.text())
        .then(html => document.querySelector('#root').innerHTML = html);
    }
}