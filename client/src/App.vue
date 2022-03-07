<template>
  <main id="main">
    <NavMenu />
    <MainSection>
      <UrlForm />
    </MainSection>
    <TopSection />
  </main>
</template>

<script>
import MainSection from '@/components/mainSection';
import UrlForm from '@/components/urlForm';
import TopSection from '@/components/topSection';
import NavMenu from '@/components/navMenu';

export default {
  name: 'App',
  components: {
    MainSection,
    UrlForm,
    TopSection,
    NavMenu,
  },
};
</script>

<style scoped>
#main {
  overflow-x: hidden;
}
</style>
