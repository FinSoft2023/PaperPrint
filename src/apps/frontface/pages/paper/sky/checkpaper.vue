<template>
    <main>
        <Papercheck>
            <div class="">
                <img class=""
                         src="https://f.ptcdn.info/960/053/000/ox84hg7beXawJvj64l5-o.jpg"
                         alt="Logo" />
             
           
            </div>
        </Papercheck>
    </main>
</template>

<script setup
        lang="ts">


        const { data } = await useFetch<any>('/api/job3');
</script>