<template>
    <div class="container">
     <h1 class="h-1"><span class="wel-com">Добро пожаловать во</span> Vue3!!</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.h-1 {
    color: rgb(8, 245, 24);
    margin-left: 370px;
    font-size: 40px;
    text-shadow: 5px 3px 3px rgba(15, 15, 207, 1);
}
.wel-com {
    color: rgb(234, 82, 17);
    text-shadow: 5px 3px 3px rgba(15, 15, 207, 1);
}
.container {
  background-image: url('https://travel.24tv.ua/resources/photos/news/202103/1573784.jpg?v=1661264155000'); /* Укажите путь к вашей картинке */
  background-size: cover; /* Растянуть картинку на весь фон */
   /* Выравнивание картинки по центру */
  background-repeat: no-repeat; /* Запретить повторение картинки */
  height: 84vh; /* Задать высоту блока, чтобы картинка занимала весь экран */
}
</style>