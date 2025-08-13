const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

// Criar cliente usando autenticação local (salva sessão)
const client = new Client({
    authStrategy: new LocalAuth()
});

// Mostrar QR Code no terminal
client.on('qr', qr => {
    console.log('Escaneie o QR Code abaixo para conectar:');
    qrcode.generate(qr, { small: true });
});

// Quando estiver conectado
client.on('ready', () => {
    console.log('✅ Bot conectado com sucesso!');
});

// Quando receber mensagem
client.on('message', msg => {
    console.log(`📩 Mensagem de ${msg.from}: ${msg.body}`);

    // Resposta automática simples
    if (msg.body.toLowerCase() === 'oi') {
        msg.reply('Olá! 🤖 Como posso ajudar?');
    }
});

client.initialize();
