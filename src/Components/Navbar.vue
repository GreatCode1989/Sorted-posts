<template>
    <div class="navbar">
    <div class="left-1" @click="$router.push('/')">
    <b>Vue <span class="sp-1">3</span>  нажать сюда!</b> </div>
    
    <div class="navbar__btns">
    <my-button 
    @click="$router.push('/posts')"
    >Посты</my-button>
    <my-button 
    @click="$router.push('/about')" 
    >О сайте</my-button>
        </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: lightgrey;
    box-shadow: 3px 3px 4px grey;
    display: flex;
    align-items: center;
    padding: 0 15px;
    background-image: url('https://upload.wikimedia.org/wikipedia/ru/6/6b/%D0%9B%D0%B8%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BB%D0%B5%D1%81_%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B5%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%B9_%D1%80%D0%B0%D0%B2%D0%BD%D0%B8%D0%BD%D1%8B.jpg');
    background-position: center;
    background-repeat: repeat-x;
}
.navbar__btns {
    margin-left: auto;
}
.left-1 {
    color: rgb(228, 16, 150);
    font-size: 22px;
    margin-left: 30px;
    font-weight: 20px;
    text-shadow: 1px 1px 1px rgb(6, 61, 240);
}
.left-1:hover {
    color: rgb(3, 195, 254);
    cursor: pointer;
}
.sp-1 {
    color: aquamarine;
}

</style>