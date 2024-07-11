<script setup lang="ts">
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";

const localePath = useLocalePath();
const links = [
  { name: "linkGroups.0.links.0", href: "/" },
  { name: "linkGroups.0.links.1", href: "/not-exist-page" },
];
</script>

<template>
  <header class="fixed top-0 left-0 w-full py-3 bg-background border-b z-50">
    <nav class="container flex justify-between">
      <section class="flex items-center gap-5">
        <Logo />
        <NavigationMenu class="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem v-for="{ name, href } in links" :key="href">
              <NuxtLink
                :class="navigationMenuTriggerStyle()"
                :href="localePath(href)"
              >
                {{ $t(name) }}
              </NuxtLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>
      <section class="flex items-center gap-3">
        <LangSwitcher />
        <ColorModeToggle />
        <Sheet>
          <SheetTrigger class="block md:hidden" as-child>
            <Button variant="outline" size="icon">
              <Icon name="ic:round-menu" size="20" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                <NavigationMenu>
                  <NavigationMenuList class="grid place-items-start">
                    <NavigationMenuItem
                      v-for="{ name, href } in links"
                      :key="href"
                    >
                      <NuxtLink
                        :class="navigationMenuTriggerStyle()"
                        :href="localePath(href)"
                      >
                        {{ $t(name) }}
                      </NuxtLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>
    </nav>
  </header>
</template>
