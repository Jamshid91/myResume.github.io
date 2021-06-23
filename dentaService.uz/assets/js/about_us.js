let certificatePhoto = document.querySelectorAll('.certificatePhoto');
let modalCertificate = document.querySelector('.modal_certificate')

certificatePhoto.forEach(photo => {
    photo.addEventListener('click', () => {
        let img = modalCertificate.children[0].children[1]
        let closeModal = modalCertificate.children[0].children[0]
        modalCertificate.style.display = 'flex';

       img.src =  photo.src 
       
    //    close modal

    closeModal.addEventListener('click', () => {
        modalCertificate.style.display = 'none';
    })
    })
})


