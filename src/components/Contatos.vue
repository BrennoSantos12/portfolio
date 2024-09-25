<template>
    <div class="ctt-container">
        <h1 class="ctt-titulo" id="ctttiulo">Vamos trabalhar juntos!</h1>
        <div class="link-container-ctt">
            <div class="link1-ctt"> <a href="https://github.com/BrennoSantos12"><img src="@/assets/github branco.png"
                        alt="GitHub" style="height: 4.5rem; width: 4.5rem;"></a></div>
            <div class="link2-ctt"><a href="https://www.linkedin.com/in/brenno-santos-692752290/"><img
                        src="@/assets/linkedin-branco_icon.png" alt="LinkedIn" style="height: 4rem; width: 4rem;"></a></div>
        </div>
    </div>

    <div class="creditos">
        <h1>© Code by Brenno Santos</h1>
    </div>
    <div class="email-container">

        <button class="clicado1" id="btn-animation">
            <h1 id="btntext">Me envie um email</h1>
            <p id="seta">&larr;</p>
        </button>

        <form action="https://api.staticforms.xyz/submit" method="post" id="form">
            <input type="text" name="name" placeholder="Insira seu nome" class="form-name" id="form-name">
            <input type="text" name="email" placeholder="Insira seu email" class="form-email" id="form-email" />
            <textarea name="message" rows="1" placeholder="Insira sua mensagem" class="form-text"
                id="form-text"></textarea>
            <input type="hidden" name="accessKey" value="349b3fc4-8b6b-4d99-9597-8a8a6ff07a20">
            <input type="hidden" name="replyTo" value="@">
            <input type="text" name="honeypot" style="display: none;">
            <input type="hidden" name="redirectTo" value="https://portfoliobrenno.netlify.app/#/">
            <input type="submit" value="Enviar" class="form-btn" id="form-btn" />
        </form>

    </div>

</template>

<style>
#Contatos {
    z-index: 1;
    position: relative;
    background-color: var(--secundary-color);
    height: 90vh;
}

.creditos {
    color: var(--secundary-letter-color);
    font-size: 10px;
    display: flex;
    justify-content: flex-end;
    margin: 1rem;
}

.ctt-titulo {
    display: flex;
    color: var(--secundary-letter-color);
    font-size: 4rem;
    margin-top: 6rem;
    transform: translate(0px);
    transition: transform 1s ease-in-out, width 1s ease;
}

.titulo-ctt {
    transform: translate(200px) scale(0.6);
    transition: transform 1s ease-in-out;
}

.link-container-ctt {
    display: flex;
    align-items: baseline;
    margin-left: 40rem;
    margin-top: 10rem;
    gap: 30px;
}

.ctt-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.link1-ctt {
    margin-top: 4rem;
    animation: animacao-bottom 1.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
}

.link1-ctt:hover,
.link2-ctt:hover {
    transform: scale(0.8);
}

.link2-ctt {
    animation: animacao-top 1.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
}

.email-container {
    display: flex;
    margin-left: 10rem;
    margin-top: -8rem;
}

.btn-animation:hover {
    background-color: var(--primary-color);
}

.clicado1 {
    height: 5rem;
    width: 25rem;
    cursor: pointer;
    border-style: none;
    background-color: var(--button-contato-color);
    border-radius: 10px;
    color: rgb(0, 0, 0);
    transform: translate(0px, 0px);
    transition: width 0.5s ease-in-out, height 0.5s ease-in-out, border-radius 0.5s ease-in-out, transform 0.85s ease-in-out, background-color 0.5s ease-in-out;
    transition-delay: 0.5s, 0.5s, 0.5s, 0.2s, 0.6s;
}

.clicado2 {
    height: 4rem;
    width: 4rem;
    border-style: none;
    background: var(--button-contato-2-color);
    border-radius: 50%;
    cursor: pointer;
    transform: translate(300px, 10px);
    transition: width 0.5s ease-in-out, height 0.5s ease-in-out, border-radius 0.5s ease-in-out, transform 0.85s ease-in-out, background-color 0.5s ease-in-out;
    transition-delay: 0s, 0s, 0s, 0.3s, 0.1s;
}

#btntext {
    font-size: 1.5rem;
    display: block;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}

#seta {
    transform: translateY(-5px);
    display: none;
    font-size: 3rem;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: -12rem;
    margin-top: -15rem;
}

.form-name {
    display: none;
    opacity: 0;
    padding-left: 10px;
    height: 3rem;
    width: 25rem;
    background-color: transparent;
    border-bottom: 2px solid var(--form-name-color);
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    color: aliceblue;
    transition: opacity 0.5s ease-in-out;
}

