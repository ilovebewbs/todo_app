<script>
    export let todo;
    const handleDelete = async(id) => {
        try {
            const resp = await fetch(`http://localhost:3000/${id}`,{method:"delete"});
            if(resp.status !== 200){
                console.log("some shit happened");
            }

        } catch (error) {
            console.error(error.message);
        }

    };
</script>

<main >
    <div>
      <h4>
        {todo.title}
      </h4>
      <p>
        {todo.description}
      </p>
      <button on:click={handleDelete(todo._id)}>
        Delete
      </button>
    </div>
</main>

<style>

</style>