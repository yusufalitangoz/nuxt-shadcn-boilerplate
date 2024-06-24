<script setup lang="ts">
const linkGroups = [
  {
    title: "linkGroups.0.title",
    links: [
      { name: "linkGroups.0.links.0", href: "/" },
      { name: "linkGroups.0.links.1", href: "/not-exist-page" },
    ],
  },
];
const socials = [
  {
    icon: "prime:twitter",
    href: "https://www.twitter.com",
  },
  {
    icon: "bi:instagram",
    href: "https://www.instagram.com",
  },
  {
    icon: "bi:linkedin",
    href: "https://www.linkedin.com",
  },
];
</script>

<template>
  <footer class="bg-zinc-100 dark:bg-black border-t-[1px] w-full">
    <section class="container p-10 grid md:grid-cols-2 gap-10">
      <section class="flex flex-col gap-2 place-items-start">
        <Logo />
        <p class="text-sm">
          {{ $t("footer.description") }}
        </p>
        <section class="flex flex-wrap gap-2">
          <NuxtLink
            v-for="{ icon, href } in socials"
            :key="icon"
            target="_blank"
            :to="href"
          >
            <Icon :name="icon" size="17" />
          </NuxtLink>
        </section>
      </section>
      <section class="flex flex-wrap gap-10 md:justify-end">
        <ul v-for="{ title, links } in linkGroups" :key="title">
          <h1 class="font-semibold mb-2">{{ $t(title) }}</h1>
          <li v-for="{ href, name } in links" :key="name" class="text-sm">
            <NuxtLink :to="href">{{ $t(name) }}</NuxtLink>
          </li>
        </ul>
      </section>
    </section>
  </footer>
</template>
