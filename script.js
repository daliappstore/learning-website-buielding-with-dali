document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', () => {
            const codeContainer = button.closest('.code-container');
            const codeElement = codeContainer.querySelector('code');
            const msg = codeContainer.querySelector('.copied-msg');
            if (!codeElement) return;
            const code = codeElement.innerText;

            navigator.clipboard.writeText(code).then(() => {
                if (msg) {
                    msg.style.display = 'block';
                    setTimeout(() => { msg.style.display = 'none'; }, 1500);
                }
            }).catch(err => {
                alert('Copy failed. Please copy manually.');
                console.error(err);
            });
        });
    });
});