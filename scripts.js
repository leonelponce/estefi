function showEnvelopes() {
    document.getElementById('envelopes').style.display = 'flex';
}

function openEnvelope(type) {
    const envelopeContent = {
        triste: `
            <h2>Cuando estés triste</h2>
            <p>Amor, sé que a veces te sientes triste. Quiero que sepas que siempre estoy aquí para ti, para escucharte y apoyarte. No estás sola, nunca lo olvides. Te amo con todo mi corazón.</p>
            <p>Con todo mi amor, [Tu Nombre]</p>
        `,
        abrazo: `
            <h2>Cuando necesites un abrazo</h2>
            <p>Mi amor, en los momentos en que necesites un abrazo, imagina que estoy a tu lado, sosteniéndote con todo mi cariño. Te amo más de lo que las palabras pueden expresar.</p>
            <p>Con todo mi cariño, [Tu Nombre]</p>
        `,
        feliz: `
            <h2>Cuando estés feliz</h2>
            <p>¡Mi amor! Me alegra tanto que estés feliz. Tu felicidad ilumina mi vida y me hace la persona más afortunada del mundo. Disfruta cada momento y recuerda que siempre estoy aquí para compartir tu alegría.</p>
            <p>Te amo, [Tu Nombre]</p>
        `,
        sola: `
            <h2>Cuando te sientas sola</h2>
            <p>Amor, sé que a veces te sientes sola. Quiero que sepas que siempre estoy aquí contigo, aunque no esté físicamente presente. Siempre tienes mi amor y mi apoyo incondicional.</p>
            <p>Con todo mi amor, [Tu Nombre]</p>
        `,
        aniversario: `
            <h2>¡Feliz 17 meses!</h2>
            <p>¡Feliz 17 meses, amor mío! Cada día a tu lado es un regalo y no puedo esperar para seguir creando más recuerdos juntos. Te amo más de lo que las palabras pueden decir.</p>
            <p>Con amor, [Tu Nombre]</p>
        `
    };

    document.getElementById('envelope-content').innerHTML = envelopeContent[type];
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
