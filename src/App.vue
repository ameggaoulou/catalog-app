<template>
  <div>
    <AppHeader />
    <AppHero />
    <AppCatalog />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppHero from '@/components/AppHero.vue';
import AppCatalog from '@/components/AppCatalog.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppHero,
    AppCatalog,
    AppFooter,
  },
};
</script>

<style>
/* Add global styles here */
</style>