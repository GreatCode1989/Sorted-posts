<template>
    <select class="opt-1" v-model="modelValue" @change="changeOption">

    <option class="opt-1" disabled value="">Выбирите из списка</option>

    <option 
        v-for="option in options" 
        :key="option.value" 
        :value="option.value"
        >
        {{option.name}}
    </option>

    </select>
</template>

<script>
    export default {
        name: 'my-select',
        props: {
            modelValue: {
                type: String
            },
            options: {
                type: Array,
                default: () => []
        }
        },
        methods: {
                changeOption(event) {
                    this.$emit('update:modelValue', event.target.value)
                }
        },
    }
</script>

<style scoped>
.opt-1 {
    color: rgb(120, 15, 219);
    background-color: rgb(25, 221, 156);
}
</style>