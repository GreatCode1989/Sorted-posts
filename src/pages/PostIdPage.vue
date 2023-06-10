<template>
    <div class="post-container">
      <h1 class="par-1">Пост с ID = {{ $route.params.id }}</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.par-1 {
  color: antiquewhite;
  font-size: 40px;
  text-shadow: 3px 3px 3px rgb(11, 152, 239)
  }
  .post-container {
  display: flex;
  align-items: center; /* Выравнивание по вертикали */
  justify-content: center; /* Выравнивание по горизонтали */
  background-image: url('https://static.dw.com/image/38827896_605.jpg');
  height: 84vh;
}
</style>