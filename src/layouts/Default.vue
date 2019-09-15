<template>
  <div class="font-sans text-gray-800 leading-normal flex flex-col min-h-screen">
    <header class="bg-blue-700 py-5 text-gray-300 text-lg">
      <nav class="mx-auto flex justify-between items-center px-5">
        <g-link exact to="/">
          <g-image class="h-auto w-2/5" src="../assets/images/iHsrs-logo.png" alt="iHsrs logo" />
        </g-link>
        <g-link class="hover:text-white" to="/about">About</g-link>
        <g-link class="hover:text-white" to="/process">Process</g-link>
        <g-link class="hover:text-white" to="/practice">Practices</g-link>
        <g-link class="hover:text-white" to="/candidates">Candidates</g-link>
        <g-link class="hover:text-white" to="/blog">Blog</g-link>
        <g-link class="hover:text-white" to="/contact">Contact</g-link>
      </nav>
    </header>
    <div class="flex-grow">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>

<style src="../main.css">
</style>
