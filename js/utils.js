export const setElementsBehavior = (elements, event, behavior) => {
    for(let i=0; i<elements.length; i++) {
        elements[i].addEventListener(event, behavior);
    }
}