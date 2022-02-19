<template>
  <div class="spot">
    <img :src="img" alt="mamma"/>
    <div>
      <h3 class="title">{{ name }}</h3>
      <p class="location">{{ location }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      img: {
        type: String,
        required:true
      }
    }
  }
</script>

<style scoped>
.spot {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1.125rem 1rem;
  border-bottom: 1px solid #dadada;
}
.spot img {
  max-width: 5.625rem;
}
.location {
  font-size: 0.875rem;
  color: var(--text-primary);
  line-height: 1rem;
  margin-top: 0.5rem;
}
</style>