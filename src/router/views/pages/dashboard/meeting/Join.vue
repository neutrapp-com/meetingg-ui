<template>
	<div class="flex flex-col flex-wrap justify-center w-full divide-x divide-light divide-opacity-5">
        <div class="flex justify-center mb-4 scroll">
            <input type="text" id="room" pattern="[0-9 ]" required>
        </div>
        <div class="flex justify-center mt-4 scroll">
            <button><a href="">Rejoindre le Meeting</a></button>
        </div>
    </div>
</template>

<style scoped lang="scss">
    input {
        background-color: #313647;
        text-align: center;
        height: 100px;
        width: 350px;
        font-size: 3em;
    }

    button {
        font-size: 2em;
    }
</style>