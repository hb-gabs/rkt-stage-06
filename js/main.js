import { Router } from "./router.js";
import { setElementsBehavior } from "./utils.js";

let links = document.querySelectorAll('a');
const router = new Router();

setElementsBehavior(links, 'click', e => {
    router.route(e)
    for(let i=0; i<links.length; i++) {
        links[i].classList.remove("selected");
    }
    e.target.classList.add("selected");
})

router.addRoute('/','./pages/home.html');
router.addRoute('/universe','./pages/universe.html');
router.addRoute('/exploring','./pages/exploring.html');

router.redirect();