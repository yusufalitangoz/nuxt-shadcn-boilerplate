<script setup lang="ts">
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";

defineProps<{ links: Link[] }>();

const [DefineNavigationMenu, ReuseNavigationMenu] = createReusableTemplate();
</script>

<template>
  <DefineNavigationMenu>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem v-for="{ name, to } in links" :key="to">
          <NuxtLink :class="navigationMenuTriggerStyle()" :href="to">
            {{ name }}
          </NuxtLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </DefineNavigationMenu>
  <header class="fixed top-0 left-0 w-full py-3 bg-background border-b z-50">
    <section
      class="container flex justify-between [&>section]:flex [&>section]:gap-3"
    >
      <section>
        <Logo />
        <ReuseNavigationMenu class="hidden md:flex" />
      </section>
      <section>
        <slot />
        <Sheet>
          <SheetTrigger class="block md:hidden" as-child>
            <Button variant="outline" size="icon">
              <Icon name="ic:round-menu" size="20" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <ReuseNavigationMenu class="[&_ul]:flex-col [&_ul]:items-start" />
          </SheetContent>
        </Sheet>
      </section>
    </section>
  </header>
</template>
