<template>
    <div class="wrapper">
        <h2 class="header">{{title}}</h2>
        <div class="input-container">
            <input class="input" v-model="newName" @keyup="onKey" @change="onChange"/>
            <button class="button" @click="onInsertName">ADD</button>
        </div>
        <div class="names">
            <ol>
                <name
                    v-for="name in names"
                    v-bind:name="name"
                    v-bind:key="name"
                ></name>
            </ol>
        </div>
    </div>
    
</template>

<script>
import Name from './components/Name.vue'

export default {
    name: 'test',
    components: {
        Name
    },
    methods: {
        onInsertName: insertName,
        onChange: changeName,
        onKey: keyUp
    },
    data() {
        return {
            title: "Some cool people to know.",
            names: [
                "Alan",
                "Naomi",
                "Arthur"
            ],
            newName: ""
        }
    },
}

function insertName() {
    this.names.push(this.newName);
    this.newName = ""
}

function changeName(e) {
}

/**
 * 
 * @param {KeyboardEvent} e
 */
function keyUp(e) {
    if (e.key === 'Enter') {
        this.onInsertName()
    }
}
</script>

<style>
.wrapper {
    display: grid;
    grid-template-columns: 3fr 2fr 1fr;
    grid-template-rows: 60px minmax(100px, 4fr) 100px;
    gap: 20px;
    margin: 20px;
    border: 2px solid rgba(100,100,180, .4);
}
.names {
    grid-column: 1/3;
    grid-row: 2/3;
}
.name {

}
.input-container {
    display: flex;
    height: 50px;
    flex-direction: row;
}
.input {
    margin: 5px;
    border-radius: 5px;
    padding: 10px;
}
.button {
    margin: 5px;
    font-weight: bold;
    border-radius: 5px;
    background-color: rgba(145,160,200, .8);
}

div {
    background-color: rgba(10,10,100, .05);
}
</style>