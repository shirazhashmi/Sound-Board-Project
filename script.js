const sounds = ['Mockingbird', 'Beautiful', 'Going Through Changes', 'Lose Yourself', 'Stay Wide Awake', 'Talkin’ 2 Myself']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    document.getElementById('buttons').appendChild(btn)
})
