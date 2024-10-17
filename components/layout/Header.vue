<script setup lang="ts">
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
import type { LocaleObject } from "@nuxtjs/i18n";

defineProps<{
  availableLocales: LocaleObject[];
  colorMode: string;
  links: Link[];
}>();

defineEmits<{
  (e: "update:colorMode", value: string): void;
}>();

const [DefineNavigationMenu, ReuseNavigationMenu] = createReusableTemplate();

const colorModeIcons = new Map<string, string>([
  ["system", "lucide:monitor"],
  ["dark", "lucide:moon"],
  ["light", "lucide:sun"],
]);
</script>

<template>
  <DefineNavigationMenu>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem v-for="{ name, to } in links" :key="to">
          <NuxtLink :class="navigationMenuTriggerStyle()" :to="to">
            {{ name }}
          </NuxtLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </DefineNavigationMenu>
  <header class="fixed top-0 left-0 w-full py-3 bg-background border-b z-50">
    <section
      class="container flex justify-between [&>div]:flex [&>div]:items-center [&>div]:gap-3"
    >
      <div>
        <Logo />
        <ReuseNavigationMenu class="hidden md:flex" />
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button size="icon" variant="outline">
              <Icon name="lucide:globe" size="18" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              v-for="{ code, name } in availableLocales"
              :key="code"
              as-child
            >
              <NuxtLink :to="code">
                {{ name }}
              </NuxtLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button size="icon" variant="outline">
              <ClientOnly>
                <Icon :name="colorModeIcons.get(colorMode)!" size="18" />
              </ClientOnly>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem @click="$emit('update:colorMode', 'light')">
              {{ $t("colorMode.light") }}
            </DropdownMenuItem>
            <DropdownMenuItem @click="$emit('update:colorMode', 'dark')">
              {{ $t("colorMode.dark") }}
            </DropdownMenuItem>
            <DropdownMenuItem @click="$emit('update:colorMode', 'system')">
              {{ $t("colorMode.system") }}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Sheet>
          <SheetTrigger class="flex md:hidden" as-child>
            <Button variant="outline" size="icon">
              <Icon name="lucide:menu" size="20" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <ReuseNavigationMenu class="[&_ul]:flex-col [&_ul]:items-start" />
          </SheetContent>
        </Sheet>
      </div>
    </section>
  </header>
</template>
