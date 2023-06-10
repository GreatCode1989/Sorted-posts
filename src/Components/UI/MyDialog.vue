<template>
    <div class="dialog" v-if="show" @click.stop="hideDialog">
        <div @click.stop class="dialog__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
    name: 'my-dialog',
    mixins: [toggleMixin]
}
</script>

<style scoped>
.dialog {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        position: fixed;
        background: rgba(13, 107, 215, 0.5);
        display: flex;
        color: rgb(199, 25, 218);
        font-size: 21px;
        text-shadow: 2px 2px 3px rgba(5, 252, 91, 1);
    }
.dialog__content {
        margin: auto;
        background: rgb(0, 202, 253);
        border-radius: 15px;
        min-height: 50px;
        min-width: 300px;
        padding: 20px;
}
</style>