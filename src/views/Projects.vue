<script setup lang="ts">
import { onMounted } from "vue"

const projects = [
  {
    name: "MEU BOLSO",
    desc: "Aplicação fullstack de controle financeiro pessoal. Frontend em Vue.js, backend com FastAPI e banco PostgreSQL, rodando em servidor Arch com Cloudflare.",
    techs: ["Vue.js", "FastAPI", "PostgreSQL", "Docker"],
    link: "https://github.com/BrennoSantos12/meu_bolso",
  },
  {
    name: "ACADEMIA",
    desc: "Sistema fullstack de gestão para academia. Cadastro de alunos e controle de treinos com frontend Vue.js, API FastAPI e banco PostgreSQL dockerizado.",
    techs: ["Vue.js", "FastAPI", "PostgreSQL", "Docker"],
    link: "https://github.com/BrennoSantos12/gym-api",
  },
  {
    name: "OM ADVOGADOS",
    desc: "Site institucional para escritório de advocacia. Apresentação dos serviços, equipe e área de contato, com design sóbrio e profissional.",
    techs: ["Vue.js", "Tailwind"],
    link: "https://omadvogados.netlify.app",
  },
  {
    name: "PHOTOGRAPHER",
    desc: "Portfólio para fotógrafo com galeria de imagens e layout editorial. Foco em apresentação visual e responsividade.",
    techs: ["Vue.js", "Tailwind"],
    link: "https://caudasphotographer.netlify.app",
  },
  {
    name: "FBT Music API",
    desc: "Api de músicas Self-hosting com foco em armazenar suas músicas no seu próprio servidor e envia-las para o app FBT Flutter e escutar de forma offline",
    techs: ["Python", "FastAPI", "yt-dlp", ""],
    link: "https://github.com/BrennoSantos12/fbt_music_api",
  },
  {
    name: "FBT Music Flutter",
    desc: "App Flutter que envia as requisições para a API, armazena no celular e permite o usuário escutar músicas de forma Offline",
    techs: ["Flutter", "Dart"],
    link: "https://github.com/BrennoSantos12/fbt_flutter.git",
  },
  {
    name: "FBT Music Web",
    desc: "Versão Web do FBT para escutar músicas com internet sem precisar baixar nada",
    techs: ["Vue.js", "Typescript", "Tailwind", "Axios", "Pinia", "Vee-validate", "Zod", "vue-router", "Vite"],
    link: "https://github.com/BrennoSantos12/fbt_vue.git",
  },
  {
    name: "Server status API",
    desc: "API para monitoramento de servidores linux com docker e tailscale",
    techs: ["Python", "FastAPI", "subprocess"],
    link: "https://github.com/BrennoSantos12/server_status_api.git",
  },
  {
    name: "Server status Web",
    desc: "Frontend do server_status_api, responsavel por exibir as informações coletadas da API",
    techs: ["Vue.js", "Typescript", "Tailwind", "Axios", "Pinia", "Vuetify", "vue-router", "Vite"],
    link: "https://github.com/BrennoSantos12/server_status_frontend.git",
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        } else {
          entry.target.classList.remove("show")
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll(".proj-reveal").forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="min-h-[150vh] flex flex-col justify-center text-white font-oswald px-8 md:px-16 gap-12 pb-24">
    <h1 class="proj-reveal text-6xl md:text-8xl font-extrabold">
      MEUS <span class="text-amber-400">PROJETOS</span>
    </h1>

    <div class="flex flex-col gap-0">
      <component :is="project.link ? 'a' : 'div'" v-for="(project, i) in projects" :key="project.name"
        v-bind="project.link ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' } : {}"
        class="proj-reveal group border-t border-white/20 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:border-amber-400 transition-colors duration-300"
        :style="{ transitionDelay: `${i * 80}ms` }">
        <div class="flex flex-col gap-2 md:w-[55%]">
          <div class="bloco">
            <span class="text-up text-5xl md:text-6xl font-extrabold">{{ project.name }}</span>
            <span class="text-bt text-5xl md:text-6xl font-extrabold text-amber-400">{{ project.name }}</span>
          </div>
          <p
            class="text-xl text-white/60 font-light leading-snug group-hover:text-white/80 transition-colors duration-300">
            {{ project.desc }}
          </p>
        </div>

        <div class="flex flex-wrap gap-2 md:justify-end">
          <span v-for="tech in project.techs" :key="tech"
            class="border border-white/30 text-white/60 text-lg px-3 py-0.5 group-hover:border-amber-400 group-hover:text-amber-400 transition-colors duration-300">
            {{ tech }}
          </span>
        </div>

        <span
          class="hidden md:block text-4xl text-white/30 group-hover:text-amber-400 group-hover:translate-x-2 transition-all duration-300">
          →
        </span>
      </component>

      <div class="proj-reveal border-t border-white/20"></div>
    </div>
  </div>
</template>

<style scoped>
.proj-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.proj-reveal.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
