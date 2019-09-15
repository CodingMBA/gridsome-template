<template>
  <footer class="bg-blue-700 text-gray-300">
    <div class="container mx-auto flex items-center justify-between py-4">
      <div class="text-sm">
        Copyright {{ getCurrentYear }} -
        <a :href="href">iHs Retained Search</a>
      </div>
      <ul class="flex items-center">
        <li class="mr-8">
          <a href="https://www.instagram.com/ihsretainedsearch/">
            <font-awesome :icon="['fab', 'instagram']" class="text-lg" />
          </a>
        </li>
        <li class="mr-8">
          <a href="https://twitter.com/iHsrs">
            <font-awesome :icon="['fab', 'twitter']" class="text-lg" />
          </a>
        </li>
        <li class="mr-8">
          <a href="https://www.linkedin.com/company/ihs-professional-services/">
            <font-awesome :icon="['fab', 'linkedin']" class="text-lg" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      href: "https://www.ihsrs.com"
    };
  },
  computed: {
    getCurrentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
</style>