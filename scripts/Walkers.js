import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    //when user "clicks" this function is invoked
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
       
        if (whatWasClickedOn.dataset.type === "walker") {
        window.alert(`This walker works in ${whatWasClickedOn.dataset.city}`)
    }
}
)


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
// we are adding state to the Dom 
        walkerHTML += `<li data-id="${walker.id}"
                        data-city="${walker.city}"
                        data-type="walker"
                        >${walker.name}
        </li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML

}

