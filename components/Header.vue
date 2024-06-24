<script setup lang="ts">
const localePath = useLocalePath();
const links = [
  { name: "header.links.0", href: "/" },
  { name: "header.links.1", href: "/not-exist-page" },
];
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full py-3 bg-zinc-100 dark:bg-black border-b-[1px] z-50"
  >
    <nav class="container flex justify-between">
      <section class="flex items-center gap-5">
        <Logo />
        <ul class="hidden md:flex gap-5">
          <li v-for="{ name, href } in links" :key="name">
            <NuxtLink :to="localePath(href)">
              {{ $t(name) }}
            </NuxtLink>
          </li>
        </ul>
      </section>
      <section class="flex items-center gap-3">
        <LangSwitcher />
        <ColorModeToggle />
        <Sheet>
          <SheetTrigger class="block md:hidden">
            <Button variant="outline" size="icon">
              <Icon name="ic:round-menu" size="20" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <ul class="grid gap-5 mt-10">
                  <li v-for="{ name, href } in links" :key="name">
                    <NuxtLink :to="localePath(href)">
                      {{ $t(name) }}
                    </NuxtLink>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>
    </nav>
  </header>
</template>
