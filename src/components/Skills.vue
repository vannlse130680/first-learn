<template>
  <div>
    <!-- {{ name }}
    {{test}} -->
    <!-- <button @click="handChangeName" :disabled="btnState" >Click to change course name</button> -->

    <form @submit.prevent="addSkill(skill)">

        <input
          type="text"
          placeholder="Import skill that you have.... kk"
          v-model="skill"
        />
        
  
      <input type="checkbox" name="" id="" v-model="checked" />
    </form>

    <!-- <button @click="addSkill(skill)">Add skill</button>
    {{ skill }} -->
    <div>
      <ul>
        <li v-for="(skill, index) in skills" :key="index" @click="$router.push(`skills/${skill.name}`)">{{ skill.name }}</li>
      </ul>

      <!-- <p v-if="skills.length >= 1"> tou have more than one skill</p>
        <p v-else>you have less than 1 skill</p> -->
      <p>These are the skill that you process</p>
    </div>
    <transition></transition>

    <!-- <div :class="color"></div>
    <button @click="changeColor">Change Color</button> -->
  </div>
</template>

<script>


export default {
  name: "Skills",
  props: {
    test: String,
  },
  
  data() {
    return {
      checked: false,
      skill: "",
      name: "VueJS Course",
      btnState: false,
      color: "red",
      skills: [{ name: "ReactJS" }, { name: "VueJS" }],
    };
  },
  methods: {
    handChangeName() {
      this.name = "ReacJS";
      this.btnState = !this.btnState;
      //   this.test = "con chim"
    },
    changeColor() {
      this.color = this.color === "red" ? "blue" : "red";
    },
    addSkill(data) {
      this.skills.push({ name: data });
      this.skill = "";
      console.log(this.checked);
    },
  },
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
.holder {
  background: #fff;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}
p {
  text-align: center;
  padding: 30px 0;
  color: gray;
  background-color: white;
}
.container {
  box-shadow: 0px 0px 40px lightgray;
}
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}
.alert-in-enter-active {
  animation: bounce-in 0.5s;
}
.alert-in-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
i {
  float: right;
  cursor: pointer;
}
</style>
