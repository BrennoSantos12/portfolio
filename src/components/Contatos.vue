<template>

<div class="email-container">

    <button class="btn-animation" id="btn-animation"><h1 id="btntext">Me envie um email</h1><p id="seta">&larr;</p></button>

   <div class="form-container">
    <form action="https://api.staticforms.xyz/submit" method="post" id="form">
        <input type="text" name="name" placeholder="Your Name" class="form-name" id="form-name">
        <input type="text" name="email" placeholder="Your Email" class="form-email" id="form-email"/>
        <textarea name="message" class="form-text" id="form-text"></textarea>
        <input type="hidden" name="accessKey" value="349b3fc4-8b6b-4d99-9597-8a8a6ff07a20">
        <input type="hidden" name="redirectTo" value="http://192.168.15.60:8080/">
        <input type="submit" value="Submit" class="form-btn" id="form-btn" />
    </form>
</div>

</div>


</template>

<style>

#Contatos {
    background-color: rgb(26, 23, 28);
    height: 80vh;
    display: flex;
}
.email-container {
    display: flex;
    align-items: center;
}
.btn-animation {
  margin-left: 5rem;
  height: 5rem;
  width: 12rem;
  background-color: rgb(91, 91, 91);
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
}
.btn-animation:hover {
    background-color: rebeccapurple;
}
.clicado {

    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    transform: translate(350px, 125px);
    transition: width 0.5s ease-in-out, border-radius 0.5s ease-in-out, transform 0.85s ease-in-out;
    transition-delay: 0s, 0s, 0.2s;
}
#btntext {
    font-size: 1rem;
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
.clicado2 {
    margin-left: 5rem;
    height: 5rem;
    width: 12rem;
    border-radius: 10px;
    color: rgb(0, 0, 0);
    transform: translate(0px, 0px);
    transition: width 0.5s ease-in-out, border-radius 0.5s ease-in-out, transform 0.85s ease-in-out;
    transition-delay: 0.5s, 0.5s, 0.1s;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: -5rem;
}
.form-name {
    display: none;
    opacity: 0;
    height: 3rem;
    width: 20rem;
    border-radius: 5px;
    background-color: rgb(61, 61, 61);
    border-style: none;
    transition: opacity 0.5s ease-in-out;
}
.form-email {
    display: none;
    opacity: 0;
    height: 3rem;
    border-radius: 5px;
    background-color: rgb(61, 61, 61);
    border-style: none;
    transition: opacity 0.5s ease-in-out;
}
.form-text {
    display: none;
    opacity: 0;
    height: 10rem;
    border-radius: 5px;
    background-color: rgb(61, 61, 61);
    border-style: none;
    transition: opacity 0.5s ease-in-out;
}
.form-btn {
    display: none;
    opacity: 0;
    background-color: rgb(15, 120, 15);
    height: 3rem;
    border-radius: 10px;
    transition: opacity 0.5s ease-in-out;
}


@keyframes longo-direita {
    0% {opacity: 0;
        transform: translateX(-350px);}
        50% {opacity: 0.5; }
        100% {opacity: 1;}
}
@keyframes longo-esquerda {
    0% {opacity: 1;
        transform: translateX(0px);}
        50% {opacity: 0.5; }
        100% {opacity: 0;
 transform:  translateX(-450px);}
}






</style>

<script>
 
 export default {
    name: 'ContatosVue',
    mounted() {
      
     const btn = document.getElementById('btn-animation');
     const seta = document.getElementById('seta');
     const btntext = document.getElementById('btntext');
     const name = document.getElementById('form-name');
     const email = document.getElementById('form-email');
     const text = document.getElementById('form-text');
     const enviar = document.getElementById('form-btn');
   
     btn.addEventListener('click', () => {

        btn.classList.toggle('clicado');
        btn.classList.remove('clicado2');

        setTimeout( function()  { 
            
             seta.style.opacity = '1';
        }, 300);
        btntext.style.display = 'none';
        seta.style.display = 'block';
      

       
        if (btn.classList.contains('clicado')) {
   
            setTimeout( function()  {


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


            
            btn.classList.toggle('clicado2')

               
               
                  name.style.animation = 'longo-esquerda 0.7s ease-in-out';

                  email.style.animation = 'longo-esquerda 0.8s ease-in-out';

                  text.style.animation = 'longo-esquerda 1s ease-in-out';

                  enviar.style.animation = 'longo-esquerda 1.1s ease-in-out';

                  setTimeout( function()  {
                    name.style.display = 'none';
                    seta.style.display = 'none';
                  }, 670);

                    setTimeout( function()  {
                        
                        email.style.display = 'none';
                        text.style.display = 'none';
                        enviar.style.display = 'none';
                    }, 680);


                     setTimeout( function()  {

                        btntext.style.display = 'block';
                     }, 800);
        }

     }) 
     
 





    }
 }



</script>