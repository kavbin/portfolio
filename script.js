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
        lightbox.scrollTop = 20
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
            let link = document.createElement('a')
            let p = document.createElement('p')
            p.textContent = originalCaptionedImage.querySelector('p').textContent
            if(originalCaptionedImage.querySelector('h1')){
                link.href = originalCaptionedImage.querySelector('h1').textContent
            }
            link.appendChild(p)
            lightbox.appendChild(link)
            
            
            
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