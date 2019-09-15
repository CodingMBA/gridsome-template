<template>
  <Layout>
    <div class="text-center bg-cover bg-center bg-no-repeat home-container">
      <div class="container-lg pt-16">
        <h1 class="text-5xl text-white leading-loose mb-5">Manifesting Excellence</h1>
        <div class="text-white text-xl leading-loose mb-5">
          <p>
            Many candidates look good on paper, but few will
            <strong>manifest excellence</strong>.
          </p>
          <p>iHs collaborates with you to discover, acquire, and develop leaders.</p>
        </div>
        <div class="w-full max-w-sm mx-auto mt-20">
          <form class="shadow-md rounded px-8 pt-4 pb-8 mb-4 form-bg">
            <div class="mb-4">
              <div
                class="text-gray-700 text-xl font-bold mb-6 pb-2 border-b"
              >Find Out How We Can Help</div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Full Name</label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder
              />
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Email Address</label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="email"
                placeholder
              />
            </div>
            <div class="flex items-center justify-center">
              <button
                class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >Submit</button>
            </div>
          </form>
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
.form-bg {
  background: rgb(255, 255, 255, 0.8);
}
</style>
