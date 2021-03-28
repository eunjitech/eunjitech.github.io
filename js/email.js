(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_B54FFopUCNZnV58m4pGmA');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        const nameVal = document.querySelector('.input_name').value;
        const emailVal = document.querySelector('.input_email').value;
        const messageVal = document.querySelector('.input_message').value;
        const error = document.querySelector('.input_error')
        
        if(nameVal && emailVal && messageVal){
            error.innerText = '전송 중...';
            error.classList.remove('none');
            error.classList.add('active');
            emailjs.sendForm('service_brfp08b', 'template_uo69f8q', this)
            .then(function() {
                error.innerText = '전송 완료!';
                error.classList.remove('none');
                error.classList.add('active');
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
        }else{
            error.innerText = '전송 실패! (이름, 이메일, 내용을 전부 기입해주세요.)';
            error.classList.remove('none');
            error.classList.add('active');
        }

    });
}