.form-name:focus,
.form-email:focus,
.form-text:focus {
    outline: none;
    background-color: rgb(40, 40, 40);
}

.form-email {
    display: none;
    opacity: 0;
    padding-left: 10px;
    height: 3rem;
    color: #f0f8ff;
    background-color: transparent;
    border-bottom: 2px solid var(--form-email-color);
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    transition: opacity 0.5s ease-in-out;
}

.form-text {
    display: none;
    opacity: 0;
    color: rgb(240, 248, 255);
    padding: 10px;
    height: 5rem;
    background-color: transparent;
    resize: none;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    border-bottom: 2px solid var(--form-msg-color);
    transition: opacity 0.5s ease-in-out;
}

.form-btn {
    display: none;
    border-style: none;
    opacity: 0;
    color: var(--form-btn-color);
    padding: 1em 1.6em;
    background-color: transparent;
    border-radius: 0.3em;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: 0.5s;
    font-weight: 400;
    font-size: 17px;
    border: 1px solid;
    text-transform: uppercase;
    z-index: 1;
    height: 3rem;
    border-radius: 10px;
    transition: opacity 0.5s ease-in-out, color 0.3s ease-in-out;
}

.form-btn:hover {
    background-color: var(--form-btn-color);
    color: var(--form-btn-letter-color);
    filter: brightness(0.9);
}

@media screen and (max-width: 1000px) {
    #Contatos {
        height: 130vh;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .clicado2 {
        display: none;
    }

    .clicado1 {
        display: none;
    }

    .link-container-ctt {
        margin-top: 7rem;
        align-items: baseline;
        margin-left: 0;
    }

    form {
        gap: 20px;
        margin-top: 12rem;
        margin-left: -10rem;
        display: flex;
        align-items: center;
    }

    .form-name {
        display: flex;
        font-size: 1.2rem;
        width: 20rem;
        opacity: 1;
        padding-left: 10px;
    }

    .form-email {
        display: block;
        font-size: 1.2rem;
        padding-left: 10px;
        width: 20rem;
        opacity: 1;
    }

    .form-text {
        display: block;
        font-size: 1.2rem;
        width: 20rem;
        padding: 10px;
        opacity: 1;
    }

    .form-btn {
        display: block;
        font-size: 1.2rem;
        width: 20rem;
        opacity: 1;
    }

    .ctt-titulo {
        display: flex;
        align-items: center;
        margin-top: 10rem;
        font-size: 1.5rem;
    }

}
</style>

<script>

export default {
    name: 'ContatosVue',
    mounted() {

        const ttl = document.getElementById('ctttiulo');
        const btn = document.getElementById('btn-animation');
        const seta = document.getElementById('seta');
        const btntext = document.getElementById('btntext');
        const name = document.getElementById('form-name');
        const email = document.getElementById('form-email');
        const text = document.getElementById('form-text');
        const enviar = document.getElementById('form-btn');

        btn.addEventListener('click', () => {

            btn.classList.toggle('clicado2');
            btn.classList.remove('clicado1');
            ttl.classList.toggle('titulo-ctt');


            setTimeout(function () {

                seta.style.opacity = '1';
            }, 300);
            btntext.style.display = 'none';
            seta.style.display = 'block';



            if (btn.classList.contains('clicado2')) {

                setTimeout(function () {


                    name.style.display = 'block';
                    name.style.animation = 'longo-direita 0.6s ease-in-out';
                    name.style.opacity = '1';

                    email.style.display = 'block';
                    email.style.animation = 'longo-direita 0.8s ease-in-out';
                    email.style.opacity = '1';

                    text.style.display = 'block';
                    text.style.animation = 'longo-direita 1s ease-in-out';
                    text.style.opacity = '1';

                    enviar.style.display = 'block';
                    enviar.style.animation = 'longo-direita 1.2s ease-in-out';
                    enviar.style.opacity = '1';
                }, 500);

            } else {



                btn.classList.toggle('clicado1')



                name.style.animation = 'longo-esquerda 0.8s ease-in-out';

                email.style.animation = 'longo-esquerda 0.8s ease-in-out';

                text.style.animation = 'longo-esquerda 0.8s ease-in-out';

                enviar.style.animation = 'longo-esquerda 0.8s ease-in-out';

                setTimeout(function () {
                    name.style.display = 'none';
                    seta.style.display = 'none';
                    email.style.display = 'none';
                    text.style.display = 'none';
                    enviar.style.display = 'none';
                }, 640);

                setTimeout(function () {
                    btntext.style.display = 'block';
                }, 740);
            }

        })







    }
}



</script>