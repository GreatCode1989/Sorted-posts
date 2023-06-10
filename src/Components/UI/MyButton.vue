<template>
    <button class="btn">
    <slot>
    </slot>
    </button>  
</template>

<script>

    export default {
      name: 'my-button'     
}
</script>

<style scoped>
    .btn {
        padding: 5px 10px;
        background-color: aqua;
        color: rgb(189, 17, 163);
        border: 2px solid rgb(187, 21, 187);
        margin-left: 10px;
    }
    .btn:hover {
        cursor: pointer;
        background-color: rgb(26, 255, 0);
    }
</style>