<script lang="ts">
  const lista = [
    { nome: 'Douglas', idade: 32 },
    { nome: 'Elaine', idade: 25 },
    { nome: 'Osvaldo', idade: 5 },
  ]
</script>

<h1>Home</h1>
{#each lista as { nome, idade }}
  <p>{nome} tem {idade} anos</p>
{/each}
