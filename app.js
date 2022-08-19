const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      inputGoal:'' 
    };
  },
  methods: {
    addGoal(){
      this.goals.push(this.inputGoal);
      this.inputGoal = '';
    }
  },
});

app.mount('#user-goals');
