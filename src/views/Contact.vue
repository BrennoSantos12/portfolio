<script setup lang="ts">
import { onMounted } from "vue"

const contacts: { label: string; value: string; link: string; download?: boolean }[] = [
  { label: "EMAIL", value: "brennoantonio1221@gmail.com", link: "mailto:brennoantonio1221@gmail.com" },
  { label: "TELEFONE", value: "(65) 98446-4042", link: "tel:+5565984464042" },
  { label: "LOCALIZAÇÃO", value: "Cuiabá / MT", link: "" },
  { label: "CURRÍCULO", value: "DOWNLOAD CV", link: "/CV- Brenno Santos.pdf", download: true },
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

  document.querySelectorAll(".contact-reveal").forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="min-h-screen flex flex-col justify-center text-white font-oswald px-8 md:px-16 gap-12 pb-16">
    <h1 class="contact-reveal text-6xl md:text-8xl font-extrabold">
      ENTRE EM <span class="text-amber-400">CONTATO</span>
    </h1>

    <div class="flex flex-col gap-0">
      <component :is="contact.link ? 'a' : 'div'" v-for="(contact, i) in contacts" :key="contact.label"
        v-bind="contact.link ? { href: contact.link, target: '_blank', rel: 'noopener noreferrer', ...(contact.download ? { download: '' } : {}) } : {}"
        class="contact-reveal group border-t border-white/20 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-amber-400 transition-colors duration-300"
        :style="{ transitionDelay: `${i * 80}ms` }">
        <span class="text-lg text-white/40 group-hover:text-amber-400 transition-colors duration-300">
          {{ contact.label }}
        </span>
        <div class="bloco">
          <span class="text-up text-3xl md:text-4xl font-bold">{{ contact.value }}</span>
          <span class="text-bt text-3xl md:text-4xl font-bold text-amber-400">{{ contact.value }}</span>

        </div>
      </component>

      <div class="contact-reveal border-t border-white/20"></div>
    </div>

    <p class="contact-reveal text-white/30 text-lg">
      © {{ new Date().getFullYear() }} Brenno Santos. Todos os direitos reservados.
    </p>
  </div>
</template>

<style scoped>
.contact-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.contact-reveal.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
