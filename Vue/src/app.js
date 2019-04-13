import Vue from 'vue'
import Test from 'test.vue'

// create a root instance
let app = new Vue({
  	el: '#app',
  	components: {
  		Test
  	},
  	template: `
  		<div>
			<!-- <h2 class="inline-header">{{message}}</h2> <span><a :href="link.href">{{link.title}}</a></span> -->
			<test></test>
		</div>`,
	data() {
		return {
			message: 'Test vue.js',
			link: {
				title: 'vue.js site',
				href: 'https://vuejs.org/'
			}
		}
	}
})