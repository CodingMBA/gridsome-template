<template>
  <Layout>
    <div class="text-center bg-cover bg-center bg-no-repeat home-container">
      <div class="container-lg pt-20">
        <h1 class="text-5xl text-white leading-loose mb-5">Manifesting Excellence</h1>
        <div class="text-white text-xl leading-loose">
          <p>
            Many candidates look good on paper, but few will
            <strong>manifest excellence</strong>.
          </p>
          <p>iHs collaborates with you to discover, acquire, and develop leaders.</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

<style>
.home-container {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.5)
    ),
    url("~@/assets/images/hero.jpg");
  height: calc(100vh - 146px);
}
</style>
