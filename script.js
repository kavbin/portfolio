const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.triggerContainer')
images.forEach(triggerCont => {
    triggerCont.addEventListener('click', e => {
        lightbox.classList.add('active')
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.scrollTop = 0
        const originalCaptionedImages = triggerCont.querySelectorAll('.captionedImage')
        originalCaptionedImages.forEach(originalCaptionedImage => {
            const content = originalCaptionedImage.querySelector('img, video')
            if (content instanceof HTMLImageElement) {
                const img = document.createElement('img')
                img.src = content.src
                lightbox.appendChild(img)
            } 
            else {
                const video = document.createElement('video')
                video.src = content.src
                video.controls = true
                video.muted = false
                lightbox.appendChild(video)
            }
            const p = document.createElement('p')
            p.textContent = originalCaptionedImage.querySelector('p').textContent
            lightbox.appendChild(p)
        })
        const spacer = document.createElement('div')
        spacer.className = 'lightboxSpacer'
        lightbox.appendChild(spacer)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})