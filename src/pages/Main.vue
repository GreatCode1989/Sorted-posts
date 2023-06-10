<template>
    <div class="container" >
<h1 class="h-1">Перейдите по ссылке ниже!</h1>

<div class="image-wrapper">
      <img class="img-1" src="https://st.depositphotos.com/1557478/4265/i/600/depositphotos_42651537-stock-photo-autumn-forest-trees-nature-green.jpg" alt="Картинка">
      <div class="links">
        <router-link to="About" class="custom-link">О сайте</router-link>
        <router-link to="Posts" class="custom-link1">Список постов</router-link>
      </div>
    </div>
  </div>
</template>

<script>


    export default {
        
    }
</script>

<style scoped>
.h-1 {
    color: rgb(233, 15, 102);
    margin: 5px;
    margin-left: 80px;
    text-shadow: 3px 4px 1px rgba(7, 42, 243, 0.5);
}
.custom-link {
    margin: 80px;
    color: rgb(240, 13, 191); /* Исходный цвет текста */
    text-decoration: underline; /* Убираем подчеркивание */
    font-size: 21px;
  }

  .custom-link:hover {
    color: red; /* Цвет текста при наведении */
  }
  .custom-link1 {
    margin: 15px;
    font-size: 21px;
    color: rgb(251, 3, 156); /* Исходный цвет текста */
    text-decoration: underline; /* Убираем подчеркивание */
  }

  .custom-link1:hover {
    color: rgb(0, 200, 255); /* Цвет текста при наведении */
  }
  .custom-link:hover {
    color: rgb(0, 200, 255); /* Цвет текста при наведении */
  }
  .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background-image: url("https://img2.akspic.ru/crops/2/5/4/4452/4452-prirodnyj_zapovednik-gory-dikaya_mestnost-nebo-priroda-1920x1080.jpg");
  background-size: cover;
  background-position: center;
}
.image-wrapper {
  position: relative;
  width: 100%;
}

.links {
  position: absolute;
  bottom: 200px;
  left: 50%;
  transform: translateX(-50%);
}
.img-1 {
    margin-left: 330px;
}
</style>