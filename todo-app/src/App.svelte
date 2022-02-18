<script>
	import {onMount} from 'svelte';
	let title = "";
	let description = "";
	import Todo from "../src/components/Todo.svelte";
	let todos = [];
	onMount(async() => {
		try {
			const resp = await fetch("http://localhost:3000");
			const json = await resp.json();
			const data = json.todos;
			todos = [...data];
		} catch (error) {
			console.error(error);
		}
	});
	const wipeTodos = async() => {
		try {
			const resp = await fetch("http://localhost:3000", {
				method: "DELETE"
			});
			const json = await resp.json();
			const data = json.todos;
			todos = [...data];
		} catch (error) {
			console.error(error);
		}
	};
	const addTodo = async()=>{
		try {
			const resp = await fetch("http://localhost:3000", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					title,
					description
				})
			});
			const json = await resp.json();
			console.log(json);
			title = "";
			description = "";
		} catch (error) {
			console.error(error);
		}
	};
</script>

<main class=" flex justify-center flex-col">
	<div>
		<input type="text" name="" bind:value={title}/>
	</div>
	<div>
		<textarea  bind:value={description}></textarea>
	</div>
	<div class=" p-3">
		<button on:click={addTodo} class=" bg-green-600 text-white px-4 py-2  rounded-full">Add Todo</button>
		<button on:click={wipeTodos} class=" bg-red-600 text-white px-4 py-2 rounded-full">Delete All Todos</button>

	</div>
	{#if todos}
	{#each todos as todo}
	<Todo todo={todo} />
	{/each}
	{/if}
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
  </style>