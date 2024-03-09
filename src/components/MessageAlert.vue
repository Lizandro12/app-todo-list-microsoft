<template>
    <div class="message__container">
        <p>{{ msg }}</p>
    </div>
</template>


<script>

export default {
    name: "MessageAlert",
    props: {
        msg: String
    }
}

</script>

<style scoped>

.message__container{
    color: #ffff;
    background-color: #f44336;
    border-radius: 5px;
    padding: 15px;
    max-width: 400px;
    position: absolute;
    right: 30px;
    animation: fade-down 0.5s;
    bottom: 100px;
}

@keyframes fade-down {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }

    100% {
        opacity: 1;
        transform: translateY(-8px);
    }
}
</style>