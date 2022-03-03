<template>
  <MainSection>
    <UrlForm />
  </MainSection>
</template>

<script>
import MainSection from './components/mainSection.vue';
import UrlForm from './components/urlForm.vue';

export default {
  name: 'App',
  components: {
    MainSection,
    UrlForm,
  },
};
</script>
