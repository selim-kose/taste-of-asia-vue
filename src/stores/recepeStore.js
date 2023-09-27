import { defineStore } from 'pinia'


export const useRecepeStore = defineStore('recepeStore', {
    recipe: () => ({
        tasks: [],
        // loading: false
        
    }),
    actions: {
      async getTasks(){
        // this.loading = true;

        const res = await fetch('https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes');
        const data = await res.json();

        this.tasks = data;
        // this.loading = false;
        console.log(data)
        console.log(this.tasks)
      },
        deleteTask(id) {
            this.tasks = this.tasks.filter(t => t.id !== id)
        },
        addTask(task) {
            this.tasks.push(task)
            console.log(this.tasks)
        }
    }
})