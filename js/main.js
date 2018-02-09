var socket = io('ws://192.168.1.3:3000')

document.getElementById('butt').addEventListener('click', () => {
    slot(pos)
})

let win = true;
let pos = true;
let slot1 = document.getElementById('slot1')
let slot2 = document.getElementById('slot2')
let slot3 = document.getElementById('slot3')
let attempt = 1

function slot() {
    if(pos) {
        pos = false
        let dest1 = Math.floor(Math.random() * 50) * 130 + 13000 * attempt
        let dest2 = Math.floor(Math.random() * 50) * 130 + 13000 * attempt
        let dest3 = Math.floor(Math.random() * 50) * 130 + 13000 * attempt
        if(attempt === 3) {
            dest1 = dest2 = dest3 = Math.floor(Math.random() * 50) * 130 + 13000 * attempt
        }
        setTimeout(() => {
            if((dest1 / 130) % 7 === (dest2 / 130) % 7 && (dest1 / 130) % 7 === (dest3 / 130) % 7) {
                console.log('pobeda')
            } else {
                console.log('try again')
                pos = true
            }
        }, 5000)
        // console.log((dest1 / 130) % 7)
        // console.log((dest2 / 130) % 7)
        // console.log((dest3 / 130) % 7)
        slot1.style.top = `-${dest1}px`
        slot2.style.top = `-${dest2}px`
        slot3.style.top = `-${dest3}px`
        attempt ++
    }
}