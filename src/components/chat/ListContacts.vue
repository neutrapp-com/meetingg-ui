<template>
<div class="contact-list">
    <h2 class="title">{{ title }}</h2>

    <ul class="list">
        <li v-for="contact in getContacts" :key="contact.id">
            <contact v-bind="contact" />
        </li>
    </ul>
</div>
</template>

<script>
import Contact from "./Contact.vue"

export default {
    components: {
        Contact
    },
    props: {
        title: {
            default: 'Title',
            type: String
        },
        contacts: {
            default: () => {
                let x = 0;
                return [{
                        id: x++,
                        avatar: 'https://i.pravatar.cc/150?i=' + x,
                        fullname: 'Louis Torton',
                        active : false,
                    },
                    {
                        id: x++,
                        avatar: 'https://i.pravatar.cc/150?i=' + x,
                        fullname: 'Jhon Doe',
                        active : true,
                    },
                    {
                        id: x++,
                        avatar: 'https://i.pravatar.cc/150?i=' + x,
                        fullname: 'Yassine Rais',
                        active : false,
                    },
                ]
            },
            type: Array
        },
    },
    computed: {
        getContacts() {
            return this.contacts;
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-list{
    @apply text-white  p-4  rounded-2xl;

    .title{
        @apply  ml-4 text-3xl font-semibold;
    }

    .list li {
        @apply my-1;
    }
}
</style>
