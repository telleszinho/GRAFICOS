const ctx = document.getElementById('socialMediaChart').getContext('2d');

const socialMediaChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Facebook', 'YouTube', 'WhatsApp', 'Instagram', 'TikTok', 'WeChat'],
        datasets: [{
            label: 'Usuários (milhões)',
            data: [2900, 2000, 2000, 1500, 1000, 1000], // Dados fictícios
            backgroundColor: [
                'rgba(59, 89, 152, 0.6)',
                'rgba(255, 0, 0, 0.6)',
                'rgba(37, 211, 102, 0.6)',
                'rgba(225, 48, 108, 0.6)',
                'rgba(255, 205, 0, 0.6)',
                'rgba(0, 166, 81, 0.6)'
            ],
            borderColor: [
                'rgba(59, 89, 152, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(37, 211, 102, 1)',
                'rgba(225, 48, 108, 1)',
                'rgba(255, 205, 0, 1)',
                'rgba(0, 166, 81, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Usuários (milhões)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Redes Sociais'
                }
            }
        }
    }
});
