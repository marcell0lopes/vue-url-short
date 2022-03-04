<template>
  <main>
    <MainSection>
      <UrlForm />
    </MainSection>
    <TopSection />
  </main>
</template>

<script>
import MainSection from './components/mainSection.vue';
import UrlForm from './components/urlForm.vue';
import TopSection from './components/topSection.vue';

export default {
  name: 'App',
  components: {
    MainSection,
    UrlForm,
    TopSection,
  },
};
</script>
